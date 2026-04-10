"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import AuthorByline from "@/components/blog/AuthorByline";
import InlineSignup from "@/components/email/InlineSignup";
import PhotoCta from "@/components/blog/PhotoCta";
import { PinterestSaveButton } from "@/components/ui/PinterestSaveButton";
import TableOfContents from "@/components/blog/TableOfContents";
import Comments from "@/components/blog/Comments";
import DestinationGallery from "@/components/blog/DestinationGallery";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import RelatedGuides from "@/components/blog/RelatedGuides";
import CombineWith from "@/components/blog/CombineWith";
import Breadcrumb from "@/components/blog/Breadcrumb";
import InlineCTA from "@/components/blog/InlineCTA";
import SmartImage from "@/components/ui/SmartImage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";

// ── Table of Contents ─────────────────────────────────────────────────────────
const GRANADA_TOC = [
  { id: "honest",      emoji: "⚡",  label: "What Granada Actually Is" },
  { id: "season",      emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach",  emoji: "🚂",  label: "Getting There" },
  { id: "itinerary",   emoji: "📅",  label: "4-Day Itinerary" },
  { id: "landmarks",   emoji: "🏛️", label: "Landmark Guide" },
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
          href: `mailto:?subject=Granada 4-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Granada in 4 Days — Alhambra, free tapas and flamenco caves&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/granada-4-days"
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
        description="Granada in 4 Days: Alhambra Palace, free tapas with every drink, Sacromonte flamenco caves and the Albaicín quarter — complete travel guide from €45/day."
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
export default function GranadaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={GRANADA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Granada" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="granada alhambra palace spain andalusia sierra nevada sunset"
            fallback="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Granada Alhambra Palace with Sierra Nevada mountains backdrop at sunset"
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
              <span className="text-white/70">Granada 4 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-700 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Andalusia, Spain
                </span>
                <span className="text-white/60 text-xs">January 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Granada in 4 Days:
                <em className="italic text-amber-300"> Alhambra, Free Tapas &amp; Flamenco Caves</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The Alhambra at golden hour, every drink paired with a free tapa, and flamenco in candlelit Sacromonte caves. Spain&apos;s most romantic city, fully mapped — from €45/day.
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
              <span>🇪🇸 Andalusia, Spain</span>
              <span>·</span>
              <span>🗓 4 Days</span>
              <span>·</span>
              <span>💰 From €45/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              As the sun drops behind the Sierra Nevada, the Alhambra turns a burnished copper-gold — and from a terrace in the Albaicín with a cold Alhambra beer in hand (tapas included, always free), the view stops your breath entirely. Granada is Spain&apos;s greatest open secret.
            </p>
          </blockquote>

          {/* ── WHAT GRANADA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Granada Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Granada is the last Moorish capital in Western Europe — the city where seven centuries of Islamic civilisation in Spain came to an end in 1492, when the Nasrid Sultan Boabdil handed the keys of the Alhambra to Ferdinand and Isabella. The surrender was so painful that the mountain pass where Boabdil is said to have wept looking back at his city is still called El Suspiro del Moro — the Moor&apos;s Sigh.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              What Boabdil left behind is the most extraordinary monument in Spain. The Alhambra palace complex — built across the 13th and 14th centuries — is a UNESCO World Heritage Site and the most visited monument in Spain, receiving over 2.7 million visitors a year. Its Nasrid Palaces contain some of the finest Islamic art and architecture on earth: honey-comb muqarnas ceilings, geometric tilework in 10,000 combinations, and the Court of the Lions with its famous fountain supported by twelve carved marble lions.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Below the Alhambra hill, the Albaicín quarter — also UNESCO-listed — preserves the whitewashed streets, carmen gardens, and Moorish house forms of medieval Granada. Across the ravine, in Sacromonte, the Roma community has lived in cave homes cut into the hillside for six centuries, developing the distinctive zambra flamenco style that still draws serious flamenco pilgrims today.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              And then there is the tapas culture. Granada is one of the last cities in Spain — along with Jaén and Almería — where every alcoholic drink ordered at a bar comes with a free tapa. Not a chip or an olive: a proper small plate that escalates with each successive drink. It is the most generous food tradition in Europe and it means a budget traveller can eat very well for almost nothing in Granada.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport Code" value="GRX" />
              <StatCard icon="🌡️" label="Best Season" value="Mar–May · Sep–Nov" />
              <StatCard icon="🏛️" label="UNESCO Sites" value="2" />
              <StatCard icon="💰" label="Budget From" value="€45/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit Granada</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Mar–May",
                  i: "🌸",
                  t: "Spring — Best Season",
                  d: "18–24°C, the Generalife Gardens are in full bloom with roses and wisteria, and the light on the Alhambra is extraordinary. Fewer crowds than summer. Book Alhambra tickets 6–8 weeks ahead. The absolute best time for most travellers.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Sep–Nov",
                  i: "🍂",
                  t: "Autumn — Excellent",
                  d: "16–25°C, the summer crowds have thinned, prices drop by 20–30%, and September still has warm evenings perfect for rooftop tapas. October is particularly pleasant — cool enough to walk all day without overheating.",
                  b: "Highly recommended",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Very Hot",
                  d: "34–42°C in July and August. Granada sits inland in a bowl surrounded by mountains and bakes in summer — hotter than Seville. Peak tourist season means the Alhambra is at its most crowded and expensive. If you must travel in summer, book everything 3 months ahead and visit the Alhambra at opening.",
                  b: "Book 3 months ahead",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  s: "Dec–Feb",
                  i: "❄️",
                  t: "Winter — Quiet & Cold",
                  d: "5–12°C, the city is quiet and Alhambra tickets are easy to get. The Sierra Nevada ski season runs December–April — a unique combination of city sightseeing and skiing. Rain is possible. Christmas lights in Granada are spectacular. Great for couples and slow travellers.",
                  b: "Ski season bonus",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🚂 Getting to Granada</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> Granada has its own airport (GRX, 15km west of the city) and a high-speed AVE train station. The fastest and most comfortable connection from Madrid is the <strong className="font-medium">AVE high-speed train</strong> — 3.5 hours, far better than flying when you factor in airport time.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "🚄",
                  t: "AVE Train from Madrid (recommended)",
                  d: "Madrid Atocha → Granada: 3h 15min–3h 30min on the AVE high-speed train. Tickets from €40 (advance) to €70 (flexible). Multiple daily departures. The train station is a 15-minute bus ride from the historic centre. Far more convenient than flying — no airport queues, city-centre arrival.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "🚌",
                  t: "Bus from Madrid or Málaga",
                  d: "ALSA coaches: Madrid → Granada ~5 hours, from €20. Málaga → Granada ~1h 45min, from €12. Buses are significantly cheaper than the train but less comfortable for long journeys. The ALSA app makes booking easy. The bus station is a 20-minute walk from the centre or a short taxi ride.",
                  b: "Budget option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "Fly into Granada Airport (GRX)",
                  d: "Connections from London Gatwick (easyJet, ~2h 45min), Manchester, and several European cities. Limited Spanish domestic connections — most domestic travellers use the train. A taxi from GRX to the city centre costs ~€25–30 (30 minutes). The airport bus (LAC) costs €3 and takes 45 minutes.",
                  b: "From UK/Europe",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Seville or Málaga",
                  d: "Seville → Granada: 250km via A-92, ~2.5 hours. Málaga → Granada: 130km via A-92, ~1.5 hours. Both routes are straightforward motorway driving. Parking in Granada&apos;s old city is difficult — use the car park on Calle San Agustín and walk in. Free street parking is available on the eastern outskirts.",
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

          {/* ── 4-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 4-Day Granada Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. Day 2 must be booked in advance — the Alhambra&apos;s Nasrid Palaces sell out up to 3 months ahead. Book your timed entry slot before you plan anything else.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrival · Albaicín Quarter · Mirador de San Nicolás Sunset"
                cost="~€25–35 (transport + 1 night + drinks)"
                items={[
                  "Arrive at Granada station or airport. From the station, bus Line 33 runs to the centre (€1.40). A taxi costs €8–12. Check into your accommodation — budget hostels like Funky Backpackers near the cathedral start from €18/night in dorms.",
                  "Walk into the Albaicín quarter from Plaza Nueva: follow the Carrera del Darro alongside the Río Darro, with the Alhambra rising above you on the opposite hill. This is one of the most beautiful short walks in Spain — the 11th-century Arab baths (Bañuelo) are on your right, free to observe from outside.",
                  "Explore the Albaicín: UNESCO-listed Moorish quarter of whitewashed houses, vine-covered lanes, and carmen gardens. Get deliberately lost. The neighbourhood dates to the 13th century and preserves the urban form of Islamic Granada — narrow alleys, blind corners, and the smell of orange blossom in spring.",
                  "Reach Mirador de San Nicolás at least 30 minutes before sunset for Granada&apos;s most iconic view: the entire Alhambra complex, with the Generalife terraces on the left and the Sierra Nevada snow-caps behind. In summer, arrive 45 minutes early — it fills up fast. Walk up through the Albaicín lanes (steep — allow 20 minutes from Plaza Nueva) or take a taxi up and walk down.",
                  "Dinner: begin your free tapas education at Bodegas Castañeda on Calle Almireceros — a bar established in 1870. Order a glass of vermut (€2.50) and receive your first free tapa. Stay for a second round: the tapa gets bigger. This is how Granada works.",
                  "Evening stroll along Carrera del Darro lit by lanterns — the most romantic street in the city.",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Alhambra Palace · Nasrid Palaces · Generalife Gardens · Golden Hour"
                cost="~€30–45 (Alhambra ticket + food + drinks)"
                items={[
                  "CRITICAL BOOKING NOTE: The Alhambra sells out. Almost always. Book your tickets at www.alhambra-patronato.es as soon as your dates are confirmed — ideally 60–90 days in advance for April through October. The Nasrid Palaces have a strictly timed entry (you choose a 30-minute slot at booking). Being late by even a few minutes means you cannot enter — no exceptions, no refunds.",
                  "Standard ticket (€14) covers the Nasrid Palaces, Alcazaba fortress, and Generalife Gardens. The audio guide (€7 extra) is worth it for the Nasrid Palaces — the history and symbolism of each room is not self-evident. The Patronato guide is better than third-party audio guides.",
                  "Alcazaba fortress first: the oldest part of the complex, a military citadel. Climb the Torre de la Vela for panoramic views over Granada — the Albaicín below, the Sierra Nevada behind, the vega (agricultural plain) stretching west. The views here may actually be better than Mirador de San Nicolás.",
                  "Nasrid Palaces: the artistic and architectural peak of the Alhambra. Allow at least 90 minutes. The Mexuar, Comares Palace, and Palace of the Lions are three distinct architectural programmes — do not rush through. The Courtyard of the Lions (12 marble lions supporting the fountain, carved in the 14th century) is extraordinary. The muqarnas ceiling in the Hall of the Abencerrages is the most complex piece of decorative geometry in the world.",
                  "Generalife Gardens: the summer palace and gardens of the Nasrid sultans, designed around water — channels, jets, and pools running through terraced gardens on the hillside. The Patio de la Acequia (Court of the Water Channel) is magnificent in spring with the roses in bloom. The upper gardens beyond the main terraces are quieter and worth exploring.",
                  "Afternoon: walk back down through the Bosque de la Alhambra (the forested hill below the complex) — shaded, beautiful, and free. Stop for a drink in a bar near Puerta Real before the free tapas evening: Calle Elvira bar-hop — each drink earns a tapa, the size escalating with each round.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Cathedral · Royal Chapel · Sacromonte · Cave Flamenco"
                cost="~€35–55 (entry fees + flamenco + food)"
                items={[
                  "Morning: Cathedral of Granada (€5) — one of the first Renaissance cathedrals in Spain, built from 1523 on the site of the city&apos;s main mosque. The proportions are immense — the nave is 30 metres high. Look for the Royal Chapel (separate ticket, €5), which contains the tombs of Ferdinand and Isabella, the Catholic Monarchs who commissioned the conquest of Granada in 1492. Their effigies lie above alabaster sarcophagi; the actual coffins are in the crypt below.",
                  "Walk through the Alcaicería — Granada&apos;s old Moorish silk market, now a bazaar selling ceramics, leather goods, and textiles. The original market was burned in 1843 and rebuilt in Moorish pastiche style, but some of the shops selling hand-painted Nasrid-pattern ceramics are genuinely good. Prices are negotiable.",
                  "Lunch: Mercado San Agustín next to the Cathedral — a covered market with stalls selling fresh produce and cheap tapas. Or head to Bar Los Diamantes on Plaza Nueva for their legendary fried fish — a €2.50 beer here comes with excellent pescaíto frito (fried seafood).",
                  "Afternoon: walk up to Sacromonte — the cave district cut into the cliff face east of the Albaicín. The Roma community has lived in these caves for six centuries, developing the zambra flamenco style that is specific to Granada. Visit the Museo Cuevas del Sacromonte (€5) to understand the history before attending a show — it reframes what you see in the evening.",
                  "Flamenco show: book a cave flamenco show at Cueva de la Rocío or Venta El Gallo — intimate venues (30–50 people) in actual caves, with candlelight and stone walls. Tickets cost €25–35 per person including one drink. This is not a polished tablao show — it is rough, powerful, and genuine. Book at least 2 days ahead via GetYourGuide or directly.",
                  "Dinner after the show: Bar Los Diamantes on Plaza Nueva is open late — the fried fish and cold beer at 11pm after a flamenco cave show is one of Granada&apos;s great pleasures.",
                ]}
              />
              <DayCard
                day="Day 4"
                title="Sierra Nevada Day Trip · Final Tapas · Departure"
                cost="~€30–60 (day trip + lunch + souvenirs)"
                items={[
                  "Option A — Sierra Nevada (December–April): take the early bus from Granada bus station to the Sierra Nevada ski resort (1 hour, ~€9 return). At 2,100m elevation, Sierra Nevada is the southernmost ski resort in Europe. Day ski passes cost ~€38. Ski hire on-site from €25. You can be back in Granada by 3pm. In summer (May–November), the same bus serves hikers — trails to Mulhacén, at 3,479m the highest peak in mainland Spain.",
                  "Option B — Alpujarras villages (year-round): take an ALSA bus to Lanjarón or continue to Órgiva (1h 15min, ~€6). The Alpujarras are the mountain villages south of the Sierra Nevada — whitewashed Berber-influenced architecture, terraced hillsides growing subtropical fruits, and the descendants of the Moors who were expelled from Granada in 1570. Capileira, Bubión, and Pampaneira are the most beautiful villages. A car gives you more flexibility.",
                  "Option C — Stay in Granada: visit the Carmen de los Mártires (free gardens with views of the Alhambra, open mornings), the Fundación Rodríguez-Acosta (€8 — an early 20th-century artist&apos;s garden-villa carved into the Alhambra hill, architecturally extraordinary and usually very quiet).",
                  "Final tapas lunch before departure: Restaurante Carmela on Calle Colcha — a proper sit-down restaurant with excellent Andalusian classics (rabo de toro, salmorejo, spinach with chickpeas). Main courses €14–18. The set lunch menu (€14–16 including wine) is exceptional value.",
                  "Souvenir shopping: hand-painted Nasrid-pattern ceramics at workshops in the Albaicín or near the Cathedral — from €8 for small pieces, €20–40 for quality plates. Avoid the Alcaicería tourist shops for ceramics; the better workshops are on Cuesta de Gomerez (the street leading up to the Alhambra gate).",
                  "Departure: taxis to GRX airport cost €25–30 (30 minutes). The train station is 15 minutes by bus or €8 by taxi. Allow plenty of time — the Alhambra district and Albaicín have narrow streets that can cause delays.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="Granada" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ Granada Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The major sites in order of priority. Prices as of 2026. Book the Alhambra before everything else — it is the only attraction that regularly sells out.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Alhambra — Nasrid Palaces",
                  e: "€14 (combined ticket)",
                  d: "The absolute must-see. The Nasrid Palaces — Mexuar, Comares, and Palace of the Lions — represent the peak of Moorish architecture in the world. The muqarnas ceilings, zellij tilework, and carved stucco are unmatched anywhere. MUST book 60–90 days ahead for April–October; the Nasrid Palaces timed entry slot is strictly enforced.",
                  t: "Must see · 90 min minimum",
                },
                {
                  n: "Alhambra — Alcazaba & Generalife",
                  e: "Included in €14 ticket",
                  d: "The Alcazaba military fortress (oldest part of the complex, 9th century) and the Generalife summer palace with its water gardens. Both are included in the standard ticket. The Torre de la Vela in the Alcazaba has the best panoramic views of the city.",
                  t: "Must see · 2 hrs",
                },
                {
                  n: "Albaicín Quarter",
                  e: "Free",
                  d: "UNESCO World Heritage listed Moorish quarter of whitewashed houses and carmen gardens. Best experienced on foot — get lost in the lanes above Carrera del Darro. The Mirador de San Nicolás viewpoint is here. Go at sunset.",
                  t: "Must see · 2–3 hrs",
                },
                {
                  n: "Sacromonte Cave District",
                  e: "Free to walk · Museum €5",
                  d: "The hillside cave community of Granada&apos;s Roma population, inhabited since the 15th century. Walk the Camino del Sacromonte in the late afternoon before a flamenco show. The Museo Cuevas del Sacromonte (€5) explains the history and zambra tradition. Flamenco shows in the caves: €25–35 per person.",
                  t: "Flamenco · 2 hrs + show",
                },
                {
                  n: "Cathedral & Royal Chapel",
                  e: "€5 Cathedral · €5 Royal Chapel",
                  d: "The Cathedral (begun 1523) is one of the grandest Renaissance buildings in Spain. The adjacent Royal Chapel contains the tombs of Ferdinand and Isabella — the Catholic Monarchs who ended the Reconquista — along with their daughter Juana la Loca and her husband Philip I. The sarcophagi are in Italian Renaissance style; the actual coffins are in the crypt.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Carrera del Darro",
                  e: "Free",
                  d: "The most romantic street in Granada — a narrow riverside lane running below the Alhambra hill, lined with medieval buildings, the 11th-century Arab baths, and small bridges over the Río Darro. Magical in the morning light and at night. Walk it on both Day 1 and Day 2.",
                  t: "Unmissable · 30 min stroll",
                },
                {
                  n: "Mirador de San Nicolás",
                  e: "Free",
                  d: "Granada&apos;s iconic viewpoint in the upper Albaicín — the full Alhambra complex in one frame, with the Sierra Nevada behind it and the city below. At sunset the palace turns gold. Arrive 30–45 minutes early. Street musicians often perform here. Take a taxi up, walk down through the Albaicín.",
                  t: "Sunset essential · Arrive early",
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
            title="Granada — Alhambra, Albaicín &amp; Sacromonte"
            subtitle="Spain&apos;s most romantic city, from Moorish palaces to candlelit flamenco caves."
            spots={[
              {
                name: "Alhambra Nasrid Palaces",
                query: "alhambra nasrid palace granada spain moorish architecture",
                desc: "The intricate stucco and muqarnas ceilings of the Nasrid Palaces — the most sophisticated Islamic architecture in Western Europe.",
              },
              {
                name: "Generalife Gardens",
                query: "generalife gardens granada alhambra water channels roses spain",
                desc: "The Patio de la Acequia in the Generalife summer palace — a water channel lined with roses and jets, designed for a Nasrid sultan.",
              },
              {
                name: "Albaicín at Sunset",
                query: "albaicin granada whitewashed houses sunset alhambra view moorish",
                desc: "The whitewashed lanes of the Albaicín quarter at golden hour, with the Alhambra glowing across the ravine.",
              },
              {
                name: "Sacromonte Cave Flamenco",
                query: "sacromonte granada cave flamenco roma andalusia spain",
                desc: "The cave district of Sacromonte where Granada&apos;s Roma community has performed zambra flamenco for six centuries.",
              },
              {
                name: "Sierra Nevada from Granada",
                query: "sierra nevada snow mountains granada andalusia spain winter",
                desc: "The Sierra Nevada snow caps behind the Alhambra — visible from the city on clear days, just one hour by road.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Granada is one of Spain&apos;s most affordable cities for visitors, mainly because the free tapas culture dramatically reduces food costs. The main paid expense is the Alhambra ticket (€14) — everything else is optional.
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
                    ["🏨 Accommodation (per night)", "€16–22 (hostel dorm)", "€80–120 (boutique)", "€280–400 (Parador)"],
                    ["🍽️ Food & drinks (daily)", "€8–15 (free tapas + bocadillos)", "€35–50 (restaurants)", "€100–150 (fine dining)"],
                    ["🚌 Transport (daily)", "€3–5 (city bus + walking)", "€10–20 (bus + taxi)", "€50–100 (private car)"],
                    ["🏛️ Alhambra ticket", "€14 (standard)", "€14 + €7 audio guide", "€180 (private guide)"],
                    ["💃 Flamenco show", "Free (street) or €25 (cave)", "€25–35 (cave show)", "€200+ (private zambra)"],
                    ["TOTAL (per day)", "~€45/day", "~€100/day", "~€250/day"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (~€45/day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Hostel dorm (€16–22/night), eat via free tapas culture (budget €8–10/day in drinks, eat for free), walk everywhere. Alhambra ticket is the main cost at €14. Totally comfortable — Granada is a great budget destination.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="font-medium text-sm text-amber-800 mb-1">🏨 Mid-Range (~€100/day)</p>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Boutique hotel in the Albaicín (€80–120/night), mix of restaurants and tapas bars, one cave flamenco show (€25–35), audio guide for the Alhambra (€7). A very comfortable and rewarding way to experience Granada.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">💎 Luxury (~€250/day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Parador de Granada (€350+/night, inside the Alhambra complex) or Hotel Alhambra Palace (€280+), private Alhambra guide (€180), private flamenco show in Sacromonte (€200+). One of Spain&apos;s most spectacular luxury experiences.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in Granada</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The best neighbourhood for atmosphere is the Albaicín — but it is steep, with no easy car access. For convenience, stay near Plaza Nueva or the Cathedral. The Realejo (old Jewish quarter) is quieter and bohemian. Avoid noisy Gran Vía de Colón despite its central location.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Parador de Granada",
                  type: "5-star government parador · Inside the Alhambra complex",
                  price: "From €350/night",
                  badge: "Most coveted",
                  desc: "The only hotel actually inside the Alhambra grounds — a converted 15th-century Franciscan convent. Wake up to the Generalife Gardens outside your window, stroll to the Nasrid Palaces before the crowds arrive. Spain&apos;s most famous parador and one of its most unforgettable hotel experiences. Book 3–6 months ahead.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Hotel Alhambra Palace",
                  type: "5-star · Alhambra hill, 1910 Moorish building",
                  price: "From €280/night",
                  badge: "Most atmospheric",
                  desc: "Built in 1910 in neo-Moorish style at the foot of the Alhambra hill, with spectacular views over the vega and city. Ornate Moorish architecture, a terrace restaurant, and a roof terrace with unbeatable city views. A genuinely historic hotel — Lorca and other luminaries stayed here.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "Carmen de la Alcubilla del Caracol",
                  type: "Boutique hotel · Alhambra hill",
                  price: "From €130/night",
                  badge: "Best mid-range",
                  desc: "A beautifully restored carmen (traditional Granadino garden house) on the Alhambra hill, with a terrace garden, Alhambra views, and seven individually decorated rooms. Intimate, genuinely charming, and far better value than the five-star options. Excellent breakfast included.",
                  color: "border-parchment-2 bg-white",
                },
                {
                  name: "Funky Backpackers Granada",
                  type: "Hostel · Realejo neighbourhood, near Cathedral",
                  price: "From €18/night (dorm)",
                  badge: "Best budget",
                  desc: "The best-reviewed hostel in Granada — consistently praised for atmosphere, cleanliness, and staff knowledge of the city. Dorms and private rooms, 24-hour reception, free walking tours, and a social common area. Well placed for the Cathedral and tapas bars. Book at least 2 weeks ahead in peak season.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in Granada</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Granada&apos;s greatest food secret: every drink at a local bar comes with a free tapa, and the tapas escalate in size and quality with each successive round. Master this system and you can eat extremely well for almost nothing. The restaurants below are for when you want a proper sit-down meal.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Bar Los Diamantes",
                  t: "Tapas bar · Plaza Nueva & multiple locations",
                  d: "Granada&apos;s most famous tapas bar — legendary fried fish (pescaíto frito) served free with every drink. A €2.50 beer comes with a generous portion of battered prawns, squid, or anchovies. Queue at the bar, eat standing, order another round for another tapa. The Plaza Nueva branch is the most atmospheric. Cash only.",
                  b: "Iconic tapas",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "Bodegas Castañeda",
                  t: "Traditional bodega · Calle Almireceros (Albaicín edge)",
                  d: "Established 1870. Dark wood, hanging jamones, barrels of wine, a long zinc bar. Order vermut, tinto de verano, or a cold Alhambra beer and receive your free tapa — often jamón serrano, cheese, or patatas bravas. A truly authentic Granada bar that has not changed in decades.",
                  b: "Most authentic",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "Restaurante Carmela",
                  t: "Modern Andalusian restaurant · Calle Colcha",
                  d: "One of Granada&apos;s best-loved restaurants for proper sit-down dining — creative Andalusian cuisine using local Vega produce. Excellent rabo de toro (braised oxtail), salmorejo (chilled tomato cream soup), and fresh fish from the coast. Main courses €14–20. The set lunch menu (€14–16 including wine) is exceptional value. Reservations recommended for dinner.",
                  b: "Best restaurant",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "La Fábula",
                  t: "Fine dining · Hotel Villa Oniria, Realejo",
                  d: "Granada&apos;s most celebrated fine dining restaurant — Michelin-recommended, housed in a restored 19th-century mansion with a garden terrace. Chef José Torrente&apos;s tasting menu focuses on Andalusian ingredients reimagined with modern technique. Dinner for two with wine: €120–160. Book at least one week ahead. Open dinner only.",
                  b: "Fine dining",
                  c: "bg-teal-50 border-teal-200",
                },
                {
                  n: "Free Tapas Bar Crawl Route",
                  t: "Self-guided · Calle Elvira + surrounding streets",
                  d: "Start at Bodegas Castañeda (vermut, first tapa), move to Bar Poe on Calle Elvira (craft beer, large tapa), then Bar Los Diamantes (wine, fried fish). Three drinks, three tapas, roughly €8–10 total. You&apos;ll be comfortably full. This is the essential Granada travel hack — do it at least once every day.",
                  b: "Best value in Spain",
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
            destination="Granada Spain"
            hotels={[
              {
                name: "Parador de Granada",
                type: "5-star parador · Inside the Alhambra",
                price: "From €350/night",
                rating: "5",
                badge: "Most coveted",
                url: "https://www.booking.com/hotel/es/parador-de-granada.html?aid=2820480",
              },
              {
                name: "Hotel Alhambra Palace",
                type: "5-star · Historic 1910 Moorish building",
                price: "From €280/night",
                rating: "5",
                badge: "Most atmospheric",
                url: "https://www.booking.com/hotel/es/alhambra-palace.html?aid=2820480",
              },
              {
                name: "Carmen de la Alcubilla del Caracol",
                type: "Boutique · Alhambra hill, garden views",
                price: "From €130/night",
                rating: "4",
                badge: "Best mid-range",
                url: "https://www.booking.com/hotel/es/carmen-de-la-alcubilla-del-caracol.html?aid=2820480",
              },
              {
                name: "Funky Backpackers Granada",
                type: "Hostel · Realejo, near Cathedral",
                price: "From €18/night",
                rating: "4",
                badge: "Best budget",
                url: "https://www.booking.com/hotel/es/funky-backpackers-granada.html?aid=2820480",
              },
            ]}
            activities={[
              {
                name: "Alhambra Skip-the-Line Guided Tour",
                duration: "3 hrs",
                price: "From €35/person",
                badge: "Most booked",
                url: "https://www.getyourguide.com/s/?q=alhambra+granada+guided+tour&partner_id=PSZA5UI",
              },
              {
                name: "Sacromonte Cave Flamenco Show",
                duration: "1.5 hrs",
                price: "From €25/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=granada+sacromonte+flamenco&partner_id=PSZA5UI",
              },
              {
                name: "Granada Tapas & Food Tour",
                duration: "3 hrs",
                price: "From €45/person",
                url: "https://www.getyourguide.com/s/?q=granada+tapas+food+tour&partner_id=PSZA5UI",
              },
              {
                name: "Sierra Nevada Day Trip from Granada",
                duration: "Full day",
                price: "From €40/person",
                url: "https://www.getyourguide.com/s/?q=sierra+nevada+granada+day+trip&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES TO AVOID ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in Granada</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎟️",
                  title: "Not Booking the Alhambra 3 Months Ahead",
                  desc: "The Alhambra sells out, and it does so reliably — particularly for the Nasrid Palaces, where timed entry is mandatory. The 6,500 daily tickets release on a rolling 90-day window at www.alhambra-patronato.es and disappear within hours during peak season. Book the day your travel dates are confirmed. If you arrive without a ticket, check the official site at midnight (00:00 Granada time) for day-of releases — your only realistic last-minute option. Third-party resellers charge €10–30 above face value.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🌡️",
                  title: "Visiting in July or August",
                  desc: "Granada in midsummer is genuinely brutal — 38–42°C, the city sits in a bowl and traps heat, and the Alhambra queues are at their worst. Spring (March–May) and autumn (September–November) are categorically better experiences. Winter is cold but quiet and rewarding. If summer is unavoidable, book everything months ahead and plan to visit the Alhambra at first light.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "🍺",
                  title: "Ordering Food at Every Bar (Instead of Drinking)",
                  desc: "This is the opposite of the normal traveller mistake. In Granada, you should order drinks — not food — at local bars. Every alcoholic drink comes with a free tapa that escalates in size with each round. If you order food instead, you pay for it on top of your drink. The locals never order food at a tapas bar. Drink at three or four bars and you will be full for €10.",
                  color: "border-yellow-200 bg-yellow-50",
                },
                {
                  icon: "🕐",
                  title: "Missing the Mirador de San Nicolás Sunset",
                  desc: "Granada&apos;s most iconic viewpoint fills up before sunset — arrive 30–45 minutes early, especially on weekends. Check sunset times before you go: in winter it can be as early as 5:45pm. The walk up through the Albaicín takes 20–30 minutes from Plaza Nueva (steep lanes). A smarter move: take a taxi up for €5–6 and walk down through the lit evening streets.",
                  color: "border-blue-200 bg-blue-50",
                },
                {
                  icon: "💳",
                  title: "Relying on Cards at Every Venue",
                  desc: "Many smaller tapas bars, cave flamenco shows, and Albaicín restaurants are cash-only or strongly prefer cash. Carry €50–100 at all times. ATMs are plentiful on Gran Vía de Colón — use your bank&apos;s own network to avoid fees. The free tapas economy is almost entirely cash-based.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  icon: "🧭",
                  title: "Skipping Sacromonte as a Tourist Trap",
                  desc: "Yes, Sacromonte has tourist flamenco shows — but it is also a genuinely inhabited cave community with 600 years of history. The Museo Cuevas del Sacromonte (€5) is excellent. The cave flamenco shows in smaller, older venues — particularly Cueva de la Rocío and Venta El Gallo — are authentic, powerful, and nothing like the glossy tablao shows elsewhere. Visit in the late afternoon and stay for a show.",
                  color: "border-green-200 bg-green-50",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for Granada</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🍷",
                  title: "Master the Free Tapas Bar Crawl",
                  desc: "The definitive Granada travel hack: start at Bodegas Castañeda (vermut, first tapa), move to Bar Poe on Calle Elvira (craft beer, enormous tapa), then Bar Los Diamantes (fried fish with wine). Three bars, three drinks, three tapas, full stomach — total cost under €10. Repeat nightly.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🌙",
                  title: "Catch the Alhambra at Night",
                  desc: "Night visits to the Nasrid Palaces run on Tuesday, Thursday, and Saturday evenings. The illuminated stucco and reflected pools transform the experience — many travellers say the night visit is actually superior to the day. Tickets are €18 and sell out separately from day tickets. Book both together.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "⛷️",
                  title: "Ski in the Morning, Tapas in the Evening",
                  desc: "In winter (December–April), you can ski on Sierra Nevada slopes (1 hour from Granada by bus, ~€9 return) and be back in the city for evening tapas. Day ski passes cost ~€38. This geographic miracle — Europe&apos;s southernmost ski resort, 30km from the Mediterranean — is one of Granada&apos;s greatest pleasures.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "🎟️",
                  title: "Book Tours via GetYourGuide",
                  desc: "For Alhambra tours, Sacromonte flamenco shows, and food tours, GetYourGuide offers verified local guides with real reviews and free cancellation. Search for Granada tours at getyourguide.com/s/?q=Granada&partner_id=PSZA5UI — avoid the touts outside the Alhambra gate who may have inflated prices or tickets with poor time slots.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🚶",
                  title: "Walk Everything (or Almost Everything)",
                  desc: "Granada&apos;s historic centre, Albaicín, Cathedral, and Sacromonte are all walkable from each other. The Alhambra is a 20-minute uphill walk from Plaza Nueva (or take the Alhambra minibus, Line C3, for €1.40). You only need taxis for the airport or Mirador de San Nicolás ascent. Walking is how you discover Granada&apos;s best corners.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "📱",
                  title: "Book the Alhambra at Midnight",
                  desc: "If you&apos;ve arrived in Granada without an Alhambra ticket (it happens), check www.alhambra-patronato.es at exactly midnight — cancelled tickets and a small daily release go live at 00:00 Granada time. Set your alarm. Some travellers with flexible schedules check for multiple consecutive nights until a slot appears.",
                  color: "bg-orange-50 border-orange-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="Granada" />

          {/* Combine With */}
          <CombineWith currentSlug="granada-4-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "How far in advance do I need to book Alhambra tickets?",
                  a: "As soon as your travel dates are confirmed — ideally 60–90 days ahead for April through October. Tickets release on a rolling 90-day window at www.alhambra-patronato.es and sell out within hours for popular dates. For November through March, 2–3 weeks is usually enough, but there&apos;s no downside to booking early. If you arrive without a ticket, check the official site at exactly midnight (00:00 Granada time) for any cancelled or released tickets. The Nasrid Palaces timed entry is strictly enforced — being late means no entry.",
                },
                {
                  q: "Is Granada expensive compared to other Spanish cities?",
                  a: "Granada is one of Spain&apos;s most affordable cities specifically because of the free tapas tradition. Every alcoholic drink ordered at a local bar comes with a free tapa — an escalating series of small plates that mean a budget traveller can eat extremely well for €8–12 per day in food. Accommodation runs 20–30% cheaper than Seville or Madrid. The Alhambra at €14 is the main paid attraction — almost everything else (Albaicín, Carrera del Darro, Mirador de San Nicolás, street flamenco) is free.",
                },
                {
                  q: "Do I need a car to see Granada?",
                  a: "No — Granada&apos;s historic centre, Albaicín, Cathedral, Sacromonte, and the Alhambra are all walkable or accessible by city bus. The Alhambra minibus (Line C3, €1.40) runs from Plaza Isabel la Católica. You only need a car for day trips to the Sierra Nevada, the Alpujarras villages, or the coast. Parking in the old city is extremely difficult — if you hire a car, use the car park on Calle San Agustín and walk from there.",
                },
                {
                  q: "What is the best neighbourhood to stay in Granada?",
                  a: "For atmosphere: the Albaicín — genuine Moorish quarter with narrow lanes and carmen gardens, but steep and poorly served by taxis. For convenience: near Plaza Nueva or the Cathedral (flat, central, close to everything). For value and character: El Realejo (old Jewish quarter, bohemian and quiet). For pure luxury: on the Alhambra hill itself — either the Parador de Granada (inside the Alhambra complex) or the Hotel Alhambra Palace. Avoid Gran Vía de Colón despite its central location — noisy and characterless.",
                },
                {
                  q: "Is the free tapas tradition real, and which bars have the best?",
                  a: "It is completely real — and unlike Seville where a free tapa means a few olives, Granada&apos;s tapas escalate: your first drink gets a small plate, your second gets a bigger one, your third gets something approaching a half-portion. The best free tapas bars: Bar Los Diamantes (Plaza Nueva — legendary fried fish), Bodegas Castañeda (Calle Almireceros — established 1870, jamón and cheese), Bar Poe (Calle Elvira — craft beer, enormous tapas). Start at one, move to the next, and you&apos;ll eat extremely well for under €10 in drinks.",
                },
                {
                  q: "Is the Sacromonte flamenco authentic or just for tourists?",
                  a: "Both exist and you need to know the difference. The larger, more commercial shows in big caves are glossy productions for tour groups — fine, but not authentic. The smaller venues like Cueva de la Rocío and Venta El Gallo (30–50 people, intimate cave setting, €25–35 per person) offer the real zambra flamenco style that originated in Granada&apos;s Roma community. These are genuine artists performing in their cultural context, not a staged show. Visit the Museo Cuevas del Sacromonte (€5) first — it dramatically deepens what you see in the evening.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Granada trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/alhambra-tickets-guide", label: "Alhambra tickets guide", icon: "🎟️" },
                { href: "/blog/granada-free-tapas", label: "Free tapas guide", icon: "🍷" },
                { href: "/blog/sacromonte-flamenco-guide", label: "Sacromonte flamenco", icon: "💃" },
                { href: "/blog/sierra-nevada-day-trip", label: "Sierra Nevada day trip", icon: "⛷️" },
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
          <RelatedGuides currentSlug="granada-4-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Spain &amp; Andalusia Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Seville in 4 Days — Flamenco &amp; Tapas Capital", href: "/blog/seville-4-days" },
                { label: "Madrid 4 Days — Museums, Markets &amp; Nightlife", href: "/blog/madrid-4-days" },
                { label: "Barcelona 4 Days — Gaudí &amp; the Gothic Quarter", href: "/blog/barcelona-4-days" },
                { label: "Lisbon 4 Days — Fado, Trams &amp; Pastéis de Nata", href: "/blog/lisbon-4-days" },
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
