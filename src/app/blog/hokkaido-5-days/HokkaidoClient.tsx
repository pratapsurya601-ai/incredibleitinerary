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
const HOKKAIDO_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Hokkaido Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "5-Day Itinerary" },
  { id: "landmarks",  emoji: "🗺️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Hokkaido 5-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Hokkaido in 5 Days — lavender, Blue Pond, Otaru sushi and Sapporo snow&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/hokkaido-5-days"
        imageUrl="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80"
        description="Hokkaido in 5 Days: Furano lavender fields, Biei Blue Pond, Otaru canal sushi, Sapporo Beer Museum and world-class powder skiing at Niseko — complete guide with real yen costs."
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
export default function HokkaidoClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HOKKAIDO_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hokkaido" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hokkaido sapporo japan lavender biei snow winter"
            fallback="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1600&q=80"
            alt="Hokkaido Japan lavender fields at Farm Tomita Furano with rolling purple hills"
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
              <span className="text-white/70">Hokkaido 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Japan&apos;s Northern Island
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hokkaido in 5 Days:
                <em className="italic text-amber-300"> Lavender, Blue Pond, Otaru &amp; Sapporo</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Furano&apos;s lavender at dawn, Biei&apos;s turquoise Blue Pond, the freshest sea urchin in Japan at Otaru, and Sapporo&apos;s snow festival. The complete guide with real yen costs.
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
              <span>🇯🇵 Hokkaido, Japan</span>
              <span>·</span>
              <span>🗓 5 Days</span>
              <span>·</span>
              <span>💰 From ¥8,000/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Hokkaido is Japan&apos;s great secret — a near-wilderness island the size of Austria at the northern tip of the Japanese archipelago, where lavender fields stretch to distant volcanic peaks in summer, where the world&apos;s deepest powder snow falls from November to March, and where sea urchin is eaten for breakfast at harbour markets.
            </p>
          </blockquote>

          {/* ── WHAT HOKKAIDO ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Hokkaido Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Japan&apos;s northernmost main island is the country&apos;s last agricultural frontier — developed only in the Meiji era (1868 onwards) by American agricultural advisors who laid out Sapporo in a grid and planted the university campus that still defines the city. Before that, Hokkaido was the homeland of the Ainu people, an indigenous group with a culture entirely distinct from mainland Japanese traditions.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What this late development means for the modern traveller: Hokkaido feels completely different from Honshu. The pace is slower. The landscape is vast and open — rolling agricultural plains, volcanic national parks, forested river valleys, and coastline with no equivalent elsewhere in Japan. The food is exceptional in a different register too: dairy products, lamb, root vegetables, and the most prized seafood in the country — Rishiri sea urchin, Hokkaido king crab, Otaru scallops.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Five days is the right amount of time to experience Hokkaido properly without rushing. You get Sapporo&apos;s city culture, the lavender drama of Furano, the surreal Blue Pond at Biei, the canal and sushi of Otaru, and enough time between to simply drive through the landscape and understand why many Japan veterans say Hokkaido is their favourite part of the country.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="From Tokyo" value="1.5 hrs" />
              <StatCard icon="🌡️" label="Best Months" value="Jul–Aug or Jan–Feb" />
              <StatCard icon="🗾" label="Island Size" value="Austria-sized" />
              <StatCard icon="💰" label="Budget From" value="¥8,000/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Hokkaido</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Jan–Feb",
                  i: "⛷️",
                  t: "Winter — Skiing & Snow Festival",
                  d: "Niseko receives more snowfall than almost any ski resort in the world — up to 15 metres per season of the lightest powder on earth. The Sapporo Snow Festival (first or second week of February) fills Odori Park with monumental snow sculptures up to 20 metres tall. Book accommodation 3 months ahead for festival week.",
                  b: "Best for skiing",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Apr–May",
                  i: "🌸",
                  t: "Spring — Cherry Blossoms",
                  d: "Hokkaido&apos;s cherry blossoms peak 2–3 weeks after Tokyo (late April to mid-May), when the rest of Japan has already forgotten about sakura. Goryokaku Fort in Hakodate and Maruyama Park in Sapporo are the best spots. Temperatures are still cool (8–18°C) and accommodation is not yet at summer prices.",
                  b: "Cherry blossom season",
                  c: "bg-pink-50 border-pink-200",
                },
                {
                  s: "Jul–Aug",
                  i: "💜",
                  t: "Summer — Lavender Fields",
                  d: "Furano lavender peaks July 15–25 at Farm Tomita — the defining image of Hokkaido summer. Temperatures are a comfortable 20–28°C while the rest of Japan bakes above 35°C. Sea urchin and seafood season is at its peak. The Biei Blue Pond is most vivid between 10am and 2pm on a clear summer day.",
                  b: "Best overall season",
                  c: "bg-purple-50 border-purple-200",
                },
                {
                  s: "Sep–Oct",
                  i: "🍂",
                  t: "Autumn — Foliage",
                  d: "Hokkaido&apos;s autumn colour arrives 3–4 weeks ahead of Honshu — by early October, the Daisetsuzan mountains are turning crimson and gold while Tokyo is still green. Daisetsuzan National Park and the Sounkyo Gorge are the best spots. Crowds are manageable and accommodation prices drop from summer peaks.",
                  b: "Autumn foliage",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Hokkaido</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Fly into <strong className="font-medium">New Chitose Airport (CTS)</strong> — 40 minutes south of Sapporo by JR Airport Express (¥1,150). Flying is by far the best way to reach Hokkaido from Tokyo or elsewhere in Japan.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Tokyo Haneda (HND) or Narita (NRT) → New Chitose (CTS)",
                  d: "Flight time: 1 hour 30 minutes. Dozens of daily flights on ANA, JAL, Jetstar, Peach, and AIR DO. Fares: ¥8,000–20,000 depending on how far ahead you book — domestic Japan flights booked 2 months out are often under ¥10,000. This is the standard route for most international travellers connecting through Tokyo.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "Shinkansen + Limited Express (via Hakodate)",
                  d: "Tokyo to Shin-Hakodate-Hokuto by Hokkaido Shinkansen: 4 hours (¥22,000+). Then limited express Hokuto to Sapporo: 3.5 hours. Total journey: 8+ hours at significantly higher cost than flying. Only recommended if you specifically want to experience the Hakodate–Sapporo rail route or have a JR Pass.",
                  b: "Rail option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚢",
                  t: "Ferry from Honshu",
                  d: "Ferry services run from Oarai (near Tokyo) to Tomakomai (Hokkaido) in approximately 18 hours. A slower, romantic option for those bringing a vehicle or wanting the ocean crossing experience. Cabins available ¥8,000–25,000. Useful for travellers driving around Hokkaido with a rented vehicle from the mainland.",
                  b: "Scenic option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚌",
                  t: "Airport to Sapporo City Centre",
                  d: "JR Airport Express (Rapid Airport) from New Chitose to Sapporo Station: 37 minutes, ¥1,150. Trains run every 15 minutes from 6am to midnight. Taxis and shuttle buses also available (¥4,000–6,000 by taxi, 50–60 minutes). The JR Airport Express is fast, reliable, and the obvious choice.",
                  b: "¥1,150 / 37 min",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 5-Day Hokkaido Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around a car rental from Day 2 — essential for Furano and Biei. Days 1 and 5 are Sapporo-based and work well without a car.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Sapporo — Beer Museum, Odori Park, Ramen Yokocho, Susukino"
                cost="¥4,000–7,000 total"
                items={[
                  "Arrive at New Chitose Airport (CTS) and take the JR Airport Express to Sapporo Station (37 minutes, ¥1,150). Check in to your hotel — the city centre is compact and walkable from the station area.",
                  "10:00am — Odori Park (free): Sapporo&apos;s 1.5km central park running east-west through the city. In July–August the park hosts the Sapporo Beer Garden under the stars; in February it becomes the site of the Snow Festival&apos;s most spectacular large-format snow sculptures — some exceeding 20 metres in height.",
                  "11:00am — Sapporo Clock Tower (¥200): the city&apos;s most recognisable landmark, a wooden colonial-era building from 1878 that looks absurdly small surrounded by modern skyscrapers. The contrast is part of the appeal, and the small museum inside explains how Sapporo was planned by American agricultural advisors in the Meiji era.",
                  "12:30pm — Lunch at Ramen Yokocho (Ramen Alley, Susukino): a narrow alley of 17 tiny ramen shops near Susukino station — the most concentrated ramen experience in a city famous for its ramen. Sapporo&apos;s signature style is miso ramen with butter and corn; rich crab ramen is also a Hokkaido specialty. Budget ¥1,000–1,500.",
                  "2:00pm — Hokkaido University campus (free): the imperial university campus feels more like a European university town than Japan — the long elm-tree avenue and the vast poplar avenue are free to walk. In autumn the ginkgo-lined avenue (Ichōnamiki) turns deep gold. Worth an hour of slow walking.",
                  "4:00pm — Sapporo Beer Museum (free museum): the most famous Hokkaido export, brewed in this red-brick Victorian building since 1877. The museum is free; the adjacent tasting hall offers a flight of three Sapporo beers including Sapporo Classic (the Hokkaido-only label, unavailable elsewhere in Japan) for ¥200–800. Open from 11am.",
                  "6:00pm — Susukino: one of Japan&apos;s largest entertainment districts outside Tokyo and Osaka. Hundreds of restaurants, izakayas, and ramen shops in a dense 4-block area. Budget izakaya dinner with draft Sapporo beer: ¥2,000–3,500.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Furano — Farm Tomita Lavender (July only), Ningle Terrace, Cheese Factory"
                cost="¥8,000–12,000 total (incl. car rental)"
                items={[
                  "7:00am — Collect rental car in Sapporo (¥6,000–10,000/day including basic insurance). International Driving Permit required — obtain from your national motoring authority before leaving home. A car is non-negotiable for Furano and Biei; trains are infrequent and stations are far from the attractions.",
                  "8:30am — Drive Sapporo to Furano: approximately 2 hours (140km) via the central Hokkaido expressway. The drive itself is beautiful — rolling agricultural land with distant volcanic peaks appearing on clear days.",
                  "10:30am — Farm Tomita (free entry): the most iconic lavender farm in Japan, operating since 1903. In peak season (July 15–25) the fields are a wall of purple extending to the hills — one of Japan&apos;s defining landscape images. The farm also grows other flowers in colour-block rows: poppies, salvia, baby&apos;s breath, and marigolds. The lavender ice cream (¥400) is obligatory. Note: outside July, the lavender fields are not in bloom — the farm is still pleasant but the purple drama is absent.",
                  "12:30pm — Ningle Terrace (free to explore): a fairy-tale woodland craft village in the hills above Furano — small wooden huts housing independent artisans selling handmade glass, leather goods, candles, and local art. The forest setting is genuinely lovely.",
                  "2:00pm — Furano Cheese Factory (¥200 entry for dairy process viewing): Hokkaido dairy is the finest in Japan, and the cheese here is world-class. Hokkaido&apos;s volcanic soil and cold climate produce exceptional milk, butter, and soft-serve. The soft-serve ice cream at the factory café is exceptional.",
                  "3:30pm — Furano Winery (free tasting): overlooking the Furano valley, this small winery produces surprisingly good white wine and rosé from Hokkaido&apos;s short but intense summers. Worth 45 minutes.",
                  "6:00pm — Dinner in Furano town: local soba noodles or Hokkaido lamb (genghis khan mutton BBQ) at a local restaurant. Budget ¥1,500–2,500. Stay overnight in Furano or Biei for Day 3 convenience.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Biei — Blue Pond (free), Patchwork Road, Shirogane Onsen"
                cost="¥5,000–9,000 total"
                items={[
                  "8:00am — Drive from Furano to Biei (30 minutes). Biei is a small agricultural town famous for its rolling hills of differently coloured crops — wheat, lavender, potatoes, sunflowers — which from elevated roads resemble a patchwork quilt.",
                  "9:00am — Shirogane Blue Pond (free, small car park fee ¥500): one of Japan&apos;s most photographed natural phenomena. The pond&apos;s milky turquoise colour comes from aluminium hydroxide seeping from surrounding volcanic soil. Dead white birch trees rise from the blue water. The colour is most vivid between 10am–2pm when the sun is overhead. In winter the pond freezes and is illuminated at night — equally spectacular.",
                  "11:00am — Patchwork Road: a 20km driving loop through Biei&apos;s rolling hills. Key stops: Ken & Mary&apos;s Tree (a lone elm made famous by a 1972 car advertisement, still standing alone in a field), Seven Star Tree (Hokkaido&apos;s most photographed single oak), and the panoramic hill viewpoints above Biei town. The landscapes feel Scandinavian — vast, open, and extraordinarily peaceful.",
                  "1:00pm — Lunch in Biei town: small local restaurants serve Hokkaido soup curry (a Sapporo specialty now beloved across Hokkaido — a thinner, spice-forward broth with whole vegetables, completely different from Indian curry). Budget ¥1,000–1,800.",
                  "3:00pm — Shirogane Onsen area: Biei&apos;s hot spring district fed by volcanic geology. A public foot bath (ashiyu, free) is available near the Blue Pond car park — soak your feet in natural volcanic hot spring water. A full onsen bath at a local ryokan: ¥800–1,500.",
                  "5:00pm — Drive toward Otaru or return to Sapporo (2.5 hours). Alternatively, stay in Biei for a night at a farm guesthouse (¥4,000–7,000 with dinner included) to catch the Blue Pond at dawn — the mist and silence at 6am are extraordinary.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Otaru — Canal (free), Glasswork Shops, Sushi Street, Sankaku Market"
                cost="¥6,000–12,000 total"
                items={[
                  "9:00am — Drive or take the JR train from Sapporo to Otaru (35 minutes by JR, ¥640). Otaru was Hokkaido&apos;s commercial capital in the early 20th century — the preserved stone warehouses along its canal are among Hokkaido&apos;s most visited sights.",
                  "9:30am — Otaru Canal (free): a 1.3km historic canal lined with converted stone warehouses from the herring fishing era. Gas lanterns line both banks. The canal is most atmospheric in early morning before the tourist crowds and again at night when the lanterns are lit and their reflections glow in the still water.",
                  "11:00am — Glasswork shops (Kitaichi Glass and surrounding studios): Otaru became famous for glass-blowing during the herring era — fishing floats were made of glass here. Several studios offer hands-on glass-blowing workshops where you blow your own glass float or wine glass (¥2,000–4,000 for a 45-minute session). Finished pieces can be shipped internationally.",
                  "12:30pm — Otaru Sushi Street (Sushi-ya-dori): a single street with over 20 sushi restaurants serving the freshest seafood in Japan. Hokkaido&apos;s cold waters produce exceptional sea urchin, salmon, king crab, scallops, and herring. A midday omakase set: ¥3,000–8,000 depending on the restaurant. This is genuinely among the best sushi you will eat anywhere in Japan.",
                  "2:30pm — Sankaku Market (Otaru&apos;s triangular market): even in the afternoon, stalls sell live crabs, sea urchin, salmon roe, and smoked seafood. The uni (sea urchin) rice bowls here — a bowl of warm sushi rice topped with fresh Hokkaido sea urchin — are ¥1,500–3,000 depending on grade. Buy and eat immediately at the market counter.",
                  "4:00pm — Otaru Music Box Museum (Orgel-do, ¥500): a converted historic warehouse filled with thousands of antique and contemporary music boxes. Otaru is Japan&apos;s music box capital — an eccentric and genuinely delightful fact.",
                  "6:00pm — Return to Sapporo for the night, or stay in Otaru — the canal at night with gas lanterns is atmospheric and well worth the extra night. Canal-side accommodation: ¥8,000–25,000.",
                ]}
              />
              <DayCard
                day="Day 5"
                title="Sapporo Farewell — Nijo Market Uni Donburi, Beer Museum, Tanukikoji"
                cost="¥5,000–10,000 total"
                items={[
                  "9:00am — Nijo Market (Sapporo&apos;s central seafood market, 5 minutes from Odori Park): the best place in Sapporo for a fresh sea urchin rice bowl (uni donburi, ¥2,000–4,000). A bowl of warm sushi rice topped with an entire sheet of fresh Hokkaido sea urchin — the definitive Hokkaido breakfast. The market also sells fresh crabs, snow crab sets, and Hokkaido dairy products.",
                  "11:00am — Sapporo Beer Museum (free): trace Hokkaido&apos;s brewing history from 1877 in the magnificent red-brick Victorian building. The adjacent tasting hall is open from 11am (¥200–800 for a flight of three beers including the Hokkaido-only Sapporo Classic label).",
                  "1:00pm — Tanukikoji Shopping Arcade: Sapporo&apos;s main covered shopping street, 900m long (7 blocks) running east through the city centre. Good for last-minute Hokkaido food souvenirs — Royce chocolate (the nama chocolate sold fresh here is far better than airport versions), Shiroi Koibito butter sandwich cookies (Hokkaido&apos;s most beloved souvenir), Hokkaido cheese snacks, and Furano lavender products.",
                  "3:00pm — If time allows: Hokkaido Museum (¥600) in Nopporo Forest Park — the prefectural museum covers Hokkaido&apos;s natural history, indigenous Ainu culture, and settler history. The Ainu section is particularly interesting; Hokkaido&apos;s indigenous people have a culture quite distinct from mainland Japanese traditions.",
                  "6:00pm — Farewell dinner: a full Hokkaido seafood course at a mid-range Sapporo restaurant — snow crab, sea urchin, scallops, salmon, and the obligatory Sapporo draft beer. Budget ¥3,000–6,000. Then: JR Airport Express to New Chitose Airport (40 minutes, ¥1,150) for your departure flight.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Hokkaido" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗺️ Hokkaido Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites across Hokkaido in order of priority — with entry fees as of early 2026 and honest notes on what each is actually worth.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Farm Tomita, Furano",
                  e: "Free entry",
                  d: "The most iconic lavender farm in Japan, operating since 1903. The prime window is July 15–25 when fields are a wall of purple extending to the volcanic peaks. The farm grows other flowers year-round, but the lavender drama is exclusively July. The lavender soft-serve (¥400) is one of the best ice creams in Japan.",
                  t: "July 15–25 only · 1.5 hrs",
                },
                {
                  n: "Shirogane Blue Pond, Biei",
                  e: "Free (car park ¥500)",
                  d: "Japan&apos;s most photographed natural phenomenon — a milky turquoise pond created when volcanic minerals seep into the water, with dead white birch trees rising from it. The colour peaks between 10am and 2pm on a clear sunny day. Overcast days produce a flat grey-green — check the forecast before driving out.",
                  t: "Most vivid 10am–2pm · 45 min",
                },
                {
                  n: "Noboribetsu Jigokudani Hell Valley",
                  e: "Free",
                  d: "Hokkaido&apos;s most dramatic volcanic landscape — a 450-metre crater basin of boiling grey mud pits, steam vents, and sulphurous pools. The walk through the valley takes 45 minutes and feels genuinely otherworldly. The adjacent Noboribetsu Onsen town has some of Hokkaido&apos;s best hot spring ryokan.",
                  t: "Free · 1–1.5 hrs",
                },
                {
                  n: "Toyako Lake (Lake Toya) & Volcanic Island",
                  e: "Free (boat to island ¥1,500)",
                  d: "A perfectly circular caldera lake formed from a volcanic eruption. The central Nakajima islands are accessible by sightseeing boat. The 2000 Mt Usu eruption created entirely new landscape features still visible on the lakeside — ash fields, destroyed buildings preserved as a geological monument, and still-active steam vents.",
                  t: "Half day · ¥1,500 boat",
                },
                {
                  n: "Otaru Canal",
                  e: "Free",
                  d: "A 1.3km historic canal lined with stone warehouses from Hokkaido&apos;s herring fishing era. Best in early morning before the crowds and at night when gas lanterns are lit. The canal district also has glasswork studios, music box shops, and the best sushi restaurants in Hokkaido on the adjacent Sushi-ya-dori street.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Biei Patchwork Hills",
                  e: "Free",
                  d: "The rolling agricultural hills around Biei — wheat, lavender, potatoes, and sunflowers planted in differently coloured strips — are best experienced by car on the 20km Patchwork Road loop. Ken & Mary&apos;s Tree, Seven Star Tree, and Mild Seven Hill are the iconic stops. The Scandinavian-feeling landscape is one of Hokkaido&apos;s most distinctive attractions.",
                  t: "Free · Half day by car",
                },
                {
                  n: "Niseko Ski Resort",
                  e: "Day pass ¥7,500",
                  d: "Japan&apos;s most international ski resort, averaging 15 metres of snowfall per season — among the heaviest powder in the world. Four interconnected resorts (Annupuri, Niseko Village, Grand Hirafu, Hanazono) with English signage throughout. Day pass ¥7,500. Equipment rental ¥5,000–8,000/day. Best January–February.",
                  t: "Jan–Feb · Day pass ¥7,500",
                },
                {
                  n: "Hakodate Morning Market",
                  e: "Free to browse",
                  d: "Hakodate&apos;s famous Asa-ichi market (5am–noon) is Japan&apos;s best known morning seafood market — 250+ stalls selling live crab, fresh sea urchin, salmon roe, squid, and Hokkaido scallops. The iconic meal is uni (sea urchin) donburi: ¥3,000 for a bowl topped with fresh Rishiri sea urchin from the Sea of Japan.",
                  t: "5am–noon · Uni donburi ¥3,000",
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
            title="Hokkaido — Lavender, Blue Pond &amp; Canal Lanterns"
            subtitle="Japan&apos;s northernmost island in every season."
            spots={[
              {
                name: "Farm Tomita Lavender Fields",
                query: "farm tomita furano lavender fields hokkaido japan purple rows",
                desc: "Farm Tomita in peak bloom (July 15–25) — the iconic wall of purple lavender extending toward the volcanic peaks of central Hokkaido.",
              },
              {
                name: "Biei Shirogane Blue Pond",
                query: "biei blue pond shirogane hokkaido turquoise trees japan",
                desc: "The milky turquoise Blue Pond at Biei — dead white birch trees rising from aluminium-rich volcanic water, most vivid between 10am and 2pm.",
              },
              {
                name: "Otaru Canal at Night",
                query: "otaru canal night lanterns hokkaido japan stone warehouses",
                desc: "Otaru&apos;s 1.3km historic canal at night — gas lanterns illuminating the Meiji-era stone warehouses and reflecting in the still water.",
              },
              {
                name: "Sapporo Snow Festival",
                query: "sapporo snow festival yuki matsuri odori park winter japan",
                desc: "The Sapporo Yuki Matsuri in February — monumental snow sculptures up to 20 metres tall filling Odori Park for one week each winter.",
              },
              {
                name: "Noboribetsu Jigokudani",
                query: "noboribetsu jigokudani hell valley hokkaido volcanic steam japan",
                desc: "Jigokudani (Hell Valley) at Noboribetsu — a 450-metre volcanic crater of boiling mud pools and sulphurous steam vents, free to walk.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hokkaido is not cheap by Asian travel standards, but it is significantly more affordable than Tokyo for accommodation and food. The main cost drivers are the car rental (¥6,000–10,000/day) and dining — Hokkaido&apos;s seafood quality is excellent but premium uni and crab meals add up quickly.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation / night", "¥3,000–7,000", "¥10,000–20,000", "¥30,000–100,000"],
                    ["🍽️ Food / day", "¥2,000–4,000", "¥5,000–12,000", "¥15,000–50,000"],
                    ["🚗 Transport / day", "¥1,500–3,000", "¥3,000–8,000", "¥5,000–20,000"],
                    ["🎫 Activities / day", "¥1,000–2,500", "¥3,000–8,000", "¥10,000–40,000"],
                    ["TOTAL / day", "¥8,000–15,000", "¥20,000–45,000", "¥60,000–200,000+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (¥8,000–15,000/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Grids Sapporo Hostel (¥3,000–5,000/night), ramen and convenience store meals, JR trains instead of car rental where possible, free attractions (Beer Museum, Odori Park, Blue Pond, Otaru Canal). Very doable in Sapporo and Otaru; harder for Furano/Biei without a car.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (¥20,000–45,000/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">JR Tower Hotel Nikko Sapporo (¥15,000–30,000/night), car rental for Days 2–4, mid-range sushi in Otaru (¥3,000–5,000), and one good seafood dinner. The sweet spot for a comfortable, unhurried Hokkaido experience.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (¥60,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Hoshino Resorts Tomamu (¥40,000–80,000/night with kaiseki dinner), private car transfers, omakase sushi at Otaru (¥15,000–30,000/person), private farm experiences, helicopter over Furano. Hokkaido does luxury exceptionally well.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Hokkaido</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Sapporo is the natural base for a 5-day Hokkaido trip — everything is within 2–3 hours by car or train. One night in Furano or Biei and one night in Otaru are worth the logistics for the early morning access they provide.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "JR Tower Hotel Nikko Sapporo",
                  type: "Luxury · Sapporo Station tower",
                  price: "From ¥15,000/night",
                  badge: "Best location",
                  desc: "Occupying floors 14–35 of the JR Tower above Sapporo Station — the best hotel location in the city. Upper-floor rooms have panoramic views of Sapporo and the distant Hokkaido mountains. Direct access to the underground shopping concourse and JR lines to Otaru and the airport. The standard for mid-to-luxury travel in Sapporo.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hoshino Resorts Tomamu",
                  type: "Luxury resort · Tomamu, Central Hokkaido",
                  price: "From ¥40,000/night",
                  badge: "Most luxurious",
                  desc: "Two dramatic tower hotels on the Hokkaido plains — a world-famous ski resort in winter (private powder runs, outdoor hot spring) and a summer retreat with the remarkable Mina-Mina Beach (an indoor artificial wave beach). The kaiseki dining uses produce from the surrounding farms. A destination in itself, 90 minutes south of Sapporo.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Grids Sapporo Hotel & Hostel",
                  type: "Budget-mid · Susukino, Sapporo",
                  price: "From ¥3,000/night (dorm) · ¥7,000/night (private)",
                  badge: "Best budget",
                  desc: "The best budget option in Sapporo — a well-designed hostel with private rooms and dormitories in the Susukino entertainment district. Walking distance to Ramen Yokocho, Odori Park, and the subway. Modern facilities, clean common areas, and a good café. The private rooms are genuinely comfortable at an excellent price for central Sapporo.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Furano/Biei Farm Guesthouses",
                  type: "Guesthouse · Furano or Biei town",
                  price: "¥4,000–8,000/night (dinner included)",
                  badge: "Best rural experience",
                  desc: "Small family-run guesthouses (minshuku) and farm stays in the Furano and Biei areas — the best way to experience Hokkaido&apos;s agricultural heartland at dawn when the fields are empty. Most offer dinner using produce from the surrounding farms. Limited English but universally friendly. Book ahead in July–August lavender season.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Hokkaido</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hokkaido is one of the great food regions of Japan. The priorities: Sapporo miso ramen at Ramen Yokocho, fresh sea urchin at Nijo Market, omakase sushi in Otaru, and at least one full Hokkaido crab dinner. The dairy and soft-serve ice cream are also genuinely world-class — not tourist gimmicks.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Ramen Yokocho (Ramen Alley), Sapporo",
                  t: "Ramen · Susukino, Sapporo",
                  d: "A narrow alley of 17 tiny ramen shops near Susukino station — Sapporo&apos;s most famous ramen destination. Each shop seats 8–12 people and has its own distinct broth. Sapporo miso ramen (with butter and corn) is the signature; rich crab ramen is the luxury option. Most shops open from noon to midnight. Budget ¥1,000–1,500. Queue 15–20 minutes in peak season.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Sapporo Kani Honke",
                  t: "Hokkaido crab · Odori, Sapporo",
                  d: "Sapporo&apos;s most famous crab restaurant, operating since 1967. Full Hokkaido king crab and snow crab courses served in a traditional Japanese setting. The kaiseki crab course (¥8,000–15,000/person) includes grilled crab legs, crab sashimi, crab miso soup, and crab roe over rice — a genuinely exceptional meal for a special occasion.",
                  b: "Best crab dinner",
                  c: "bg-red-50 border-red-200",
                },
                {
                  n: "Hakodate Morning Market (Asa-ichi)",
                  t: "Seafood market · Hakodate",
                  d: "If your itinerary includes Hakodate, the Asa-ichi morning market (5am–noon) is one of Japan&apos;s best food experiences. 250+ stalls sell live crab, fresh sea urchin, salmon roe, and squid. The uni (sea urchin) donburi — a bowl of warm rice topped with Rishiri sea urchin — is ¥3,000 and is genuinely among the best things you can eat in Japan.",
                  b: "Sea urchin donburi ¥3,000",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Otaru Sushi Street (Sushi-ya-dori)",
                  t: "Omakase sushi · Otaru",
                  d: "The single street in Otaru with over 20 sushi restaurants serving the freshest seafood in Japan. Hokkaido&apos;s cold waters produce exceptional sea urchin, salmon, king crab, and scallops. A lunch omakase set: ¥3,000–8,000. For a premium experience, ask for the counter seats and let the chef choose — the seasonal selection from Otaru&apos;s Sankaku Market that morning is the standard.",
                  b: "Best sushi in Hokkaido",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Nijo Market, Sapporo",
                  t: "Fresh seafood market · Odori, Sapporo",
                  d: "Sapporo&apos;s central fresh seafood market, 5 minutes walk from Odori Park. The best place in the city for a fresh uni donburi (¥2,000–4,000) eaten at a market counter. Market stall owners offer samples of crab and seafood — try before committing to a purchase. Open from early morning; busiest 8am–11am.",
                  b: "Best Sapporo breakfast",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Farm Tomita Café, Furano",
                  t: "Seasonal farm café · Furano",
                  d: "The café on Farm Tomita&apos;s grounds serves lavender soft-serve ice cream (¥400), lavender tea, and seasonal Hokkaido produce during lavender season (June–August). The lavender ice cream is genuinely excellent — a delicate floral sweetness, not the artificial lavender flavour found elsewhere. A Furano ritual.",
                  b: "Lavender ice cream ¥400",
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
            destination="Hokkaido Japan"
            hotels={[
              {
                name: "JR Tower Hotel Nikko Sapporo",
                type: "Luxury · Above Sapporo Station",
                price: "From ¥15,000/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/jp/jr-tower-hotel-nikko-sapporo.html?aid=2820480",
              },
              {
                name: "Hoshino Resorts Tomamu",
                type: "Luxury resort · Central Hokkaido",
                price: "From ¥40,000/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/jp/hoshino-resorts-tomamu.html?aid=2820480",
              },
              {
                name: "Grids Sapporo Hotel & Hostel",
                type: "Budget-mid · Susukino",
                price: "From ¥3,000/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/jp/grids-sapporo.html?aid=2820480",
              },
              {
                name: "Dormy Inn Otaru",
                type: "Mid-range · Otaru city centre",
                price: "From ¥8,000/night",
                rating: "4",
                badge: "Best Otaru base",
                url: "https://www.booking.com/hotel/jp/dormy-inn-otaru.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Sapporo Snow Festival Night Tour",
                duration: "3 hrs",
                price: "From ¥3,000/person",
                badge: "February only",
                url: "https://www.getyourguide.com/s/?q=sapporo+snow+festival&partner_id=PSZA5UI",
              },
              {
                name: "Furano Lavender Farm & Biei Blue Pond Day Tour",
                duration: "10 hrs",
                price: "From ¥8,000/person",
                badge: "Best day tour",
                url: "https://www.getyourguide.com/s/?q=furano+lavender+biei+blue+pond+tour&partner_id=PSZA5UI",
              },
              {
                name: "Otaru Glassblowing Experience",
                duration: "1 hr",
                price: "From ¥2,500/person",
                badge: "Hands-on",
                url: "https://www.getyourguide.com/s/?q=otaru+glassblowing&partner_id=PSZA5UI",
              },
              {
                name: "Niseko Powder Skiing Full Day",
                duration: "Full day",
                price: "From ¥7,500 (day pass)",
                badge: "Jan–Feb only",
                url: "https://www.getyourguide.com/s/?q=niseko+skiing+hokkaido&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Hokkaido</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "📅",
                  title: "Visiting Furano Before Mid-July for Lavender",
                  desc: "Hokkaido lavender peaks extremely late — the prime window at Farm Tomita is July 15–25. Before July 10, the fields may be only partially in bloom. After August 5, the harvest begins and rows are progressively cut. Check Farm Tomita&apos;s official bloom calendar (on their website annually, in Japanese — Google Translate is sufficient) before booking flights. Missing peak bloom after flying from abroad is a genuinely painful mistake.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🚉",
                  title: "Skipping Otaru",
                  desc: "Most first-time Hokkaido itineraries focus on Sapporo, Furano, and Biei and skip Otaru as &apos;just a port town.&apos; This is wrong. Otaru has the freshest sushi in Japan, a genuinely beautiful historic canal, a glass-making culture, and a pace that feels like Hokkaido before mass tourism. It is 35 minutes from Sapporo by JR train. Do not skip it.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🚗",
                  title: "Taking the Train for the Furano/Biei Loop",
                  desc: "The Furano/Biei area has a JR line, but trains are infrequent (1–2 per hour), stations are far from the actual attractions, and critical spots like Farm Tomita, the Blue Pond, and the Patchwork Road viewpoints are only reachable by car. Renting a car in Sapporo for Days 2–4 (¥6,000–10,000/day including insurance) is not optional — it transforms the experience completely.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🌸",
                  title: "Visiting in Spring Expecting Lavender or Snow",
                  desc: "Hokkaido is magnificent in exactly two seasons: summer (July–August, lavender, wildflowers, seafood, cycling) and deep winter (January–February, powder skiing, Snow Festival, frozen landscapes). Spring (April–May) has cherry blossoms but the landscape is otherwise brown and cold with late-melting snow. If choosing between spring Hokkaido and Honshu&apos;s autumn foliage, Honshu wins. Go to Hokkaido in summer or winter.",
                  color: "bg-pink-50 border-pink-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Hokkaido</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌄",
                  title: "Farm Tomita opens 24 hours — sunrise shots are possible",
                  desc: "Farm Tomita in Furano does not close during lavender season (mid-June through early August). Arriving at dawn (4:30–5:30am in Hokkaido&apos;s summer) gives you the lavender fields in golden sunrise light, completely empty of visitors, with Mt Tokachi-Dake in the background. This is one of the most beautiful landscape photographs available in Japan and requires only an early alarm. Drive from Sapporo takes 2 hours from 3am.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🔵",
                  title: "Blue Pond is most vivid between 10am and 2pm",
                  desc: "The Blue Pond&apos;s colour comes from refraction of sunlight through suspended aluminium hydroxide particles. Peak colour saturation occurs when the sun is overhead (10am–2pm) on a clear day. An overcast day reduces the vivid blue to a flat grey-green — check the forecast the evening before. Morning cloud that clears by 10am is ideal.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🕯️",
                  title: "Otaru Canal is best at night with the gas lanterns lit",
                  desc: "Otaru&apos;s canal is beautiful in daylight but extraordinary at night when the historic gas lanterns along both banks are lit. The warm amber glow reflects in the still water and illuminates the stone warehouse facades. Walk slowly along the full 1.3km canal path from 7pm to 9pm. Stay overnight in Otaru (canal-side accommodation ¥8,000–25,000) rather than returning to Sapporo the same evening.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🍺",
                  title: "Sapporo Beer Garden runs July–August under the stars",
                  desc: "The original Sapporo Brewery grounds transform into one of Japan&apos;s largest outdoor beer gardens in July and August. The Tsukinohama hall is most atmospheric: all-you-can-eat genghis khan mutton BBQ plus unlimited Sapporo Classic draft beer (the Hokkaido-only label) for ¥4,000–5,500/person for 2 hours. Book ahead — this fills up in peak season.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "💴",
                  title: "Carry cash — rural Hokkaido is largely cashless-card-resistant",
                  desc: "Hokkaido, like all of Japan, is substantially cash-based. Rural areas around Furano and Biei have very limited card acceptance. Farm stands, small restaurants, and rural ryokan commonly accept only yen. Withdraw cash at 7-Eleven, Lawson, or Japan Post ATMs in Sapporo before leaving the city — they reliably accept foreign cards. Carry at least ¥30,000 in cash for the countryside days.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎿",
                  title: "Book Niseko accommodation 3–6 months ahead for January–February",
                  desc: "Niseko is one of the world&apos;s most sought-after ski destinations. Peak powder weeks (late January to mid-February) fill up extremely quickly — the best mid-range accommodation is typically gone 3–4 months before arrival. Booking 6 months ahead is not excessive for the top resorts. Budget options last slightly longer but Niseko prices are high across all tiers during peak ski season.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Hokkaido" />

          {/* Combine With */}
          <CombineWith currentSlug="hokkaido-5-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "What is the best season to visit Hokkaido?",
                  a: "There are two clear peak seasons with entirely different appeals. Summer (July–August) is for lavender fields, wildflowers, fresh seafood, cycling, and hiking — temperatures are a comfortable 20–28°C while the rest of Japan bakes above 35°C. Winter (January–February) is for the Sapporo Snow Festival (second week of February), powder skiing at Niseko and Furano, and surreal snow-covered landscapes. Spring (April–May) has late cherry blossoms but is otherwise flat. Autumn (September–October) has good foliage but nothing matching the drama of the peak seasons. Pick summer or winter.",
                },
                {
                  q: "When is the Sapporo Snow Festival?",
                  a: "The Sapporo Snow Festival (Yuki Matsuri) is held annually in the first or second week of February — exact dates vary each year; check the official website at snowfes.com. The festival runs for 7 days and features monumental snow and ice sculptures in Odori Park — some exceeding 20 metres tall, requiring weeks to construct. It attracts approximately 2 million visitors. Book accommodation in Sapporo at least 3 months in advance for festival week.",
                },
                {
                  q: "Do I need to rent a car in Hokkaido?",
                  a: "For the Furano and Biei areas, yes — a car is effectively essential. The JR Furano Line exists but trains are infrequent, stations are far from the attractions, and the entire Patchwork Road experience is only possible by car. For a purely Sapporo and Otaru itinerary, the JR network is sufficient. International Driving Permits (IDP) are required for foreign licence holders — obtain from your national motoring authority before leaving home. Japanese roads are excellent and driving is relatively stress-free.",
                },
                {
                  q: "When is sea urchin season in Hokkaido?",
                  a: "Hokkaido sea urchin (uni) season runs from June through September, with different varieties peaking at slightly different times. The prized Rishiri uni (from Rishiri Island) peaks in July–August. Murasaki uni is available June–September. Bafun uni (smaller and richer) peaks May–August. Outside these months, sea urchin is still available at Otaru and Nijo Market but is often processed rather than fresh-live. July and August give you the widest selection of fresh live uni.",
                },
                {
                  q: "How do I get from Tokyo to Hokkaido?",
                  a: "Flying is strongly recommended. Tokyo Haneda or Narita to Sapporo New Chitose takes 1 hour 30 minutes, with dozens of daily flights on ANA, JAL, Jetstar, Peach, and AIR DO. Fares range from ¥8,000 to ¥20,000 depending on how far ahead you book — flights booked 2 months out are often under ¥10,000. The rail option via Hokkaido Shinkansen takes 8+ hours at higher cost and is not recommended unless you specifically want the Hakodate route.",
                },
                {
                  q: "Is Niseko or Furano better for skiing?",
                  a: "Different experiences. Niseko (2.5 hours from Sapporo) is Japan&apos;s most international ski resort — approximately 40% of visitors are non-Japanese, English is widely spoken, après-ski is excellent, and infrastructure is world-class. The powder is extraordinary, averaging 15 metres per season. Furano (2 hours from Sapporo) is more authentically Japanese — primarily domestic visitors, fewer English speakers, but excellent uncrowded powder runs at lower prices. Skilled powder skiers often prefer Furano for the empty runs; beginners and families prefer Niseko for the infrastructure and English support.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Hokkaido trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/hokkaido-5-days", label: "5-Day itinerary", icon: "📅" },
                { href: "/blog/japan-travel-guide", label: "Japan travel guide", icon: "🗾" },
                { href: "/blog/tokyo-7-days", label: "Tokyo 7 days", icon: "🗼" },
                { href: "/blog/kyoto-5-days", label: "Kyoto 5 days", icon: "⛩️" },
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
          <RelatedGuides currentSlug="hokkaido-5-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Japan &amp; Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Tokyo in 7 Days — The Complete Guide", href: "/blog/tokyo-7-days" },
                { label: "Kyoto in 5 Days — Temples &amp; Tradition", href: "/blog/kyoto-5-days" },
                { label: "Osaka in 4 Days — Food &amp; Street Life", href: "/blog/osaka-4-days" },
                { label: "Hiroshima in 2 Days — History &amp; Peace", href: "/blog/hiroshima-2-days" },
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
