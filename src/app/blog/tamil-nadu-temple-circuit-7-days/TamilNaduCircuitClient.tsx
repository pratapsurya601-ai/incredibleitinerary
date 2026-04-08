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
  { id: "honest", emoji: "⚡", label: "Why This Route" },
  { id: "route", emoji: "🗺️", label: "The Route Logic" },
  { id: "itinerary", emoji: "📅", label: "7-Day Itinerary" },
  { id: "dresscode", emoji: "👗", label: "Temple Dress Code & Darshan" },
  { id: "budget", emoji: "💰", label: "Budget Breakdown" },
  { id: "food", emoji: "🍛", label: "What to Eat" },
  { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
  { id: "faq", emoji: "❓", label: "FAQ" },
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
      <a href={`mailto:?subject=Tamil Nadu Temple Circuit 7 Days&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Tamil%20Nadu%20Temple%20Circuit%207%20Days&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
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

const days = [
  {
    day: "Day 1", title: "Tirupati — Tirumala Darshan",
    items: [
      { time: "Morning", content: "Arrive Tirupati by flight (Tirupati airport) or overnight train from Chennai/Bangalore/Hyderabad. Tirupati is technically in Andhra Pradesh but it's the natural start of the south Indian temple circuit.", tip: null },
      { time: "9am", content: "Drive or bus up to Tirumala (22km, 1 hour — the ghat road has 57 hairpin bends). The Sri Venkateswara Temple is the most visited religious site in the world — 50,000–100,000 pilgrims daily. VIP darshan: ₹300/person, skip the 6–12 hour general queue. Book online at tirumala.org at least 2 days ahead.", tip: "VIP/Sheeghra darshan reduces waiting to 1–2 hours. General (free) darshan can take 6–12 hours. If you're on a circuit, VIP is worth it. Book online well in advance — slots fill up." },
      { time: "1pm", content: "Lunch at the Tirumala temple canteen — free meals (anna prasadam) served to all visitors. The temple feeds 50,000 people daily. The laddu prasadam (₹50 for 2) is the most famous temple offering in India.", tip: null },
      { time: "3pm", content: "Drive to Kanchipuram — 130km, 3 hours via NH48. This is why the circuit goes north-to-south: Tirupati to Kanchipuram flows naturally without backtracking. Check in to Kanchipuram hotel by evening.", tip: null },
    ],
  },
  {
    day: "Day 2", title: "Kanchipuram — Pallava Temples & Silk",
    items: [
      { time: "7am", content: "Kailasanathar Temple at opening — 8th-century Pallava sandstone, the oldest structural temple in Kanchipuram. 58 sub-shrines in the circumambulatory passage. Photography allowed. 45–60 minutes.", tip: null },
      { time: "9am", content: "Ekambareswarar Temple — Pancha Bhoota Sthalam (Earth element). 25-acre complex, 3,500-year-old mango tree, 1,000-pillar mandapam. Then Kamakshi Amman Temple — Shakti Peetham, gold-plated vimana.", tip: null },
      { time: "12pm", content: "Silk sari shopping if desired — Co-operative Society or Nalli Silks for authenticated Kanjivaram. Budget 1–2 hours.", tip: null },
      { time: "2pm", content: "Drive to Mahabalipuram — 60km, 1.5 hours. Shore Temple (UNESCO), Arjuna's Penance, Pancha Rathas. Combined entry ₹40 Indians. 2–3 hours at Mahabalipuram. Stay overnight in Mahabalipuram or drive on to Chennai.", tip: "If time is tight, skip Mahabalipuram and drive directly south to Thanjavur (300km, 5.5 hours from Kanchipuram). This saves a day." },
    ],
  },
  {
    day: "Day 3", title: "Mahabalipuram → Thanjavur",
    items: [
      { time: "7am", content: "If you stayed in Mahabalipuram, revisit Shore Temple at sunrise — the bay of Bengal behind a 7th-century temple is one of India's great photographic moments. Then depart.", tip: null },
      { time: "8am", content: "Drive Mahabalipuram to Thanjavur — 310km, 5.5–6 hours via NH32 through Villupuram and Kumbakonam. The drive is flat and fast. Stop in Kumbakonam for filter coffee.", tip: "Break the drive at Kumbakonam (30km before Thanjavur) — stop at Airavatesvara Temple in Darasuram on the way. This UNESCO temple is on your route and saves a separate day trip." },
      { time: "2pm", content: "Arrive Thanjavur. Check in. Lunch — banana leaf sappadu at a local restaurant. ₹120–₹200.", tip: null },
      { time: "4pm", content: "Brihadeeswarar Temple (Big Temple) — evening visit first. The 216-foot vimana in golden evening light, the evening puja. Spend 1–1.5 hours. You'll return in the morning.", tip: null },
    ],
  },
  {
    day: "Day 4", title: "Thanjavur — Big Temple & Chola Art",
    items: [
      { time: "6am", content: "Brihadeeswarar Temple at sunrise — completely different atmosphere from evening. Morning light on the granite, fewer people, the Nandi monolith in soft light. See the Chola frescoes in the circumambulatory passage, read the base inscriptions.", tip: null },
      { time: "9am", content: "Thanjavur Palace complex — Saraswathi Mahal Library (49,000 manuscripts, one of Asia's oldest), Thanjavur Art Gallery (world's best Chola bronze collection — the Nataraja is unmissable). Combined entry ~₹150.", tip: null },
      { time: "12pm", content: "Optional: drive to Gangaikonda Cholapuram — 75km, 1.5 hours. The \"other\" Big Temple, built by Rajendra Chola I. Almost always deserted — an entire capital city vanished, only the temple remains. Free entry.", tip: null },
      { time: "3pm", content: "Drive Thanjavur to Trichy — 55km, 1 hour. Check in to Trichy hotel.", tip: null },
    ],
  },
  {
    day: "Day 5", title: "Trichy — Rockfort & Srirangam",
    items: [
      { time: "7am", content: "Srirangam Ranganathaswamy Temple — the world's largest functioning Hindu temple, covering 156 acres with 7 concentric walls (prakarams). Dress code strict: veshti for men, sari/long skirt for women. Rental at gates ₹20–₹50. The temple town inside the outer walls is a living, breathing neighbourhood. 2–3 hours.", tip: "Srirangam is not a museum — it's a temple where people live, shop, eat and worship inside the compound walls. Walk through the prakarams slowly. The 1,000-pillar hall and the Sesharayar mandapam are extraordinary." },
      { time: "10am", content: "Rockfort Temple — climb 437 steps up the 83-metre granite outcrop for panoramic views of Trichy, the Kaveri river and Srirangam. Ucchi Pillayar Temple at the summit. ₹25 entry.", tip: null },
      { time: "12pm", content: "Lunch at a local restaurant in Trichy — South Indian thali. Then depart for Madurai — 130km, 3 hours.", tip: null },
      { time: "4pm", content: "Arrive Madurai. Check in near Meenakshi Temple. Evening: walk the streets around Meenakshi — the temple town atmosphere at dusk, with flower sellers, silk shops and the smell of incense, is extraordinary.", tip: null },
    ],
  },
  {
    day: "Day 6", title: "Madurai — Meenakshi Temple",
    items: [
      { time: "6am", content: "Meenakshi Amman Temple at opening — the most visually overwhelming temple in India. 14 gopurams (gateway towers) covered in 33,000 painted sculptures. The Hall of 1,000 Pillars. The Golden Lotus Tank. Dress code strict: traditional attire required. 2–3 hours minimum.", tip: "Do NOT rush Madurai. The Meenakshi Temple alone deserves 2–3 hours. The night puja ceremony (9:30pm) where Lord Sundareswarar is carried to Meenakshi's chamber is one of India's most intimate temple rituals." },
      { time: "9am", content: "Thirumalai Nayak Palace — 17th-century Indo-Saracenic palace, 2km from Meenakshi. The Durbar Hall is stunning. ₹50 entry. Sound and light show in the evening if time permits.", tip: null },
      { time: "11am", content: "Madurai street food: jigarthanda (cold milk drink with almond gum, unique to Madurai, ₹40–₹80). Kothu parotta (shredded parotta tossed with spices and egg/mutton). Filter coffee.", tip: null },
      { time: "3pm", content: "Sheeghra Darshan at Meenakshi if you want a second visit with less crowd — ₹50–₹100, cuts queue to 30 minutes.", tip: null },
      { time: "9:30pm", content: "Night ceremony — Lord Sundareswarar (Shiva) is carried in a golden palanquin to Meenakshi's (Parvati) bedchamber. The temple closes after this. Extraordinary and intimate.", tip: null },
    ],
  },
  {
    day: "Day 7", title: "Rameswaram + Dhanushkodi",
    items: [
      { time: "6am", content: "Drive Madurai to Rameswaram — 165km, 3.5 hours. Cross the Pamban Bridge — India's most dramatic railway crossing, over the Palk Strait between mainland India and Pamban Island. The road bridge runs parallel.", tip: null },
      { time: "10am", content: "Ramanathaswamy Temple — the longest temple corridor in India (1,220m). The 22 sacred wells (theerthams) inside the temple, each with water said to have different medicinal properties. Pilgrims bathe in all 22. Entry free, bath ₹10 per well.", tip: "You'll get soaked at the theerthams. Bring a change of clothes. The water is cold. It's a participatory experience, not an observation — join in if you're comfortable." },
      { time: "1pm", content: "Drive to Dhanushkodi — 20km from Rameswaram, the southernmost tip of the island. A ghost town destroyed by the 1964 cyclone. The ruins of the old town sit in the sea. The road ends at the point where India comes closest to Sri Lanka — 31km across the strait. Surreal, windswept, unforgettable.", tip: null },
      { time: "3pm", content: "Return to Rameswaram. Lunch. Departure: Rameswaram to Madurai airport (175km, 3.5 hours) for flights out. Or overnight train from Rameswaram to Chennai (14 hours) or Bangalore (12 hours).", tip: null },
    ],
  },
];

export default function TamilNaduCircuitClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Tamil Nadu" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage query="meenakshi amman temple madurai gopuram colourful sculptures dravidian" fallback="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=85" alt="Meenakshi Amman Temple Madurai colourful gopuram" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Tamil Nadu Temple Circuit 7 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Temple Circuit</span>
                <span className="text-white/60 text-xs">April 8, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">16 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Tamil Nadu Temple Circuit in 7 Days:<em className="italic text-amber-300"> Tirupati to Rameswaram</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">The definitive south Indian temple road trip — 1,500 years of Dravidian architecture, from the most-visited temple on earth to a ghost town at India&apos;s southern tip.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🛕 Tamil Nadu</span><span>·</span><span>🗓 7 Days</span><span>·</span><span>💰 From ₹22,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ Why This Route</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Tamil Nadu has more temples than any other state in India — over 38,000, of which many are over a thousand years old. The Dravidian temple tradition here represents the longest continuous architectural evolution on earth. This circuit covers the absolute best of it in 7 days, moving north-to-south to avoid backtracking.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">You&apos;ll see Pallava (7th–9th century), Chola (9th–13th century) and Nayak (16th–18th century) temples — three different dynasties, three different styles, one thread connecting them. By the time you reach Rameswaram on Day 7, you&apos;ll have an intuitive sense of how South Indian temple architecture evolved across 1,500 years.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">This is not a relaxing holiday. It&apos;s a 1,200km road trip through some of the hottest terrain in India, with early mornings, dress codes, queue management and constant driving. But every single stop is extraordinary.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🛕", val: "12+", label: "Major temples" },
                { icon: "🗺️", val: "1,200 km", label: "Total distance" },
                { icon: "📜", val: "3", label: "UNESCO sites" },
                { icon: "💰", val: "₹22,000+", label: "Budget from" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROUTE LOGIC */}
          <section id="route" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🗺️ The Route Logic</h2>
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">North-to-south, no backtracking. Each stop flows into the next.</p>
            <div className="space-y-2">
              {[
                { stop: "Day 1: Tirupati", km: "Start", why: "Most-visited temple in the world. Natural starting point — flights from all major cities.", link: "/blog/tirupati-2-days" },
                { stop: "Day 2: Kanchipuram", km: "130 km", why: "Pallava temples (7th–8th century) — the oldest structural temples in South India. Plus Kanjivaram silk.", link: "/blog/kanchipuram-2-days" },
                { stop: "Day 2–3: Mahabalipuram", km: "60 km", why: "UNESCO Shore Temple — the Pallava coastal masterpiece. Half-day stop on the coast.", link: "/blog/mahabalipuram-2-days" },
                { stop: "Day 3–4: Thanjavur", km: "310 km", why: "Big Temple — the greatest Chola temple, UNESCO World Heritage. Plus Saraswathi Mahal Library and Chola bronzes.", link: "/blog/thanjavur-2-days" },
                { stop: "Day 5: Trichy + Srirangam", km: "55 km", why: "World's largest functioning Hindu temple (156 acres, 7 concentric walls). Plus Rockfort.", link: "/blog/trichy-2-days" },
                { stop: "Day 6: Madurai", km: "130 km", why: "Meenakshi Temple — the most visually overwhelming temple in India. 33,000 sculptures on 14 gopurams.", link: "/blog/madurai-2-days" },
                { stop: "Day 7: Rameswaram", km: "165 km", why: "India's longest temple corridor, Pamban Bridge, Dhanushkodi ghost town at India's southern tip.", link: "/blog/rameswaram-2-days" },
              ].map((s) => (
                <Link key={s.stop} href={s.link} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-parchment-2 hover:border-gold transition-all group">
                  <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded whitespace-nowrap mt-0.5">{s.km}</span>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-ink group-hover:text-teal transition-colors">{s.stop}</p>
                    <p className="text-xs text-muted font-light">{s.why}</p>
                  </div>
                  <span className="text-xs text-muted self-center">Guide →</span>
                </Link>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-2">🚗 Car recommended</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">7-day sedan rental with driver: ₹28,000–₹35,000 (fuel extra, ~₹8,000–₹12,000). Gives flexibility to stop at roadside temples, adjust timing, skip queues by arriving early. AC is essential in Tamil Nadu.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-2">🚂 Train alternative</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Works for major hops: Chennai–Thanjavur (6–8 hrs), Trichy–Madurai (3 hrs), Madurai–Rameswaram (4 hrs). Use buses for shorter links. Slower and less flexible but significantly cheaper.</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 font-light leading-relaxed"><strong className="font-medium">When to go:</strong> November to February is ideal (22–32°C). Avoid April to June — Tamil Nadu gets brutally hot (40°C+), and walking temple complexes in that heat is genuinely difficult. Monsoon (October–December on the east coast) brings rain but the temples are dramatic in the wet.</p>
            </div>
          </section>

          {/* ITINERARY */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 The 7-Day Itinerary</h2>
            {days.map((d) => (
              <div key={d.day} className="bg-white rounded-xl border border-parchment-2 overflow-hidden mb-4">
                <div className="bg-parchment px-5 py-4 flex items-center gap-3">
                  <span className="font-serif text-xl text-amber-900 font-light">{d.day}</span>
                  <span className="text-sm text-ink font-medium">{d.title}</span>
                </div>
                <div className="p-5 space-y-3">
                  {d.items.map((item, i) => (
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
            ))}

            <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-800 font-light leading-relaxed"><strong className="font-medium">What NOT to do:</strong> Don&apos;t rush Madurai. If 7 days is tight, cut Mahabalipuram (half-day) rather than squeezing Madurai into an afternoon. The Meenakshi Temple deserves 2–3 visits at different times of day, and the night ceremony is not to be missed.</p>
            </div>
          </section>

          {/* DRESS CODE & DARSHAN */}
          <section id="dresscode" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">👗 Temple Dress Code & Darshan Hacks</h2>
            <p className="text-sm text-muted font-light mb-6">Tamil Nadu temples have stricter dress codes than most of India. Come prepared and you&apos;ll save time and frustration.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "What to Wear", icon: "👔", content: "Men: dhoti/veshti or long trousers (no shorts ever). Women: sari, salwar kameez, or long skirt (no jeans at strict temples). Covered shoulders always. Srirangam and Meenakshi are the strictest — veshti/sari expected. Kailasanathar is the most relaxed." },
                { title: "Rental Available", icon: "🏪", content: "Veshti/lungi rental: ₹20–₹50 at most temple gates. Sari rental is less common but available at Meenakshi and Srirangam. Carry a large cotton shawl/dupatta as a universal backup — covers shoulders and can wrap as a skirt." },
                { title: "VIP/Sheeghra Darshan", icon: "⚡", content: "Tirupati: ₹300 VIP darshan (book at tirumala.org, 2 days ahead). Meenakshi: ₹50–₹100 Sheeghra Darshan (buy at counter, 30-min queue vs 2+ hours). Srirangam: special darshan ₹50. These are official temple tickets, not bribes — use them guilt-free." },
                { title: "Queue Strategy", icon: "⏰", content: "Go to major temples at opening time (5–6am) — queues are shortest. Avoid weekends and public holidays (10x the crowd). Tuesday and Friday are the busiest days at most temples (auspicious). Full moon and new moon days are also crowded." },
              ].map((item) => (
                <div key={item.title} className="bg-parchment rounded-xl border border-parchment-2 p-4">
                  <div className="flex items-center gap-2 mb-2"><span className="text-lg">{item.icon}</span><p className="font-medium text-sm text-stone-900">{item.title}</p></div>
                  <p className="text-xs text-gray-700 font-light leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BUDGET */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown (7 Days, Per Person)</h2>
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
                    ["🏨 Accommodation (7N)", "₹5,600–₹10,500", "₹14,000–₹28,000", "₹35,000–₹70,000"],
                    ["🍽 Food & Coffee", "₹3,500–₹5,600", "₹7,000–₹14,000", "₹14,000–₹28,000"],
                    ["🚗 Transport", "₹4,000–₹7,000", "₹18,000–₹24,000", "₹28,000–₹45,000"],
                    ["🎫 Temple entries/darshan", "₹500–₹1,000", "₹1,000–₹2,000", "₹2,000–₹3,500"],
                    ["🛍 Shopping (optional)", "₹1,000–₹5,000", "₹5,000–₹20,000", "₹20,000–₹1,00,000"],
                    ["TOTAL (excl. shopping)", "₹22,000–₹32,000", "₹45,000–₹70,000", "₹1,00,000–₹1,60,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">Most temple entries are free. Car rental is the biggest variable — buses + trains cut transport cost by 60–70% but add time and reduce flexibility.</p>
          </section>

          {/* FOOD */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 What to Eat on the Circuit</h2>
            <p className="text-sm text-muted font-light mb-6">Tamil Nadu food is some of the best in India — and it changes subtly as you move south.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { dish: "Filter Coffee", where: "Everywhere — best in Kumbakonam", price: "₹20–₹40", desc: "Non-negotiable. South Indian filter coffee in a steel tumbler and davara. Drink 4–5 a day. The chicory blend, the frothing action, the steel — nothing else tastes like this.", color: "bg-amber-50 border-amber-200" },
                { dish: "Banana Leaf Meals (Sappadu)", where: "Every town, any meals restaurant", price: "₹100–₹200", desc: "Rice, sambar, rasam, kootu, poriyal, appalam, payasam — served on a banana leaf, unlimited refills. The default lunch across Tamil Nadu. Eat with your right hand.", color: "bg-green-50 border-green-200" },
                { dish: "Jigarthanda", where: "Madurai (Murugan Idli Shop, Famous Jigarthanda)", price: "₹40–₹80", desc: "Cold milk drink with almond gum, sarsaparilla and ice cream. Unique to Madurai. Creamy, sweet, unlike anything else in India.", color: "bg-blue-50 border-blue-200" },
                { dish: "Kothu Parotta", where: "Evening stalls, especially Madurai", price: "₹60–₹120", desc: "Shredded parotta tossed on a flat griddle with egg, vegetables or mutton, spices and the metallic clang of two steel spatulas. One of Tamil Nadu's great street food experiences — auditory and culinary.", color: "bg-red-50 border-red-200" },
                { dish: "Temple Prasadam", where: "All major temples", price: "₹10–₹50 donation", desc: "Each temple has signature prasadam — Tirupati laddu (the most famous in India), Srirangam puliyodarai (tamarind rice), Thanjavur pongal. Sacred and delicious.", color: "bg-purple-50 border-purple-200" },
                { dish: "Chettinad Chicken/Mutton", where: "Madurai and south Tamil Nadu", price: "₹150–₹300", desc: "As you move south of Trichy, you enter Chettinad territory — India's spiciest cuisine. Chettinad chicken uses 20+ spices, freshly ground. Available at local restaurants in Madurai.", color: "bg-pink-50 border-pink-200" },
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
            destination="Tamil Nadu"
            hotels={[
              { name: "Svatma Thanjavur", type: "Heritage · Restored mansion", price: "From ₹8,000/night", rating: "5", badge: "Best heritage", url: "https://www.booking.com/searchresults.html?ss=Thanjavur&aid=2820480" },
              { name: "Heritage Madurai", type: "Heritage · Near Meenakshi", price: "From ₹6,000/night", rating: "4", badge: "Madurai pick", url: "https://www.booking.com/searchresults.html?ss=Madurai&aid=2820480" },
              { name: "Hotel Tamil Nadu (TTDC)", type: "Government · All cities", price: "From ₹1,200/night", rating: "3", badge: "Budget across TN", url: "https://www.booking.com/searchresults.html?ss=Tamil+Nadu&aid=2820480" },
            ]}
            activities={[
              { name: "South India Temple Circuit Tour", duration: "7 days", price: "From ₹45,000/person", badge: "All-inclusive", url: "https://www.getyourguide.com/s/?q=tamil+nadu+temple+circuit&partner_id=PSZA5UI" },
              { name: "Madurai Meenakshi Temple Tour", duration: "Half day", price: "From ₹1,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=madurai+meenakshi&partner_id=PSZA5UI" },
              { name: "Thanjavur & Chola Temples Tour", duration: "Full day", price: "From ₹2,500/person", url: "https://www.getyourguide.com/s/?q=thanjavur+chola&partner_id=PSZA5UI" },
              { name: "Rameswaram & Dhanushkodi Tour", duration: "Full day", price: "From ₹2,000/person", url: "https://www.getyourguide.com/s/?q=rameswaram&partner_id=PSZA5UI" },
            ]}
          />

          <DestinationGallery
            title="Tamil Nadu — The Temple State"
            subtitle="1,500 years of Dravidian architecture in 7 days."
            spots={[
              { name: "Meenakshi Temple, Madurai", query: "meenakshi amman temple madurai gopuram colourful sculptures dravidian", desc: "14 gopurams, 33,000 painted sculptures — the most visually overwhelming temple in India." },
              { name: "Brihadeeswarar Temple, Thanjavur", query: "brihadeeswarar big temple thanjavur vimana chola granite tower", desc: "The 216-foot vimana with its 80-tonne capstone — the greatest achievement of Chola architecture." },
              { name: "Shore Temple, Mahabalipuram", query: "shore temple mahabalipuram pallava bay bengal sunrise granite india", desc: "7th-century Pallava temple on the edge of the Bay of Bengal — where it all began." },
              { name: "Srirangam Temple, Trichy", query: "srirangam ranganathaswamy temple trichy largest hindu temple gopuram", desc: "156 acres, 7 concentric walls — the world's largest functioning Hindu temple." },
              { name: "Dhanushkodi Ghost Town", query: "dhanushkodi ghost town ruins beach rameswaram tamil nadu india sea", desc: "The ghost town destroyed by the 1964 cyclone — ruins in the sea at India's southern tip." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "👗", title: "Not carrying traditional clothes", desc: "Pack a veshti/lungi (men) or cotton sari/long skirt (women) from Day 1. Multiple temples on this circuit require it. Buying or renting at gates wastes time and the quality is poor. One set of traditional clothes saves hassle at every stop.", color: "bg-red-50 border-red-200" },
                { icon: "🏃", title: "Rushing Madurai for Rameswaram", desc: "If 7 days feels tight, cut Mahabalipuram — not Madurai. The Meenakshi Temple alone deserves multiple visits. The night puja ceremony is one of India's most intimate temple rituals. Don't trade it for an extra hour at a ghost town.", color: "bg-white border-parchment-2" },
                { icon: "🥵", title: "Attempting this circuit in May", desc: "Tamil Nadu in April–June hits 40–42°C. Walking barefoot in temple courtyards at noon is genuinely painful — the stone absorbs heat. Come November–February or accept suffering. There is no middle ground.", color: "bg-white border-parchment-2" },
                { icon: "🚌", title: "Relying entirely on buses", desc: "Buses work for major city-to-city hops but make the side trips (Darasuram, Gangaikonda Cholapuram, Dhanushkodi) extremely difficult. A car with driver costs more but saves a full day on the circuit and lets you arrive at temples before the crowds.", color: "bg-white border-parchment-2" },
                { icon: "📸", title: "Treating temples as tourist attractions", desc: "Every temple on this circuit is an active place of worship where thousands of devotees come daily. Be respectful, follow rules, dress appropriately, don't photograph where prohibited. You're a guest in someone's sacred space.", color: "bg-white border-parchment-2" },
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
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">Want This Circuit Planned for You?</h2>
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group size and budget — we&apos;ll plan the car hire, hotels and routing for the full 7-day circuit. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Temple Circuit →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "Can I do this circuit in 5 days?", a: "Yes — cut Mahabalipuram (half-day save) and combine Trichy + Madurai days by driving faster. But you'll rush Madurai, which is the worst temple to rush. 7 days is comfortable, 5 is doable, 4 is not recommended." },
                { q: "Is a car with driver worth the cost?", a: "Yes, if budget allows. 7-day sedan rental with driver: ₹28,000–₹35,000 + ₹8,000–₹12,000 fuel. It saves a full day on the circuit, lets you arrive at temples at dawn, and makes side trips (Darasuram, Gangaikonda Cholapuram, Dhanushkodi) practical. The driver also handles parking chaos at temples." },
                { q: "Do I need traditional Indian clothes?", a: "Yes. Srirangam, Meenakshi Temple and several others require veshti/dhoti for men and sari/long skirt for women. Pack one set from Day 1. Cotton is best — Tamil Nadu is hot. Rental is available at gates but the quality is poor." },
                { q: "Which is the single best temple if I can only see one?", a: "Brihadeeswarar at Thanjavur for architectural ambition, Meenakshi at Madurai for sensory overload, Srirangam for scale. If you can only see one, most people say Meenakshi. But the right answer is all of them — that's why the circuit exists." },
                { q: "Best time to visit?", a: "November to February (22–32°C). Avoid April–June (40°C+). The Pongal festival (mid-January) is beautiful across Tamil Nadu. Monsoon (Oct–Dec) brings rain but the temples are dramatic in wet weather." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Individual Destination Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Tirupati 2 Days — Tirumala Darshan", href: "/blog/tirupati-2-days" },
                { label: "Kanchipuram 2 Days — Pallava Temples & Silk", href: "/blog/kanchipuram-2-days" },
                { label: "Mahabalipuram 2 Days — Shore Temple", href: "/blog/mahabalipuram-2-days" },
                { label: "Thanjavur 2 Days — Big Temple", href: "/blog/thanjavur-2-days" },
                { label: "Trichy 2 Days — Rockfort & Srirangam", href: "/blog/trichy-2-days" },
                { label: "Madurai 2 Days — Meenakshi Temple", href: "/blog/madurai-2-days" },
                { label: "Rameswaram 2 Days — Pamban & Dhanushkodi", href: "/blog/rameswaram-2-days" },
                { label: "Pondicherry 3 Days — French Quarter", href: "/blog/pondicherry-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="tamil-nadu-temple-circuit-7-days" />

          <RelatedGuides currentSlug="tamil-nadu-temple-circuit-7-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
