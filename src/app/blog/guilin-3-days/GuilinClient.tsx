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
import { PinterestSaveButton } from "@/components/ui/PinterestSaveButton";

// ── Table of Contents ─────────────────────────────────────────────────────────
const GUILIN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Guilin Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "Day-by-Day Itinerary" },
  { id: "landmarks",  emoji: "⛰️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Guilin 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Guilin in 3 Days — Li River cruise, karst peaks and Yangshuo cycling&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        url="https://www.incredibleitinerary.com/blog/guilin-3-days"
        imageUrl="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"
        description="Guilin in 3 Days: Li River cruise, Yangshuo karst cycling, Reed Flute Cave and the landscape on China&apos;s 20-yuan banknote — complete travel guide with budget breakdown."
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
export default function GuilinClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GUILIN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Guilin" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="guilin karst mountains li river china rice terraces"
            fallback="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&q=80"
            alt="Guilin China karst limestone peaks reflected in Li River morning mist"
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
              <span className="text-white/70">Guilin 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  East Asia
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Guilin in 3 Days:
                <em className="italic text-amber-300"> Li River, Karst Peaks &amp; Yangshuo</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The landscape on China&apos;s 20-yuan banknote. Cormorant fishermen on bamboo rafts, a 4.5-hour river cruise through sheer limestone peaks, and cycling Yangshuo&apos;s karst countryside. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="12 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇨🇳 Guilin, China</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ¥250/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              This is the landscape that appears on every Chinese scroll painting, every classical ink drawing, and — most famously — the back of every 20-yuan banknote: limestone karst peaks rising sheer and sudden from a flat green plain, the Li River winding between them as cormorant fishermen pole bamboo rafts through morning mist.
            </p>
          </blockquote>

          {/* ── WHAT GUILIN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Guilin Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Guilin is not a single sight — it&apos;s a landscape. The city itself sits at the northern end of a 120-kilometre corridor of karst scenery that stretches south along the Li River to Yangshuo. The peaks are genuine: limestone towers rising 200–500 metres straight up from flat rice paddies, sculpted by water over 300 million years into forms so theatrical they look designed. The Chinese have a phrase for it — &quot;Guilin&apos;s landscape is the finest under heaven&quot; (桂林山水甲天下) — and for once, a tourist slogan is not overselling it.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city of Guilin (population ~800,000) is the gateway. It has the airport, the train connections, and two worthwhile sites in their own right: Reed Flute Cave — a 240-metre-long limestone cave illuminated in kaleidoscopic colours — and Elephant Trunk Hill, the city&apos;s most recognisable landmark, where a rock formation genuinely resembles an elephant drinking from the Li River. But the real reason to come is 83 kilometres downstream.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Yangshuo is the base most experienced travellers choose. Smaller, slower, surrounded by the best karst scenery, and with a well-developed network of cycling routes through countryside so picturesque it strains belief. The Li River cruise connecting Guilin to Yangshuo — 4.5 hours through the finest stretch of the river — is the centrepiece of any Guilin trip. Everything else builds around it.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="KWL Guilin" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun / Sep–Nov" />
              <StatCard icon="🛶" label="Li River Cruise" value="4.5 hrs / 83 km" />
              <StatCard icon="💰" label="Budget From" value="¥250/day (~$35)" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Guilin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌿",
                  t: "Spring — Best Season",
                  d: "18–26°C, lush green rice paddies, mist on the peaks in the early morning. April and May are ideal: warm but not oppressive, the terraces are emerald green, and the river runs full. Early June remains good before the heavy rains arrive. The most photogenic season for karst scenery.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Peak Photography Season",
                  d: "18–25°C, clear skies after summer rains, golden light on the peaks. September and October are excellent — harvest season at Longji Rice Terraces turns the hillsides amber and gold. The most popular time to visit, so book accommodation in Yangshuo early.",
                  b: "Most popular",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "🌧️",
                  t: "Summer — Hot and Wet",
                  d: "28–36°C with high humidity and heavy rainfall. June and July see the most rain — cruises are rarely cancelled but mist can obscure the peaks. Some travellers love the atmospheric mist; others find the downpours disruptive. Accommodation cheaper than peak season.",
                  b: "Manageable",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cool and Quiet",
                  d: "5–14°C. Crowds thin out dramatically after Chinese New Year. The landscape is bare but still striking, and prices drop. Rare cold snaps can bring frost to Longji. If you don&apos;t mind cooler weather, winter offers solitude that&apos;s impossible in spring and autumn.",
                  b: "For quieter travel",
                  c: "bg-parchment border-parchment-2",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to Guilin</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Guilin Liangjiang International Airport (KWL) is 28km from the city centre. The <strong className="font-medium">Airport Shuttle Bus Line 3</strong> runs to central Guilin (¥20, ~40 minutes). Taxis cost ¥80–¥100. High-speed trains connect Guilin to Guangzhou (2.5 hrs, ¥200) and Shanghai (7 hrs, ¥500+).
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into Guilin Liangjiang (KWL)",
                  d: "Direct flights from Beijing (2.5 hrs), Shanghai (2 hrs), Guangzhou (1 hr), Hong Kong (1 hr), and major Chinese cities. International connections include Bangkok, Kuala Lumpur, Seoul, and Singapore. From the airport: Airport Shuttle Bus Line 3 to Guilin city centre (¥20, 40 min). Taxi ¥80–¥100.",
                  b: "Most common",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚄",
                  t: "High-Speed Train from Guangzhou",
                  d: "Guangzhou South → Guilin North: 2.5–3 hours, ¥170–¥200 second class. Excellent option if arriving via Hong Kong (take MTR to Guangzhou Shenzhen border, then high-speed train). The train arrives at Guilin North Station, 6km from the city centre (taxi ¥25–¥35 or metro).",
                  b: "Best from Hong Kong/Guangzhou",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚄",
                  t: "High-Speed Train from Shanghai / Beijing",
                  d: "Shanghai Hongqiao → Guilin: ~7 hours, ¥490–¥580 second class. Beijing → Guilin: ~7–8 hours with one change. Both are overnight-viable. Book on Trip.com or the 12306 app (requires a Chinese phone number or use Trip.com for foreign cards).",
                  b: "Overnight viable",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Guangzhou or Shenzhen",
                  d: "Express coach services run overnight from Guangzhou and Shenzhen to Guilin (7–8 hours, ¥100–¥150). Budget option, comfortable enough for the journey. Departs evening, arrives early morning.",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Guilin Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary follows the natural logic of the region: arrive Guilin, take the cruise to Yangshuo, then base yourself in Yangshuo for the karst countryside. Day 3 offers a Longji Rice Terraces option for those with the time.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive Guilin · Reed Flute Cave · Elephant Trunk Hill · Two Rivers Four Lakes"
                cost="¥300–¥400 (transport + entries + food + accommodation)"
                items={[
                  "Arrive Guilin Liangjiang Airport. Take Airport Shuttle Bus Line 3 to city centre (¥20, ~40 minutes). Check in to your hotel — the area around the Li River and Zhongshan Road is the most convenient base.",
                  "Morning: Reed Flute Cave (芦笛岩) — a 240-metre limestone cave sculpted over 180 million years, nicknamed the 'Palace of Natural Arts'. Entry ¥90 (~$12). The coloured LED lighting is theatrical rather than natural, but the stalactite formations are genuinely extraordinary — curtains of calcite, mushroom-shaped stalagmites, and a vast underground lake. Allow 1–1.5 hours. Book tickets online to avoid queues.",
                  "Afternoon: Elephant Trunk Hill (象鼻山) — the symbol of Guilin, where a natural limestone arch at the southern end of a hill creates the unmistakable silhouette of an elephant drinking from the Li River. Entry ¥75 (~$10). You can also view it for free from the bridge on Binjiang Road — the angle is slightly different but no less striking. The surrounding park has pleasant riverside walks.",
                  "Late afternoon: Fubo Hill (伏波山) — a lone peak rising from the Li River with a famous cave containing Tang Dynasty Buddhist carvings and an 1,000-year-old sword embedded in stone. Entry ¥35. Climb to the summit (15 minutes) for an excellent panorama of the city and the river karst.",
                  "Evening: Two Rivers Four Lakes (两江四湖) scenic area — Guilin&apos;s urban waterway linking the Li River, Peach Blossom River, and four connected lakes, ringed by illuminated pagodas and bridges. The evening light show (free, best from 7–9pm) transforms the central city into something genuinely beautiful. Walk the full 7km loop or take a cruise (¥150).",
                  "Dinner: Guilin rice noodles (桂林米粉, ¥10–15) at a street stall near Zhongshan Road — silky rice noodles in pork bone broth with pickled vegetables, crispy soybeans, and chilli. This is Guilin&apos;s most beloved dish. Eat it at least twice.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Li River Cruise Guilin → Yangshuo · Karst Cycling · West Street"
                cost="¥480–¥600 (cruise + bike + accommodation + food)"
                items={[
                  "This is the centrepiece day. Wake early — the official Li River cruise departs from Zhujiang Pier (竹江码头), 23km south of Guilin city, at approximately 9am. Take a taxi (¥60–80) or join a hotel-organised shuttle. The cruise costs ¥315 standard class or ¥498 first class (2026 rates, book in advance during peak season). The journey covers 83km and takes 4–4.5 hours.",
                  "The first 30 minutes are pleasant but the scenery escalates sharply around the 1-hour mark as the peaks close in. Key highlights en route: Crown Cave area (peaks stack behind peaks like overlapping brushstrokes), Nine Horse Fresco Hill (九马画山) — a cliff face where the rock patterns supposedly reveal nine horses depending on your angle — and Xingping Ancient Town, where the river bends through the most famous view in China: the exact landscape on the 20-yuan (¥20) banknote. Take out a 20-yuan note and compare.",
                  "Arrive Yangshuo ~1:30–2pm. The arrival pier delivers you directly to the town. Check in to your guesthouse — Yangshuo&apos;s best accommodations are in the surrounding countryside, a short taxi or bike ride away.",
                  "Afternoon: rent a bicycle (¥20–25/day for a standard bike, ¥50–80 for an e-bike) and ride the classic karst countryside loop. Head south on Pantao Road past the Yulong River, turn at the Big Banyan Tree (大榕树, entry ¥60 or admire from outside), and continue to Moon Hill (月亮山) — a natural arch in a karst peak, visible from the road, with a 20-minute climb to the base of the arch (entry ¥15). The cycling is flat, the roads are narrow, and the views are the best in the region.",
                  "Evening: West Street (西街), Yangshuo&apos;s famous pedestrian night strip. More touristy than authentic, but genuinely lively — bar terraces, live music, food stalls, craft shops. This is the place to try Yangshuo&apos;s signature dish: beer fish (啤酒鱼, pijiu yu) — fresh river fish braised in local Liquan beer with tomatoes, peppers, and ginger. Budget ¥45–70 per portion at stalls; ¥80–120 at a sit-down restaurant.",
                  "Night option: Cormorant fishing show at the Yulong River bridge area. Traditional fishermen with trained cormorants on bamboo rafts, lanterns lit on the water, catching fish as they have done for 1,000 years. Several operators run evening shows (¥60–100/person). The birds wear rings around their necks preventing them from swallowing larger fish — the small ones they keep as reward. Atmospheric and worth an hour.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Yangshuo Countryside Morning · Longji Rice Terraces Day Trip (optional) · Depart"
                cost="¥250–¥450 depending on whether you visit Longji"
                items={[
                  "Option A — Longji Rice Terraces day trip (recommended if you have the energy): Rise at 6am and take a shared minivan from Yangshuo or Guilin bus station to Longji (¥25–30 each way, ~1.5–2 hours from Guilin; arrange a driver the night before from Yangshuo for ¥350–450 return). The Dragon&apos;s Backbone Terraces (龙脊梯田) were carved by the Zhuang and Yao minorities over 2,300 years into a mountain that looks, from the air, like a dragon&apos;s spine. Entry ¥80 plus shuttle bus ¥20 within the terrace area.",
                  "Hike to the Ping&apos;an or Dazhai viewpoints — both are rewarding but Dazhai (Seven Stars with the Moon viewpoint) is considered the finest panorama. Allow 3–4 hours for a meaningful visit. Best light is between 7–9am when morning mist fills the valleys between terraces. In September–October the terraces turn golden for harvest; in May–June they are vivid green.",
                  "Lunch at a Yao or Zhuang minority guesthouse on the terraces — simple, home-cooked food: glutinous rice steamed in bamboo, stir-fried vegetables with preserved pork, mountain mushroom soup. ¥40–60 for a meal. The guesthouses at the viewpoint level offer stunning terrace views from their dining rooms.",
                  "Option B — Stay in Yangshuo: morning kayak on the Yulong River (¥80–120/person, 2 hours, peaceful paddling through karst scenery with bamboo rafts and water buffalo visible from the water). Significantly less crowded than the Li River cruise. Several rental operators near the Moon Hill road.",
                  "Option B continued: Rock climbing above Yangshuo — the karst peaks have some of China&apos;s best sport climbing. Half-day guided sessions available from ¥200–300/person. No experience necessary for beginner routes; experienced climbers can attempt multi-pitch routes on the larger peaks.",
                  "Afternoon departure: buses and shared vans run from Yangshuo to Guilin bus station (¥25, 1.5 hrs) for onward train or flight connections. High-speed trains from Guilin North connect to Guangzhou (2.5 hrs) and beyond. Alternatively, high-speed trains from the newer Yangshuo Station now serve some routes directly.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Guilin" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">⛰️ Guilin &amp; Yangshuo Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The key sites in order of priority. Prices are 2026 rates in CNY (approximate USD equivalent in brackets).
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Li River Cruise (Guilin → Yangshuo)",
                  e: "¥315 standard / ¥498 first class (~$44–$69)",
                  d: "The 83km, 4.5-hour cruise from Zhujiang Pier to Yangshuo is the single unmissable experience in the region. The scenery builds continuously — limestone peaks rising 200–500 metres, cormorant fishermen, ancient fishing villages, and the climactic Xingping stretch where the 20-yuan banknote view appears. Book official government cruises only; avoid the shorter bamboo raft alternatives that cover a fraction of the route.",
                  t: "Non-negotiable · 4.5 hrs",
                },
                {
                  n: "Reed Flute Cave (芦笛岩), Guilin",
                  e: "¥90 (~$12)",
                  d: "A 240-metre limestone cave formed over 180 million years, with stalactites, stalagmites, and a reflective underground lake. The LED lighting is vivid and theatrical — some find it overdone, but the scale of the formations is genuinely impressive. Ancient ink inscriptions on the walls date back 1,200 years. 1.5km north of central Guilin. Allow 1–1.5 hours.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Elephant Trunk Hill (象鼻山), Guilin",
                  e: "¥75 (~$10) — or view free from Binjiang Road bridge",
                  d: "The most recognisable landmark in Guilin: a limestone hill shaped exactly like an elephant drinking from the Li River, with a natural circular arch (the Moon Cave) at water level. The park entry gives you access to the hill interior and a pagoda at the top. The free view from the bridge is arguably better for photographs.",
                  t: "City landmark · 45 mins",
                },
                {
                  n: "Moon Hill (月亮山), Yangshuo",
                  e: "¥15 (~$2)",
                  d: "A karst peak with a large circular natural arch near its summit, visible from the road 8km south of Yangshuo. The 20-minute climb from the road to the base of the arch gives close-up views of the opening and sweeping countryside panoramas. Easily combined with the Yangshuo cycling loop. Best light: late afternoon.",
                  t: "Cycling stop · 1 hr",
                },
                {
                  n: "Yangshuo Countryside Cycling",
                  e: "¥20–25/day bike hire (~$3) + ¥15 Moon Hill entry",
                  d: "The 20–30km cycling loop from Yangshuo through karst countryside — past the Yulong River, Moon Hill, Big Banyan Tree, and riverside villages — is the best way to experience the landscape at ground level. Flat roads, minimal traffic, and karst peaks at every turn. Rent from any guesthouse or the many hire shops on West Street.",
                  t: "Best activity · Half day",
                },
                {
                  n: "Longji Rice Terraces (龙脊梯田)",
                  e: "¥80 entry + ¥20 shuttle bus (~$14 total)",
                  d: "90km north of Guilin, 1.5–2 hours by bus. The Dragon&apos;s Backbone Terraces were carved over 2,300 years by the Zhuang and Yao minorities into a steep mountain face. The Dazhai (Seven Stars with the Moon) and Ping&apos;an viewpoints reveal concentric rings of terraces stretching in every direction. September–October: golden harvest terraces. May–June: vivid green. Worth the journey.",
                  t: "Day trip · Full day",
                },
                {
                  n: "Cormorant Fishing Show, Yangshuo",
                  e: "¥60–100/person (~$8–14)",
                  d: "Traditional cormorant fishing on bamboo rafts, practised for over 1,000 years on the Li River. Evening shows are staged for visitors but use genuinely trained birds and authentic bamboo raft techniques. The lantern-lit water and silhouetted karst peaks in the background create the archetypal Guilin photograph. Multiple operators near the Yulong River bridge.",
                  t: "Evening experience · 1 hr",
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
            title="Guilin &amp; Yangshuo — Karst Peaks, River &amp; Rice Terraces"
            subtitle="The landscape China showed the world — and it still delivers."
            spots={[
              {
                name: "Li River Karst Peaks",
                query: "li river guilin china karst limestone peaks reflection morning",
                desc: "The 83km Li River cruise between Guilin and Yangshuo — 4.5 hours of unbroken karst scenery through sheer limestone towers.",
              },
              {
                name: "Yangshuo Countryside Cycling",
                query: "yangshuo karst cycling countryside rice paddies china",
                desc: "Cycling through Yangshuo&apos;s karst countryside — flat roads, soaring peaks, and rice paddies stretching to the horizon.",
              },
              {
                name: "Longji Rice Terraces",
                query: "longji rice terraces dragon backbone china guilin autumn mist",
                desc: "The Dragon&apos;s Backbone Rice Terraces at Longji — 2,300 years of Zhuang and Yao agricultural engineering spiralling up a mountain.",
              },
              {
                name: "Cormorant Fishing, Yulong River",
                query: "cormorant fishing guilin yangshuo night bamboo raft lantern",
                desc: "Traditional cormorant fishermen on bamboo rafts at dusk — an image inseparable from the Guilin landscape.",
              },
              {
                name: "Moon Hill Arch, Yangshuo",
                query: "moon hill natural arch yangshuo china karst limestone",
                desc: "The circular natural arch of Moon Hill, 8km south of Yangshuo — a perfect frame for the karst countryside beyond.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Guilin and Yangshuo span every budget. The Li River cruise (¥315–498) is the single largest fixed cost. Everything else — accommodation, food, cycling — scales dramatically with your comfort level.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget (~$35/day)</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range (~$84/day)</th>
                    <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury (~$210/day)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation/night", "¥60–90 (hostel)", "¥200–350 (3-star)", "¥800–1,500 (resort)"],
                    ["🍽️ Food/day", "¥50–80 (street food)", "¥120–180 (restaurants)", "¥300–500 (fine dining)"],
                    ["🛶 Li River cruise (once)", "¥315 standard", "¥498 first class", "¥1,500+ private boat"],
                    ["🚲 Transport/day", "¥20–40 (bus/bike)", "¥80–120 (taxi)", "¥300–600 (private car)"],
                    ["🏛️ Entry fees/day", "¥90–120", "¥150–250", "¥250–400 (incl. shows)"],
                    ["TOTAL/day (excl. cruise)", "¥240–370", "¥600–900", "¥1,800–3,400"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (¥250–370/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorms in Yangshuo (¥60–90), street-stall Guilin noodles and beer fish, standard-class cruise, bicycle hire. Excellent backpacker infrastructure in both Guilin and Yangshuo — very comfortable at this tier.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">✨ Mid-Range (¥600–900/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Boutique guesthouses with karst views (¥250–400/night), first-class cruise seating, e-bike hire, the Impression Liu Sanjie night show (¥238–380). The sweet spot for most travellers wanting comfort without splurging.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (¥1,800–3,400/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Banyan Tree Yangshuo or Li Jiang Waterfall Hotel (¥800–1,500/night), private boat charter on the Li River, hot-air balloon over Yangshuo, VIP Impression Liu Sanjie seats. The Banyan Tree villas built into karst cliffs are genuinely exceptional.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Most experienced travellers advise staying in Yangshuo rather than Guilin city — you&apos;re surrounded by better scenery, the cycling and activities are immediately outside your door, and Guilin&apos;s city sights are an easy day trip by bus (¥25, 1.5 hours). If you arrive late or depart early via Guilin airport, one night in the city makes sense.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Yangshuo Mountain Retreat",
                  type: "Boutique resort · Rural countryside, 5km from Yangshuo town",
                  price: "From ¥500/night (~$70)",
                  badge: "Best countryside setting",
                  desc: "A converted farmhouse-style boutique hotel set among rice paddies and karst peaks outside Yangshuo town. Cycling and hiking directly from the property, good restaurant, friendly staff. The standard for mid-range karst-view accommodation. Book 2–3 weeks ahead in autumn peak season.",
                  color: "border-green-200 bg-green-50",
                },
                {
                  name: "Banyan Tree Yangshuo",
                  type: "Luxury resort · Gaotian, 15km from Yangshuo town",
                  price: "From ¥1,500/night (~$210)",
                  badge: "Most spectacular",
                  desc: "Villas and suites built literally into the karst cliff faces — some rooms have a private karst peak as a wall. Infinity pools, world-class spa, and a setting that makes every other hotel seem ordinary. The benchmark for luxury Guilin accommodation. Arrange transfers from Yangshuo through the hotel.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Mango House Yangshuo",
                  type: "Guesthouse · Central Yangshuo, near West Street",
                  price: "From ¥120/night (~$17)",
                  badge: "Best budget",
                  desc: "A consistently well-reviewed budget guesthouse in central Yangshuo — clean rooms, helpful staff who speak English, and a rooftop terrace with karst peak views. Walking distance from West Street, bike hire, and the bus stop for Guilin. The reference point for budget travellers in Yangshuo.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Guilin Bravo Hotel",
                  type: "Business hotel · Central Guilin, near Li River",
                  price: "From ¥280/night (~$39)",
                  badge: "Best in Guilin city",
                  desc: "Clean, centrally located 4-star hotel in Guilin city with good service and a short walk to the Two Rivers Four Lakes waterfront. Solid option if you need a night in Guilin before the morning cruise departure. Reliable Wi-Fi, breakfast included at some rates.",
                  color: "border-blue-200 bg-blue-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Guilin and Yangshuo have distinct food cultures. Guilin is famous for its rice noodles (桂林米粉) — eaten for breakfast by locals, available all day at street stalls for ¥10–15. Yangshuo&apos;s signature dish is beer fish (啤酒鱼): fresh river fish braised in local Liquan beer, tomatoes, and chillies. Both are genuine regional specialities worth seeking out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "West Street Food Stalls, Yangshuo",
                  t: "Street food · Yangshuo town centre",
                  d: "The pedestrian strip of West Street (西街) comes alive at night with food stalls selling beer fish (¥45–70), grilled skewers (¥5–10 each), osmanthus cake, and fresh-cut fruit. Lively, affordable, and the best place to sample Yangshuo&apos;s street food culture. Eat at stalls with Chinese-speaking queues rather than those advertising in large English signs — the former are better and cheaper.",
                  b: "Best street food",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Le Votre Café & Restaurant, Yangshuo",
                  t: "Western and Chinese fusion · Near West Street",
                  d: "A long-standing expat favourite in Yangshuo serving reliably good Western breakfasts (eggs, toast, fresh coffee — ¥40–70), French-influenced mains, and Yangshuo beer fish done properly. Outdoor seating with a view of the karst peaks rising above the rooftops. Open from 8am. A solid option when you need a break from Chinese street food. ¥60–150 per person.",
                  b: "Best western option",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  n: "Guilin Rice Noodle Stalls (桂林米粉)",
                  t: "Street breakfast · Throughout Guilin city",
                  d: "The definitive Guilin breakfast: silky rice noodles in rich pork bone broth, topped with pickled long beans, crispy soybeans, spring onions, and chilli oil. Order at the counter, eat standing or at a plastic stool. ¥10–15 per bowl. Find the stalls on Zhongshan Road, near the bus stations, or just follow locals in the early morning. Do not leave Guilin without eating these at least twice.",
                  b: "Essential local dish",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Li Jiang Waterfall Hotel Restaurant, Guilin",
                  t: "Chinese fine dining · Central Guilin, Li River waterfront",
                  d: "The restaurant at the Li Jiang Waterfall Hotel serves refined Guilin and Guangxi cuisine — stuffed li fish, pork with taro, osmanthus wine desserts — in a river-view setting. The outdoor waterfall display at the hotel is reportedly the largest artificial waterfall in the world (seen from the street for free). Dinner ¥150–300/person. Good for a special evening in Guilin city.",
                  b: "Best dinner Guilin",
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
            destination="Guilin Yangshuo China"
            hotels={[
              {
                name: "Yangshuo Mountain Retreat",
                type: "Boutique resort · Rice paddy countryside",
                price: "From ¥500/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/cn/yangshuo-mountain-retreat.html?aid=2820480",
              },
              {
                name: "Banyan Tree Yangshuo",
                type: "Luxury villas · Built into karst cliffs",
                price: "From ¥1,500/night",
                rating: "5",
                badge: "Most spectacular",
                url: "https://www.booking.com/hotel/cn/banyan-tree-yangshuo.html?aid=2820480",
              },
              {
                name: "Guilin Bravo Hotel",
                type: "Business hotel · Central Guilin",
                price: "From ¥280/night",
                rating: "4",
                badge: "Best in Guilin city",
                url: "https://www.booking.com/hotel/cn/guilin-bravo.html?aid=2820480",
              },
              {
                name: "Mango House Yangshuo",
                type: "Guesthouse · Central Yangshuo",
                price: "From ¥120/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/cn/mango-house-yangshuo.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Li River Cruise Guilin to Yangshuo",
                duration: "4.5 hrs",
                price: "From ¥315/person",
                badge: "Non-negotiable",
                url: "https://www.getyourguide.com/s/?q=li+river+cruise+guilin&partner_id=PSZA5UI",
              },
              {
                name: "Yangshuo Karst Countryside Cycling",
                duration: "Half day",
                price: "From ¥80/person",
                badge: "Best activity",
                url: "https://www.getyourguide.com/s/?q=yangshuo+cycling+karst&partner_id=PSZA5UI",
              },
              {
                name: "Longji Rice Terraces Day Trip",
                duration: "Full day",
                price: "From ¥200/person",
                badge: "Don&apos;t skip",
                url: "https://www.getyourguide.com/s/?q=longji+rice+terraces+tour&partner_id=PSZA5UI",
              },
              {
                name: "Cormorant Fishing Evening Show",
                duration: "1 hr",
                price: "From ¥80/person",
                url: "https://www.getyourguide.com/s/?q=guilin+cormorant+fishing&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Guilin</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚢",
                  title: "Booking the Wrong Li River Cruise",
                  desc: "There are two types of Li River experience: the official large government-operated cruises (Guilin to Yangshuo, the full 83km scenic route, ¥315–498) and much shorter bamboo raft rides between Yangshuo and Fuli (typically 2 hours, ¥100–200). Tourists frequently book the bamboo raft thinking it&apos;s the same journey — it covers a tiny fraction of the route and misses the best scenery entirely. The full Guilin → Yangshuo cruise is the iconic journey. Book it on the official Guilin tourism website or through your hotel.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🏙️",
                  title: "Basing Yourself in Guilin City for the Whole Trip",
                  desc: "Guilin city has two worthwhile sites (Reed Flute Cave, Elephant Trunk Hill) that can be covered in an afternoon. Staying in the city for 3 nights and day-tripping to Yangshuo is backwards — you&apos;re commuting daily through 83km of scenery rather than living inside it. Stay at least 1–2 nights in Yangshuo. The cycling, the countryside, the restaurants, and the pace of life are dramatically better there.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🏔️",
                  title: "Skipping Longji Rice Terraces Because They Seem Too Far",
                  desc: "Longji is 90km from Guilin — roughly 1.5–2 hours by bus — and the majority of travellers skip it, citing the distance. This is a genuine mistake. The Dragon&apos;s Backbone Terraces are a completely different landscape from the Li River scenery: concentric rings of rice cultivation spiralling up a mountain, carved by minority peoples over 2,300 years. Go early morning for mist (spring) or in September–October for golden harvest colour.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "💳",
                  title: "Not Setting Up Mobile Payment Before Arrival",
                  desc: "WeChat Pay and Alipay dominate transactions across Guilin and Yangshuo — street food stalls, bike hire, small guesthouses, and market vendors often refuse cash entirely. Since 2023, both apps accept foreign Visa and Mastercard via an international user mode. Set up one of these before you land. Carry ¥500–1,000 in cash as a backup for the rare vendor that doesn&apos;t accept mobile payment.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  icon: "📱",
                  title: "Forgetting to Install a VPN Before Entering China",
                  desc: "Google Maps, WhatsApp, Instagram, Facebook, and most Western social media and messaging platforms are blocked in mainland China. VPN apps cannot be downloaded from inside China — the App Store and Google Play are restricted. Install your VPN before boarding the plane. Recommended options: ExpressVPN, NordVPN, Astrill (research current availability as this changes). Also download offline maps (Maps.me or Baidu Maps) for navigation.",
                  color: "border-red-200 bg-red-50",
                },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-5 border ${m.color}`}>
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Guilin &amp; Yangshuo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🛶",
                  title: "Take the cruise downstream — Guilin to Yangshuo",
                  desc: "The Li River cruise is one-directional and non-repeatable: Guilin to Yangshuo, with the scenery building continuously over 4.5 hours. Don&apos;t take a shorter route or try to reverse it. The final hour through Xingping is the climax. After arriving in Yangshuo, take the bus back to Guilin if needed (¥25, 1.5 hours) — far faster than the river.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🚲",
                  title: "E-bike over regular bicycle for the Yangshuo countryside loop",
                  desc: "Regular bikes work fine in Yangshuo town, but the full 20–30km countryside loop — Moon Hill, Big Banyan Tree, Yulong River — is more comfortable on an e-bike (¥50–80/day) in the summer heat and humidity. The loop is flat but the distances add up. E-bikes give you time to stop, explore, and take photographs rather than grinding through the heat to make it back before dark.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📸",
                  title: "The 20-yuan banknote view is at Xingping, not Guilin city",
                  desc: "The iconic karst-peaks-over-river view on China&apos;s 20-yuan note is a hillside above Xingping Ancient Town, 25km north of Yangshuo. The Li River cruise passes directly through this stretch (around hour 3) — take out a 20-yuan note and compare. Alternatively, take a bus from Yangshuo to Xingping (¥15, 30 minutes) and hike up the Old House Hill for the exact viewpoint.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🍜",
                  title: "Eat Guilin rice noodles every morning",
                  desc: "Guilin mifen (桂林米粉) — silky rice noodles in pork bone broth with pickled vegetables, crispy soybeans, and chilli oil — is one of China&apos;s great regional dishes and costs ¥10–15 at any street stall. Locals eat it standing up for breakfast. Order &apos;duo tang&apos; (多汤) for extra broth. Don&apos;t leave Guilin without eating it at least three times.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎭",
                  title: "Book Impression Liu Sanjie tickets in advance",
                  desc: "The Impression Liu Sanjie (印象刘三姐) open-air night show by Zhang Yimou uses the Li River itself as a stage — 600 local performers, the actual karst peaks illuminated as a backdrop, and cormorant fishing boats on the water. Tickets ¥238–480 depending on seat tier. Sells out weeks ahead in peak season (May, October). Book through the official website or a hotel concierge. Genuinely extraordinary production.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🌅",
                  title: "Arrive at Zhujiang Pier early for the cruise",
                  desc: "The Li River cruise pier (Zhujiang Pier) is 23km south of Guilin city centre — not walking distance. Allow 1 hour for the taxi journey in morning traffic and at least 30 minutes for boarding. Late arrivals miss their boats. Take a taxi or arrange a hotel shuttle the night before; confirm the taxi booking rather than hoping to flag one down at 7:30am.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Guilin" />

          {/* Combine With */}
          <CombineWith currentSlug="guilin-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is the Li River cruise worth the price?",
                  a: "Yes — at ¥315–498, the 4.5-hour Li River cruise from Guilin to Yangshuo is one of the world&apos;s great river journeys and represents exceptional value. Book the official government large-boat cruise rather than the shorter bamboo raft alternatives, which cover only a fraction of the route and miss the best scenery. The section through Xingping in the final hour is unmissable. Even on rainy days, mist on the limestone peaks is equally photogenic.",
                },
                {
                  q: "How do I get from Guilin airport to the city centre?",
                  a: "Guilin Liangjiang International Airport (KWL) is 28km from the city centre. The Airport Shuttle Bus Line 3 runs directly to central Guilin (¥20, approximately 40 minutes) — buy tickets at the clearly signed booth in arrivals. Taxis cost ¥80–100 and take 35–50 minutes depending on traffic. Didi (China&apos;s Uber equivalent) works from the airport and is cheaper than taxis; set it up before arrival.",
                },
                {
                  q: "Should I stay in Guilin city or Yangshuo?",
                  a: "Yangshuo is the better base for almost all travellers. You&apos;re surrounded by the best karst scenery, cycling and outdoor activities are immediately accessible, and the town has a more relaxed atmosphere. Guilin city is worth a half-day or one afternoon for Reed Flute Cave and Elephant Trunk Hill, but staying there for your entire trip means commuting daily to the better scenery. One night in Guilin (if your flight arrives late) plus two nights in Yangshuo is the ideal split for a 3-day trip.",
                },
                {
                  q: "What is beer fish (pijiu yu) and where should I eat it?",
                  a: "Beer fish (啤酒鱼, pijiu yu) is Yangshuo&apos;s signature dish — fresh river fish braised in local Liquan beer with tomatoes, red and green peppers, ginger, and garlic until the sauce reduces and the fish absorbs the flavours. It&apos;s rich, slightly spicy, and pairs well with steamed rice. The best versions are at West Street food stalls (¥45–70 per portion) or small family restaurants on the side streets off West Street — look for places where Chinese tourists are eating rather than large tourist-facing restaurants.",
                },
                {
                  q: "How do I get to Longji Rice Terraces from Yangshuo?",
                  a: "From Yangshuo: hire a private driver to Longji and back (¥350–450 return, negotiated the night before — ask your guesthouse to arrange). From Guilin: shared minivan from the South Bus Station (¥25–30 each way, 1.5 hours) or taxi (¥200–250 one way). The terraces open at 7am — arrive early for morning mist between the terraces in spring. Allow a full day: 1.5 hours travel each way plus 3–4 hours hiking the viewpoint trails.",
                },
                {
                  q: "Do I need a visa to visit Guilin as a Western passport holder?",
                  a: "Since late 2023, China has implemented a 15-day visa-free policy for citizens of many Western countries including the US, UK, France, Germany, Italy, Spain, Netherlands, Switzerland, and Australia — verify the current list as it updates regularly. For stays longer than 15 days, apply for an L tourist visa at the Chinese consulate (approximately $100 USD, 4–7 business days processing). Indian passport holders require a tourist visa regardless of stay duration.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Guilin trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-guilin", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/guilin-yangshuo-travel-tips", label: "Travel tips", icon: "💡" },
                { href: "/blog/li-river-cruise-guide", label: "Li River cruise guide", icon: "🛶" },
                { href: "/blog/yangshuo-cycling-guide", label: "Yangshuo cycling", icon: "🚲" },
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
          <RelatedGuides currentSlug="guilin-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More East Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Hong Kong 4 Days — Skyline &amp; Street Food", href: "/blog/hong-kong-4-days" },
                { label: "Xi&apos;an 4 Days — Terracotta Army", href: "/blog/xian-4-days" },
                { label: "Chengdu 4 Days — Pandas &amp; Sichuan Food", href: "/blog/chengdu-4-days" },
                { label: "Shanghai 4 Days — Bund &amp; Old Town", href: "/blog/shanghai-4-days" },
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
