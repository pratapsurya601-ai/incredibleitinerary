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

const TIRUPATI_TOC = [
  { id: "decision",      emoji: "⚡",  label: "Which Pilgrim Are You?" },
  { id: "darshan-guide", emoji: "🛕",  label: "Darshan Guide" },
  { id: "itinerary",     emoji: "📅",  label: "2-Day Itinerary" },
  { id: "budget",        emoji: "💰",  label: "Budget Breakdown" },
  { id: "what-to-wear",  emoji: "👗",  label: "Dress Code" },
  { id: "prasadam",      emoji: "🍬",  label: "Prasadam & Food" },
  { id: "mistakes",      emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",          emoji: "💡",  label: "Pro Tips" },
  { id: "faq",           emoji: "❓",  label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Tirupati 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Tirupati in 2 Days — Complete Darshan Guide&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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
        <span className="text-muted text-lg">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="p-5">
          <ul className="space-y-2.5 mb-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted font-light leading-relaxed">
                <span className="text-amber-800 mt-1 flex-shrink-0 text-xs">●</span>
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
export default function TirupatiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TIRUPATI_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Tirupati" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="tirupati tirumala temple andhra pradesh india pilgrimage"
            alt="Tirumala Venkateswara Temple Tirupati Andhra Pradesh"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Tirupati 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  South India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Tirupati in 2 Days: Complete Darshan Guide
                <em className="italic text-gold-light"> (Timings, Booking & Budget)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                The most visited religious site on earth — 80,000+ pilgrims daily. How to book Sudarshan Darshan online, what to wear, where to stay, and how to avoid the worst queues. Budget ₹2,000–4,000 total.
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
              <span>🇮🇳 Andhra Pradesh, India</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,000</span>
            </div>
          </div>

          {/* Intro quote */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Tirumala Venkateswara Temple receives more visitors than the Vatican and Mecca combined on peak days. The queue for free darshan can stretch 12+ hours. This guide tells you exactly how to navigate it — what to book, when to go, what to wear, and how to make the most of 48 hours at India&apos;s most sacred hill shrine.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Pilgrim Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Choose your darshan type — it determines your entire schedule.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🙏", label: "Sarva Darshan", sub: "Free · 4–14 hour queue", desc: "The traditional way — join the general queue. No booking required but plan for a very long wait.", color: "border-amber-200 hover:border-amber-400", id: "darshan-guide" },
                { emoji: "🎫", label: "Sudarshan Darshan", sub: "₹300 · 3–5 hour wait", desc: "Book online at tirupatibalaji.ap.gov.in — far shorter queue, specific time slot assigned.", color: "border-teal-200 hover:border-teal-400", id: "darshan-guide" },
                { emoji: "⭐", label: "Special Entry", sub: "₹3,000 · 1–2 hour wait", desc: "Walk-in or online booking — significantly faster, dedicated queue. Worth it to save half a day.", color: "border-emerald-200 hover:border-emerald-400", id: "darshan-guide" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Guide →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── DARSHAN GUIDE ── */}
          <section id="darshan-guide" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 The Darshan Guide — Everything You Need to Know</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The Tirumala Tirupati Devasthanams (TTD) manages all aspects of the pilgrimage. Here is the complete breakdown of every darshan type.
            </p>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">Sarva Darshan — Free Queue</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Cost:</strong> Free</p>
                  <p><strong className="text-ink">Wait time:</strong> 4 hours (quiet weekdays) to 14+ hours (weekends, festivals)</p>
                  <p><strong className="text-ink">How to access:</strong> Walk directly to Tirumala — no booking needed. Join the Sarva Darshan queue at the token distribution point.</p>
                  <p><strong className="text-ink">Reality check:</strong> The queue halls can be kilometres long. You stand in enclosed, air-conditioned (partially) queues for hours. Bring water, snacks, and a small folding mat. The TTD provides water and basic amenities along the route.</p>
                  <p><strong className="text-ink">Best days:</strong> Tuesday, Wednesday, Thursday — avoid weekends and all major Hindu festivals entirely.</p>
                  <p><strong className="text-ink">The darshan itself:</strong> You get approximately 30 seconds in front of the idol. The crowd pressure is immense — devotees move forward in a controlled surge. Focus entirely on the moment.</p>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">Sudarshan Darshan — ₹300 Online Booking</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Cost:</strong> ₹300 per person</p>
                  <p><strong className="text-ink">Wait time:</strong> 3–5 hours from your assigned slot time</p>
                  <p><strong className="text-ink">Booking:</strong> Online at tirupatibalaji.ap.gov.in — slots open up to 3 months in advance. Weekend slots are released at 10am and sell out within minutes. Book on weekday mornings when competition is lower.</p>
                  <p><strong className="text-ink">What you need:</strong> Valid ID proof (Aadhaar, passport), mobile number for OTP. Up to 6 family members can be booked in one session.</p>
                  <p><strong className="text-ink">On the day:</strong> Arrive at the designated Sudarshan Darshan counter at Tirumala 30 minutes before your slot time with printed confirmation and ID. The queue is separate from Sarva Darshan.</p>
                  <p><strong className="text-ink">Cancellation:</strong> Refundable up to 48 hours before the slot — TTD has an online cancellation portal.</p>
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-emerald-800 mb-3">Special Entry Darshan — ₹3,000 (Fastest)</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Cost:</strong> ₹3,000 per person</p>
                  <p><strong className="text-ink">Wait time:</strong> Usually 1–2 hours</p>
                  <p><strong className="text-ink">Booking:</strong> Available online at tirupatibalaji.ap.gov.in or at TTD counters at Tirupati railway station, bus stand, and at Tirumala.</p>
                  <p><strong className="text-ink">Advantage:</strong> A completely separate, much shorter queue. If your time is limited or you are travelling with elderly family members, this is the most practical option.</p>
                  <p><strong className="text-ink">Note:</strong> Even at ₹3,000, you still get 30 seconds in front of the idol — the experience is the same, only the waiting time differs. No private or extended darshan at any price point.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Non-Hindu visitors:</strong> The Venkateswara sanctum sanctorum is open only to Hindus. At the Mahadwaram (main gate) entry, there is a self-declaration counter. Non-Hindu visitors can explore the outer complex — Pushkarini tank, the gopuram towers, and the surrounding hills — but cannot enter the inner temple.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="📅" label="Best Time" value="Year-round (avoid holidays)" />
            <StatCard icon="⛰️" label="Altitude (Tirumala)" value="852m" />
            <StatCard icon="🚗" label="From Chennai" value="140km · 3hrs" />
            <StatCard icon="🛕" label="Daily Pilgrims" value="80,000+" />
          </div>

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 2-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Base yourself in Tirupati town (lower town). All buses to Tirumala depart from Tirupati Central Bus Stand.
            </p>

            <DayCard
              day="Day 1"
              title="Tirumala — Darshan & Temple Complex"
              items={[
                "Arrive at Tirupati base town by 5:30–6am if doing Sarva Darshan (free queue). If you have Sudarshan Darshan booked, check your slot time and plan accordingly.",
                "Take APSRTC shared bus from Tirupati Central Bus Stand to Tirumala — ₹60 per person, 30–40 minutes through 15km of continuous hairpin bends. Buses run every few minutes 24 hours a day.",
                "Darshan queues: Sarva Darshan (free, 4–14 hours depending on day) joins the main queue complex. Sudarshan Darshan (₹300) has a dedicated counter — shorter queue of 3–5 hours. Special Entry (₹3,000) is fastest at 1–2 hours.",
                "Queue halls: The Tirumala queue complex is one of the most sophisticated crowd management systems in the world — air-conditioned sections, numbered queue channels, TTD staff managing flow at every junction. Carry a small water bottle, light snacks, and a folding mat.",
                "Darshan moment: After hours of queuing, you enter the main sanctum. You have approximately 30 seconds in front of Lord Venkateswara — the idol is adorned with gold and jewels, and the atmosphere is overwhelming. Priests will guide you through quickly.",
                "After darshan: Exit via the Prasadam counter — collect your Tirumala Laddoo (₹50 per packet, maximum 2 packets per person). Do not skip this.",
                "Explore Tirumala complex: Swami Pushkarini tank (sacred, devotees take ritual bath), Ranganayaka Mandapam (outer courtyard with carvings), and the main gopuram tower.",
                "Akasaganga waterfall (2km from the temple): A short walk or auto ride — where the Pushkarini tank is said to originate. Peaceful, green, and often less crowded.",
                "Papavinasam waterfall (4km from temple): Where devotees wash away sins — a ritual bath spot in the hills.",
                "Evening: Return to Tirupati base town by 6–7pm. Dinner at TTD canteen or local restaurant — vegetarian thali ₹80–150.",
              ]}
              cost="₹500–₹700 (bus + darshan ticket + prasadam + food)" />

            <DayCard
              day="Day 2"
              title="Tirupati Base Town — Govindaraja Temple, Kapila Theertham & Shopping"
              items={[
                "Morning: Govindaraja Swami Temple in Tirupati base town — the most important temple in the lower town. This 12th-century Vaishnavite temple is dedicated to Lord Govindaraja and is far less crowded than Tirumala. Free entry. Allow 1–1.5 hours.",
                "Kapila Theertham waterfall (7km from Tirupati): Where Lord Shiva is said to reside in the form of Kapileswara. A small, serene waterfall tucked at the base of the Tirumala hills — easily the most peaceful spot in the Tirupati circuit. The Kapileswara Swami temple here is ancient and undisturbed by tourist crowds.",
                "Sri Venkateswara Zoological Park (10km from city): Entry ₹30. One of the better small zoos in South India — well-maintained enclosures, good variety of animals including tigers, leopards, and indigenous species. Allow 2 hours.",
                "Chandragiri Fort (11km from Tirupati): 16th-century Vijayanagara empire fort with a palace complex. Entry ₹25 (ASI). Good views from the fort walls. The Raja Mahal inside has an interesting museum.",
                "Afternoon: Tirupati Railway Station area for shopping — Pottu Bazaar has the best selection of religious items, silk sarees, sandalwood products, and spiritual gifts. Tirupati is a good place to buy Kanjivaram silk direct.",
                "Alipiri footpath (if time and energy permit): The traditional devotee foot route from Tirupati base to Tirumala — 15km, 4–5 hours uphill. Many pilgrims do this barefoot as an act of devotion. You can experience the first section even if not going all the way.",
                "Depart Tirupati — Tirupati Junction railway station has good connectivity to Chennai (3 hours), Bangalore (4 hours), and Hyderabad (9 hours).",
              ]}
              cost="₹300–₹600 (entry fees + transport + meals)" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 2-Day Cost (per person) · </span>
              <span className="font-serif text-base text-ink font-light">₹2,000–₹4,000 budget · ₹6,000–₹10,000 mid-range</span>
            </div>
          </section>

          {/* ── BUDGET TABLE ── */}
          <section id="budget" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-ink">
                    <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                    <th className="p-3.5 text-xs font-medium text-amber-300 text-center">🌾 Budget</th>
                    <th className="p-3.5 text-xs font-medium text-teal-300 text-center">🏔 Mid-Range</th>
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">⭐ Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (2N)", "₹400–₹800 (TTD free / base hotel)", "₹1,600–₹3,000", "₹4,000–₹8,000"],
                    ["🍽 Food (2 days)", "₹300–₹500 (TTD canteen)", "₹700–₹1,200", "₹1,500–₹2,500"],
                    ["🚌 Transport (bus Tirupati↔Tirumala)", "₹120 (bus both ways)", "₹400–₹600 (taxi)", "₹800–₹1,200 (private cab)"],
                    ["🛕 Darshan Ticket", "Free (Sarva)", "₹300 (Sudarshan)", "₹3,000 (Special Entry)"],
                    ["🍬 Prasadam Laddoo (2 packets)", "₹100", "₹100", "₹100"],
                    ["🎯 Entry Fees (Zoo, Fort)", "₹55", "₹55", "₹55"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 2 days)</td>
                    {["₹975–₹1,575", "₹3,155–₹5,255", "₹9,455–₹13,855"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. TTD free accommodation available for Hindu pilgrims — apply online at tirupatibalaji.ap.gov.in. Tirumala TTD guesthouses ₹200–₹2,000/night depending on category. Budget estimates above use base town hotels. Laddoo prasadam ₹50/packet, max 2 per person.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Tirupati"
            hotels={[
              { name: "Hotel Bhimas Residency", type: "Hotel · Tirupati Base Town", price: "From ₹900/night", rating: "4", badge: "Top pick", url: "https://www.booking.com/searchresults.en-gb.html?ss=tirupati+hotel&aid=2820480" },
              { name: "TTD Guesthouse Tirumala", type: "TTD Accommodation · Tirumala Hills", price: "From ₹200/night", rating: "3", badge: "Budget", url: "https://tirupatibalaji.ap.gov.in" },
              { name: "Fortune Select Grand Ridge", type: "Hotel · Tirupati", price: "From ₹3,500/night", rating: "5", badge: "Premium", url: "https://www.booking.com/searchresults.en-gb.html?ss=tirupati+luxury+hotel&aid=2820480" },
            ]}
            activities={[
              { name: "Tirupati Temple Darshan Guided Tour", duration: "Full day", price: "From ₹1,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=tirupati+temple+tour&partner_id=PSZA5UI" },
              { name: "Chandragiri Fort Heritage Walk", duration: "3 hours", price: "From ₹400/person", badge: "Heritage", url: "https://www.getyourguide.com/s/?q=tirupati+day+tour&partner_id=PSZA5UI" },
            ]}
            pdfProductId="tirupati-2-days-pdf"
          />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Tirupati — Temple & Pilgrimage Highlights"
            subtitle="From the sacred Tirumala hills to the tranquil Pushkarini tank — Tirupati&apos;s spiritual landscape."
            spots={[
              { name: "Tirumala Temple Tower", query: "tirumala venkateswara temple tower gopuram andhra pradesh", desc: "The 52.92-metre Ananda Nilayam Vimana tower over the main sanctum — covered in gold, visible from kilometres away across the Tirumala hills." },
              { name: "Pushkarini Sacred Tank", query: "swami pushkarini tank tirumala tirupati sacred bath", desc: "The sacred tank at the heart of the Tirumala complex. Devotees take ritual baths here before darshan. The tank is said to have originated at Akasaganga spring." },
              { name: "Tirumala Hill Road", query: "tirumala ghat road hairpin bends andhra pradesh hills", desc: "The 15km mountain road from Tirupati to Tirumala with continuous hairpin bends through dense Seshachalam forest. A dramatic approach to the sacred hill." },
              { name: "Kapila Theertham", query: "kapila theertham waterfall tirupati shiva temple", desc: "A small, sacred waterfall at the base of the Tirumala hills — one of the most serene spots in the entire Tirupati circuit, far from the main temple crowds." },
              { name: "Chandragiri Fort", query: "chandragiri fort tirupati vijayanagara empire palace", desc: "16th-century Vijayanagara fort with Raja Mahal palace — evidence of the empire that patronised and expanded the Tirumala temple complex." },
            ]}
          />

          {/* ── DRESS CODE ── */}
          <section id="what-to-wear" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">👗 Dress Code — Strictly Enforced</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
              <p className="font-medium text-sm text-red-800 mb-2">⚠️ This is not optional — violators are turned away at the gate</p>
              <p className="text-xs text-red-700 font-light leading-relaxed">
                The dress code is checked at entry to the queue areas at Tirumala. If you are not dressed correctly, you will not be permitted to enter — regardless of how long you have travelled or what darshan ticket you hold. There are no exceptions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-green-800 mb-3">✓ Allowed Attire</h3>
                <ul className="space-y-2 text-xs text-muted font-light">
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">●</span><span><strong className="text-ink">Men:</strong> Dhoti (veshti) alone, or shirt + dhoti/lungi combination. Traditional kurta-pyjama is also accepted.</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">●</span><span><strong className="text-ink">Women:</strong> Saree, salwar kameez with dupatta, or churidar. Half-saree is accepted.</span></li>
                  <li className="flex items-start gap-2"><span className="text-green-600 mt-0.5">●</span><span><strong className="text-ink">Rental available:</strong> Dhotis and sarees can be rented near the Tirumala gate — ₹50–100 per item. Stock up on these if arriving without appropriate dress.</span></li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-red-800 mb-3">✗ Not Allowed</h3>
                <ul className="space-y-2 text-xs text-muted font-light">
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">●</span><span>Jeans, trousers, or shorts for any gender</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">●</span><span>Sleeveless tops or blouses (women must have full or 3/4 sleeves)</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">●</span><span>Short skirts or knee-length skirts</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">●</span><span>Shorts for men</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">●</span><span>Leather items (belts, bags, shoes with leather components) — confiscated at entry. Leave leather at your accommodation.</span></li>
                  <li className="flex items-start gap-2"><span className="text-red-600 mt-0.5">●</span><span>Non-vegetarian food inside the Tirumala complex</span></li>
                </ul>
              </div>
            </div>
          </section>

          {/* ── PRASADAM & FOOD ── */}
          <section id="prasadam" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍬 Prasadam & Food at Tirumala</h2>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">Tirumala Laddoo — India&apos;s Most Famous Prasadam</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Price:</strong> ₹50 per packet (175g). Maximum 2 packets per person after darshan.</p>
                  <p><strong className="text-ink">GI-tagged:</strong> The Tirumala Laddoo has a Geographical Indication tag — the exact recipe and preparation methods are controlled by TTD. The laddoo made at Tirumala cannot legally be called &quot;Tirumala Laddoo&quot; anywhere else.</p>
                  <p><strong className="text-ink">Ingredients:</strong> Besan (gram flour), sugar, ghee, cashews, raisins, and cardamom — the proportions are TTD&apos;s closely guarded secret. Made in the laddu potu (prasadam kitchen) which produces 2.5–3 lakh laddoos daily.</p>
                  <p><strong className="text-ink">Warning:</strong> Outside sellers near the temple approach roads sell fake laddoos claiming to be &quot;TTD prasadam.&quot; Only buy from the official TTD Prasadam counter post-darshan. Authentic laddoos have a TTD seal on the packet.</p>
                  <p><strong className="text-ink">Additional prasadam:</strong> You can also purchase peda (milk sweet), vada, and dosakai (cucumber sweet) at TTD counters.</p>
                </div>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">Annadanam — Free Meals for 50,000+ People Daily</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">What it is:</strong> TTD runs one of the world&apos;s largest free meal programmes — Annadanam serves simple, nutritious vegetarian meals to all pilgrims at Tirumala, 24 hours a day, 365 days a year.</p>
                  <p><strong className="text-ink">Meal:</strong> Rice, sambar, rasam, curd, pickle, and papad. Simple, hot, and filling. Served in a large hall with continuous sittings.</p>
                  <p><strong className="text-ink">How to access:</strong> Go to the Annadanam hall in Tirumala — it is signposted throughout the complex. No ticket or payment required. Open to all.</p>
                  <p><strong className="text-ink">TTD Canteen (paid):</strong> For those wanting more variety — TTD runs subsidised canteens throughout Tirumala with good-quality South Indian food at ₹35–₹80 per dish. Far cheaper than private restaurants in the complex.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Arriving at Tirumala without accommodation booked", desc: "Tirumala is a small hill town — accommodation is extremely limited. On weekends and festival days, every TTD guesthouse and private lodge fills completely. Book TTD accommodation online at tirupatibalaji.ap.gov.in 3 months in advance, or stay in Tirupati base town and commute by bus daily.", icon: "🏨" },
                { title: "Going on Ekadashi, Brahmotsavam, or major festivals", desc: "Ekadashi (the 11th day of the lunar fortnight) and Brahmotsavam (the annual 9-day festival) see queue times extend to 24+ hours or longer. These days have the highest spiritual significance but the worst practical experience for darshan. Check the TTD festival calendar before booking travel.", icon: "📅" },
                { title: "Wearing wrong clothes and getting turned away", desc: "The dress code is enforced strictly at the queue entry gates. Jeans, shorts, sleeveless tops — all will be rejected. You will not get a refund on your darshan ticket. Pack traditional clothing before leaving your hotel or rent at Tirumala gate (₹50–100) before joining the queue.", icon: "👗" },
                { title: "Not booking darshan online in advance", desc: "Walk-in Sarva Darshan is always available but the wait is 6–14 hours depending on the day. Sudarshan Darshan (₹300, book online) reduces this to 3–5 hours. If your time is limited, book Special Entry (₹3,000) for the 1–2 hour queue. Do not arrive at Tirumala expecting a quick darshan without planning.", icon: "🎫" },
                { title: "Bringing leather items to the temple", desc: "Leather items including leather belts, leather handbags, leather-soled shoes, and leather wallets are confiscated at the Tirumala entry gate. Leave all leather items at your accommodation in Tirupati base town. Wear fabric or rubber-soled footwear. You can use a fabric or plastic bag inside.", icon: "🚫" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "🌅", title: "Arrive at Tirumala Before 5am for Sarva Darshan", desc: "Queue lengths at 4–5am are dramatically shorter than at 8–9am. Night buses from Tirupati to Tirumala run all night. The queue halls are air-conditioned — an early start means you could complete darshan and be back at base town by noon.", color: "bg-amber-50 border-amber-200" },
                { icon: "📱", title: "Download the TTD Official App", desc: "The Tirumala Tirupati Devasthanams app lets you check live queue wait times at Sarva Darshan, check slot availability, and receive darshan confirmation. Essential for planning on the day.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏨", title: "Stay in Tirupati Base Town to Save Money", desc: "Base town hotels (₹800–₹1,500/night) are significantly cheaper than Tirumala accommodation. The bus from Tirupati to Tirumala takes only 30–40 minutes and runs 24 hours. For most pilgrims, base town stays are more practical.", color: "bg-teal-50 border-teal-200" },
                { icon: "🚌", title: "Use the TTD Free Bus Service for Head-Tonsuring", desc: "If you are getting a head tonsure (a common offering at Tirumala), TTD operates free buses to the Kalyana Katta tonsure complex from the Tirumala bus stand. The tonsure is free — the barbers are TTD employees. Over 40,000 people shave their heads here daily.", color: "bg-teal-50 border-teal-200" },
                { icon: "🎒", title: "Pack Light — Most Bags Are Checked", desc: "Large bags and backpacks are not allowed inside the temple queue. TTD has cloak rooms at the queue entry points (₹5–10 per bag). Bring only essentials: ID, darshan ticket, phone, water bottle (no food in sealed temple areas), and small offering.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🛍️", title: "Buy Silk Sarees in Tirupati Base Town", desc: "Tirupati is a major silk saree trading centre — both Kanjivaram and Uppada silk sarees are available. Government-run shops like APCO and Lepakshi have fixed prices and are reliable. Avoid street-side sellers near the temple approach.", color: "bg-emerald-50 border-emerald-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and darshan preference — we&apos;ll send a personalised Tirupati itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Tirupati Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How do I book Sudarshan Darshan at Tirupati?", a: "Book online at tirupatibalaji.ap.gov.in. Slots open 3 months in advance. Weekend slots are released at 10am and sell out within minutes — book as early as possible. You need a valid ID (Aadhaar or passport) and a mobile number. Cost is ₹300 per person. Up to 6 family members can be booked in one session." },
                { q: "What is the dress code for Tirumala temple?", a: "Men must wear dhoti (veshti) or shirt with lungi/dhoti. Women must wear saree, salwar kameez with dupatta, or churidar. Jeans, shorts, sleeveless tops, and short skirts are strictly prohibited. Leather items are also confiscated at the gate. Dhotis and sarees can be rented near the Tirumala gate for ₹50–100 if needed." },
                { q: "Can non-Hindus visit Tirupati Tirumala temple?", a: "Non-Hindus cannot enter the main Venkateswara sanctum. There is a self-declaration counter at the Mahadwaram (main gate) entry. Non-Hindu visitors can explore the outer Tirumala complex — the Pushkarini tank, the gopuram towers, Akasaganga waterfall (2km), and the hills around the temple are accessible to everyone." },
                { q: "How much does the Tirupati laddoo cost?", a: "₹50 per packet (175g). Each person is allowed a maximum of 2 packets, collected at the Prasadam counter after darshan exit. The laddoo is GI-tagged — only buy from the official TTD counter, not from outside sellers who sell imitations." },
                { q: "How do I get from Tirupati to Tirumala?", a: "APSRTC shared buses run from Tirupati Central Bus Stand to Tirumala continuously — ₹60 per person, 30–40 minutes through hairpin bends. Private taxis cost ₹400–600. You can also walk the Alipiri foot path (15km, 4–5 hours uphill, free) — a traditional devotee route many pilgrims do barefoot." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More South India Pilgrimages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Madurai Meenakshi Temple — 2 Day Guide", href: "/blog/meenakshi-temple-2-days" },
                { label: "Varanasi — 3 Day Spiritual Guide", href: "/blog/varanasi-3-days" },
                { label: "Rameswaram — 2 Day Pilgrimage Guide", href: "/blog/rameswaram-2-days" },
                { label: "Ayodhya — 3 Day Temple Guide", href: "/blog/ayodhya-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="tirupati-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
