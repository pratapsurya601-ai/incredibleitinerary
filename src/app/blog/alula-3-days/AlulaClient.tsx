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
const ALULA_TOC = [
  { id: "honest",     emoji: "⚡",  label: "What AlUla Actually Is" },
  { id: "season",     emoji: "🌡️", label: "Best Time to Visit" },
  { id: "howtoreach", emoji: "✈️",  label: "Getting There" },
  { id: "itinerary",  emoji: "📅",  label: "3-Day Itinerary" },
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
          href: `mailto:?subject=AlUla 3-Day Guide&body=Check this out: ${pageUrl}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1a6fb5] text-white",
          href: `https://x.com/intent/tweet?text=AlUla in 3 Days — Hegra tombs, Elephant Rock and Saudi Arabia&apos;s hidden wonder&url=${pageUrl}`,
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
        pageUrl="https://www.incredibleitinerary.com/blog/alula-3-days"
        imageUrl="https://images.unsplash.com/photo-1586349277776-a8e05ac4e461?w=1200&q=80"
        description="AlUla in 3 Days: Hegra Nabataean tombs, Elephant Rock, Old Town AlUla and Maraya Concert Hall — complete Saudi Arabia travel guide with budget breakdown."
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
export default function AlulaClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={ALULA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="AlUla" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="alula hegra nabataean tombs saudi arabia desert rock formations"
            fallback="https://images.unsplash.com/photo-1586349277776-a8e05ac4e461?w=1600&q=80"
            alt="AlUla Hegra Nabataean rock-cut tombs in desert Saudi Arabia ancient ruins"
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
              <span className="text-white/70">AlUla 3 Days</span>
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
                AlUla in 3 Days:
                <em className="italic text-amber-300"> Hegra, Elephant Rock &amp; Saudi Arabia&apos;s Ancient Wonder</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                111 Nabataean rock-cut tombs, a Dalí-esque desert, the world&apos;s largest mirrored building and a night sky so dense with stars it looks rendered. The complete AlUla guide.
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
              <span>🏜️ AlUla, Saudi Arabia</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From SAR 450 ($120)/day</span>
            </div>
          </div>

          {/* Opening blockquote */}
          <blockquote className="border-l-4 border-amber-500 pl-6 mb-10 bg-amber-50/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              AlUla is what happens when one of the world&apos;s greatest ancient civilisations carves its city directly into rose-red sandstone cliffs — and then the modern world forgets about it for two thousand years. Saudi Arabia only opened for tourism in 2019. AlUla is still catching up to its own importance.
            </p>
          </blockquote>

          {/* ── WHAT ALULA ACTUALLY IS ── */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What AlUla Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Nabataean civilisation built Petra in Jordan first. Then they built Hegra — and it may be the more extraordinary site. At AlUla (ancient Dedan, then Hegra), the Nabataeans carved 111 elaborate royal tombs directly into freestanding sandstone mountains between the 1st century BC and the 1st century AD. The detail is staggering: Corinthian capitals, carved eagles, inscriptions in four ancient scripts, and facades up to 22 metres tall that face the rising sun and turn molten gold in the morning light.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Hegra became Saudi Arabia&apos;s first UNESCO World Heritage Site in 2008 — and then almost nobody came, because Saudi Arabia didn&apos;t issue tourist visas. When the Kingdom opened in 2019, AlUla was suddenly accessible. The infrastructure has been built at speed: a renovated airport (ULH), the Maraya Concert Hall (the world&apos;s largest mirrored building by the Guinness Book of Records), luxury resorts, and the Winter at Tantora festival which brings world-class musicians to perform in the Hegra amphitheatre.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">
              The result is a destination at the ideal moment: accessible, well-organised, with serious archaeological depth — and still quiet enough that you can stand alone at the Qasr al-Farid, the &apos;Lonely Castle&apos; tomb rising from the desert floor, without another tourist in the frame. That window won&apos;t last forever.
            </p>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <StatCard icon="✈️" label="Airport" value="ULH" />
              <StatCard icon="🌡️" label="Best Season" value="Oct–Apr" />
              <StatCard icon="🏛️" label="Tombs at Hegra" value="111" />
              <StatCard icon="💰" label="Budget From" value="SAR 450 ($120)/day" />
            </div>
          </section>

          {/* ── BEST TIME TO VISIT ── */}
          <section id="season" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌡️ Best Time to Visit AlUla</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  s: "Oct–Mar",
                  i: "☀️",
                  t: "Cool Season — Ideal Window",
                  d: "15–25°C days, cold nights (can drop to 5°C in January). This is the only real tourist season in AlUla. November–March overlaps with the Winter at Tantora festival — classical concerts at Hegra, jazz in the Old Town, traditional food markets and art installations. The absolute best time to visit.",
                  b: "Recommended",
                  c: "bg-green-50 border-green-200",
                },
                {
                  s: "Apr–May",
                  i: "🌅",
                  t: "Spring Shoulder — Transition Period",
                  d: "Temperatures rise through the 30s°C in April. Mornings and evenings are still comfortable. April is the last viable month before summer shuts things down. If you must visit outside Oct–Mar, April is the only realistic option. The festival season will have ended.",
                  b: "Early mornings only",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  s: "Jun–Aug",
                  i: "🔥",
                  t: "Summer — Brutal Heat, Avoid",
                  d: "42–47°C. AlUla&apos;s sandstone amplifies radiant heat significantly above air temperature. Most tourism infrastructure closes entirely for summer. The Royal Commission for AlUla does not operate Hegra shuttle tours in summer. There is no reason to visit in these months.",
                  b: "Do not visit",
                  c: "bg-red-50 border-red-200",
                },
                {
                  s: "Sep",
                  i: "🌤️",
                  t: "Late Summer — Still Too Hot",
                  d: "Temperatures begin dropping from August peaks but September still regularly exceeds 38°C. Hotels start reopening for the coming season but the festival infrastructure isn&apos;t in place yet. October is a much better choice.",
                  b: "Wait for October",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">✈️ Getting to AlUla</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-light">
                <strong className="font-medium">Key detail:</strong> AlUla has its own airport — <strong className="font-medium">Prince Abdul Majeed bin Abdulaziz Airport (ULH)</strong> — with direct domestic flights from Riyadh and Jeddah. There are no direct international flights into ULH yet; international visitors connect via Riyadh (RUH) or Jeddah (JED).
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  i: "✈️",
                  t: "Fly into ULH from Riyadh (recommended)",
                  d: "King Khalid International Airport (RUH) to AlUla (ULH): 1 hour on Saudia, flynas or flyadeal. Flights from SAR 150–350 ($40–95) one way. Most international visitors fly into Riyadh first, then connect. Several daily departures in the tourist season.",
                  b: "Best option",
                  c: "bg-green-50 border-green-200",
                },
                {
                  i: "✈️",
                  t: "Fly from Jeddah (JED)",
                  d: "King Abdulaziz International Airport (JED) to AlUla (ULH): 1.5 hours. Good option if you are combining AlUla with a Jeddah visit or arriving on international flights into JED. flynas and Saudia operate this route regularly.",
                  b: "Good option",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  i: "✈️",
                  t: "From India (via Riyadh or Jeddah)",
                  d: "Direct flights from Mumbai, Delhi, Chennai, Bengaluru and Hyderabad to Riyadh (5–6 hrs) and Jeddah (4–5 hrs) on IndiGo, Air India, SpiceJet, Saudia and flydubai. Connect onwards to ULH. Allow 3 hours for connection minimum in Riyadh or Jeddah.",
                  b: "Via Riyadh / Jeddah",
                  c: "bg-blue-50 border-blue-200",
                },
                {
                  i: "🚗",
                  t: "Drive from Medina (Al Madinah)",
                  d: "AlUla is 340km from Medina via Highway 15 — approximately 4–5 hours through dramatic desert and mountain scenery. Scenic approach with good road surfaces throughout. Flexible option if you are already in northwestern Saudi Arabia.",
                  b: "Scenic drive",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 3-Day AlUla Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Each day card is expandable. The itinerary is designed around the morning light at Hegra — the tombs are east-facing and at their most dramatic in the first two hours after sunrise. Book your Hegra slot in advance at experiencealula.com.
            </p>
            <div className="space-y-4">
              <DayCard
                day="Day 1"
                title="Arrive AlUla · Old Town · Jabal Ikmah · Elephant Rock Sunset"
                cost="SAR 300–375 ($80–100) including accommodation"
                items={[
                  "Fly into ULH airport — transfers to AlUla town take 10–15 minutes. Check in to your accommodation: budget guesthouses from SAR 225–300 ($60–80)/night; the city&apos;s budget accommodation is still developing but options are expanding.",
                  "Afternoon: walk AlUla Old Town (Al Murabba) — the ancient mudbrick settlement abandoned in 1983 after residents moved to modern housing. 900 mudbrick houses, a 13th-century mosque and narrow alleyways carved into a single sandstone hill. Free to enter.",
                  "Wind through the labyrinth of tight corridors and collapsed doorways. The scale of what was a complete medieval city is extraordinary — this wasn&apos;t a ruin, it was a functioning town until 40 years ago.",
                  "Late afternoon: drive or taxi to Jabal Ikmah — an open-air canyon whose cliff walls are covered in thousands of 2,000-year-old inscriptions in Dadanitic, Lihyanite, Aramaic and Minaic scripts (SAR 35/$10 guided). This is essentially an ancient library carved in stone.",
                  "Sunset: Elephant Rock (Jabal AlFil) — the extraordinary free-standing sandstone arch that looks like an elephant drinking. The surrounding rock landscape at dusk is one of the most photographed landscapes in Arabia. Taxis from town: SAR 55 ($15) return.",
                  "Evening: dinner at the AlUla Night Market when in season (Nov–Mar) or a local restaurant (SAR 35–55/$10–15).",
                ]}
              />
              <DayCard
                day="Day 2"
                title="Hegra (Mada&apos;in Salih) UNESCO Tombs · Dadan Ruins · Desert Stargazing"
                cost="SAR 165–225 ($45–60) activities + food"
                items={[
                  "6:30am: First shuttle to Hegra (ancient Mada&apos;in Salih) — Saudi Arabia&apos;s first UNESCO World Heritage Site. Book the mandatory shuttle in advance at experiencealula.com (SAR 95/$25 entry + guide included). Walk-ins are not permitted.",
                  "The 111 Nabataean tombs carved into freestanding sandstone mountains are the centrepiece. The Qasr al-Farid — the &apos;Lonely Castle&apos; — is a single massive tomb rising from the open desert floor, carved but never finished. Its isolation and scale are unlike anything else in the Nabataean world.",
                  "Walk through the Jabal Ithlib ceremonial area — a narrow siq canyon leading to a rock-cut diwan hall used for Nabataean ritual banquets. The rock architecture becomes increasingly intimate and human-scaled.",
                  "The morning light (sunrise to 9am) hits the east-facing tomb facades directly and turns them copper-gold. Photography in this light is exceptional. By 11am the facades are in deep shadow.",
                  "Afternoon: Dadan archaeological site — the pre-Nabataean capital of the Lihyanite kingdom, dating from the 2nd millennium BC. Lion tombs carved high in the cliff faces. Older and less visited than Hegra (SAR 15/$5 entry).",
                  "Evening: dark sky experience — AlUla is a designated Dark Sky Reserve. Step outside your accommodation after 10pm on a new moon night and the Milky Way core is clearly visible. Both Habitas AlUla and Banyan Tree offer guided astronomy sessions (SAR 300/$80). Or simply find a spot away from lights and look up.",
                ]}
              />
              <DayCard
                day="Day 3"
                title="Maraya Concert Hall · Camel Trek · Hot Air Balloon · Depart"
                cost="SAR 110–185 ($30–50) without balloon; SAR 785 ($210) with balloon"
                items={[
                  "Morning: Maraya Concert Hall — the Guinness World Record holder for the world&apos;s largest mirrored building. The 9,740 square metre mirror-clad cube reflects the surrounding desert landscape seamlessly. Free to photograph from outside; tours available (SAR 75/$20).",
                  "If visiting November–March: check the Winter at Tantora festival schedule — classical concerts, jazz performances and traditional events take place in the Hegra amphitheatre and at Maraya. Tickets from SAR 185 ($50) to SAR 1,875 ($500+).",
                  "Mid-morning: camel trek through the sandstone corridors near the Old Town — the classic AlUla experience at an unhurried pace (SAR 75–110/$20–30 per hour with a guide). The sandstone formations at close range are extraordinary.",
                  "Hot air balloon over the Hegra landscape: the single best way to comprehend the scale of the Nabataean city from above. Flights launch at dawn (must book the night before at experiencealula.com) — SAR 675 ($180) per person. The views of Qasr al-Farid from 300 metres above are unrepeatable.",
                  "Lunch: AlJadidah Art Village — the revived heritage neighbourhood with craft workshops, local art galleries and cafés with fresh AlUla dates and juices (SAR 35–55/$10–15). The district uses traditional mudbrick architecture and locally-made ceramics.",
                  "Transfer to ULH airport for evening departure or onward to Riyadh.",
                ]}
              />
            </div>
          </section>

          {/* Inline CTA */}
          <InlineCTA destination="AlUla" onPlanTrip={() => setModalOpen(true)} />

          {/* ── LANDMARK GUIDE ── */}
          <section id="landmarks" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏛️ AlUla Landmark Guide</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              The most important sites in priority order. All Hegra entry is via pre-booked shuttle from experiencealula.com — no walk-in access. Prices are as of early 2026.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Hegra (Mada&apos;in Salih)",
                  e: "SAR 95 ($25) — includes guided shuttle",
                  d: "Saudi Arabia&apos;s first UNESCO World Heritage Site. 111 Nabataean rock-cut tombs in freestanding sandstone mountains. The Qasr al-Farid, Jabal Ithlib siq, and the north and south tomb clusters. Book the earliest morning slot — the east-facing facades are only lit directly for the first 2 hours after sunrise.",
                  t: "Must see · 3–4 hrs",
                },
                {
                  n: "Elephant Rock (Jabal AlFil)",
                  e: "Free",
                  d: "A natural sandstone arch weathered into the shape of an elephant drinking, rising 52 metres from the desert floor. The rock city surrounding it extends for kilometres. Best visited at sunset when the sandstone turns deep amber. One of the most photographed landscapes in the Arabian Peninsula.",
                  t: "Must see · 1–1.5 hrs",
                },
                {
                  n: "AlUla Old Town (Al Murabba)",
                  e: "Free",
                  d: "A 3,000-year-old mudbrick city abandoned in 1983. 900 houses, a 13th-century mosque and alleyways carved through a single sandstone hill. Remarkably intact — the last residents left within living memory. Genuinely atmospheric in the early morning before tour groups arrive.",
                  t: "Must see · 1.5 hrs",
                },
                {
                  n: "Dadan Archaeological Site",
                  e: "SAR 15 ($5)",
                  d: "The pre-Nabataean capital of the Lihyanite kingdom — older than Hegra by several centuries. Lion tombs carved high into the cliff faces, visible from below. Less developed than Hegra but archaeologically significant. Context for understanding what was here before the Nabataeans arrived.",
                  t: "Recommended · 1.5 hrs",
                },
                {
                  n: "Jabal Ikmah",
                  e: "SAR 35 ($10) guided",
                  d: "An open-air canyon whose sandstone walls are covered in ancient inscriptions in four scripts — Dadanitic, Lihyanite, Aramaic and Minaic. Essentially the world&apos;s oldest open-air library. A guide who can read the scripts makes a significant difference. Morning light illuminates the inscriptions.",
                  t: "Recommended · 1 hr",
                },
                {
                  n: "Maraya Concert Hall",
                  e: "Free (exterior) · SAR 75 ($20) tour",
                  d: "The Guinness World Record largest mirrored building, built in 2019 for the Winter at Tantora festival. The 9,740 square metre mirror-clad cube reflects the desert so perfectly it appears to vanish. Inside it seats 500 for world-class concerts. Photography from the approaching road is extraordinary.",
                  t: "Essential · 30–45 mins",
                },
                {
                  n: "Hot Air Balloon over Hegra",
                  e: "SAR 675 ($180) per person",
                  d: "Dawn balloon flights over the Hegra landscape give the only aerial view of the tomb distribution across the sandstone mountains. The view of Qasr al-Farid from 300 metres is unrepeatable at ground level. Book at experiencealula.com the day before — slots are limited.",
                  t: "Splurge worth it · 1 hr",
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
            title="AlUla — Hegra, Elephant Rock &amp; the Sandstone Desert"
            subtitle="Saudi Arabia&apos;s extraordinary ancient landscape, finally open to the world."
            spots={[
              {
                name: "Hegra Nabataean Tombs",
                query: "hegra mada'in salih nabataean tombs saudi arabia rock cut desert",
                desc: "The 111 rock-cut Nabataean tombs of Hegra — Saudi Arabia&apos;s first UNESCO World Heritage Site, carved 2,000 years ago into freestanding sandstone mountains.",
              },
              {
                name: "Elephant Rock AlUla",
                query: "elephant rock jabal alfil alula saudi arabia desert sandstone arch",
                desc: "Jabal AlFil — the 52-metre sandstone arch weathered into the shape of an elephant, surrounded by an extraordinary rock landscape at sunset.",
              },
              {
                name: "AlUla Old Town Mudbrick",
                query: "alula old town murabba mudbrick ancient city abandoned saudi arabia",
                desc: "The 900-house mudbrick city of AlUla Old Town, abandoned in 1983 and remarkably preserved in the dry desert air.",
              },
              {
                name: "Maraya Concert Hall Mirror",
                query: "maraya concert hall alula mirrored building saudi desert reflection",
                desc: "The Maraya Concert Hall — the world&apos;s largest mirrored building, reflecting the AlUla desert so perfectly the structure appears to disappear.",
              },
              {
                name: "AlUla Desert Landscape",
                query: "alula desert rock formations sandstone canyon saudi arabia landscape",
                desc: "The 200-million-year-old sandstone landscape of AlUla — canyon passages, balancing rocks and formations that stretch to the horizon.",
              },
            ]}
          />

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              AlUla is not a budget destination by Southeast Asian or Indian standards — but it is genuinely accessible. The main costs are the Hegra entry fee (mandatory and non-negotiable) and accommodation. Food and transport within AlUla are reasonable.
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
                    ["✈️ Flights to ULH (from Riyadh)", "SAR 150–300 ($40–80)", "SAR 300–525 ($80–140)", "SAR 750+ ($200+)"],
                    ["🏨 Accommodation / night", "SAR 225–300 ($60–80)", "SAR 560–750 ($150–200)", "SAR 1,500–2,250 ($400–600)"],
                    ["🍽 Food (per day)", "SAR 55–95 ($15–25)", "SAR 150–225 ($40–60)", "SAR 300–560 ($80–150)"],
                    ["🚗 Transport within AlUla", "SAR 35–75 ($10–20)", "SAR 95–150 ($25–40)", "SAR 300–560 ($80–150)"],
                    ["🏛️ Activities (per day)", "SAR 95–185 ($25–50)", "SAR 185–300 ($50–80)", "SAR 375–1,125 ($100–300)"],
                    ["TOTAL (per day)", "SAR 450 ($120)", "SAR 940 ($250)", "SAR 1,875 ($500)+"],
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
                <p className="font-medium text-sm text-green-800 mb-1">💚 Budget (SAR 450/$120 per day)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">Stay in a budget guesthouse, eat at local cafés and the Night Market, use shared taxis or tour shuttle buses, and do the standard Hegra and Elephant Rock visits. Completely viable — AlUla&apos;s main sites don&apos;t require luxury spending.</p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <p className="font-medium text-sm text-purple-800 mb-1">🌟 Luxury (SAR 1,875/$500+ per day)</p>
                <p className="text-xs text-purple-700 font-light leading-relaxed">Stay at Banyan Tree AlUla or Habitas AlUla, book private pre-dawn Hegra access, take the hot air balloon, attend Winter at Tantora concerts and arrange a private desert dinner. AlUla at the luxury level is genuinely world-class and unlike anything else in the Middle East.</p>
              </div>
            </div>
          </section>

          {/* InlineSignup */}
          <InlineSignup />

          {/* ── WHERE TO STAY ── */}
          <section id="stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🏨 Where to Stay in AlUla</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              AlUla&apos;s accommodation has expanded rapidly since 2019. The luxury options are genuinely exceptional — resorts built among the rock formations. The budget end is still developing but functional guesthouses exist in the town area.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: "Shaden Resort",
                  type: "Heritage resort · AlUla Old Town zone",
                  price: "From SAR 560 ($150)/night",
                  badge: "Best location",
                  desc: "Traditional-style resort within the heritage zone of AlUla, with views of the Old Town and sandstone formations. Pools, a good restaurant, and walking distance to the Old Town. The best value mid-range option in AlUla.",
                  color: "border-amber-200 bg-amber-50",
                },
                {
                  name: "Banyan Tree AlUla",
                  type: "Luxury resort · Among the rock formations",
                  price: "From SAR 1,500 ($400)/night",
                  badge: "Most spectacular",
                  desc: "Individual luxury tents and pavilions built into the sandstone landscape, each with private terrace and views of the rock formations. The resort arranges exclusive Hegra dawn access, private desert dinners, astronomy sessions and camel treks. One of the best resort experiences in the Middle East.",
                  color: "border-purple-200 bg-purple-50",
                },
                {
                  name: "Caravan by Habitas",
                  type: "Boutique eco · Sustainable desert camp",
                  price: "From SAR 940 ($250)/night",
                  badge: "Most unique",
                  desc: "Restored vintage caravans and eco-tents set among the AlUla formations. Community-focused programming, outdoor cinema, guided hikes and a strong sustainability ethos. Popular with younger travellers and groups. The social atmosphere is excellent.",
                  color: "border-teal-200 bg-teal-50",
                },
                {
                  name: "AlUla Town Guesthouses",
                  type: "Budget · AlUla town centre",
                  price: "From SAR 225 ($60)/night",
                  badge: "Best budget",
                  desc: "Several small family-run guesthouses in AlUla town proper, walking distance from the Night Market and Old Town. Basic but clean, with helpful owners who can arrange local taxis. The budget infrastructure is still developing — book ahead as options are limited.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍽️ Where to Eat in AlUla</h2>
            <p className="text-sm text-muted font-light mb-5 leading-relaxed">
              Saudi Arabian cuisine in the Hejaz region centres on slow-cooked meats, rice dishes and dates. AlUla&apos;s restaurant scene ranges from the extraordinary (Maraya Social) to local Saudi fare. No alcohol is served anywhere in Saudi Arabia.
            </p>
            <div className="space-y-3">
              {[
                {
                  n: "Maraya Social",
                  t: "Fine dining · At the Maraya Concert Hall",
                  d: "The restaurant inside the world-record mirrored building — floor-to-ceiling mirrored walls, views across the desert, and a menu of modern Saudi-international cuisine. The setting alone justifies the price (SAR 150–225/$40–60 per person). Reserve in advance, especially during Winter at Tantora season.",
                  b: "Special occasion",
                  c: "bg-amber-50 border-amber-200",
                },
                {
                  n: "AlUla Night Market",
                  t: "Traditional food market · Nov–Mar season",
                  d: "Open during the cool season, the Night Market in AlUla Old Town area brings together traditional Hejazi street food: kabsa (slow-cooked spiced rice with lamb), jareesh (crushed wheat with meat), fresh dates, camel milk ice cream and Saudi-style coffee with cardamom. SAR 20–55 ($5–15) per dish. The atmosphere is excellent.",
                  b: "Must visit in season",
                  c: "bg-orange-50 border-orange-200",
                },
                {
                  n: "AlJadidah Village Cafés",
                  t: "Heritage café district · AlJadidah Art Village",
                  d: "The revived mudbrick heritage district has several small cafés serving Saudi-style breakfast, fresh date juice, AlUla pomegranate products and light lunches in shaded courtyard settings. SAR 25–75 ($7–20). The most atmospheric daytime eating option in AlUla.",
                  b: "Best daytime",
                  c: "bg-green-50 border-green-200",
                },
                {
                  n: "Local Saudi Restaurants (AlUla town)",
                  t: "Casual dining · AlUla town centre",
                  d: "Several local Saudi restaurants in the town area serve generous kabsa meals (the Saudi national dish — spiced rice, slow-cooked lamb or chicken, toasted almonds and raisins) for SAR 25–45 ($7–12). These are the cheapest and most authentic meals in AlUla. Look for places with Saudi families eating.",
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
            destination="AlUla Saudi Arabia"
            hotels={[
              {
                name: "Banyan Tree AlUla",
                type: "Luxury · Tent pavilions among rock formations",
                price: "From SAR 1,500 ($400)/night",
                rating: "5",
                badge: "Most spectacular",
                url: "https://www.booking.com/hotel/sa/banyan-tree-alula.html?aid=2820480",
              },
              {
                name: "Shaden Resort AlUla",
                type: "Heritage resort · Old Town zone",
                price: "From SAR 560 ($150)/night",
                rating: "4",
                badge: "Best location",
                url: "https://www.booking.com/hotel/sa/shaden-resort-alula.html?aid=2820480",
              },
              {
                name: "Caravan by Habitas",
                type: "Boutique eco · Restored caravans",
                price: "From SAR 940 ($250)/night",
                rating: "5",
                badge: "Most unique",
                url: "https://www.booking.com/hotel/sa/caravan-by-habitas-alula.html?aid=2820480",
              },
              {
                name: "AlUla Guesthouse",
                type: "Budget · Town centre",
                price: "From SAR 225 ($60)/night",
                rating: "3",
                badge: "Best budget",
                url: "https://www.booking.com/searchresults.html?ss=AlUla+Saudi+Arabia&aid=2820480",
              },
            ]}
            activities={[
              {
                name: "AlUla & Hegra Full Day Tour",
                duration: "8 hrs",
                price: "From SAR 375 ($100)/person",
                badge: "Must do",
                url: "https://www.getyourguide.com/s/?q=alula+hegra+tour&partner_id=PSZA5UI",
              },
              {
                name: "Hot Air Balloon over Hegra",
                duration: "1 hr",
                price: "From SAR 675 ($180)/person",
                badge: "Iconic",
                url: "https://www.getyourguide.com/s/?q=alula+hot+air+balloon&partner_id=PSZA5UI",
              },
              {
                name: "AlUla Old Town Night Walk",
                duration: "2 hrs",
                price: "From SAR 110 ($30)/person",
                url: "https://www.getyourguide.com/s/?q=alula+old+town+tour&partner_id=PSZA5UI",
              },
              {
                name: "AlUla Dark Sky Astronomy Tour",
                duration: "2 hrs",
                price: "From SAR 300 ($80)/person",
                url: "https://www.getyourguide.com/s/?q=alula+astronomy+dark+sky&partner_id=PSZA5UI",
              },
            ]}
          />

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid in AlUla</h2>
            <div className="space-y-3">
              {[
                {
                  icon: "🎟️",
                  title: "Not booking Hegra entry in advance",
                  desc: "Hegra requires pre-booked timed entry through experiencealula.com. Walk-ins are not allowed — the site is strictly managed by the Royal Commission for AlUla. During Winter at Tantora (Nov–Mar), morning slots sell out weeks in advance. Book your Hegra timeslot before you book your flights.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "🌡️",
                  title: "Visiting May–September",
                  desc: "AlUla reaches 45°C in summer. The sandstone formations concentrate and radiate heat — the effective temperature at site level can feel 8–10°C higher than air temperature. The entire tourism infrastructure closes. Hegra shuttle tours stop running. AlUla is strictly an October–April destination.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "📸",
                  title: "Missing the morning light at Hegra",
                  desc: "The Nabataean tombs are carved into east-facing cliffs. Morning light from sunrise to 9am hits the facade directly and turns the sandstone copper-gold. By 10–11am the facades are in shadow and the photography is flat. The first morning slot at Hegra is the only slot for serious photography.",
                  color: "border-red-200 bg-red-50",
                },
                {
                  icon: "👗",
                  title: "Packing wrong clothing",
                  desc: "Saudi dress codes have relaxed significantly for tourists since 2019 — women no longer legally require an abaya. But AlUla is a conservative rural region outside resort grounds. Cover shoulders and knees at archaeological sites. A light cotton scarf serves dual purpose: sun protection and cultural respect. Men should avoid sleeveless shirts at heritage sites.",
                  color: "border-orange-200 bg-orange-50",
                },
                {
                  icon: "📵",
                  title: "Not downloading the Experience AlUla app",
                  desc: "The official Experience AlUla app has GPS-guided tours of all sites, 3D renders of the Hegra tombs, festival schedules and site maps. AlUla&apos;s on-site signage is still basic. The app is the difference between understanding what you&apos;re looking at and staring at a carved cliff face without context.",
                  color: "border-orange-200 bg-orange-50",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips for AlUla</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: "🌅",
                  title: "First slot at Hegra is the only slot for photography",
                  desc: "The east-facing tomb facades at Hegra are only directly lit for the first two hours after sunrise. Book the earliest available morning shuttle. The golden light on the Nabataean carvings in that window is one of the most extraordinary photographic subjects in the Middle East.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "🎶",
                  title: "Time your visit for Winter at Tantora (Nov–Mar)",
                  desc: "The Winter at Tantora festival transforms AlUla into a genuine cultural event: classical concerts at Hegra amphitheatre, traditional Hejazi food markets, camel races, art installations and midnight performances under a sky full of stars. André Rieu, Lang Lang and Yanni have performed here. Worth planning your trip around.",
                  color: "bg-blue-50 border-blue-200",
                },
                {
                  icon: "🔭",
                  title: "AlUla is a Dark Sky Reserve — use it",
                  desc: "Zero industrial light pollution plus AlUla&apos;s clear desert air makes the night sky extraordinary. On a new moon night, the Milky Way core is clearly visible. Both Habitas AlUla and Banyan Tree offer guided astronomy sessions (SAR 300/$80). Even without a guide, step outside your accommodation after 10pm.",
                  color: "bg-purple-50 border-purple-200",
                },
                {
                  icon: "🐪",
                  title: "Do the camel trek through the sandstone corridors",
                  desc: "Seeing the sandstone formations from camel height changes your understanding of their scale. The rock corridors near AlUla Old Town are the best terrain for camel trekking. Book through your resort or at experiencealula.com (SAR 75–110/$20–30 per hour). Morning treks in the golden hour are the best.",
                  color: "bg-orange-50 border-orange-200",
                },
                {
                  icon: "🎟️",
                  title: "GetYourGuide has the best-rated AlUla tours",
                  desc: "Book Hegra sunrise tours, hot air balloon experiences, and Old Town walks through GetYourGuide for verified reviews and fixed pricing. AlUla&apos;s independent tour scene is still maturing — vetted operators make a significant difference to experience quality, especially for less-visited sites like Dadan and Jabal Ikmah.",
                  color: "bg-teal-50 border-teal-200",
                },
                {
                  icon: "💧",
                  title: "Carry at least 2 litres of water at all sites",
                  desc: "Even in the cool season (Oct–Mar), AlUla&apos;s sandstone landscape is dry and the sun is intense. Sites have minimal shade. The tombs at Hegra are in open desert — the shuttle tour takes 3–4 hours. Carry more water than you think you need and refill at your resort before each tour.",
                  color: "bg-green-50 border-green-200",
                },
              ].map((t) => (
                <TipCard key={t.title} {...t} />
              ))}
            </div>
          </section>

          {/* Photo CTA */}
          <PhotoCta destination="AlUla" />

          {/* Combine With */}
          <CombineWith currentSlug="alula-3-days" />

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                {
                  q: "Is AlUla worth visiting in 2026?",
                  a: "Yes — AlUla in 2026 is at the ideal stage of development. Infrastructure is in place (good hotels, working airport, paved roads to all sites, organised shuttle tours) but crowds are still minimal. Hegra is accessible and well-managed, but you&apos;re unlikely to queue. In five years it may be far more touristed. Visit now.",
                },
                {
                  q: "How do I get to AlUla?",
                  a: "AlUla has its own airport (ULH — Prince Abdul Majeed bin Abdulaziz Airport) with direct flights from Riyadh (1 hr), Jeddah (1.5 hrs) and Medina (1 hr) on Saudia, flynas and flyadeal. International visitors fly into Riyadh or Jeddah first and connect. There are no direct international flights into ULH yet. Driving from Medina takes approximately 4–5 hours through dramatic desert scenery.",
                },
                {
                  q: "Do Indian passport holders need a visa for Saudi Arabia?",
                  a: "Yes. Indian passport holders need a Saudi tourist e-Visa, available online at visitsaudi.com. Cost is approximately $130 USD (around SAR 488/₹10,800). Processing typically takes 24–72 hours. The visa covers AlUla, Riyadh, Jeddah, NEOM and all other tourist regions. Apply at least two weeks before travel and have hotel bookings ready to upload.",
                },
                {
                  q: "Is AlUla similar to Petra in Jordan?",
                  a: "Yes and no. Both were built by the Nabataean civilisation and both feature rock-cut tombs in rose-red sandstone. Hegra (AlUla) is thought to be the older Nabataean city; Petra came slightly later. Hegra feels more remote and raw than Petra — fewer tourists, less tourist infrastructure, more of a frontier feeling. Petra has more variety and is more developed for visitors. If you&apos;ve done Petra, AlUla will still surprise you. If you haven&apos;t done either, do both.",
                },
                {
                  q: "Is it safe to travel to AlUla as a solo traveller or woman?",
                  a: "AlUla is extremely safe for tourists. Saudi Arabia&apos;s tourist regions are heavily monitored and crime against tourists is essentially unheard of. Solo female travellers are welcome — the guardianship laws that previously restricted women&apos;s movement were abolished in 2019, and women can travel independently throughout Saudi Arabia. Follow dress guidelines at heritage sites (cover shoulders and knees), and you will have zero issues.",
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
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your AlUla trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/saudi-arabia-visa-guide", label: "Saudi Visa Guide", icon: "📋" },
                { href: "/blog/alula-budget-breakdown", label: "Budget breakdown", icon: "💰" },
                { href: "/blog/winter-at-tantora-guide", label: "Tantora festival", icon: "🎶" },
                { href: "/blog/hegra-nabataean-tombs", label: "Hegra deep dive", icon: "🏛️" },
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
          <RelatedGuides currentSlug="alula-3-days" />

          {/* Internal links */}
          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Middle East &amp; Arabian Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Petra, Jordan — 3 Days in the Rose-Red City", href: "/blog/petra-jordan-3-days" },
                { label: "Dubai in 4 Days — Desert to Skyline", href: "/blog/dubai-4-days" },
                { label: "Oman in 5 Days — Muscat, Wadi Shab &amp; the Hajar Mountains", href: "/blog/oman-5-days" },
                { label: "Saudi Arabia Visa Guide — Everything You Need to Know", href: "/blog/saudi-arabia-visa-guide" },
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
