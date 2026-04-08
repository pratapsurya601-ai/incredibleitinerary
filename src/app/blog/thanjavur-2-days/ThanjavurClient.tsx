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
  { id: "honest", emoji: "⚡", label: "What Thanjavur Actually Is" },
  { id: "big-temple", emoji: "🛕", label: "Brihadeeswarar — Complete Guide" },
  { id: "itinerary", emoji: "📅", label: "2-Day Itinerary" },
  { id: "crafts", emoji: "🎨", label: "Chola Art & Crafts" },
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
      <a href={`mailto:?subject=Thanjavur 2-Day Guide&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Thanjavur%20Big%20Temple%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
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

export default function ThanjavurClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Thanjavur" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage query="brihadeeswarar temple thanjavur big temple vimana chola granite south india" fallback="https://images.unsplash.com/photo-1621365523158-7af3db4f8e1e?w=1600&q=85" alt="Brihadeeswarar Temple Thanjavur Big Temple vimana" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Thanjavur 2 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">UNESCO Heritage</span>
                <span className="text-white/60 text-xs">April 8, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">12 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Thanjavur in 2 Days:<em className="italic text-amber-300"> The Big Temple, Chola Bronzes & the Library</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">Where the Chola dynasty built the greatest temple in South India — and left behind the finest bronze sculptures the world has ever seen.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🛕 Thanjavur</span><span>·</span><span>🗓 2 Days</span><span>·</span><span>💰 From ₹5,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ What Thanjavur Actually Is</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Thanjavur is a small, quiet Tamil Nadu city that happens to contain one of the most extraordinary buildings in India. The Brihadeeswarar Temple — the &quot;Big Temple&quot; — was built by Rajaraja Chola I in 1010 CE. Its vimana (tower) is 216 feet tall, the tallest of any temple in India, and the 80-tonne granite capstone at the top was placed there over a thousand years ago by methods that are still debated.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">The city was the capital of the Chola dynasty, which at its peak controlled most of South India, Sri Lanka, the Maldives, and parts of Southeast Asia. The art they left behind — particularly the bronze sculptures — is arguably the finest metal casting any civilisation has produced. The Thanjavur Art Gallery has the world&apos;s best collection of Chola bronzes.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">Beyond the Big Temple, two other Chola-era UNESCO temples are within day-trip distance: Airavatesvara at Darasuram (25km) and Gangaikonda Cholapuram (75km). Together, these three form the &quot;Great Living Chola Temples&quot; UNESCO World Heritage Site.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🛕", val: "1,010 CE", label: "Big Temple built" },
                { icon: "📏", val: "216 ft", label: "Vimana height" },
                { icon: "🏛️", val: "3", label: "UNESCO temples" },
                { icon: "💰", val: "₹5,000+", label: "Budget from" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BIG TEMPLE DEEP DIVE */}
          <section id="big-temple" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🛕 Brihadeeswarar Temple — The Complete Guide</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">The single most important building in South Indian temple architecture. Here&apos;s everything you need to know before you go.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "The Numbers", icon: "📐", content: "Built 1003–1010 CE by Rajaraja Chola I. Vimana: 216 feet (66m), the tallest in India. Capstone: 80 tonnes of granite. Nandi: 25 tonnes, 12 feet tall, carved from a single rock. The temple's shadow never falls on its base at noon — a deliberate architectural feat." },
                { title: "The Capstone Mystery", icon: "🪨", content: "How did 11th-century builders place an 80-tonne stone at the top of a 216-foot tower? The most accepted theory: a 6km-long ramp from the village of Sarapallam. Others suggest an interlocking pillar system. No crane existed that could do this. The engineering is genuinely extraordinary." },
                { title: "What to See Inside", icon: "👁️", content: "The circumambulatory passage with Chola-era frescoes (recently restored — the originals were painted over by Nayak-era murals, both are now visible). The massive Shiva Lingam in the sanctum. The 81 Bharatanatyam poses carved on the gopuram. The inscriptions recording Rajaraja's donations." },
                { title: "Practical Details", icon: "🎫", content: "Open: 6am–12:30pm, 4pm–8:30pm. Entry: Free (no ticket needed). Photography: allowed in the courtyard, NOT inside the sanctum. No shoes inside the temple complex. Dress modestly — cover shoulders and legs. Best time: early morning (6–8am) for soft light and fewer crowds." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2"><span className="text-lg">{item.icon}</span><p className="font-medium text-sm text-stone-900">{item.title}</p></div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ITINERARY */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 The 2-Day Itinerary</h2>

            {/* Day 1 */}
            <div className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
              <div className="bg-parchment px-5 py-4 flex items-center gap-3">
                <span className="font-serif text-xl text-amber-900 font-light">Day 1</span>
                <span className="text-sm text-ink font-medium">Big Temple + Palace + Art Gallery</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { time: "6am", content: "Brihadeeswarar Temple at opening — the morning light on the granite is extraordinary. The temple faces east, so the first rays illuminate the entrance gopuram perfectly. Spend 1.5–2 hours here. Walk the full circumambulatory passage, see the Chola frescoes, the massive Nandi monolith, and the inscriptions on the base.", tip: "Go around the base reading the inscriptions — they record every donation Rajaraja Chola made to the temple, including gold, silver, jewels and land grants. It's a 1,000-year-old financial ledger carved in Tamil and Grantha script." },
                  { time: "8:30am", content: "Breakfast at a local tiffin shop — idli, vada, filter coffee. The shops on East Main Street near the temple have been serving morning tiffin for decades. ₹50–₹100.", tip: null },
                  { time: "9:30am", content: "Thanjavur Royal Palace — the Maratha-era palace complex. Entry ₹50 Indians. The Durbar Hall has beautiful wooden carvings. The bell tower (the tallest in Tamil Nadu) is worth climbing for the view. The palace is sprawling and partially in ruins — the decay is part of the atmosphere.", tip: null },
                  { time: "11am", content: "Saraswathi Mahal Library — one of the oldest libraries in Asia, founded in the 16th century. Over 49,000 palm-leaf and paper manuscripts in Tamil, Sanskrit, Telugu, Marathi and other languages. The museum section displays rare manuscripts, medical texts, and Mughal miniatures. Entry ₹50.", tip: "The library has manuscripts on medicine (Siddha), astronomy, and music that predate European knowledge of these subjects by centuries. Some manuscripts have never been fully studied." },
                  { time: "12pm", content: "Thanjavur Art Gallery — in the same palace complex. The Chola bronze collection here is the best in the world. The Nataraja (Shiva as cosmic dancer) is the most famous bronze — the pose you see on the cover of every book about Indian art. Spend at least 45 minutes. Entry ₹50.", tip: "The Chola bronzes were made using the lost-wax (cire perdue) technique. Each is a one-off — the mould is destroyed in the casting process. What you're looking at cannot be replicated." },
                  { time: "1:30pm", content: "Lunch on a banana leaf — full South Indian sappadu (meals). Thillana Restaurant or any local meals restaurant. Rice, sambar, rasam, kootu, poriyal, appalam, payasam. Unlimited refills. ₹120–₹200.", tip: null },
                  { time: "3pm", content: "Schwartz Church (1779) — one of the oldest churches in Tamil Nadu, built by Danish missionaries. Beautiful stained glass. Then walk through the Thanjavur market for Thanjavur paintings and brass items.", tip: null },
                  { time: "5pm", content: "Return to Brihadeeswarar Temple for the evening — the temple is different at sunset. The golden light on the vimana, the evening puja, the sound of bells. Significantly less crowded than morning. Closes at 8:30pm.", tip: null },
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
                <span className="text-sm text-ink font-medium">Darasuram + Gangaikonda Cholapuram Day Trip</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { time: "7am", content: "Early departure for Darasuram — 25km from Thanjavur, 40 minutes by car. Hire a car for the day (₹2,000–₹3,000 including Gangaikonda Cholapuram). Or take a local bus to Kumbakonam (30km, ₹30) and an auto to Darasuram from there.", tip: null },
                  { time: "8am", content: "Airavatesvara Temple, Darasuram (UNESCO) — built by Rajaraja Chola II in the 12th century. Smaller and more intimate than the Big Temple but the sculptural detail is finer. The stone chariot in the courtyard, the musical steps (tap them and they produce different notes), the narrative panels. This temple is almost always empty — you may have it entirely to yourself. Free entry.", tip: "The stone steps at the entrance produce musical notes when tapped — sa, ri, ga, ma. 12th-century acoustic engineering. Don't miss this." },
                  { time: "9:30am", content: "Kumbakonam town (10km from Darasuram) — famous for its degree coffee. Stop at any old coffee shop for a ₹20–₹30 filter coffee. Kumbakonam degree coffee uses a higher proportion of coffee to chicory. The town also has over 180 temples, but don't try to see them all.", tip: "\"Degree coffee\" means the milk used is unadulterated — tested with a lactometer (degree). It's a quality stamp. Kumbakonam coffee is the benchmark for South Indian filter coffee." },
                  { time: "11am", content: "Drive to Gangaikonda Cholapuram — 75km from Thanjavur (or 35km from Kumbakonam), about 1.5 hours. This is the \"other\" Big Temple, built by Rajendra Chola I around 1035 CE. He named his new capital \"the city of the Chola who conquered the Ganga\" — because he marched his army to the Ganges and brought water back. The vimana is shorter than Thanjavur's but the sculptures are considered superior. Free entry.", tip: "Gangaikonda Cholapuram is almost always deserted. The temple stands alone in a field with no town around it — the Chola capital that once surrounded it has completely vanished. It's eerie and beautiful." },
                  { time: "1pm", content: "Lunch in Kumbakonam or a roadside restaurant on the return journey. South Indian meals ₹100–₹150.", tip: null },
                  { time: "3pm", content: "Return to Thanjavur. Shopping: Thanjavur paintings (gold-leaf art, unique to this region — authentic ones use 22-carat gold leaf, start at ₹2,000, serious pieces ₹10,000–₹50,000+). Thanjavur bobble-head dolls. Brass veena replicas.", tip: "Tourist-grade Thanjavur paintings use gold paint, not gold leaf. Authentic ones have textured, raised gold work you can feel with your fingers. Buy from established shops on East Main Street, not roadside vendors." },
                  { time: "5pm", content: "Departure. Thanjavur to Trichy: 55km, 1 hour by car or bus (₹40–₹70). Trichy to Madurai: 3.5 hours. Trichy airport: 55km, 1 hour. Thanjavur to Chennai by train: 6–8 hours (₹200–₹800).", tip: null },
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

          {/* CRAFTS */}
          <section id="crafts" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🎨 Chola Art & Crafts of Thanjavur</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Thanjavur isn&apos;t just a temple town — it&apos;s the centre of three distinct craft traditions.</p>
            <div className="space-y-3">
              {[
                { name: "Thanjavur Paintings", type: "Gold-leaf art", color: "bg-amber-50 border-amber-300", desc: "Distinctive South Indian painting style using 22-carat gold leaf, semi-precious stones, and rich colours. The raised gold work is unique — you can feel it under your fingers. Subjects are always Hindu deities. Authentic paintings start at ₹2,000 for small pieces, ₹10,000–₹50,000+ for serious work. Tourist-grade fakes use gold paint — look for the texture." },
                { name: "Thanjavur Bobble-Head Dolls", type: "Traditional toy", color: "bg-green-50 border-green-200", desc: "Weighted clay figures with swinging heads — Thanjavur Thalaiyaatti Bommai. An official GI-tagged product. The craftsmanship varies enormously — good ones cost ₹500–₹2,000. They're surprisingly heavy and make excellent gifts." },
                { name: "Thanjavur Veena", type: "Musical instrument", color: "bg-blue-50 border-blue-200", desc: "The Saraswati Veena — the iconic South Indian stringed instrument. Thanjavur is the traditional manufacturing centre. A playable veena costs ₹15,000–₹1,00,000. Decorative replicas for ₹2,000–₹5,000. The jackwood body and gourd resonator are handmade." },
              ].map((c) => (
                <div key={c.name} className={`rounded-xl p-4 border ${c.color}`}>
                  <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                    <p className="font-medium text-sm text-stone-900">{c.name}</p>
                    <span className="text-[0.65rem] font-medium bg-white/70 text-muted px-2.5 py-1 rounded-full border border-white/60">{c.type}</span>
                  </div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{c.desc}</p>
                </div>
              ))}
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
                    ["🏨 Accommodation (2N)", "₹1,600–₹3,000", "₹4,000–₹8,000", "₹10,000–₹20,000"],
                    ["🍽 Food & Coffee", "₹500–₹800", "₹1,000–₹2,000", "₹3,000–₹5,000"],
                    ["🚗 Transport (incl. day trip)", "₹400–₹800", "₹2,500–₹4,000", "₹5,000–₹8,000"],
                    ["🎫 Entry fees", "₹150–₹250", "₹150–₹250", "₹150–₹250"],
                    ["🎨 Crafts (optional)", "₹500–₹2,000", "₹5,000–₹15,000", "₹20,000–₹80,000"],
                    ["TOTAL (excl. crafts)", "₹5,000–₹8,000", "₹12,000–₹18,000", "₹22,000–₹40,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">Brihadeeswarar Temple entry is free. Palace + Art Gallery + Library combined: ₹150. The day trip car hire is the biggest single expense.</p>
          </section>

          {/* FOOD */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 What to Eat in Thanjavur</h2>
            <p className="text-sm text-muted font-light mb-6">Thanjavur food is pure Tamil Nadu — rice-based, vegetarian-dominant, filter-coffee-driven.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { dish: "Sappadu (Banana Leaf Meals)", where: "Any local meals restaurant", price: "₹100–₹200", desc: "The full South Indian experience — hot rice served on a fresh banana leaf with sambar, rasam, kootu, poriyal, appalam, pickle, curd and payasam. Unlimited refills of everything. Eat with your right hand.", color: "bg-amber-50 border-amber-200" },
                { dish: "Kumbakonam Degree Coffee", where: "Any coffee shop (best in Kumbakonam)", price: "₹20–₹40", desc: "The gold standard of South Indian filter coffee. Higher coffee-to-chicory ratio, unadulterated milk (tested by lactometer — hence \"degree\"). Served in steel tumbler and davara. Drink 4–5 a day. Non-negotiable.", color: "bg-green-50 border-green-200" },
                { dish: "Jigarthanda", where: "Sweet shops, evening stalls", price: "₹40–₹80", desc: "A Madurai speciality that's popular throughout Tamil Nadu — milk, almond gum, sarsaparilla syrup, ice cream. Cold, creamy, unlike anything else. Best in the evening.", color: "bg-blue-50 border-blue-200" },
                { dish: "Idli & Dosa", where: "Morning tiffin shops", price: "₹40–₹80", desc: "Soft idlis with sambar and three chutneys. Crispy dosas with potato masala. The morning tiffin culture in Tamil Nadu is sacred — every neighbourhood has its trusted shop.", color: "bg-red-50 border-red-200" },
                { dish: "Paniyaram", where: "Street stalls, tiffin shops", price: "₹30–₹50", desc: "Ball-shaped dumplings made from fermented rice and lentil batter — same batter as idli but cooked in a special pan. Can be sweet (with jaggery) or savoury (with onions and chilli). Addictive.", color: "bg-purple-50 border-purple-200" },
                { dish: "Temple Prasadam", where: "Brihadeeswarar Temple", price: "Donation ₹10–₹20", desc: "The prasadam at the Big Temple includes pongal (rice and lentil dish) and laddu. Simple, sacred, and part of the experience. Don't skip it.", color: "bg-pink-50 border-pink-200" },
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
            destination="Thanjavur"
            hotels={[
              { name: "Svatma Thanjavur", type: "Heritage · Restored mansion", price: "From ₹8,000/night", rating: "5", badge: "Most unique", url: "https://www.booking.com/hotel/in/svatma.html?aid=2820480" },
              { name: "Hotel Gnanam", type: "Mid-range · Central", price: "From ₹2,200/night", rating: "4", badge: "Best value", url: "https://www.booking.com/hotel/in/gnanam.html?aid=2820480" },
              { name: "Hotel Parisutham", type: "Mid-range · Near Big Temple", price: "From ₹2,500/night", rating: "3", badge: "Temple views", url: "https://www.booking.com/hotel/in/parisutham.html?aid=2820480" },
            ]}
            activities={[
              { name: "Thanjavur Temple & Heritage Tour", duration: "Full day", price: "From ₹2,000/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=thanjavur&partner_id=PSZA5UI" },
              { name: "Chola Temple Circuit Day Trip", duration: "Full day", price: "From ₹3,500/person", badge: "All 3 UNESCO", url: "https://www.getyourguide.com/s/?q=thanjavur+chola+temple&partner_id=PSZA5UI" },
              { name: "Kumbakonam & Darasuram Tour", duration: "Half day", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=kumbakonam&partner_id=PSZA5UI" },
              { name: "Tamil Nadu Cultural Heritage Tour", duration: "Multi-day", price: "From ₹5,000/person", url: "https://www.getyourguide.com/s/?q=tamil+nadu+heritage&partner_id=PSZA5UI" },
            ]}
          />

          <DestinationGallery
            title="Thanjavur — Capital of the Cholas"
            subtitle="Where temple architecture reached its peak a thousand years ago."
            spots={[
              { name: "Brihadeeswarar Temple", query: "brihadeeswarar temple thanjavur big temple vimana tower chola granite india", desc: "The 216-foot vimana with its 80-tonne capstone — the tallest temple tower in India, built in 1010 CE." },
              { name: "Nandi Monolith", query: "nandi bull statue thanjavur big temple chola granite monolith india", desc: "25-tonne Nandi carved from a single granite block — facing the sanctum, guarding the entrance." },
              { name: "Airavatesvara Temple", query: "airavatesvara temple darasuram chola architecture stone chariot india", desc: "The stone chariot and musical steps at Darasuram — finer detail than the Big Temple, usually empty of visitors." },
              { name: "Chola Bronzes", query: "chola bronze nataraja shiva dancing thanjavur art gallery india museum", desc: "The Nataraja and other Chola bronzes — the lost-wax technique that produced the finest metal sculptures in history." },
              { name: "Thanjavur Palace", query: "thanjavur palace maratha durbar hall bell tower tanjore india heritage", desc: "The Maratha-era palace complex — bell tower, Durbar Hall, and the Saraswathi Mahal Library." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "📸", title: "Photographing inside the sanctum", desc: "Photography is not allowed inside the sanctum sanctorum of Brihadeeswarar Temple. The courtyard, exterior and Nandi are fine. Respect the rules — this is an active place of worship, not a museum piece.", color: "bg-red-50 border-red-200" },
                { icon: "⏰", title: "Going to the Big Temple only once", desc: "Visit twice — morning and evening. The temple is completely different in dawn light versus sunset. The evening puja adds a devotional dimension you miss during the day. Most tourists visit once at midday and leave.", color: "bg-white border-parchment-2" },
                { icon: "🎨", title: "Buying fake Thanjavur paintings", desc: "Tourist-grade Thanjavur paintings use gold paint, not 22-carat gold leaf. Real ones have a raised, textured gold surface you can feel. Buy from established shops on East Main Street. If it's ₹300 for a framed painting, it's not real.", color: "bg-white border-parchment-2" },
                { icon: "🚗", title: "Skipping Darasuram and Gangaikonda Cholapuram", desc: "Most visitors see only the Big Temple. The Airavatesvara Temple at Darasuram is a 40-minute drive and the sculptural detail is finer. Gangaikonda Cholapuram is further but almost always deserted — an entire Chola capital that vanished, with only the temple remaining.", color: "bg-white border-parchment-2" },
                { icon: "☕", title: "Not stopping in Kumbakonam for coffee", desc: "Kumbakonam degree coffee is the standard by which all South Indian filter coffee is judged. It's 30km from Thanjavur, on the way to Darasuram. Stop at any old coffee shop. ₹20–₹30 for the best coffee you'll have in Tamil Nadu.", color: "bg-white border-parchment-2" },
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
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Adding Thanjavur to Your Tamil Nadu Trip?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Thanjavur pairs with Trichy, Madurai and Rameswaram for the complete Tamil Nadu temple circuit. Tell us your dates and we&apos;ll plan the routing.</p>
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
                { q: "How many days are enough for Thanjavur?", a: "2 days is ideal — one for the Big Temple, Palace and Art Gallery, one for the day trip to Darasuram and Gangaikonda Cholapuram. A single day covers the main temple and museum if you're short on time." },
                { q: "Is Brihadeeswarar Temple entry free?", a: "Yes, completely free. No tickets needed. The temple is an active place of worship maintained by the HR&CE department. The Palace + Art Gallery + Library have a combined ticket of around ₹150." },
                { q: "How do I reach Thanjavur?", a: "By train from Chennai: 6–8 hours (₹200–₹800). From Trichy: 1 hour (₹30–₹60). From Madurai: 4 hours. Nearest airport: Trichy (55km, 1 hour by car). Buses from all major Tamil Nadu cities." },
                { q: "What is the 80-tonne capstone mystery?", a: "The granite capstone at the top of the 216-foot vimana weighs about 80 tonnes. The leading theory is that a 6km ramp was built from Sarapallam village to gradually elevate the stone. No crane technology existed in 1010 CE that could lift this weight to this height." },
                { q: "Best time to visit Thanjavur?", a: "November to February — 22–30°C, comfortable for walking the temple complexes. The annual Brihadeeswarar festival (February) has extraordinary processions. Avoid April–June (40°C+)." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Continue Your Tamil Nadu Journey</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Kanchipuram 2 Days — Pallava Temples & Silk", href: "/blog/kanchipuram-2-days" },
                { label: "Tamil Nadu Temple Circuit 7 Days", href: "/blog/tamil-nadu-temple-circuit-7-days" },
                { label: "Madurai 3 Days — Meenakshi Temple", href: "/blog/madurai-3-days" },
                { label: "Trichy — Srirangam Temple", href: "/blog/trichy-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="thanjavur-2-days" />

          <div className="mb-12">
            <h2 className="font-serif text-xl font-light text-ink mb-4">Plan your Thanjavur trip</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { href: "/blog/best-time-to-visit-thanjavur", label: "Best time to visit", icon: "🗓️" },
                { href: "/blog/thanjavur-trip-cost", label: "Trip cost breakdown", icon: "💰" },
                { href: "/blog/how-to-reach-thanjavur", label: "How to get there", icon: "✈️" },
                { href: "/blog/thanjavur-travel-tips", label: "Travel tips", icon: "📋" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex flex-col items-center gap-2 p-4 bg-parchment border border-parchment-2 rounded-xl hover:border-gold hover:shadow-sm transition-all text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-xs font-medium text-ink leading-tight">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <RelatedGuides currentSlug="thanjavur-2-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
