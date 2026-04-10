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
const TOKYO_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Tokyo Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",   emoji: "⛩️", label: "Landmark & Cultural Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍜",  label: "Where to Eat" },
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
          href: `mailto:?subject=Tokyo 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Tokyo in 5 Days — neon, temples, ramen and the world's best metro&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/tokyo-5-days"
        imageUrl="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80"
        description="Tokyo in 5 Days: Shibuya Crossing, Senso-ji, Tsukiji Market, teamLab Borderless, Golden Gai and day trips — complete travel guide with budget breakdown."
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
export default function TokyoClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOKYO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Tokyo" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="tokyo shibuya crossing neon lights japan night cityscape"
            fallback="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&q=80"
            alt="Tokyo Shibuya Crossing neon lights at night with crowds crossing the intersection"
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
              <span className="text-white/70">Tokyo 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  City &amp; Culture
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Tokyo in 5 Days:
                <em className="italic text-amber-300"> Neon, Temples, Ramen &amp; the World&apos;s Best Metro</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Shibuya Crossing at midnight, Senso-ji at dawn, standing sushi in Tsukiji, Golden Gai bar crawls, and a day trip to Kamakura. The complete guide with real prices in yen.
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
              <span>🇯🇵 Japan</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From ¥8,000/day ($53)</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Shibuya Crossing at midnight when the neon reflects off wet pavement &mdash; this is the Tokyo they promised you and it delivers. But most first-timers waste two days being confused by the metro, overpay for everything, and miss entire neighbourhoods. This guide fixes all of that.
            </p>
          </blockquote>

          {/* ── WHAT TOKYO ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Tokyo Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Tokyo is the largest metropolitan area on earth &mdash; 37 million people across a sprawl that never quite ends. It is simultaneously the most futuristic and the most traditional city you will visit. A 7th-century Buddhist temple sits across the street from a building covered in animated billboards. A Michelin-starred sushi counter operates inside a basement that looks like someone&apos;s storage closet. A convenience store onigiri at 2am is a genuine culinary experience.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What catches most first-timers off guard is how quiet Tokyo actually is. For a city this large, the trains run in near-silence, nobody talks on their phone in public, and entire neighbourhoods feel like small towns. The contrast between Shibuya&apos;s sensory overload and a side street in Yanaka &mdash; where a cat sleeps on a temple wall and an old man sweeps his shop front &mdash; is the real Tokyo experience.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The metro system is the backbone of everything. It looks overwhelming on the map but works with absolute precision. Get a Suica card at the airport, download Google Maps with the offline Tokyo map, and the entire city opens up. Most tourist confusion in Tokyo comes from not understanding the trains. Once you do, five days is enough to see the essential neighbourhoods, eat extraordinarily well, and leave wondering how any other city functions.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airports" value="Narita / Haneda" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May, Oct–Nov" />
              <StatCard icon="🗓" label="Duration" value="5 Days" />
              <StatCard icon="💰" label="Budget From" value="¥8,000/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Tokyo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Cherry Blossom Season",
                  d: "12–22°C. Late March to mid-April is cherry blossom season and the single most popular time to visit Tokyo. Ueno Park, Shinjuku Gyoen, and the Meguro River turn pink. Hotels fill up and prices spike, but the atmosphere is unlike anything else. Book accommodation 3+ months ahead. May is warm, clear, and much less crowded — an underrated window.",
                  b: "Peak season",
                  c: "bg-pink-50 border-pink-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🌧️",
                  t: "Summer — Hot, Humid, Festival Season",
                  d: "25–35°C with high humidity. June is rainy season (tsuyu). July and August are genuinely hot — plan indoor activities for midday. But summer brings fireworks festivals (hanabi), Obon celebrations, and beer gardens on department store rooftops. Fewer tourists than spring or autumn.",
                  b: "For festival lovers",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍁",
                  t: "Autumn — Foliage & Comfortable Weather",
                  d: "15–25°C. October and November are excellent &mdash; comfortable walking temperatures, stunning autumn foliage at Meiji Jingu Gaien, Koishikawa Korakuen, and Rikugien Gardens. Fewer crowds than spring. Late November for peak koyo (autumn colour). The sweet spot for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cold, Clear & Illuminations",
                  d: "2–12°C. Tokyo winters are cold but dry with blue skies &mdash; the clearest views of Mt. Fuji are in winter. Christmas illuminations across Roppongi, Marunouchi, and Omotesando are spectacular. New Year at Meiji Shrine is a once-in-a-lifetime crowd experience. Cheapest hotel rates of the year.",
                  b: "Best value",
                  c: "bg-amber-50 border-amber-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Tokyo</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Tokyo has two airports. <strong className="font-medium">Narita (NRT)</strong> is 60km east &mdash; most international flights land here. <strong className="font-medium">Haneda (HND)</strong> is 15km south and much closer to the city centre. If you have a choice, fly into Haneda. Either way, buy a Suica or Pasmo IC card at the airport before doing anything else.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "From Narita Airport (most international flights)",
                  d: "Narita Express (N'EX) to Tokyo Station: ¥3,250 ($22), 53 minutes. Limousine Bus to Shinjuku: ¥3,200 ($21), 85–120 minutes depending on traffic. Budget option: Keisei Access Express to Asakusa/Ueno: ¥1,270 ($8), 60 minutes. Cheapest: Airport Shuttle Bus services from ¥1,300 ($9) — slower but direct to your hotel area.",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🛫",
                  t: "From Haneda Airport (closer, domestic + some international)",
                  d: "Tokyo Monorail to Hamamatsucho: ¥500 ($3), 13 minutes. Keikyu Line to Shinagawa: ¥300 ($2), 11 minutes — then connect to JR Yamanote Line for anywhere in central Tokyo. Much faster and cheaper than Narita. If your airline offers Haneda, take it.",
                  b: "Best option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚃",
                  t: "Suica / Pasmo IC Cards",
                  d: "Buy at any airport station or convenience store. ¥500 ($3) deposit, then top up as needed. Tap on/off at every train gate, bus, and most convenience stores and vending machines. Works on all metro lines, JR lines, and private railways in Tokyo. This is non-negotiable — individual tickets waste 5–10 minutes every ride.",
                  b: "Essential",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚅",
                  t: "Japan Rail Pass (JR Pass)",
                  d: "7-day JR Pass: ¥50,000 ($333). Only worth it if you are also visiting Kyoto, Osaka, or Hiroshima by bullet train. For Tokyo only, the Suica card and occasional day passes are far cheaper. A round-trip shinkansen to Kyoto alone costs ¥27,000 — so the JR Pass saves money only if you take multiple long-distance trips.",
                  b: "Only for multi-city",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Tokyo Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. This itinerary is designed for a mid-range budget (¥15,000–25,000/day) but works at any level &mdash; swap the restaurant picks for convenience store meals to go budget, or upgrade to omakase counters for luxury. The route is optimised to minimise backtracking across Tokyo&apos;s sprawl.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Shibuya · Meiji Shrine · Harajuku · Shinjuku"
                cost="¥12,000–18,000 ($80–120) including transport"
                items={[
                  "Morning: Meiji Shrine (free) — arrive by 9am. Walk through the massive torii gate into 170 acres of forest in the middle of the city. The gravel path, the sake barrels, the inner shrine — genuinely peaceful. If you are lucky, you will catch a traditional Shinto wedding procession. Allow 45–60 minutes.",
                  "11am: Harajuku — Takeshita Street for the sensory overload (crepes, costume shops, crowds), then walk Omotesando for architect-designed flagships (Dior by SANAA, Prada by Herzog & de Meuron). Cat Street for indie boutiques. Free to browse.",
                  "Lunch: Afuri Harajuku for yuzu shio ramen — ¥1,200 ($8). Light, citrusy, perfect. Or Bills Omotesando for ricotta pancakes — ¥1,800 ($12) if you want the brunch experience.",
                  "3pm: Shibuya Crossing — the world&apos;s busiest intersection. Watch from Shibuya Sky observation deck — ¥2,000 ($13), book online to skip the queue. The sunset slot gives you the crossing below as neon lights turn on. Then cross it yourself.",
                  "5pm: Walk from Shibuya to Ebisu — Yebisu Beer Museum has free tastings (¥400/$3 for the premium set). Quieter, more local feel than Shibuya.",
                  "Evening: Shinjuku — Golden Gai bar crawl. Six narrow alleys with 200+ tiny bars seating 5–8 people each. Cover charge ¥500–1,000 usually includes your first drink. Pick 2–3 bars. Then walk through Omoide Yokocho (Memory Lane) for yakitori under the train tracks — ¥2,000–3,000 ($13–20) for a full meal with drinks.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Tsukiji · teamLab Borderless · Odaiba · Akihabara"
                cost="¥14,000–20,000 ($93–133) including transport"
                items={[
                  "7am: Tsukiji Outer Market — the inner wholesale market moved to Toyosu but the outer market is still thriving. Tamagoyaki (egg omelette on a stick) ¥200 ($1), fresh sashimi bowl ¥1,500–2,000 ($10–13), grilled scallops ¥500 ($3). Eat standing at the stalls, like locals do.",
                  "10am: teamLab Borderless at Azabudai Hills — ¥3,800 ($25). Book tickets 2 weeks ahead or you will not get in. No walk-ups, no exceptions. The immersive digital art rooms are genuinely extraordinary — allow 2–3 hours and wear white clothing for the best photo experience.",
                  "2pm: Odaiba — take the Yurikamome monorail across Rainbow Bridge for the view. Life-size Unicorn Gundam statue at DiverCity (free). Palette Town for browsing. The waterfront gives you Tokyo Bay skyline views.",
                  "5pm: Akihabara — electric town. Super Potato for retro game shopping (Famicom cartridges, vintage consoles), Mandarake for rare manga and anime collectibles, Yodobashi Camera for 8 floors of electronics. Maid cafes if you are curious — ¥1,500 ($10) entry typically.",
                  "Dinner: Fuunji near Shinjuku Station for tsukemen (dipping ramen) — ¥1,000 ($7). Queue moves fast, noodles are thick and rich. One of the best bowls in Tokyo at any price.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Asakusa · Senso-ji · Ueno · Yanaka"
                cost="¥10,000–16,000 ($67–107) including transport"
                items={[
                  "8am: Senso-ji Temple, Asakusa — Tokyo&apos;s oldest temple, founded in 628 AD. Free entry. The massive Kaminarimon (Thunder Gate) lantern and the Nakamise shopping street leading to the main hall are best before 9am when the tourist buses arrive. Draw a fortune slip (omikuji) for ¥100 — if you get bad luck, tie it to the rack and leave it behind.",
                  "10am: Walk along the Sumida River towards Tokyo Skytree — ¥2,100 ($14) for the observation deck at 350m, or just photograph it from below. The Asahi Beer Hall (the building with the golden flame sculpture) is a free photo op from the riverbank.",
                  "Lunch: Sometaro in Asakusa — cook-your-own okonomiyaki (savoury pancake) on a hot plate built into your table. ¥1,500–2,000 ($10–13). Fun, interactive, delicious. Or grab street food along Nakamise — melon pan ¥200, ningyo-yaki ¥300.",
                  "2pm: Ueno Park — free. Tokyo National Museum (¥1,000/$7) is world-class if you have any interest in Japanese art and history. Shinobazu Pond is beautiful, especially with lotus flowers in summer. Walk through to Yanaka.",
                  "4pm: Yanaka district — the old Tokyo neighbourhood that survived both the 1923 earthquake and WWII bombing. Yanaka Ginza shopping street has traditional shops, menchi-katsu (¥250/$2), and the kind of neighbourhood Tokyo that most tourists never see. Sunset from the Yanaka Cemetery stairs — free, beautiful, peaceful.",
                  "Evening: Sumida River cruise from Asakusa to Hamarikyu Gardens — ¥1,000 ($7). Green tea in the garden with the city skyline behind you. Or return to Asakusa for a quiet evening — the temple lit up at night with almost no one around is a completely different experience.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Day Trip: Kamakura (or Nikko)"
                cost="¥8,000–15,000 ($53–100) including transport"
                items={[
                  "Option A — Kamakura (recommended for first-timers): 1 hour from Tokyo by JR Yokosuka Line (¥950/$6). A coastal temple town with an entirely different atmosphere from Tokyo. The Great Buddha (Kotoku-in, ¥300/$2), Hasedera Temple (¥400/$3 — the ocean views from the upper terrace are stunning), and Hokokuji bamboo grove (¥300/$2, matcha ¥600/$4).",
                  "Walk Komachi-dori shopping street for souvenirs and snacks. Lunch: shirasu (whitebait) rice bowl is Kamakura&apos;s speciality — ¥1,200–1,800 ($8–12) at any harbour-side restaurant.",
                  "Afternoon: Enoshima Island via the Enoden coastal tram (the ride itself is half the fun — sit on the ocean side). Enoshima has shrines, cave grottoes, and views across Sagami Bay to Mt. Fuji on clear days. Free to walk; shrine area ¥200.",
                  "Option B — Nikko (for temple enthusiasts): 2 hours from Tokyo by Tobu Railway (¥1,500/$10 each way). Toshogu Shrine (¥1,600/$11) is jaw-droppingly ornate — UNESCO World Heritage, gold leaf and carved monkeys in a mountain cedar forest. Less crowded than Kamakura. The Sacred Bridge and Rinnoji Temple are included in combo tickets.",
                  "Both options: Leave Tokyo by 8am, back by 6pm. Bring your Suica card — it works on trains to both destinations.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Imperial Palace · Ginza · Roppongi · Farewell Dinner"
                cost="¥12,000–20,000 ($80–133) including transport"
                items={[
                  "9am: Imperial Palace East Gardens — free, open 9am–4pm (closed Mon & Fri). Beautiful moats, stone walls, and manicured gardens where the Edo Castle once stood. The Ninomaru garden is stunning in any season. Skip the main palace — you cannot enter without a guided tour booked weeks ahead.",
                  "11am: Ginza — Tokyo&apos;s most upscale district. Window-shop the department stores: Uniqlo flagship (12 floors), Itoya stationery (gorgeous design objects), Dover Street Market (fashion). Tsukiji Hongwanji Temple is a free, stunning piece of Indo-Saracenic architecture most tourists walk past.",
                  "Lunch: Ginza depachika (department store basement food hall) in Mitsukoshi or Matsuya — bento boxes ¥800–2,000 ($5–13) that are genuine works of art. Wagyu bento, sushi sets, tonkatsu — all at prices far below the restaurants upstairs.",
                  "3pm: Mori Art Museum + rooftop at Roppongi Hills — ¥2,000 ($13), includes observation deck at 250m with Tokyo Tower views. Sky Deck is an extra ¥500 but worth it on clear days. Always has excellent contemporary art exhibitions.",
                  "5pm: Nezu Museum — ¥1,500 ($10). A Japanese art collection in a stunning Kengo Kuma-designed building with a tranquil garden. Quiet, elegant, and the perfect way to end five days. Or walk to Tokyo Tower — ¥1,200 ($8) main deck. Less crowded than Skytree, more nostalgic.",
                  "Farewell dinner: Standing sushi bar in Ginza — ¥3,000–5,000 ($20–33) for excellent-quality nigiri at a counter where the chef slices in front of you. Or splurge on a seated omakase — ¥15,000–30,000 ($100–200). Book ahead.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Tokyo" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK & CULTURAL GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⛩️ Landmark &amp; Cultural Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees and hours as of early 2026. Most temples and shrines are free; the paid attractions are all worth the entry fee.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Senso-ji Temple (Asakusa)",
                  e: "Free",
                  d: "Tokyo's oldest temple, founded 628 AD. The massive Kaminarimon gate, the Nakamise shopping street, and the five-storey pagoda are iconic. The incense hall is open to all — fan the smoke over yourself for good health. Best before 9am or after 8pm when it is lit up and nearly empty.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Meiji Shrine (Harajuku)",
                  e: "Free",
                  d: "A Shinto shrine surrounded by 170 acres of donated forest in central Tokyo. The gravel path through towering camphor trees feels like leaving the city entirely. Write a wish on an ema wooden tablet (¥500). Traditional weddings take place on weekends.",
                  t: "Must see · 45–60 mins",
                },
                {
                  n: "teamLab Borderless (Azabudai Hills)",
                  e: "¥3,800 ($25)",
                  d: "Immersive digital art museum where installations flow between rooms and respond to your movement. The Crystal Universe room, the Infinity Mirror Room, and the waterfall projections are extraordinary. Pre-booking essential — sells out weeks ahead. Wear white for best photos. Allow 2–3 hours.",
                  t: "Must book · 2–3 hrs",
                },
                {
                  n: "Imperial Palace East Gardens",
                  e: "Free",
                  d: "The gardens of the former Edo Castle — moats, stone walls, manicured lawns, and seasonal flowers. Open 9am–4pm, closed Mondays and Fridays. The Ninomaru garden is the highlight. The main palace interior requires a separate guided tour booked weeks in advance.",
                  t: "Free · 1–1.5 hrs",
                },
                {
                  n: "Shibuya Sky",
                  e: "¥2,000 ($13)",
                  d: "Open-air observation deck on top of Shibuya Scramble Square, 230m above Shibuya Crossing. The sunset slot is the best — watch the city light up while the crossing pulses below you. Book online to skip the queue.",
                  t: "Book ahead · 1 hr",
                },
                {
                  n: "Tokyo Skytree",
                  e: "¥2,100–3,400 ($14–23)",
                  d: "At 634m, the tallest structure in Japan. Two observation decks at 350m and 450m. The views are vast but Shibuya Sky is a better experience for most people. Best on clear winter days when you can see Mt. Fuji. The Solamachi shopping complex at the base is free.",
                  t: "Optional · 1 hr",
                },
                {
                  n: "Mori Art Museum (Roppongi Hills)",
                  e: "¥2,000 ($13)",
                  d: "Contemporary art museum with rotating world-class exhibitions on the 53rd floor. The ticket includes access to the indoor observation deck with 360-degree city views. The Sky Deck rooftop costs an extra ¥500 but is worth it on clear days.",
                  t: "Recommended · 1.5–2 hrs",
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
            title="Tokyo — Neon, Temples &amp; Hidden Corners"
            subtitle="The city where ancient tradition meets relentless modernity."
            spots={[
              {
                name: "Shibuya Crossing",
                query: "shibuya crossing tokyo aerial view neon city night",
                desc: "The world&apos;s busiest intersection. Best viewed from Shibuya Sky above, or cross it yourself during rush hour for the full experience.",
              },
              {
                name: "Senso-ji Temple",
                query: "sensoji temple asakusa tokyo pagoda red lantern architecture",
                desc: "Tokyo&apos;s oldest temple in Asakusa. The massive red Kaminarimon lantern gate and five-storey pagoda, best photographed before 9am.",
              },
              {
                name: "Golden Gai, Shinjuku",
                query: "golden gai shinjuku tokyo narrow alley bars night neon",
                desc: "Six narrow alleys crammed with 200+ tiny bars seating 5–8 people each. The most unique nightlife district in the world.",
              },
              {
                name: "Meiji Shrine Forest",
                query: "meiji shrine tokyo torii gate forest path architecture",
                desc: "170 acres of forest in the middle of the city, surrounding the Shinto shrine dedicated to Emperor Meiji. Deeply peaceful.",
              },
              {
                name: "Tsukiji Outer Market",
                query: "tsukiji outer market tokyo seafood stalls food japan",
                desc: "The outer market is still thriving — sushi breakfast stalls, tamagoyaki, fresh sashimi. Go at 7am, eat standing.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Tokyo is more affordable than its reputation suggests. Accommodation and food range wildly, but the metro is cheap and most temples are free. Convenience store meals (¥300–600) are genuinely excellent, and depachika food halls offer world-class bento for ¥800–1,500. The biggest budget trap is taxis &mdash; avoid them.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-blue-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (5N)", "¥15,000–25,000 ($100–167)", "¥40,000–75,000 ($267–500)", "¥300,000–750,000 ($2,000–5,000)"],
                    ["🍜 Food & Drinks", "¥10,000–15,000 ($67–100)", "¥25,000–40,000 ($167–267)", "¥100,000–200,000 ($667–1,333)"],
                    ["🚇 Transport (metro + day trip)", "¥5,000–8,000 ($33–53)", "¥8,000–12,000 ($53–80)", "¥20,000–40,000 ($133–267)"],
                    ["🎯 Activities & Entry Fees", "¥8,000–12,000 ($53–80)", "¥15,000–25,000 ($100–167)", "¥80,000–150,000 ($533–1,000)"],
                    ["🍶 Nightlife & Extras", "¥2,000–5,000 ($13–33)", "¥5,000–10,000 ($33–67)", "¥20,000–50,000 ($133–333)"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => (
                        <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (5 days)</td>
                    {["¥40,000–60,000 ($267–400)", "¥75,000–125,000 ($500–833)", "¥500,000–900,000 ($3,333–6,000)"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light italic">
              All prices in ¥ (Japanese Yen), 2026. USD equivalent at ~¥150/$1. Excludes international flights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (¥8,000–12,000/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Capsule hotels or hostels (¥3,000–5,000/night), convenience store and street food meals, Tokyo Metro day pass (¥600), free temples and shrines. Completely comfortable and genuinely fun &mdash; Japan does budget better than almost anywhere.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (¥15,000–25,000/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Business hotel in Shinjuku/Shibuya (¥8,000–15,000/night), sit-down restaurant meals, all major activities. The sweet spot &mdash; you eat well, stay comfortably, and do everything on the itinerary without thinking about cost.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Tokyo</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Location matters more than the hotel itself. Tokyo is enormous and the metro closes at midnight. Stay near a major station on the JR Yamanote Line (the green circle line) and you can reach anything in the city within 30 minutes. Shinjuku and Shibuya are the best bases for first-timers.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Shinjuku Area",
                  type: "Best for first-timers · Central hub",
                  price: "¥5,000–80,000/night ($33–533)",
                  badge: "Best location",
                  desc: "The single best base in Tokyo. The world&apos;s busiest train station connects to everywhere. Walk to Golden Gai, Omoide Yokocho, Kabukicho, and Shinjuku Gyoen. Every budget level is covered: capsule hotels like Nine Hours Shinjuku (¥4,500), business hotels like Shinjuku Granbell (¥12,000), and luxury at the Park Hyatt (¥65,000 — the Lost in Translation hotel).",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Shibuya Area",
                  type: "Trendy · Great for nightlife",
                  price: "¥6,000–60,000/night ($40–400)",
                  badge: "Most vibrant",
                  desc: "Walk to Shibuya Crossing, Harajuku, Omotesando, and Ebisu. Slightly younger, trendier neighbourhood than Shinjuku. Shibuya Stream and Miyashita Park have modernised the area. Excellent transit connections. Trunk Hotel (¥25,000) is a standout boutique option.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Asakusa Area",
                  type: "Traditional · Budget-friendly",
                  price: "¥3,500–30,000/night ($23–200)",
                  badge: "Most atmospheric",
                  desc: "Stay near Senso-ji for old Tokyo atmosphere. The cheapest accommodation zone in central Tokyo — hostels like Khaosan Tokyo Kabuki (¥3,500) to traditional ryokan like Sadachiyo (¥18,000 with tatami rooms and communal baths). Further from Shibuya/Shinjuku but the Ginza metro line is direct.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Capsule Hotels",
                  type: "Uniquely Japanese · Budget",
                  price: "¥3,000–6,000/night ($20–40)",
                  badge: "Try once",
                  desc: "A quintessentially Japanese experience worth trying at least one night. Your own sleeping pod with TV, reading light, and curtain. Nine Hours and First Cabin are the premium chains with clean, design-forward pods. Luggage storage and communal baths included. Not claustrophobic — most pods are larger than you expect.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Traditional Ryokan",
                  type: "Heritage · Splurge",
                  price: "¥15,000–80,000/night ($100–533)",
                  badge: "Most unique",
                  desc: "Tatami mat floors, futon bedding, kaiseki dinner, communal onsen baths, and yukata robes. The full traditional Japanese hospitality experience. Sadachiyo in Asakusa or Hoshinoya Tokyo in Otemachi (¥80,000 — a luxury ryokan inside a skyscraper). Book well ahead for popular properties.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍜 Where to Eat in Tokyo</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Tokyo has more Michelin stars than any city on earth, but the best meals often cost under ¥1,500. Ramen counters, standing sushi bars, conveyor belt joints, and convenience stores operate at a quality level that would be a destination restaurant anywhere else. The secret is specialisation &mdash; a shop that only makes tsukemen has been perfecting it for decades.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Fuunji (Shinjuku)",
                  t: "Tsukemen (dipping ramen) · Near Shinjuku Station",
                  d: "Possibly the best tsukemen in Tokyo — thick noodles with a rich, fishy dipping broth. Queue is always long but moves fast. ¥1,000–1,200 ($7–8). Cash only. Order from the vending machine outside. The noodles are made fresh and the broth is concentrated enough to coat every strand. This is a meal worth queuing for.",
                  b: "Must eat",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Genki Sushi / Conveyor Belt Sushi (various locations)",
                  t: "Kaiten-zushi · Multiple locations",
                  d: "Conveyor belt sushi in Japan is nothing like the sad versions abroad. Plates from ¥150–400 ($1–3) each. Order from a tablet, plates arrive on a mini bullet train. A full meal runs ¥1,200–2,000 ($8–13). Genki Sushi in Shibuya and Sushiro chain are reliable. For a step up, try a standing sushi bar in Ginza — ¥3,000–5,000 ($20–33) for outstanding quality.",
                  b: "Best value sushi",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Omoide Yokocho / Memory Lane (Shinjuku)",
                  t: "Yakitori alley · Under the train tracks",
                  d: "Narrow alley of tiny yakitori (grilled chicken skewer) stalls under the Shinjuku train tracks. Smoke, noise, cold beer, and skewers from ¥100–200 ($0.70–1.30) each. A full meal with beer runs ¥2,000–3,000 ($13–20). Arrive by 6pm or expect to queue. This is old Tokyo at its most atmospheric.",
                  b: "Most atmospheric",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Depachika (Department Store Food Halls)",
                  t: "Food halls · Ginza, Shinjuku, Shibuya",
                  d: "The basement floors of Japanese department stores (Mitsukoshi, Isetan, Matsuya) contain some of the best food in Tokyo. Wagyu bento boxes ¥1,500–3,000 ($10–20), sushi sets, tonkatsu, pastries — all at prices well below the restaurants upstairs. Free samples are common. Mitsukoshi Ginza and Isetan Shinjuku are the best. Go after 6pm for discounts on unsold items.",
                  b: "Hidden gem",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Convenience Stores (7-Eleven, FamilyMart, Lawson)",
                  t: "24/7 · Everywhere",
                  d: "This is not a joke recommendation. Japanese convenience store food is genuinely excellent. Onigiri (rice balls) ¥150 ($1), egg sandwich ¥250 ($2), fresh bento ¥500–700 ($3–5), fried chicken ¥200 ($1.30). The quality control is remarkable. A 7-Eleven onigiri at 2am after a Golden Gai bar crawl is a peak Japan moment.",
                  b: "Seriously good",
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
            destination="Tokyo"
            hotels={[
              {
                name: "Khaosan Tokyo Kabuki",
                type: "Budget Hostel · Asakusa",
                price: "From ¥3,500/night ($23)",
                rating: "4",
                badge: "Budget pick",
                url: "https://www.booking.com/hotel/jp/khaosan-tokyo-kabuki.html?aid=2820480",
              },
              {
                name: "Shinjuku Granbell Hotel",
                type: "Boutique · Shinjuku",
                price: "From ¥12,000/night ($80)",
                rating: "4",
                badge: "Mid-range pick",
                url: "https://www.booking.com/hotel/jp/shinjuku-granbell.html?aid=2820480",
              },
              {
                name: "Park Hyatt Tokyo",
                type: "Luxury · Shinjuku",
                price: "From ¥65,000/night ($433)",
                rating: "5",
                badge: "Luxury",
                url: "https://www.booking.com/hotel/jp/park-hyatt-tokyo.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "teamLab Borderless Skip-the-Line",
                duration: "2–3 hours",
                price: "From ¥3,800 ($25)",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=tokyo+teamlab&partner_id=PSZA5UI",
              },
              {
                name: "Tsukiji Outer Market Food Tour",
                duration: "3 hours",
                price: "From ¥8,000 ($53)",
                badge: "Food",
                url: "https://www.getyourguide.com/s/?q=tokyo+tsukiji+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Kamakura Day Trip from Tokyo",
                duration: "Full day",
                price: "From ¥10,000 ($67)",
                url: "https://www.getyourguide.com/s/?q=tokyo+kamakura&partner_id=PSZA5UI",
              },
              {
                name: "Mt. Fuji & Hakone Day Tour",
                duration: "Full day",
                price: "From ¥12,000 ($80)",
                url: "https://www.getyourguide.com/s/?q=tokyo+mt+fuji+hakone&partner_id=PSZA5UI",
              },
            ]}
            pdfProductId="tokyo-5-days-pdf"
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not getting a Suica/Pasmo card", desc: "Buying individual metro tickets wastes 5–10 minutes every ride and the fare calculation is confusing. Get a Suica at the airport and top up as needed. Works on all trains, buses, convenience stores, and vending machines. This is the single most important practical tip for Tokyo.", icon: "💳" },
                { title: "Buying a JR Pass for Tokyo only", desc: "The JR Pass costs ¥50,000+ and only covers JR lines. Most Tokyo sightseeing uses Metro lines, not JR. Only buy the JR Pass if you are also taking bullet trains to Kyoto, Osaka, or Hiroshima. For Tokyo alone, the Suica card and ¥600 Metro day passes are far cheaper.", icon: "🚅" },
                { title: "Skipping teamLab booking", desc: "teamLab Borderless sells out weeks ahead. If you do not pre-book online, you will not get in. No walk-ups, no same-day availability, no exceptions. Check their website the moment you know your Tokyo dates.", icon: "🎨" },
                { title: "Taking taxis everywhere", desc: "Tokyo taxis start at ¥500 and a 20-minute ride costs ¥3,000–5,000 ($20–33). The metro goes everywhere, runs until midnight, and costs ¥170–320 per ride. A taxi from Narita Airport to Shinjuku costs ¥25,000+ ($167). Just take the train.", icon: "🚕" },
                { title: "Ignoring cash", desc: "Japan is still heavily cash-based. Many small restaurants, shrines, street food stalls, and izakayas do not accept cards. Withdraw ¥30,000–50,000 at a 7-Eleven ATM on arrival (they accept international cards when most ATMs do not). Running out of cash on a Saturday night in Golden Gai is miserable.", icon: "💴" },
                { title: "Only eating at sit-down restaurants", desc: "Convenience store food in Japan is genuinely excellent — ¥150 onigiri, ¥500 bento boxes, ¥200 fried chicken. Depachika food halls in department store basements serve world-class meals for ¥800–1,500. Eating exclusively at restaurants means overpaying and missing half the food culture.", icon: "🍱" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Tokyo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚇",
                  title: "Tokyo Metro 24hr Pass — ¥600 ($4)",
                  desc: "Unlimited rides on all Tokyo Metro lines for 24 hours. If you are hitting 4+ stations in a day, this pays for itself by lunchtime. Buy at any Metro station. Note: does not cover JR lines (Yamanote) or private railways — you will still need your Suica for those.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "📱",
                  title: "Three apps solve 90% of confusion",
                  desc: "Google Maps (offline Tokyo map — download before you go) gives exact platform numbers and train times. Google Translate (Japanese offline pack) reads menus and signs through your camera. Suica app or physical card for all transit. These three tools make Tokyo navigable for anyone.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌸",
                  title: "Cherry blossom timing",
                  desc: "Usually late March to mid-April. Check japan-guide.com/sakura for real-time forecasts updated daily. Ueno Park, Shinjuku Gyoen (¥500 entry), and the Meguro River are the best spots in central Tokyo. Peak bloom lasts only 7–10 days — timing matters more than anything else.",
                  color: "bg-pink-50 border-pink-200",
                },
                {
                  icon: "🧳",
                  title: "Coin lockers are everywhere",
                  desc: "Station coin lockers: ¥300–600 ($2–4) for the day. Store your bags and explore hands-free. Large sizes at Tokyo, Shinjuku, and Shibuya stations fill up by noon — arrive early or use the luggage forwarding service (takkyubin) to send bags directly to your next hotel for ¥2,000.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎴",
                  title: "Tipping is rude in Japan",
                  desc: "Do not tip at restaurants, to taxi drivers, or at hotels. It is considered insulting. If you leave money on the table, staff will chase you down to return it. This applies everywhere in Japan without exception. Service charges are included in the price.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🏪",
                  title: "7-Eleven is your best friend",
                  desc: "ATMs that accept international cards (when most Japanese ATMs do not), excellent food at any hour, bill payment, event ticket printing, decent coffee, and clean toilets. Open 24/7 on virtually every block. The ATM feature alone makes 7-Eleven essential for tourists.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Tokyo" />

          {/* Combine With */}
          <CombineWith currentSlug="tokyo-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How many days do you need in Tokyo?",
                  a: "5 days is ideal to cover Tokyo's main highlights without rushing — Shibuya, Asakusa, Shinjuku, Ueno, Akihabara, plus a day trip to Kamakura or Nikko. 3 days works if you skip the day trip. 7 days lets you add Hakone, Yokohama, and explore neighbourhoods at a more relaxed pace.",
                },
                {
                  q: "What is the best time to visit Tokyo?",
                  a: "Late March to mid-April for cherry blossoms, or mid-October to November for autumn foliage. May and September to October offer mild weather with fewer tourists and lower hotel prices. Avoid Golden Week (late April to early May) when the entire country travels domestically, and Obon (mid-August) for the same reason.",
                },
                {
                  q: "How much does a 5-day Tokyo trip cost?",
                  a: "Budget: ¥40,000–60,000 ($267–400) total. Mid-range: ¥75,000–125,000 ($500–833) total. Luxury: ¥500,000+ ($3,333+). All figures exclude international flights and include accommodation, food, transport, and activities. Tokyo is more affordable than most people expect, especially at the budget and mid-range levels.",
                },
                {
                  q: "Do Indian passport holders need a visa for Japan?",
                  a: "Yes. Indian passport holders must apply for a tourist visa at the Japanese Embassy or Consulate. Processing takes 5–7 working days. You will need a return ticket, hotel booking, and bank statement. Most Western passport holders (US, UK, EU, Australia) get visa-free entry for up to 90 days.",
                },
                {
                  q: "Do I need a JR Pass for Tokyo?",
                  a: "For Tokyo only, no. A Suica or Pasmo IC card is cheaper and more convenient for getting around the city. The JR Pass (¥50,000 for 7 days) only makes financial sense if you are also taking bullet trains to Kyoto, Osaka, or other cities during the same trip.",
                },
                {
                  q: "Is Tokyo easy to navigate without Japanese?",
                  a: "Yes. The metro has English signage on every line and platform. Google Maps gives perfect transit directions including platform numbers and which door to stand at. Most restaurants have picture menus or plastic food displays in the window. Download Google Translate with the Japanese offline pack for signs and menus your camera can read in real time.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Tokyo trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-tokyo", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/tokyo-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-tokyo", label: "How to get there", icon: "✈️" },
                { href: "/blog/tokyo-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="tokyo-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Japan &amp; Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kyoto &mdash; 4 Day Temple &amp; Culture Guide", href: "/blog/kyoto-4-days" },
                { label: "Osaka &mdash; 3 Day Food &amp; Fun Guide", href: "/blog/osaka-3-days" },
                { label: "Goa &mdash; 3 Day Beach Guide", href: "/blog/goa-3-days" },
                { label: "Browse All Packages", href: "/#packages" },
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
