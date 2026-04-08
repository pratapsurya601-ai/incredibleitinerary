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
  { id: "itinerary", emoji: "📅", label: "10-Day Itinerary" },
  { id: "transport", emoji: "🚗", label: "Getting Around" },
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
      <a href={`mailto:?subject=Tamil Nadu 10 Days — Complete Circuit&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Tamil%20Nadu%2010%20Days%20—%20Complete%20Circuit&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
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
    day: "Day 1", title: "Chennai — Marina Beach, Mylapore & Museums",
    items: [
      { time: "Morning", content: "Arrive Chennai (MAA airport or Chennai Central station). Check in near Mylapore or T. Nagar — both are central and well-connected. Drop bags, freshen up.", tip: null },
      { time: "9am", content: "Kapaleeshwarar Temple, Mylapore — 7th-century Dravidian temple dedicated to Shiva, rebuilt in the 16th century by the Vijayanagara kings. The gopuram is spectacular. Walk the surrounding Mylapore streets for silk shops, flower sellers and filter coffee stalls.", tip: "Mylapore at 7am is the real Chennai — women drawing kolam on thresholds, temple bells, filter coffee vendors setting up brass stalls. Come early." },
      { time: "11am", content: "Government Museum, Egmore — one of India's oldest museums (1851). The bronze gallery has the finest collection of Chola bronzes outside Thanjavur. The Nataraja alone is worth the visit. Entry ₹15 Indians, ₹250 foreigners.", tip: null },
      { time: "1pm", content: "Lunch at a Mylapore restaurant — full South Indian meals (sappadu) on a banana leaf. Saravana Bhavan or Ratna Cafe for traditional vegetarian; Junior Kuppanna for Chettinad non-veg. ₹150–₹300.", tip: null },
      { time: "3pm", content: "San Thome Basilica — built over the tomb of St. Thomas the Apostle, one of only three churches in the world built over an apostle's tomb. Then walk 500m to Marina Beach — the second-longest urban beach in the world (13km). Walk south towards the lighthouse.", tip: null },
      { time: "6pm", content: "Marina Beach at sunset. Street food: sundal (boiled chickpeas with coconut, ₹20), murukku, bajji. The beach comes alive at dusk — it's Chennai's living room.", tip: null },
    ],
  },
  {
    day: "Day 2", title: "Mahabalipuram → Pondicherry",
    items: [
      { time: "7am", content: "Drive Chennai to Mahabalipuram — 58km, 1.5 hours on the East Coast Road (ECR). The ECR is one of India's most scenic coastal highways. Breakfast en route at a beach-side cafe.", tip: null },
      { time: "9am", content: "Shore Temple (UNESCO) — 8th-century Pallava temple facing the Bay of Bengal. One of the oldest structural stone temples in South India. Then Arjuna's Penance — the world's largest open-air rock relief (27m x 9m). Five Rathas (Pancha Pandava Rathas) — five monolithic temples carved from single granite boulders. Combined ticket ₹40 Indians, ₹600 foreigners.", tip: "Shore Temple at sunrise is magical but you'd need to overnight in Mahabs. At 9am you beat the tour bus crowds." },
      { time: "12pm", content: "Quick lunch in Mahabalipuram — seafood is excellent here. Grilled fish at a beachfront restaurant, ₹200–₹400.", tip: null },
      { time: "1pm", content: "Drive Mahabalipuram to Pondicherry — 95km, 2 hours on ECR. Arrive by 3pm.", tip: null },
      { time: "3:30pm", content: "French Quarter (White Town) — walk the grid of colonial streets: Rue Romain Rolland, Rue Suffren, Rue Dumas. Pastel-coloured French colonial buildings, bougainvillea walls, the Promenade along the sea. Pondicherry feels like a different country.", tip: null },
      { time: "6pm", content: "Rock Beach promenade at sunset — 1.5km seafront walk. Street performers, Pondy's evening buzz. Dinner at a French Quarter restaurant — French-Tamil fusion is a real thing here. Crepes, croissants and filter coffee in the same cafe.", tip: null },
    ],
  },
  {
    day: "Day 3", title: "Pondicherry → Thanjavur",
    items: [
      { time: "7am", content: "Auroville — the experimental township founded in 1968, 12km from Pondicherry. Visit the Matrimandir (the golden sphere) — you need a pass from the Visitor Centre, arrive by 9:30am for the 10am viewing slot. The banyan tree, the gardens. 2 hours.", tip: "Matrimandir viewpoint pass is free but limited. Go early to the Visitor Centre. If you want to enter the inner chamber for meditation, book 2–3 days ahead on auroville.org." },
      { time: "10am", content: "Depart Pondicherry for Thanjavur — 260km, 5 hours via NH32. Long drive through the Kaveri delta — flat, green, rice paddies everywhere. This is Tamil Nadu's rice bowl.", tip: "Break the drive at Kumbakonam (30km before Thanjavur) for the best filter coffee in Tamil Nadu. Also stop at Airavatesvara Temple in Darasuram — a UNESCO site right on your route, usually deserted. 30-minute stop." },
      { time: "3pm", content: "Arrive Thanjavur. Check in. Late lunch — banana leaf sappadu at a local restaurant, ₹120–₹200.", tip: null },
      { time: "5pm", content: "Brihadeeswarar Temple (Big Temple) — evening visit. The 216-foot vimana (tower) in golden evening light is staggering. Built by Raja Raja Chola I in 1010 AD, the 80-tonne capstone was hauled up a 6km ramp. The evening puja atmosphere is immersive. 1.5 hours.", tip: null },
    ],
  },
  {
    day: "Day 4", title: "Thanjavur → Trichy → Madurai",
    items: [
      { time: "6:30am", content: "Brihadeeswarar Temple at sunrise — completely different atmosphere from evening. Morning light on the granite, the Nandi monolith in soft light, Chola frescoes in the circumambulatory passage. Fewer people, more atmosphere.", tip: null },
      { time: "8:30am", content: "Thanjavur Palace complex — Saraswathi Mahal Library (one of Asia's oldest, 49,000 manuscripts), Thanjavur Art Gallery (world-class Chola bronze collection — the Nataraja here is extraordinary). Combined entry ~₹150. 1.5 hours.", tip: null },
      { time: "10:30am", content: "Drive Thanjavur to Trichy — 55km, 1 hour. Head straight to Srirangam Ranganathaswamy Temple — the world's largest functioning Hindu temple, 156 acres with 7 concentric walls. Dress code strict: veshti for men, sari/long skirt for women. Rental at gates ₹20–₹50. 2 hours minimum.", tip: "Srirangam is not a museum — people live, shop, eat and worship inside the compound walls. Walk through all 7 prakarams slowly. The 1,000-pillar hall is extraordinary." },
      { time: "1pm", content: "Rockfort Temple — climb 437 steps up the 83-metre granite outcrop for panoramic views of Trichy, the Kaveri and Srirangam. Ucchi Pillayar Temple at the summit. ₹25 entry. 45 minutes.", tip: null },
      { time: "2pm", content: "Quick lunch in Trichy. Then drive to Madurai — 130km, 3 hours. Arrive by 5:30pm.", tip: null },
      { time: "6pm", content: "Check in near Meenakshi Temple. Evening walk around the temple — the flower sellers, silk shops, incense, evening puja bells. The temple town atmosphere at dusk is extraordinary. Dinner at a local restaurant.", tip: null },
    ],
  },
  {
    day: "Day 5", title: "Madurai — Meenakshi Temple & the Old City",
    items: [
      { time: "5:30am", content: "Meenakshi Amman Temple at opening — the most visually overwhelming temple in India. 14 gopurams (gateway towers) covered in 33,000 painted sculptures. The Hall of 1,000 Pillars. The Golden Lotus Tank. Dress code strict: traditional attire required. 2–3 hours minimum.", tip: "Morning is the best time — fewer crowds, the light through the corridors is beautiful, and you get unhurried access to the inner sanctums. Sheeghra Darshan (₹50–₹100) cuts queue to 30 minutes." },
      { time: "9am", content: "Thirumalai Nayak Palace — 17th-century Indo-Saracenic palace, 2km from Meenakshi. The Durbar Hall is stunning — a single, vast space with arches and stucco work. ₹50 entry.", tip: null },
      { time: "11am", content: "Madurai flower market (Mattuthavani) — one of South India's largest, supplying jasmine, roses and marigolds to temples across the state. Even if you're not buying, the colours and fragrance are worth the visit.", tip: null },
      { time: "12:30pm", content: "Lunch: Jigarthanda at Famous Jigarthanda or Murugan Idli Shop — cold milk drink with almond gum, sarsaparilla and ice cream. Unique to Madurai, ₹40–₹80. Then kothu parotta (shredded parotta tossed with egg/mutton and spices) at an evening stall.", tip: null },
      { time: "3pm", content: "Gandhi Memorial Museum — housed in the Tamukkam Palace, where Mahatma Gandhi's blood-stained dhoti is preserved. Sobering and important. Free entry. 1 hour.", tip: null },
      { time: "9:30pm", content: "Night ceremony at Meenakshi Temple — Lord Sundareswarar (Shiva) is carried in a golden palanquin to Meenakshi's (Parvati) bedchamber. The temple closes after this. One of India's most intimate temple rituals. Do not miss this.", tip: null },
    ],
  },
  {
    day: "Day 6", title: "Madurai → Kodaikanal — Up the Ghats",
    items: [
      { time: "7am", content: "Depart Madurai for Kodaikanal — 120km, 3.5 hours. The first 80km is flat highway, then the ghat road begins at Batlagundu. 48 hairpin bends climbing from 300m to 2,133m. The temperature drops 15°C as you climb. Carry a jacket.", tip: "The ghat road is narrow with heavy lorry traffic. Start early. A car with driver is strongly recommended for this stretch. If prone to motion sickness, take medication before the climb." },
      { time: "11am", content: "Arrive Kodaikanal. Check in. The first thing you notice is the air — cool, clean, eucalyptus-scented. At 2,133m you're above the heat of the plains.", tip: null },
      { time: "12pm", content: "Kodai Lake — the star-shaped artificial lake at the heart of the town. Rent a pedal boat (₹80–₹150 for 30 min) or walk the 5km path around it. The lake is surrounded by eucalyptus and shola forest.", tip: null },
      { time: "3pm", content: "Coaker's Walk — a 1km paved path along the edge of the cliff with panoramic views of the Palani Hills. On clear days you can see Madurai. Then Bryant Park (botanical garden next to the lake), free entry.", tip: null },
      { time: "5pm", content: "Kodaikanal chocolate shopping — homemade chocolate is Kodai's thing. The shops along Anna Salai and PT Road sell fresh chocolate, but quality varies wildly. Stick to established shops (Cottage Crafts, Potter's Shed). Taste before buying. ₹300–₹600/kg.", tip: "50% of Kodai 'homemade' chocolate is factory-made and relabelled. If the price is under ₹250/kg, it's probably not handmade. The good stuff costs ₹400–₹600/kg and tastes completely different." },
    ],
  },
  {
    day: "Day 7", title: "Kodaikanal — Berijam Lake & Pine Forest",
    items: [
      { time: "7am", content: "Berijam Lake — the hidden gem, 21km from Kodaikanal town. Requires a forest department permit (free, issued at Kodaikanal Forest Office on Club Road, 9am). Limited to 20 vehicles/day — go early to get the permit. The drive through shola grassland is stunning. The lake itself is pristine, surrounded by undisturbed forest.", tip: "Get to the Forest Office by 8:30am for the permit. The 20-vehicle limit is real and enforced. Once there, you'll have one of the most beautiful lakes in South India almost to yourself. No boats, no stalls, no crowds." },
      { time: "11am", content: "Pillar Rocks — three massive granite pillars rising 122m from a deep gorge. The viewpoint is dramatic, especially in mist. 10 minutes from town. ₹10 entry.", tip: null },
      { time: "12pm", content: "Pine Forest — a plantation of tall pine trees on the road to Guna Caves. The light filtering through the canopy, the carpet of pine needles, the silence. Walk or cycle. The caves themselves are fenced off (dangerous), but the forest is the real attraction.", tip: null },
      { time: "2pm", content: "Lunch in Kodaikanal town — try the bakeries (Cloud Street, Pastry Corner) for fresh bread and pastries. Kodai has surprisingly good bakeries due to its colonial heritage.", tip: null },
      { time: "4pm", content: "Kurinji Andavar Temple — small Murugan temple, but the surrounding Kurinji flowers bloom once every 12 years (next bloom: 2030). Even without the bloom, the hilltop views are excellent.", tip: null },
      { time: "Evening", content: "Free evening in Kodaikanal. Watch the mist roll in over the lake. The town gets quiet and cold after dark — carry layers.", tip: null },
    ],
  },
  {
    day: "Day 8", title: "Kodaikanal → Ooty — Across the Western Ghats",
    items: [
      { time: "7am", content: "Depart Kodaikanal for Ooty — 260km, 6.5–7 hours via Palani, Dharapuram and Mettupalayam. This is a long drive, but it crosses some of the most scenic terrain in South India — from the Palani Hills, through the Coimbatore plains, and up the Nilgiri Ghats to Ooty.", tip: "There's no direct highway — the route goes through small towns and the ghat road up to Ooty has 36 hairpin bends. Start early and plan for a full day of travel." },
      { time: "10am", content: "Stop at Palani Murugan Temple if desired — one of the six abodes of Lord Murugan, with a hilltop temple reached by steps or a winch. 45-minute stop. Then continue towards Coimbatore plains.", tip: null },
      { time: "1pm", content: "Lunch stop at Dharapuram or Coimbatore outskirts. Parotta and chicken curry at a highway restaurant, ₹120–₹200.", tip: null },
      { time: "2:30pm", content: "Begin the Nilgiri Ghat road from Mettupalayam — 36 hairpin bends climbing from 300m to 2,240m. The same route the Nilgiri Mountain Railway takes. Tea plantations appear as you climb. The air changes. Temperature drops.", tip: null },
      { time: "4:30pm", content: "Arrive Ooty. Check in. Rest and acclimatise — at 2,240m, Ooty is noticeably cooler. Evening walk around Ooty Lake (5.5km circumference) or Commercial Road for Nilgiri tea shopping.", tip: null },
    ],
  },
  {
    day: "Day 9", title: "Ooty — Nilgiri Toy Train, Tea Estates & Doddabetta",
    items: [
      { time: "6:30am", content: "Doddabetta Peak — the highest point in the Nilgiris at 2,637m. 10km from Ooty. Drive up and walk the last 200m. On clear mornings, the panoramic view stretches across the Western Ghats. Avoid going after 10am when clouds roll in. Entry ₹30.", tip: "Clear mornings are rare after December. October–November and February–March give the best chance of a clear sunrise view from Doddabetta." },
      { time: "9am", content: "Tea Factory visit — Ooty is surrounded by Nilgiri tea estates. Visit the Tea Museum and Factory near Doddabetta (Dodabetta Tea Factory, ₹25 entry). Watch the tea-making process from leaf to cup. Buy fresh Nilgiri tea — ₹150–₹400 for 250g, far cheaper and fresher than in city shops.", tip: null },
      { time: "11am", content: "Nilgiri Mountain Railway (Toy Train) — UNESCO World Heritage. The full Mettupalayam–Ooty route is 46km with the world's steepest rack railway section. Book the Ooty–Coonoor section (19km, 1 hour, ₹30 second class, ₹200 first class) — this covers the most scenic stretch through tea gardens and bridges. Book at irctc.co.in at least 1 week ahead.", tip: "First class sells out fast. Second class is fine — open windows, better photos. The 11:15am departure from Ooty to Coonoor is the most popular. Return by taxi from Coonoor (19km, 40 min, ₹500)." },
      { time: "2pm", content: "Lunch in Coonoor or back in Ooty — try the local Nilgiri varieties: Ooty varkey (flaky butter biscuit), homemade chocolates, and mushroom soup (Nilgiris grow excellent mushrooms).", tip: null },
      { time: "4pm", content: "Botanical Garden — 22-hectare garden established in 1848. The 20-million-year-old fossil tree trunk, the Italian garden section, and the annual flower show (May). ₹30 entry. 1.5 hours.", tip: null },
      { time: "Evening", content: "Sunset at Ooty Lake or a quiet walk through the Nilgiri hills. Ooty gets genuinely cold after dark — 8–12°C in winter. Carry warm layers.", tip: null },
    ],
  },
  {
    day: "Day 10", title: "Ooty → Pykara → Coimbatore (Departure)",
    items: [
      { time: "7am", content: "Pykara Falls and Pykara Lake — 20km from Ooty. A series of waterfalls in dense shola forest, most dramatic after the monsoon (Oct–Dec). Pykara boat ride on the lake (₹75 for 15 min, TTDC operated). The drive through Wenlock Downs — rolling grasslands that look like the Scottish Highlands.", tip: null },
      { time: "9:30am", content: "Optional: Mudumalai National Park entry point — 36km from Ooty on the Mysore road. Quick safari option if you want to spot elephants, gaur (Indian bison), and deer. The Bandipur–Mudumalai corridor is one of India's best wildlife zones. Morning safari: ₹60 Indians, ₹600 foreigners.", tip: "Mudumalai safari is worth it only if you have time. The morning slot (6:30–8:30am) is best for wildlife. Skip if you need to catch an afternoon flight from Coimbatore." },
      { time: "11am", content: "Depart Ooty for Coimbatore — 86km, 2.5 hours down the Nilgiri Ghat road via Mettupalayam. The descent is stunning — you literally drive through clouds and emerge into the plains.", tip: null },
      { time: "1:30pm", content: "Arrive Coimbatore. Optional: Isha Yoga Center — the 34m Adiyogi Shiva statue (recognized by Guinness World Records as the world's largest bust sculpture). 30km from Coimbatore. Free entry. 1 hour. Then head to Coimbatore airport (CJB) for your departure flight.", tip: null },
      { time: "4pm", content: "Coimbatore airport (CJB) — direct flights to Chennai, Bangalore, Mumbai, Delhi, Hyderabad and Kochi. Budget airlines keep prices reasonable — ₹2,000–₹5,000 to major cities if booked ahead.", tip: null },
    ],
  },
];

export default function TamilNadu10DaysClient() {
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
          <SmartImage query="ooty nilgiri tea plantation green hills tamil nadu india fog train" fallback="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1600&q=85" alt="Nilgiri tea plantations Ooty Tamil Nadu with mist rolling over green hills" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Tamil Nadu 10 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Full Circuit</span>
                <span className="text-white/60 text-xs">April 8, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Tamil Nadu in 10 Days:<em className="italic text-amber-300"> Chennai to Ooty — the Complete Circuit</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">Beaches, ancient temples, French colonial streets, the world&apos;s most dramatic gopurams, two hill stations above the clouds, and a UNESCO toy train — one state, every landscape.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🇮🇳 Tamil Nadu</span><span>·</span><span>🗓 10 Days</span><span>·</span><span>💰 From ₹25,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ Why This Route</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Tamil Nadu is the only Indian state where you can start on a 13km urban beach, see temples that predate most European cathedrals, eat French croissants in a colonial quarter, stand inside the world&apos;s largest functioning Hindu temple, and end on a 2,240m hill station riding a UNESCO-listed steam train — all within 10 days and a single state border.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">This isn&apos;t the temple-only circuit (we have a separate <Link href="/blog/tamil-nadu-temple-circuit-7-days" className="text-teal underline underline-offset-2 hover:text-teal/80">7-day temple circuit guide</Link> for that). This is the full Tamil Nadu experience — coast, culture, history, food, hill stations. Chennai&apos;s urban buzz, Pondicherry&apos;s Franco-Tamil charm, the Chola heartland around Thanjavur and Trichy, Madurai&apos;s sensory overload, and the Nilgiri hills where the temperature drops 20°C and the landscape turns Scottish.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">The route moves east-to-south-to-west, ending at Coimbatore airport — no backtracking, no wasted days. Every stop connects naturally to the next.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🗺️", val: "1,100 km", label: "Total distance" },
                { icon: "🏖️", val: "3", label: "Landscapes" },
                { icon: "🛕", val: "15+", label: "Major temples" },
                { icon: "💰", val: "₹25,000+", label: "Budget from" },
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
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">East coast → south → up the Western Ghats. Each stop flows into the next without backtracking.</p>
            <div className="space-y-2">
              {[
                { stop: "Day 1: Chennai", km: "Start", why: "Marina Beach, Mylapore temples, museums, and the best filter coffee introduction to Tamil Nadu.", link: "/blog/chennai-2-days" },
                { stop: "Day 2: Mahabalipuram + Pondicherry", km: "153 km", why: "UNESCO Shore Temple, then the French Quarter — coastal Pallava ruins meet colonial Franco-Tamil charm.", link: "/blog/pondicherry-3-days" },
                { stop: "Day 3: Thanjavur", km: "260 km", why: "Brihadeeswarar Big Temple — the greatest Chola temple. UNESCO World Heritage. Saraswathi Mahal Library.", link: "/blog/thanjavur-2-days" },
                { stop: "Day 4: Trichy + Madurai", km: "185 km", why: "Srirangam (world's largest temple), Rockfort, then drive to Madurai for the evening.", link: "/blog/trichy-2-days" },
                { stop: "Day 5: Madurai", km: "—", why: "Meenakshi Temple — 33,000 sculptures on 14 gopurams. The night puja ceremony is unmissable.", link: "/blog/madurai-2-days" },
                { stop: "Day 6–7: Kodaikanal", km: "120 km", why: "From 40°C plains to a 2,133m hill station. Kodai Lake, Berijam Lake, Pine Forest, handmade chocolate.", link: "/blog/kodaikanal-3-days" },
                { stop: "Day 8: Transfer to Ooty", km: "260 km", why: "Cross the Western Ghats via Palani Hills and Nilgiri Ghat road — one of India's most scenic drives.", link: "/blog/ooty-3-days" },
                { stop: "Day 9: Ooty", km: "—", why: "Nilgiri Toy Train (UNESCO), Doddabetta Peak, tea estates, Botanical Garden. The Queen of Hill Stations.", link: "/blog/ooty-3-days" },
                { stop: "Day 10: Ooty → Coimbatore", km: "86 km", why: "Pykara Falls, optional Mudumalai safari, then descend to Coimbatore airport for departure.", link: "/blog/coimbatore-2-days" },
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

            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 font-light leading-relaxed"><strong className="font-medium">When to go:</strong> November to February is ideal — comfortable 22–30°C on the plains, 10–20°C in the hills. Avoid April–June when the plains hit 40°C+. The monsoon (Oct–Dec on the east coast) brings rain but dramatic skies. Hill stations are pleasant year-round except during monsoon downpours.</p>
            </div>
          </section>

          {/* ITINERARY */}
          <section id="itinerary" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">📅 The 10-Day Itinerary</h2>
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
              <p className="text-sm text-red-800 font-light leading-relaxed"><strong className="font-medium">Short on time?</strong> Cut Pondicherry (save 1 day) or combine Thanjavur + Trichy into a single fast day. But don&apos;t cut Kodaikanal or Ooty — the hill station contrast after the plains is the entire point of this circuit. And never rush Madurai.</p>
            </div>
          </section>

          {/* TRANSPORT */}
          <section id="transport" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🚗 Getting Around</h2>
            <p className="text-sm text-muted font-light mb-6">Transport is the biggest decision on this circuit — it determines your budget, flexibility and pace.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="font-medium text-sm text-green-800 mb-2">🚗 Car with driver (recommended)</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">10-day sedan rental: ₹35,000–₹45,000 + fuel (~₹12,000–₹15,000). Total: ₹47,000–₹60,000. Gives total flexibility — early temple arrivals, ghat road comfort, and the ability to stop at roadside temples, coffee stops and viewpoints. Essential for the Kodaikanal and Ooty ghat roads. AC is non-negotiable in the plains.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-2">🚂 Train + bus (budget)</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Chennai–Thanjavur (train, 6–8 hrs, ₹300–₹800). Trichy–Madurai (train, 3 hrs, ₹150–₹400). Madurai–Kodaikanal (bus, 4 hrs, ₹120). Kodaikanal–Ooty (bus via Palani, 8–9 hrs, ₹250–₹400). Ooty–Coimbatore (bus, 3 hrs, ₹80). Total transport: ₹3,000–₹6,000. Slower but perfectly doable. Book trains on irctc.co.in.</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-purple-50 border border-purple-200 rounded-xl">
              <p className="font-medium text-sm text-purple-800 mb-2">✈️ Flights</p>
              <p className="text-xs text-purple-700 font-light leading-relaxed">Fly in: Chennai (MAA) — major hub with flights from all cities. Fly out: Coimbatore (CJB) — well-connected to Chennai, Bangalore, Mumbai, Delhi. This one-way routing eliminates any need to backtrack to Chennai. One-way flights Coimbatore to Chennai/Bangalore: ₹2,000–₹5,000 if booked ahead.</p>
            </div>
          </section>

          {/* BUDGET */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">💰 Budget Breakdown (10 Days, Per Person)</h2>
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
                    ["🏨 Accommodation (10N)", "₹7,000–₹15,000", "₹20,000–₹40,000", "₹50,000–₹1,00,000"],
                    ["🍽 Food & Coffee", "₹5,000–₹8,000", "₹10,000–₹20,000", "₹20,000–₹40,000"],
                    ["🚗 Transport (all)", "₹3,000–₹6,000", "₹47,000–₹60,000", "₹60,000–₹80,000"],
                    ["🎫 Entries & activities", "₹800–₹1,500", "₹1,500–₹3,000", "₹3,000–₹5,000"],
                    ["🚂 Toy Train + boats", "₹200–₹500", "₹500–₹1,000", "₹1,000–₹2,000"],
                    ["TOTAL", "₹25,000–₹35,000", "₹55,000–₹80,000", "₹1,20,000–₹2,00,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">Budget assumes trains/buses. Mid-range and Luxury assume car with driver. Flights to/from Tamil Nadu not included. Most temple entries are free or under ₹50.</p>
          </section>

          {/* FOOD */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 What to Eat Across Tamil Nadu</h2>
            <p className="text-sm text-muted font-light mb-6">Tamil Nadu food changes as you move south and uphill — and every version is excellent.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { dish: "Filter Coffee", where: "Everywhere — best in Kumbakonam & Mylapore", price: "₹20–₹40", desc: "The defining drink of Tamil Nadu. Chicory-blended decoction, boiled milk, frothed between steel tumbler and davara. Drink 4–5 a day. Non-negotiable.", color: "bg-amber-50 border-amber-200" },
                { dish: "Banana Leaf Meals (Sappadu)", where: "Every town, any meals restaurant", price: "₹100–₹200", desc: "Rice, sambar, rasam, kootu, poriyal, appalam, payasam — served on a fresh banana leaf, unlimited refills. The default lunch across Tamil Nadu. Eat with your right hand.", color: "bg-green-50 border-green-200" },
                { dish: "Pondicherry French Bakeries", where: "French Quarter, Pondicherry", price: "₹50–₹200", desc: "Fresh croissants, pain au chocolat, baguettes and croque monsieur in a former French colony. Baker Street and Le Dupleix are standout spots. Surreal to eat a French breakfast with filter coffee in India.", color: "bg-blue-50 border-blue-200" },
                { dish: "Jigarthanda", where: "Madurai (Famous Jigarthanda, Murugan Idli)", price: "₹40–₹80", desc: "Cold milk drink with almond gum, sarsaparilla syrup and ice cream. Unique to Madurai — you cannot get this drink anywhere else in India. Creamy, sweet, refreshing.", color: "bg-pink-50 border-pink-200" },
                { dish: "Chettinad Chicken", where: "Madurai and south Tamil Nadu", price: "₹150–₹300", desc: "India's spiciest regional cuisine uses 20+ freshly ground spices. As you cross south of Trichy into Chettinad territory, the food gets dramatically hotter and more complex. Ask for it medium-spicy the first time.", color: "bg-red-50 border-red-200" },
                { dish: "Ooty Varkey & Chocolate", where: "Ooty & Kodaikanal hill stations", price: "₹50–₹400", desc: "Varkey is a flaky, buttery biscuit unique to Ooty — perfect with evening tea. Both hill stations sell handmade chocolate, but quality varies. Taste before buying. King Star, Cottage Crafts are reliable.", color: "bg-purple-50 border-purple-200" },
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
              { name: "La Villa Pondicherry", type: "Boutique · French Quarter", price: "From ₹4,500/night", rating: "4", badge: "Pondy charm", url: "https://www.booking.com/searchresults.html?ss=Pondicherry&aid=2820480" },
              { name: "Sterling Kodaikanal", type: "Resort · Lake View", price: "From ₹3,500/night", rating: "4", badge: "Hill station", url: "https://www.booking.com/searchresults.html?ss=Kodaikanal&aid=2820480" },
              { name: "Savoy Ooty (IHCL)", type: "Heritage · 1829 colonial", price: "From ₹9,000/night", rating: "5", badge: "Ooty icon", url: "https://www.booking.com/searchresults.html?ss=Ooty&aid=2820480" },
              { name: "Hotel Tamil Nadu (TTDC)", type: "Government · All cities", price: "From ₹1,000/night", rating: "3", badge: "Budget across TN", url: "https://www.booking.com/searchresults.html?ss=Tamil+Nadu&aid=2820480" },
            ]}
            activities={[
              { name: "Pondicherry Walking Tour", duration: "3 hours", price: "From ₹1,200/person", badge: "French Quarter", url: "https://www.getyourguide.com/s/?q=pondicherry+walking+tour&partner_id=PSZA5UI" },
              { name: "Madurai Meenakshi Temple Tour", duration: "Half day", price: "From ₹1,500/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=madurai+meenakshi&partner_id=PSZA5UI" },
              { name: "Ooty Tea Estate Experience", duration: "Half day", price: "From ₹1,000/person", badge: "Nilgiri tea", url: "https://www.getyourguide.com/s/?q=ooty+tea+estate&partner_id=PSZA5UI" },
              { name: "Mahabalipuram Heritage Walk", duration: "2 hours", price: "From ₹800/person", badge: "UNESCO", url: "https://www.getyourguide.com/s/?q=mahabalipuram+heritage&partner_id=PSZA5UI" },
              { name: "Thanjavur & Chola Temples Tour", duration: "Full day", price: "From ₹2,500/person", url: "https://www.getyourguide.com/s/?q=thanjavur+chola&partner_id=PSZA5UI" },
              { name: "Nilgiri Toy Train Experience", duration: "Half day", price: "From ₹200/person", badge: "UNESCO heritage", url: "https://www.getyourguide.com/s/?q=nilgiri+mountain+railway+ooty&partner_id=PSZA5UI" },
            ]}
          />

          <DestinationGallery
            title="Tamil Nadu — Coast to Mountains"
            subtitle="Beaches, ancient temples, colonial streets, and misty hill stations in 10 days."
            spots={[
              { name: "Marina Beach, Chennai", query: "marina beach chennai sunrise bay bengal india long urban beach", desc: "The second-longest urban beach in the world — 13km of Bay of Bengal coastline at sunrise." },
              { name: "Shore Temple, Mahabalipuram", query: "shore temple mahabalipuram pallava bay bengal sunrise granite india", desc: "8th-century Pallava temple on the edge of the sea — where South Indian stone architecture began." },
              { name: "French Quarter, Pondicherry", query: "pondicherry french quarter colonial buildings bougainvillea colourful streets india", desc: "Pastel-coloured French colonial streets, bougainvillea walls, and the Bay of Bengal promenade." },
              { name: "Meenakshi Temple, Madurai", query: "meenakshi amman temple madurai gopuram colourful sculptures dravidian", desc: "14 gopurams, 33,000 painted sculptures — the most visually overwhelming temple in India." },
              { name: "Kodai Lake, Kodaikanal", query: "kodaikanal lake mist morning star shaped hill station green forest", desc: "A star-shaped lake at 2,133m — surrounded by eucalyptus forest and rolling mist." },
              { name: "Nilgiri Toy Train, Ooty", query: "nilgiri mountain railway toy train ooty coonoor tea plantation bridge", desc: "UNESCO World Heritage steam train through tea gardens and bridges — the world's steepest rack railway." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🥵", title: "Doing this circuit in May", desc: "The plains (Chennai to Madurai) hit 40–42°C in April–June. Walking barefoot in temple courtyards at noon is genuinely painful — hot stone. The hill stations are fine year-round, but the plains are brutal in summer. Come November–February.", color: "bg-red-50 border-red-200" },
                { icon: "🏃", title: "Rushing Madurai", desc: "Madurai is the emotional heart of this circuit. The Meenakshi Temple alone deserves 2–3 visits at different times of day. The night puja ceremony (9:30pm) is one of India's most intimate rituals. If time is tight, cut Pondicherry — not Madurai.", color: "bg-red-50 border-red-200" },
                { icon: "🚌", title: "Taking the bus Kodaikanal → Ooty", desc: "The direct bus takes 8–9 hours with multiple changes and poor roads. By car it's 6.5–7 hours. If you must take public transport, break the journey at Coimbatore and take a separate bus up to Ooty the next morning. Budget an extra day.", color: "bg-white border-parchment-2" },
                { icon: "🚂", title: "Not booking the Toy Train ahead", desc: "The Nilgiri Mountain Railway (Ooty–Coonoor) sells out 1–2 weeks in advance, especially first class. Book on irctc.co.in the moment your dates are confirmed. Second class is fine — open windows, better photos.", color: "bg-white border-parchment-2" },
                { icon: "🍫", title: "Buying random Kodaikanal chocolate", desc: "Half the 'homemade' chocolate in Kodaikanal is factory-made and relabelled. If it costs under ₹250/kg, it's almost certainly not handmade. Taste before buying. Stick to Cottage Crafts, Potter's Shed, or shops that let you watch the process.", color: "bg-white border-parchment-2" },
                { icon: "👗", title: "Forgetting temple dress code", desc: "Tamil Nadu temples are stricter than most of India. Srirangam and Meenakshi require traditional attire (veshti/dhoti for men, sari/long skirt for women). Pack one set of traditional clothes from Day 1. Rental is available at gates but quality is poor.", color: "bg-white border-parchment-2" },
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
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group size and budget — we&apos;ll plan the car hire, hotels and day-by-day routing for the full 10-day circuit. Free.</p>
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
                { q: "Can I do this circuit in 7 days?", a: "Yes — cut Pondicherry (save 1 day) and combine Thanjavur + Trichy into a faster day (save half a day). Spend the saved time on Kodaikanal or Ooty. But 10 days is the comfortable pace. If you only want temples, see our separate Tamil Nadu Temple Circuit 7-day guide." },
                { q: "Is a car with driver worth the cost?", a: "Yes, especially for the ghat roads to Kodaikanal and Ooty. 10-day sedan rental with driver: ₹35,000–₹45,000 + ₹12,000–₹15,000 fuel. The driver handles the hairpin bends, parking chaos at temples, and lets you arrive early at every stop. If budget is tight, use trains for the plains portion and hire a car only for the hill station segment." },
                { q: "What's the difference between this and the temple circuit?", a: "The 7-day Tamil Nadu Temple Circuit goes Tirupati → Kanchipuram → Mahabalipuram → Thanjavur → Trichy → Madurai → Rameswaram — it's purely temple-focused. This 10-day Full Circuit includes beaches, Pondicherry, two hill stations, and the Nilgiri toy train. Different trips for different interests, with some overlap around Thanjavur and Madurai." },
                { q: "Best time to visit?", a: "November to February (22–30°C on plains, 10–20°C in hills). Avoid April–June (40°C+ on plains). Hill stations are pleasant year-round. Pongal festival (mid-January) is magical across Tamil Nadu. Monsoon (Oct–Dec on the east coast) brings rain but dramatic skies." },
                { q: "Is Tamil Nadu safe for solo female travellers?", a: "Tamil Nadu is one of India's safest states for solo travel and has a strong public transport network. Chennai, Pondicherry and the hill stations are particularly comfortable. Standard precautions apply — avoid isolated areas after dark, trust your instincts. Women travelling solo will find Tamil Nadu more relaxed than many north Indian states." },
                { q: "Do I need to book the Toy Train in advance?", a: "Yes — the Nilgiri Mountain Railway (Ooty–Coonoor) sells out 1–2 weeks ahead. Book on irctc.co.in as soon as your dates are confirmed. First class ₹200, second class ₹30. Second class has open windows for better photos. The 11:15am Ooty–Coonoor departure is the most popular." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Individual Destination Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Chennai 2 Days — Marina, Mylapore & Museums", href: "/blog/chennai-2-days" },
                { label: "Mahabalipuram 2 Days — Shore Temple (UNESCO)", href: "/blog/mahabalipuram-2-days" },
                { label: "Pondicherry 3 Days — French Quarter & Auroville", href: "/blog/pondicherry-3-days" },
                { label: "Thanjavur 2 Days — Big Temple & Chola Art", href: "/blog/thanjavur-2-days" },
                { label: "Trichy 2 Days — Rockfort & Srirangam", href: "/blog/trichy-2-days" },
                { label: "Madurai 2 Days — Meenakshi Temple", href: "/blog/madurai-2-days" },
                { label: "Kodaikanal 3 Days — Lake, Berijam & Pine Forest", href: "/blog/kodaikanal-3-days" },
                { label: "Ooty 3 Days — Toy Train & Tea Estates", href: "/blog/ooty-3-days" },
                { label: "Coimbatore 2 Days — Gateway to Nilgiris", href: "/blog/coimbatore-2-days" },
                { label: "Tamil Nadu Temple Circuit 7 Days", href: "/blog/tamil-nadu-temple-circuit-7-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="tamil-nadu-10-days" />

          <RelatedGuides currentSlug="tamil-nadu-10-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
