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
      <a href={`mailto:?subject=Karnataka 7 Days — Complete Circuit&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Karnataka%207%20Days%20—%20Complete%20Circuit&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
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
    day: "Day 1", title: "Bangalore → Mysore (140km, 3hrs)",
    items: [
      { time: "7am", content: "Depart Bangalore early via the Mysore Expressway (NH275). The 140km drive takes about 3 hours with a breakfast stop. Leave before 7am to beat Bangalore traffic — the city is notorious for jams until you hit the expressway.", tip: "The Mysore Expressway is one of India's best highways — smooth, 6-lane, toll road. Breakfast stop at Kamat Lokaruchi near Channapatna (90 min from Bangalore) for filter coffee and idli." },
      { time: "10am", content: "Arrive Mysore. Check into hotel. Head straight to Mysore Palace — arrive at opening to beat tour groups. The Amba Vilas Palace is one of India's most visited monuments, a kaleidoscope of Indo-Saracenic architecture with stained glass, carved rosewood doors, and mosaic floors. Entry ₹100 for Indians, ₹200 for foreigners. No photography inside. Allow 1.5–2 hours.", tip: "Mysore Palace is illuminated with 100,000 light bulbs every Sunday evening at 7pm and on public holidays. If you arrive on a Sunday, plan your evening around this — it transforms the palace into something surreal." },
      { time: "12:30pm", content: "Lunch at Mylari Hotel — a Mysore institution famous for its butter-soaked masala dosa. ₹60–₹80 per dosa. Tiny place, limited menu, extraordinary dosa. The queue moves fast. Cash only.", tip: null },
      { time: "2pm", content: "Devaraja Market — one of India's oldest and most photogenic markets. The flower section is stunning: mountains of jasmine, marigold, and rose sold by weight. Spice section for Mysore sandalwood and incense. Walk through slowly, 45 minutes to an hour.", tip: null },
      { time: "4pm", content: "Chamundi Hills — 13km from the city centre. You can climb the 1,000 steps (45 minutes up, past the massive Nandi bull statue at step 700) or take an auto for ₹100–₹150 one way. Chamundeshwari Temple at the top, panoramic views of Mysore below. Free entry.", tip: "Climb the steps if you're reasonably fit — the Nandi bull statue halfway up is 4.8 metres tall and carved from a single rock. The views improve with every hundred steps." },
      { time: "7:30pm", content: "Dinner at RRR Restaurant — widely considered the best thali in Mysore. The full meals (rice, sambar, rasam, multiple vegetables, papad, dessert) for ₹150–₹200 on a banana leaf. Unlimited refills. Arrive by 7:30pm — it gets crowded.", tip: null },
    ],
  },
  {
    day: "Day 2", title: "Mysore Full Day — Srirangapatna & Brindavan Gardens",
    items: [
      { time: "8am", content: "Day trip to Srirangapatna — just 15km from Mysore, 30 minutes by car or auto (₹200–₹300 round trip). This river island was Tipu Sultan's capital and the site of his final battle against the British in 1799. Visit the Summer Palace (Daria Daulat Bagh) — exquisitely painted teak walls depicting Tipu's victories. Entry ₹25. Then Tipu's Fort and the dungeon where British officers were held.", tip: "Srirangapatna is a complete morning — Summer Palace, Fort, Gumbaz (Tipu's mausoleum with rosewood doors and ivory inlay), and the Ranganathaswamy Temple. Budget 3 hours for everything." },
      { time: "12pm", content: "Return to Mysore for lunch. Try Vinayaka Mylari for another round of Mysore dosa if you can't get enough, or head to Hotel Siddharta for a proper South Indian thali (₹120–₹180).", tip: null },
      { time: "2pm", content: "Mysore Zoo (Sri Chamarajendra Zoological Gardens) — one of the oldest and best-maintained zoos in India, established in 1892. Entry ₹80 for Indians. Worth 1.5–2 hours if you enjoy wildlife. Alternatively, visit St. Philomena's Church — one of Asia's tallest churches, Gothic architecture inspired by Cologne Cathedral.", tip: null },
      { time: "5pm", content: "Drive to Brindavan Gardens (KRS Dam) — 20km from Mysore, 40 minutes. The musical fountain show starts at 6:30pm (7pm on weekends). Entry ₹30. The gardens are terraced in Mughal style, illuminated with coloured lights after sunset. The dam itself is impressive — built in 1932 across the Kaveri river.", tip: "The musical fountain is the main draw. Arrive by 5:30pm to get a good spot. The gardens are pleasant for an evening walk but the fountain show is what makes this worth the trip." },
      { time: "8pm", content: "Return to Mysore. If it's Sunday, you may have already seen the Palace illumination earlier — if not, and it's a public holiday, don't miss it. Dinner at Mahesh Prasad or any local restaurant near the palace for a relaxed final Mysore meal.", tip: null },
    ],
  },
  {
    day: "Day 3", title: "Mysore → Coorg (120km, 3.5hrs)",
    items: [
      { time: "8am", content: "Depart Mysore for Coorg (Kodagu district). The 120km drive takes 3.5 hours through progressively greener landscape — flatlands give way to Western Ghats foothills, then coffee plantations and thick forest. The last 40km is winding ghat road with hairpin bends.", tip: "Coorg is not a single town — it's a district. Madikeri is the district capital. Most homestays are scattered between Madikeri, Kushalnagar, and Virajpet. Book a coffee estate homestay for the authentic experience — ₹1,500–₹4,000/night with home-cooked Kodava food included." },
      { time: "11:30am", content: "Arrive at your homestay. Check in. Most coffee estate homestays serve a Kodava-style welcome lunch — pork curry (pandi curry), rice, bamboo shoot curry, and filter coffee from beans grown on the estate. This is the real Coorg experience — you eat what the land produces.", tip: null },
      { time: "2pm", content: "Abbey Falls — a 70-foot waterfall hidden inside a coffee and spice plantation. Entry ₹30. Short 1km walk from the parking through coffee bushes, cardamom plants, and pepper vines. The falls are most impressive during and just after monsoon (July–November) but flow year-round. 45 minutes here is enough.", tip: null },
      { time: "4pm", content: "Raja Seat in Madikeri — a hilltop garden where Kodava kings once sat to watch the sunset over the valley. Entry ₹10. On a clear day, you can see the Western Ghats stretching endlessly. The sunset here is genuinely spectacular — arrive by 5pm for golden hour. Small toy train for children, musical fountain in the evening.", tip: "Raja Seat is best at sunset — the mist rolling over the valleys with the last light is one of Karnataka's most photographed moments. Carry a light jacket; Madikeri evenings are cool (18–22°C even in winter)." },
      { time: "7pm", content: "Dinner at the homestay — Kodava home cooking is one of India's most underrated regional cuisines. Expect pandi curry (pork in a dark, vinegary gravy), kadambuttu (steamed rice balls), baimbale curry (bamboo shoot), and akki roti (rice flatbread). Everything from the estate.", tip: null },
    ],
  },
  {
    day: "Day 4", title: "Coorg Full Day — Elephants, Monastery & Kaveri Source",
    items: [
      { time: "7am", content: "Early start for Dubare Elephant Camp — 30km from Madikeri, on the banks of the Kaveri river. You cross the river by coracle (round bamboo boat, ₹50) to reach the camp. Bathe and feed elephants under the guidance of mahouts. The camp is run by the Forest Department. Full experience ₹500–₹750 per person including coracle crossing. Best before 9am when the elephants are bathed.", tip: "Dubare is a real elephant camp, not a tourist park — these are working elephants of the Karnataka Forest Department. The experience is ethical and well-managed. Weekends get very crowded; weekdays are significantly better." },
      { time: "10:30am", content: "Drive to Namdroling Monastery (Golden Temple) in Bylakuppe — 35km from Dubare, 45 minutes. This is the largest Tibetan Buddhist settlement in South India, home to 5,000 monks. The Golden Temple is massive — three gold-plated Buddha statues inside a vividly painted prayer hall. Free entry. Completely unexpected in the middle of Karnataka's coffee country.", tip: "The contrast is jarring and wonderful — you drive through coffee plantations and suddenly you're in a Tibetan Buddhist settlement with monks in maroon robes, prayer flags, and Tibetan restaurants. Have momos (₹60–₹80) at one of the cafes outside the monastery." },
      { time: "1pm", content: "Lunch at a Tibetan cafe near the monastery — momos, thukpa (noodle soup), and butter tea. A surreal meal in the middle of Karnataka. ₹100–₹200 per person.", tip: null },
      { time: "3pm", content: "Drive to Talacauvery — 48km from Madikeri, 1.5 hours on winding mountain roads. This is the sacred source of the River Kaveri, at 1,276 metres elevation in the Brahmagiri hills. A small temple marks the spring where the river emerges. The views from the Brahmagiri peak (short 20-minute climb from the temple) are panoramic — on clear days you can see Coorg and Kerala laid out below.", tip: "Talacauvery is remote and the roads are narrow. Worth it for the views and the significance — the Kaveri sustains most of Karnataka and Tamil Nadu. Visit on a weekday for solitude." },
      { time: "6pm", content: "Return to homestay. Coffee estate walk with your host if offered — many homestays will show you the coffee processing, from cherry to green bean. Fresh filter coffee from their own beans. Dinner at the homestay.", tip: null },
    ],
  },
  {
    day: "Day 5", title: "Coorg → Gokarna (310km, 6hrs via Shimoga)",
    items: [
      { time: "7am", content: "Early departure for the longest drive of the trip — 310km from Coorg to Gokarna, approximately 6 hours via Kushalnagar, Hassan, and Shimoga (Shivamogga). The road passes through diverse Karnataka landscape: coffee hills give way to Malnad forests, then the coastal plains.", tip: "This is a long day of driving. Break the journey at Shimoga for lunch — try Woodlands or any local meals restaurant for a Karnataka thali (₹100–₹150). The road is mostly single-lane state highway after Hassan, so don't expect expressway speeds." },
      { time: "1pm", content: "Lunch stop in Shimoga or along the route. Continue through Jog Falls road — if you have an extra hour, Jog Falls (India's second-highest plunge waterfall, 253m) is a 30km detour from Shimoga. Best during monsoon; in dry season, the flow is reduced.", tip: null },
      { time: "3pm", content: "Arrive Gokarna. Check into your beach accommodation. Gokarna offers everything from ₹500 beach shacks to ₹3,000 boutique stays. Kudle Beach and Om Beach have the most options. Namaste Cafe on Om Beach is a Gokarna institution.", tip: "Gokarna is a temple town that happens to have some of India's most beautiful beaches. It's not Goa — the vibe is quieter, more backpacker-spiritual. Budget stays are excellent value here." },
      { time: "5pm", content: "Om Beach for sunset — one of India's most beautiful beach sunsets. The beach is shaped like the Hindu Om symbol when viewed from above. Walk the length of the beach, find a spot on the rocks at the southern end. The sun drops directly into the Arabian Sea.", tip: "Om Beach faces west with no obstructions — the sunsets here rival anything in India. Bring a beer from a local shop (Gokarna is more relaxed than strict temple towns) and watch from the rocks." },
      { time: "7:30pm", content: "Dinner at Namaste Cafe on Om Beach — fresh seafood, cold drinks, and a chilled atmosphere. Fish thali ₹200–₹350, grilled fish ₹250–₹400. The cafe sits right on the beach with lantern lighting at night.", tip: null },
    ],
  },
  {
    day: "Day 6", title: "Gokarna Morning → Hampi (340km, 6.5hrs)",
    items: [
      { time: "6:30am", content: "Early morning walk to Mahabaleshwar Temple — one of the seven Mukti Sthalas (places of salvation) in Hinduism, and one of the oldest Shiva temples in India. The temple is in the heart of Gokarna town, built in Dravidian style with a large Shiva lingam. Free entry. Respectful dress required.", tip: "Mahabaleshwar Temple is the reason Gokarna exists — the beaches came later. This is a serious pilgrimage site. Visit early morning for the puja atmosphere." },
      { time: "8am", content: "Beach hopping before departure. Trek from Om Beach to Half Moon Beach (20 minutes through coastal forest) and on to Paradise Beach (another 20 minutes). Or take a fisherman's boat — ₹150–₹300 per person for the Om Beach to Paradise Beach circuit. Paradise Beach is almost deserted on weekdays — just sand, sea, and a few shacks.", tip: "The coastal trek between beaches is Gokarna's best activity. Wear proper shoes (rocky in parts), carry water. The trail has steep sections but nothing dangerous. Boats are easier but you miss the forest canopy and cliff views." },
      { time: "10:30am", content: "Depart Gokarna for Hampi — 340km, approximately 6.5 hours via NH66 and NH48 through Hubli-Dharwad. This is the second long drive of the circuit. The landscape flattens as you move inland, turning dry and boulder-strewn as you approach Hampi.", tip: "Consider breaking this drive at Hubli (200km, 3.5hrs) for lunch. Hotel Basavaraj or Hotel Kamat for North Karnataka-style meals. The Hubli to Hampi stretch (140km) crosses some beautiful terrain as the Deccan plateau begins." },
      { time: "5pm", content: "Arrive Hampi. Check into accommodation in Hampi Bazaar or across the river in Virupapur Gaddi (hippie island — more laid-back, accessed by coracle ferry). The first sight of Hampi's boulder landscape is extraordinary — massive granite boulders stacked impossibly, with 15th-century ruins scattered between them.", tip: "Virupapur Gaddi (across the Tungabhadra river) has cheaper, quieter stays and a backpacker vibe. Hampi Bazaar side has better access to the main temples. Choose based on your preference." },
      { time: "6pm", content: "Walk to Hemakuta Hill — a 5-minute climb from Hampi Bazaar to a cluster of ancient Jain and Shiva temples on a rocky hilltop. This is Hampi's best sunset spot. The Virupaksha Temple gopuram below, the boulder landscape stretching to the horizon, the Tungabhadra river glinting in the distance. Absolutely extraordinary.", tip: null },
    ],
  },
  {
    day: "Day 7", title: "Hampi Full Day → Bangalore (Overnight Train)",
    items: [
      { time: "6:30am", content: "Sunrise at Matanga Hill — the highest point in Hampi. 30-minute climb up a rocky trail (wear proper shoes, carry water). The 360-degree view from the top at sunrise is one of India's most spectacular — the entire Vijayanagara ruins laid out below, the Tungabhadra river, and thousands of boulders glowing orange in the first light. Entry ₹50.", tip: "Matanga Hill sunrise is non-negotiable. Set an alarm, carry a torch for the pre-dawn climb, and bring water. The trail is unmarked in parts — follow the painted arrows on rocks. The view is worth every step." },
      { time: "8:30am", content: "Breakfast in Hampi Bazaar — Mango Tree restaurant or any of the bazaar cafes. Then walk to Virupaksha Temple — the only Hampi temple still in active worship, dating to the 7th century. The temple gopuram is 50 metres tall, the halls inside are elaborately carved. Free entry. Allow 45 minutes.", tip: null },
      { time: "10am", content: "Rent a bicycle (₹100–₹150/day) or auto (₹600–₹800 for half-day tour) to explore the Royal Enclosure and Sacred Centre. Key stops: Vittala Temple Complex — home to the iconic stone chariot and the famous musical pillars (each pillar produces a different musical note when tapped). Entry ₹40 for Indians, ₹600 for foreigners. The stone chariot is on the ₹50 note. Allow 1–1.5 hours for Vittala alone.", tip: "The musical pillars at Vittala Temple are extraordinary — 56 pillars, each carved to produce a different note. Gently tap them (don't strike hard, the ASI has restricted access to some). The stone chariot is India's most reproduced monument after the Taj Mahal." },
      { time: "12pm", content: "Continue to Lotus Mahal — an elegant Indo-Islamic pavilion where the queens relaxed, with lotus-bud shaped domes. Elephant Stables nearby — 11 domed chambers that housed the royal war elephants. Queen's Bath — a symmetrical pool with ornate balconies, once surrounded by gardens. All within the Royal Enclosure, combined entry with Vittala Temple ticket.", tip: null },
      { time: "1:30pm", content: "Lunch at a Hampi restaurant — Mango Tree or Laughing Buddha. Rice and sambar, fresh lime soda. Hampi restaurants are basic but the setting (among ruins and boulders) compensates. ₹100–₹200 per meal.", tip: null },
      { time: "3pm", content: "Final explorations: Hazara Rama Temple (walls covered with Ramayana narrative carvings — over 1,000 panels telling the entire epic), or cross the river by coracle (₹30) to explore the quieter Anegundi side — ancient Vijayanagara village with Hanuman Temple on Anjanadri Hill (574 steps, believed to be Hanuman's birthplace).", tip: null },
      { time: "5:30pm", content: "Depart Hampi for Hosapete railway station — 13km, 25 minutes by auto (₹150–₹200). The Hampi Express overnight train to Bangalore departs at approximately 9pm, arriving Bangalore at 7am. Tickets ₹200 (sleeper) to ₹600 (3AC). Book on IRCTC in advance — this train fills up. Alternatively, drive to Bangalore (350km, 6 hours) or fly from Hubli airport (160km from Hampi).", tip: "Book the Hampi Express train at least a week ahead on irctc.co.in. Sleeper class is fine for one night. 3AC gives you AC and cleaner berths. The train runs daily and is the most convenient way to return to Bangalore without exhausting yourself with another long drive." },
    ],
  },
];

export default function KarnatakaCircuitClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Karnataka" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage query="mysore palace illuminated night karnataka india golden" fallback="https://images.unsplash.com/photo-1600112356600-6e7faf5f5e76?w=1600&q=85" alt="Mysore Palace illuminated at night Karnataka India" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Karnataka 7 Days</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Full Circuit</span>
                <span className="text-white/60 text-xs">April 9, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">18 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Karnataka in 7 Days:<em className="italic text-amber-300"> Mysore to Hampi — Palaces, Coffee & Ruins</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">The complete Karnataka circuit — royal palaces, misty coffee estates, untouched beaches and a ruined empire scattered across a boulder landscape.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🏰 Karnataka</span><span>·</span><span>🗓 7 Days</span><span>·</span><span>💰 From ₹15,000</span></div>
          </div>

          {/* HONEST INTRO */}
          <section id="honest" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ Why This Route</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Karnataka is India&apos;s most geographically diverse southern state — and this circuit proves it. In 7 days you&apos;ll move from the opulent Indo-Saracenic palaces of Mysore, through the misty Western Ghats coffee plantations of Coorg, along the Arabian Sea beaches of Gokarna, and into the surreal boulder-strewn ruins of the Vijayanagara Empire at Hampi. Four completely different landscapes, four completely different experiences.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">The route forms a natural loop starting and ending in Bangalore, moving clockwise: south to Mysore, west into the Ghats at Coorg, northwest to the coast at Gokarna, then northeast inland to Hampi before returning east to Bangalore. Every leg takes you into a different world.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">Fair warning: this circuit has two long driving days (Coorg to Gokarna and Gokarna to Hampi, both 6+ hours). A car with driver is strongly recommended. The payoff is enormous — you&apos;ll see more of Karnataka&apos;s range in one week than most visitors see in multiple trips.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🏰", val: "5", label: "Destinations" },
                { icon: "🗺️", val: "1,100+ km", label: "Total distance" },
                { icon: "🌿", val: "4", label: "Landscapes" },
                { icon: "💰", val: "₹15,000+", label: "Budget from" },
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
            <p className="text-sm text-muted font-light mb-6 leading-relaxed">Clockwise loop from Bangalore. Each stop builds on the last — palaces, then nature, then coast, then ruins.</p>
            <div className="space-y-2">
              {[
                { stop: "Day 1–2: Mysore", km: "140 km", why: "Royal city — Mysore Palace, Chamundi Hills, Devaraja Market, Srirangapatna. The grand opening act.", link: "/blog/mysore-3-days" },
                { stop: "Day 3–4: Coorg", km: "120 km", why: "Coffee estates in the Western Ghats, Dubare Elephant Camp, Golden Temple monastery. Nature and quiet.", link: "/blog/coorg-3-days" },
                { stop: "Day 5: Gokarna", km: "310 km", why: "Pristine Arabian Sea beaches — Om Beach, Half Moon, Paradise. Temple town with a backpacker soul.", link: "/blog/gokarna-3-days" },
                { stop: "Day 6–7: Hampi", km: "340 km", why: "UNESCO ruins of the Vijayanagara Empire — stone chariot, musical pillars, boulder landscape. The grand finale.", link: "/blog/hampi-3-days" },
                { stop: "Return: Bangalore", km: "350 km", why: "Overnight train from Hosapete or drive back. Circuit complete.", link: "/blog/bangalore-3-days" },
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
                <p className="font-medium text-sm text-green-800 mb-2">🚗 Car with driver recommended</p>
                <p className="text-xs text-green-700 font-light leading-relaxed">7-day sedan with driver: ₹15,000–₹22,000 + fuel ₹8,000–₹12,000. Essential for Coorg ghat roads, the Gokarna–Hampi stretch, and flexibility at each destination. AC is necessary across Karnataka.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="font-medium text-sm text-blue-800 mb-2">🚂 Train + bus alternative</p>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Bangalore–Mysore by train (2.5 hrs, ₹80–₹250). Mysore–Coorg by bus (3.5 hrs, ₹150–₹300). Coorg to Gokarna is where it breaks down — no direct buses, multiple changes. Hampi return by overnight train (₹200–₹600).</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-800 font-light leading-relaxed"><strong className="font-medium">When to go:</strong> October to March is ideal across all four destinations. Coorg is best September–February (coffee harvest, misty mornings). Hampi is unbearable in April–May (40°C+). Gokarna beaches are rough during monsoon (June–August). The sweet spot is October–February when everything aligns.</p>
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
              <p className="text-sm text-red-800 font-light leading-relaxed"><strong className="font-medium">What NOT to do:</strong> Don&apos;t try to compress Hampi into a half-day. The ruins are spread across 26 square kilometres — you need a full day minimum. If 7 days is tight, consider skipping Gokarna rather than rushing Hampi. The Vijayanagara ruins deserve slow exploration.</p>
            </div>
          </section>

          {/* GETTING AROUND */}
          <section id="transport" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🚗 Getting Around</h2>
            <p className="text-sm text-muted font-light mb-6">This circuit covers 1,100+ km across varied terrain. Your transport choice matters more here than on most Indian trips.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Car + Driver (Recommended)", icon: "🚗", content: "Sedan (Dzire/Etios): ₹15,000–₹22,000 for 7 days + fuel ₹8,000–₹12,000. SUV (Innova): ₹22,000–₹30,000 + fuel. Driver stays overnight at your expense (usually ₹500–₹800/night, or the hotel provides a driver room). Book through Mysore or Bangalore operators — Savaari, Zoomcar with driver, or local agencies." },
                { title: "Self-Drive", icon: "🏎️", content: "Possible but not recommended for this circuit. Coorg ghat roads are narrow with blind turns. Gokarna–Hampi via state highways has truck traffic and unpredictable road quality. If you must self-drive, rent from Zoomcar Bangalore — an SUV (Creta or XUV) is better than a sedan for the Coorg and Hampi legs." },
                { title: "Bus + Train Hybrid", icon: "🚌", content: "Bangalore–Mysore: KSRTC Airavat bus (₹300, 3 hrs) or train (₹80–₹250, 2.5 hrs). Mysore–Coorg: KSRTC bus (₹150–₹300, 3.5 hrs). Coorg onwards requires multiple changes — no direct bus to Gokarna. Hampi–Bangalore: Hampi Express overnight train from Hosapete (₹200–₹600). Budget option but adds significant time and limits flexibility." },
                { title: "Internal Transport", icon: "🛺", content: "Mysore: autos ₹50–₹150 within city. Coorg: your homestay can arrange local transport. Gokarna: walk between beaches or fisherman boats ₹150–₹300. Hampi: rent a bicycle ₹100–₹150/day (the best way to explore the ruins) or hire an auto ₹600–₹800 for a half-day tour." },
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
                    ["🏨 Accommodation (7N)", "₹3,500–₹7,000", "₹10,500–₹21,000", "₹28,000–₹56,000"],
                    ["🍽 Food & Coffee", "₹2,800–₹4,200", "₹5,600–₹10,500", "₹10,500–₹21,000"],
                    ["🚗 Transport (car+fuel)", "₹3,500–₹5,600", "₹23,000–₹34,000", "₹33,000–₹52,000"],
                    ["🎫 Entry fees & activities", "₹500–₹1,200", "₹1,500–₹3,000", "₹5,000–₹10,000"],
                    ["🛍 Shopping (optional)", "₹500–₹2,000", "₹2,000–₹8,000", "₹8,000–₹25,000"],
                    ["TOTAL (excl. shopping)", "₹15,000–₹22,000", "₹42,000–₹68,000", "₹80,000–₹1,40,000"],
                  ].map(([cat, ...vals]) => (
                    <tr key={cat} className="bg-white hover:bg-parchment/40 transition-colors">
                      <td className="p-3.5 text-xs text-ink font-medium">{cat}</td>
                      {vals.map((v, i) => <td key={i} className="p-3.5 text-xs text-muted font-light text-center">{v}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted font-light mt-3 italic">Car + driver for 7 days: ₹15,000–₹22,000 + fuel ₹8,000–₹12,000. Coorg homestays (₹1,500–₹4,000/night) include meals — factor this into both accommodation and food budgets. Hampi and Gokarna are very budget-friendly destinations.</p>
          </section>

          {/* FOOD */}
          <section id="food" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">🍛 What to Eat on the Circuit</h2>
            <p className="text-sm text-muted font-light mb-6">Karnataka food changes dramatically as you move through the state — from Mysore&apos;s refined South Indian classics to Coorg&apos;s pork-and-rice hill cuisine to Gokarna&apos;s fresh seafood.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { dish: "Mysore Masala Dosa", where: "Mylari Hotel, Mysore — or any Mysore restaurant", price: "₹60–₹80", desc: "The Mysore version is different from what you get elsewhere — the dosa is thinner, crispier, and filled with a spicy red chutney (made from dry red chillies, garlic and oil) before the potato filling goes in. Mylari Hotel has perfected this for decades.", color: "bg-amber-50 border-amber-200" },
                { dish: "Kodava Pandi Curry", where: "Coorg homestays — authentic only in Kodagu homes", price: "₹150–₹250", desc: "The signature dish of Coorg — pork slow-cooked in a dark gravy of kachampuli (Kodava vinegar made from a local fruit), black pepper, and spices. Rich, tangy, and completely unique to this region. Eaten with kadambuttu (steamed rice balls). Not available outside Coorg.", color: "bg-red-50 border-red-200" },
                { dish: "Bisi Bele Bath", where: "Every Karnataka restaurant and home kitchen", price: "₹80–₹120", desc: "Karnataka&apos;s comfort food — rice, lentils, vegetables and a proprietary spice mix (bisi bele bath powder) cooked together into a rich, spicy porridge-like dish. Topped with ghee, cashews and sev. Every family has their own recipe. A full meal in a bowl.", color: "bg-green-50 border-green-200" },
                { dish: "Fresh Seafood", where: "Gokarna — Namaste Cafe, Pai Restaurant", price: "₹200–₹400", desc: "The Arabian Sea coast delivers fresh fish daily — kingfish, pomfret, prawns, squid. Grilled with basic masala on the beach, or in a Konkani-style curry with coconut, kokum and green chillies. The fish thali at Pai Restaurant in Gokarna town is outstanding value.", color: "bg-blue-50 border-blue-200" },
                { dish: "Filter Coffee", where: "Everywhere in Karnataka — best in Coorg estates", price: "₹20–₹40", desc: "Karnataka grows most of India&apos;s coffee — and Coorg is the heart of it. The filter coffee here is made from beans roasted and ground on the estate, brewed in a traditional steel filter, mixed with hot milk and served in a steel tumbler and davara. Drink 4–5 cups a day. No guilt.", color: "bg-purple-50 border-purple-200" },
                { dish: "Ragi Mudde + Saaru", where: "North Karnataka — Hampi area restaurants", price: "₹60–₹100", desc: "Ragi mudde is a ball of steamed finger millet (ragi) flour — dense, nutty, gluten-free. Eaten by breaking off pieces and dipping in saaru (a thin, spicy rasam-like broth) or bass saaru (mutton broth). This is the staple food of North Karnataka farmers — filling, nutritious, and deeply local.", color: "bg-pink-50 border-pink-200" },
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
            destination="Karnataka"
            hotels={[
              { name: "Windflower Resort Coorg", type: "Resort · Coffee estate", price: "From ₹6,000/night", rating: "5", badge: "Coorg pick", url: "https://www.booking.com/searchresults.html?ss=Coorg+Karnataka&aid=2820480" },
              { name: "Royal Orchid Brindavan, Mysore", type: "4-Star · Near Palace", price: "From ₹3,500/night", rating: "4", badge: "Mysore pick", url: "https://www.booking.com/searchresults.html?ss=Mysore+Karnataka&aid=2820480" },
              { name: "Namaste Cafe Gokarna", type: "Beach shack · Om Beach", price: "From ₹1,500/night", rating: "3", badge: "Beach vibes", url: "https://www.booking.com/searchresults.html?ss=Gokarna+Karnataka&aid=2820480" },
            ]}
            activities={[
              { name: "Mysore Palace + Srirangapatna Tour", duration: "Full day", price: "From ₹2,000/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=mysore+palace+srirangapatna&partner_id=PSZA5UI" },
              { name: "Coorg Coffee Estate Experience", duration: "Half day", price: "From ₹1,500/person", url: "https://www.getyourguide.com/s/?q=coorg+coffee+estate&partner_id=PSZA5UI" },
              { name: "Hampi Ruins Guided Tour", duration: "Full day", price: "From ₹2,500/person", badge: "UNESCO", url: "https://www.getyourguide.com/s/?q=hampi+ruins+tour&partner_id=PSZA5UI" },
              { name: "Gokarna Beach Hopping Boat Trip", duration: "Half day", price: "From ₹800/person", url: "https://www.getyourguide.com/s/?q=gokarna+beach+boat&partner_id=PSZA5UI" },
            ]}
          />

          <DestinationGallery
            title="Karnataka — The Complete Circuit"
            subtitle="Palaces, coffee, beaches and ruins in 7 days."
            spots={[
              { name: "Mysore Palace Illuminated", query: "mysore palace illuminated night golden lights karnataka india", desc: "100,000 light bulbs transform the Amba Vilas Palace every Sunday evening — one of India's most spectacular sights." },
              { name: "Coorg Coffee Plantations", query: "coorg coffee plantation mist morning western ghats karnataka india", desc: "Misty mornings in the Western Ghats, the smell of coffee cherries drying, and the quiet of the plantation — Coorg at dawn." },
              { name: "Om Beach Sunset, Gokarna", query: "gokarna om beach sunset arabian sea karnataka india golden", desc: "The sun drops directly into the Arabian Sea from Om Beach — shaped like the Hindu Om symbol when seen from above." },
              { name: "Virupaksha Temple & Boulders, Hampi", query: "hampi virupaksha temple boulders ruins karnataka india landscape", desc: "A 7th-century temple still in active worship, surrounded by the boulder-strewn ruins of a vanished empire." },
              { name: "Dubare Elephant Camp, Kaveri River", query: "dubare elephant camp kaveri river coorg karnataka india bath", desc: "Bathing elephants on the banks of the Kaveri river — coracle crossing included." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { icon: "🏨", title: "Skipping Coorg homestays for hotels", desc: "The entire point of Coorg is the homestay experience — waking up on a coffee estate, eating Kodava home cooking, walking through the plantation with your host. A hotel in Madikeri town misses this completely. Book a coffee estate homestay even if it costs more than a hotel. The food alone is worth it.", color: "bg-red-50 border-red-200" },
                { icon: "🏃", title: "Rushing Hampi in half a day", desc: "Hampi has over 500 monuments spread across 26 square kilometres. You need a full day minimum — Matanga Hill at sunrise, Virupaksha Temple, Vittala Temple complex, Royal Enclosure, and Hemakuta Hill at sunset. Trying to see Hampi in a few hours is like trying to see Rome in an afternoon.", color: "bg-white border-parchment-2" },
                { icon: "🚌", title: "Attempting Coorg → Gokarna → Hampi without a car", desc: "There are no direct buses between these destinations. Coorg to Gokarna requires multiple changes through Shimoga and Kumta. Gokarna to Hampi means backtracking through Hubli. With a car, these are long but manageable drives. Without one, you lose entire days to bus connections and waiting.", color: "bg-white border-parchment-2" },
                { icon: "🌙", title: "Visiting Mysore Palace on a weekday evening", desc: "Mysore Palace is beautiful any day, but the Sunday illumination at 7pm — when 100,000 light bulbs turn the palace golden against the night sky — is the experience that makes Mysore unforgettable. Plan your Mysore days to include a Sunday evening. Public holidays also have illumination.", color: "bg-white border-parchment-2" },
                { icon: "📏", title: "Underestimating driving distances in Karnataka", desc: "The map says 310km Coorg to Gokarna. Google says 6 hours. In reality, with single-lane state highways, trucks, speed bumps in every village, and the occasional herd of cattle, budget 7 hours. Add buffer time to every driving day. Karnataka highways outside the Mysore Expressway are not fast roads.", color: "bg-white border-parchment-2" },
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
            <p className="text-sm text-white/80 font-light mb-7 max-w-[380px] mx-auto leading-relaxed">Tell us your dates, group size and budget — we&apos;ll plan the car hire, homestays and routing for the full 7-day Karnataka circuit. Free.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">Plan My Karnataka Circuit →</button>
              <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold transition-colors">Contact Us</Link>
            </div>
          </div>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "Can I do this circuit in 5 days?", a: "Yes — cut Gokarna entirely and drive directly from Coorg to Hampi via Shimoga (about 7 hours). This gives you 2 days Mysore, 2 days Coorg, and 1 full day Hampi. You lose the beach leg but save two long driving days. Alternatively, cut one day each from Mysore and Coorg, but both deserve their time." },
                { q: "Is a car with driver worth the cost?", a: "For this circuit, absolutely. The Coorg ghat roads, the Gokarna coast, and the Hampi interior are poorly connected by public transport. A car with driver costs ₹15,000–₹22,000 plus ₹8,000–₹12,000 fuel for 7 days — split between 2–3 people, it's comparable to bus tickets with infinitely more flexibility. The driver handles parking, navigation, and the gruelling long legs." },
                { q: "Which season is best for this circuit?", a: "October to February is the sweet spot. Coorg has misty mornings and coffee harvest. Hampi is pleasantly warm (not scorching). Gokarna beaches are calm. Mysore is comfortable year-round. Avoid April–May (Hampi exceeds 40°C) and June–August (monsoon makes Gokarna beaches rough and Coorg roads slippery, though Coorg is lush)." },
                { q: "Can I combine this with Goa?", a: "Yes — Gokarna is only 150km south of Goa. After Gokarna (Day 5–6), drive to Goa instead of Hampi, spend 2–3 days, then either fly out of Goa or drive to Hampi from there (350km). This makes it a 10-day trip but covers Karnataka and Goa beautifully." },
                { q: "What about Chikmagalur instead of Coorg?", a: "Chikmagalur is another excellent coffee district, 250km north of Mysore (closer to Hampi). If you want to cut driving time, replace Coorg with Chikmagalur — similar coffee estate experience, plus Mullayangiri (Karnataka's highest peak) and Baba Budangiri. The route becomes Bangalore → Mysore → Chikmagalur → Gokarna → Hampi, which is more linear." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <section className="mt-14">
            <h3 className="font-serif text-lg font-light text-ink mb-4">Individual Destination Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Mysore 3 Days — Palaces & Heritage", href: "/blog/mysore-3-days" },
                { label: "Coorg 3 Days — Coffee & Mountains", href: "/blog/coorg-3-days" },
                { label: "Hampi 3 Days — Ruins & Boulders", href: "/blog/hampi-3-days" },
                { label: "Gokarna 3 Days — Beaches & Temples", href: "/blog/gokarna-3-days" },
                { label: "Bangalore 3 Days — City & Food", href: "/blog/bangalore-3-days" },
                { label: "Chikmagalur 3 Days — Coffee & Peaks", href: "/blog/chikmagalur-3-days" },
              ].map((link) => (
                <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">Read →</span>
                </Link>
              ))}
            </div>
          </section>

          <CombineWith currentSlug="karnataka-7-days" />

          <RelatedGuides currentSlug="karnataka-7-days" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
