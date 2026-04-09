"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import DestinationGallery from "@/components/blog/DestinationGallery";
import RelatedGuides from "@/components/blog/RelatedGuides";
import Breadcrumb from "@/components/blog/Breadcrumb";

const YAMUNOTRI_TOC = [
  { id: "intro",        emoji: "🛕", label: "Why Yamunotri?" },
  { id: "how-to-reach", emoji: "🚗", label: "How to Reach" },
  { id: "the-trek",     emoji: "🥾", label: "The Trek" },
  { id: "at-temple",    emoji: "🔥", label: "At the Temple" },
  { id: "where-to-stay",emoji: "🏨", label: "Where to Stay" },
  { id: "best-time",    emoji: "🌤️", label: "Best Time" },
  { id: "registration", emoji: "📋", label: "Registration" },
  { id: "what-to-carry",emoji: "🎒", label: "What to Carry" },
  { id: "budget",       emoji: "💰", label: "Budget" },
  { id: "tips",         emoji: "💡", label: "Tips" },
  { id: "faq",          emoji: "❓", label: "FAQ" },
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
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${progress}%` }} />
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
          href: `mailto:?subject=Yamunotri Temple Guide 2026&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Yamunotri Temple Guide 2026&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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
        {copied ? "Copied" : "Copy Link"}
      </button>
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

// ── Info Row ──────────────────────────────────────────────────────────────────
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="font-medium text-ink w-44 flex-shrink-0">{label}</span>
      <span className="text-muted font-light">{value}</span>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
interface FaqEntity {
  "@type": string;
  name: string;
  acceptedAnswer: { "@type": string; text: string };
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span
          className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
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
interface Props {
  faqData: FaqEntity[];
}

export default function YamunotriClient({ faqData }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={YAMUNOTRI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Yamunotri" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="himalaya mountains snow uttarakhand india peaks"
            alt="Snow-capped Himalayan peaks near Yamunotri temple Uttarakhand"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Yamunotri Temple Guide</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Pilgrimage &amp; Spiritual
                </span>
                <span className="text-white/60 text-xs">April 6, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Yamunotri Temple Guide 2026
                <em className="italic text-gold-light"> — Trek, Rituals &amp; Practical Tips</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                First of the four Char Dhams. A 6km trek through dense forest. Hot springs that cook your prasad.
                The Divya Shila ritual nobody mentions. Everything you need before you go.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + meta row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Uttarakhand</span>
              <span>·</span>
              <span>⛰️ 3,293m</span>
              <span>·</span>
              <span>🥾 6km Trek</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            <StatCard icon="⛰️" label="Altitude" value="3,293m" />
            <StatCard icon="🥾" label="Trek Length" value="6km" />
            <StatCard icon="📅" label="Season" value="May – Nov" />
            <StatCard icon="💰" label="Budget From" value="₹3,000/day" />
          </div>

          {/* Intro blockquote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Yamunotri is always the first. Not just logistically — it sets the tone. The forest trail, the
              roar of the Yamuna below, the sudden appearance of steam rising from hot springs before you
              even see the temple. If Char Dham is a journey, Yamunotri is the opening chapter.
            </p>
          </blockquote>

          {/* ── INTRO ── */}
          <section id="intro" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🛕 Why Yamunotri Matters</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Yamunotri Dham sits at 3,293m in the Garhwal Himalayas of Uttarakhand and is dedicated to
              Goddess Yamuna — the sacred river whose waters flow through Delhi, Agra, and eventually
              merge with the Ganga at Prayagraj. Yamunotri is considered the source of the Yamuna, though
              the actual glacial origin (Champasar Glacier) lies a further 8km trek beyond the temple —
              the temple itself marks the spiritual source.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              In Hindu tradition, the Yamuna is Yama&apos;s twin sister — the river of life to his domain of
              death. Bathing in her waters at the source is believed to grant freedom from untimely death
              and liberation from the cycle of rebirth. This isn&apos;t mythology most pilgrims quote — it&apos;s
              lived belief that brings hundreds of thousands here every season.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Practically: Yamunotri is also the <em>easiest</em> of the four dhams. At 6km one way from
              Janki Chatti, it&apos;s a half-day commitment compared to Kedarnath&apos;s 16km slog. If you&apos;re doing
              all four dhams, do Yamunotri first — it&apos;s a gentle warm-up that builds confidence before the
              harder treks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                {
                  icon: "🛕",
                  title: "Goddess Yamuna",
                  desc: "Temple dedicated to Goddess Yamuna, twin sister of Yama. Main idol is black stone (shilas from the river).",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🔥",
                  title: "Surya Kund",
                  desc: "Hot spring at 88°C near the temple. Used to cook prasad (rice, potatoes) in cloth bags before offering.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🪨",
                  title: "Divya Shila",
                  desc: "Sacred rock pillar just before the temple gate. Mandatory to worship here first before entering the main shrine.",
                  color: "bg-stone-50 border-stone-200",
                },
              ].map((c) => (
                <div key={c.title} className={`rounded-xl border p-5 ${c.color}`}>
                  <div className="text-2xl mb-2">{c.icon}</div>
                  <p className="font-medium text-sm text-stone-900 mb-1">{c.title}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── HOW TO REACH ── */}
          <section id="how-to-reach" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🚗 How to Reach Yamunotri</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              The nearest base camp is <strong className="text-ink">Janki Chatti</strong> (2,650m), 221km
              from Rishikesh. All treks begin here. Barkot (47km from Janki Chatti) is a popular overnight
              stop for those doing Char Dham.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  from: "Delhi → Rishikesh",
                  how: "Volvo AC bus (₹400–600) or train to Haridwar + taxi to Rishikesh. ~7 hours total.",
                },
                {
                  from: "Rishikesh → Barkot",
                  how: "Shared jeep or bus via Dehradun–Purola route. ~6–7 hours. Cost: ₹300–400 shared.",
                },
                {
                  from: "Barkot → Janki Chatti",
                  how: "47km. Shared jeep ₹100–150 per person, 1.5 hours. Or private cab ₹800–1,200.",
                },
                {
                  from: "Rishikesh direct → Janki Chatti",
                  how: "Shared jeep ₹400–600 per person, 6–7 hours. Private cab ₹3,500–5,000.",
                },
                {
                  from: "Helicopter (Kharsali → Yamunotri)",
                  how: "Operated by private operators during season. ₹3,000–4,000 one way. Kharsali is 1km from Janki Chatti. Book in advance.",
                },
                {
                  from: "Nearest railway station",
                  how: "Dehradun (180km) or Rishikesh (221km). Both well-connected to Delhi.",
                },
                {
                  from: "Nearest airport",
                  how: "Jolly Grant Airport, Dehradun (~195km). Taxis from airport directly to Janki Chatti cost ₹5,000–7,000.",
                },
              ].map((r) => (
                <div key={r.from} className="bg-parchment rounded-xl p-4 border border-parchment-2">
                  <p className="text-sm font-medium text-ink mb-1">{r.from}</p>
                  <p className="text-xs text-muted font-light">{r.how}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm font-medium text-amber-800 mb-2">⚠️ Road Conditions</p>
              <p className="text-xs text-amber-700 font-light leading-relaxed">
                The road from Barkot to Janki Chatti is narrow, winding, and prone to landslides during
                monsoon. Drive carefully — or better, travel in daylight hours only. The road is generally
                good in May–June and September–October.
              </p>
            </div>
          </section>

          {/* ── THE TREK ── */}
          <section id="the-trek" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🥾 The Trek: Janki Chatti to Yamunotri</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              The trek is 6km one way from Janki Chatti (2,650m) to Yamunotri temple (3,293m) — an ascent
              of 643m. Most people complete it in 2–3 hours up, 1.5–2 hours down. It&apos;s graded
              <strong className="text-ink"> moderate</strong> — not technical, but sustained uphill on stone-paved
              path with some steep sections.
            </p>

            <div className="space-y-3 mb-8">
              {[
                {
                  km: "0–2km",
                  label: "Janki Chatti to Phool Chatti",
                  desc: "Stone-paved path alongside the Yamuna river. Relatively gentle gradient. Tea stalls every 500m. This is the easiest section — resist the urge to race.",
                },
                {
                  km: "2–4km",
                  label: "Phool Chatti to Markandeya Tirth",
                  desc: "Gradient steepens. Dense oak and rhododendron forest. Stream crossings. Beautiful but demanding. The trail narrows here.",
                },
                {
                  km: "4–6km",
                  label: "Markandeya Tirth to Yamunotri Temple",
                  desc: "Final push. Stone steps increase. Steam from hot springs becomes visible before the temple. The arrival is dramatic — the temple appears suddenly in a narrow valley.",
                },
              ].map((s) => (
                <div key={s.km} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[0.65rem] bg-gold/20 text-gold-dark font-medium px-2 py-0.5 rounded-full">
                      {s.km}
                    </span>
                    <span className="font-medium text-sm text-stone-900">{s.label}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Pony / Doli comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-medium text-sm text-green-800 mb-3">🥾 On Foot (recommended)</h3>
                <ul className="space-y-2 text-xs text-green-700 font-light">
                  <li>✓ The trek is genuinely beautiful</li>
                  <li>✓ No waiting for pony operators</li>
                  <li>✓ You control your own pace</li>
                  <li>✗ 2–3 hours of sustained walking</li>
                  <li>✗ Steep in final 2km</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-medium text-sm text-blue-800 mb-3">🐴 Pony</h3>
                <ul className="space-y-2 text-xs text-blue-700 font-light">
                  <li>✓ ₹700–900 one way</li>
                  <li>✓ Good for elderly or children</li>
                  <li>✓ Widely available at Janki Chatti</li>
                  <li>✗ Slower in crowded sections</li>
                  <li>✗ Return pony additional cost</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h3 className="font-medium text-sm text-purple-800 mb-3">🪑 Doli (Palanquin)</h3>
                <ul className="space-y-2 text-xs text-purple-700 font-light">
                  <li>✓ ₹2,500–3,500 one way</li>
                  <li>✓ Best for those unable to walk</li>
                  <li>✓ Carried by 4 porters</li>
                  <li>✗ Expensive round trip</li>
                  <li>✗ Pre-book at Janki Chatti stalls</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── AT THE TEMPLE ── */}
          <section id="at-temple" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🔥 At the Temple</h2>

            <div className="space-y-6">

              {/* Divya Shila */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-5">
                <h3 className="font-medium text-base text-ink mb-2">🪨 The Divya Shila — Don&apos;t Skip This</h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  A few metres before the main temple entrance stands the <strong className="text-ink">Divya Shila</strong> —
                  a natural rock pillar considered the divine form of the goddess. Every pilgrim must stop
                  here to offer flowers, incense, and prayer <em>before</em> entering the main shrine.
                  Skipping this is considered incomplete worship. The priests at the gate will remind you,
                  but most visitors coming from outside the tradition don&apos;t know to look for it. Look left
                  as you approach the temple entrance.
                </p>
              </div>

              {/* Surya Kund */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-medium text-base text-ink mb-2">🌡️ Surya Kund Hot Spring (88°C)</h3>
                <p className="text-sm text-muted font-light leading-relaxed mb-3">
                  The Surya Kund is a natural hot spring adjacent to the temple complex. Water temperature
                  reaches <strong className="text-ink">88°C</strong> — hot enough to cook rice. This is where
                  Yamunotri&apos;s most distinctive ritual happens:
                </p>
                <ul className="space-y-2 text-xs text-red-800 font-light">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">●</span>
                    Buy cloth bags from nearby stalls (₹20–30 per bag)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">●</span>
                    Fill bags with uncooked rice or small potatoes
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">●</span>
                    Submerge in the Surya Kund for 10–15 minutes (rice cooks fully)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">●</span>
                    Take the cooked food to the temple priest for prasad blessing
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">●</span>
                    Carry the prasad home — it is considered sacred and auspicious
                  </li>
                </ul>
                <p className="text-xs text-red-700 font-medium mt-3">
                  ⚠️ Do not touch the water directly — 88°C will burn immediately. The cloth bags are
                  lowered with strings. Never let children near the edge.
                </p>
              </div>

              {/* Darshan */}
              <div className="bg-white border border-parchment-2 rounded-xl p-5">
                <h3 className="font-medium text-base text-ink mb-3">🛕 Darshan at the Main Temple</h3>
                <div className="space-y-3">
                  <InfoRow label="Main deity" value="Goddess Yamuna (black stone idol)" />
                  <InfoRow label="Temple style" value="Stone temple with colorful facade; modest size" />
                  <InfoRow label="Darshan timings" value="6am–12pm, 2pm–8pm (confirm on arrival)" />
                  <InfoRow label="Aarti timings" value="Early morning (~6am) and evening (~7pm)" />
                  <InfoRow label="Entry fee" value="Free. Priest puja: ₹51–501 (optional)" />
                  <InfoRow label="Dress code" value="Traditional clothing preferred. Remove footwear at entrance." />
                  <InfoRow label="Photography" value="Generally permitted outside shrine. Not inside the sanctum." />
                </div>
              </div>

              {/* Janki Bai Kund */}
              <div className="bg-parchment border border-parchment-2 rounded-xl p-5">
                <h3 className="font-medium text-base text-ink mb-2">💧 Janki Bai Kund — Ritual Bath</h3>
                <p className="text-sm text-muted font-light leading-relaxed">
                  Next to the Surya Kund is the cooler <strong className="text-ink">Janki Bai Kund</strong> —
                  a natural pool fed by the hot spring waters mixed with a cold stream. Temperature is around
                  35–40°C — warm enough for a comfortable ritual bath (snan) which is part of the pilgrimage.
                  Changing rooms are available nearby. Bathing here before darshan is considered auspicious.
                </p>
              </div>

            </div>
          </section>

          {/* ── WHERE TO STAY ── */}
          <section id="where-to-stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🏨 Where to Stay</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              There is very limited accommodation at Yamunotri itself (a few GMVN tents in season).
              Most pilgrims stay at <strong className="text-ink">Janki Chatti</strong> (trek base) or
              <strong className="text-ink"> Barkot</strong> (47km, larger town). Barkot has the best
              options for a comfortable night.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  location: "Janki Chatti",
                  type: "Guesthouses & Dharamshalas",
                  price: "₹400–1,500/night",
                  pros: "Walking distance from trek start. Maximum convenience.",
                  cons: "Limited options. Basic facilities. Noisy in peak season.",
                  recommended: true,
                },
                {
                  location: "Barkot",
                  type: "Hotels & GMVN Guesthouses",
                  price: "₹800–3,500/night",
                  pros: "Much better selection. GMVN Tourist Rest House (good value). ATM available.",
                  cons: "47km from trek start. Need early departure to reach Janki Chatti.",
                  recommended: false,
                },
                {
                  location: "Yamunotri Temple Area",
                  type: "GMVN Tents (seasonal)",
                  price: "₹600–1,200/night",
                  pros: "Wake up at the temple. Unique experience.",
                  cons: "Very limited. Cold nights. Must book far in advance through GMVN.",
                  recommended: false,
                },
                {
                  location: "Uttarkashi",
                  type: "Hotels & Guesthouses",
                  price: "₹600–3,000/night",
                  pros: "Good range of hotels. Midpoint between Gangotri and Yamunotri routes.",
                  cons: "3–4 hours from Janki Chatti. Best for multi-day Char Dham itineraries.",
                  recommended: false,
                },
              ].map((s) => (
                <div
                  key={s.location}
                  className={`bg-white rounded-xl border p-5 ${s.recommended ? "border-gold" : "border-parchment-2"}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-medium text-sm text-stone-900">{s.location}</p>
                    {s.recommended && (
                      <span className="text-[0.6rem] bg-gold/20 text-gold-dark font-medium px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-[0.68rem] text-muted mb-1">{s.type}</p>
                  <p className="text-xs font-medium text-ink mb-2">{s.price}</p>
                  <p className="text-xs text-green-700 font-light mb-1">✓ {s.pros}</p>
                  <p className="text-xs text-muted font-light">✗ {s.cons}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── BEST TIME ── */}
          <section id="best-time" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🌤️ Best Time to Visit Yamunotri</h2>

            <div className="space-y-3 mb-6">
              {[
                {
                  period: "May – June",
                  rating: "Excellent",
                  color: "bg-green-50 border-green-200 text-green-800",
                  desc: "Post-opening crowds but excellent weather. Rhododendrons in bloom. Trek trail clear. Book accommodation 2–3 weeks in advance.",
                },
                {
                  period: "September – October",
                  rating: "Best",
                  color: "bg-emerald-50 border-emerald-200 text-emerald-800",
                  desc: "Post-monsoon clarity. Skies the bluest. Fewest crowds. Cool but comfortable temperatures. The single best time to visit.",
                },
                {
                  period: "July – August",
                  rating: "Avoid",
                  color: "bg-red-50 border-red-200 text-red-800",
                  desc: "Heavy monsoon rainfall. Landslide risk on the Barkot-Janki Chatti road is significant. Trek trail becomes slippery and dangerous.",
                },
                {
                  period: "November – April",
                  rating: "Closed",
                  color: "bg-stone-50 border-stone-200 text-stone-600",
                  desc: "Temple closes on Diwali (October/November). Idol moved to Kharsali village for winter. Heavy snow buries the trail. Temple reopens on Akshaya Tritiya.",
                },
              ].map((t) => (
                <div key={t.period} className={`rounded-xl border p-4 ${t.color}`}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{t.period}</span>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wide">{t.rating}</span>
                  </div>
                  <p className="text-xs font-light leading-relaxed opacity-80">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── REGISTRATION ── */}
          <section id="registration" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">📋 Registration — Do This Before You Leave Home</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              Char Dham Devasthanam Board registration is <strong className="text-ink">mandatory</strong> for
              all four dhams including Yamunotri. Without it, you will be turned back at checkpoints.
              Register at <strong className="text-ink">registrationandtouristcare.uk.gov.in</strong> —
              it&apos;s free and takes under 5 minutes.
            </p>

            <div className="bg-white border border-parchment-2 rounded-xl p-5 space-y-3">
              {[
                ["Website", "registrationandtouristcare.uk.gov.in"],
                ["Cost", "Free"],
                ["Documents", "Aadhaar (Indian citizens) or Passport (foreign nationals) + photo"],
                ["Medical certificate", "Mandatory if above 50 years of age"],
                ["Slot cap", "Daily entry numbers are limited — register early for May–June peak"],
                ["What to carry", "Print the PDF or save offline on your phone. No signal on trail."],
                ["Foreign nationals", "Yamunotri is open to all nationalities. No special permit needed."],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 text-sm">
                  <span className="font-medium text-ink w-44 flex-shrink-0">{k}</span>
                  <span className="text-muted font-light">{v}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHAT TO CARRY ── */}
          <section id="what-to-carry" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🎒 What to Carry for the Trek</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-sm text-ink mb-3 uppercase tracking-wide">Essentials</h3>
                <ul className="space-y-2">
                  {[
                    "Trek shoes with ankle support (not sandals)",
                    "Rain jacket / poncho — weather changes fast",
                    "Warm layer (fleece or down) — it gets cold at 3,293m",
                    "Trekking pole (helps on descent — buy at Janki Chatti for ₹200)",
                    "Water bottle — minimum 1.5L",
                    "Dry snacks (energy bars, nuts, biscuits)",
                    "Sunscreen SPF 50+ — UV is intense above 2,500m",
                    "Sunglasses",
                    "Personal medications + basic first aid",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted font-light">
                      <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-sm text-ink mb-3 uppercase tracking-wide">For the Temple</h3>
                <ul className="space-y-2">
                  {[
                    "Flowers and incense (available at Janki Chatti — ₹30–50)",
                    "Cloth bags for cooking prasad (buy at temple area)",
                    "Small vessel for river water collection",
                    "Traditional clothing if possible (not mandatory)",
                    "Camera (no tripods in temple premises)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted font-light">
                      <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="font-medium text-sm text-ink mb-3 mt-5 uppercase tracking-wide">Leave Behind</h3>
                <ul className="space-y-2">
                  {[
                    "Heavy luggage — leave at your hotel/guesthouse",
                    "Leather items (belt, shoes) — some temples prohibit",
                    "Non-vegetarian food — not allowed near temple",
                    "Alcohol — prohibited in the entire Char Dham region",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted font-light">
                      <span className="text-red-400 mt-1 flex-shrink-0 text-xs">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── BUDGET ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">💰 Budget Breakdown (2026)</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              Yamunotri is one of the more affordable dhams. Budget travellers can do the round trip from
              Rishikesh comfortably in <strong className="text-ink">₹3,000–4,500</strong> over 3 days
              (1 travel, 1 trek, 1 return). Mid-range is ₹6,000–9,000.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3 font-medium text-ink text-xs">Item</th>
                    <th className="text-left p-3 font-medium text-ink text-xs">Budget</th>
                    <th className="text-left p-3 font-medium text-ink text-xs">Mid-range</th>
                  </tr>
                </thead>
                <tbody className="text-xs text-muted font-light">
                  {[
                    ["Rishikesh → Janki Chatti (shared jeep)", "₹400–600", "₹3,500–5,000 (private)"],
                    ["Accommodation Janki Chatti (1–2 nights)", "₹400–700/night", "₹1,200–2,500/night"],
                    ["Trek on foot", "₹0", "₹700–900 (pony)"],
                    ["Food (2 days, dhabas on trail)", "₹300–500/day", "₹600–900/day"],
                    ["Prasad cloth bags + offerings", "₹50–100", "₹50–100"],
                    ["Trekking pole (if needed)", "₹100–200 (rent)", "₹200 (buy)"],
                    ["Return Janki Chatti → Rishikesh", "₹400–600", "₹3,500–5,000 (private)"],
                    ["Total 3-day trip (per person)", "~₹2,500–3,500", "~₹7,000–12,000"],
                  ].map(([item, budget, mid]) => (
                    <tr key={item} className="border-b border-parchment-2">
                      <td className="p-3 font-medium text-ink">{item}</td>
                      <td className="p-3">{budget}</td>
                      <td className="p-3">{mid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">💡 Tips & Things to Know</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "⏰",
                  title: "Start the trek by 7am",
                  desc: "Afternoon clouds and occasional rain arrive regularly after 1pm. Aim to reach the temple by 11am and be heading back by noon.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "📵",
                  title: "No mobile signal on the trek",
                  desc: "BSNL/MTNL works intermittently. Inform your family of your plan before you start. Download offline maps. Satellite phones are available for hire in Janki Chatti.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "🍽️",
                  title: "Eat light before trekking",
                  desc: "Heavy meals cause nausea on the ascent. Have a light breakfast (poha, bread, tea) at Janki Chatti and carry dry snacks. Dhabas on the trail serve tea and basic food.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "🏔️",
                  title: "Acclimatise first",
                  desc: "If you're coming directly from sea level, spend one night in Rishikesh (900m) and another in Barkot (1,200m) before trekking. Rushing altitude causes headaches and nausea.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "💧",
                  title: "Water is available",
                  desc: "Multiple free water points and GMVN stalls on the trail. Don't overload yourself with water weight. 1.5L is enough.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "🧥",
                  title: "Temperature at the temple",
                  desc: "Even in May–June, the temple area at 3,293m feels cold — especially when wind picks up. A fleece or down jacket is not optional.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "🪨",
                  title: "Worship Divya Shila first",
                  desc: "The sacred rock pillar before the temple entrance must be worshipped before entering the sanctum. Ask the priests if you're unsure — they're helpful and welcoming.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💸",
                  title: "Carry cash",
                  desc: "No ATMs in Janki Chatti or on the trail. Nearest ATM is in Barkot (47km). Carry sufficient cash before leaving Barkot or Uttarkashi.",
                  color: "bg-red-50 border-red-200",
                },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl border p-5 ${t.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{t.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900 mb-1">{t.title}</p>
                      <p className="text-xs text-gray-700 font-light leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-5">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqData.map((item) => (
                <FaqItem key={item.name} q={item.name} a={item.acceptedAnswer.text} />
              ))}
            </div>
          </section>

          <AffiliateBlock destination="Yamunotri Uttarakhand" />

          {/* Related links */}
          <div className="mt-10 pt-8 border-t border-parchment-2 flex flex-wrap gap-3">
            <Link href="/blog/char-dham-yatra-guide" className="btn-gold text-sm">
              Full Char Dham Guide →
            </Link>
            <Link
              href="/blog/kedarnath-trek-guide"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all"
            >
              Kedarnath Trek Guide →
            </Link>
            <Link
              href="/blog/gangotri-glacier-trek"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all"
            >
              Gangotri Glacier Trek →
            </Link>
            <Link
              href="/blog/badrinath-temple-guide"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all"
            >
              Badrinath Temple Guide →
            </Link>
            <Link
              href="/blog/rishikesh-haridwar-3-days"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all"
            >
              Rishikesh Base Guide →
            </Link>
          </div>
        </div>

          <DestinationGallery
            title="Yamunotri — Highlights"
            subtitle="The best of Yamunotri in photos."
            spots={[
              { name: "Yamunotri Landscape", query: "yamunotri india landscape scenic beautiful travel", desc: "The stunning landscapes of Yamunotri." },
              { name: "Yamunotri Heritage", query: "yamunotri temple architecture heritage india", desc: "Historic heritage and architecture in Yamunotri." },
              { name: "Yamunotri Culture", query: "yamunotri street market local culture india", desc: "Local life and culture in Yamunotri." },
              { name: "Yamunotri Nature", query: "yamunotri nature hills forest river india", desc: "Natural beauty around Yamunotri." },
              { name: "Yamunotri Sunset", query: "yamunotri sunset golden hour india travel", desc: "Yamunotri at golden hour." },
            ]}
          />

         
      </main>

      <Footer />
      {modalOpen && <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
}
