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
  { id: "honest", emoji: "⚡", label: "What Kanchipuram Actually Is" },
  { id: "temples", emoji: "🛕", label: "The Four Temple Districts" },
  { id: "itinerary", emoji: "📅", label: "2-Day Itinerary" },
  { id: "silk", emoji: "🧵", label: "Buying Kanjivaram Silk" },
  { id: "budget", emoji: "💰", label: "Budget Breakdown" },
  { id: "food", emoji: "🍛", label: "What to Eat" },
  { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
  { id: "faq", emoji: "❓", label: "FAQ" },
];

function ReadingProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const u = () => {
      const e = document.documentElement;
      setP(Math.min(100, (e.scrollTop / (e.scrollHeight - e.clientHeight)) * 100));
    };
    window.addEventListener("scroll", u, { passive: true });
    return () => window.removeEventListener("scroll", u);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[300] h-1 bg-parchment-2">
      <div className="h-full bg-gold transition-all duration-100" style={{ width: `${p}%` }} />
    </div>
  );
}

function ShareBar() {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-muted uppercase tracking-widest mr-1">Share</span>
      <a href={`mailto:?subject=Kanchipuram 2-Day Guide&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Kanchipuram%20Temple%20%26%20Silk%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
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
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>+</span>
      </button>
      {open && <div className="px-5 pb-5 pt-1 border-t border-parchment-2"><p className="text-sm text-muted font-light leading-relaxed">{a}</p></div>}
    </div>
  );
}

export default function KanchipuramClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const temples = [
    { name: "Kailasanathar Temple", era: "8th century CE · Pallava", color: "bg-amber-50 border-amber-300", desc: "The oldest temple in Kanchipuram and one of the oldest structural temples in South India. Built by Rajasimha Pallava in sandstone — not granite like later temples. The circumambulatory passage has 58 shrines. Unusual for Tamil Nadu: photography is allowed everywhere. The unfinished carvings on the rear wall show exactly how Pallava sculptors worked." },
    { name: "Ekambareswarar Temple", era: "Ancient · Prithvi Lingam", color: "bg-green-50 border-green-200", desc: "One of the Pancha Bhoota Sthalams — representing Earth (Prithvi). The temple complex covers 25 acres, making it one of the largest in India. The 3,500-year-old mango tree in the courtyard is extraordinary — each branch is said to bear fruit of a different taste. The 1,000-pillar mandapam is stunning." },
    { name: "Kamakshi Amman Temple", era: "Ancient · Shakti Peetham", color: "bg-rose-50 border-rose-200", desc: "One of the three major Shakti Peethams in India (along with Madurai Meenakshi and Varanasi Vishalakshi). The presiding deity sits in Padmasana — the only Shakti deity in this yogic posture. Adi Shankaracharya established the Sri Chakra here. Active, crowded, intensely devotional." },
    { name: "Varadaraja Perumal Temple", era: "11th century CE · Chola", color: "bg-blue-50 border-blue-200", desc: "The major Vaishnavite temple — 100-pillar mandapam with extraordinary stone chain carvings (a single stone carved to look like a hanging chain). The Athi Varadar idol is submerged in a tank and brought out once every 40 years (last: 2019, next: 2059). Entry to the sanctum requires traditional dress." },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Kanchipuram" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage query="kailasanathar temple kanchipuram pallava sandstone architecture tamil nadu" fallback="https://images.unsplash.com/photo-1621427642928-21f0e1adaaac?w=1600&q=85" alt="Kailasanathar Temple Kanchipuram sandstone Pallava architecture" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Kanchipuram 2 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Temple City</span>
                <span className="text-white/60 text-xs">April 8, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">11 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Kanchipuram in 2 Days:<em className="italic text-amber-300"> Pallava Temples & Kanjivaram Silk</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">One of India&apos;s seven sacred cities — where 8th-century sandstone temples meet the world&apos;s finest silk weaving tradition.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🛕 Kanchipuram</span><span>·</span><span>🗓 2 Days</span><span>·</span><span>💰 From ₹4,500</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Kanchipuram Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Kanchipuram is not a big city — it&apos;s a small, dusty Tamil Nadu temple town 75km from Chennai. The streets are narrow, the traffic is chaotic, and outside the temples there isn&apos;t much to look at. What makes it extraordinary is what&apos;s inside those temples.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">This was the capital of the Pallava dynasty — the people who essentially invented Dravidian temple architecture. Kailasanathar Temple here is older than most European cathedrals. The town is also one of India&apos;s seven Moksha-giving cities, alongside Varanasi, Haridwar, Ujjain, Ayodhya, Mathura and Dwarka.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">And then there&apos;s the silk. Kanchipuram is the undisputed origin of the Kanjivaram sari — the heaviest, most lustrous, most expensive handloom silk in India. Buying a sari here is not shopping. It&apos;s a pilgrimage.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🛕", val: "1,000+", label: "Temples" },
                { icon: "📜", val: "1,300+", label: "Years of history" },
                { icon: "🧵", val: "5,000+", label: "Weaver families" },
                { icon: "💰", val: "₹4,500+", label: "Budget from" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TEMPLES */}
          <section id="temples" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 The Four Temple Districts</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Kanchipuram has over 1,000 temples, but four define the city. Two Shaivite, one Shakti, one Vaishnavite — the full spectrum of Hindu worship in one small town.</p>
            <div className="space-y-3">
              {temples.map((t) => (
                <div key={t.name} className={`rounded-xl p-4 border ${t.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{t.name}</p>
                    <span className="text-[0.65rem] font-medium bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/60">{t.era}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 font-light leading-relaxed"><strong className="font-medium">Also worth visiting:</strong> Vaikunta Perumal Temple (8th century, another Pallava masterpiece with narrative relief panels on three levels) and Kumarakottam Temple (dedicated to Lord Murugan, one of the six Arupadai Veedu temples). Both are free and usually empty of tourists.</p>
            </div>
          </section>

          {/* ITINERARY */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 The 2-Day Itinerary</h2>

            {/* Day 1 */}
            <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
              <div className="bg-parchment px-5 py-4 flex items-center gap-3">
                <span className="font-serif text-xl text-amber-900 font-light">Day 1</span>
                <span className="text-sm text-ink font-medium">The Major Temples</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { time: "6am", content: "Leave Chennai early by bus from CMBT (₹60–₹100, every 15–20 minutes) or hire a car (₹2,500–₹3,500 return including wait). The drive is 75km, 1.5–2 hours depending on traffic. Arrive Kanchipuram by 8am.", tip: "If doing a day trip, a car with driver is worth it — temples are spread across the town and auto-rickshaws add up." },
                  { time: "8am", content: "Kailasanathar Temple first — it opens at 6am and is best in morning light. The oldest structural temple in Kanchipuram, built entirely in sandstone by Rajasimha Pallava (685–705 CE). The 58 sub-shrines in the circumambulatory passage each have unique carvings. Spend 45–60 minutes here. Free entry.", tip: "This is the one temple where photography is fully allowed. The rear wall with half-finished carvings is extraordinary — you can see the sculptors' working process." },
                  { time: "9:30am", content: "Ekambareswarar Temple — one of the Pancha Bhoota Sthalams (Earth element). The 25-acre complex is one of India's largest. Don't miss the 3,500-year-old mango tree in the inner courtyard. The 1,000-pillar mandapam is superb. 1–2 hours.", tip: "The mango tree: four branches are said to bear fruit of four different tastes, representing the four Vedas. Whether or not you believe it, the tree is magnificent." },
                  { time: "12pm", content: "Lunch at a local Tamil restaurant — Saravana Bhavan or any clean-looking meals joint. Filter coffee and a thali on a banana leaf. ₹100–₹200 per person.", tip: null },
                  { time: "1:30pm", content: "Kamakshi Amman Temple — the major Shakti Peetham. Active, busy, deeply devotional. The gold-plated vimana catches the afternoon light. Adi Shankaracharya's Kanchi Kamakoti Peetham (one of four major mathas he established) is adjacent. 45 minutes.", tip: null },
                  { time: "3pm", content: "Varadaraja Perumal Temple — the great Vaishnavite temple. The 100-pillar mandapam has stone chain carvings made from a single block of granite — each link moves independently. The Athi Varadar idol is submerged in a tank and emerges once every 40 years (next: 2059). 45–60 minutes.", tip: "Dress code is strict here — men should wear dhoti/veshti or at minimum long trousers. Women should cover shoulders and wear long skirts/saris. Rental available outside for ₹20–₹50." },
                  { time: "5pm", content: "Check in to your hotel if staying overnight. Rest, chai, and an evening walk through the town's silk-weaving neighbourhoods. Many weavers work from home — if you're polite and interested, some will show you the looms.", tip: null },
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
                <span className="font-serif text-xl text-amber-900 font-light">Day 2</span>
                <span className="text-sm text-ink font-medium">Silk Shopping + Smaller Temples + Mahabalipuram</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { time: "8am", content: "Breakfast at the hotel or a local tiffin shop — idli, vada, dosa, filter coffee. ₹60–₹120.", tip: null },
                  { time: "9am", content: "Vaikunta Perumal Temple — another Pallava-era masterpiece (8th century). The three-level sanctum has relief panels that narrate the history of the Pallava dynasty. Usually empty of tourists. 30–40 minutes.", tip: null },
                  { time: "10am", content: "Silk sari shopping — this is why many people come to Kanchipuram. Head to the Co-operative Society or Nalli Silks first (see silk guide below). Budget 2–3 hours for serious shopping. Prices start at ₹3,000 for a simple sari and go up to ₹2,00,000+ for heavy zari wedding saris.", tip: "Don't rush. Let the shopkeeper show you different varieties — the weight, the zari work, the motifs. Ask for the GI certification tag. If you're buying a wedding sari, budget ₹25,000–₹50,000 for genuine quality." },
                  { time: "1pm", content: "Lunch and depart. If heading to Mahabalipuram: 60km east, 1.5 hours by car. The Shore Temple and the Pancha Rathas there are the other great Pallava monuments. If returning to Chennai: 75km, 2 hours by bus or car.", tip: null },
                  { time: "3pm", content: "Optional: Mahabalipuram half-day — Shore Temple (UNESCO), Arjuna's Penance (world's largest open-air rock relief), Pancha Rathas. Entry ₹40 Indians / ₹600 foreigners for the combined ticket. Continue to Chennai from here (60km, 1.5 hours on the scenic ECR coastal road).", tip: "If you're on the Tamil Nadu Temple Circuit, skip Mahabalipuram for now and head south to Thanjavur instead." },
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

          {/* SILK GUIDE — THE DEEP DIVE */}
          <section id="silk" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🧵 Buying Authentic Kanjivaram Silk — The Complete Guide</h2>
            <p className="text-sm text-muted font-light mb-6">Kanchipuram is the only place in the world where authentic Kanjivaram silk is woven. Here&apos;s everything you need to know before you buy.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Where to Buy", icon: "🏪", content: "Kanchipuram Silk Sarees Co-operative Society (government-backed, fixed prices, guaranteed authentic). Nalli Silks (most trusted private brand, multiple showrooms). Sri Kumaran Silks (large selection, competitive prices). Avoid shops near temple entrances — heavy tourist markup." },
                { title: "Price Range", icon: "💰", content: "Simple Kanjivaram: ₹3,000–₹8,000. Everyday wear with decent zari: ₹8,000–₹15,000. Wedding quality (heavy zari, contrast border): ₹25,000–₹50,000. Bridal masterpieces (pure gold zari, 2-3 weeks weaving time): ₹80,000–₹2,00,000+." },
                { title: "The Zari Test", icon: "🔍", content: "Real zari (gold or silver thread): burn a small thread from the pallu edge — it leaves a reddish residue. Fake zari (plastic-coated copper): melts and smells of plastic. Tested zari (semi-genuine): mix of real and synthetic. Always ask the shopkeeper to do this test in front of you." },
                { title: "What to Look For", icon: "✅", content: "GI (Geographical Indication) tag on every authentic sari. Silk mark certification. The body and border are woven separately and interlocked (korvai technique) — you can see the join on the reverse. Weight: a genuine Kanjivaram feels heavier than any other silk." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2"><span className="text-lg">{item.icon}</span><p className="font-medium text-sm text-stone-900">{item.title}</p></div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-800 font-light leading-relaxed"><strong className="font-medium">How to spot fake Kanjivaram:</strong> If a &quot;Kanjivaram sari&quot; costs less than ₹3,000, it&apos;s not real Kanjivaram. Power loom imitations from Surat and Varanasi flood the market. The dead giveaway: the border and body are printed or glued, not interlocked. Turn the sari inside out — if the pattern doesn&apos;t match on both sides, it&apos;s machine-printed. Buy only from certified shops.</p>
            </div>
          </section>

          {/* BUDGET */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown</h2>
            <div className="overflow-x-auto rounded-xl border border-parchment-2 shadow-sm">
              <table className="w-full text-sm">
                <thead><tr className="bg-ink">
                  <th className="text-left p-3.5 text-xs font-medium text-white/70">Category</th>
                  <th className="p-3.5 text-xs font-medium text-amber-300 text-center">Budget</th>
                  <th className="p-3.5 text-xs font-medium text-teal-300 text-center">Mid-Range</th>
                  <th className="p-3.5 text-xs font-medium text-purple-300 text-center">Luxury</th>
                </tr></thead>
                <tbody className="divide-y divide-parchment-2">
                  {[
                    ["🏨 Accommodation (2N)", "₹1,600–₹3,000", "₹4,000–₹7,000", "₹8,000–₹14,000"],
                    ["🍽 Food & Coffee", "₹400–₹700", "₹800–₹1,500", "₹2,000–₹4,000"],
                    ["🚗 Transport (Chennai return)", "₹200–₹400", "₹2,500–₹3,500", "₹4,000–₹6,000"],
                    ["🛕 Temple entries", "Free–₹100", "Free–₹100", "Free–₹100"],
                    ["🧵 Silk sari (optional)", "₹3,000–₹8,000", "₹10,000–₹30,000", "₹50,000–₹2,00,000"],
                    ["TOTAL (excl. silk)", "₹4,500–₹7,000", "₹10,000–₹16,000", "₹18,000–₹30,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">All temple entries are free or nominal (₹10–₹50). The real expense in Kanchipuram is silk — budget accordingly or skip it entirely.</p>
          </section>

          {/* FOOD */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 What to Eat in Kanchipuram</h2>
            <p className="text-sm text-muted font-light mb-6">Kanchipuram is a vegetarian temple town. The food is simple, South Indian, and excellent.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { dish: "Kanchipuram Idli", where: "Any morning tiffin shop", price: "₹30–₹60", desc: "Not regular idli — the Kanchipuram version is made with pepper, cumin, ginger and ghee. Heavier, spicier, unique to this town. Often steamed in banana leaf.", color: "bg-amber-50 border-amber-200" },
                { dish: "Filter Coffee", where: "Any local coffee shop", price: "₹20–₹40", desc: "Tamil Nadu's filter coffee is India's best — chicory-blended, strong, served in a steel tumbler and davara. Drink 3–4 a day. It's mandatory.", color: "bg-green-50 border-green-200" },
                { dish: "Banana Leaf Thali", where: "Saravana Bhavan or Annapoorna", price: "₹100–₹180", desc: "Full South Indian meals on a banana leaf — rice, sambar, rasam, kootu, poriyal, appalam, payasam. Unlimited refills. The proper way to eat in Tamil Nadu.", color: "bg-blue-50 border-blue-200" },
                { dish: "Dosa Varieties", where: "Morning tiffin shops", price: "₹40–₹80", desc: "Masala dosa, ghee roast, onion uttapam, kal dosa. Tamil Nadu does dosa better than anywhere else. The stone-ground batter makes the difference.", color: "bg-red-50 border-red-200" },
                { dish: "Murukku & Mixture", where: "Sweet shops, Pakkoda Kadai", price: "₹20–₹50", desc: "Crunchy rice-flour snacks — buy a packet to take back. Kanchipuram mixture is famous. Good with evening filter coffee.", color: "bg-purple-50 border-purple-200" },
                { dish: "Temple Prasadam", where: "All major temples", price: "₹10–₹20 donation", desc: "Don't skip the prasadam — each temple has its own signature offering. Laddu at Kamakshi Amman, puliyodarai (tamarind rice) at Varadaraja Perumal.", color: "bg-pink-50 border-pink-200" },
              ].map((f) => (
                <div key={f.dish} className={`rounded-xl p-4 border ${f.color}`}>
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                    <p className="font-medium text-sm text-stone-900">{f.dish}</p>
                    <span className="text-[0.65rem] font-medium text-teal">{f.price}</span>
                  </div>
                  <p className="text-[0.65rem] text-muted mb-2">{f.where}</p>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <AffiliateBlock
            destination="Kanchipuram"
            hotels={[
              { name: "GRT Regency Kanchipuram", type: "Mid-range · Best in town", price: "From ₹3,500/night", rating: "4", badge: "Top pick", url: "https://www.booking.com/hotel/in/grt-regency-kanchipuram-kanchipuram.html?aid=2820480" },
              { name: "Hotel Saravana Bhavan", type: "Budget · Near temples", price: "From ₹1,200/night", rating: "3", badge: "Budget pick", url: "https://www.booking.com/searchresults.html?ss=Kanchipuram&aid=2820480" },
              { name: "Radisson Blu Chennai (base option)", type: "Luxury · Day trip from Chennai", price: "From ₹6,000/night", rating: "5", badge: "Chennai base", url: "https://www.booking.com/searchresults.html?ss=Chennai&aid=2820480" },
            ]}
            activities={[
              { name: "Kanchipuram Temple & Silk Tour from Chennai", duration: "Full day", price: "From ₹2,500/person", badge: "Best seller", url: "https://www.getyourguide.com/s/?q=kanchipuram&partner_id=PSZA5UI" },
              { name: "Kanchipuram & Mahabalipuram Combo", duration: "Full day", price: "From ₹3,000/person", badge: "Best value", url: "https://www.getyourguide.com/s/?q=kanchipuram+mahabalipuram&partner_id=PSZA5UI" },
              { name: "Chennai Cultural Heritage Tour", duration: "Full day", price: "From ₹2,000/person", url: "https://www.getyourguide.com/s/?q=chennai+temple&partner_id=PSZA5UI" },
              { name: "South India Temple Circuit", duration: "Multi-day", price: "From ₹5,000/person", url: "https://www.getyourguide.com/s/?q=tamil+nadu+temple&partner_id=PSZA5UI" },
            ]}
          />

          <DestinationGallery
            title="Kanchipuram — City of a Thousand Temples"
            subtitle="Where Pallava sandstone meets Chola granite and silk looms."
            spots={[
              { name: "Kailasanathar Temple", query: "kailasanathar temple kanchipuram pallava sandstone architecture india", desc: "The oldest structural temple in Kanchipuram — 8th century Pallava sandstone, 58 sub-shrines, extraordinary carvings." },
              { name: "Ekambareswarar Temple", query: "ekambareswarar temple kanchipuram gopuram tower dravidian south india", desc: "25-acre temple complex with a 3,500-year-old mango tree and 1,000-pillar mandapam." },
              { name: "Kanjivaram Silk Weaving", query: "kanchipuram silk sari weaving loom handloom gold zari india", desc: "Where the world's finest silk saris are woven — 5,000+ families continue the tradition." },
              { name: "Kamakshi Amman Temple", query: "kamakshi amman temple kanchipuram gold vimana gopuram india", desc: "One of three major Shakti Peethams — gold-plated vimana, active worship, intense devotion." },
              { name: "Temple Town Streets", query: "kanchipuram temple town street south india tamil nadu traditional", desc: "The streets between temples — brass shops, flower sellers, silk showrooms, filter coffee stalls." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🧵", title: "Buying silk from temple-gate shops", desc: "The shops directly outside temples sell machine-made imitations at handloom prices. Walk 500 metres in any direction and you'll find the real weavers. Or go to the Co-operative Society, Nalli, or Sri Kumaran — guaranteed authentic with certification.", color: "bg-red-50 border-red-200" },
                { icon: "🥵", title: "Visiting in April–June", desc: "Kanchipuram is inland Tamil Nadu — no sea breeze, no elevation. Summer temperatures hit 40°C+. The temples are largely shadeless. Come November–February for 25–30°C weather.", color: "bg-white border-parchment-2" },
                { icon: "👗", title: "Ignoring temple dress code", desc: "Varadaraja Perumal and some other temples require traditional dress — veshti for men, sari or long skirt for women. Shorts and sleeveless tops will get you turned away. Rental is available at gates for ₹20–₹50.", color: "bg-white border-parchment-2" },
                { icon: "⏰", title: "Going to Kailasanathar after 10am", desc: "The morning light on the sandstone is the entire point. By noon the temple is in harsh light and the stone loses its warm colour. Go first thing. It opens at 6am.", color: "bg-white border-parchment-2" },
                { icon: "🚌", title: "Trying to day-trip everything", desc: "A single day from Chennai covers the four main temples but leaves zero time for silk shopping, Mahabalipuram or the smaller temples. If silk matters to you, stay overnight.", color: "bg-white border-parchment-2" },
              ].map((m) => (
                <div key={m.title} className={`rounded-xl p-4 border ${m.color}`}>
                  <div className="flex items-start gap-3"><span className="text-xl flex-shrink-0">{m.icon}</span><div><p className="font-medium text-sm text-stone-900 mb-1">❌ {m.title}</p><p className="text-xs text-gray-700 font-light leading-relaxed">{m.desc}</p></div></div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="mb-14 bg-ink rounded-2xl p-8 md:p-10 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-3">Free Service</span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Adding Kanchipuram to Your Tamil Nadu Trip?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Kanchipuram fits perfectly into a Tamil Nadu temple circuit — Mahabalipuram, Thanjavur, Madurai, Rameswaram. Tell us your dates and we&apos;ll plan the routing.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Tamil Nadu Trip →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Kanchipuram?", a: "2 days is ideal — one for temples, one for silk and onward travel. A single day trip from Chennai covers the four main temples but no shopping time. If silk buying is your priority, stay overnight." },
                { q: "How do I reach Kanchipuram from Chennai?", a: "Bus: TNSTC from CMBT, every 15–20 minutes, ₹60–₹100, 2 hours. Car: ₹2,500–₹3,500 return with driver and wait time, 1.5–2 hours each way. Train: limited services to Kanchipuram station. Bus is easiest." },
                { q: "Where to buy authentic Kanjivaram silk?", a: "Kanchipuram Silk Sarees Co-operative Society (government-backed, fixed prices), Nalli Silks, Sri Kumaran Silks. Ask for the GI certification tag. Authentic handloom Kanjivaram starts at ₹3,000. Wedding quality ₹25,000–₹50,000. Avoid shops near temple gates." },
                { q: "Is Kanchipuram worth visiting?", a: "If you care about temple architecture, absolutely. Kailasanathar is one of the oldest and finest structural temples in India. If you care about silk, it's the origin of the world's most famous sari. If neither interests you, skip it." },
                { q: "What is the best time to visit Kanchipuram?", a: "November to February — 22–30°C, comfortable for temple walking. Avoid April–June (38–42°C, brutal inland heat). Monsoon (October–November) brings rain but the temples are dramatic in the wet." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Continue Your Tamil Nadu Journey</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Thanjavur 2 Days — Big Temple & Chola Art", href: "/blog/thanjavur-2-days" },
                { label: "Tamil Nadu Temple Circuit 7 Days", href: "/blog/tamil-nadu-temple-circuit-7-days" },
                { label: "Madurai 3 Days — Meenakshi Temple", href: "/blog/madurai-3-days" },
                { label: "Pondicherry 3 Days — French Quarter", href: "/blog/pondicherry-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="kanchipuram-2-days" />

          {/* Plan your trip links */}
          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Kanchipuram trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-kanchipuram", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/kanchipuram-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-kanchipuram", label: "How to get there", icon: "✈️" },
                { href: "/blog/kanchipuram-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <RelatedGuides currentSlug="kanchipuram-2-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
