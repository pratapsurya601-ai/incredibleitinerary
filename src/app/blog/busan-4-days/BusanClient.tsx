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
const BUSAN_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What Busan Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "🚄",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",  emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Busan 4-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=Busan in 4 Days — beaches, temples and the best seafood in Korea&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/busan-4-days"
        imageUrl="https://images.unsplash.com/photo-1579886521777-59bf42fc1b07?w=1200&q=80"
        description="Busan in 4 Days: Gamcheon Culture Village, Haedong Yonggungsa Temple, Jagalchi Fish Market, and Haeundae Beach — complete travel guide with budget breakdown."
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
export default function BusanClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BUSAN_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Busan" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="busan south korea gamcheon culture village colorful houses sea"
            fallback="https://images.unsplash.com/photo-1579886521777-59bf42fc1b07?w=1600&q=80"
            alt="Busan Gamcheon Culture Village colorful terraced houses overlooking the sea"
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
              <span className="text-white/70">Busan 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-blue-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South Korea
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Busan in 4 Days:
                <em className="italic text-blue-300"> Beaches, Cliffside Temples &amp; Korea&apos;s Best Seafood</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Rainbow-terraced hillside villages, a temple founded in 678 AD perched above crashing waves, and the largest fish market in Korea. The complete 4-day guide for every budget.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Author + Share row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <AuthorByline date="January 2026" readTime="14 min" />
          </div>

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇰🇷 South Korea</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From ₩60,000/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-blue-500 pl-6 mb-10 bg-blue-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Busan is what happens when a city decides to put everything in one place — Korea&apos;s most cinematic beach at the foot of a glass skyscraper skyline, a 1,400-year-old sea-cliff temple, a hillside painted every colour imaginable, and a fish market where haenyeo diving women unload their catch before the rest of the city wakes up.
            </p>
          </blockquote>

          {/* ── WHAT BUSAN ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Busan Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Busan is South Korea&apos;s second-largest city and its only major coastal metropolis — a place where modern high-rises meet ancient temple bells and the sea is everywhere. It sits on the southeastern tip of the Korean peninsula, two and a half hours from Seoul by KTX bullet train, and operates at a completely different frequency from the capital. Less frenetic, more salt air, with a port city energy that Seoul&apos;s residents don&apos;t always understand.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The city became internationally significant during the Korean War — Busan was the last major city not to fall during the North Korean advance of 1950, and the port here was the main lifeline for UN forces. That wartime refugee history shaped Gamcheon Culture Village, where displaced families built labyrinthine hillside homes in every colour they could find, creating one of Asia&apos;s most photographed neighbourhoods entirely by accident.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Today Busan hosts the Busan International Film Festival — one of Asia&apos;s most prestigious — draws millions of summer visitors to Haeundae (Korea&apos;s most visited beach), and quietly maintains a maritime culture centred on Jagalchi Fish Market, the largest seafood market in South Korea. Haedong Yonggungsa Temple, founded in 678 AD and clinging to seaside cliffs above the East Sea, is one of the few major Buddhist temples in Korea built directly on the ocean. Monks have chanted morning prayers here with crashing waves as their accompaniment for over 1,300 years.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              Four days is the right amount of time. Long enough to do Gamcheon properly, to arrive at the temple before the crowds, to sit on two different beaches at sunset, and to navigate Jagalchi without feeling rushed. This guide covers all three budget levels with real prices in Korean Won and USD equivalents.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="🚄" label="From Seoul (KTX)" value="2h 30min" />
              <StatCard icon="🌡️" label="Best Season" value="Apr–Jun / Sep–Nov" />
              <StatCard icon="✈️" label="Airport" value="PUS Gimhae" />
              <StatCard icon="💰" label="Budget From" value="₩60,000/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Busan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Apr–Jun",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "15–24°C, clear skies, and late March to mid-April cherry blossoms across the city. The sea is still cool but the air is perfect for exploring. Least crowded of the main seasons. April is the single best month — Oncheonjang Park and the Dongbaekseom Island coastal trail are spectacular in cherry blossom season. Gamcheon is never quieter.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent Season",
                  d: "18–26°C, lower humidity than summer, sea still warm enough for swimming through September. October brings the Busan International Film Festival — a massive cultural event but hotel prices spike and accommodation books out weeks in advance. November is quiet and very pleasant with good light for photography.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jul–Aug",
                  i: "☀️",
                  t: "Summer — Peak Beach Season",
                  d: "26–32°C with high humidity. Haeundae Beach gets genuinely overcrowded in late July and August — the beach can see 100,000 visitors in a single day. Hotels are fully booked weeks ahead and prices peak. Good for beach culture and nightlife but not for peaceful sightseeing. Gwangalli is noticeably less crowded than Haeundae in summer.",
                  b: "Busy — book early",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Cold but Peaceful",
                  d: "2–10°C. Busan is significantly warmer than Seoul in winter due to its coastal position, but outdoor sightseeing is less comfortable. Haedong Yonggungsa has a famous New Year sunrise event drawing large crowds. Good for budget travellers — hotel prices drop significantly and major sites are uncrowded throughout January and February.",
                  b: "Off-season deals",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚄 Getting to Busan</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-blue-800 font-light">
                <strong className="font-medium">Key detail:</strong> The KTX bullet train from Seoul to Busan is the single best way to travel between the two cities —{" "}
                <strong className="font-medium">2 hours 30 minutes</strong>, departing from Seoul Station every 30–40 minutes all day. Fare:{" "}
                <strong className="font-medium">₩59,800 (~$45)</strong> standard class. Faster and more convenient than flying once you factor in airport check-in time.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚄",
                  t: "KTX Bullet Train from Seoul (recommended)",
                  d: "Seoul Station → Busan Station: 2 hrs 30 min, ₩59,800 (~$45) standard class / ₩83,700 (~$63) first class. Trains depart every 30–40 minutes from early morning to midnight. Book at Korail.com or at Seoul Station ticket windows. The train arrives at Busan Station in the Choryang district — central for most hotels and directly connected to the subway.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly into Gimhae International Airport (PUS)",
                  d: "Direct international flights from Tokyo, Osaka, Hong Kong, Singapore, Bangkok, Taipei, and major Chinese cities. Domestic flights from Seoul Gimpo take 55 minutes, but total door-to-door travel is usually longer than KTX for Seoul travellers. From the airport: Gimhae Airport Light Rail to Sasang Station (₩1,700, 15 min), then Busan Metro Line 2 to your hotel.",
                  b: "International arrivals",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "🚌",
                  t: "Express Bus from Seoul",
                  d: "Seoul Express Bus Terminal → Busan Nopo Terminal: 4–5 hrs, ₩23,000–₩28,000 (~$17–21). Several operators including Kobus run this route. Budget option but significantly slower than KTX. Useful for travellers already based near an express bus terminal or arriving from other cities.",
                  b: "Budget option",
                  c: "bg-parchment border-parchment-2",
                },
                {
                  i: "🚂",
                  t: "Day Trip or Extension from Gyeongju",
                  d: "Gyeongju (ancient Silla Kingdom capital) is just 50–60 minutes from Busan by KTX (₩8,400) or 1 hour 15 minutes by intercity bus (₩3,800). Many travellers combine Busan with Gyeongju in one trip — the ancient royal tombs, Buddhist temples, and stone pagodas of Gyeongju make an ideal day trip from a Busan base.",
                  b: "Perfect pairing",
                  c: "bg-teal-50 border-teal-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Busan Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is arranged to minimise backtracking across Busan&apos;s spread-out districts while maximising the contrast between each day&apos;s character — from hillside art villages to cliffside temples to beach nights to thermal baths.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Gamcheon Culture Village · Jagalchi Fish Market · BIFF Square · Nampo"
                cost="₩30,000–40,000 all-in including food and transport (~$22–30)"
                items={[
                  "Morning: Take subway Line 1 to Toseong station (₩1,500 with T-Money card) and walk 20 minutes uphill to Gamcheon Culture Village. Buy the ₩2,000 stamp map at the community center at the entrance — it marks all the hidden art installations and guides you through the labyrinthine alleyways. Entry to the village is free.",
                  "Gamcheon was built by Korean War refugees who constructed hillside homes in whatever colours and materials they could find. In the 2000s a government arts initiative transformed it with murals, sculptures, and galleries — the result is one of Asia's most visually distinctive neighbourhoods. Every alley bend reveals a new mural or a rooftop viewpoint. Find the Little Prince figure, the Lego House installation, and the fish-eye panoramic viewpoint overlooking the tiled rooftops down to the sea.",
                  "Descend by local bus (₩1,400) to Jagalchi Fish Market — Korea's largest seafood market, operating continuously since the Japanese colonial period. Walk the outdoor ground-floor stalls where haenyeo (female diving women) sell live octopus, sea urchin, and abalone directly from their catch baskets. Raw sea urchin sashimi from a market vendor runs ₩3,000–5,000 and is pulled from the shell minutes before you eat it.",
                  "Lunch on the second floor of the Jagalchi indoor market: rows of small restaurants serve grilled mackerel sets (godeungeo gui) with rice, fermented soybean soup, and five banchan side dishes for ₩8,000–10,000. Point to the fish tank if you want something live — pricing is by weight.",
                  "Walk 10 minutes to BIFF Square (Busan International Film Festival Square) in the Nampo-dong district. The street is embedded with the handprints of Korean and international film stars — Korea's equivalent of the Hollywood Walk of Fame. Street food stalls line both sides. Try ssiat hotteok at the original Ssiat Hotteok stall (₩2,000) — a sweet seed-filled pancake unique to Busan that has been sold from this spot since the 1980s.",
                  "Evening: Explore the Gukje Market (International Market) nearby — Korea's first post-war market, founded in 1945. Pojangmacha tents around the perimeter serve dwaeji gukbap (pork and rice soup, ₩8,000) and makgeolli (rice wine, ₩3,000/bottle). Return by subway Line 1.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Haedong Yonggungsa Temple · Haeundae Beach · Dongbaekseom Island"
                cost="₩25,000–35,000 including transport and meals (~$19–26)"
                items={[
                  "Early morning: Bus 181 from Haeundae Bus Terminal to Haedong Yonggungsa Temple (₩1,400 each way, 20 minutes). Arrive by 8am to beat the tour groups that descend from 10am. The temple is free to enter — a ₩1,000 donation is appreciated.",
                  "Haedong Yonggungsa was founded in 678 AD by the Buddhist monk Naong and rebuilt after wartime destruction in 1976. It clings to dramatic sea cliffs above the East Sea — one of the only major Buddhist temples in Korea built directly on the ocean. The main hall (Daeungjeon) sits on a rock platform with waves crashing directly beneath it. Morning light illuminates the red and gold temple structures perfectly. Listen for monk chants echoing off the cliff face during morning prayer between 6am and 8am.",
                  "Walk the full temple complex — descend the 108 stone steps to the main hall, see the dragon head sculpture at the water's edge where visitors wash their hands for good luck, and take the coastal path south of the temple for views back up to the full cliff facade. Spend at least an hour here before the crowds arrive.",
                  "Return by Bus 181 to Haeundae (₩1,400). Korea's most famous beach stretches 1.5km of white sand framed by the glass towers of Marine City on one side and wooded Dongbaekseom Island on the other. The beach itself is free — sun loungers rent for ₩5,000 in summer. Walk the full length at your own pace.",
                  "Lunch: The Haeundae Traditional Market (5 minutes from the beach) has a famous milmyeon (cold wheat noodle) alley and dakgalbi (spicy stir-fried chicken) restaurants — a full meal runs ₩10,000–12,000. The market has served beachgoers since 1950 and feels nothing like a tourist trap.",
                  "Afternoon: Walk the Dongbaekseom Island coastal trail — a free 30-minute loop through pine forest with views of the APEC Naru House and the Diamond Bridge across the bay. The island connects to the mainland by a walkway and requires no boat. Evening: Buy a cold Cass or Hite beer from GS25 convenience store (₩2,000) and watch the city skyline silhouette as the sun sets behind the mountains.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Gwangalli Beach · Busan Tower · Choryang Japanese Street · Seomyeon Night Market"
                cost="₩35,000–45,000 including tower entry, meals, evening food (~$26–34)"
                items={[
                  "Morning: Gwangalli Beach by subway to Gwangan station (₩1,500). Gwangalli is Busan's second major beach — 1.4km of sand, significantly less crowded than Haeundae, with a more local café atmosphere and the best daytime view of Gwangandaegyo Bridge (the Diamond Bridge) stretching 7.4km across the bay.",
                  "Morning coffee at one of the third-wave specialty cafés lining the Gwangalli waterfront — Korean specialty coffee culture is seriously world-class and Gwangalli has some of the best in the city, ₩5,000–7,000 for a filter or espresso. Settle into a window seat with the bridge view. The café strip between Gwangan Station and the beach is one of the best coffee walks in South Korea.",
                  "Lunch: Milmyeon (cold buckwheat noodles in icy beef broth) at a pojangmacha tent near Gwangan — ₩8,000–10,000. Busan milmyeon uses broader wheat noodles in a slightly spicier, tangier broth than Pyongyang-style cold noodles. It is the city's definitive lunch dish.",
                  "Afternoon: Yongdusan Park by subway (Line 1 to Nampo, ₩1,500) — walk up through the park to the statue of Admiral Yi Sun-sin and then take the elevator up Busan Tower (₩12,000 entry) for a 360° panoramic view over the Nampo harbour, the container port sprawling to the south, and the hillside districts rising behind the city.",
                  "Pre-dinner: Walk to Choryang Ilbonggori, the Japanese street in the Choryang neighbourhood near Busan Station — a preserved block of Japanese-era restaurants and izakayas that date to the colonial period. Tonkatsu, ramen, and Japanese curry at ₩9,000–16,000 per person. One of the most atmospheric dining streets in Busan.",
                  "Evening: Seomyeon district by subway for Busan's main nightlife hub. The Bupyeong Kkangtong Night Market opens at 7pm (free entry, stalls from ₩2,000). Then return to Gwangalli for the Diamond Bridge night light show — full LED illumination begins at 8pm and the reflection across the bay is one of the iconic images of contemporary Busan.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Taejongdae Cliffs · Busan Cinema Center · Shinsegae Spa Land · Departure"
                cost="₩35,000–50,000 including Spa Land, Taejongdae, and meals (~$26–38)"
                items={[
                  "Morning: Bus or taxi to Taejongdae Resort Park on the southern tip of Yeongdo Island (₩1,400 by bus from Busan Station, ₩15,000 by taxi). Park entry ₩1,000. The park covers dramatic coastal cliffs dropping 40–60 metres directly into the East Sea — some of the most striking coastal scenery in South Korea. Take the Danubi tourist train around the park (₩3,000) to the main observation deck and lighthouse, or walk the 4.3km trail for the full experience.",
                  "Taejongdae is named after the Silla Kingdom King Taejong who reportedly practised archery here. The south-facing cliffs have dramatic vertical rock columns above constant breaking waves. Rock fishing platforms on the shoreline below have fishermen year-round — they rope down the cliff face to their spots in the morning. Early overcast light makes the cliff atmosphere particularly intense.",
                  "Return to central Busan by bus (₩1,400). Stop at the Busan Cinema Center in the Centum City district — free to enter the outdoor plaza. The building holds the world's largest overhanging roof structure (Guinness World Record). The LED-lit underside of the roof creates a free light show at night that is one of Busan's most impressive architectural spectacles. During October's BIFF, outdoor screenings take place here.",
                  "Lunch: Food court inside Shinsegae Centum City — the world's largest department store (Guinness certified, total floor area 293,905 m²). Kimbap and ramen combo ₩8,000–10,000 in the basement food court, or upgrade to the gourmet hall for Korean bento boxes and grilled meats.",
                  "Afternoon: Spa Land in the basement of Shinsegae Centum City — a full-scale Korean jjimjilbang spread across 3,000 m² of themed bathing areas. Entry ₩16,000 weekday, ₩18,000 weekend. Twenty-two zones from Roman baths to Finnish sauna to outdoor sky pools — allow 3 to 4 hours to cycle through the different temperatures. Rent a gown (₩3,000) for the dry sauna zones.",
                  "Departure: Centum City subway to Sasang Station, then the Gimhae Airport Light Rail (total fare ₩1,700, 35 minutes), or taxi direct from Centum City (₩25,000–35,000). Final ritual: cup ramyeon (₩1,200) with hot water at the CU counter — the unofficial farewell meal of every Busan visitor.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Busan" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The essential Busan landmarks in order of priority, with entry prices and realistic time budgets. Most major outdoor attractions are free — Busan rewards explorers more than ticket-buyers.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Haeundae Beach",
                  e: "Free",
                  d: "Korea&apos;s most visited beach — 1.5km of white sand backed by the glass-tower Marine City skyline. Packed in summer (July–August sees 100,000+ visitors per day), far more manageable in spring and autumn. The Dongbaekseom Island walkway at the western end gives excellent elevated views of the full beach arc.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Gamcheon Culture Village",
                  e: "Free (₩2,000 stamp map)",
                  d: "The most distinctive neighbourhood in Busan — a wartime refugee settlement on a steep hillside, each house a different colour, connected by narrow alleys filled with murals, sculptures, and artist studios. The ₩2,000 stamp map from the community center guides you to all 15+ art installations. Arrive before 10am to beat the tour buses that fill the main alley by mid-morning.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Haedong Yonggungsa Temple",
                  e: "Free",
                  d: "Founded in 678 AD and rebuilt after wartime damage — the main hall sits directly above the East Sea on a rocky cliff platform with waves crashing beneath it. One of the only major coastal Buddhist temples in Korea. The 108 stone steps, the dragon head sculpture at the water, and the morning prayer atmosphere make this unmissable. Visit before 9am on a weekday.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Jagalchi Fish Market",
                  e: "Free to enter",
                  d: "South Korea&apos;s largest seafood market — the outdoor ground floor has haenyeo female divers selling live catches from baskets while the 2F indoor section has restaurants where you select live fish from tanks and eat them cooked immediately. Arrive before 9am for the authentic working-market experience. Famous for sea urchin (sea urchin sashimi ₩3,000–5,000), live octopus, and haenyeo culture.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Gwangalli Beach & Gwangandaegyo Bridge",
                  e: "Free",
                  d: "Busan&apos;s second beach — less crowded than Haeundae, better café scene, and the definitive view of the 7.4km Gwangandaegyo double-deck suspension bridge. The bridge lights up in full LED colour from 8pm — sitting on the beach at night with the illuminated bridge reflected in the water is one of the most photogenic moments in modern South Korea.",
                  t: "Best at night · 2 hrs",
                },
                {
                  n: "BIFF Square & Nampo-dong",
                  e: "Free",
                  d: "The street embedded with handprints of film stars from the Busan International Film Festival — running since 1996, one of Asia&apos;s most prestigious film events. The adjacent Nampo-dong has the Gukje Market (Korea&apos;s first post-war market), the Ssiat Hotteok stall that has been selling seed pancakes since the 1980s, and the original Jagalchi waterfront.",
                  t: "2 hrs",
                },
                {
                  n: "Busan Cinema Center",
                  e: "Free (plaza) / varies for screenings",
                  d: "The main BIFF venue in Centum City — holds the world&apos;s largest overhanging roof by area (Guinness Record). The LED light show under the canopy at night is spectacular and completely free. The outdoor plaza is also worth visiting during the day to appreciate the architectural scale. BIFF outdoor screenings happen here in October.",
                  t: "Evening visit · 1 hr",
                },
                {
                  n: "Taejongdae Cliffs",
                  e: "₩1,000",
                  d: "Dramatic sea cliffs on the southern tip of Yeongdo Island — vertical rock faces 40–60m above the East Sea. The lighthouse, the rock-fishing platforms below the cliffs, and the 4.3km walking trail make this a full half-day destination. The Danubi tourist train (₩3,000) reaches the main viewpoints without the walk.",
                  t: "Half day · 3 hrs",
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
            title="Busan — Beaches, Temples &amp; Colour"
            subtitle="Korea&apos;s most cinematic city, from cliffside temples to rainbow hillsides."
            spots={[
              {
                name: "Gamcheon Culture Village",
                query: "gamcheon culture village busan colorful terraced houses hillside korea",
                desc: "The rainbow-terraced hillside neighbourhood built by Korean War refugees — one of Asia&apos;s most photographed urban landscapes.",
              },
              {
                name: "Haedong Yonggungsa Temple",
                query: "haedong yonggungsa temple busan sea cliffs korea buddhist ocean",
                desc: "The cliffside temple founded in 678 AD where Buddhist monks chant morning prayers above crashing East Sea waves.",
              },
              {
                name: "Haeundae Beach Skyline",
                query: "haeundae beach busan skyline korea marine city sunset",
                desc: "Korea&apos;s most visited beach with the Marine City glass-tower skyline rising behind 1.5km of white sand.",
              },
              {
                name: "Gwangalli Diamond Bridge at Night",
                query: "gwangalli beach diamond bridge busan night lights korea reflection",
                desc: "The 7.4km Gwangandaegyo Bridge fully illuminated at night, reflected in Gwangalli Beach waters.",
              },
              {
                name: "Jagalchi Fish Market",
                query: "jagalchi fish market busan seafood haenyeo korea traditional market",
                desc: "South Korea&apos;s largest seafood market, where haenyeo female divers sell their catches every morning.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Busan is noticeably cheaper than Seoul — accommodation runs 10–20% lower and the street food and market meal culture keeps food costs very manageable for every budget tier. The main variable is accommodation choice and whether you use the subway or taxis.
            </p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-green-300 text-center">💰 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">✨ Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-rose-300 text-center">💎 Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (per night)", "₩25,000–35,000", "₩70,000–110,000", "₩200,000–500,000"],
                    ["🍽️ Food (per day)", "₩15,000–20,000", "₩35,000–55,000", "₩80,000–200,000"],
                    ["🚇 Transport (per day)", "₩5,000–8,000", "₩15,000–25,000", "₩50,000–120,000"],
                    ["🎟️ Activities (per day)", "₩5,000–12,000", "₩20,000–40,000", "₩100,000–300,000"],
                    ["TOTAL per day", "₩60,000–75,000 (~$45–55)", "₩140,000–230,000 (~$105–172)", "₩350,000–1,100,000+ (~$260+)"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💰 Budget (₩60,000–75,000/day · ~$45–55)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a hostel dorm or goshiwon near Seomyeon or Haeundae (₩25,000–35,000/night), eat at market stalls and convenience stores, use the T-Money card subway everywhere. Gamcheon and Haedong Yonggungsa are both free to enter. Budget backpacker infrastructure in Busan is genuinely good.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">✨ Mid-Range (₩140,000–230,000/day · ~$105–172)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">3-star hotel near Haeundae or Seomyeon (₩70,000–110,000/night), mix of restaurant meals and market food, occasional taxi for early temple visits, Spa Land included. This is the sweet spot for comfort without sacrificing the city&apos;s street-level food culture.</p>
              </div>
              <div className="bg-rose-50 border border-rose-200 rounded-xl p-4">
                <p className="font-medium text-sm text-rose-800 mb-1">💎 Luxury (₩350,000+/day · ~$260+)</p>
                <p className="text-xs text-rose-700 font-light leading-relaxed">Park Hyatt Busan or Signiel Busan (₩350,000–500,000/night), private transfers, Michelin-level dining at La Yeon (Westin Chosun Busan), private temple tours, yacht charters, and full-service spa days. Busan&apos;s luxury tier is world-class and genuinely worth it.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Busan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Three main areas: Haeundae for beach access and the best hotels; Seomyeon for central location, nightlife, and the best mid-range value; Nampo/Jung-gu for proximity to Jagalchi and Gamcheon. First-timers should choose Haeundae for the full beach experience or Seomyeon for maximum transport convenience.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Park Hyatt Busan",
                  type: "5-star luxury · Marine City, Haeundae",
                  price: "From ₩350,000/night (~$260)",
                  badge: "Best luxury",
                  desc: "The Park Hyatt sits in Marine City directly above Haeundae Beach — floor-to-ceiling ocean views from every room, one of the finest rooftop pools in South Korea, and the PRIMO restaurant with panoramic beach views. The consistent benchmark for luxury in Busan. Book well in advance for summer months.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Lotte Hotel Busan",
                  type: "5-star · Seomyeon central",
                  price: "From ₩200,000/night (~$150)",
                  badge: "Best location",
                  desc: "In the heart of Seomyeon with direct connection to Busan&apos;s best shopping and nightlife, 30 minutes from Haeundae by subway. Multiple dining options and one of the most central addresses in the city. Good value for a five-star property by international standards.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  name: "Grand Hostel Busan Beach",
                  type: "Hostel · Haeundae Beach area",
                  price: "From ₩28,000/night (dorm) · ₩85,000 (private)",
                  badge: "Best value beach stay",
                  desc: "The best-reviewed hostel in the Haeundae area — 5 minutes walk from the beach, clean facilities, free breakfast, rooftop terrace, and a strong social atmosphere. The private rooms are excellent value for a beachside location. Books up fast in summer — reserve 4–6 weeks ahead.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Seomyeon Goshiwon / Budget Guesthouses",
                  type: "Budget · Seomyeon & Nampo-dong",
                  price: "₩15,000–30,000/night",
                  badge: "Backpacker pick",
                  desc: "Goshiwon rooms — tiny single rooms designed for Korean students, widely used by budget travellers — are scattered throughout Seomyeon and Nampo. Private room with TV, desk, and usually a shared kitchen for ₩15,000–25,000 per night. Basic but practical for solo travellers who want a private space at hostel prices.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Busan</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Busan has its own food culture distinct from Seoul — dwaeji gukbap (pork and rice soup served 24 hours), milmyeon (cold wheat noodles), ssiat hotteok (seed-filled sweet pancake), and the freshest raw seafood in Korea. The best meals are found at market stalls and pojangmacha tents, not in tourist-facing restaurants.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Choryang Ilbonggori (Japanese Street)",
                  t: "Japanese dining district · Near Busan Station, Choryang",
                  d: "A preserved block of authentic Japanese-run restaurants and izakayas dating to the Japanese colonial period — one of the last remaining Japanese-era commercial streets in Korea. Ramen, tonkatsu, takoyaki, and Japanese curry at ₩9,000–16,000 per person. The street is pedestrian-friendly and lit warmly at night, making it one of the more atmospheric dining experiences in the city.",
                  b: "Most unique",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Gukje Market Pojangmacha",
                  t: "Street food tents · Nampo-dong, near BIFF Square",
                  d: "Korea&apos;s first post-war market, founded in 1945. The pojangmacha tents around the market perimeter serve dwaeji gukbap (pork and rice soup, ₩8,000), tteokbokki (spicy rice cakes, ₩4,000), and makgeolli (rice wine, ₩3,000 per bottle) in the evenings. This is where older Busan residents eat — sit at a plastic stool outside and order what the table next to you is having.",
                  b: "Most local",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Ssiat Hotteok — Original Stall, BIFF Square",
                  t: "Street food · BIFF Square, Nampo-dong",
                  d: "Busan&apos;s most famous street food — ssiat hotteok is a sweet pancake stuffed with seeds (sunflower, sesame, pumpkin) and brown sugar, a Busan speciality unique to this city. The original stall near BIFF Square has been operating since the 1980s and typically has a queue by mid-morning. ₩2,000 each. Eat it immediately — the seed filling is best when still slightly molten inside.",
                  b: "Must eat",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Millak Raw Fish Town",
                  t: "Fresh seafood restaurants · Gwangalli Beach area",
                  d: "A cluster of seafood restaurants near Gwangalli Beach specialising in hoe (raw fish) and haejangguk (seafood soup). Select your fish from the tank at the entrance, specify preparation (raw, grilled, or braised), and it arrives at the table within 20 minutes. A sharing platter with 3–4 raw fish varieties, clam soup, and rice runs ₩40,000–60,000 for two people. Far better value and quality than the tourist-facing stalls at Jagalchi.",
                  b: "Best seafood",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Convenience Store Ramyeon Counter",
                  t: "24-hour · CU / GS25 / 7-Eleven throughout Busan",
                  d: "Not a joke recommendation — the hot water counter at Korean convenience stores is a Busan institution. Cup ramyeon (₩1,200–1,800), triangle kimbap (₩1,000), and machine coffee (₩900) form the unofficial backpacker breakfast. Available at 3am, at the beach, near the temple, and at the airport. Eating cup ramyeon at the standing counter of a Korean convenience store is a genuine cultural experience.",
                  b: "Budget essential",
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
            destination="Busan South Korea"
            hotels={[
              {
                name: "Park Hyatt Busan",
                type: "5-star luxury · Marine City Haeundae",
                price: "From ₩350,000/night",
                rating: "5",
                badge: "Best luxury",
                url: "https://www.booking.com/hotel/kr/park-hyatt-busan.html?aid=2820480",
              },
              {
                name: "Lotte Hotel Busan",
                type: "5-star · Seomyeon central",
                price: "From ₩200,000/night",
                rating: "5",
                badge: "Best location",
                url: "https://www.booking.com/hotel/kr/lotte-busan.html?aid=2820480",
              },
              {
                name: "Grand Hostel Busan Beach",
                type: "Hostel · Haeundae Beach",
                price: "From ₩28,000/night",
                rating: "4",
                badge: "Best budget beach",
                url: "https://www.booking.com/hotel/kr/grand-hostel-busan-beach.html?aid=2820480",
              },
              {
                name: "Signiel Busan",
                type: "Ultra-luxury · LCT Landmark Tower Haeundae",
                price: "From ₩500,000/night",
                rating: "5",
                badge: "Most exclusive",
                url: "https://www.booking.com/hotel/kr/signiel-busan.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Busan Full Day Private Tour",
                duration: "8 hrs",
                price: "From ₩80,000/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=busan+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Gamcheon Culture Village Walking Tour",
                duration: "3 hrs",
                price: "From ₩35,000/person",
                badge: "Top rated",
                url: "https://www.getyourguide.com/s/?q=gamcheon+culture+village+tour&partner_id=PSZA5UI",
              },
              {
                name: "Haedong Yonggungsa Temple Sunrise Tour",
                duration: "4 hrs",
                price: "From ₩45,000/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=haedong+yonggungsa+sunrise+busan&partner_id=PSZA5UI",
              },
              {
                name: "Jagalchi Market Food & Culture Tour",
                duration: "3 hrs",
                price: "From ₩50,000/person",
                url: "https://www.getyourguide.com/s/?q=jagalchi+market+food+tour+busan&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Busan</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🚇",
                  title: "Not Getting a T-Money Card at the Airport",
                  desc: "The T-Money transit card (available at every convenience store and GS25 for ₩2,500) saves ₩100 per subway ride and works on all buses, taxis, and the airport light rail. Without it you&apos;ll fumble for exact change every time. Load ₩30,000–50,000 immediately on arrival — it is the single most practical first purchase you can make in South Korea.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🌊",
                  title: "Only Visiting Haeundae Beach",
                  desc: "Every tourist goes to Haeundae — and it gets genuinely overcrowded in summer, sometimes hitting 100,000 people in a single day. Gwangalli Beach is 20 minutes away by subway, less crowded year-round, has a better café scene, and gives the best view of the Diamond Bridge. Visit both beaches, but spend your evening time at Gwangalli where the bridge lights up at night.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🕐",
                  title: "Arriving at Jagalchi Market Too Late",
                  desc: "The magic of Jagalchi is in the morning when haenyeo are unloading fresh catches and the outdoor market is fully active. Arrive after 10am and you get a largely tourist-oriented experience with less variety and higher prices. Get there by 8am for the real thing — watch the catch being sorted, tanks being stocked, and the first restaurant customers negotiating over live sea creatures.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "🗓️",
                  title: "Not Planning Around BIFF Season",
                  desc: "The Busan International Film Festival runs for 10 days every October. If you visit during BIFF, book accommodation months in advance — hotels sell out completely and prices can triple. If you are not going for the festival, you still benefit from BIFF Square and the Cinema Center year-round, but October visitors need to plan significantly ahead.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  icon: "📱",
                  title: "Relying on Google Maps for Navigation",
                  desc: "Google Maps works poorly in South Korea — Korean law restricts Google from accessing detailed domestic map data, so routing is frequently wrong and transit times are unreliable. Download KakaoMap and Naver Map before leaving home. Both are free, show real-time subway and bus data, and Naver Map has an English interface. This is a real problem that confuses travellers daily.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  icon: "🏖️",
                  title: "Visiting Haedong Yonggungsa on a Weekend",
                  desc: "This cliffside temple is one of Korea&apos;s most photographed landmarks. Weekend crowds are overwhelming — tour buses, selfie queues, and difficulty getting near the main hall. Visit on a Tuesday or Wednesday morning before 8:30am and you will have the dramatic coastal views nearly to yourself. The difference between a weekend afternoon and a weekday morning at this temple is extraordinary.",
                  color: "border-teal-200 bg-teal-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Busan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍜",
                  title: "Eat Dwaeji Gukbap for Breakfast Like a Local",
                  desc: "Busan&apos;s signature dish is dwaeji gukbap — pork and rice soup in a rich milky bone broth, served 24 hours a day. Head to the Seomyeon restaurant strip at 8am for a ₩8,000 bowl that has been fuelling Busan dockworkers since the Korean War era. Season it yourself at the table with shrimp paste and green onion. It is the soul of the city in a bowl and the correct way to start a Busan morning.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  icon: "🌙",
                  title: "See Gwangalli Beach at Night, Not Just Daytime",
                  desc: "Gwangalli transforms at dusk — the Diamond Bridge illuminates in a choreographed LED display from 8pm, couples line the sand, pojangmacha tents glow, and the bridge&apos;s reflection shimmers across the water. Come for sunset (around 7pm in summer) and stay for the full light show. The same beach at noon and at 9pm are entirely different experiences, and the night version is the better one.",
                  color: "border-indigo-200 bg-indigo-50",
                },
                {
                  icon: "🎫",
                  title: "Book GetYourGuide Tours for Gamcheon and Haedong",
                  desc: "Guided tours transform both Gamcheon Culture Village and Haedong Yonggungsa from sightseeing into genuine storytelling. Local guides explain the wartime refugee history behind Gamcheon and the 1,400-year founding mythology of the temple — context that no English signage in either place provides. Gamcheon guided tours also access private artist studios. Book at getyourguide.com/s/?q=Busan&partner_id=PSZA5UI",
                  color: "border-green-200 bg-green-50",
                },
                {
                  icon: "💳",
                  title: "Carry Cash for Markets and Pojangmacha",
                  desc: "Busan&apos;s outdoor market stalls, pojangmacha food tents, and small temple souvenir vendors are cash-only. Korean convenience stores (CU, GS25, 7-Eleven) have ATMs that accept foreign Visa and Mastercard — withdraw ₩100,000–200,000 as walking-around money on arrival. The subway ticket machines also accept foreign cards if you need to top up your T-Money card.",
                  color: "border-pink-200 bg-pink-50",
                },
                {
                  icon: "🌸",
                  title: "Time Late March or April for Cherry Blossoms",
                  desc: "Busan&apos;s cherry blossom season (late March to mid-April) makes every outdoor photo dramatically better — Oncheonjang Park, the Dongbaekseom Island coastal trail, and the hillside paths above Gamcheon all bloom pink. Nearby Gyeongju is world-famous for cherry blossom season and reachable in 50 minutes by KTX. Time the trip right and the entire city becomes a backdrop.",
                  color: "border-pink-200 bg-pink-50",
                },
                {
                  icon: "♨️",
                  title: "Budget a Full Morning for Spa Land",
                  desc: "Spa Land inside Shinsegae Centum City (₩16,000–18,000) is one of the best jjimjilbang experiences in Korea — 22 themed bathing areas from Roman pools to Finnish sauna to outdoor sky baths across 3,000 m². Allow three hours minimum to cycle through the different temperatures and sauna rooms. Most visitors try to squeeze it into two hours and feel rushed. Weekday mornings are when the crowds are smallest.",
                  color: "border-cyan-200 bg-cyan-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Busan" />

          {/* Combine With */}
          <CombineWith currentSlug="busan-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How do I get from Busan Gimhae Airport to the city center?",
                  a: "The Gimhae Airport Light Rail (AREX) connects the airport to Sasang Station in about 15 minutes (₩1,700 with T-Money), where you transfer to Busan Metro Line 2. Total journey to Seomyeon takes about 30 minutes; to Haeundae Beach about 50 minutes. Full subway fare is ₩3,000–4,000 total. Taxis cost ₩15,000–30,000 depending on destination and take 20–40 minutes. Both options are clearly signposted in English.",
                },
                {
                  q: "Is Busan more expensive than Seoul?",
                  a: "Busan is generally 10–20% cheaper than Seoul for accommodation and slightly cheaper for food. Budget travellers can live comfortably for ₩60,000–75,000 per day including a hostel dorm, market meals, and the subway. The exception is during the Busan International Film Festival in October, when hotel prices spike dramatically and accommodation books out weeks in advance.",
                },
                {
                  q: "What is the best neighbourhood to stay in Busan?",
                  a: "Haeundae is the best choice for beach access, nightlife, and the highest-quality hotels. Seomyeon offers the most central location with the best transport links, ideal mid-range hotels, and excellent nightlife. Nampo/Jung-gu puts you closest to Jagalchi Fish Market and Gamcheon Culture Village. First-time visitors are best placed in Seomyeon for centrality or Haeundae for the full Busan beach experience.",
                },
                {
                  q: "Can I do a day trip from Busan to Gyeongju?",
                  a: "Yes — Gyeongju (the ancient Silla Kingdom capital with 2,000-year-old royal tombs and Buddhist temples scattered across the city) is only 50–60 minutes from Busan by KTX bullet train (₩8,400) or 1 hour 15 minutes by intercity bus (₩3,800). It is one of the best day trip pairings in South Korea and adds enormous historical depth to a Busan trip.",
                },
                {
                  q: "Is Busan safe for solo female travellers?",
                  a: "Busan is extremely safe for solo female travellers — South Korea consistently ranks among the world&apos;s safest countries for independent travel. Subway lines run until midnight and streets are well-lit throughout the city. The main thing to watch is handbag security on crowded subway trains during rush hour — keep bags in front. Solo women consistently report feeling comfortable in Busan, including at pojangmacha tents, night markets, and beach areas.",
                },
                {
                  q: "Do I need a visa to visit South Korea from India?",
                  a: "Indian passport holders need either a K-ETA (Korea Electronic Travel Authorization, apply at k-eta.go.kr, USD $10, approved in minutes to 72 hours) or a tourist visa from the Korean consulate (₩40,000, takes 3–5 business days). US, UK, EU, and Australian passport holders also need a K-ETA before entry. Always check the Korean Ministry of Foreign Affairs website for your specific nationality before booking travel.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Busan trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-busan", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/busan-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-get-to-busan-from-seoul", label: "Seoul to Busan", icon: "🚄" },
                { href: "/blog/busan-travel-tips", label: "Travel tips", icon: "📋" },
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
          <RelatedGuides currentSlug="busan-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More East Asia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Seoul 5 Days — Palaces, Street Food &amp; K-culture", href: "/blog/seoul-5-days" },
                { label: "Tokyo 5 Days — Ancient Temples to Neon Nights", href: "/blog/tokyo-5-days" },
                { label: "Taipei 4 Days — Night Markets &amp; Mountain Trails", href: "/blog/taipei-4-days" },
                { label: "Bangkok 4 Days — Grand Palace to Floating Markets", href: "/blog/bangkok-4-days" },
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
