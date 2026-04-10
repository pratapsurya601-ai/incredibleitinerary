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
const HAKONE_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Hakone Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚆",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "2-Day Itinerary" },
  { id: "landmarks",   emoji: "🗻",  label: "Landmark Guide" },
  { id: "budget",      emoji: "💰",  label: "Budget Breakdown" },
  { id: "stay",        emoji: "🏨",  label: "Where to Stay" },
  { id: "eat",         emoji: "🍽️", label: "Where to Eat" },
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
          href: `mailto:?subject=Hakone 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Hakone in 2 Days — Mount Fuji views, Owakudani black eggs and ryokan onsen&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/hakone-2-days"
        imageUrl="https://images.unsplash.com/photo-1578637387939-43c525550085?w=1200&q=80"
        description="Hakone in 2 Days: Mount Fuji views from Owakudani, Lake Ashi pirate ship cruise, Hakone Ropeway and ryokan onsen — complete 2026 travel guide."
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
export default function HakoneClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HAKONE_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hakone" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hakone mount fuji lake ashi japan torii gate reflection"
            fallback="https://images.unsplash.com/photo-1578637387939-43c525550085?w=1600&q=80"
            alt="Mount Fuji reflected in Lake Ashi with torii gate at Hakone, Japan"
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
              <span className="text-white/70">Hakone 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Japan Day Trip from Tokyo
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hakone in 2 Days:
                <em className="italic text-amber-300"> Mount Fuji, Ryokan Onsen &amp; Owakudani Black Eggs</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Japan distilled into two days — volcanic valleys, the Hakone Ropeway over Owakudani crater, a pirate ship on Lake Ashi, and a cedar-scented ryokan bath. 90 minutes from Tokyo. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="10 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🗻 Kanagawa, Japan</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ¥8,000/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Hakone is what happens when a volcanic rift, an ancient cedar forest, a lake full of pirate ships, and the world&apos;s most photographed mountain all converge within 90 minutes of one of the planet&apos;s largest cities — and the Japanese somehow add ryokan inns, sulfuric hot springs, and open-air sculpture parks to the mix.
            </p>
          </blockquote>

          {/* ── WHAT HAKONE ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Hakone Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Hakone is a mountainous resort town in Kanagawa Prefecture, roughly 100km southwest of Tokyo, sitting inside the caldera of an ancient volcano. The entire area is a national park — which means the landscape is extraordinarily well-preserved: dense cedar forests, steam venting from active volcanic fissures, a caldera lake (Ashi), and on clear days, a direct sightline to Mount Fuji that looks too perfect to be real.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Hakone Free Pass is the single most important logistics decision before you arrive. The ¥6,100 (2-day) pass from Shinjuku covers the Odakyu Romancecar express train, the Hakone-Tozan switchback mountain railway, the Gora funicular, the Hakone Ropeway over Owakudani, the Lake Ashi pirate ship cruise, and unlimited use of the local bus network. Without it, you&apos;ll spend nearly double buying individual tickets. Almost every experienced Hakone traveller treats the Free Pass as non-negotiable.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Hakone is famous for two things above all else: Mount Fuji views and onsen. The best Fuji views are from the Hakone Ropeway over Owakudani (particularly early morning, before cloud builds up), from the deck of the Lake Ashi pirate ship, and from the hillside between Owakudani and Togendai. The onsen — hot spring baths fed by the volcanic activity — range from shared communal baths at budget guesthouses to private outdoor rotenburo (open-air hot spring baths) on the terrace of a top-tier ryokan. Both are worth your time.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚆" label="From Tokyo" value="85 min" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Nov" />
              <StatCard icon="🗻" label="Fuji Views" value="Owakudani" />
              <StatCard icon="💰" label="Budget From" value="¥8,000/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Hakone</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Nov",
                  i: "🍂",
                  t: "Autumn — Best Season",
                  d: "The finest time to visit. Autumn foliage turns the valleys vivid red and orange from mid-October, Mount Fuji is freshly snow-capped and clearly visible, and the air is crisp. Temperatures are comfortable (10–18°C) for exploring all day. Book accommodation at least 6 weeks ahead — this is peak season.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌸",
                  t: "Spring — Cherry Blossom Season",
                  d: "Cherry blossoms line the Hakone-Tozan switchback railway from late March to early April, turning the mountain railway ride into one of Japan&apos;s most beautiful journeys. Popular and crowded — book accommodation months ahead. Mount Fuji is visible but the spring haze reduces clarity compared to autumn.",
                  b: "Cherry blossoms",
                  c: "bg-pink-50 border-pink-200",
                },
                {
                  s: "Jan–Feb",
                  i: "❄️",
                  t: "Winter — Clearest Fuji Views",
                  d: "Winter brings the clearest air and the most dramatic Mount Fuji views — cold, dry days with exceptional visibility from Owakudani and Lake Ashi. Temperatures drop to 2–8°C, which makes the onsen experience feel even better. The ropeway occasionally closes in heavy snow or ice. Off-peak pricing at most ryokan.",
                  b: "Best Fuji views",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🌧️",
                  t: "Summer/Rainy Season — Avoid",
                  d: "June is Japan&apos;s rainy season (tsuyu) — Mount Fuji is cloud-covered most of the time. July and August are Tokyo&apos;s summer escape season, so Hakone is extremely crowded and humid (28–33°C). The ropeway queues can be 45–60 minutes. If you must visit in summer, arrive at Owakudani before 9am.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚆 Getting to Hakone from Tokyo</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">The Hakone Free Pass tip:</strong> Buy the 2-day Hakone Free Pass (¥6,100 from Shinjuku) at the <strong className="font-medium">Odakyu Sightseeing Service Center</strong> at Shinjuku Station — ground floor, west exit. It includes the Romancecar reserved seat and covers all Hakone transport for 2 days. Far cheaper than buying each ticket individually.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚆",
                  t: "Odakyu Romancecar — Shinjuku to Hakone-Yumoto (recommended)",
                  d: "The fastest and most comfortable option. Depart Shinjuku Station on the Odakyu Romancecar express — 85 minutes direct to Hakone-Yumoto. Fare: ¥2,470 + ¥1,230 reserved seat surcharge (total ¥3,700). Included in the Hakone Free Pass. The panoramic front windows on the Romancecar make the mountain views cinematic. Book reserved seats at least a day ahead on weekends.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "Tokaido Shinkansen — Tokyo / Shinagawa to Odawara",
                  d: "Fastest overall: Tokyo or Shinagawa to Odawara by Kodama or Hikari shinkansen (35 minutes, ¥4,270 from Tokyo). Then transfer to the Hakone-Tozan railway from Odawara to Hakone-Yumoto (24 minutes, ¥340). Total: about 1 hour 10 minutes. More expensive than the Romancecar but faster if you are already at Tokyo or Shinagawa stations.",
                  b: "Fastest overall",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Odakyu Highway Bus — Shinjuku to Hakone",
                  d: "Odakyu operates direct buses from Shinjuku Bus Terminal to Hakone-Yumoto and Togendai (Lake Ashi). Journey time: 2 hours (no traffic) to 2.5 hours (with). Fare: ¥2,000–¥2,200. Cheaper than the Romancecar but slower and subject to highway congestion. Good if you have heavy luggage and cannot use the Free Pass.",
                  b: "Budget option",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Tokyo — Tomei Expressway",
                  d: "Tokyo to Hakone via the Tomei Expressway and Odawara-Atsugi Road: 90–120 minutes without traffic. Tolls approximately ¥2,500 one way. Parking is available at Gotemba Premium Outlets (free), Hakone-Yumoto (¥500–¥1,000/day), and Owakudani (¥700/day). A car gives flexibility but parking near the ropeway and Lake Ashi is limited at peak times.",
                  b: "Flexible",
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

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 2-Day Hakone Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Day 1 covers the ropeway circuit — Owakudani volcanic valley, black eggs, and Lake Ashi. Day 2 focuses on the Hakone Open Air Museum and Hakone Shrine. Both days end with ryokan onsen.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Romancecar Arrival · Hakone Ropeway · Owakudani · Lake Ashi Pirate Ship"
                cost="¥12,000–16,000 (pass, activities, accommodation)"
                items={[
                  "07:30 — Depart Shinjuku Station on the Odakyu Romancecar express (reserved seat ¥3,700 total, or ¥6,100 with the 2-day Hakone Free Pass). The 85-minute ride through the foothills of the Tanzawa Mountains has panoramic windows at the front of the train — sit there if you can.",
                  "09:30 — Arrive Hakone-Yumoto: Japan&apos;s most visited onsen town. The sulfur-scented steam rising from roadside vents is your first sign that this place sits on something geologically serious. Transfer to the Hakone-Tozan switchback railway (covered by Free Pass) — the zigzag climb through maple and hydrangea forests to Gora takes 40 minutes and is one of the most charming mountain railways in Japan.",
                  "10:30 — At Gora, take the funicular to Sounzan (5 minutes, Free Pass) then board the Hakone Ropeway (Free Pass or ¥1,800 one way). The 4km gondola ride over Owakudani volcanic valley is the signature Hakone experience. On clear mornings Mount Fuji fills the entire horizon — an almost implausible scale. The gondola passes over steaming sulfuric vents, grey volcanic rock, and patches of snow-covered hillside.",
                  "11:30 — Owakudani volcanic valley: disembark and walk the 30-minute volcanic crater trail (¥500 entry, occasionally closed for volcanic activity — check in advance). Buy a bag of kuro-tamago — 5 black eggs boiled in the sulfuric hot springs (¥600 per bag). The shells turn jet black from the iron sulfide in the water; the inside is a normal hard-boiled egg. Local legend says each egg extends your life by 7 years. The ramen at the Owakudani Station restaurant (¥950) is basic cafeteria food but the steaming crater view from every window is genuinely spectacular.",
                  "13:30 — Continue the ropeway down to Togendai on Lake Ashi. Board the Hakone Pirate Ship (Hakone Sightseeing Cruise, ¥1,200 one way Togendai–Hakone-machi, or Free Pass). The three ships — Vasa, Le Cyrano and Royale — are full-size replica 17th-century sailing vessels, which is ridiculous and wonderful. On calm clear days Mount Fuji reflects in the lake. Sit on the port (left) side heading toward Hakone-machi for the best Fuji views; cross to starboard approaching Moto-Hakone for the red torii gate.",
                  "15:30 — Disembark at Moto-Hakone. Walk 10 minutes to Hakone Shrine: the famous red torii gate standing in Lake Ashi is one of Japan&apos;s most photographed images. The shrine itself is set inside a cedar forest (free entry) — the approach through giant cryptomeria trees is as atmospheric as the waterfront gate.",
                  "17:30 — Check in to your ryokan or guesthouse in Hakone-Yumoto. Budget guesthouses: ¥4,000–6,000 per person including shared onsen bath. Mid-range ryokan: ¥15,000–22,000 per person including kaiseki dinner and breakfast. Soak in the onsen for at least 30 minutes before dinner — the sodium-chloride and sulfur-mineral water at Hakone-Yumoto is one of the best-documented therapeutic spring waters in Japan.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Hakone Open Air Museum · Hakone Shrine · Departure to Tokyo"
                cost="¥8,000–12,000 (museum, meals, transport back)"
                items={[
                  "07:00 — Morning onsen at the ryokan before checkout. A private rotenburo (outdoor bath) at a mid-range ryokan in the early morning — cedar planks, mountain air, sulfur steam — is one of the finest ways to start a day in Japan. Do not rush this.",
                  "08:30 — Ryokan breakfast (included in most mid-range rates): traditional Japanese morning meal with rice, miso soup, grilled mackerel or salmon, dashimaki tamago (rolled omelette), pickled vegetables, and cold tofu. The careful, unhurried ritual of a ryokan breakfast is itself a reason to stay overnight rather than day-tripping.",
                  "09:30 — Hakone Open Air Museum (Hakone Chokoku-no-Mori Bijutsukan): entry ¥1,600. Over 120 sculptures displayed across 7 hectares of landscaped hillside garden, with Mount Fuji as a backdrop on clear days. The Picasso Pavilion houses 300 works including ceramics, prints and paintings. The Symphonic Sculpture — a tower of 70,000 hand-cut glass pieces that chimes in the wind — is unmissable. The barefoot sensory path through the outdoor garden takes 30 minutes. Budget 2–2.5 hours.",
                  "12:00 — Lunch near the Open Air Museum or at a soba restaurant in Miyanoshita: try mori soba (cold buckwheat noodles, ¥900–¥1,200) with mountain wasabi grated fresh. Hakone buckwheat soba made with local spring water is noticeably better than standard Tokyo soba.",
                  "13:30 — Optional: Hakone Checkpoint Museum (Hakone Sekisho, ¥500) at Hakone-machi on Lake Ashi. The Edo-period checkpoint guarded the western approach to Tokyo (then Edo) from 1619 to 1869. The reconstructed gate and inspection rooms give a strong sense of the Tokaido road and the Tokugawa political system. The location directly on the lake shore is beautiful.",
                  "15:30 — Board the return Romancecar from Hakone-Yumoto to Shinjuku (85 minutes, ¥3,700 or included in Free Pass). The late afternoon light over the Tanzawa foothills turns the carriage windows gold. The reserved seat at the panoramic front of the Romancecar is worth every yen for the return journey.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Hakone" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗻 Hakone Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hakone&apos;s major sites in priority order. Entry fees as of 2026. The Hakone Free Pass covers the ropeway, pirate ship, switchback railway, and funicular — most transport costs disappear if you have it.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hakone Ropeway (Owakudani–Togendai section)",
                  e: "¥1,800 one way (or Free Pass)",
                  d: "The 4km gondola over Owakudani volcanic valley is the centrepiece of any Hakone visit. The views of Mount Fuji from the high point of the ropeway, combined with the surreal landscape of steaming volcanic vents directly below, are unlike anything in Japan. Go early morning for the clearest Fuji visibility. The ropeway occasionally closes for high winds or volcanic activity — check before departing Tokyo.",
                  t: "Must do · 30–45 min",
                },
                {
                  n: "Owakudani Volcanic Valley",
                  e: "¥500 (trail entry, occasional closures)",
                  d: "An active volcanic crater area with steaming sulfuric vents, grey rock fields, and the famous kuro-tamago (black eggs) cooked in the boiling sulfuric springs. The 30-minute crater trail gives a close-up view of the active geology. The eggs (¥600 for 5) are a ritual as much as a snack. The area can close with short notice if volcanic activity increases — check the Hakone Tourism website.",
                  t: "Must do · 1–1.5 hrs",
                },
                {
                  n: "Lake Ashi Pirate Ship Cruise",
                  e: "¥1,200 one way (or Free Pass)",
                  d: "The three replica 17th-century sailing ships cross 10km of Lake Ashi between Togendai, Hakone-machi, and Moto-Hakone. Mount Fuji views from the deck are best in the morning; the Hakone Shrine red torii gate comes into view approaching Moto-Hakone. One-way from Togendai to Moto-Hakone is the most scenic route. Outdoor deck space is limited on busy days — board early.",
                  t: "Must do · 40 min",
                },
                {
                  n: "Hakone Open Air Museum",
                  e: "¥1,600",
                  d: "Japan&apos;s first open-air art museum, opened 1969. 120+ sculptures across 7 hectares by Henry Moore, Niki de Saint Phalle, Miro, and others. The Picasso Pavilion with 300 works and the Symphonic Sculpture glass tower are the standout pieces. The outdoor hot spring foot bath in the garden (free with entry) is a welcome mid-visit rest. Allow 2–2.5 hours.",
                  t: "Must see · 2–2.5 hrs",
                },
                {
                  n: "Hakone Shrine & Lake Ashi Torii Gate",
                  e: "Free",
                  d: "The red torii gate standing in Lake Ashi, with Mount Fuji sometimes visible beyond it, is the most iconic image in Hakone. The shrine itself is set inside a dense cedar forest with 400-year-old cryptomeria trees. The lakeside approach at dawn or dusk (when the tourist crowds thin out) is extraordinary. The walk from Moto-Hakone bus stop through the forest to the shrine takes 20 minutes each way.",
                  t: "Must see · 45 min",
                },
                {
                  n: "Hakone-Tozan Switchback Railway",
                  e: "Included in Free Pass (¥620 standalone)",
                  d: "Japan&apos;s only mountain adhesion railway using the switchback technique — the train reverses direction three times as it zigzags up the steep mountain slope from Hakone-Yumoto to Gora. The hydrangea season (mid-June to July) turns the entire route into a river of purple and blue blossoms. Outside blooming season, the cedar and maple forest views are still beautiful and the engineering is fascinating.",
                  t: "Scenic transit · 40 min",
                },
                {
                  n: "Hakone-Yumoto Onsen Town",
                  e: "Free to explore; baths ¥800–¥1,500",
                  d: "The main onsen district at the foot of the mountain. Over 20 public bath houses (sento and onsen) are open to day visitors from ¥800–¥1,500. The Tenzan Tohji-kyo (¥1,500) is the most popular public onsen with multiple indoor and outdoor baths. The shopping street selling yosegi zaiku (traditional Hakone wood mosaic crafts) and onsen manju (sweet steamed buns) runs from the station.",
                  t: "Evening / morning",
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
            title="Hakone — Fuji Views, Volcanic Valleys &amp; Ryokan Onsen"
            subtitle="Japan&apos;s most beautiful weekend escape, 90 minutes from Tokyo."
            spots={[
              {
                name: "Mount Fuji from Owakudani",
                query: "mount fuji owakudani hakone ropeway volcanic valley japan",
                desc: "Mount Fuji rising above the steam of Owakudani volcanic valley — the defining view of any Hakone visit.",
              },
              {
                name: "Lake Ashi Torii Gate",
                query: "hakone lake ashi torii gate shrine mount fuji reflection japan",
                desc: "The red torii gate of Hakone Shrine standing in Lake Ashi with Mount Fuji in the background.",
              },
              {
                name: "Hakone Ropeway Gondola",
                query: "hakone ropeway gondola cable car japan mountains",
                desc: "The Hakone Ropeway gondola crossing over the Owakudani volcanic valley towards Lake Ashi.",
              },
              {
                name: "Ryokan Rotenburo Onsen",
                query: "hakone ryokan rotenburo outdoor onsen hot spring japan cedar forest",
                desc: "An outdoor rotenburo hot spring bath at a Hakone ryokan — cedar planks, mountain air, and mineral-rich volcanic water.",
              },
              {
                name: "Hakone Open Air Museum",
                query: "hakone open air museum sculpture garden japan mount fuji",
                desc: "Sculptures across the hillside garden of the Hakone Open Air Museum with Mount Fuji visible in the distance.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hakone is not cheap compared to most Japanese destinations — the ryokan experience in particular is a significant cost. However, the Hakone Free Pass dramatically reduces transport costs, and budget travellers can have an excellent two days for under ¥25,000 total.
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
                    ["🚆 Hakone Free Pass (2 days)", "¥6,100 from Shinjuku", "¥6,100 from Shinjuku", "N/A (private car)"],
                    ["🏨 Accommodation (1 night)", "¥4,000–6,000 (guesthouse)", "¥15,000–22,000 (ryokan)", "¥60,000–120,000 (top ryokan)"],
                    ["🍽 Food (2 days)", "¥3,000–5,000", "¥6,000–10,000", "¥15,000–25,000"],
                    ["🗻 Activities & entry fees", "¥2,600 (eggs, museum, shrine)", "¥5,000–8,000 (guide, museum)", "¥20,000–40,000 (private)"],
                    ["🚗 Private transport", "N/A", "N/A", "¥25,000–40,000"],
                    ["TOTAL (per person, 2 days)", "¥15,000–20,000", "¥32,000–46,000", "¥120,000–185,000"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (¥8,000–12,000/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay at Fuji Hakone Guest House or a Hakone-Yumoto guesthouse (¥4,000–6,000/night including shared onsen). Buy the Free Pass. Eat ramen and convenience store snacks. Skip the guided tours. You can do all the major sights for under ¥20,000 total for the 2 days.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (¥20,000–30,000/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Hakone Kowakien Tenyu or a similar mid-range ryokan (¥15,000–22,000/night including kaiseki dinner and breakfast). Buy the Free Pass. The ryokan meals make up most of your food budget. This is the ideal Hakone experience — authentic without being excessive.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (¥60,000+/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Stay at Gora Kadan or Hakone Ginyu (¥60,000–120,000/night) with private rotenburo and top-tier kaiseki. Private car from Tokyo, private museum tours, sake sommelier pairings. The ryokan at this level is a complete experience — not just accommodation.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Hakone</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The main bases in Hakone are Hakone-Yumoto (most transport connections, most guesthouses), Miyanoshita (quiet, mid-mountain, historic hotels), Gora (high altitude, good ropeway access), and the lakeside Moto-Hakone area. For a 2-day visit, Hakone-Yumoto is the most practical base.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Gora Kadan",
                  type: "Luxury ryokan · Gora district",
                  price: "From ¥60,000/person/night",
                  badge: "Most prestigious",
                  desc: "A former imperial villa converted into Hakone&apos;s most celebrated ryokan. Private rotenburo on every room&apos;s terrace, kaiseki meals using Odawara seafood and Hakone mountain vegetables, and a level of service that redefines attentiveness. Requires booking months ahead for autumn and cherry-blossom season.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hakone Kowakien Tenyu",
                  type: "Mid-range ryokan · Kowakidani district",
                  price: "From ¥22,000/person/night (inc. meals)",
                  badge: "Best mid-range",
                  desc: "One of Hakone&apos;s finest mid-range ryokan, set in a traditional garden with multiple indoor and outdoor hot spring baths. The kaiseki dinner is excellent and the shared onsen facilities are beautiful. Access to the Yunessun spa complex (Kowakien theme park) is included for guests. Well-connected by Hakone-Tozan bus.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Fuji Hakone Guest House",
                  type: "Budget guesthouse · Sengokuhara district",
                  price: "From ¥4,500/person/night",
                  badge: "Best budget",
                  desc: "A long-running budget guesthouse in the quieter Sengokuhara area, popular with backpackers and solo travellers. Basic tatami-style rooms, shared Japanese-style baths using natural hot spring water, and a helpful English-speaking owner who gives excellent local advice. Simple breakfast available. Book ahead in peak season.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Fujiya Hotel, Miyanoshita",
                  type: "Historic Western hotel · Miyanoshita district",
                  price: "From ¥25,000/room/night",
                  badge: "Most historic",
                  desc: "Japan&apos;s oldest resort hotel, opened in 1878. The Victorian dining room with stained-glass windows, the carefully preserved heritage rooms, and the hotel&apos;s own hot spring pools make this a genuinely unique stay. The smoked Hakone trout and wagyu fillet in the original dining room are excellent. Charles Chaplin, Eleanor Roosevelt and John Lennon all stayed here.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Hakone</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Most mid-range and luxury ryokan include both dinner and breakfast in their rates — if you&apos;re staying at a ryokan, your main food decision is just lunch. Budget travellers will find the best independent restaurants clustered around Hakone-Yumoto station and in the Owakudani area.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Kaiseki at your Ryokan",
                  t: "Included in most mid-range and luxury ryokan rates",
                  d: "The kaiseki dinner (traditional multi-course Japanese meal) served at Hakone&apos;s ryokan is the finest dining experience available in the area. Eight to twelve courses using seasonal mountain vegetables, river fish from local streams, Sagami Bay seafood, and Kanagawa wagyu beef. The pacing, presentation, and quality at mid-range ryokan (¥15,000/person rates) are genuinely impressive — don&apos;t eat a large lunch if you have kaiseki booked.",
                  b: "Best dinner",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Owakudani Crater Ramen",
                  t: "Cafeteria · Owakudani Ropeway Station",
                  d: "The ramen topped with a kuro-tamago (black egg) at the Owakudani station cafeteria is ¥950 — basic but perfectly serviceable, and the steaming volcanic crater visible through every window makes it one of the more surreal lunch settings in Japan. The black egg ramen is a Hakone ritual as much as a meal. Expect queues at peak times.",
                  b: "Iconic experience",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Hakone Tozan Soba — Miyanoshita",
                  t: "Traditional soba · Miyanoshita",
                  d: "Several small soba restaurants in Miyanoshita serve handmade buckwheat noodles using local mountain spring water. Mori soba (cold, ¥900–¥1,200), kake soba (hot broth, ¥800), and tempura soba sets (¥1,500–¥1,800). The soba made with Hakone water has a notably clean, fresh flavour. Lunch only — arrive before 1pm as they often sell out.",
                  b: "Best local food",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Fujiya Hotel Dining Room",
                  t: "Historic Western cuisine · Miyanoshita",
                  d: "Japan&apos;s oldest hotel restaurant, operational since 1878. The Victorian dining room with stained-glass windows and white-gloved service is an extraordinary setting. Smoked Hakone trout, wagyu beef fillet, and the hotel&apos;s signature curry are the highlights. Lunch sets from ¥3,500, dinner from ¥8,000. Book ahead for dinner — the room fills quickly at weekends.",
                  b: "Most historic",
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
            destination="Hakone Japan"
            hotels={[
              {
                name: "Gora Kadan",
                type: "Luxury ryokan · Private rotenburo · Kaiseki",
                price: "From ¥60,000/person/night",
                rating: "5",
                badge: "Most prestigious",
                url: "https://www.booking.com/hotel/jp/gora-kadan.html?aid=2820480",
              },
              {
                name: "Hakone Kowakien Tenyu",
                type: "Mid-range ryokan · Multiple hot spring baths",
                price: "From ¥22,000/person/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/jp/hakone-kowakien-tenyu.html?aid=2820480",
              },
              {
                name: "Fujiya Hotel",
                type: "Historic Western hotel · Est. 1878 · Miyanoshita",
                price: "From ¥25,000/room/night",
                rating: "4",
                badge: "Most historic",
                url: "https://www.booking.com/hotel/jp/fujiya-hotel-miyanoshita.html?aid=2820480",
              },
              {
                name: "Fuji Hakone Guest House",
                type: "Budget guesthouse · Natural hot spring baths",
                price: "From ¥4,500/person/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/jp/fuji-hakone-guest-house.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Hakone Full Day Tour from Tokyo",
                duration: "10 hrs",
                price: "From ¥8,500/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=Hakone+Japan+full+day+tour&partner_id=PSZA5UI",
              },
              {
                name: "Owakudani Volcanic Valley & Black Eggs Tour",
                duration: "4 hrs",
                price: "From ¥4,500/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=Hakone+Owakudani+tour&partner_id=PSZA5UI",
              },
              {
                name: "Hakone Ropeway & Lake Ashi Cruise",
                duration: "3 hrs",
                price: "From ¥3,500/person",
                url: "https://www.getyourguide.com/s/?q=Hakone+ropeway+lake+ashi&partner_id=PSZA5UI",
              },
              {
                name: "Hakone Onsen & Ryokan Experience",
                duration: "Full day",
                price: "From ¥12,000/person",
                url: "https://www.getyourguide.com/s/?q=Hakone+ryokan+onsen+experience&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Hakone</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "📅",
                  title: "Going on a weekend without booking accommodation early",
                  desc: "Hakone is Tokyo&apos;s primary weekend escape. Popular ryokan sell out 2–3 months ahead for Saturday nights in October and during cherry-blossom season. Book mid-range ryokan at least 6 weeks ahead and top-tier properties 3 months ahead. Weekday visits are noticeably less crowded and often 20–30% cheaper.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "☁️",
                  title: "Not checking the Mount Fuji visibility forecast before going",
                  desc: "Mount Fuji is obscured by clouds roughly 60% of the time, and the percentage is higher in summer and rainy season. Check the Hakone Tourism webcam (hakone.or.jp) the day before. If the forecast shows clouds, consider adjusting your ropeway timing to the very early morning — Mount Fuji is most visible before 10am before haze builds. A cloudy Owakudani is still impressive, but the ropeway without Fuji views is noticeably less dramatic.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎫",
                  title: "Buying individual tickets instead of the Hakone Free Pass",
                  desc: "The Hakone Free Pass (¥6,100 for 2 days from Shinjuku) covers the Romancecar, Hakone-Tozan switchback railway, Gora funicular, Hakone Ropeway, Lake Ashi pirate ship, and the entire local bus network. Buying each ticket individually costs ¥9,000–11,000 for the same itinerary. The Free Pass pays for itself on Day 1 alone.",
                  color: "bg-yellow-50 border-yellow-200",
                },
                {
                  icon: "🧖",
                  title: "Skipping the onsen because of tattoo concerns",
                  desc: "Many public onsen in Hakone prohibit visible tattoos, but almost all ryokan offer private family baths (kashikiri onsen) that can be reserved by the hour at no or minimal extra cost. Ask your ryokan in advance — private bath availability is almost universal. Tenzan Tohji-kyo in Hakone-Yumoto also has private rooms available.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🥚",
                  title: "Not checking the ropeway status before leaving Tokyo",
                  desc: "The Hakone Ropeway closes for annual maintenance (typically mid-January for 2–3 weeks) and occasionally shuts for strong winds, rain, or elevated volcanic activity at Owakudani. Always check the Hakone Ropeway official website (hakonenavi.jp/ropeway) before your trip. Buses run as a substitute during maintenance closures but the experience is completely different.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{m.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Hakone</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🎫",
                  title: "Buy the Free Pass at Shinjuku Odakyu counter",
                  desc: "The 2-day Hakone Free Pass (¥6,100) from the Odakyu Sightseeing Service Center at Shinjuku Station west exit is the single best Hakone purchase. It covers the Romancecar reserved seat, ropeway, switchback railway, pirate ship, and all local buses. The counter opens at 8am — arrive early on weekends to avoid queues for reserved seats.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🌅",
                  title: "Time the ropeway for early morning on clear days",
                  desc: "Mount Fuji is most visible before 10am, when the air is coldest and clearest. If your first morning in Hakone is clear, prioritise the ropeway over breakfast. The Owakudani area at 9am — before the day-trippers arrive — is dramatically less crowded and the Fuji views are at their best. Morning cloud builds quickly, especially from May to September.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "♨️",
                  title: "Pack a small towel and learn basic onsen etiquette",
                  desc: "Japanese onsen require showering before entering the communal bath, no swimwear, and complete silence. Most ryokan provide a small yukata robe and towel on arrival. Budget guesthouses sometimes charge a small fee for towels. The sulfur-rich Hakone water temporarily discolours silver jewellery — leave it in your room. The water is extremely hot (42–45°C at many baths) — enter slowly.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗻",
                  title: "Position yourself correctly on the pirate ship",
                  desc: "Boarding the Lake Ashi pirate ship at Togendai heading to Hakone-machi, sit on the port (left) side for the best Mount Fuji views across the lake. Approaching Moto-Hakone, cross to the starboard (right) side for the Hakone Shrine red torii gate. If the outdoor deck is crowded, the upper deck gives better views over the ship&apos;s rigging than the main deck.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🍱",
                  title: "Eat a light lunch on ryokan days",
                  desc: "Ryokan kaiseki dinners begin at 6pm–7pm and run to 8–12 courses. Many first-time ryokan guests make the mistake of eating a full lunch and then cannot finish the kaiseki dinner. Eat a light lunch (soba, onigiri, or a bowl of ramen) and arrive at dinner hungry. The kaiseki at a good Hakone ryokan is one of the most considered meals you will have in Japan.",
                  color: "bg-rose-50 border-rose-200",
                },
                {
                  icon: "🌲",
                  title: "Visit Hakone Shrine early morning or late afternoon",
                  desc: "The Hakone Shrine red torii gate on Lake Ashi is mobbed by tour groups from 10am to 3pm. Visiting at 7am–8:30am (the shrine is always open) or after 4pm gives you the cedar forest approach and the lakeside torii almost to yourself. The early morning mist over the lake is particularly beautiful. The shrine itself is free and the 20-minute forest walk from Moto-Hakone bus stop is worth doing at any time of day.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Hakone" />

          {/* Combine With */}
          <CombineWith currentSlug="hakone-2-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from Tokyo to Hakone?",
                  a: "The best option is the Odakyu Romancecar express from Shinjuku to Hakone-Yumoto (85 minutes, ¥2,470 + ¥1,230 reserved seat surcharge). The Hakone Free Pass (¥6,100 for 2 days from Shinjuku) includes the Romancecar and covers all transport within Hakone — ropeway, switchback railway, funicular, pirate ship, and local buses. Alternatively, take the Tokaido Shinkansen from Tokyo to Odawara (35 minutes, ¥4,270) then the Hakone-Tozan railway to Hakone-Yumoto (24 minutes). The shinkansen is faster overall but more expensive.",
                },
                {
                  q: "What is the best time of year to visit Hakone?",
                  a: "October and November are the best months: autumn foliage turns the valleys vivid red and orange, Mount Fuji is freshly snow-capped and clearly visible, and the air is at its crispest. Late March to early April brings cherry blossoms along the switchback railway. January and February offer the clearest Mount Fuji views but can be very cold. Avoid June (Japan&apos;s rainy season) and July–August (humid and extremely crowded as Tokyo empties out on weekends).",
                },
                {
                  q: "Can I do Hakone as a day trip from Tokyo?",
                  a: "Technically yes, but a day trip is rushed and misses Hakone&apos;s best feature — the ryokan onsen experience, which requires an overnight stay. If you must day-trip, focus on the ropeway and Owakudani in the morning, the pirate ship cruise, and one of the lakeside sites (Hakone Shrine or the Open Air Museum). The 1-day Hakone Free Pass (¥5,000 from Shinjuku) covers a day trip itinerary. Leave Shinjuku by 7:30am and return by 7pm.",
                },
                {
                  q: "What are the black eggs of Owakudani and are they worth it?",
                  a: "Kuro-tamago are regular eggs hard-boiled in Owakudani&apos;s sulfuric hot springs. The iron sulfide in the water reacts with the eggshell to turn it jet black, while the inside is a completely normal hard-boiled egg with a mild sulfurous flavour. They are sold in bags of 5 for ¥600. Local legend says each egg extends your life by 7 years — which makes a bag of 5 worth ¥600 by almost any measure. The real appeal is eating them beside active volcanic vents with Mount Fuji in the background.",
                },
                {
                  q: "What is the Hakone Free Pass and is it worth buying?",
                  a: "The Hakone Free Pass is an unlimited transport pass sold by Odakyu Railway covering the Romancecar express, Hakone-Tozan switchback railway, Gora funicular, Hakone Ropeway over Owakudani, Lake Ashi pirate ship cruise, and all local Hakone buses. The 2-day pass is ¥6,100 from Shinjuku (includes the Romancecar reserved seat). Buying each ticket individually costs ¥9,000–11,000 for the same itinerary. It is almost always worth purchasing for any overnight visit. The 1-day pass (¥5,000) is available for day trips.",
                },
                {
                  q: "What is a ryokan and what should I expect?",
                  a: "A ryokan is a traditional Japanese inn. Guests sleep on futon mattresses laid on tatami straw floors, wear provided yukata robes in common areas, and are served meals (kaiseki dinner and Japanese breakfast) in their room or a private dining room. The defining feature of Hakone ryokan is the onsen — natural volcanic hot spring baths available to guests, either communal or private. Mid-range ryokan (¥15,000–22,000 per person including meals) offer an authentic experience without the prohibitive cost of top-tier properties. Etiquette: remove shoes at the entrance, shower before entering any onsen bath, and walk quietly in corridors after 9pm.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* ── MORE RESOURCES ── */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Hakone trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/hakone-free-pass-guide", label: "Hakone Free Pass guide", icon: "🎫" },
                { href: "/blog/hakone-ryokan-guide", label: "Best ryokan in Hakone", icon: "♨️" },
                { href: "/blog/mount-fuji-views-hakone", label: "Best Fuji viewpoints", icon: "🗻" },
                { href: "/blog/hakone-onsen-guide", label: "Onsen etiquette guide", icon: "🛁" },
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
          <RelatedGuides currentSlug="hakone-2-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Japan Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Tokyo in 5 Days — Complete City Guide", href: "/blog/tokyo-5-days" },
                { label: "Kyoto in 4 Days — Temples &amp; Tradition", href: "/blog/kyoto-4-days" },
                { label: "Osaka in 3 Days — Food &amp; Culture", href: "/blog/osaka-3-days" },
                { label: "Nikko in 2 Days — Mountain Shrines", href: "/blog/nikko-2-days" },
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
