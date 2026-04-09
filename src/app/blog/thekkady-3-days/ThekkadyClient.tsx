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

const THEKKADY_TOC = [
  { id: "decision",   emoji: "⚡",  label: "Which Traveller Are You?" },
  { id: "highlights", emoji: "🌿", label: "Why Thekkady?" },
  { id: "itinerary",  emoji: "📅", label: "3-Day Itinerary" },
  { id: "budget",     emoji: "💰", label: "Budget Breakdown" },
  { id: "wildlife",   emoji: "🐘", label: "Wildlife Guide" },
  { id: "spices",     emoji: "🌶️", label: "Spice Guide" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "💡", label: "Pro Tips" },
  { id: "faq",        emoji: "❓", label: "FAQ" },
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Thekkady 3-Day Guide&body=Check this out: ${typeof window !== "undefined" ? window.location.href : ""}` },
        { label: "Twitter", color: "bg-[#1DA1F2] text-white", href: `https://x.com/intent/tweet?text=Thekkady in 3 Days — Periyar Boat Safari, Bamboo Rafting & Cardamom Hills&url=${typeof window !== "undefined" ? window.location.href : ""}` },
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

export default function ThekkadyClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={THEKKADY_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Thekkady" />

      <main className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="periyar wildlife sanctuary kerala lake boat safari elephants"
            alt="Periyar wildlife sanctuary Kerala lake boat safari with elephants"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Thekkady 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">South India</span>
                <span className="text-white/60 text-xs">April 7, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">10 min read</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">Surya Pratap</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Thekkady in 3 Days: Periyar Boat Safari, Bamboo Rafting & Cardamom Hills
                <em className="italic text-gold-light"> (Complete Guide)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                Kerala&apos;s Periyar Tiger Reserve — elephants at the lake edge, bamboo rafting through morning mist, cardamom and black pepper growing together, Kalaripayattu. Budget from ₹6,000 for 3 days.
              </p>
            </div>
          </div>
        </div>

        {/* ── ARTICLE ── */}
        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted">
              <span>🇮🇳 Kerala, India</span>
              <span>·</span>
              <span>🗓 3 Days</span>
              <span>·</span>
              <span>💰 From ₹6,000</span>
            </div>
          </div>

          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              The bamboo rafting experience at Thekkady is unlike anything else available to visitors in India. Four hours at dawn, gliding through the Periyar Tiger Reserve on a bamboo raft with a forest officer, in silence except for birds and the sound of water. No motor, no commentary track, no schedule. Just forest. The elephants at the lake edge on the morning boat safari are the other thing that stays with you — they come down to the water at 7am as though the boat does not exist.
            </p>
          </blockquote>

          {/* ── DECISION ── */}
          <section id="decision" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">⚡ Which Traveller Are You?</h2>
            <p className="text-sm text-muted font-light mb-6">Thekkady has different layers. Pick yours.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { emoji: "🐘", label: "Wildlife First", sub: "₹2,500–₹5,000/day", desc: "Boat safari + bamboo rafting + nature walks", color: "border-emerald-200 hover:border-emerald-400" },
                { emoji: "🌶️", label: "Spice & Culture", sub: "₹1,500–₹3,000/day", desc: "Plantation walk + Kumily bazaar + Kalaripayattu", color: "border-amber-200 hover:border-amber-400" },
                { emoji: "🌿", label: "Relaxed Nature Stay", sub: "₹2,000–₹5,000/day", desc: "Periyar lakeside resort + tribal guides + mist", color: "border-teal-200 hover:border-teal-400" },
              ].map((p) => (
                <button key={p.label} onClick={() => document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" })}
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

          {/* ── WHY THEKKADY ── */}
          <section id="highlights" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🌿 Why Thekkady?</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">
              Thekkady is the gateway town for the Periyar Tiger Reserve — one of India&apos;s most biodiverse protected areas and one of the few where you can access the forest interior by boat, on foot, and on bamboo raft. The surrounding Cardamom Hills are Kerala&apos;s spice heartland: cardamom, black pepper, vanilla, cinnamon, and coffee growing together in the same plantation. Kumily bazaar (the town adjacent to Thekkady) sells spices at a fraction of what they cost in any Indian city.
            </p>
            <div className="space-y-3">
              {[
                { name: "Periyar Lake Boat Safari (KTDC)", detail: "₹150–₹300, 2 hours. The KTDC-operated boat covers the Periyar Lake inside the tiger reserve. Elephants come to the lake edge regularly at the 7am departure. Indian bison (gaur), wild boar, otters, and waterbirds are common. Tiger sightings are rare (35 tigers in 925km²) — don't plan around it.", tag: "Wildlife", color: "border-emerald-200 bg-emerald-50" },
                { name: "Bamboo Rafting", detail: "₹1,150/person, 4 hours (8am departure). Forest Department-operated, advance booking essential. 4–6 people on a raft with a forest officer escort. Complete silence apart from forest sounds. One of the finest wildlife experiences in South India. Book 2–4 weeks ahead in season.", tag: "Must Do", color: "border-teal-200 bg-teal-50" },
                { name: "Spice Plantation Walk", detail: "₹300–₹500, 2 hours. Many operators offer plantation tours in the Cardamom Hills. The best ones walk you through cardamom, black pepper vines, coffee, vanilla, cinnamon, and nutmeg — all growing in the same ecosystem. Guides know the plants and their uses.", tag: "Nature", color: "border-amber-200 bg-amber-50" },
                { name: "Kadathanadan Kalari Centre", detail: "₹200, 45 minutes. Kalaripayattu is Kerala's traditional martial art — arguably the oldest combat system in the world, influencing both Kung Fu and Capoeira. The Thekkady performance is genuine rather than touristic: weapons demonstrations, acrobatics, and ritual elements. Worth every rupee.", tag: "Culture", color: "border-orange-200 bg-orange-50" },
                { name: "Tribal Nature Walk", detail: "₹500/person, 3 hours (6am). The Mannan and Paliyan tribal communities operate guided walks through the wildlife corridor. The guides read the forest in ways that a standard nature walk guide cannot — they know animal movements, food sources, and the cultural significance of plants. Book through the Forest Department office.", tag: "Cultural", color: "border-yellow-200 bg-yellow-50" },
                { name: "KTDC Lake Palace (inside the reserve)", detail: "₹6,000–₹12,000/night. The only accommodation actually inside the Periyar Tiger Reserve — an island palace on Periyar Lake. Extraordinary setting. Book 3–6 months ahead. Accessible by boat only.", tag: "Luxury", color: "border-purple-200 bg-purple-50" },
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
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon="🗓" label="Best Time" value="Oct–Mar" />
            <StatCard icon="⛰️" label="Altitude" value="900m" />
            <StatCard icon="✈️" label="From Kochi Airport" value="190km / 4.5 hrs" />
            <StatCard icon="💰" label="3-Day Budget" value="₹6,000+" />
          </div>

          {/* ── ITINERARY ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">📅 The 3-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">
              Thekkady and Kumily are adjacent towns — most accommodation is in Kumily. The KTDC Periyar Tiger Reserve boat counter is at the lake edge, a 5–10 minute walk from most hotels.
            </p>

            <DayCard
              day="Day 1"
              title="Periyar Lake Boat Safari · Spice Plantation · Kumily Bazaar"
              items={[
                "6:30am: Head to the KTDC boat counter at the Periyar Lake edge. Tickets for the 7am boat go on sale at 7am and sell out within 20–30 minutes during peak season (October–March). Book through your hotel the night before if possible. Cost: ₹150 (upper deck) or ₹300 (luxury boat).",
                "7am–9am: Periyar Lake Boat Safari (2 hours). The lake is surrounded by the tiger reserve on all sides — you are inside the forest from the first minute. Elephants are the most reliable large mammal sighting (they come to the water in the mornings). Gaur (Indian bison, much larger than a cow) are regularly seen. The 7am departure is the correct choice — animals are most active in early morning and the mist over the water is beautiful.",
                "10am: Return to hotel for breakfast. Most homestays include breakfast. If not, any café in Kumily does Kerala-style appam with coconut milk (₹60–₹80) and filter coffee.",
                "11:30am: Spice plantation walk. Book through your hotel or directly with a plantation near Kumily (not from the tourist shops near the lake entrance). A 2-hour guided walk through cardamom, pepper, coffee, vanilla, and nutmeg growing together in shaded forest conditions. Cost ₹300–₹500. The guide should explain the cultivation, harvesting, and processing of each spice — ask questions.",
                "2pm: Lunch at a homestay or local restaurant — Kerala fish curry with rice, or vegetarian meals. ₹120–₹200.",
                "4pm: Kumily bazaar — the town market, not the tourist shops near the reserve entrance. The spice prices here are 2–3x cheaper than the hotel-zone shops. Buy cardamom pods (100g for ₹120–₹180), whole black peppercorns, vanilla beans (if in stock), and dried ginger. This is what the cardamom hills produce.",
                "Evening: Kadathanadan Kalari Centre (6pm show, ₹200, 45 minutes) — Kalaripayattu martial arts. The performers are trained practitioners, not tourists — the weapons work and acrobatics are genuinely impressive.",
              ]}
              cost="₹700–₹1,200 excluding accommodation" />

            <DayCard
              day="Day 2"
              title="Bamboo Rafting · Nature Walk · Tribal Cultural Experience"
              items={[
                "8am: Bamboo Rafting (pre-booked, ₹1,150/person). This is the centrepiece activity of any Thekkady visit. The 4-hour experience starts at the forest edge and takes you through interior channels of the Periyar Reserve on a traditional bamboo raft with a forest officer. The raft moves silently — no motor, poles only. The silence allows wildlife to stay close: otters, kingfishers, herons, and occasionally gaur at the water's edge.",
                "Critical booking note: Bamboo rafting is run by the Kerala Forest Department. Online booking opens 30 days ahead at 9am — slots for October–March fill within hours. Book well before your travel date. If you arrive without a booking, walk-in slots occasionally open if cancellations occur, but this is not reliable. Book before you book your flight.",
                "12pm: Return to Kumily. The 4-hour raft finishes around noon. Rest or take a light lunch.",
                "2pm: Forest Nature Walk with tribal guide (₹200/person, 3 hours, book through Forest Department office). The Mannan and Paliyan communities operate guided walks through the wildlife corridor adjacent to the reserve. These guides interpret the forest from a cultural perspective — medicinal plants, food plants, and the ecological calendar of the community. Genuinely educational.",
                "4pm: Optional visit to Cheriuthunni Falls (14km from Thekkady) — accessible and spectacular in the monsoon and early post-monsoon season (August–November). In December–March, the flow is reduced but the walk through the plantation to reach it is pleasant.",
                "Evening: Return to Kumily for dinner. Kerala sadya (banana leaf meals with rice, sambar, rasam, avial, pickle, and papadam) at a local restaurant costs ₹120–₹180. The best version in the area is at hotels that cater to domestic tourists rather than foreign backpackers.",
              ]}
              cost="₹1,500–₹2,500 including bamboo rafting and tribal walk" />

            <DayCard
              day="Day 3"
              title="Munnar Drive (115km) or Periyar Wildlife Corridor Walk"
              items={[
                "Option A — Drive to Munnar (115km, 3 hours): The Thekkady–Munnar road through the Cardamom Hills is one of the most scenic drives in Kerala — winding roads through dense forest, tea estates at altitude, and occasional mountain views. Munnar at 1,600m has the Eravikulam National Park (Nilgiri Tahr conservation, entry ₹240, peak season February–March), the tea museum (₹150), and views of the Anamudi peak (2,695m — highest in South India). This is a good Day 3 option if you're routing toward Kochi.",
                "Option B — Morning wildlife corridor walk (₹500/person, 6am start): An early morning walk from Thekkady through the forest buffer zone with a Forest Department-appointed tribal guide. 3 hours, maximum 6 people. Elephant and bison sightings possible. This is the closest you get to an unescorted forest walk at Periyar. Book through the Forest Department office the previous day.",
                "Option C — Relaxed morning in Kumily: Visit the weekly market (held on Thursdays near the bus stand) for local produce, spices sold directly by farmers, and the life of a Cardamom Hills market town. Depart for Kochi by noon.",
                "Departure logistics: Kumily to Kochi airport is 190km (4.5 hours). Shared taxis leave from the Kumily bus stand (₹350–₹400/seat). Private cab: ₹3,500–₹4,500. The road down the Ghats from Kumily to the plains is one of the better drives in Kerala — forest giving way to rubber plantations giving way to the Kerala backwaters landscape.",
              ]}
              cost="₹600–₹1,200 for day trip or walk" />

            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center mt-4">
              <span className="text-xs text-green-700 uppercase tracking-wide">Total 3-Day Cost (per person) · </span>
              <span className="font-serif text-base text-ink font-light">₹6,000–₹9,000 budget · ₹14,000–₹22,000 mid-range</span>
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
                    <th className="p-3.5 text-xs font-medium text-emerald-300 text-center">🌳 Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹2,100–₹3,600 (homestay)", "₹7,500–₹15,000", "₹18,000–₹36,000"],
                    ["🍽 Food & Drinks (3 days)", "₹720–₹1,080", "₹2,100–₹3,600", "₹4,500–₹7,500"],
                    ["🚗 Local Transport", "₹500–₹800", "₹1,500–₹2,400", "₹3,000–₹4,500"],
                    ["🐘 Boat Safari (KTDC)", "₹150–₹300", "₹300", "₹600 (private)"],
                    ["🛶 Bamboo Rafting", "₹1,150", "₹1,150", "₹1,150"],
                    ["🌶️ Spice Plantation Tour", "₹300–₹500", "₹500–₹800", "₹1,500–₹2,000"],
                    ["🥋 Kalaripayattu Show", "₹200", "₹200", "₹200"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-ink">
                    <td className="p-3.5 text-xs text-white font-semibold">Total (per person, 3 days)</td>
                    {["₹6,000–₹9,000", "₹14,000–₹22,000", "₹30,000–₹52,000"].map((v, i) => (
                      <td key={i} className="p-3.5 text-xs text-gold font-semibold text-center">{v}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">
              All prices INR 2026. KTDC Lake Palace (₹6,000–₹12,000/night, inside the reserve on an island) is not included above — it is a premium addition. Bamboo rafting price is fixed by the Forest Department and applies to all budget levels. Kochi airport (190km) has daily flights from all major Indian cities.
            </p>
          </section>

          {/* ── AFFILIATE BLOCK ── */}
          <AffiliateBlock
            destination="Thekkady"
            hotels={[
              { name: "Spice Village CGH Earth", type: "Eco Resort · Thekkady", price: "From ₹8,000/night", rating: "5", badge: "Best eco resort", url: "https://www.booking.com/hotel/in/spice-village-thekkady.html?aid=2820480" },
              { name: "KTDC Lake Palace", type: "Heritage Hotel · Inside Reserve", price: "From ₹6,000/night", rating: "5", badge: "Inside reserve", url: "https://www.booking.com/searchresults.en-gb.html?ss=ktdc+lake+palace+thekkady&aid=2820480" },
              { name: "Budget Homestay Kumily", type: "Homestay · Kumily Town", price: "From ₹700/night", rating: "4", badge: "Budget", url: "https://www.booking.com/searchresults.en-gb.html?ss=kumily+homestay+thekkady&aid=2820480" },
            ]}
            activities={[
              { name: "Bamboo Rafting — Periyar Tiger Reserve", duration: "4 hours", price: "₹1,150/person (fixed)", badge: "Book weeks ahead", url: "https://www.getyourguide.com/s/?q=thekkady+bamboo+rafting&partner_id=PSZA5UI" },
              { name: "Periyar Lake Boat Safari", duration: "2 hours", price: "From ₹150/person", badge: "Best at 7am", url: "https://www.getyourguide.com/s/?q=periyar+boat+safari&partner_id=PSZA5UI" },
              { name: "Cardamom Hills Spice Plantation Walk", duration: "2 hours", price: "From ₹350/person", url: "https://www.getyourguide.com/s/?q=thekkady+spice+plantation+tour&partner_id=PSZA5UI" },
              { name: "Kalaripayattu Martial Arts Show", duration: "45 minutes", price: "₹200/person", url: "https://www.getyourguide.com/s/?q=kalaripayattu+thekkady&partner_id=PSZA5UI" },
            ]}
            pdfProductId="thekkady-3-days-pdf"
          />

          {/* ── WILDLIFE GUIDE ── */}
          <section id="wildlife" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🐘 Periyar Wildlife — What to Actually Expect</h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-emerald-800 mb-3">Periyar Lake Boat Safari — Realistic Expectations</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Tiger sightings:</strong> Periyar has approximately 35 tigers across 925km². Sightings on the boat safari are very rare — perhaps 1 in 100 boats. Do not plan your trip around seeing a tiger. Do not be disappointed if you don't see one.</p>
                  <p><strong className="text-ink">Elephants:</strong> Reliable. Elephant herds come to the Periyar Lake in the morning to drink — the 7am boat is the most likely to encounter them at the water's edge at close range. In peak season, you may see 20–30 elephants in one sighting.</p>
                  <p><strong className="text-ink">Indian bison (gaur):</strong> Very large animals — the largest wild bovine in the world. Regularly seen at the water's edge and on the hillsides. More impressive than you expect.</p>
                  <p><strong className="text-ink">Otters:</strong> Periyar has a good population of smooth-coated otters. Often seen near the inlet channels on the boat route.</p>
                  <p><strong className="text-ink">Birds:</strong> Darter, great cormorant, grey heron, white-bellied sea eagle, and various kingfishers are regularly seen from the boat.</p>
                  <p><strong className="text-ink">Best slot:</strong> 7am without exception. The 9:30am and later boats see less wildlife as animals move away from the lake edge as the day warms.</p>
                </div>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                <h3 className="font-serif text-lg text-teal-800 mb-3">Bamboo Rafting — How It Works</h3>
                <div className="space-y-2 text-xs text-muted font-light">
                  <p><strong className="text-ink">Duration:</strong> 4 hours (8am–12pm approximately)</p>
                  <p><strong className="text-ink">Group size:</strong> 4–6 people maximum per raft, with one forest officer</p>
                  <p><strong className="text-ink">Route:</strong> The raft enters the forest via channels and waterways inaccessible to the motor boat. You are deeper inside the reserve than any other visitor experience allows.</p>
                  <p><strong className="text-ink">What you see:</strong> Birds above, forest on both sides, occasional animal tracks at the water's edge. The experience is more about atmosphere — the silence, the mist, the scale of the trees — than guaranteed animal sightings.</p>
                  <p><strong className="text-ink">Booking:</strong> Kerala Forest Department website, 30 days in advance. Slots open at 9am on the booking date and sell out within hours for October–March. Book before you finalize travel dates.</p>
                  <p><strong className="text-ink">What to bring:</strong> Light clothing, insect repellent, water, binoculars if you have them. No bags larger than a day pack.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SPICE GUIDE ── */}
          <section id="spices" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌶️ The Cardamom Hills Spice Guide</h2>
            <p className="text-sm text-muted font-light mb-6">
              Thekkady sits in the Cardamom Hills — one of the few places in the world where cardamom, black pepper, vanilla, coffee, cinnamon, and nutmeg grow together in a single agroforestry ecosystem. The spice plantation walk is how you experience this. The Kumily bazaar is where you buy it.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { spice: "Cardamom", buy: "₹120–₹180 per 100g (pods)", note: "The Cardamom Hills are named for it. Buy large green pods, not powder. The flavour is completely different from the dried powder sold in cities. Look for plump, intact pods." },
                { spice: "Black Pepper", buy: "₹80–₹120 per 100g (whole)", note: "Malabar pepper — buy whole peppercorns, not ground. The pepper from this region is what made Kerala the spice trade capital for a thousand years. Far more aromatic than supermarket pepper." },
                { spice: "Vanilla", buy: "₹200–₹400 per pod", note: "Kerala is one of India's few vanilla producers. Buy whole cured pods from Kumily bazaar — check they're pliable, not dried out. Split and scrape into desserts; incomparable to extract." },
                { spice: "Cinnamon", buy: "₹60–₹100 per 100g (bark)", note: "True cinnamon (as opposed to cassia) is produced in Kerala. The thin, layered bark rolls are different from the hard single-layer tubes sold elsewhere. Milder, sweeter, more complex." },
              ].map((s) => (
                <div key={s.spice} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <p className="font-medium text-sm text-ink mb-1">{s.spice}</p>
                  <p className="text-[0.68rem] text-amber-700 mb-2 font-medium">{s.buy}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{s.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-ink-mid font-light leading-relaxed">
                <strong className="font-medium text-ink">Where to buy:</strong> Kumily bazaar (the town market, not the tourist shops near the reserve gate). The shops on the main Kumily bazaar road sell directly from local farmers at farm-gate prices. Avoid the decorated spice shops with professional display cases near the hotel zone — prices are 2–3x higher and quality is often lower (older stock).
              </p>
            </div>
          </section>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Not booking bamboo rafting before you arrive", desc: "This is the most consistent mistake at Thekkady. Bamboo rafting books out weeks in advance in peak season (October–March). Online booking opens 30 days ahead at 9am on the Kerala Forest Department website. Do this before you finalize your travel dates, not after. Walk-in availability is not reliable.", icon: "🛶" },
                { title: "Expecting tiger sightings on the boat safari", desc: "Periyar Tiger Reserve has approximately 35 tigers in 925km². The boat safari covers the lake edge — a very small portion of the reserve. Tiger sightings are genuinely rare. What you will reliably see: elephants at the water's edge (the main reason to come), gaur, wild boar, and excellent birdlife. Elephants alone are worth the trip.", icon: "🐯" },
                { title: "Buying spices from hotel-zone tourist shops", desc: "The spice shops near the Periyar Lake entrance and most hotels charge 3x the market price for spices that may also be older stock. Walk 10 minutes to Kumily bazaar and buy from the market stalls there. 100g of cardamom pods costs ₹120–₹180 vs. ₹400–₹500 in tourist shops.", icon: "🌶️" },
                { title: "Missing the tribal cultural programme", desc: "The Mannan and Paliyan tribal communities run guided nature walks and cultural exchanges that most visitors skip because they're not in standard tour packages. The tribal guide programme (book through the Forest Department) gives you access to forest knowledge that no regular nature guide can match.", icon: "🌿" },
                { title: "Visiting May–June", desc: "May–June in Thekkady is hot (35°C+) and the pre-monsoon period. The bamboo rafting experience in heat is uncomfortable. From October, temperatures drop to 20–25°C and morning mist covers the lake — the conditions that make Thekkady genuinely atmospheric. October–March is the correct window.", icon: "🌡️" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── TIPS ── */}
          <section id="tips" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💡 Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "⏰", title: "7am Boat Safari Slot — Non-Negotiable", desc: "The KTDC boat counter opens at 7am. Be there by 6:45am in peak season (October–March) as the upper deck seats and the 7am slot sell out first. The 7am departure is when elephants are at the lake edge. The 9:30am and later boats see significantly less wildlife.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "📱", title: "Book Bamboo Rafting 30 Days Ahead Online", desc: "Go to the Kerala Forest Department website. Bamboo rafting booking opens exactly 30 days before the date, at 9am. Set a calendar reminder. If you miss the online window, walk-in spots occasionally become available from cancellations — check at the Forest Department office at 7:30am on the day.", color: "bg-emerald-50 border-emerald-200" },
                { icon: "🌿", title: "Stay Near Kumily Town, Not the Lake Zone", desc: "Hotels in the 'eco-lodge' cluster near the Periyar Lake entrance are more expensive and isolated. Kumily town is a 10-minute walk from the boat counter, has better restaurants, the bazaar, and more homestay options. You don't need to be next to the reserve — you just need to be up at 6:45am.", color: "bg-amber-50 border-amber-200" },
                { icon: "🎋", title: "The Kalaripayattu Show Starts at 6pm", desc: "Kadathanadan Kalari Centre's evening performance runs at 6pm and 7:30pm. The 45-minute show includes weapons demonstrations (sword and shield, urumi — a flexible sword), oil massage demonstrations, and acrobatic sequences. ₹200 entry. The performers are trained fighters, not actors.", color: "bg-amber-50 border-amber-200" },
                { icon: "🚗", title: "Combine with Munnar on Day 3", desc: "The Thekkady–Munnar road (115km, 3 hours) through the Cardamom Hills is one of Kerala's best drives. If routing via Munnar to Kochi, do Thekkady Days 1–2 and drive to Munnar on Day 3 for tea estates and Eravikulam National Park. This makes a natural 5-day South Kerala circuit.", color: "bg-teal-50 border-teal-200" },
                { icon: "🌙", title: "Night Sounds Walk at the Buffer Zone", desc: "Some operators offer 2-hour night walks in the Thekkady forest buffer zone (outside the core reserve area) with forest guides. Different animals are active at night: civets, porcupines, nocturnal birds. The sounds of the forest at night are as remarkable as the daylight experience. Ask at the Forest Department office.", color: "bg-teal-50 border-teal-200" },
              ].map((t) => <TipCard key={t.title} {...t} />)}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">
              Tell us your dates, group size, and budget — we&apos;ll send a personalised Thekkady itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Thekkady Trip →</button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Contact Us →</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How do I book bamboo rafting in Thekkady?", a: "Bamboo rafting in Thekkady is run by the Kerala Forest Department. Online booking opens 30 days before the date at 9am on the Forest Department website. Cost is ₹1,150 per person (fixed). Groups of 4–6 people per raft. During peak season (October–March), slots sell out within hours of opening. Book before your travel dates are finalised. Walk-in availability is unreliable." },
                { q: "Will I see tigers on the Periyar boat safari?", a: "Tiger sightings on the Periyar Lake boat safari are rare. The reserve has approximately 35 tigers across 925km² — the chances on any single boat trip are low. What you will reliably see are elephants at the lake edge (a genuine highlight), Indian bison (gaur), wild boar, various waterbirds, and otters. The elephant sightings on the 7am departure are consistently excellent." },
                { q: "What is the best time to visit Thekkady?", a: "October to March is the best window. October–November is post-monsoon — the forest is green, elephants are visible, temperatures are 20–25°C, and morning mist covers the lake. December–February is the driest and most comfortable. March sees slightly warmer temperatures but is still good. Avoid May–June (hot, 35°C+, uncomfortable for outdoor activities)." },
                { q: "How far is Thekkady from Kochi and Munnar?", a: "Thekkady (Kumily) is 190km from Kochi airport — about 4.5 hours by road. From Munnar, it is 115km, roughly 3 hours through the Cardamom Hills. The Munnar–Thekkady drive is one of the most scenic in Kerala. A logical circuit is Kochi → Munnar (3 days) → Thekkady (3 days) → Kochi, covering the best of Kerala's hill country." },
                { q: "Where should I buy spices in Thekkady?", a: "Buy from Kumily bazaar (the main town market), not from tourist shops near the Periyar Lake entrance. Kumily bazaar prices are 2–3x lower: cardamom pods ₹120–₹180 per 100g, whole black peppercorns ₹80–₹120 per 100g, vanilla pods ₹200–₹400 each. Buy whole spices rather than powders — the flavour degrades rapidly after grinding." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Planning a Kerala Circuit?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Wayanad — 3 Day Wildlife Guide", href: "/blog/wayanad-3-days" },
                { label: "Munnar — 3 Day Tea Estate Guide", href: "/blog/munnar-3-days" },
                { label: "Bangalore — 3 Day City Guide", href: "/blog/bangalore-3-days" },
                { label: "Gangtok — 3 Day Himalaya Guide", href: "/blog/gangtok-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">View →</span>
                </Link>
              ))}
            </div>
          </section>

          <DestinationGallery
            title="Thekkady — Periyar & the Spice Hills"
            subtitle="Tiger reserve, spice plantations, and Kerala's wild interior."
            spots={[
              { name: "Periyar Lake", query: "periyar lake thekkady kerala boat safari elephants hills india", desc: "Boating on Periyar Lake with elephants and gaur on the shore." },
              { name: "Spice Plantation", query: "thekkady spice plantation kerala cardamom pepper cinnamon india", desc: "Cardamom, pepper, cinnamon — Thekkady is the spice capital of Kerala." },
              { name: "Periyar Tiger Reserve", query: "periyar tiger reserve thekkady kerala forest wildlife india", desc: "One of India's finest wildlife reserves — tigers, elephants, and giant squirrels." },
              { name: "Kumily Town", query: "kumily town thekkady kerala spice market tea shop india", desc: "The gateway town to Periyar — spice markets and tea shops." },
              { name: "Bamboo Rafting", query: "bamboo rafting periyar thekkady kerala river forest adventure india", desc: "Bamboo rafting through the Periyar Tiger Reserve — unique Kerala experience." },
            ]}
          />

         

          <RelatedGuides currentSlug="thekkady-3-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
