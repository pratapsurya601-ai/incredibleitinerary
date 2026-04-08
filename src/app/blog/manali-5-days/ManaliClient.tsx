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

const MANALI_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "\uD83C\uDFD4",  label: "Why Manali?" },
  { id: "itinerary",  emoji: "\uD83D\uDCC5",  label: "5-Day Itinerary" },
  { id: "budget",     emoji: "\uD83D\uDCB0",  label: "Budget Breakdown" },
  { id: "rohtang",    emoji: "\uD83C\uDFD4",  label: "Rohtang Pass — Complete Guide" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1",  label: "Pro Tips" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Manali 5-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Manali in 5 Days — Solang, Rohtang %26 Old Manali&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 bg-parchment hover:bg-parchment-2 transition-colors">
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
        <span className="text-xs text-muted bg-white/70 px-3 py-1 rounded-full border border-white/50">{distance}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mb-4">
        {stops.map((stop, j) => (
          <span key={j} className="flex items-center gap-1">
            <span className="text-xs bg-white/80 px-2.5 py-1 rounded-full border border-white/60 text-ink font-light">{stop}</span>
            {j < stops.length - 1 && <span className="text-muted/40 text-xs">{"\u2192"}</span>}
          </span>
        ))}
      </div>
      <p className="text-xs text-muted font-light italic mb-3">{"\uD83D\uDCA1"} {note}</p>
      <a href={url} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-teal hover:underline">
        {"\uD83D\uDCCD"} Open in Google Maps {"\u2192"}
      </a>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
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
export default function ManaliClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MANALI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Manali" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="manali mountains snow himachal pradesh kullu valley cedar deodar"
            alt="Manali valley with snow peaks and deodar forests, Himachal Pradesh"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Manali 5 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Hill Station</span>
                <span className="text-white/60 text-xs">March 21, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">14 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Manali in 5 Days: Solang Valley, Rohtang Pass & Old Manali
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Snow sports, mountain cafes, Rohtang Pass permit walkthrough and the Old Manali secret most tourists never find. Budget from ₹1,600/day.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} Himachal Pradesh</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 5 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From ₹1,600/day</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Manali is two different places. Mall Road Manali is noisy souvenir shops and traffic jams. Old Manali — 3km uphill — is wood-fired pizza, apple orchards, mountain views and the most relaxed cafes in India. The key to enjoying Manali: stay in Old Manali, go to Solang and Rohtang before 8am, and spend your evenings in the cafes.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\u26A1"} Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Pick your style to jump to the right section.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "\uD83C\uDFD2", label: "Snow & Adventure", sub: "₹1,600–₹3,000/day", desc: "Hostel + Solang skiing + Rohtang + treks", color: "border-blue-200 hover:border-blue-400", id: "itinerary" },
                { emoji: "☕", label: "Cafe & Chill", sub: "₹3,000–₹6,000/day", desc: "Old Manali cafes + Vashisht + apple orchards", color: "border-amber-200 hover:border-amber-400", id: "itinerary" },
                { emoji: "\uD83C\uDFD4", label: "Mountain Explorer", sub: "₹6,000+/day", desc: "Atal Tunnel + Chandratal + paragliding + heritage", color: "border-emerald-200 hover:border-emerald-400", id: "itinerary" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan {"\u2192"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY MANALI ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83C\uDFD4"} Why Manali?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Manali sits at 2,050m in the Kullu Valley — surrounded by 4,000m+ peaks, fed by the Beas River, covered in deodar cedar forest. It is not the most pristine hill station (Shimla is more polished, Kasol is more chill, Jibhi is more offbeat) but it has the widest range of things to do: snow sports, treks, passes, temples, cafes, and the gateway to Ladakh.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              {[
                { title: "The Snow Side", emoji: "\u2744\uFE0F", bg: "bg-blue-50 border-blue-200", th: "text-blue-800",
                  rows: [["Highlight","Solang Valley — skiing, sledging, paragliding at 2,480m"],["Pass","Rohtang Pass (3,978m) — snow even in summer, permit required"],["Tunnel","Atal Tunnel (9.02km, world's longest above 3,000m) → Sissu"],["Season","Snow: December–February. Rohtang open: May–October"]],
                  note: "Solang Valley gets crowded by 10am on weekends. Arrive by 8am. Skiing Rs.500–Rs.1,000/hr with instructor. Paragliding Rs.1,500–Rs.3,500 tandem." },
                { title: "The Culture Side", emoji: "☕", bg: "bg-amber-50 border-amber-200", th: "text-amber-800",
                  rows: [["Highlight","Old Manali — wood-fired pizza, apple orchards, mountain cafes"],["Temple","Hadimba Devi Temple — 16th century, cedar forest, ancient wood"],["Hot Springs","Vashisht village — natural sulfur springs, ancient temple"],["Day Trip","Naggar Castle (15th century) + Roerich Art Gallery"]],
                  note: "Old Manali is 3km uphill from Mall Road. The tourist buses stop at Mall Road and most people never make it here. This is the real Manali." },
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

            <h3 className="font-serif text-lg font-light text-ink mb-4 mt-8">Key Attractions at a Glance</h3>
            <div className="space-y-3">
              {[
                { name: "Solang Valley (2,480m)", detail: "14km from Manali. Skiing (Rs.500–Rs.1,000/hr), sledging (Rs.200–Rs.300), paragliding (Rs.1,500–Rs.3,500 tandem, 10–15 min flight). Snow Dec–Apr. No permit needed. Arrive by 8am to beat crowds.", tag: "Snow & Adventure", color: "border-blue-200 bg-blue-50" },
                { name: "Rohtang Pass (3,978m)", detail: "51km from Manali, 2hrs. Online permit required — Rs.550 (petrol) or Rs.650 (diesel). Only 1,200 vehicles/day. Book at rohtangpermit.com the PREVIOUS evening. Open May–October only. Closed Tuesdays.", tag: "Must Do", color: "border-orange-200 bg-orange-50" },
                { name: "Old Manali", detail: "3km uphill from Mall Road. Cafe 1947 (best pizza, Rs.220–Rs.380). Dylan's Toasted and Roasted (best coffee). The Lazy Dog (best vibe, live music). Apple orchard walks. Manu Temple. The real Manali.", tag: "Essential", color: "border-amber-200 bg-amber-50" },
                { name: "Atal Tunnel → Sissu", detail: "9.02km tunnel (free, no permit) to Sissu in Lahaul Valley. Opened 2020. Snow on the other side even when Manali is green. Chandratal Lake day trip starts from here (115km further, 4hrs, possible May–Oct).", tag: "Free", color: "border-teal-200 bg-teal-50" },
                { name: "Hadimba Devi Temple", detail: "16th-century wooden temple in cedar forest. Ancient Himalayan architecture — carved wooden doors, pagoda roof. Peaceful at 7am before tourists. Rs.30 entry. 5 minutes from Old Manali.", tag: "Heritage", color: "border-emerald-200 bg-emerald-50" },
                { name: "Vashisht Hot Springs", detail: "2km from Old Manali. Natural sulfur springs — separate men's and women's baths, Rs.20–Rs.50. Ancient Vashisht temple next door. Popular with long-term backpackers.", tag: "Experience", color: "border-green-200 bg-green-50" },
                { name: "Jogini Falls Trek", detail: "3km forest trek from Vashisht village. Easy-moderate, 1.5hrs up. Waterfall at the end with a natural pool. Free. Best in spring when water flow is strong.", tag: "Trek", color: "border-yellow-200 bg-yellow-50" },
                { name: "Naggar Castle (1460 CE)", detail: "22km from Manali. 15th-century stone and wood castle, now a heritage hotel. Rs.100 entry. Nicholas Roerich Art Gallery nearby (Rs.50). Mountain views from the terrace. Good half-day trip.", tag: "Heritage", color: "border-sky-200 bg-sky-50" },
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
                <strong className="font-medium text-ink">The honest Manali vs Kasol vs Jibhi question:</strong> Manali has the most to do (snow sports, Rohtang, Atal Tunnel, temples). Kasol is more relaxed (backpacker cafes, Parvati Valley treks, no snow sports). Jibhi is the most offbeat (tiny village, no crowds, boutique homestays). If you want variety, pick Manali. If you want peace, pick Jibhi. If you want vibes, pick Kasol.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="5 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value="₹1,600/day" />
            <StatCard icon={"\uD83C\uDF21"} label="Best Months" value="Dec–Jun, Oct" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Bhuntar 50km" />
          </div>

          {/* ── 5-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} The 5-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Stay in Old Manali for all 5 nights. Everything radiates from there.
            </p>

            <DayCard day="Day 1" title="Arrive + Old Manali Exploration"
              items={[
                "6:00am: Arrive Manali by overnight Volvo from Delhi (₹900–₹1,800, 14–16 hours). Take a local auto to Old Manali — ₹50–₹80. NOT Mall Road. Ignore taxi drivers who say Old Manali is 'closed' or 'far' — it is 3km uphill.",
                "8:00am: Check in to Old Manali guesthouse or hostel. Budget: ₹400–₹800/night (dorm) or ₹800–₹1,500 (private). Zostel, The Hosteller, or any family-run place on the main lane.",
                "10:00am: Walk the Old Manali village lanes. Manu Temple (ancient, free, 10 minutes). The lanes above the temple wind through working apple orchards with mountain views.",
                "12:00pm: Lunch at Cafe 1947 — wood-fired pizza (₹220–₹380), best rooftop terrace in Manali. Or Dylan's Toasted and Roasted for coffee and sandwiches (₹150–₹250).",
                "3:00pm: Vashisht village — 2km downhill from Old Manali. Natural hot sulfur springs (₹20–₹50). Ancient Vashisht temple. Soak for 30 minutes.",
                "5:00pm: Jogini Falls trek — starts from Vashisht, 3km through forest. Easy-moderate, 1.5 hours up. Waterfall with natural pool. Free. Return before dark.",
                "8:00pm: Dinner at The Lazy Dog — rooftop, mountain panorama, live music some nights. Apple cider from local orchards. ₹250–₹400.",
              ]}
              cost="₹1,200–₹2,500 excluding accommodation" />

            <DayCard day="Day 2" title="Solang Valley — Snow & Paragliding"
              items={[
                "7:00am: Book Rohtang permit at rohtangpermit.com for TOMORROW (permits release at 8pm, sell out by 11pm on weekends). Do this tonight if you forget now.",
                "7:30am: Shared taxi Old Manali → Solang Valley (14km, ₹200–₹300/seat). Leave early — slopes get crowded by 10am and queues for activities stretch 1–2 hours by noon.",
                "8:30am: Solang Valley arrives. Skiing with instructor (₹500–₹1,000/hr). Sledging (₹200–₹300). Snow tubing (₹200). Zorbing (₹300). Gear rental on site.",
                "11:00am: Paragliding — tandem flight with certified instructor from the valley ridge. 10–15 minutes over the valley, mountain views in every direction. ₹1,500–₹3,500. Worth every rupee.",
                "1:00pm: Return to avoid traffic jam. Lunch at a dhaba on the road back — rajma chawal ₹80–₹120.",
                "3:00pm: Afternoon free. Walk the Beas River trail near Old Manali. Or rest for tomorrow's Rohtang.",
                "8:00pm: Dinner in Old Manali. Early night — Rohtang requires a 5:30am departure.",
              ]}
              cost="₹2,000–₹4,500 excluding accommodation" />

            <DayCard day="Day 3" title="Rohtang Pass (3,978m) — The Snow Pass"
              items={[
                "5:30am: Depart Old Manali. Shared taxi to Rohtang (51km, ₹400–₹600/seat) or private cab (₹2,500–₹3,500 return). Leave BEFORE 6am — traffic after 9am is severe. 2-hour drive up.",
                "7:30am: Arrive Rohtang Pass. The pass is empty at this hour — the day-trippers haven't arrived yet. Snow-covered plateau at 3,978m, surrounded by Himalayan peaks. Lahaul Valley opens on the other side.",
                "9:00am: Snow activities at Rohtang — sledging, snowball fights, hot chai from a roadside stall (₹30). Do NOT rent the colourful snow suits (₹400–₹600) — bring your own warm layers.",
                "11:00am: Start return. Traffic builds from noon — the single-lane road becomes a car park. Return by 1pm is essential.",
                "2:00pm: Lunch at Manali. Rest. The altitude and cold tire you out more than you expect.",
                "5:00pm: Manali town market for shopping — Himachali shawls, dry fruits, apple jam (all significantly cheaper than Delhi). Pashmina start at ₹1,500 for genuine.",
                "Alternative if Rohtang closed: Atal Tunnel → Sissu. Free, no permit. Snow on the other side.",
              ]}
              cost="₹1,500–₹3,500 excluding accommodation" />

            <DayCard day="Day 4" title="Kasol + Manikaran Day Trip (Parvati Valley)"
              items={[
                "7:30am: Shared taxi or HRTC bus Old Manali → Kasol (76km, 2.5 hours, ₹300–₹400/seat). The Parvati Valley drive is extraordinarily beautiful — river gorge, forests, terraced fields.",
                "10:00am: Arrive Kasol. Walk the village — small Israeli-influenced settlement on the Parvati River. Jim Morrison Cafe (budget, river view). Evergreen Cafe (₹150–₹300/meal, best hummus in Himachal).",
                "12:00pm: Manikaran Sahib Gurudwara — 5km from Kasol. Natural hot springs INSIDE the gurudwara complex. Free langar (community meal). One of the most spiritual experiences in Himachal. Mandatory stop.",
                "2:00pm: Lunch in Kasol. Walk the riverside trail. Buy dried herbs and locally-made goods at the market.",
                "4:30pm: Return to Manali. Shared taxi or bus (last buses around 5pm). Arrive by 7pm.",
                "8:00pm: Dinner in Old Manali. Apple cider at any cafe — Manali is apple country.",
              ]}
              cost="₹800–₹1,500 excluding accommodation" />

            <DayCard day="Day 5" title="Hadimba Temple + Naggar Castle + Depart"
              items={[
                "7:00am: Hadimba Devi Temple — 5 minutes by auto from Old Manali (₹30). Ancient 16th-century wooden temple in cedar forest. Go at 7am before tourists arrive. The cedar forest atmosphere in morning mist is extraordinary. ₹30 entry.",
                "9:00am: Drive or taxi to Naggar Castle (22km, ₹500–₹800 return by taxi). 15th-century stone and wood castle, now a heritage hotel. ₹100 entry. Nicholas Roerich Art Gallery nearby (₹50). Mountain views from the terrace.",
                "12:00pm: Return to Manali. Lunch at Chopsticks (Tibetan — momos and thukpa, ₹150–₹250). Or Johnson's Cafe for continental (₹300–₹500).",
                "2:00pm: Last shopping at Manali market. Buy apples, apricot jam, Himachali rajma, dry fruits — significantly cheaper than anywhere else in India.",
                "5:00pm: Overnight Volvo departs for Delhi from Mall Road bus stand (₹900–₹1,800). Arrives Delhi 7–9am next day.",
                "Alternative: extend one more day for Chandratal Lake via Atal Tunnel (full day, 230km return from tunnel exit, only May–October) or the Beas Kund Trek (14km, glacial lake at 3,700m, camping overnight).",
              ]}
              cost="₹800–₹1,800 excluding accommodation" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 5-Day Cost (per person) {"·"} </span>
              <span className="font-serif text-base text-ink font-light">₹8,000–₹15,000 budget · ₹18,000–₹30,000 mid-range</span>
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
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">{"\uD83C\uDFD2"} Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">{"☕"} Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">{"\uD83C\uDFD4"} Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["\uD83D\uDE8C Transport (Delhi return Volvo)", "₹1,800–₹3,600", "₹3,600–₹7,200", "₹5,000–₹10,000"],
                    ["\uD83C\uDFE8 Accommodation (5N)", "₹2,000–₹4,000", "₹7,500–₹15,000", "₹15,000–₹35,000"],
                    ["\uD83D\uDE97 Local Transport (all days)", "₹1,500–₹2,500", "₹4,000–₹7,000", "₹8,000–₹15,000"],
                    ["\uD83C\uDF7D Food & Drinks", "₹1,500–₹2,500", "₹3,500–₹6,000", "₹6,000–₹12,000"],
                    ["\uD83C\uDFAF Rohtang Permit + Activities", "₹1,500–₹3,000", "₹3,000–₹6,000", "₹6,000–₹12,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 5 days)</td>
                    {["₹8,000–₹15,000", "₹18,000–₹30,000", "₹42,000–₹80,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. Budget assumes overnight Volvo bus, hostel/guesthouse in Old Manali, shared taxis, and street food. Rohtang permit ₹550 applies to all budget levels. Flights to Bhuntar (Kullu) add ₹4,000–₹10,000 vs bus.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Manali"
            hotels={[
              { name: "The Himalayan", type: "Luxury · Forest setting", price: "From ₹7,000/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/searchresults.html?ss=Manali+luxury&aid=2820480" },
              { name: "Johnson Lodge", type: "Mid-range · Old Manali", price: "From ₹3,000/night", rating: "4", badge: "Old Manali", url: "https://www.booking.com/searchresults.html?ss=Old+Manali&aid=2820480" },
              { name: "Zostel Manali", type: "Hostel · Old Manali", price: "From ₹400/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.html?ss=Zostel+Manali&aid=2820480" },
            ]}
            activities={[
              { name: "Solang Valley Snow Activities", duration: "Full day", price: "From ₹800/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=manali&partner_id=PSZA5UI" },
              { name: "Rohtang Pass Day Trip", duration: "Full day", price: "From ₹1,200/person", badge: "Iconic", url: "https://www.getyourguide.com/s/?q=manali&partner_id=PSZA5UI" },
              { name: "Paragliding at Solang Valley", duration: "15 mins", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=manali&partner_id=PSZA5UI" },
              { name: "Kasol + Manikaran Day Trip", duration: "Full day", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=manali&partner_id=PSZA5UI" },
            ]}
          />

          {/* ── DESTINATION GALLERY ── */}
          <DestinationGallery
            title="Manali — Snow, Cedar & Mountain Cafes"
            subtitle="From 2,050m valley floor to 3,978m Rohtang Pass."
            spots={[
              { name: "Solang Valley Snow", query: "solang valley manali snow mountains skiing himachal pradesh india", desc: "India's most popular snow destination — skiing, sledging, paragliding at 2,480m. 14km from Manali." },
              { name: "Rohtang Pass", query: "rohtang pass manali snow mountains himachal pradesh pass road", desc: "3,978m mountain pass with panoramic views. Snow even in summer. The Lahaul Valley opens on the other side." },
              { name: "Old Manali Cafes", query: "old manali cafe rooftop mountain view himachal pradesh india pizza", desc: "3km uphill from Mall Road — the real Manali. Apple orchards, wood-fired pizza, mountain sunsets." },
              { name: "Hadimba Temple", query: "hadimba devi temple manali cedar forest ancient wooden pagoda", desc: "Ancient 16th-century wooden temple in cedar forest. Peaceful at dawn before tourists arrive." },
              { name: "Parvati Valley (Kasol)", query: "kasol parvati valley river himachal mountains cafe green bridge", desc: "76km from Manali — the most relaxed village in Himachal, on the Parvati River." },
            ]}
          />

          {/* ── OLD MANALI IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="old manali cafe rooftop mountain view apple orchard himachal"
              alt="Cafe rooftop in Old Manali with mountain view and apple orchards"
              width={860} height={440}
              className="w-full object-cover h-72 md:h-[380px]"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Old Manali — 3km uphill from Mall Road. This is where the cafes, the apple orchards, the mountain views and the actual Manali experience happen. Stay here.
              </p>
            </div>
          </div>

          {/* ── ROHTANG PASS — COMPLETE GUIDE (deep-dive) ── */}
          <section id="rohtang" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFD4"} Rohtang Pass Permit — The Complete Walkthrough</h2>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-blue-800 mb-3 flex items-center gap-2">
                  {"\uD83D\uDCBB"} How to Book the Rohtang Permit
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Website:</strong> rohtangpermit.com (official portal). This is the ONLY legitimate source. Ignore anyone selling permits offline.</p>
                  <p><strong className="text-ink">When to book:</strong> Permits for tomorrow become available at 8pm today. On weekends and holidays, they sell out by 11pm. Book the evening before, not the morning of.</p>
                  <p><strong className="text-ink">Cost:</strong> ₹550 for petrol vehicles. ₹650 for diesel. Plus ₹50 congestion fee. Per vehicle, not per person.</p>
                  <p><strong className="text-ink">What you need:</strong> Vehicle registration number (must match exactly), driver name, passenger count. Print the permit or keep a clear screenshot.</p>
                  <p><strong className="text-ink">Limit:</strong> 1,200 vehicles per day. Non-negotiable. If permits are sold out, you cannot go. This is a hard environmental limit.</p>
                  <p><strong className="text-ink">Checkpoint:</strong> Gulaba checkpoint (14km from Manali) checks every vehicle. No permit = turned back. No exceptions.</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3 flex items-center gap-2">
                  {"\uD83D\uDCC5"} When Rohtang Is Open
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Open:</strong> Typically May to October, weather permitting. The exact opening date depends on snow clearance (usually late April or early May).</p>
                  <p><strong className="text-ink">Closed:</strong> November to April (heavy snow). Closed every Tuesday for maintenance. Closed during heavy snowfall or rain at any time.</p>
                  <p><strong className="text-ink">Best months:</strong> May–June (snow + sunshine). September–October (clear views, less traffic). July–August is monsoon — road can be dangerous, landslides common.</p>
                  <p><strong className="text-ink">Current status:</strong> Check himachalservices.nic.in or call the DC Kullu office before planning your day.</p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-green-800 mb-3 flex items-center gap-2">
                  {"\uD83C\uDFD4"} The Atal Tunnel Alternative
                </h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">What it is:</strong> 9.02km tunnel (opened 2020) connecting Manali to Sissu in Lahaul Valley — bypassing Rohtang Pass entirely. The world&apos;s longest highway tunnel above 3,000m.</p>
                  <p><strong className="text-ink">Permit:</strong> None needed. Free to drive through. Open year-round (unlike Rohtang).</p>
                  <p><strong className="text-ink">What you see:</strong> Sissu village on the other side has snow, waterfalls, and Himalayan views. Dramatically different landscape from the Manali side. 10 minutes from tunnel exit to Sissu.</p>
                  <p><strong className="text-ink">Extension:</strong> From Sissu, Chandratal Lake is 115km further (4 hours). Only accessible May–October. One of India&apos;s most beautiful high-altitude lakes at 4,300m. Camping overnight is extraordinary.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── ROUTE MAPS ── */}
          <div className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDDFA\uFE0F"} Route Maps — Day by Day</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              All 5 days radiate from Old Manali. Save these Google Maps links — signal is unreliable on Rohtang and Parvati Valley roads.
            </p>
            <div className="space-y-4">
              <RouteCard plan="Day 1" day="Old Manali → Manu Temple → Vashisht → Jogini Falls"
                stops={["Old Manali 10am","Manu Temple 10:30am","Vashisht Springs 3pm","Jogini Falls 5pm","Old Manali 7pm"]}
                distance="8km · walking" note="Day 1 is deliberately local and gentle — you arrived at 6am by overnight bus. Don't try to fit Solang or Rohtang on arrival day."
                color="border-amber-200 bg-amber-50"
                url="https://www.google.com/maps/dir/Old+Manali/Manu+Temple+Manali/Vashisht+Hot+Springs/Jogini+Falls+Manali" />
              <RouteCard plan="Day 2" day="Old Manali → Solang Valley → Paragliding → Return"
                stops={["Old Manali 7:30am","Solang Valley 8:30am","Skiing/Paragliding 9am","Return 1pm","Old Manali 2pm"]}
                distance="28km return · shared taxi" note="Arrive Solang by 8:30am — queues for skiing and paragliding double by 10am. Return early to avoid the afternoon traffic jam on the single-lane road."
                color="border-blue-200 bg-blue-50"
                url="https://www.google.com/maps/dir/Old+Manali/Solang+Valley+Manali" />
              <RouteCard plan="Day 3" day="Old Manali → Rohtang Pass → Return"
                stops={["Old Manali 5:30am","Gulaba Checkpoint 6:30am","Rohtang Pass 7:30am","Return 11am","Old Manali 1pm"]}
                distance="102km return · taxi/shared" note="Leave BEFORE 6am. Traffic after 9am turns the return into a 3-hour crawl. Book permit the previous evening at rohtangpermit.com."
                color="border-teal-200 bg-teal-50"
                url="https://www.google.com/maps/dir/Old+Manali/Rohtang+Pass" />
              <RouteCard plan="Day 4" day="Old Manali → Kasol → Manikaran → Return"
                stops={["Old Manali 7:30am","Kasol 10am","Manikaran 12pm","Kasol lunch 2pm","Old Manali 7pm"]}
                distance="152km return · bus/taxi" note="The Parvati Valley drive is half the experience — river gorge, forests, terraced fields. Last bus from Kasol around 5pm."
                color="border-emerald-200 bg-emerald-50"
                url="https://www.google.com/maps/dir/Old+Manali/Kasol/Manikaran+Sahib/Old+Manali" />
            </div>
          </div>

          {/* ── ROHTANG IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="rohtang pass snow mountains himachal pradesh road cars snow plateau"
              alt="Rohtang Pass snow-covered plateau at 3,978m, Himachal Pradesh"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Rohtang Pass at 3,978m — arrive by 7:30am before the day-trippers. Online permit required: ₹550 + ₹50 congestion fee. Only 1,200 vehicles/day.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Staying on Mall Road", desc: "Mall Road is traffic jams, souvenir shops and tour operators shouting at you. Old Manali — 3km uphill — is where the cafes, the views, the apple orchards and the actual experience happens. Every repeat visitor stays in Old Manali.", icon: "\uD83C\uDFE8" },
                { title: "Not booking the Rohtang permit in advance", desc: "1,200 permits per day. On weekends they sell out by 11pm the previous night. Book at rohtangpermit.com the evening before. The permit must match your vehicle's registration number exactly.", icon: "\uD83D\uDCCB" },
                { title: "Arriving at Solang Valley after 10am", desc: "Queues for skiing and paragliding stretch 1–2 hours by midday on weekends. Arrive by 8am. Better snow, no lines, better light for photos. Leave by 1pm to avoid the return traffic.", icon: "\u23F0" },
                { title: "Renting the colourful snow suits", desc: "The bright snow suits rented near Solang Valley (₹400–₹600) are overpriced, uncomfortable and unnecessary. Bring thermals, a fleece and a waterproof outer layer — warmer, costs nothing extra.", icon: "\uD83E\uDDE5" },
                { title: "Visiting July–August", desc: "Peak monsoon. Flash floods, landslides, Rohtang closed, Manali–Delhi highway blocked regularly. The Beas River can swell dangerously. Not worth the risk. Come December–June or October.", icon: "\uD83C\uDF27" },
                { title: "Driving to Rohtang after 9am", desc: "The Rohtang road is single-lane above Gulaba. After 9am, the return traffic from the pass meets the ascending traffic and the entire road becomes a car park. Leave at 5:30am. Return by 11am. Non-negotiable.", icon: "\uD83D\uDE97" },
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
                { icon: "\uD83C\uDFD4", title: "Atal Tunnel Is Free and Always Open", desc: "The 9.02km Atal Tunnel bypasses Rohtang completely. No permit, free to drive through. Sissu village on the other side has snow views and waterfalls. Worth doing even if you also do Rohtang.", color: "bg-blue-50 border-blue-200" },
                { icon: "\uD83D\uDC1F", title: "Eat the Beas Trout", desc: "The Beas River is a trout river. Several restaurants in Old Manali and Vashisht serve fresh Beas trout — ₹250–₹450 for a whole fish. Far better than anything on Mall Road.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83C\uDF41", title: "October Is Underrated", desc: "Off-season October: golden deodar forests, clear mountain views, half the tourists, 20–30% lower hotel prices, no Rohtang crowds (it may close). The best month for photography.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF4E", title: "Buy Apples and Dry Fruits at Source", desc: "Manali is apple country. Buy directly from orchardists in Old Manali or at the town market — 40–60% cheaper than Delhi. Also: apricot jam, Himachali rajma, walnut kernels, pine nuts.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDEB6", title: "Walk to Old Manali, Don't Auto", desc: "The 3km uphill walk from Mall Road to Old Manali follows the Manalsu stream through cedar forest. Takes 40 minutes. More beautiful than any paid attraction. Free.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "\uD83D\uDE8C", title: "Book the Volvo, Not the Semi-Sleeper", desc: "Delhi–Manali is 540km, 14–16 hours overnight. The HRTC Volvo AC (₹1,200–₹1,800) is worth every extra rupee over the semi-sleeper (₹900). You arrive functional, not destroyed.", color: "bg-emerald-50 border-emerald-200" },
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
              Tell us your dates, group size, and budget — we&apos;ll plan your Manali trip including Rohtang permits, accommodation and transport. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Manali Trip {"\u2192"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"\u2192"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is the best time to visit Manali?", a: "December–February for snow sports at Solang Valley. March–June for pleasant weather and Rohtang access. October–November is underrated — golden forests, fewer crowds, 20–30% cheaper. Avoid July–August (monsoon, landslides, Rohtang closed)." },
                { q: "Is the Rohtang Pass permit required?", a: "Yes. Book online at rohtangpermit.com the evening before. ₹550 (petrol) or ₹650 (diesel) + ₹50 congestion fee. Only 1,200 vehicles per day. Gulaba checkpoint turns back every vehicle without a permit." },
                { q: "What is Old Manali and why stay there?", a: "Old Manali is the original village, 3km uphill from Mall Road. It has the best cafes (Cafe 1947, Dylan's, The Lazy Dog), apple orchards, mountain views and relaxed atmosphere. Mall Road is noisy and tourist-heavy. Every experienced Manali visitor stays in Old Manali." },
                { q: "How do I get to Manali from Delhi?", a: "Overnight Volvo AC bus from Kashmere Gate ISBT — ₹1,200–₹1,800, 14–16 hours, departs 5–7pm, arrives 7–9am. Book at hrtchp.com or RedBus. By car: 540km, 10–12 hours. By air: fly to Bhuntar/Kullu (50km from Manali, ₹4,000–₹10,000) — flights are weather-dependent and sometimes cancelled." },
                { q: "How much does a 5-day Manali trip cost?", a: "Budget: ₹8,000–₹15,000 per person (Volvo bus, hostel in Old Manali at ₹400–₹800/night, street food, shared taxis). Mid-range: ₹18,000–₹30,000 (private rooms, restaurant meals, private taxis). Rohtang permit ₹550 applies to all." },
                { q: "Is Kasol worth a day trip from Manali?", a: "Yes. 76km (2.5 hours each way). The Parvati Valley drive is beautiful. Kasol has great cafes (Evergreen, Jim Morrison), a relaxed river vibe, and Manikaran Sahib Gurudwara (hot springs, free langar) is 5km further. Totally different energy from Manali." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">More Himachal & Mountain Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kasol — 3 Day Parvati Valley Guide", href: "/blog/kasol-3-days" },
                { label: "Shimla — 3 Day Colonial Hill Station", href: "/blog/shimla-3-days" },
                { label: "Spiti Valley — 7 Day Circuit", href: "/blog/spiti-valley-7-days" },
                { label: "Leh Ladakh — 7 Day Road Trip", href: "/blog/leh-ladakh-7-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View {"\u2192"}</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="manali-5-days" />

          {/* ── MORE RESOURCES ── */}
          <div className="max-w-[860px] mx-auto px-6 md:px-8 mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Manali trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-manali", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/manali-trip-cost-couple", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-manali", label: "How to get there", icon: "✈️" },
                { href: "/blog/manali-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <RelatedGuides currentSlug="manali-5-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
