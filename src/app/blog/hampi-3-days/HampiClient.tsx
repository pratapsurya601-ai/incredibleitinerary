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
const HAMPI_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Hampi Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "3-Day Itinerary" },
  { id: "ruins",       emoji: "🏛️", label: "Temple & Ruins Guide" },
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
          href: `mailto:?subject=Hampi 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Hampi in 3 Days — ruins, sunrises and the stone chariot&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/hampi-3-days"
        imageUrl="https://images.unsplash.com/photo-1590677197770-af8c461f4a67?w=1200&q=80"
        description="Hampi in 3 Days: Vittala Temple, Stone Chariot, Matanga Hill sunrise and the Vijayanagara ruins — complete travel guide with budget breakdown."
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
export default function HampiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={HAMPI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Hampi" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="hampi vijayanagara ruins boulders karnataka ancient temple india"
            fallback="https://images.unsplash.com/photo-1590677197770-af8c461f4a67?w=1600&q=80"
            alt="Hampi Vijayanagara ruins scattered among giant granite boulders Karnataka"
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
              <span className="text-white/70">Hampi 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  UNESCO World Heritage
                </span>
                <span className="text-white/60 text-xs">April 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Hampi in 3 Days:
                <em className="italic text-amber-300"> Ruins, Sunrises &amp; the Vijayanagara Empire</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                1,600 monuments, giant boulders, the stone chariot of Vittala Temple, coracle rides, and a sunrise from Matanga Hill that doesn&apos;t look real. The complete guide.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="April 2026" readTime="13 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🏛️ Karnataka, India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹1,500/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Hampi is what happens when a 14th-century empire falls apart among the strangest geology on earth — giant smooth granite boulders the size of houses, stacked in impossible formations, with 1,600 temples scattered between them and the Tungabhadra River running quietly through all of it.
            </p>
          </blockquote>

          {/* ── WHAT HAMPI ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Hampi Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Vijayanagara Empire was, at its peak, the wealthiest city in the world outside Beijing. At its height Hampi had an estimated 500,000 residents — larger than London at the time. The Portuguese traveller Domingo Paes, who visited in 1520, described it as &quot;the best-provided city in the world.&quot; It was sacked and destroyed in 1565 CE by a coalition of the Deccan Sultanates, abandoned overnight, and never rebuilt.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What remains is a UNESCO World Heritage Site of staggering scale. The ruins are spread across 26 square kilometres of a surreal boulder landscape — smooth granite rocks the size of apartment blocks, stacked in formations that look like they were placed by hand. Among them: Virupaksha Temple (continuously functioning since the 7th century), the Vittala Temple complex with its famous stone chariot, the Elephant Stables, the Royal Enclosure, the Lotus Mahal, and hundreds of smaller shrines.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Honestly, nothing in India prepares you for how vast Hampi is. You can spend three days here and still feel like you&apos;ve only scratched the surface. The standard advice is right: rent a bicycle. The ruins are too spread out to walk in the heat and too interesting to rush through in an auto.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚂" label="From Bangalore" value="7–8 hrs" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Feb" />
              <StatCard icon="🏛️" label="Monuments" value="1,600+" />
              <StatCard icon="💰" label="Budget From" value="₹1,500/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Hampi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Feb",
                  i: "☀️",
                  t: "Winter — Best Season",
                  d: "20–28°C, comfortable for exploring ruins all day. October and November have post-monsoon greenery with boulders covered in grass and wildflowers. December–February is peak season and can be busy at the main sites. The ideal window for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Mar–Apr",
                  i: "🌅",
                  t: "Spring — Hot But Viable",
                  d: "25–34°C. Dawn visits are still comfortable and the site is less crowded than peak season. Afternoons get brutal by late March. Viable if you start early and rest between noon and 3pm.",
                  b: "Morning visits only",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "May–Jun",
                  i: "🔥",
                  t: "Summer — Avoid if Possible",
                  d: "38–43°C. The granite boulders concentrate and reflect heat — it feels significantly hotter than the air temperature. Physically difficult for exploring. If you must travel in summer, only the earliest morning hours are comfortable.",
                  b: "Not recommended",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Jul–Sep",
                  i: "🌧️",
                  t: "Monsoon — Lush but Unpredictable",
                  d: "Hampi transforms in the monsoon — boulders covered in green moss, waterfalls appearing in unexpected places, and almost no tourists. But coracle crossings to Virupapur Gadde may close, some roads flood, and it&apos;s still quite hot (28–32°C with humidity).",
                  b: "For rain lovers",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Hampi</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Hampi itself has no railway station. The nearest town is <strong className="font-medium">Hospet (Hosapete)</strong>, 13km away, with its own railway station (Hosapete Junction). Most travellers arrive at Hospet by train or bus, then take a short auto or taxi to Hampi.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚂",
                  t: "Train from Bangalore (recommended)",
                  d: "Bangalore (KSR / Yeshwantpur) → Hosapete Junction: 7–8 hrs, ₹200–₹600 depending on class. Multiple trains daily including the Hampi Express (overnight, departs ~10pm, arrives ~6am — excellent option). From Hosapete to Hampi: auto ₹200–₹300 or shared auto ₹30, 20 mins.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Train / Bus from Hyderabad",
                  d: "Hyderabad → Hosapete: 10 hrs by train (overnight options available, ₹300–₹700). Several KSRTC buses also run this route. Good option if coming from Telangana.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Goa",
                  d: "Panaji / Margao → Hospet: 5–6 hrs by bus (₹400–₹700). Several private overnight operators run this route. One of the most popular backpacker routes in South India.",
                  b: "Popular route",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Bangalore",
                  d: "360km via NH50 / NH67, 6–7 hrs. Mostly fast highway driving until the last 50km through the Deccan plateau. Scenic approach from the south. Flexible for stops.",
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

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day Hampi Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed to avoid the midday heat — start early, rest 12–3pm, and make the most of the golden hour light on the ruins.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Virupaksha Temple · Hemakuta Hill · Hampi Bazaar · Matanga Hill Sunset"
                cost="₹500–₹900"
                items={[
                  "Arrive Hampi and check in on the Hampi Bazaar side (budget guesthouses ₹400–₹1,200/night) or across the river at Virupapur Gadde (even cheaper, more relaxed vibe — cross by coracle ₹20). Rent a bicycle immediately — ₹100/day is the single best investment you can make in Hampi.",
                  "6:30am: Virupaksha Temple (free entry). This temple has functioned without interruption since at least the 7th century — one of the oldest continuously active temples in India. The morning puja (around 6am) is genuinely atmospheric — bells, incense, priests in the inner sanctum, and pigeons wheeling through the gopuram. The resident elephant Lakshmi blesses visitors for a small tip. Climb to the top of the gopuram for the best overview of the ruins.",
                  "8:30am: Hemakuta Hill, directly behind the bazaar. Covered in small Jain and Shaivite temples — some predating the Vijayanagara Empire (9th–14th century). The hill is free, uncrowded in the morning, and gives beautiful angled light on the boulder landscape.",
                  "10am: Hampi Bazaar ruins — the old market street of the Vijayanagara empire, running east from Virupaksha Temple. The scale of it (over 1km long, originally lined with merchants from across Asia) only hits you when you walk the whole length. The carved pillars are still in remarkable condition.",
                  "12pm–3pm: Rest. This is non-negotiable in Hampi. The heat between noon and 3pm is genuinely dangerous in anything but peak winter. Eat lunch at Mango Tree Restaurant (iconic, overhanging the Tungabhadra — see below), rest at your guesthouse, or take a slow cycle along the river.",
                  "4:30pm: Matanga Hill. This is the best sunset in all of Hampi — a 30-minute climb from Hampi Bazaar, ₹50 entry. The view from the summit: ruins in every direction, boulders turning amber and gold, the Tungabhadra glinting below, and the Virupaksha gopuram rising above the bazaar. Arrive 45 minutes before sunset to find a good spot.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Royal Enclosure · Elephant Stables · Lotus Mahal · Vittala Temple · Stone Chariot"
                cost="₹700–₹1,400 (mainly entry fees)"
                items={[
                  "6:30am: Vittala Temple — go at opening to beat the crowds (by 10am it gets packed). Entry: ₹600 for foreigners / ₹40 for Indians (combined ticket covers multiple sites). The stone chariot in the courtyard is the iconic image of Hampi — a temple-chariot carved in the early 16th century, originally with functional wooden wheels used as a lighthouse on the river. Photograph it in the early morning light before other tourists arrive.",
                  "The musical pillars in Vittala Temple&apos;s main mandapa are one of the genuine architectural wonders of India: 56 granite columns, each producing a different musical note when tapped. The sound rings out clear as a bell from solid stone — a technique no modern engineer has fully explained. Spend time here. It&apos;s remarkable.",
                  "9:30am: Royal Enclosure and Elephant Stables. The Elephant Stables (11 large, domed chambers for the royal elephants) are arguably the best-preserved structure in Hampi — the Indo-Islamic architectural detailing on each dome is exceptionally fine. Nearby: the stepped royal water tanks (remarkably sophisticated engineering), the underground chamber, and the ruins of the Vijayanagara palace.",
                  "11am: Lotus Mahal (Zanana Enclosure) — a small, ornate pavilion that blends Hindu and Islamic architectural vocabulary so seamlessly you cannot tell where one style ends and the other begins. It was the ladies&apos; pavilion of the royal family. The geometric detailing is worth studying closely.",
                  "11:30am: Queen&apos;s Bath — an outdoor swimming pool for Vijayanagara royalty. It sounds unremarkable but the scale and the carved projections over the water are surprisingly moving — you get a strong sense of what this place must have been like at its height.",
                  "1pm onwards: Return to your base, rest through the heat. Afternoon: cross to Virupapur Gadde by coracle (₹20) for sunset cafes and boulder scrambles on the island side. Laughing Buddha has rooftop seating with views across the ruins at dusk.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Anegundi Village · Anjaneya Hill · Riverside Walk · Departure"
                cost="₹300–₹600"
                items={[
                  "5:30am: If you haven&apos;t done it on Day 1, today is your last chance for Matanga Hill sunrise. The early morning light on Day 3 is often clearer than Day 1 after the dust has settled.",
                  "9am: Coracle across the Tungabhadra to Anegundi village (₹20 per person). Anegundi is believed to be the ancient kingdom of Kishkindha from the Ramayana — the monkey kingdom of Sugriva. It predates Hampi by thousands of years. The village has a completely different character from the main ruins side: terrace-farmed hills, old temples, traditional Karnataka architecture, and almost no tourist infrastructure.",
                  "Anjaneya Hill in Anegundi: 570 steps to the top of the hill to a Hanuman temple believed to mark the birthplace of Hanuman. The climb takes 30–40 minutes and the views at the top are panoramic — the entire Hampi landscape, the Tungabhadra, and the boulder formations stretching to every horizon. One of the most undervisited viewpoints in Hampi. Free entry.",
                  "Walk the river path back from Anegundi towards the main crossing — roughly 2km along the Tungabhadra bank through paddy fields and under banana palms. This is one of those walks that reminds you how extraordinary the setting of Hampi actually is: ruins on one bank, villages on the other, boulders everywhere, and the river moving between them.",
                  "Late morning: Return crossing, final wander through Hampi Bazaar, lunch at New Shanthi or Laughing Buddha. Head to Hospet for your return journey — trains and buses back to Bangalore depart through the afternoon and evening.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Hampi" onPlanTrip={() => setModalOpen(true)} />

          {/* ── TEMPLE & RUINS GUIDE ── */}
          <section id="ruins" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Temple &amp; Ruins Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in order of priority. Entry fees as of early 2026 — the combined ticket (₹600 foreigners / ₹40 Indians) covers Vittala Temple, Zenana Enclosure, and several other sites.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Vittala Temple",
                  e: "₹600 (foreigners) / ₹40 (Indians)",
                  d: "The masterpiece of Vijayanagara architecture. The stone chariot, 56 musical pillars, kalyana mandapa and the overall scale of the complex are unmatched in Hampi. The site is 1.5km end to end. Arrive at 6:30am opening — by 10am it&apos;s packed.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Virupaksha Temple",
                  e: "Free",
                  d: "Continuously functioning since at least the 7th century — 1,300+ years of uninterrupted worship. The morning puja at 6am is genuinely atmospheric. The elephant Lakshmi is in the temple courtyard most mornings. Climb the gopuram for the best overview of Hampi.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "Matanga Hill",
                  e: "₹50",
                  d: "The highest point in the main Hampi complex. 30-minute climb from Hampi Bazaar. The sunrise and sunset views from the summit are the best in all of Hampi — ruins, boulders, river, all in one frame. Most people cite this as the single best experience in Hampi.",
                  t: "Sunrise / Sunset · 1.5 hrs",
                },
                {
                  n: "Royal Enclosure & Elephant Stables",
                  e: "₹40 (Indians)",
                  d: "The ruined palace complex, remarkably intact elephant stables (11 domed chambers), stepped water tanks, and the underground chamber. The Elephant Stables are the best-preserved single structure in Hampi. Budget 1.5 hours.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Lotus Mahal (Zanana Enclosure)",
                  e: "Included in Royal Enclosure ticket",
                  d: "The most ornate building in the Royal Quarter — a blend of Hindu and Islamic architectural styles so seamless it defies attribution. Built as the ladies&apos; pavilion of the royal household. Remarkably intact.",
                  t: "30–45 mins",
                },
                {
                  n: "Hemakuta Hill",
                  e: "Free",
                  d: "30+ pre-Vijayanagara temples (9th–14th century) scattered across a rocky hill directly behind Hampi Bazaar. Best for photography — unusual angles and light, especially at sunset. Almost no crowds even in peak season.",
                  t: "Sunset · 1 hr",
                },
                {
                  n: "Anjaneya Hill (Anegundi)",
                  e: "Free",
                  d: "The 570-step climb in Anegundi to the Hanuman temple believed to mark Hanuman&apos;s birthplace. Panoramic views from the top across the entire Hampi landscape. Cross by coracle to reach it. Most tourists skip this — their loss.",
                  t: "Underrated · 1.5 hrs",
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
            title="Hampi — Ruins, Boulders &amp; the Tungabhadra"
            subtitle="The Vijayanagara Empire&apos;s extraordinary, surreal landscape."
            spots={[
              {
                name: "Vittala Temple Stone Chariot",
                query: "vittala temple stone chariot hampi karnataka ruins ancient",
                desc: "The stone chariot in front of Vittala Temple — the iconic image of Hampi and one of India&apos;s most-photographed structures.",
              },
              {
                name: "Hampi Boulder Landscape",
                query: "hampi granite boulders karnataka ruins landscape ancient india",
                desc: "Giant smooth granite boulders stacked in impossible formations across 26 square kilometres of the Deccan plateau.",
              },
              {
                name: "Virupaksha Temple Gopuram",
                query: "virupaksha temple gopuram hampi karnataka ancient india",
                desc: "The 50-metre gopuram of Virupaksha Temple — the tallest structure in Hampi and visible from almost everywhere in the ruins.",
              },
              {
                name: "Tungabhadra River Hampi",
                query: "tungabhadra river hampi coracle sunset karnataka india",
                desc: "The Tungabhadra at Hampi — coracle rides at sunset with ruins and boulders framing the river.",
              },
              {
                name: "Elephant Stables Hampi",
                query: "elephant stables hampi royal enclosure karnataka vijayanagara",
                desc: "The 11-chamber Elephant Stables — the best-preserved structure in the Royal Enclosure.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hampi is one of India&apos;s most budget-friendly heritage destinations. The main costs are entry fees (which add up at ₹600–₹1,000 for three days) and getting there. Staying and eating in Hampi itself is very cheap.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">Mid-Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🚂 Transport to/from Hospet", "₹400–₹1,200", "₹400–₹1,200"],
                    ["🏨 Accommodation (2 nights)", "₹800–₹1,800", "₹3,000–₹6,000"],
                    ["🚲 Bicycle rental (2 days)", "₹200–₹300", "₹200–₹300"],
                    ["🏛️ Entry fees (3 days)", "₹600–₹1,000", "₹600–₹1,000"],
                    ["🍽 Food (3 days)", "₹600–₹1,000", "₹1,500–₹3,000"],
                    ["⛵ Coracle + misc transport", "₹200–₹400", "₹200–₹400"],
                    ["TOTAL (per person)", "₹2,800–₹5,700", "₹5,900–₹11,900"],
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (₹1,500–₹2,500/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in Hampi Bazaar guesthouses (₹400–₹700/night), eat at local dhabas and Laughing Buddha, cycle everywhere. This is completely doable and very comfortable in Hampi — backpacker infrastructure is excellent.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">🌟 Mid-Range (₹3,000–₹5,000/day)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Stay at Hampi&apos;s Boulders or similar boutique properties (₹4,000–₹8,000/night), dine at the better restaurants, hire a guide for half a day (₹500–₹800). This is the sweet spot for comfort without losing the Hampi atmosphere.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Hampi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              There are two main areas to stay: the Hampi Bazaar side (main ruins, more convenient for the temples) and Virupapur Gadde (across the river — more peaceful, better sunsets, stronger backpacker community). A coracle ride connects them in 5 minutes.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Hampi&apos;s Boulders",
                  type: "Luxury boutique · Virupapur Gadde side",
                  price: "From ₹6,000/night",
                  badge: "Most unique stay",
                  desc: "Cottages built into and around natural boulders on the Anegundi side. The setting is extraordinary — boulders on your terrace, ruins across the river, swimming pool. The benchmark for luxury in Hampi.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Kishkinda Trust (Anegundi)",
                  type: "Heritage homestay · Anegundi village",
                  price: "From ₹2,500/night",
                  badge: "Most authentic",
                  desc: "Traditional Karnataka heritage houses in Anegundi village, run as a community tourism project. Genuinely local, beautifully maintained, with village walks and craft workshops. Completely different experience from the main ruins side.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Mango Tree Area Guesthouses",
                  type: "Budget · Hampi Bazaar side",
                  price: "₹400–₹1,200/night",
                  badge: "Best budget",
                  desc: "Several small guesthouses clustered near the Mango Tree restaurant along the river. Basic but clean, good location for the Bazaar and Virupaksha Temple. Ideal for solo travellers and backpackers.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Virupapur Gadde (Hippie Island) Guesthouses",
                  type: "Budget-mid · Across the river",
                  price: "₹500–₹2,000/night",
                  badge: "Best vibe",
                  desc: "The island side has quieter, cheaper rooms with a more international backpacker atmosphere. Rooftop cafes, hammocks, and much better sunset views than the main side. Cross by coracle. Note: the crossing may be suspended during heavy monsoon.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Hampi</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Hampi&apos;s restaurant scene is dominated by the backpacker cafes clustered near Hampi Bazaar and on the island side. Most serve a mix of Indian, Israeli, and traveller-friendly food at very reasonable prices (₹100–₹350 for a full meal).
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Mango Tree Restaurant",
                  t: "Iconic riverside · Hampi Bazaar side",
                  d: "The most famous restaurant in Hampi — a terraced garden overhanging the Tungabhadra, strung with fairy lights at night. Multi-cuisine menu (Indian, Israeli, pasta, fruit bowls). The setting alone is worth it: eat breakfast here with ruins on the opposite bank. ₹120–₹350. Gets busy at dinner — arrive by 7pm.",
                  b: "Must visit",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Laughing Buddha",
                  t: "Rooftop cafe · Virupapur Gadde (island side)",
                  d: "The best sunset cafe in Hampi. Rooftop seating with boulders and ruins in every direction. Good falafel, shakshuka, thali, and the standard backpacker menu. The view at golden hour is exceptional. ₹100–₹300.",
                  b: "Best sunsets",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "New Shanthi",
                  t: "Multi-cuisine · Hampi Bazaar",
                  d: "Long-running Hampi institution. Generous portions, very affordable (₹80–₹200), good South Indian thali and Israeli-style dishes. Popular with long-stay travellers. Slightly more local-feeling than Mango Tree.",
                  b: "Best value",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Udipi Hotel (Hospet town)",
                  t: "Local meals · Hospet",
                  d: "If you arrive via Hospet, eat breakfast at one of the Udipi hotels near the bus stand before heading to Hampi. Idli, vada, dosa, and filter coffee for ₹40–₹80 — the kind of meal the tourist restaurants in Hampi will charge you ₹200 for.",
                  b: "Authentic local",
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
            destination="Hampi Karnataka"
            hotels={[
              {
                name: "Hampi&apos;s Boulders",
                type: "Boutique luxury · Built into the boulders",
                price: "From ₹6,000/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/in/hampi-s-boulders.html?aid=2820480",
              },
              {
                name: "Evolve Back Hampi",
                type: "Luxury heritage resort · Kamalapuram",
                price: "From ₹15,000/night",
                rating: "5",
                badge: "Most luxurious",
                url: "https://www.booking.com/hotel/in/evolve-back-hampi.html?aid=2820480",
              },
              {
                name: "Kishkinda Heritage Resort",
                type: "Heritage · Anegundi village",
                price: "From ₹2,500/night",
                rating: "4",
                badge: "Most authentic",
                url: "https://www.booking.com/hotel/in/kishkinda-heritage-resort-hampi.html?aid=2820480",
              },
              {
                name: "Hotel Mayura Bhuvaneshwari",
                type: "KSTDC Government Hotel · Hampi side",
                price: "From ₹1,500/night",
                rating: "3",
                badge: "Best location",
                url: "https://www.booking.com/hotel/in/mayura-bhuvaneshwari-hampi.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Hampi Full Day Guided Tour",
                duration: "8 hrs",
                price: "From ₹1,200/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=hampi+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Coracle Ride + Hampi Ruins",
                duration: "3 hrs",
                price: "From ₹500/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=hampi+coracle&partner_id=PSZA5UI",
              },
              {
                name: "Matanga Hill Sunrise Trek",
                duration: "2 hrs",
                price: "From ₹300/person",
                url: "https://www.getyourguide.com/s/?q=hampi+sunrise&partner_id=PSZA5UI",
              },
              {
                name: "Hampi Photography Tour",
                duration: "4 hrs",
                price: "From ₹800/person",
                url: "https://www.getyourguide.com/s/?q=hampi+photography+tour&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Hampi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🚲",
                  title: "Rent a bicycle, not an auto",
                  desc: "Auto tours of Hampi rush you from monument to monument and skip everything between — the small temples, the quiet river paths, the boulder scrambles. A bicycle (₹100/day) lets you stop anywhere. The ruins are too far to walk and too interesting to rush.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌅",
                  title: "Matanga Hill sunrise (5:30am)",
                  desc: "Set the alarm. The view from Matanga Hill at dawn — ruins turning gold in every direction, boulders glowing, the Tungabhadra gleaming below — is the single best experience in Hampi for most people. The 30-minute climb is easy. ₹50 entry. I have missed this twice by oversleeping. Do not be me.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🏛️",
                  title: "Vittala Temple at 6:30am opening",
                  desc: "The stone chariot and musical pillars are Hampi&apos;s most visited sight. By 10am, the site is packed and the photographic light is gone. At opening (6:30am) you can have the entire complex almost to yourself for 45 minutes. Worth restructuring your Day 2 around.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "⛵",
                  title: "Cross to Virupapur Gadde",
                  desc: "Most tourists stay on the main ruins side and miss the island entirely. The coracle crossing to Virupapur Gadde (₹20, 5 minutes) opens up quieter guesthouses, the Laughing Buddha rooftop sunset, and access to Anegundi village — all things the main side doesn&apos;t have.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💧",
                  title: "Carry 2 litres of water minimum",
                  desc: "Hampi is a semi-arid zone. The granite boulders concentrate and reflect heat significantly — the effective temperature feels 5–8°C hotter than the air. Between October and April, you dehydrate faster than expected. Carry at least 2L and refill at the main entrance gates.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "🗺️",
                  title: "Get the Archaeological Survey of India map",
                  desc: "Available at the entrance gates for ₹20–₹50. Hampi is so large that many people miss entire sections of the ruins. The ASI map shows all 1,600+ monuments across the full 26km² area. More useful than Google Maps for navigation inside the complex.",
                  color: "bg-purple-50 border-purple-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Hampi" />

          {/* Combine With */}
          <CombineWith currentSlug="hampi-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get to Hampi from Bangalore?",
                  a: "Take a train from Bangalore (KSR or Yeshwantpur) to Hosapete Junction — 7 to 8 hours, ₹200–₹600 depending on class. The overnight Hampi Express is the best option (departs ~10pm, arrives ~6am). From Hosapete, take an auto to Hampi (₹200–₹300, 20 minutes). Overnight buses also run Bangalore–Hospet (8 hours, ₹400–₹900).",
                },
                {
                  q: "What is the best time to visit Hampi?",
                  a: "October to February is ideal — temperatures 20–28°C, comfortable for walking the ruins all day. October–November is particularly good as the post-monsoon greenery is still fresh. Avoid April–June when temperatures reach 40°C+ and the granite boulders make it feel even hotter.",
                },
                {
                  q: "How many days do you need in Hampi?",
                  a: "3 days is the ideal minimum. Day 1 covers the Virupaksha Temple, Hemakuta Hill and Matanga Hill sunset. Day 2 is for the Royal Enclosure, Elephant Stables, Lotus Mahal, and Vittala Temple. Day 3 is for Anegundi village, Anjaneya Hill, and the river walk. 2 days is an absolute minimum if you must — but you will feel rushed.",
                },
                {
                  q: "What is the coracle ride in Hampi and is it worth it?",
                  a: "A coracle is a small circular wicker-and-tar boat used to cross the Tungabhadra River at Hampi. The main crossing connects Hampi Bazaar to Virupapur Gadde (the island side) for ₹20 per person. It is absolutely worth doing — the island side has the best sunset cafes, quieter guesthouses, and access to Anegundi village. Many experienced Hampi travellers say the island side is the better place to be based.",
                },
                {
                  q: "Is Hampi safe for solo travellers and women?",
                  a: "Hampi is one of India&apos;s safest and most solo-travel-friendly destinations. The backpacker community is large and international, particularly on the Virupapur Gadde side. Standard precautions apply: don&apos;t boulder-scramble alone after dark, keep valuables secured, and be aware that some ruined areas are isolated. For solo women: the café scene is safe and welcoming; the island side is generally safer than the main ruins side after dark.",
                },
              ].map((item, i) => (
                <FaqItem key={i} {...item} />
              ))}
            </div>
          </section>

          {/* Comments */}
          <Comments />

          {/* Related Guides */}
          <RelatedGuides currentSlug="hampi-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More South India Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Goa in 3 Days — Beaches &amp; Culture", href: "/blog/goa-3-days" },
                { label: "Coorg 3 Days — Coffee Estates", href: "/blog/coorg-3-days" },
                { label: "Kerala 5 Days — Backwaters", href: "/blog/kerala-5-days" },
                { label: "Munnar 3 Days — Tea Hills", href: "/blog/munnar-3-days" },
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
