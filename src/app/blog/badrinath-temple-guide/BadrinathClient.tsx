"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RelatedGuides from "@/components/blog/RelatedGuides";
import InquiryModal from "@/components/ui/InquiryModal";
import SmartImage from "@/components/ui/SmartImage";
import TableOfContents from "@/components/blog/TableOfContents";
import AffiliateBlock from "@/components/blog/AffiliateBlock";
import Breadcrumb from "@/components/blog/Breadcrumb";

const BADRINATH_TOC = [
  { id: "intro",          emoji: "🛕", label: "Why Badrinath?" },
  { id: "how-to-reach",   emoji: "🚗", label: "How to Reach" },
  { id: "temple-darshan", emoji: "🙏", label: "Temple & Darshan" },
  { id: "tapt-kund",      emoji: "♨️", label: "Tapt Kund" },
  { id: "mana-village",   emoji: "🏘️", label: "Mana Village" },
  { id: "nearby",         emoji: "🏔️", label: "Nearby Attractions" },
  { id: "where-to-stay",  emoji: "🏨", label: "Where to Stay" },
  { id: "best-time",      emoji: "🌤️", label: "Best Time" },
  { id: "registration",   emoji: "📋", label: "Registration" },
  { id: "what-to-carry",  emoji: "🎒", label: "What to Carry" },
  { id: "budget",         emoji: "💰", label: "Budget" },
  { id: "tips",           emoji: "💡", label: "Tips" },
  { id: "faq",            emoji: "❓", label: "FAQ" },
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
          href: `mailto:?subject=Badrinath Temple Guide 2026&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}`,
        },
        {
          label: "Twitter",
          color: "bg-[#1DA1F2] text-white",
          href: `https://x.com/intent/tweet?text=Badrinath Temple Guide 2026&url=${typeof window !== "undefined" ? window.location.href : ""}`,
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

export default function BadrinathClient({ faqData }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={BADRINATH_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Badrinath" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="badrinath temple himalaya uttarakhand india mountains"
            alt="Badrinath temple nestled in the Himalayan valley, Uttarakhand"
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
              <span className="text-white/70">Badrinath Temple Guide</span>
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
                <span className="text-white/60 text-xs">13 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Badrinath Temple Guide 2026
                <em className="italic text-gold-light"> — Darshan, Rituals &amp; Nearby Wonders</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The final and most sacred Char Dham. Lord Vishnu. The Tapt Kund thermal bath. India&apos;s
                last village. A 145m waterfall three kilometres away. Everything you need before you go.
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
              <span>⛰️ 3,133m</span>
              <span>·</span>
              <span>🚗 Drive-in</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            <StatCard icon="⛰️" label="Altitude" value="3,133m" />
            <StatCard icon="🚗" label="Access" value="Drive-in" />
            <StatCard icon="📅" label="Season" value="May – Nov" />
            <StatCard icon="💰" label="Budget From" value="₹3,500/day" />
          </div>

          {/* Intro blockquote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              I arrived at Badrinath at night. The temple was lit up — orange and gold against a black sky,
              backed by the Nar-Narayan peaks. Whatever your relationship with faith, there are moments that
              simply stop you. That was one of them.
            </p>
            <p className="text-xs text-muted mt-3 font-light">— Surya Pratap, visited Oct 2022</p>
          </blockquote>

          {/* ── INTRO ── */}
          <section id="intro" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🛕 Why Badrinath Is Different</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Badrinath is the most venerated of the four Char Dhams. Where Kedarnath is Shiva, Badrinath
              is Vishnu — and in Vaishnavite tradition, it is one of the 108 Divya Desams, the most sacred
              temples in the universe. It sits at 3,133m in the Chamoli district of Uttarakhand, flanked by
              the Nar and Narayan peaks, with the Alaknanda river rushing past below.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              Unlike Kedarnath (16km trek) or Yamunotri (6km trek), Badrinath is a
              <strong className="text-ink"> drive-in temple</strong>. You park and walk 5 minutes to the
              gate. This makes it accessible to all ages and physical conditions, and it also means the
              crowds can be genuinely intense in peak season — up to 20,000 pilgrims per day in June.
            </p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              The Badrinath experience has three layers: the temple darshan itself (the spiritual core),
              the Tapt Kund ritual bath (the preparation), and the surrounding landscape — Mana village,
              Vasudhara Falls, and the view of the Neelkanth peak (6,596m) looming directly above.
              Most pilgrims spend one day. I&apos;d argue you need two.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {[
                {
                  icon: "🙏",
                  title: "Lord Vishnu",
                  desc: "Main deity is Badrinarayan — Lord Vishnu in meditation pose (yogamurti). Black stone idol considered self-manifested (swayambhu).",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "♨️",
                  title: "Tapt Kund",
                  desc: "Natural thermal spring at 45°C just below the temple. Ritual bath before darshan. Believed to cure skin ailments. Free entry.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🏘️",
                  title: "Mana Village",
                  desc: "India's last village before Tibet — 3km from temple. Bhim Pul, Vyas Gufa, Ganesh Gufa, and authentic Garhwali crafts.",
                  color: "bg-green-50 border-green-200",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🚗 How to Reach Badrinath</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              Badrinath is 298km from Rishikesh. The drive takes 8–9 hours via the NH7 — scenic but tiring.
              <strong className="text-ink"> Joshimath</strong> (50km before Badrinath) is the main halt point
              and also serves as the winter residence of the Badrinath idol.
            </p>

            <div className="space-y-3 mb-6">
              {[
                {
                  from: "Delhi → Rishikesh",
                  how: "Bus (Volvo AC, ₹400–600) or train to Haridwar + taxi. ~6–7 hours.",
                },
                {
                  from: "Rishikesh → Joshimath",
                  how: "Shared jeep/bus via Devprayag–Rudraprayag–Chamoli. 7–8 hours. ₹400–600 shared.",
                },
                {
                  from: "Joshimath → Badrinath",
                  how: "50km, 1.5–2 hours. Shared jeep ₹100–150, private taxi ₹800–1,200.",
                },
                {
                  from: "Rishikesh → Badrinath direct",
                  how: "Private cab ₹5,000–7,000 one way. ~8–9 hours. Many tour operators offer this.",
                },
                {
                  from: "Helicopter (Phata/Sersi → Badrinath)",
                  how: "Helipads at Phata and Sersi near Rudraprayag, and Govindghat. ₹4,500–6,000 one way. Book at heliyatra.irctc.co.in or private operators.",
                },
                {
                  from: "Nearest railway station",
                  how: "Rishikesh (298km). Haridwar is better connected to major cities.",
                },
                {
                  from: "Nearest airport",
                  how: "Jolly Grant Airport, Dehradun (~320km). Direct flights from Delhi, Mumbai, Bangalore.",
                },
              ].map((r) => (
                <div key={r.from} className="bg-parchment rounded-xl p-4 border border-parchment-2">
                  <p className="text-sm font-medium text-ink mb-1">{r.from}</p>
                  <p className="text-xs text-muted font-light">{r.how}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="text-sm font-medium text-blue-800 mb-2">🚁 Helicopter vs Road — Honest Take</p>
              <p className="text-xs text-blue-700 font-light leading-relaxed">
                The helicopter takes 20–30 minutes vs 8–9 hours by road. For elderly pilgrims or those with
                health conditions, it&apos;s a genuine game-changer. The road through Chamoli district is
                beautiful but demanding — potholes, hairpin turns, potential landslides in July–August.
                If you&apos;re doing all four dhams, consider helicopter for Kedarnath (the most exhausting)
                and the road for Badrinath where the drive itself has exceptional views.
              </p>
            </div>
          </section>

          {/* ── TEMPLE & DARSHAN ── */}
          <section id="temple-darshan" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🙏 Temple Darshan — Complete Guide</h2>

            <div className="bg-white border border-parchment-2 rounded-xl p-5 mb-6 space-y-3">
              {[
                ["Main deity", "Badrinarayan (Lord Vishnu), self-manifested black stone idol, 1m tall"],
                ["Temple built", "Historically 9th century; current structure rebuilt post earthquake"],
                ["Mahabhishek", "4:30am daily. Special ceremonial bath of the idol. Cost: ₹1,500. Book online."],
                ["Abhishek puja", "6:30am. ₹500 online booking recommended."],
                ["Regular darshan", "6am–12pm and 3pm–9pm (timings change seasonally — confirm on arrival)"],
                ["Evening aarti", "~8pm (Shayan Aarti). Most atmospheric time to visit."],
                ["Brahma Muhurta darshan", "4:30am — the most auspicious hour. VIP entry available."],
                ["VIP/paid darshan", "Book online at chardhamdevasthanam.in. ₹300–500. Skips general queue."],
                ["Free darshan wait", "2–4 hours in peak season (June). Less than 30 mins in September–October."],
                ["Dress code", "Traditional clothing preferred. No shorts, sleeveless. Remove footwear."],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-3 text-sm">
                  <span className="font-medium text-ink w-44 flex-shrink-0">{k}</span>
                  <span className="text-muted font-light">{v}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-sm font-medium text-amber-800 mb-2">💡 Darshan Strategy</p>
              <p className="text-xs text-amber-700 font-light leading-relaxed">
                In June, queues for free darshan start forming at 4am. Book VIP darshan online the day before
                or early morning. For a peaceful experience, arrive at the evening Shayan Aarti (around 8pm)
                when crowds thin dramatically and the lit temple looks its most spectacular against the
                mountain backdrop.
              </p>
            </div>
          </section>

          {/* ── TAPT KUND ── */}
          <section id="tapt-kund" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">♨️ Tapt Kund — The Ritual Bath</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              The Tapt Kund is a series of natural sulphurous thermal springs directly below the Badrinath
              temple, on the banks of the Alaknanda river. Water temperature is approximately
              <strong className="text-ink"> 45°C</strong> — comfortably hot for bathing. In the morning,
              steam rises dramatically from the kunds with the cold mountain air.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border border-parchment-2 rounded-xl p-5 space-y-3">
                <h3 className="font-medium text-sm text-stone-900">The Ritual</h3>
                {[
                  ["When to bathe", "Before entering temple for darshan (early morning preferred)"],
                  ["Entry fee", "Free"],
                  ["Facilities", "Changing rooms for men and women separately"],
                  ["Water temp", "~45°C — genuinely hot but comfortable"],
                  ["Religious belief", "Purifies body and soul before facing the deity"],
                  ["Health belief", "Sulphur water credited with curing skin diseases"],
                ].map(([k, v]) => (
                  <InfoRow key={k} label={k} value={v} />
                ))}
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-medium text-sm text-red-800 mb-3">⚠️ Important Notes</h3>
                <ul className="space-y-2 text-xs text-red-700 font-light">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0">●</span>
                    The river adjacent to the kunds is ice-cold — do not step into it
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0">●</span>
                    Go early morning — water is less crowded, steam is most atmospheric
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0">●</span>
                    Take a change of clothes or a dry towel
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0">●</span>
                    Children should be supervised closely near the water
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-shrink-0">●</span>
                    People with heart conditions or very high BP should consult a doctor before bathing in hot spring
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── MANA VILLAGE ── */}
          <section id="mana-village" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🏘️ Mana Village — India&apos;s Last Village</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              Mana village, 3km from Badrinath temple (₹20–30 by auto-rickshaw), sits at 3,200m and holds
              a board at its entrance proudly declaring: <em className="text-ink">&quot;Last Indian Village.&quot;</em>
              The next settlement past Mana is in Tibet. Most pilgrims come only for the temple and miss
              Mana entirely. That is a significant mistake.
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  name: "Bhim Pul",
                  desc: "A single massive boulder that naturally bridged the Saraswati river — said to have been placed by Bhima of the Pandavas to help Draupadi cross. The roaring river below the rock bridge is mesmerising. Walk 10 minutes from the village entrance.",
                  icon: "🪨",
                },
                {
                  name: "Vyas Gufa",
                  desc: "A cave (gufa) above Bhim Pul where the sage Veda Vyasa is said to have dictated the Mahabharata to Ganesha. The cave is small but has a meditative quality. Small idol inside. Adjacent Ganesh Gufa is where Ganesha transcribed it.",
                  icon: "📜",
                },
                {
                  name: "Ganesh Gufa",
                  desc: "Adjacent to Vyas Gufa — the cave where Lord Ganesha wrote the Mahabharata as Vyasa dictated. Both caves are free to enter. Spend time here, especially if Mahabharata has meaning for you.",
                  icon: "🐘",
                },
                {
                  name: "Saraswati River",
                  desc: "The Saraswati river — one of India's mythological rivers considered to have disappeared underground — is said to be visible at Mana before going underground. The stream here is identified as the Saraswati. A striking and moving sight for those who know its significance.",
                  icon: "🌊",
                },
                {
                  name: "Garhwali Crafts Market",
                  desc: "Local women in the village sell handmade woollen items — shawls, socks, caps. These are genuine local crafts, not factory-made. One of the few places on the entire Char Dham circuit to buy authentic Garhwali textiles.",
                  icon: "🧶",
                },
              ].map((p) => (
                <div key={p.name} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{p.icon}</span>
                    <span className="font-medium text-sm text-stone-900">{p.name}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-sm font-medium text-green-800 mb-2">🗺️ Practical Mana Tips</p>
              <ul className="space-y-1 text-xs text-green-700 font-light">
                <li>● Auto-rickshaw from Badrinath: ₹20–30 per person</li>
                <li>● Spend 2–3 hours here minimum</li>
                <li>● Get chai at the tea stalls — you are in &quot;India&apos;s last chai shop&quot;</li>
                <li>● The village is about 600m total walking from entry to Vyas Gufa</li>
                <li>● No ATM — carry cash before leaving Badrinath</li>
              </ul>
            </div>
          </section>

          {/* ── NEARBY ATTRACTIONS ── */}
          <section id="nearby" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🏔️ Other Nearby Attractions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  name: "Vasudhara Falls",
                  distance: "9km from Mana (3km trek)",
                  desc: "A stunning 145m waterfall at 4,200m, considered sacred to Lord Vishnu. The 3km trek from Mana passes through high-altitude meadows with views of Neelkanth peak. Moderate difficulty. Start early (6am) to return before afternoon.",
                  icon: "💧",
                  tags: ["3km trek", "4,200m altitude", "Full day"],
                },
                {
                  name: "Neelkanth Peak Views",
                  distance: "Visible from Badrinath",
                  desc: "At 6,596m, Neelkanth (called the Queen of Garhwal) looms directly behind Badrinath. No trek needed — just look up from the temple courtyard. Best views at dawn with alpenglow on the summit. Early morning photograph opportunity is extraordinary.",
                  icon: "🏔️",
                  tags: ["No trek", "6,596m peak", "Photography"],
                },
                {
                  name: "Brahma Kapal",
                  distance: "500m from temple",
                  desc: "A sacred ghat on the Alaknanda river where Hindus perform shraddha (ancestral rites). Considered one of the most auspicious spots to perform last rites in all of India — the belief is that the cycles of rebirth are resolved here.",
                  icon: "🕯️",
                  tags: ["500m from temple", "Ancestral rites", "Sacred ghat"],
                },
                {
                  name: "Satopanth Lake",
                  distance: "24km trek from Badrinath",
                  desc: "A high-altitude glacial lake at 4,600m — a triangular lake considered so sacred it is believed to be visited by the Trinity (Brahma, Vishnu, Shiva) on different days. For serious trekkers only. 2-day trek. Permits required.",
                  icon: "🏞️",
                  tags: ["24km trek", "4,600m altitude", "Permit needed"],
                },
              ].map((p) => (
                <div key={p.name} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{p.name}</p>
                      <p className="text-[0.65rem] text-muted">{p.distance}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[0.6rem] bg-parchment text-muted px-2 py-0.5 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── WHERE TO STAY ── */}
          <section id="where-to-stay" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🏨 Where to Stay</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              Accommodation is available both in <strong className="text-ink">Badrinath town</strong> itself
              (walking distance from the temple) and in <strong className="text-ink">Joshimath</strong> (50km,
              larger town with better amenities). For a pre-dawn darshan, staying in Badrinath town makes
              the most sense.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  location: "Badrinath Town",
                  type: "Dharamshalas, GMVN, Budget Hotels",
                  price: "₹500–3,500/night",
                  pros: "5-minute walk from temple. Essential for early morning Mahabhishek. GMVN Tourist Bungalow is reliable.",
                  cons: "Limited options. Basic facilities at budget end. Books out fast in peak season.",
                  recommended: true,
                },
                {
                  location: "Joshimath",
                  type: "Hotels, GMVN Guesthouses",
                  price: "₹700–4,000/night",
                  pros: "Much better range. Good restaurants. ATM available. Base for Auli ski resort and Nanda Devi trekking.",
                  cons: "50km from Badrinath (1.5–2 hour drive). Need very early start for morning darshan.",
                  recommended: false,
                },
                {
                  location: "GMVN Tourist Rest House (Badrinath)",
                  type: "Government Guesthouse",
                  price: "₹800–2,500/night",
                  pros: "Reliable quality, direct GMVN booking, well-located, clean rooms with hot water.",
                  cons: "Book months in advance for peak season. Limited rooms.",
                  recommended: false,
                },
                {
                  location: "Dharamshalas (Multiple)",
                  type: "Free or Donation-Based",
                  price: "Free – ₹200/night",
                  pros: "Multiple temple trusts run free dharamshalas. Basic but clean. Good for pilgrims.",
                  cons: "Dormitory-style mostly. Very basic. Long queues in peak season.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🌤️ Best Time to Visit Badrinath</h2>

            <div className="space-y-3">
              {[
                {
                  period: "May – June",
                  rating: "Very Good",
                  color: "bg-green-50 border-green-200 text-green-800",
                  desc: "Post-opening crowds but good weather. Snow still visible on peaks — dramatic scenery. Accommodation books out fast. Register and book early.",
                },
                {
                  period: "September – October",
                  rating: "Best",
                  color: "bg-emerald-50 border-emerald-200 text-emerald-800",
                  desc: "Post-monsoon. Crystal clear skies. Best mountain views. Manageable crowds. October is the last month before closing — the temple has a special atmospheric quality.",
                },
                {
                  period: "July – August",
                  rating: "Caution",
                  color: "bg-yellow-50 border-yellow-200 text-yellow-800",
                  desc: "Monsoon season. Heavy rainfall. Landslide risk on roads. Temple is open but travel is genuinely difficult. Not recommended unless you have no other window.",
                },
                {
                  period: "November – April",
                  rating: "Closed",
                  color: "bg-stone-50 border-stone-200 text-stone-600",
                  desc: "Temple closes around Diwali. The Badrinath idol (Utsav murti) is moved to Joshimath (Narasimha temple) for winter. The road is impassable under snow. Reopens on Akshaya Tritiya.",
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">📋 Online Registration Process</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-5">
              Char Dham Devasthanam Board registration is mandatory for Badrinath. You will be stopped at
              checkpoints without it. Register at{" "}
              <strong className="text-ink">registrationandtouristcare.uk.gov.in</strong> before your trip.
              Also book darshan slots through <strong className="text-ink">chardhamdevasthanam.in</strong>.
            </p>

            <div className="bg-white border border-parchment-2 rounded-xl p-5 space-y-3">
              {[
                ["Step 1", "Visit registrationandtouristcare.uk.gov.in"],
                ["Step 2", "Create account with mobile number"],
                ["Step 3", "Upload Aadhaar (Indian) or Passport (foreign nationals) + photo"],
                ["Step 4", "Medical certificate if above 50 years (mandatory)"],
                ["Step 5", "Select yatra dates and dhams you plan to visit"],
                ["Step 6", "Download/print registration PDF — save offline"],
                ["VIP darshan", "Book separately at chardhamdevasthanam.in (₹300–500 per person)"],
                ["Mahabhishek", "Book at chardhamdevasthanam.in (₹1,500). Highly recommended — book weeks in advance"],
                ["Cost", "Registration is free. Only special darshans have fees."],
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">🎒 What to Carry</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-sm text-ink mb-3 uppercase tracking-wide">Essentials</h3>
                <ul className="space-y-2">
                  {[
                    "Warm clothing — 3,133m is cold even in June (15°C in day, 5°C at night)",
                    "Rain jacket — brief showers possible even in May",
                    "Comfortable walking shoes (5–10km walking in town and Mana)",
                    "Sunscreen SPF 50+ and sunglasses (UV is intense)",
                    "Water bottle — stay hydrated at altitude",
                    "Personal medications + basic first aid kit",
                    "Registration PDF saved offline",
                    "Sufficient cash — limited ATMs in Badrinath town",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted font-light">
                      <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-sm text-ink mb-3 uppercase tracking-wide">For Temple &amp; Rituals</h3>
                <ul className="space-y-2">
                  {[
                    "Fresh flowers and tulsi leaves for offering",
                    "Dry change of clothes for after Tapt Kund bath",
                    "Traditional dhoti/dupatta if doing Mahabhishek",
                    "Small container for Alaknanda river water",
                    "Extra footwear bag (must remove shoes at temple)",
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
                    "Leather goods (discouraged in temple precincts)",
                    "Non-vegetarian food (prohibited in the entire Char Dham zone)",
                    "Alcohol (strictly prohibited)",
                    "Heavy bags — locker facilities available in Badrinath",
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
              Badrinath is a drive-in temple — no trekking costs — but it&apos;s the furthest dham from
              Rishikesh. Transport is the biggest expense. Budget travellers can manage ₹4,000–6,000 for
              a 3-day round trip from Rishikesh; mid-range is ₹10,000–16,000.
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
                    ["Rishikesh → Badrinath (shared jeep/bus)", "₹600–800", "₹5,000–7,000 (private cab)"],
                    ["Accommodation Badrinath (2 nights)", "₹500–900/night", "₹1,800–3,500/night"],
                    ["Food (2 days)", "₹300–500/day", "₹700–1,200/day"],
                    ["Auto to Mana village", "₹60–100 (round trip)", "₹300–400 (private auto)"],
                    ["Temple offerings", "₹50–100", "₹200–500"],
                    ["VIP / paid darshan", "—", "₹300–500"],
                    ["Mahabhishek puja (optional)", "—", "₹1,500"],
                    ["Return to Rishikesh", "₹600–800", "₹5,000–7,000 (private cab)"],
                    ["Total 3-day trip (per person)", "~₹3,500–5,000", "~₹10,000–18,000"],
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">💡 Tips &amp; Things to Know</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: "🌅",
                  title: "Evening aarti beats morning rush",
                  desc: "The Shayan Aarti at ~8pm is when the temple is at its most atmospheric. Lit against the dark mountain sky, far fewer people, deeply moving. Don't skip it.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "🏘️",
                  title: "Don't skip Mana Village",
                  desc: "80% of pilgrims go only to the temple and leave. Mana (3km) is one of the most remarkable places in India — the last village, mythological caves, a natural rock bridge. Budget 3 hours.",
                  color: "bg-green-50 border-green-200",
                },
                {
                  icon: "♨️",
                  title: "Tapt Kund bath at dawn",
                  desc: "The experience of bathing in the steaming kund at 5am with the cold mountain air is genuinely extraordinary. Don't sleep through it.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "📋",
                  title: "Book darshan online",
                  desc: "Free darshan queues in June can be 3–4 hours. A ₹300–500 VIP booking skips most of that wait and is worth every rupee. Book the evening before on the Devasthanam portal.",
                  color: "bg-amber-50 border-amber-200",
                },
                {
                  icon: "💸",
                  title: "ATM situation",
                  desc: "There is one ATM in Badrinath town (often runs out in peak season). Carry sufficient cash from Joshimath or Chamoli.",
                  color: "bg-red-50 border-red-200",
                },
                {
                  icon: "🧥",
                  title: "It is cold at 3,133m",
                  desc: "Even in late June, Badrinath evenings drop to 5–8°C. October can approach freezing at night. A proper down jacket is not optional.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "🌧️",
                  title: "Watch July–August road conditions",
                  desc: "The NH7 through Chamoli is prone to landslides in monsoon. Check road status at Border Roads Organisation (BRO) updates before travelling. Several tourists get stranded each year.",
                  color: "bg-white border-parchment-2",
                },
                {
                  icon: "📵",
                  title: "Limited connectivity",
                  desc: "BSNL has the best coverage. Jio and Airtel work in Badrinath town but not on roads between Joshimath and Badrinath consistently. Download offline maps beforehand.",
                  color: "bg-white border-parchment-2",
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

          <AffiliateBlock destination="Badrinath Uttarakhand" />

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
              href="/blog/yamunotri-temple-guide"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all"
            >
              Yamunotri Temple Guide →
            </Link>
            <Link
              href="/blog/gangotri-glacier-trek"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all"
            >
              Gangotri Glacier Trek →
            </Link>
            <Link
              href="/blog/rishikesh-haridwar-3-days"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-parchment-2 text-muted text-sm rounded-xl hover:border-gold hover:text-gold transition-all"
            >
              Rishikesh Base Guide →
            </Link>
          </div>
        </div>
      </main>

                <div className="max-w-[760px] mx-auto px-5 pb-4">


                  <RelatedGuides currentSlug="badrinath-temple-guide" />


                </div>


      <Footer />
      {modalOpen && <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />}
    </>
  );
}
