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

const TOC = [
  { id: "honest",    emoji: "⚡", label: "What Varanasi Actually Is" },
  { id: "ghats",    emoji: "🏛️", label: "The Ghats Guide" },
  { id: "itinerary", emoji: "📅", label: "3-Day Itinerary" },
  { id: "aarti",    emoji: "🔥", label: "Ganga Aarti Guide" },
  { id: "budget",   emoji: "💰", label: "Budget Breakdown" },
  { id: "food",     emoji: "🍛", label: "What to Eat" },
  { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
  { id: "faq",      emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const u = () => { const e = document.documentElement; setP(Math.min(100, (e.scrollTop / (e.scrollHeight - e.clientHeight)) * 100)); };
    window.addEventListener("scroll", u, { passive: true });
    return () => window.removeEventListener("scroll", u);
  }, []);
  return <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2"><div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} /></div>;
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Varanasi 3-Day Guide&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://twitter.com/intent/tweet?text=Varanasi%203-Day%20Travel%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
      <button onClick={() => { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="bg-parchment border border-parchment-2 text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:border-gold transition-colors text-muted">{copied ? "✓ Copied" : "Copy Link"}</button>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

export default function VaranasiClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const ghats = [
    { name: "Dashashwamedh Ghat", type: "Essential", color: "bg-amber-50 border-amber-300", desc: "The most important ghat — where the evening Ganga Aarti happens every night. In Hindu mythology, Lord Brahma created this ghat to welcome Lord Shiva. The most photographed spot in Varanasi." },
    { name: "Manikarnika Ghat", type: "Sobering", color: "bg-red-50 border-red-200", desc: "The burning ghat — 24-hour cremation, 80–100 bodies a day, 3,000+ years of continuous use. No photography ever. Observe quietly from steps or a boat. One of the most profound experiences in India." },
    { name: "Assi Ghat", type: "Relaxed", color: "bg-green-50 border-green-200", desc: "Southern end of the ghat complex. Morning yoga, chai stalls, young people. Less intense than the main ghats. Good base for your hotel." },
    { name: "Scindia Ghat", type: "Photogenic", color: "bg-blue-50 border-blue-200", desc: "The temple that partially sank into the Ganges over centuries still stands, half-submerged. One of Varanasi's most surreal images. Best photographed from a boat." },
    { name: "Harishchandra Ghat", type: "Second burning", color: "bg-orange-50 border-orange-200", desc: "The smaller of the two burning ghats. Less visited than Manikarnika, equally significant. Electric cremation also available here — a contrast worth noting." },
    { name: "Panchganga Ghat", type: "Hidden", color: "bg-purple-50 border-purple-200", desc: "Where 5 sacred rivers are believed to meet underground. The historic mosque above the ghat and the view downstream is one of Varanasi's quietest and most beautiful." },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Varanasi" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage imageKey="varanasi" fallback="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1600&q=85" alt="Varanasi ghats Ganges river" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Varanasi 3 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-[0.62rem] tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Oldest Living City</span>
                <span className="text-white/60 text-xs">March 21, 2026</span>
                <span className="text-white/30">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Varanasi in 3 Days:<em className="italic text-amber-300"> Ghats, Ganga Aarti & the Ganges</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">The most intense, overwhelming and unforgettable city in India — what to expect, what shocks you and what stays with you long after you leave.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🕯️ Varanasi</span><span>·</span><span>🗓 3 Days</span><span>·</span><span>💰 From ₹6,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Varanasi Actually Is</h2>
            <blockquote className="border-l-4 border-amber-500 pl-6 mb-6 bg-amber-50 rounded-r-xl py-4 pr-4">
              <p className="font-serif text-[1.05rem] italic text-ink-mid leading-relaxed">Varanasi is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together. — Mark Twain</p>
            </blockquote>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Varanasi is not a comfortable city. It will overwhelm you — the noise, the crowds, the smoke from the burning ghats, the smell, the cows, the narrow lanes. Most visitors arrive feeling shocked and leave feeling they've experienced something they can't quite explain.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">It is also one of the oldest continuously inhabited cities on earth — over 3,000 years old. Every major Indian religion has roots here. The Ganges is both a river and a living deity. Death happens publicly. Life happens loudly. It is the most intensely alive place in India.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🏛️", val: "3,000+", label: "Years old" },
                { icon: "🕯️", val: "84", label: "Ghats" },
                { icon: "🔥", val: "80–100", label: "Cremations/day" },
                { icon: "💰", val: "₹6,000+", label: "Budget from" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* GHATS GUIDE */}
          <section id="ghats" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🏛️ The Ghats — What to Know</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Varanasi has 84 ghats stretching 7km along the Ganges. You can't see all of them — and you shouldn't try. Here are the ones that matter and why.</p>
            <div className="space-y-3">
              {ghats.map((g) => (
                <div key={g.name} className={`rounded-xl p-4 border ${g.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-ink">{g.name}</p>
                    <span className="text-[0.65rem] font-medium bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/60">{g.type}</span>
                  </div>
                  <p className="text-xs text-muted font-light leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 font-light leading-relaxed"><strong className="font-medium">The most important thing:</strong> Walk the ghats north to south in the morning. The 7km takes about 2 hours at a slow pace. This is the single most important thing you can do in Varanasi. The parade of life along the river — pilgrims, priests, dhobis washing laundry, sadhus meditating, children playing — is unlike anything else in India.</p>
            </div>
          </section>

          {/* ITINERARY */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 The 3-Day Itinerary</h2>

            {/* Day 1 */}
            <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
              <div className="bg-parchment px-5 py-4 flex items-center gap-3">
                <span className="font-serif text-xl text-gold-dark font-light">Day 1</span>
                <span className="text-sm text-ink font-medium">Arrive + Evening Ganga Aarti</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { time: "Afternoon", content: "Train or flight into Varanasi. Check in near Assi Ghat or Dashashwamedh Ghat — these are the two best ghat areas for accommodation. Avoid hotels more than 500m from the river.", tip: null },
                  { time: "4pm", content: "Walk to Dashashwamedh Ghat. Get there by 5:30pm latest (6:30pm in summer). Find your spot on the ghat steps — not on a boat for your first visit. Being on the steps, surrounded by pilgrims and flowers and incense, is the real experience. A boat puts you at a distance from it.", tip: null },
                  { time: "Sunset", content: "Evening Ganga Aarti — 7 priests perform a fire ritual simultaneously on the main ghat. Bells, conch shells, lamps, incense. The crowd of thousands of pilgrims and tourists merges into something larger. One of India's most moving ritual experiences.", tip: "Arrive 30–45 minutes early for a seated spot. Free to watch. Donation basket passes around — Rs.51–Rs.101 is respectful." },
                  { time: "After Aarti", content: "Dinner in Vishwanath Gali — the narrow lane leading from Dashashwamedh into the old city. Street food: kachori sabzi, jalebi, tamatar chaat. Everything Rs.30–Rs.80.", tip: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded whitespace-nowrap mt-0.5">{item.time}</span>
                    <div>
                      <p className="text-sm text-muted font-light leading-relaxed">{item.content}</p>
                      {item.tip && <p className="text-xs text-teal bg-teal/10 px-3 py-1.5 rounded-lg mt-1.5 font-light">💡 {item.tip}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
              <div className="bg-parchment px-5 py-4 flex items-center gap-3">
                <span className="font-serif text-xl text-gold-dark font-light">Day 2</span>
                <span className="text-sm text-ink font-medium">Morning Ganges Boat + Kashi Vishwanath Temple</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { time: "5am", content: "Wake up and walk or take a rickshaw to Dashashwamedh Ghat. Hire a rowing boat — NOT a motorboat. Rs.200–Rs.400 for 1 hour (negotiate before boarding, agree on duration and price). A rowing boat is slower but silent — you can hear the river.", tip: "Bargain from Rs.150 upward. Never pay more than Rs.500 for a 1-hour rowing boat for 2 people." },
                  { time: "5:30–7am", content: "Sunrise boat ride — row north past all 84 ghats. The sun rises over the horizon across the flat plain on the east bank (the Varanasi side faces west, so the light hits the ghats perfectly). Watch pilgrims bathing, see Manikarnika burning ghat from the water (photography forbidden even from water).", tip: null },
                  { time: "8am", content: "Breakfast at Brown Bread Bakery near Assi Ghat — Rs.150–Rs.250. Best filter coffee in Varanasi. Run by a social enterprise that trains underprivileged youth.", tip: null },
                  { time: "10am", content: "Kashi Vishwanath Temple (one of 12 Jyotirlingas, sacred to Lord Shiva). Long queue — arrive by 9:30am to beat it. Dress code strict: cover shoulders and legs. Mobile phones not allowed inside. Leave bags at locker service nearby (Rs.20). Entry free.", tip: "The Kashi Vishwanath Corridor — newly built — makes access much easier than it was. The temple itself is small but electrifyingly intense. Smell of marigolds, milk, sound of bells." },
                  { time: "12pm", content: "Old City lanes walk — get deliberately lost in the galis (narrow lanes) north of Vishwanath Temple. Find the silk weavers, the paan sellers, the tiny temples down every lane. Varanasi has the finest silk in India — original Banarasi silk saris woven on handlooms.", tip: null },
                  { time: "Evening", content: "Sunset at Assi Ghat — smaller aarti here, less crowded than Dashashwamedh. Then the evening on the ghats — tea stalls, tabla music, conversation with sadhus.", tip: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded whitespace-nowrap mt-0.5">{item.time}</span>
                    <div>
                      <p className="text-sm text-muted font-light leading-relaxed">{item.content}</p>
                      {item.tip && <p className="text-xs text-teal bg-teal/10 px-3 py-1.5 rounded-lg mt-1.5 font-light">💡 {item.tip}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
              <div className="bg-parchment px-5 py-4 flex items-center gap-3">
                <span className="font-serif text-xl text-gold-dark font-light">Day 3</span>
                <span className="text-sm text-ink font-medium">Sarnath Day Trip + Departure</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { time: "8am", content: "Auto-rickshaw to Sarnath (12km, Rs.150–Rs.250 return, wait for you). Where the Buddha gave his first sermon after enlightenment. The Dhamek Stupa (5th century CE) and the Ashoka Pillar capital (now India's national emblem) are here.", tip: "Sarnath Archaeological Museum: Rs.25 entry, has the original Ashoka Lion Capital — the one on every Indian coin and note. Extraordinary to see in person." },
                  { time: "10am", content: "Sarnath Deer Park — where the Buddha delivered the first dharma discourse to his five disciples. The Buddhist monasteries from 7 countries are all open to visit (Thai, Japanese, Chinese, Burmese, Tibetan — all free).", tip: null },
                  { time: "12pm", content: "Return to Varanasi. Lunch: Kashi Chat Bhandar near Vishwanath — tamatar chaat Rs.30, the most famous street food in Varanasi. Then shopping: Banarasi silk from a government emporium (authentic, fixed price). Avoid private shops near tourist areas.", tip: null },
                  { time: "Afternoon", content: "Final ghat walk at your own pace. The ghats are different every hour — afternoon light on the river is golden and quiet. Last chai at a ghat-side stall (Rs.10).", tip: null },
                  { time: "Evening", content: "Departure. Varanasi Junction (BSB) is 3km from the ghats — auto Rs.100–Rs.150, allow 45 minutes. Varanasi airport (VNS) is 25km — taxi Rs.500–Rs.700, allow 1.5 hours.", tip: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded whitespace-nowrap mt-0.5">{item.time}</span>
                    <div>
                      <p className="text-sm text-muted font-light leading-relaxed">{item.content}</p>
                      {item.tip && <p className="text-xs text-teal bg-teal/10 px-3 py-1.5 rounded-lg mt-1.5 font-light">💡 {item.tip}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* GANGA AARTI GUIDE */}
          <section id="aarti" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🔥 Ganga Aarti — The Complete Guide</h2>
            <p className="text-sm text-muted font-light mb-6">The evening Ganga Aarti is the reason most people come to Varanasi. Here's everything you need to know.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Timing", icon: "⏰", content: "Sunset — approximately 6:30pm (winter) to 7:15pm (summer). Check sunset time for your date. Arrive 30–45 minutes early. The ceremony lasts 45 minutes." },
                { title: "Where to stand", icon: "📍", content: "Ghat steps: free, surrounded by locals, the real experience. Boat: Rs.200–Rs.500/person, good view but you miss the energy of the crowd. Roof terrace of riverside hotel: Rs.200–Rs.500, elevated view." },
                { title: "What happens", icon: "🕯️", content: "7 priests perform simultaneous fire rituals with massive brass lamps, incense, conch shells and bells. The ceremony is dedicated to the River Ganges as a deity. Crowds of 10,000–30,000 pilgrims and tourists." },
                { title: "Morning aarti", icon: "🌅", content: "A smaller aarti happens at sunrise at Dashashwamedh. Only 50–100 people present. Infinitely more peaceful. If you can wake up at 5am, this is the better aarti." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2"><span className="text-lg">{item.icon}</span><p className="font-medium text-sm text-ink">{item.title}</p></div>
                  <p className="text-xs text-muted font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BUDGET */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead><tr className="bg-parchment">
                  <th className="text-left p-3.5 text-xs font-medium text-muted">Category</th>
                  <th className="p-3.5 text-xs font-medium text-amber-700 text-center">Budget</th>
                  <th className="p-3.5 text-xs font-medium text-teal-700 text-center">Mid-Range</th>
                  <th className="p-3.5 text-xs font-medium text-purple-700 text-center">Luxury</th>
                </tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (3N)", "₹1,800–₹3,000", "₹4,500–₹9,000", "₹12,000–₹30,000"],
                    ["🍽 Food & Chai", "₹600–₹1,200", "₹2,000–₹4,000", "₹5,000–₹10,000"],
                    ["🚗 Transport", "₹500–₹900", "₹1,500–₹2,500", "₹3,000–₹5,000"],
                    ["🛶 Boat Rides", "₹400–₹800", "₹800–₹1,500", "₹2,000–₹4,000"],
                    ["🎯 Sarnath + entries", "₹300–₹500", "₹500–₹800", "₹1,000–₹2,000"],
                    ["TOTAL per person", "₹6,000–₹10,000", "₹12,000–₹20,000", "₹28,000–₹55,000"],
                  ].map(([cat,...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v,i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">Varanasi is one of India's cheapest major cities. Most of the best experiences — Ganga Aarti, ghat walks, temple visits — are free.</p>
          </section>

          {/* FOOD */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 What to Eat in Varanasi</h2>
            <p className="text-sm text-muted font-light mb-6">Varanasi has some of the best street food in India — most of it costs Rs.20–Rs.80.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { dish: "Kachori Sabzi", where: "Any street stall near ghats, 6–9am", price: "Rs.30–Rs.40", desc: "Deep-fried puffed bread with spiced potato curry. The definitive Varanasi breakfast. Best in the morning when the oil is fresh.", color: "bg-amber-50 border-amber-200" },
                { dish: "Tamatar Chaat", where: "Kashi Chat Bhandar, Vishwanath Gali", price: "Rs.30–Rs.50", desc: "Varanasi's signature chaat — tomato-based, tangy, with sev and chutneys. Different from anywhere else in India. Queue for it.", color: "bg-red-50 border-red-200" },
                { dish: "Banarasi Paan", where: "Any paan shop, everywhere", price: "Rs.20–Rs.50", desc: "The most famous paan in India — sweet variety with gulkand (rose petal jam), dry fruits, fennel. The mitha (sweet) variety is for everyone, not just paan lovers.", color: "bg-green-50 border-green-200" },
                { dish: "Lassi at Blue Lassi", where: "Blue Lassi Shop, Vishwanath Gali", price: "Rs.100–Rs.200", desc: "Varanasi's most famous lassi shop — 70 years old, clay pots, thick yogurt. Queue of 20–30 people at all times. Worth the wait.", color: "bg-blue-50 border-blue-200" },
                { dish: "Thandai", where: "Pehelwan Lassi, near Dashashwamedh", price: "Rs.60–Rs.100", desc: "Cold milk drink with nuts, seeds and spices. Original Varanasi style — served in clay kulhad. Especially good in summer.", color: "bg-purple-50 border-purple-200" },
                { dish: "Malaiyo", where: "Old City, November–February only", price: "Rs.30–Rs.50", desc: "Winter-only dessert — foam of milk, saffron and cardamom. Disappears in the morning sun. One of India's most ephemeral dishes.", color: "bg-pink-50 border-pink-200" },
              ].map((f) => (
                <div key={f.dish} className={`rounded-xl p-4 border ${f.color}`}>
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                    <p className="font-medium text-sm text-ink">{f.dish}</p>
                    <span className="text-[0.65rem] font-medium text-teal">{f.price}</span>
                  </div>
                  <p className="text-[0.65rem] text-muted mb-2">{f.where}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AffiliateBlock
            destination="Varanasi Ganges"
            hotels={[
              { name: "Brijrama Palace", type: "Heritage Palace · Ganges frontage", price: "From ₹8,000/night", rating: "5", badge: "Most iconic", url: "https://www.booking.com/hotel/in/brijrama-palace.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Suryauday Haveli", type: "Heritage · Shivala Ghat", price: "From ₹4,000/night", rating: "4", badge: "Ghat views", url: "https://www.booking.com/hotel/in/suryauday-haveli.html?aid=YOUR_AFFILIATE_ID" },
              { name: "Hotel Ganges View", type: "Mid-range · Assi Ghat", price: "From ₹2,500/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/in/hotel-ganges-view.html?aid=YOUR_AFFILIATE_ID" },
            ]}
            activities={[
              { name: "Ganga Aarti Evening Ceremony + Boat", duration: "2 hours", price: "From ₹500/person", badge: "Must do", url: `https://www.getyourguide.com/varanasi-l971/?partner_id=PSZA5UI` },
              { name: "Sunrise Boat Ride on the Ganges", duration: "1.5 hours", price: "From ₹300/person", badge: "Most peaceful", url: `https://www.getyourguide.com/varanasi-l971/?partner_id=PSZA5UI` },
              { name: "Varanasi Old City Heritage Walk", duration: "3 hours", price: "From ₹800/person", url: `https://www.getyourguide.com/varanasi-l971/?partner_id=PSZA5UI` },
              { name: "Sarnath Day Trip from Varanasi", duration: "Half day", price: "From ₹600/person", url: `https://www.getyourguide.com/varanasi-l971/?partner_id=PSZA5UI` },
            ]}
          />

          <DestinationGallery
            title="Varanasi — The City of Light"
            subtitle="The most photographed and most complex city in India."
            spots={[
              { name: "Dashashwamedh Ghat", query: "dashashwamedh ghat varanasi ganga aarti fire ceremony", desc: "Where the evening Ganga Aarti happens nightly — 7 priests, fire lamps, thousands of pilgrims." },
              { name: "Morning Ganges boat", query: "varanasi sunrise boat ganges river morning ghats", desc: "Sunrise boat ride past all 84 ghats — one of the most powerful travel experiences in India." },
              { name: "Manikarnika Ghat", query: "varanasi burning ghat cremation ganga river india", desc: "The burning ghat — 24-hour cremation, 3,000+ years continuous. No photography. Observe quietly." },
              { name: "Sarnath Stupa", query: "sarnath dhamek stupa buddha varanasi india", desc: "Where the Buddha gave his first sermon. The 5th-century Dhamek Stupa and the original Ashoka Lion Capital." },
              { name: "Old City Lanes", query: "varanasi old city gali narrow lanes temple india", desc: "The ancient lanes behind the ghats — silk weavers, tiny temples, chai stalls, the smell of marigolds and incense." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "📸", title: "Photographing at Manikarnika Ghat", desc: "No photography at the burning ghats — ever, not even from a boat. This is not a tourist attraction. Families are grieving. Cameras have been smashed. Put your phone away completely when near the cremations.", color: "bg-red-50 border-red-200" },
                { icon: "🛶", title: "Taking a motorboat for the sunrise ride", desc: "Motorboats are loud, fast and miss everything. A rowing boat is Rs.100 more but gives you silence on the river at dawn — one of the most peaceful experiences you can have in India.", color: "bg-white border-parchment-2" },
                { icon: "💎", title: "Buying silk from shops near the ghats", desc: "Shops on and near the ghats are overpriced tourist traps. Buy Banarasi silk at the UP Handloom Corporation government emporium or ask your hotel for trusted weavers. Genuine Banarasi silk costs Rs.3,000 minimum.", color: "bg-white border-parchment-2" },
                { icon: "🧘", title: "Skipping Sarnath", desc: "12km and 30 minutes from Varanasi. Most travellers skip it because they're tired. This is a mistake — the Dhamek Stupa where the Buddha gave his first sermon, and the Ashoka Lion Capital (India's national emblem), are extraordinary.", color: "bg-white border-parchment-2" },
                { icon: "🌙", title: "Not going to the ghats at dawn", desc: "The ghats at 5:30am are completely different from afternoon and evening. Empty, misty, devotional. The morning boat ride is the single most important thing you can do in Varanasi. Set your alarm.", color: "bg-white border-parchment-2" },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{m.icon}</span><div><p className="font-medium text-sm text-ink mb-1">❌ {m.title}</p><p className="text-xs text-muted font-light leading-relaxed">{m.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Adding Varanasi to Your India Trip?</h2>
            <p className="text-sm text-white/55 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Varanasi pairs perfectly with the Golden Triangle or Rajasthan. Tell us your full itinerary and we'll help plan the routing.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My India Trip →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "Is Varanasi safe for tourists?", a: "Yes — with normal precautions. The ghats are busy and well-populated at all hours. Watch your belongings in crowded areas. Avoid isolated alleys at night. The main tourist areas are safe." },
                { q: "What time is the Ganga Aarti?", a: "Sunset — approximately 6:30pm (winter) to 7:15pm (summer). Check sunset time for your date. Arrive 30–45 minutes early. Morning aarti at sunrise is smaller and more peaceful." },
                { q: "Should I see the burning ghats?", a: "Manikarnika Ghat is a significant part of Varanasi's identity — cremations have happened here for 3,000+ years. You can observe respectfully from the steps or river. No photography ever. Many visitors find it sobering and moving." },
                { q: "How do I get to Varanasi?", a: "By train from Delhi: 8–12hrs (Rs.500–Rs.1,500). Vande Bharat Express is fastest (8hrs). By air: flights from Delhi (1hr 20min), Mumbai (2hrs), Bangalore (2.5hrs) to Varanasi airport (VNS)." },
                { q: "What is the best month to visit Varanasi?", a: "October–March is ideal — comfortable temperatures (15–28°C), clear skies, best light for photography. Avoid May–June (extreme heat, 45°C+) and July–August (monsoon). November has the Dev Deepawali festival — 10 lakh lamps on the ghats — the most spectacular night in Varanasi." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Continue Your India Journey</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Golden Triangle 7 Days — Taj Mahal", href: "/blog/golden-triangle-7-days" },
                { label: "Rajasthan 7 Days — Royal Circuit", href: "/blog/rajasthan-7-days" },
                { label: "Kashmir 6 Days — Heaven on Earth", href: "/blog/kashmir-6-days" },
                { label: "Kerala 5 Days — Backwaters", href: "/blog/kerala-5-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="varanasi-3-days" />
          <RelatedGuides currentSlug="varanasi-3-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
