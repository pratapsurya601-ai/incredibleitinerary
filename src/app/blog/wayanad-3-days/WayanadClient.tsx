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
import Breadcrumb from "@/components/blog/Breadcrumb";


const WAYANAD_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "\uD83C\uDF3F", label: "Why Wayanad?" },
  { id: "itinerary",  emoji: "\uD83D\uDCC5", label: "3-Day Itinerary" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "wildlife",   emoji: "\uD83D\uDC18", label: "Wildlife & Treks" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
        className="h-full bg-gold transition-all duration-100"
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Wayanad 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Wayanad in 3 Days — Chembra Peak, Edakkal Caves & Safari&url=${typeof window !== "undefined" ? window.location.href : ""}` },
      ].map((s) => (
        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
          className={`${s.color} text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full transition-opacity hover:opacity-80`}>
          {s.label}
        </a>
      ))}
      <button onClick={copy}
        className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">
        {copied ? "✓ Copied" : "Copy Link"}
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

// ── Day Card ──────────────────────────────────────────────────────────────────
function DayCard({ day, title, items, cost }: { day: string; title: string; items: string[]; cost: string }) {
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
        <span className="text-muted text-lg">{open ? "\u2212" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">{"●"}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-3 border-t border-parchment-2 flex items-center gap-2">
            <span className="text-lg">{"\uD83D\uDCB0"}</span>
            <span className="text-xs text-muted font-light">Est. cost: </span>
            <span className="text-xs font-medium text-ink">{cost}</span>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Tip Card ──────────────────────────────────────────────────────────────────
function TipCard({ icon, title, desc, color }: { icon: string; title: string; desc: string; color: string }) {
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

// ── Route Map Card ────────────────────────────────────────────────────────────
function RouteCard({ plan, day, stops, distance, url, note, color }: {
  plan: string; day: string; stops: string[]; distance: string; url: string; note: string; color: string;
}) {
  return (
    <div className={`rounded-xl border p-5 ${color}`}>
      <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-muted mb-0.5">{plan}</p>
          <p className="font-serif text-base text-ink">{day}</p>
        </div>
        <span className="text-xs text-muted bg-white/70 px-3 py-1 rounded-full border border-white/50">
          {distance}
        </span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {stops.map((stop, j) => (
          <span key={j} className="flex items-center gap-1">
            <span className="text-xs bg-white/80 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{stop}</span>
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">{"→"}</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">{"\uD83D\uDCA1"} {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        {"\uD83D\uDCCD"} Open in Google Maps {"→"}
      </a>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
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
export default function WayanadClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={WAYANAD_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Wayanad" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="wayanad kerala western ghats green hills mist tea plantation"
            alt="Wayanad green hills and misty Western Ghats landscape Kerala"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Wayanad 3 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Wayanad in 3 Days: Waterfalls, Wildlife & Tea Estates
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Kerala&apos;s most underrated hill district — Chembra Peak heart lake, 6,000-year-old cave petroglyphs, elephant safari, and waterfalls you can swim in. Budget from ₹2,500/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          {/* Share + stats row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} Kerala, India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 3 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From ₹2,500/day</span>
            </div>
          </div>

          {/* Intro quote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Wayanad sits at 900–2,100 metres in Kerala&apos;s Western Ghats — connected to Ooty, Mysore, and Kozhikode, making it the perfect junction on any South India circuit. Most visitors rush through for a day. That is a mistake. The heart-shaped lake on Chembra Peak alone is worth two days.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style to jump to the right section.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "\uD83C\uDF3E", label: "Budget Backpacker", sub: "₹2,500–₹3,500/day", desc: "Homestay + local food + public transport", color: "border-amber-200 hover:border-amber-400", id: "itinerary" },
                { emoji: "\uD83C\uDFD4", label: "Nature Explorer", sub: "₹5,000–₹8,000/day", desc: "Mid-range resort + all major treks + safari", color: "border-teal-200 hover:border-teal-400", id: "itinerary" },
                { emoji: "\uD83C\uDF33", label: "Treehouse Luxury", sub: "₹10,000+/day", desc: "Luxury treehouse + private guide + experiences", color: "border-emerald-200 hover:border-emerald-400", id: "itinerary" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY WAYANAD ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDF3F"} Why Wayanad?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Wayanad is not just another Kerala hill station. It is a district where neolithic humans left carvings 6,000 years ago, where India&apos;s largest earthen dam sits in forest, where elephants cross roads at dawn, and where a lake shaped exactly like a heart sits at 1,800 metres. Here is what you are actually getting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "The Trek Side", emoji: "\uD83E\uDDD7", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Highlight","Chembra Peak heart-shaped lake (Hridaya Thadakam)"],["Elevation","900m (Kalpetta) to 2,100m (Chembra summit)"],["Best Trek","8km round trip to heart lake — moderate difficulty"],["Permit","₹250 + mandatory guide ₹500"]],
                  note: "The heart-shaped lake is one of those rare places that actually looks like the photos. Start at 7am to reach it before cloud cover." },
                { title: "The Wildlife Side", emoji: "\uD83D\uDC18", bg: "bg-emerald-50 border-emerald-200", th: "text-emerald-800",
                  rows: [["Sanctuary","Muthanga Wildlife Sanctuary (Wayanad WLS)"],["Safari","Jeep safari ₹1,500–₹2,000/vehicle"],["Slots","6:30am and 3:30pm daily"],["Animals","Elephants, gaur, spotted deer, tiger territory"]],
                  note: "Book the 6:30am slot — animals are most active in early morning and the light is extraordinary in the forest." },
              ].map((area) => (
                <div key={area.title} className={`rounded-xl border p-5 ${area.bg}`}>
                  <h3 className={`font-serif text-lg font-normal mb-4 flex items-center gap-2 ${area.th}`}>
                    <span>{area.emoji}</span>{area.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {area.rows.map(([k, v]) => (
                      <div key={k} className="flex gap-2 text-xs">
                        <span className="font-medium text-ink/80 w-20 flex-shrink-0">{k}</span>
                        <span className="text-muted font-light">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted font-light italic border-t border-current/10 pt-3">{"\u26A0\uFE0F"} {area.note}</p>
                </div>
              ))}
            </div>

            {/* Key attractions grid */}
            <h3 className="font-serif text-lg font-light text-ink mb-4 mt-8">Key Attractions at a Glance</h3>
            <div className="space-y-3">
              {[
                { name: "Chembra Peak (2,100m)", detail: "Highest peak in Wayanad. Heart-shaped lake at 1,800m is the main draw. 8km trek, permit ₹250, Forest Dept guide mandatory. Start 7am, complete by noon.", tag: "Trekking", color: "border-amber-200 bg-amber-50" },
                { name: "Edakkal Caves", detail: "Neolithic petroglyphs 6,000+ years old — two caves with ancient rock carvings of humans and animals. 1km uphill walk. Entry ₹60 Indians / ₹300 foreigners. Closes 5pm, arrive before 2pm.", tag: "Heritage", color: "border-orange-200 bg-orange-50" },
                { name: "Soochipara Falls (Sentinel Rock)", detail: "Three-tiered waterfall at 200m height. Swimming allowed in the pool at base. Entry ₹50. 1km walk from parking. Best Oct–May.", tag: "Waterfall", color: "border-blue-200 bg-blue-50" },
                { name: "Banasura Sagar Dam", detail: "India&apos;s largest earthen dam. Boating ₹150–₹300. Banasura Hill trek from here is 6km, moderate difficulty. Scenic reservoir surrounded by forest.", tag: "Scenic", color: "border-teal-200 bg-teal-50" },
                { name: "Muthanga Wildlife Sanctuary", detail: "Jeep safari ₹1,500–₹2,000 per vehicle. Elephant, gaur, and deer sightings common. Tiger territory — rarely seen. Book safari in advance. Two slots: 6:30am and 3:30pm.", tag: "Wildlife", color: "border-emerald-200 bg-emerald-50" },
                { name: "Pookode Lake", detail: "Natural freshwater lake set inside forest — one of very few in Kerala at this altitude. Boating ₹100. Peaceful morning spot before crowds arrive at 9am.", tag: "Nature", color: "border-green-200 bg-green-50" },
                { name: "Thirunelli Temple", detail: "1,000+ year old Vishnu temple deep in the forest, sometimes called the Kashi of Kerala. Spiritual, quiet, and architecturally striking. Free entry.", tag: "Spiritual", color: "border-yellow-200 bg-yellow-50" },
                { name: "Karapuzha Dam", detail: "Largest irrigation dam in Kerala. Good picnic spot with mountain views. Less crowded than Banasura. Drive-through on the way to Muthanga.", tag: "Scenic", color: "border-sky-200 bg-sky-50" },
              ].map((attr) => (
                <div key={attr.name} className={`rounded-xl border p-4 ${attr.color}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm text-ink">{attr.name}</p>
                        <span className="text-[0.6rem] bg-white/70 border border-white/60 px-2 py-0.5 rounded-full text-muted uppercase tracking-wide">{attr.tag}</span>
                      </div>
                      <p className="text-xs text-muted font-light leading-relaxed">{attr.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Circuit tip:</strong> Wayanad connects perfectly with Ooty (97km), Mysore (120km), and Kozhikode (75km). It makes an excellent 3–5 day addition to a South India circuit rather than a standalone trip.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="3 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="₹2,500/day" />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Oct – May" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Kozhikode 75km" />
          </div>

          {/* ── 3-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Kalpetta is the main town and best base. All distances are from Kalpetta unless noted.
            </p>

            {/* Day 1 */}
            <DayCard
              day="Day 1"
              title="Arrive Kalpetta · Pookode Lake · Edakkal Caves · Soochipara Falls"
              items={[
                "Arrive Kalpetta — check into homestay or resort. The main KSRTC bus stand is central. If driving from Kozhikode, the Thamarassery Ghat Pass (23 hairpin bends) takes 1.5–2 hours from the coast.",
                "9am: Pookode Lake (6km from Kalpetta) — arrive early before crowds. Natural freshwater lake inside forest. Boating ₹100. 45 minutes is enough — this is a gentle start, not the main event.",
                "11am: Edakkal Caves (12km from Kalpetta) — two rock shelter caves with neolithic petroglyphs 6,000+ years old. The 1km uphill walk takes 20–25 minutes. Entry ₹60 Indians / ₹300 foreigners. Spend 1.5 hours — read the interpretation boards, the history is extraordinary.",
                "1pm: Lunch near Ambalavayal (the village near Edakkal). Simple meals at local restaurants for ₹80–₹120.",
                "2:30pm: Soochipara Falls (Sentinel Rock Falls) — 18km from Edakkal. Three-tiered waterfall at 200m. Entry ₹50. 1km walk through forest to reach the base pool. Swimming is allowed — bring a change of clothes. The waterfall is most impressive Oct–January when flow is at its peak.",
                "5:30pm: Return to Kalpetta. Sunset walk on the main market road — good spot to pick up fresh spices, coffee, and banana chips.",
                "Dinner in Kalpetta town — local Kerala thali ₹100–₹150. Try Parotta with beef or chicken curry, a Wayanad staple.",
              ]}
              cost="₹600–₹1,000 excluding accommodation" />

            {/* Day 2 */}
            <DayCard
              day="Day 2"
              title="Chembra Peak Full Day · Evening Kalpetta Town"
              items={[
                "5:30am: Wake up and eat light — the Chembra permit office opens at 6am at Meppadi (8km from Kalpetta). Get there early as permit numbers are limited.",
                "6am: Permit office at Meppadi — buy entry permit ₹250 per person. A Forest Department guide is mandatory, not optional. Guide fee: ₹500. This is non-negotiable and the guides know the trail well.",
                "7am: Start trek from the base at Meppadi. The trail is 8km round trip to the heart-shaped lake (Hridaya Thadakam). First 2km is a steady climb through tea estate. The lake appears at 1,800m — about 2.5–3 hours of uphill walking at a moderate pace.",
                "Hridaya Thadakam (Heart Lake) — the lake is genuinely heart-shaped when seen from above. It sits in a natural depression in the hillside. Spend 30–45 minutes here — it is the reason everyone comes. Carry packed food from Kalpetta.",
                "Return trek takes about 1.5–2 hours. Total time: 5–6 hours for the full round trip.",
                "1:30pm: Back at Meppadi. Lunch at a local tea shop or at your homestay if you arranged it. Rest in the afternoon — Chembra is genuinely tiring.",
                "4:30pm: Optional — Banasura Sagar Dam viewpoint (15km from Kalpetta) for sunset. India&apos;s largest earthen dam looks spectacular in late afternoon light.",
                "Evening: Kalpetta town walk. Wayanad produces some of India&apos;s finest pepper, cardamom, and coffee. The town market has authentic spice shops — buy direct from growers.",
              ]}
              cost="₹900–₹1,400 including Chembra permit and guide" />

            {/* Day 3 */}
            <DayCard
              day="Day 3"
              title="Muthanga Safari · Banasura Sagar Dam · Thirunelli Temple · Depart"
              items={[
                "5:45am: Drive to Muthanga Wildlife Sanctuary (37km from Kalpetta, 1 hour). Book the 6:30am jeep safari slot in advance — this is the most popular slot and fills up.",
                "6:30am: Muthanga Jeep Safari — ₹1,500–₹2,000 per vehicle (shared between 6 people maximum). Wayanad Wildlife Sanctuary is prime elephant territory. Gaur (Indian bison), spotted deer, and langur monkeys are common sightings. Tiger sightings happen but are rare — do not expect one. Duration: 1.5–2 hours.",
                "9am: Breakfast at the Forest Rest House canteen near Muthanga, or drive to Sultan Bathery town (5km) for proper South Indian breakfast.",
                "10:30am: Banasura Sagar Dam (20km from Sultan Bathery). India&apos;s largest earthen dam — the dam wall stretches through rolling hills with forested islands in the reservoir. Boating ₹150–₹300. The optional Banasura Hill trek starts here — 6km, moderate difficulty, adds 3 hours.",
                "1pm: Lunch at Sultan Bathery — the largest town in Wayanad, good restaurant options at all budgets.",
                "2:30pm: Thirunelli Temple (40km from Sultan Bathery — only if you have time). One of Kerala&apos;s oldest Vishnu temples, set deep in forest near the Karnataka border. The drive through jungle is half the experience. Free entry.",
                "Or alternatively: skip Thirunelli and take a relaxed afternoon drive to Karapuzha Dam before heading to your departure point.",
                "Depart Wayanad — most people head to Kozhikode (75km) for flights or onward rail. Drive time: 2 hours via Thamarassery Ghat.",
              ]}
              cost="₹700–₹1,200 excluding accommodation" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) {"·"} </span>
              <span className="font-serif text-base text-ink font-light">₹7,500–₹10,500 budget · ₹15,000–₹24,000 mid-range</span>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83C\uDF3E"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">{"\uD83C\uDFD4"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">{"\uD83C\uDF33"} Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83C\uDFE8 Accommodation (3N)", "₹2,400–₹3,600", "₹9,000–₹15,000", "₹21,000–₹36,000"],
                    ["\uD83C\uDF7D Food & Drinks", "₹600–₹1,050", "₹2,100–₹3,500", "₹4,500–₹7,500"],
                    ["\uD83D\uDE95 Transport (local)", "₹500–₹800", "₹2,000–₹3,500", "₹4,500–₹6,000"],
                    ["\uD83C\uDFAF Chembra Permit + Guide", "₹750", "₹750", "₹750"],
                    ["\uD83D\uDC18 Muthanga Safari (shared)", "₹300–₹400", "₹500–₹700", "₹1,500–₹2,000"],
                    ["\uD83C\uDFAF Entry Fees (all)", "₹300–₹500", "₹300–₹500", "₹300–₹500"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹7,500–₹10,500", "₹15,000–₹24,000", "₹32,000–₹53,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Chembra permit ₹250 + mandatory guide ₹500 applies to all budget levels. Muthanga safari cost shown per person assuming full jeep of 6. Driving from Kozhikode, Mysore, or Ooty is the most cost-effective approach as there is no train to Wayanad.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Wayanad"
            hotels={[
              { name: "Vythiri Village Resort", type: "Treehouse Resort · Vythiri", price: "From ₹6,500/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/hotel/in/vythiri-village.html?aid=2820480" },
              { name: "Rainforest Treehouse Wayanad", type: "Treehouse · Kalpetta area", price: "From ₹5,000/night", rating: "4", badge: "Treehouse", url: "https://www.booking.com/searchresults.en-gb.html?ss=wayanad+treehouse&aid=2820480" },
              { name: "Budget Homestay Kalpetta", type: "Homestay · Central Kalpetta", price: "From ₹800/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=kalpetta+homestay&aid=2820480" },
            ]}
            activities={[
              { name: "Chembra Peak Trek with Guide", duration: "Full day", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=wayanad+trekking&partner_id=PSZA5UI" },
              { name: "Muthanga Wildlife Jeep Safari", duration: "2 hours", price: "From ₹400/person", badge: "Wildlife", url: "https://www.getyourguide.com/s/?q=wayanad+safari&partner_id=PSZA5UI" },
              { name: "Edakkal Caves & Soochipara Falls Tour", duration: "Half day", price: "From ₹600/person", url: "https://www.getyourguide.com/s/?q=wayanad+day+tour&partner_id=PSZA5UI" },
              { name: "Wayanad Spice Plantation Tour", duration: "3 hours", price: "From ₹500/person", url: "https://www.getyourguide.com/s/?q=wayanad+spice+tour&partner_id=PSZA5UI" },
            ]}
            pdfProductId="wayanad-3-days-pdf"
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Wayanad — Must-See Places"
            subtitle="Click each thumbnail to explore Wayanad&apos;s waterfalls, caves, wildlife and misty peaks."
            spots={[
              { name: "Chembra Peak Heart Lake", query: "chembra peak heart shaped lake wayanad kerala trek mountain", desc: "The heart-shaped Hridaya Thadakam at 1,800m is one of India&apos;s most photographed trek destinations. It forms naturally in a hollow on the mountain — a perfect heart visible from the ridge above." },
              { name: "Soochipara Falls", query: "soochipara sentinel rock falls wayanad kerala waterfall swimming", desc: "Three-tiered waterfall at 200m falling into a natural pool. Swimming is permitted. Entry ₹50 with 1km forest walk. Best from October to January when flow is strongest." },
              { name: "Edakkal Caves", query: "edakkal caves wayanad ancient rock carvings neolithic petroglyphs", desc: "Two natural rock caves containing engravings estimated at 6,000+ years old. Some of the oldest recorded evidence of human settlement in South India." },
              { name: "Muthanga Wildlife Sanctuary", query: "muthanga wayanad wildlife sanctuary elephant safari jeep forest", desc: "Jeep safaris through prime elephant territory at dawn. Wayanad Wildlife Sanctuary is contiguous with Nagarhole and Bandipur — part of the largest protected forest complex in South India." },
              { name: "Banasura Sagar Dam", query: "banasura sagar dam wayanad kerala reservoir islands earthen dam", desc: "India&apos;s largest earthen dam with forested islands in the reservoir. Boating ₹150–₹300. The Banasura Hill trek starts from here." },
            ]}
          />

          {/* ── WAYANAD IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="wayanad kerala tea plantation mist morning workers green hills"
              alt="Tea estate workers in misty Wayanad morning with Western Ghats backdrop"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Wayanad&apos;s tea estates at dawn — the district sits at 900–2,100m and produces some of Kerala&apos;s finest tea and pepper. Many estates offer guided walks.
              </p>
            </div>
          </div>

          {/* ── WILDLIFE & TREKS DEEP DIVE ── */}
          <section id="wildlife" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDC18"} Wildlife & Treks — What to Actually Expect</h2>

            <div className="space-y-4">
              {/* Chembra deep */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3 flex items-center gap-2">
                  {"\uD83E\uDDD7"} Chembra Peak — The Complete Trek Guide
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Distance:</strong> 8km round trip to heart lake · Full summit adds 4km more</p>
                  <p><strong className="text-ink">Starting point:</strong> Meppadi (8km from Kalpetta) — permit office opens 6am</p>
                  <p><strong className="text-ink">Permit:</strong> ₹250 per person — limited daily numbers, go early</p>
                  <p><strong className="text-ink">Guide:</strong> Forest Department guide mandatory — ₹500 per group. Guides know the trail and wildlife. Non-negotiable.</p>
                  <p><strong className="text-ink">Time required:</strong> 5–6 hours round trip to heart lake at a comfortable pace</p>
                  <p><strong className="text-ink">Difficulty:</strong> Moderate — steady climb, some steep sections after the tea estate section</p>
                  <p><strong className="text-ink">What to carry:</strong> 2L water minimum, packed food, light rain jacket (clouds can roll in fast), trekking shoes (not sandals)</p>
                  <p><strong className="text-ink">Season:</strong> October–May. June–September the trek is officially closed due to monsoon — trails become slippery and leech-infested.</p>
                  <p><strong className="text-ink">The heart lake:</strong> Hridaya Thadakam sits at 1,800m. It is a natural lake that collects rainwater in a heart-shaped depression — the shape is most visible from the ridge just above it. Leeches can be present even in dry season at the lake edge.</p>
                </div>
              </div>

              {/* Muthanga deep */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-emerald-800 mb-3 flex items-center gap-2">
                  {"\uD83D\uDC18"} Muthanga Safari — How to Book and What to Expect
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Location:</strong> Sultan Bathery to Muthanga — 12km. Entry at Muthanga Forest Checkpost.</p>
                  <p><strong className="text-ink">Safari slots:</strong> 6:30am and 3:30pm daily. 6:30am slot is far superior — elephants are active near water sources.</p>
                  <p><strong className="text-ink">Cost:</strong> ₹1,500–₹2,000 per jeep (maximum 6 passengers). Entry fee extra: ₹150 Indians / ₹650 foreigners per person.</p>
                  <p><strong className="text-ink">Booking:</strong> Book at the Forest Department office in Sultan Bathery town or online through Kerala Forest Department. Book 2–3 days ahead in peak season (Nov–Feb).</p>
                  <p><strong className="text-ink">What you will likely see:</strong> Spotted deer (always), Bonnet macaques, wild boar, gaur (Indian bison — large and impressive), hornbills. Elephants: good chance in morning slot near the water source areas.</p>
                  <p><strong className="text-ink">Tiger territory:</strong> Wayanad WLS is contiguous with Nagarhole and Bandipur — tiger population exists but sightings in Muthanga zone are rare. Do not come expecting a tiger.</p>
                  <p><strong className="text-ink">Photography:</strong> Bring a telephoto lens — jeeps stop at safe distances from animals. The forest light in the 6:30am slot is exceptional.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── ROUTE MAPS ── */}
          <div className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              All three days radiate from Kalpetta. Save these links on your phone — mobile signal can be unreliable on some forest roads.
            </p>
            <div className="space-y-4">
              <RouteCard plan="Day 1" day="Kalpetta → Pookode Lake → Edakkal Caves → Soochipara Falls"
                stops={["Kalpetta base","Pookode Lake 9am","Edakkal Caves 11am","Lunch Ambalavayal 1pm","Soochipara Falls 2:30pm","Kalpetta 5:30pm"]}
                distance="70km round trip · 2hrs driving" note="Edakkal and Soochipara are in the same direction (northeast from Kalpetta) — logical route with no backtracking."
                color="border-amber-200 bg-amber-50"
                url="https://www.google.com/maps/dir/Kalpetta/Pookode+Lake+Wayanad/Edakkal+Caves+Wayanad/Soochipara+Falls+Wayanad/Kalpetta" />
              <RouteCard plan="Day 2" day="Kalpetta → Meppadi (Chembra) → Banasura Dam evening"
                stops={["Kalpetta 5:30am","Meppadi permit 6am","Chembra trek 7am","Heart Lake ~10am","Return Meppadi 1:30pm","Banasura Dam 4:30pm"]}
                distance="35km · 1hr driving" note="Chembra permit office is at Meppadi, 8km from Kalpetta. Very short drive. The entire day is physically focused on the trek."
                color="border-teal-200 bg-teal-50"
                url="https://www.google.com/maps/dir/Kalpetta/Meppadi+Wayanad/Banasura+Sagar+Dam+Wayanad/Kalpetta" />
              <RouteCard plan="Day 3" day="Kalpetta → Muthanga → Banasura Dam → Sultan Bathery → Depart"
                stops={["Kalpetta 5:45am","Muthanga 6:30am","Sultan Bathery 9am","Banasura Dam 10:30am","Thirunelli (optional) 2:30pm","Kozhikode depart"]}
                distance="150km to Kozhikode" note="Muthanga is east toward Karnataka border. Banasura Dam is northwest. If skipping Thirunelli, you have time for a leisurely afternoon before the 2hr drive to Kozhikode."
                color="border-emerald-200 bg-emerald-50"
                url="https://www.google.com/maps/dir/Kalpetta/Muthanga+Wildlife+Sanctuary/Sultan+Bathery/Banasura+Sagar+Dam/Thirunelli+Temple/Kozhikode" />
            </div>

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d125469.0!2d76.08!3d11.70!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Wayanad Travel Map" />
            </div>
          </div>

          {/* ── WATERFALL IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="soochipara falls wayanad kerala waterfall swimming pool jungle"
              alt="Soochipara Falls three-tiered waterfall with swimming pool in Wayanad Kerala"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Soochipara Falls — also called Sentinel Rock Falls. Entry ₹50, swimming allowed in the pool at the base. Arrive before 11am to get it relatively to yourself.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Going in the monsoon (July–August)", desc: "Leeches everywhere on every trail. Chembra Peak is officially closed. Roads to Thamarassery Ghat become slippery and landslide-prone. Edakkal Caves path gets treacherous. June–September is genuinely the wrong time unless you only want resort downtime.", icon: "\uD83C\uDF27" },
                { title: "Skipping Edakkal Caves", desc: "Most tourists skip it because it sounds like just a cave. It is actually neolithic rock art 6,000+ years old — among the oldest evidence of human settlement in South India. More interesting than any waterfall.", icon: "\uD83E\uDEA8" },
                { title: "Not booking Muthanga safari in advance", desc: "The 6:30am safari slots fill up fast during peak season (October–February). Walk-ins are possible outside season but not guaranteed. Book 2–3 days ahead at the Forest Department office in Sultan Bathery or via the Kerala Forest Department portal.", icon: "\uD83D\uDC18" },
                { title: "Stopping at the first Chembra viewpoint", desc: "Most people get tired after 2km, reach a viewpoint, and turn back thinking that is it. The heart lake is at 4km — another hard hour of climbing. Do not turn back early. This is the mistake that makes people say Chembra was underwhelming.", icon: "\uD83D\uDEAB" },
                { title: "Driving into Wayanad without offline maps", desc: "Phone signal is unreliable or absent on many forest roads and near the Karnataka border. Download offline Google Maps for Wayanad district before you leave Kozhikode or Kalpetta.", icon: "\uD83D\uDCF5" },
                { title: "Not bringing leech socks", desc: "Even outside monsoon, leeches are present on wet forest trails — especially near Soochipara Falls and during post-rain days. Leech socks cost ₹50 at Kalpetta town. Buy them before the trek, not after.", icon: "\uD83D\uDC1B" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\u2600\uFE0F", title: "Start Chembra at Exactly 7am", desc: "The heart lake sits in a hollow that fills with cloud by mid-morning. Starting at 7am gets you there in clear conditions. Starting at 9am risks cloud cover over the lake and a disappointing view.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF66", title: "Eat the Bamboo Rice (Mulayari)", desc: "Wayanad&apos;s tribal staple — bamboo rice is only available when bamboo flowers (a rare 7-year cycle event). When available, it is extraordinary. More realistically, try the Karimeen (pearl spot fish) and fresh cardamom tea.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDE97", title: "Rent a Vehicle in Kalpetta", desc: "Wayanad has no reliable local auto or taxi system for inter-attraction travel. Rent a scooter (₹300–₹500/day) or car with driver (₹1,500–₹2,500/day) from Kalpetta town. This is the single biggest quality-of-life upgrade for your trip.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDFE1", title: "Treehouse Stays Are Worth It", desc: "Wayanad has India&apos;s best treehouse accommodation. Vythiri Village, Rainforest Treehouse, and Green Gates offer stays 40–80 feet above ground. Prices ₹5,000–₹12,000/night. Book 2 weeks ahead for October–February weekends.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF7F", title: "Buy Spices Directly From Farms", desc: "Wayanad produces some of India&apos;s finest pepper, cardamom, and coffee. Kalpetta market has direct-from-farm sellers — prices are 40–60% lower than airport stores and the quality is incomparably better. Buy whole peppercorns, not pre-ground.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83D\uDEE3", title: "Wayanad Connects to Ooty and Mysore", desc: "Ooty is 97km from Kalpetta — a beautiful 2.5-hour drive. Mysore is 120km (2.5 hours). Build Wayanad into a South India circuit with Ooty + Wayanad + Mysore or Coorg rather than as a standalone destination.", color: "bg-emerald-50 border-emerald-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Want This Planned for You?
            </h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and budget — we&apos;ll send a personalised Wayanad itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Wayanad Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Wayanad?", a: "3 days is ideal to cover Chembra Peak, Edakkal Caves, Soochipara Falls, Muthanga safari, and Banasura Sagar Dam. 2 days works if you skip Chembra. 4–5 days lets you add Meenmutty Falls, Thirunelli Temple, and spice plantation visits at a relaxed pace." },
                { q: "What is the best time to visit Wayanad?", a: "October to May is the best time. October–February offers the clearest skies and coolest temperatures (15–25°C). March–May is warmer but trails are dry. June–September brings heavy monsoon — Chembra trek closes officially, leeches appear on all forest trails, and the Thamarassery Ghat road can be dangerous." },
                { q: "How much does a 3-day Wayanad trip cost?", a: "Budget travellers: ₹7,500–₹10,500 for 3 days (₹2,500–₹3,500/day) including homestay at ₹800–₹1,200/night, local meals, and all entry fees. Mid-range with resort: ₹15,000–₹24,000. Chembra permit ₹250 + mandatory guide ₹500 applies to everyone. Muthanga safari ₹1,500–₹2,000 per vehicle." },
                { q: "Is the Chembra Peak trek difficult?", a: "Moderate difficulty. The trail to the heart lake (4km one way) has steady climbing and some steep sections — most people reach it in 2–3 hours at a comfortable pace. You do not need special fitness but you should be comfortable walking uphill for 2+ hours. A Forest Department guide is mandatory (₹500) and permit ₹250. Start at 7am for best conditions." },
                { q: "How do I reach Wayanad?", a: "Nearest airport: Kozhikode (Calicut) at 75km — 2 hours via Thamarassery Ghat. From Mysore: 120km, 2.5 hours. From Ooty: 97km, 2.5 hours. There is no direct train — KSRTC buses run from Kozhikode, Mysore, and Ooty to Kalpetta. Having your own vehicle or hiring a cab makes navigating the district much easier." },
                { q: "What are Edakkal Caves and why should I visit?", a: "Edakkal Caves are two natural rock shelter caves containing neolithic petroglyphs estimated to be 6,000+ years old — among the oldest documented evidence of human habitation in South India. The carvings include human figures, animals, and symbols. Entry ₹60 Indians / ₹300 foreigners. 1km uphill walk from the base. Closes at 5pm — arrive before 2pm. Most tourists skip them; this is a mistake." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a South India Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Ooty — 3 Day Hill Station Guide", href: "/blog/ooty-3-days", soon: false },
                { label: "Munnar — 3 Day Tea Estate Guide", href: "/blog/munnar-3-days", soon: false },
                { label: "Coorg — 3 Day Coffee Estate Guide", href: "/blog/coorg-3-days", soon: false },
                { label: "Kerala Backwaters — 5 Day Guide", href: "/blog/kerala-5-days", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="wayanad-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
