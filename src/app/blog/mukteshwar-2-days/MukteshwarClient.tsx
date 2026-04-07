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

const MUKTESHWAR_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "🏔️",  label: "Why Mukteshwar?" },
  { id: "itinerary",  emoji: "📅",  label: "2-Day Itinerary" },
  { id: "budget",     emoji: "💰",  label: "Budget Breakdown" },
  { id: "treks",      emoji: "🥾",  label: "Walks & Viewpoints" },
  { id: "views",      emoji: "🌄",  label: "Himalayan Views Guide" },
  { id: "mistakes",   emoji: "❌",  label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡",  label: "Pro Tips" },
  { id: "faq",        emoji: "❓",  label: "FAQ" },
];

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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Mukteshwar 2-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Mukteshwar in 2 Days — Himalayan Views, Chauli Ki Jali & Kumaon Silence&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-serif text-lg font-light text-ink">{value}</p>
      <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{label}</p>
    </div>
  );
}

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

export default function MukteshwarClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={MUKTESHWAR_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Mukteshwar" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="mukteshwar hill station kumaon uttarakhand himalaya india"
            alt="Mukteshwar hill station Kumaon Uttarakhand with Himalayan peaks in background"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Mukteshwar 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  North India
                </span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">9 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Mukteshwar in 2 Days: Himalayan Views, Chauli Ki Jali & Kumaon Silence
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                50,000 visitors per year vs Nainital&apos;s 3 million — same Kumaon, completely different experience. Nanda Devi visible, apple orchards, a cliff edge that will stay with you. Budget from ₹2,500.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Uttarakhand, India</span>
              <span>·</span>
              <span>🗓 2 Days</span>
              <span>·</span>
              <span>💰 From ₹2,500</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Mukteshwar sits at 2,286m — higher than Nainital, quieter than Kasauli, less known than Mussoorie. One road, a dozen dhabas, apple orchards, and unobstructed views of Nanda Devi. And Chauli Ki Jali — a rock formation at a 1,000m cliff edge that does something to your perception of altitude that photographs cannot capture.
            </p>
          </blockquote>

          {/* ── QUICK DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Choose your focus for 48 hours in Mukteshwar.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🏔️", label: "Solitude Seeker", sub: "₹1,200–₹2,000/day", desc: "Family homestay + orchard walks + Chauli Ki Jali morning + forest silence", color: "border-amber-200 hover:border-amber-400", id: "highlights" },
                { emoji: "🌄", label: "View Chaser", sub: "₹1,800–₹3,000/day", desc: "Inspection House viewpoint + Chauli Ki Jali + Bhalu Gaad waterfall + Satkhol birds", color: "border-teal-200 hover:border-teal-400", id: "views" },
                { emoji: "🚶", label: "Full Explorer", sub: "₹2,500–₹4,500/day", desc: "Both days full + Ramgarh drive + Nainital afternoon comparison", color: "border-emerald-200 hover:border-emerald-400", id: "itinerary" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById(p.id)?.scrollIntoView({ behavior: "smooth" })}
                  className={`p-4 rounded-xl border-2 border-parchment-2 bg-white hover:shadow-md transition-all duration-200 text-center group ${p.color}`}>
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-amber-700 mt-0.5 font-medium">{p.sub}</p>
                  <p className="text-[0.65rem] text-muted mt-1 font-light">{p.desc}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">View Plan →</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── WHY MUKTESHWAR ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏔️ Why Mukteshwar?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Mukteshwar is 51km from Nainital but receives about 60 times fewer visitors. The reason most people go to Nainital instead is simply name recognition. Mukteshwar sits higher (2,286m vs Nainital&apos;s core at around 2,000m), faces directly toward the main Himalayan range, and has none of the congestion, noise, or boat queue that defines the Nainital experience in peak season. The IVRI (Indian Veterinary Research Institute) has been based here since 1893 — the apple orchard tradition comes from this colonial-era scientific station.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3 flex items-center gap-2">🏔️ Mukteshwar vs Nainital</h3>
                <div className="space-y-2">
                  {[
                    ["Visitors/year", "~50,000", "~3,000,000"],
                    ["Altitude", "2,286m", "2,084m (Tiffin Top)"],
                    ["Himalayan view", "Direct Nanda Devi", "Partial, often hazy"],
                    ["Traffic", "One quiet road", "Severe congestion"],
                    ["Character", "Family farms", "Resort town"],
                  ].map(([label, m, n]) => (
                    <div key={label} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/80 w-28 flex-shrink-0">{label}</span>
                      <span className="text-amber-700 font-medium w-28 flex-shrink-0">{m}</span>
                      <span className="text-muted font-light">{n}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted font-light italic border-t border-amber-100 pt-3 mt-3">
                  ⚠️ If you have already been to Nainital, Mukteshwar is the obvious next step.
                </p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3 flex items-center gap-2">🌄 Key Attractions</h3>
                <div className="space-y-2">
                  {[
                    ["Chauli Ki Jali", "Cliff-edge rock grip viewpoint, 1,000m drop"],
                    ["Mukteshwar Dham", "Ancient Shiva temple at 2,286m cliff edge"],
                    ["Inspection House view", "Colonial bungalow terrace, Nanda Devi visible"],
                    ["Bhalu Gaad Falls", "Pine forest waterfall, 45-min trek each way"],
                    ["Satkhol Sanctuary", "Himalayan birds, best in early morning"],
                  ].map(([place, desc]) => (
                    <div key={place} className="flex gap-2 text-xs">
                      <span className="font-medium text-ink/80 w-32 flex-shrink-0">{place}</span>
                      <span className="text-muted font-light">{desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">The homestay difference:</strong> Mukteshwar has only 8–10 good homestays — all family-run, all including meals, most with orchard views. Homestay families cook local Kumaoni food (Bhatt ki Churkani, Aloo ke Gutke, Bal Mithai from local milk) that you will not find in Nainital restaurants. This is the specific reason to come here.
              </p>
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="📅" label="Best Time" value="Mar–Jun, Sep–Nov" />
            <StatCard icon="⛰️" label="Altitude" value="2,286m" />
            <StatCard icon="🚗" label="From Delhi" value="330km · 7hr drive" />
            <StatCard icon="📍" label="Nearest Town" value="Nainital 51km" />
          </div>

          {/* ── 2-DAY ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 2-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Mukteshwar is tiny — one main road, all distances measured in walking minutes from the main chowk.
            </p>

            <DayCard
              day="Day 1"
              title="Mukteshwar Temple · Chauli Ki Jali · Inspection House"
              items={[
                "Arrive Mukteshwar by midday (from Delhi: 7 hours; from Kathgodam: 2 hours). Check into your homestay — most have mountain-facing rooms or verandahs. Rest and acclimatise; the altitude change from the plains is noticeable on the first afternoon.",
                "3pm: Walk to Mukteshwar Dham temple (10 minutes from main road). The Shiva temple sits right at the cliff edge at 2,286m — ancient, quiet, not commercialised. Very few tourists. The priests are unhurried. The setting — a small temple on a rock promontory with the valley 1,000m below — is extraordinary.",
                "Chauli Ki Jali (immediately after temple, 10-minute walk): A natural rock formation at the edge of the same cliff. You grip the natural handholds cut into the rockface and look straight down the 1,000m drop into the Ramganga valley below. People specifically travel to Mukteshwar for this experience. It takes about 5 minutes of gripping the cliff face to get to the best position. There are no guardrails — it is genuinely exposed. Take your time.",
                "5pm: Inspection House viewpoint (1km from town centre, a short walk or drive): The colonial-era government bungalow has an open viewing terrace. On clear days (October–November and March–April are best), Nanda Devi (7,816m) and Trishul (7,120m) are visible on the horizon — a dramatic straight-line view unobstructed by any ridge. This is one of the best Himalayan viewpoints accessible from a road in all of Uttarakhand.",
                "Evening: Walk back through the apple orchards — if visiting September–October, the harvest is underway. You can sometimes buy apples directly from the trees at ₹30–50/kg. The dhaba near the main chowk serves fresh thali; alternatively, your homestay will provide dinner (typically included).",
                "Night: Mukteshwar is extremely quiet after dark. The sky is exceptional for stargazing — at 2,286m with no city light pollution, Milky Way visibility on clear new-moon nights is remarkable.",
              ]}
              cost="₹400–₹800 excluding accommodation (meals typically included in homestay)" />

            <DayCard
              day="Day 2"
              title="Bhalu Gaad Waterfall · Satkhol Birds · Ramgarh Option"
              items={[
                "6:30am: Satkhol bird sanctuary (15km, 25-minute drive). The early morning is essential for birds — arrive before 7am. Satkhol is one of the best spots in Uttarakhand for Himalayan bird species. Regular sightings include: Khalij pheasant (large, dramatic), rufous-bellied niltava (deep blue, strikingly beautiful), verditer flycatcher, chestnut-headed tesia, and multiple warbler species. No guide required, no entry fee. Drive the forest road slowly and stop every 200m.",
                "9am: Return toward Mukteshwar. Breakfast at a dhaba or homestay.",
                "10am: Drive or walk to the Bhalu Gaad waterfall trailhead (8km from Mukteshwar). The waterfall is a 45-minute walk each way through dense pine and oak forest — a well-marked trail with almost nobody else on it. The waterfall is clean and strong, falling through a narrow gorge cut by the Bhalu Gaad stream. Swim if the month is May–June when water is cold but manageable; too cold October–November.",
                "1pm: Return to Mukteshwar for lunch. The trekking takes a total of 2–2.5 hours including time at the falls.",
                "Option — drive to Ramgarh (35km): Ramgarh is the &quot;fruit bowl of Kumaon&quot; — a long ridge covered in peach, plum, apricot, and apple orchards. The drive along the ridge is extraordinary, with views into deep valleys on both sides. Rabindranath Tagore wrote at a bungalow here; the bungalow still exists. Buy fresh stone fruit from roadside sellers (peach ₹60–80/kg in season).",
                "Afternoon/evening: Return to Mukteshwar or depart for Kathgodam (50km, 2 hours) for onward rail or road connections. The mountain road from Mukteshwar descends steeply through Bhowali — allow extra time if departing after 3pm in peak season when traffic from Nainital backs up.",
              ]}
              cost="₹300–₹600 excluding accommodation" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 2-Day Cost (per person) · </span>
              <span className="font-serif text-base text-ink font-light">₹2,500–₹5,000 budget · ₹6,000–₹12,000 mid-range</span>
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
                    ["🏨 Accommodation (2N) incl. meals", "₹1,200–₹2,400 (homestay)", "₹3,600–₹7,000", "₹8,000–₹18,000"],
                    ["🍽 Food (if not homestay)", "₹400–₹600/day (dhaba)", "₹800–₹1,200", "₹1,500–₹2,500"],
                    ["🚗 Local transport", "₹300–₹500 (Day 2 taxi)", "₹600–₹1,000", "₹1,500–₹2,500"],
                    ["🎯 Entry fees", "₹0 (all free)", "₹0", "₹0"],
                    ["🍎 Seasonal fruit purchases", "₹100–₹200", "₹200–₹400", "₹400–₹800"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 2 days)</td>
                    {["₹2,000–₹3,700", "₹5,200–₹9,600", "₹11,400–₹23,800"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. All Mukteshwar attractions are free — Mukteshwar Dham temple, Chauli Ki Jali, Inspection House, Bhalu Gaad trail, and Satkhol sanctuary all have no entry fees. The budget homestay rate (₹600–1,200/night) typically includes breakfast and dinner — this makes Mukteshwar one of the most cost-effective hill stations in North India.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Mukteshwar"
            hotels={[
              { name: "Apple Orchard Homestay", type: "Homestay · Mukteshwar", price: "From ₹1,200/night incl. meals", rating: "5", badge: "Top pick", url: "https://www.booking.com/searchresults.en-gb.html?ss=mukteshwar+homestay&aid=2820480" },
              { name: "Moose Hill Cottage", type: "Cottage · Mukteshwar Hills", price: "From ₹2,800/night", rating: "4", badge: "Mountain View", url: "https://www.booking.com/searchresults.en-gb.html?ss=mukteshwar+cottage&aid=2820480" },
              { name: "Budget Homestay Mukteshwar", type: "Homestay · Village road", price: "From ₹600/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=mukteshwar+budget+stay&aid=2820480" },
            ]}
            activities={[
              { name: "Kumaon Villages & Orchards Walk", duration: "Half day", price: "From ₹400/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=mukteshwar+trek&partner_id=PSZA5UI" },
              { name: "Himalayan Bird Watching Satkhol", duration: "3 hours", price: "From ₹500/person", badge: "Wildlife", url: "https://www.getyourguide.com/s/?q=kumaon+bird+watching&partner_id=PSZA5UI" },
              { name: "Kumaon Circuit: Mukteshwar + Ramgarh", duration: "Full day", price: "From ₹800/person", badge: "Scenic", url: "https://www.getyourguide.com/s/?q=nainital+mukteshwar+tour&partner_id=PSZA5UI" },
            ]}
            pdfProductId="mukteshwar-2-days-pdf"
          />

          {/* ── GALLERY ── */}
          <DestinationGallery
            title="Mukteshwar — Himalayan Silence & Kumaon Views"
            subtitle="From cliff-edge rock formations to apple orchards and Himalayan birds — Mukteshwar&apos;s defining moments."
            spots={[
              { name: "Chauli Ki Jali", query: "chauli ki jali mukteshwar cliff edge rock formation kumaon valley", desc: "The natural rock handholds at the edge of a 1,000m cliff — gripping the rockface while looking straight down into the Ramganga valley. The single most thrilling viewpoint in Kumaon." },
              { name: "Nanda Devi from Inspection House", query: "nanda devi peak himalaya view from kumaon uttarakhand clear", desc: "Nanda Devi (7,816m) visible from the Inspection House terrace at Mukteshwar on clear October-November mornings — one of the best accessible Himalayan main-range viewpoints in Uttarakhand." },
              { name: "Mukteshwar Apple Orchards", query: "apple orchards mukteshwar kumaon uttarakhand hills harvest", desc: "IVRI established apple cultivation here in the colonial era. The orchards at harvest time (September–October) are extraordinary — rows of laden trees on a hillside with the valley 1,000m below." },
              { name: "Bhalu Gaad Waterfall", query: "bhalu gaad waterfall mukteshwar pine forest uttarakhand stream", desc: "A forest waterfall through dense pine and oak — 45 minutes each way from the trailhead. Almost nobody else on the trail. Clean water, strong flow, very quiet." },
              { name: "Mukteshwar Dham Temple", query: "mukteshwar temple shiva ancient cliff kumaon uttarakhand", desc: "The ancient Shiva temple at the Mukteshwar cliff edge at 2,286m — small, not commercialised, with a setting that makes it one of the most dramatically placed temples in Uttarakhand." },
            ]}
          />

          {/* ── WALKS & VIEWPOINTS ── */}
          <section id="treks" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🥾 Walks & Viewpoints</h2>
            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-amber-800 mb-3">Chauli Ki Jali — How to Do It Safely</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">What it is:</strong> A natural rock formation at the edge of the Mukteshwar cliff — handholds cut into the rock allow you to grip the face and lean out over a 1,000m vertical drop.</p>
                  <p><strong className="text-ink">Location:</strong> 10-minute walk from the main Mukteshwar Dham temple, signposted.</p>
                  <p><strong className="text-ink">Entry:</strong> Free. No guide needed.</p>
                  <p><strong className="text-ink">Physical requirement:</strong> No climbing skill needed — the handholds are natural depressions in the rock. However, you must be comfortable with significant exposure. Vertigo will be a factor. Do not attempt in wet weather — the rock becomes slippery.</p>
                  <p><strong className="text-ink">Best time:</strong> Morning on a clear day — this is also when Himalayan peak visibility is best from the adjacent viewpoint.</p>
                  <p><strong className="text-ink">Safety note:</strong> There are no guardrails or nets. Locals have occasionally set up informal rope anchors for tourists — you can decline or accept help as needed. Do not attempt in footwear with worn soles.</p>
                </div>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">Bhalu Gaad Waterfall Walk</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Trailhead:</strong> 8km from Mukteshwar town — hire a vehicle or walk if the weather is cool</p>
                  <p><strong className="text-ink">Walk time:</strong> 45 minutes each way — clear trail through mixed pine and oak forest</p>
                  <p><strong className="text-ink">Difficulty:</strong> Easy — gradual descent to the waterfall</p>
                  <p><strong className="text-ink">What to expect:</strong> Dense forest, very few other walkers, a clean waterfall falling through a narrow gorge. In the deep forest sections the quiet is complete — only wind and birds.</p>
                  <p><strong className="text-ink">Swimming:</strong> Possible May–June (cold), inadvisable October–November (very cold). The waterfall pool is deep enough but the water temperature is serious.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── HIMALAYAN VIEWS ── */}
          <section id="views" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌄 Himalayan Views — What to Expect and When</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              The main Himalayan range from Mukteshwar includes Nanda Devi (7,816m), Trishul (7,120m), Nanda Kot (6,861m), and Panchachuli (6,904m). These peaks are 80–120km north as the crow flies.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="space-y-3">
                {[
                  { season: "October–November", quality: "Best — crystal clear", desc: "Post-monsoon air is completely clear of dust and haze. The first week of October and the last week of November are typically the finest. Snow visible on all main peaks. Dawn is the best window: 6–8am before temperature inversion builds." },
                  { season: "March–April", quality: "Good — clear most mornings", desc: "Pre-monsoon season before summer haze builds. Good visibility in the early morning. April becomes progressively hazier as the season advances toward May." },
                  { season: "May–June", quality: "Variable — hazy afternoons", desc: "Summer heat builds atmospheric haze over the plains, which rises to Himalayan viewpoints by mid-morning. Early mornings (5:30–7am) are often still clear. Not reliable." },
                  { season: "July–September (monsoon)", quality: "Rarely visible", desc: "Cloud cover is typically continuous at this altitude. There are brief clearings after heavy rain — sometimes extraordinary views lasting 10–20 minutes — but these cannot be planned for. Come in monsoon for the forests, not the views." },
                ].map((s) => (
                  <div key={s.season} className="flex gap-3 text-xs border-t border-amber-100 pt-3 first:border-0 first:pt-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-medium text-ink">{s.season}</span>
                        <span className="text-amber-700 font-medium">{s.quality}</span>
                      </div>
                      <p className="text-muted font-light leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 bg-teal-50 border border-teal-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Best viewpoint:</strong> The Inspection House terrace (1km from town) and the Chauli Ki Jali cliff area both face the main Himalayan range directly north. The Mukteshwar Dham temple clifftop is also good. The specific peaks visible change with the angle — from the Inspection House you see Nanda Devi, from the temple cliff you see more of the Nanda Kot-Panchachuli range.
              </p>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Treating it as an extension of Nainital", desc: "The Nainital-to-Mukteshwar road is 51km but takes 2–2.5 hours due to the ghat sections. It is a slow, winding mountain drive — not a 40-minute connection. Plan Mukteshwar as a separate destination with its own 2-night stay, not a same-day trip from Nainital.", icon: "🗺️" },
                { title: "Going in January–February for a snow trip", desc: "Heavy snowfall in January–February can close the road to Mukteshwar entirely for 2–5 days at a time. If the road closes after you arrive, you cannot leave until it is cleared. Snow is beautiful when accessible — but plan for the possibility of being stranded and do not go without checking the forecast 48 hours ahead.", icon: "❄️" },
                { title: "Not booking a homestay in advance", desc: "There are only 8–10 genuinely good homestays in Mukteshwar. During peak season (April–May and October) they fill weeks in advance. Arriving without a booking at any time between April and November risks finding nothing available or only inferior options. Book at least 3 weeks ahead for weekends in peak season.", icon: "🏨" },
                { title: "Missing Chauli Ki Jali", desc: "Many visitors to Mukteshwar either do not know about Chauli Ki Jali or are intimidated by the word &quot;cliff.&quot; It is the single most memorable experience the place offers. The actual physical challenge is manageable for any adult with basic fitness and no severe vertigo. Do not skip it.", icon: "🧗" },
                { title: "Not checking visibility forecast before going for Himalayan views", desc: "The main Himalayan range (Nanda Devi, Trishul) is only reliably visible October–November and March–April. In summer haze and monsoon season, you may see nothing from the viewpoints. Check weather forecasts and do not build your trip around Himalayan views unless you are visiting in the right season.", icon: "🌤️" },
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
                { icon: "🌅", title: "Dawn at Chauli Ki Jali on a Clear Day", desc: "The combination of first light on the Himalayan peaks and the valley below the cliff, with the morning mist rising, is one of those genuinely special hill station moments. Set an alarm for 5:30am, walk to the temple, and be at Chauli Ki Jali by 6am on a clear morning in October or March.", color: "bg-amber-50 border-amber-200" },
                { icon: "🏡", title: "Ask the Homestay Family to Cook Kumaoni Food", desc: "Most homestays will default to roti-sabzi-dal if not asked specifically. Request Kumaoni dishes: Bhatt ki Churkani (black soybean curry), Aloo ke Gutke (spiced potatoes), Bal Mithai (brown fudge-like sweet from local milk), and Singori (leaf-wrapped sweet). These dishes are specific to Kumaon and not available in restaurants.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚗", title: "Self-Drive vs Hired Car", desc: "The roads in Kumaon are excellent by Himalayan standards but require confidence on narrow mountain roads with steep drops. If you are comfortable driving hills, self-drive from Kathgodam to Mukteshwar is straightforward. If not, hire a taxi from Kathgodam (₹1,200–1,500 one way) — local drivers know the turns and can stop at good viewpoints.", color: "bg-teal-50 border-teal-200" },
                { icon: "🍑", title: "The Ramgarh Fruit Drive in Season", desc: "Ramgarh (35km from Mukteshwar) is called the fruit bowl of Kumaon. In peak season (peaches in June, plums in July, apples in September–October), the roadside sellers have fresh stone fruit at ₹60–100/kg. The ridge drive from Mukteshwar to Ramgarh — with valleys dropping away on both sides — is independently worth the detour.", color: "bg-teal-50 border-teal-200" },
                { icon: "🦅", title: "Satkhol at 6am, Not 9am", desc: "Himalayan birds are most active in the first two hours of daylight. Arriving at Satkhol at 9am will give you a fraction of the species activity. If birding matters to you, set the alarm and drive the 15km in darkness to be there at dawn. The khalij pheasant is most often spotted on the forest road in the first 30 minutes of light.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🌟", title: "Mukteshwar for Stargazing", desc: "At 2,286m with minimal light pollution, Mukteshwar has exceptional night skies. The new-moon period in October (post-monsoon, pre-winter haze) gives the darkest conditions. A clear night between Milky Way season (October) — the Galactic Centre is still visible and the mountain horizon is extraordinary in all directions.", color: "bg-emerald-50 border-emerald-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── INLINE CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and whether you want to combine with Nainital or Almora — we&apos;ll send a personalised Kumaon itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Mukteshwar Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "What is Chauli Ki Jali in Mukteshwar?", a: "A natural rock formation at the edge of a 1,000m cliff near Mukteshwar Dham temple — you grip the natural handholds in the rockface and look straight down into the Ramganga valley. The single most thrilling viewpoint in Kumaon. Free, no guide needed. 10-minute walk from the temple. Do not attempt in wet weather or worn footwear." },
                { q: "Why choose Mukteshwar over Nainital?", a: "Nainital receives 3 million tourists per year. Mukteshwar receives roughly 50,000. Mukteshwar sits 200m higher, has direct views of Nanda Devi and Trishul, no traffic, no congestion, and a family homestay culture that is the best in Uttarakhand. If you want the hill station experience without the crowds, Mukteshwar is the better choice." },
                { q: "How do I reach Mukteshwar from Delhi?", a: "330km from Delhi — approximately 7 hours by road. Best route: Delhi to Haldwani/Kathgodam (6 hours) then up to Mukteshwar via Bhowali (50km, 1.5 hours mountain road). Kathgodam has trains from Delhi (5–6 hours, ₹350–700 sleeper). From Kathgodam, hire a taxi to Mukteshwar ₹1,200–1,500." },
                { q: "What is the best season for Himalayan views from Mukteshwar?", a: "October–November is best — post-monsoon air is completely clear. March–April is second best. The main range (Nanda Devi 7,816m, Trishul 7,120m) is only reliably visible during these windows. Summer haze (May–June) reduces visibility. Monsoon cloud cover (July–September) typically blocks the range entirely." },
                { q: "Are there good homestays in Mukteshwar?", a: "There are 8–10 genuinely excellent homestays in Mukteshwar — all family-run, most with mountain-facing rooms or verandahs, almost all including breakfast and dinner in the rate (₹600–1,800/night). They fill up weeks in advance during peak season (April–May, October). Book early. The homestay meal culture — Kumaoni home cooking — is one of the specific reasons to choose Mukteshwar over a standard hotel hill station." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Explore More Kumaon & Uttarakhand</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Nainital — 3 Day Hill Station Guide", href: "/blog/nainital-3-days" },
                { label: "Almora — 3 Day Kumaon Heritage Guide", href: "/blog/almora-3-days" },
                { label: "Ranikhet — 2 Day Quiet Hills Guide", href: "/blog/ranikhet-2-days" },
                { label: "Jim Corbett — 3 Day Wildlife Guide", href: "/blog/jim-corbett-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="mukteshwar-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
