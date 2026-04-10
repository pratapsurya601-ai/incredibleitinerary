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
import { usePageUrl } from "@/lib/hooks";

const DWARKA_TOC = [
  { id: "plans",      emoji: "⚡", label: "Pick Your Plan" },
  { id: "itinerary",  emoji: "\uD83D\uDCC5", label: "Day-by-Day Itinerary" },
  { id: "highlights", emoji: "\uD83C\uDFDB\uFE0F", label: "Must-See Highlights" },
  { id: "budget",     emoji: "\uD83D\uDCB0", label: "Budget Breakdown" },
  { id: "mistakes",   emoji: "❌", label: "Mistakes to Avoid" },
  { id: "tips",       emoji: "\uD83D\uDCA1", label: "Pro Tips" },
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
      <div
        className="h-full bg-gold transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ── Share Button ──────────────────────────────────────────────────────────────
function ShareBar() {
  const pageUrl = usePageUrl();
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
        { label: "Email", color: "bg-ink text-white", href: `mailto:?subject=Dwarka 2-Day Itinerary&body=Check this out: ${pageUrl}` },
        { label: "Twitter", color: "bg-[#1a6fb5] text-white", href: `https://x.com/intent/tweet?text=Dwarka in 2 Days guide&url=${pageUrl}` },
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

// ── MAIN COMPONENT ────────────────────────────────────────────────────────────
export default function DwarkaClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  const plans = [
    { id: "A" as const, emoji: "\uD83D\uDCB0", label: "Budget", sub: "Under ₹4k", color: "border-amber-300 bg-amber-50 text-amber-800" },
    { id: "B" as const, emoji: "\uD83D\uDE4F", label: "Pilgrimage", sub: "₹5k–12k", color: "border-purple-300 bg-purple-50 text-purple-800" },
  ];

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={DWARKA_TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Dwarka" />

      <main id="main-content" className="bg-cream min-h-screen">

        {/* ── HERO ── */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage
            query="dwarkadhish temple dwarka gujarat coast ocean india"
            fallback="https://images.unsplash.com/photo-1609947017136-9daf32a15c38?w=1600&q=85"
            alt="Dwarkadhish Temple towering above the Arabian Sea coast at Dwarka"
            fill className="object-cover" priority sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-white/70">Dwarka 2 Days</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">
                  Pilgrimage & Coast
                </span>
                <span className="text-white/60 text-xs">April 4, 2026</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">12 min read</span>
                <span className="text-white/50">{"·"}</span>
                <span className="text-white/60 text-xs">IncredibleItinerary</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">
                Dwarka in 2 Days: Dwarkadhish Temple to Bet Dwarka Island
                <em className="italic text-gold-light"> (Budget to Pilgrimage, 2026)</em>
              </h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">
                2 complete plans with real timings, actual costs, Google Maps routes — covering Krishna&apos;s legendary kingdom, a Jyotirlinga, and an island frozen in time.
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
              <span>{"\uD83C\uDDEE\uD83C\uDDF3"} India</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDDD3"} 2 Days</span>
              <span>{"·"}</span>
              <span>{"\uD83D\uDCB0"} From {"₹"}3,500</span>
            </div>
          </div>

          {/* Honest intro */}
          <blockquote className="border-l-4 border-gold pl-6 mb-10 bg-parchment/60 rounded-r-xl py-4 pr-4">
            <p className="font-serif text-[1.1rem] italic text-ink-mid leading-relaxed">
              Dwarkadhish Temple at dawn during aarti — the sound of bells over the Arabian Sea is something no recording captures. You have to be there. Most visitors do a quick darshan and leave, missing the island, the Jyotirlinga, and a coastline that sits at the edge of India&apos;s oldest mythology. This guide makes sure you don&apos;t.
            </p>
          </blockquote>

          {/* ── PICK YOUR PLAN ── */}
          <section id="plans" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"⚡"} Pick Your Plan</h2>
            <p className="text-sm text-muted font-light mb-6">Two ways to experience Dwarka — pick yours and jump straight to the itinerary.</p>
            <div className="grid grid-cols-2 gap-3">
              {plans.map((p) => (
                <button key={p.id} onClick={() => { setActiveTab(p.id); document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="p-4 rounded-xl border-2 border-parchment-2 bg-white hover:border-gold hover:shadow-md transition-all duration-200 text-center group">
                  <div className="text-2xl mb-2">{p.emoji}</div>
                  <p className="font-medium text-sm text-stone-900">{p.label}</p>
                  <p className="text-[0.68rem] text-muted mt-0.5">{p.sub}</p>
                  <p className="text-[0.65rem] text-gold-dark mt-2 font-medium group-hover:text-teal transition-colors">Plan {p.id} {"→"}</p>
                </button>
              ))}
            </div>
          </section>

          {/* ── STAT CARDS ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            <StatCard icon={"\uD83D\uDDD3"} label="Duration" value="2 Days" />
            <StatCard icon={"\uD83D\uDCB0"} label="Budget From" value={"₹3,500"} />
            <StatCard icon={"\uD83C\uDF21\uFE0F"} label="Best Months" value="Oct – Mar" />
            <StatCard icon={"\u2708\uFE0F"} label="Nearest Airport" value="Jamnagar" />
          </div>

          {/* ── MUST-SEE HIGHLIGHTS ── */}
          <section id="highlights" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83C\uDFDB\uFE0F"} Must-See Highlights</h2>
            <div className="space-y-4">
              {[
                { title: "Dwarkadhish Temple", desc: "The 2,200-year-old five-storey temple dedicated to Lord Krishna stands on the banks of the Gomti River where it meets the Arabian Sea. The 78-metre spire (shikhar) is visible from kilometres away. Morning aarti at 6:30am with temple bells echoing over the ocean is the definitive Dwarka experience.", emoji: "\uD83D\uDD49\uFE0F", color: "bg-amber-50 border-amber-200" },
                { title: "Nageshwar Jyotirlinga", desc: "One of the 12 sacred Jyotirlingas, located 16km from Dwarka. The massive 25-metre Shiva statue outside is the landmark, but the real power is in the underground sanctum. Visit early morning when the temple is quiet and the atmosphere is meditative.", emoji: "\uD83D\uDD31", color: "bg-teal-50 border-teal-200" },
                { title: "Bet Dwarka Island", desc: "Bet Dwarka island is a 30-minute ferry ride and feels like stepping 200 years back in time — no cars, no noise, just narrow lanes and ancient temples. The Krishna temple here is believed to be where Krishna actually lived. The Sudama Setu bridge and marine sanctuary add to the experience.", emoji: "\uD83C\uDFDD\uFE0F", color: "bg-rose-50 border-rose-200" },
                { title: "Rukmini Temple", desc: "Dedicated to Krishna’s queen, this ornately carved temple sits 2km from the main town. The legend says Durvasa’s curse separated Rukmini from Krishna, so her temple had to be built at a distance. The intricate stone carvings on the exterior walls rival any in Gujarat.", emoji: "\uD83C\uDFDB\uFE0F", color: "bg-amber-50 border-amber-200" },
                { title: "Gomti Ghat & Confluence", desc: "The sacred ghat where the Gomti River meets the Arabian Sea. Pilgrims bathe here before entering Dwarkadhish Temple. Walk down the 56 steps at sunset — the light over the water with the temple spire behind you is Dwarka’s most photographed moment.", emoji: "\uD83C\uDF05", color: "bg-teal-50 border-teal-200" },
                { title: "Dwarka Lighthouse", desc: "The lighthouse on the coast near Dwarkadhish Temple offers a panoramic view of the temple complex, the Gomti-sea confluence, and the Arabian Sea stretching to the horizon. Open afternoons only (4–5:30pm). Entry is ₹25. Worth every rupee for the aerial perspective of Dwarka’s sacred geography.", emoji: "\uD83D\uDEA8", color: "bg-rose-50 border-rose-200" },
              ].map((h) => (
                <TipCard key={h.title} icon={h.emoji} title={h.title} desc={h.desc} color={h.color} />
              ))}
            </div>
          </section>

          {/* ── ITINERARIES ── */}
          <section id="itinerary" className="mb-14 scroll-mt-24">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-2">{"\uD83D\uDCC5"} Day-by-Day Itinerary</h2>
            <p className="text-sm text-muted font-light mb-6">Click a plan — days are expandable/collapsible.</p>

            {/* Tab switcher */}
            <div className="flex gap-2 flex-wrap mb-8 p-1 bg-parchment rounded-xl">
              {plans.map((p) => (
                <button key={p.id} onClick={() => setActiveTab(p.id)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-xs font-medium tracking-wide transition-all duration-200 ${
                    activeTab === p.id ? "bg-white shadow text-ink border border-parchment-2" : "text-muted hover:text-ink"
                  }`}>
                  {p.emoji} {p.label}
                </button>
              ))}
            </div>

            {/* ── PLAN A: Budget ── */}
            {activeTab === "A" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDCB0"}</span>
                  <div>
                    <p className="text-sm font-medium text-amber-800">Budget Plan — Dwarka Town</p>
                    <p className="text-xs text-amber-600 font-light">Stay: Dharamshala or guesthouse near temple {"·"} {"₹"}300–{"₹"}800/night {"·"} Auto: {"₹"}80–150/ride</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Dwarkadhish Temple, Gomti Ghat & Lighthouse"
                  items={[
                    "6:00am — Morning aarti at Dwarkadhish Temple. Reach by 5:45am for a spot near the front. The bells, chanting, and sea breeze through the open temple is unforgettable.",
                    "7:30am — Walk down Gomti Ghat’s 56 steps to the river-sea confluence. Pilgrims bathe here — even if you skip the dip, the morning light on the water is worth the walk.",
                    "8:30am — Breakfast at a local dhaba near the temple. Gujarati nashta — dhokla, jalebi-fafda, chai — for ₹50–80.",
                    "10:00am — Auto to Rukmini Temple (2km, ₹80). The carved exterior walls tell the entire Rukmini-Krishna story in stone. Budget 45 minutes.",
                    "11:30am — Return to town. Walk through the old bazaar lanes for brass items, beadwork, and temple souvenirs.",
                    "12:30pm — Lunch at a Gujarati thali restaurant. Unlimited thali with dal, sabzi, roti, rice, and buttermilk for ₹100–150.",
                    "2:30pm — Swaminarayan Temple — a peaceful contrast to the main temple’s intensity. Free entry.",
                    "4:00pm — Dwarka Lighthouse (open 4–5:30pm, ₹25). The 360-degree view of the temple complex and coastline is the best perspective in Dwarka.",
                    "5:30pm — Sunset at Gomti Ghat. The evening light behind the temple spire over the Arabian Sea is spectacular.",
                    "7:00pm — Evening aarti at Dwarkadhish Temple. Less crowded than morning but equally powerful.",
                    "8:00pm — Dinner at a local restaurant. Gujarati thali or street food for ₹100–150.",
                  ]}
                  cost={"₹800–1,200"}
                />
                <DayCard day="Day 2" title="Bet Dwarka Island & Nageshwar Jyotirlinga"
                  items={[
                    "6:00am — Early bus or shared auto to Okha port (30km, ₹40–60 by bus). First ferries have the shortest queues.",
                    "7:30am — Government ferry to Bet Dwarka island (₹20–50, 30 minutes). The ride across the Gulf of Kutch is beautiful in morning light.",
                    "8:00am — Bet Dwarka Krishna Temple — believed to be Krishna’s actual residence. The island has no cars, just narrow lanes and ancient shrines. Walk everywhere.",
                    "9:30am — Explore Hanuman Dandi Temple and the island’s coastal path. The silence here compared to mainland Dwarka is striking.",
                    "10:30am — Return ferry to Okha. Pick up fresh fish snacks at the port if you eat seafood.",
                    "11:30am — Auto or bus to Nageshwar Jyotirlinga (16km from Dwarka, ₹100–150 by shared auto).",
                    "12:00pm — Nageshwar Mahadev Temple darshan. The 25-metre Shiva statue is impressive, but spend time in the underground sanctum. Photography is not allowed inside.",
                    "1:30pm — Gopi Talav — a lake nearby with yellow clay banks. Legend says the Gopis’ tears turned the soil golden. Free entry, 20 minutes.",
                    "2:30pm — Late lunch back in Dwarka town (₹100–150).",
                    "4:00pm — Final visit to Dwarkadhish Temple or depart. Dwarka–Jamnagar bus takes 3 hours (₹150).",
                  ]}
                  cost={"₹800–1,400"}
                />
              </div>
            )}

            {/* ── PLAN B: Pilgrimage ── */}
            {activeTab === "B" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-purple-50 border border-purple-200 rounded-xl mb-6">
                  <span className="text-2xl">{"\uD83D\uDE4F"}</span>
                  <div>
                    <p className="text-sm font-medium text-purple-800">Pilgrimage Plan — Complete Sacred Circuit</p>
                    <p className="text-xs text-purple-600 font-light">Stay: Mid-range hotel or trust guesthouse {"·"} {"₹"}1,200–{"₹"}3,500/night {"·"} Private auto for the day: {"₹"}800–1,500</p>
                  </div>
                </div>
                <DayCard day="Day 1" title="Dwarkadhish Darshan, Rukmini Temple & Sacred Ghats"
                  items={[
                    "5:30am — Mangla aarti at Dwarkadhish Temple (first aarti of the day). The temple is nearly empty and the rituals are deeply intimate. A priest guide (₹200–400) explains the significance of each ceremony.",
                    "7:00am — Holy dip at Gomti Ghat. The confluence of the Gomti River and Arabian Sea is one of Hinduism’s most sacred bathing spots.",
                    "8:00am — Breakfast at your hotel or a quality restaurant like Toran Tourist Bungalow (₹150–250).",
                    "9:30am — Private auto for the day (₹800–1,200). First stop: Rukmini Temple. The carvings are Gujarat’s finest outside of Modhera and Rani ki Vav.",
                    "10:30am — Bhalka Tirth (5km) — the site where Lord Krishna was struck by a hunter’s arrow, marking the end of the Dwapar Yug. A deeply significant and contemplative spot.",
                    "11:30am — Swaminarayan Temple for a peaceful darshan.",
                    "12:30pm — Lunch at a quality restaurant. Gujarati thali with extras (₹180–300).",
                    "2:00pm — Dwarkadhish Temple revisit for midday darshan. The temple is less crowded now — spend time studying the carved pillars and the 60-column prayer hall.",
                    "4:00pm — Dwarka Lighthouse for the aerial view (₹25). Combine with a walk along the coastal path.",
                    "5:30pm — Sunset at Gomti Ghat — the temple silhouette against the orange sky is moving.",
                    "7:00pm — Shayan aarti (night aarti) at Dwarkadhish Temple. The temple lit with oil lamps and the deity being put to sleep for the night is a rare and beautiful ritual.",
                    "8:30pm — Dinner. Try a Kathiawadi thali at a recommended restaurant (₹200–400).",
                  ]}
                  cost={"₹2,500–4,500"}
                />
                <DayCard day="Day 2" title="Bet Dwarka, Nageshwar Jyotirlinga & Departure"
                  items={[
                    "5:30am — Private vehicle to Okha port (30km, 45 minutes). Your driver will wait while you visit the island.",
                    "6:30am — Ferry to Bet Dwarka (₹20–50). Morning is best — the island wakes slowly and the temples are peaceful.",
                    "7:00am — Bet Dwarka Krishna Temple — perform a full puja here. This is believed to be where Krishna held court. A local priest can arrange the ritual (₹200–300).",
                    "8:00am — Visit Hanuman Dandi, Vishnu Temple, and walk the island’s ancient lanes. Bet Dwarka is a living museum of medieval maritime Gujarat.",
                    "9:00am — Return ferry. The morning sun over the Gulf of Kutch on the return ride is golden.",
                    "10:00am — Drive to Nageshwar Jyotirlinga (16km from Dwarka). One of the 12 Jyotirlingas — perform abhishek if possible (₹200–500).",
                    "11:00am — Gopi Talav — the lake with golden-yellow soil. The legend of the Gopis is told beautifully by local guides. Free entry.",
                    "12:00pm — Brunch at your hotel or a Dwarka restaurant (₹200–300).",
                    "1:30pm — Final Dwarkadhish darshan. Many pilgrims circle the temple 7 times (parikrama) as a farewell ritual.",
                    "3:00pm — Depart Dwarka. Bus to Jamnagar (3hrs, ₹150) for flights, or overnight train to Ahmedabad.",
                  ]}
                  cost={"₹3,000–5,500"}
                />
              </div>
            )}

            {/* Embedded map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-parchment-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d59076.5!2d68.95!3d22.24!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Dwarka Travel Map" />
            </div>
          </section>

          {/* ── TEMPLE IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="nageshwar jyotirlinga shiva statue temple dwarka gujarat"
              fallback="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=900&q=80"
              alt="The massive Shiva statue at Nageshwar Jyotirlinga temple near Dwarka"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                The submarine temple of Dwarka (reportedly Krishna&apos;s original city now underwater) is one of India&apos;s greatest archaeological mysteries. Scuba tours are now available but book weeks ahead.
              </p>
            </div>
          </div>

          {/* ── BUDGET BREAKDOWN ── */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCB0"} Budget Breakdown</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { plan: "Budget Plan", emoji: "\uD83D\uDCB0", total: "Under ₹4,000", bg: "bg-amber-50 border-amber-200",
                  rows: [["Accommodation","2 nights: ₹600–1,600"],["Food","5–6 meals: ₹500–700"],["Transport","Bus + autos + ferry: ₹400–600"],["Attractions","Temples (free) + lighthouse (₹25): ₹25"],["Extras","Souvenirs, tips: ₹200–400"]] },
                { plan: "Pilgrimage Plan", emoji: "\uD83D\uDE4F", total: "₹5,000–12,000", bg: "bg-purple-50 border-purple-200",
                  rows: [["Accommodation","2 nights: ₹2,400–7,000"],["Food","5–6 meals: ₹800–1,500"],["Transport","Private auto + ferry: ₹1,500–2,500"],["Priest & Puja","Temple rituals: ₹400–800"],["Extras","Offerings, souvenirs: ₹500–1,000"]] },
              ].map((b) => (
                <div key={b.plan} className={`rounded-xl border p-5 ${b.bg}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl">{b.emoji}</span>
                    <div>
                      <p className="font-medium text-sm text-stone-900">{b.plan}</p>
                      <p className="text-xs text-muted font-light">Total per person: {b.total}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {b.rows.map(([k, v]) => (
                      <div key={k} className="flex justify-between text-xs">
                        <span className="text-muted font-light">{k}</span>
                        <span className="text-ink font-medium">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── BET DWARKA IMAGE ── */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-md">
            <SmartImage
              query="bet dwarka island ferry boat arabian sea gujarat india"
              fallback="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80"
              alt="Ferry boat crossing to Bet Dwarka island across the calm Arabian Sea"
              width={860} height={380}
              className="w-full object-cover h-64"
            />
            <div className="bg-parchment px-5 py-3 border-t border-parchment-2">
              <p className="text-xs text-muted font-light italic text-center">
                Bet Dwarka: a 30-minute ferry ride from Okha to an island where time moves differently. No cars, no noise — just ancient temples and narrow lanes.
              </p>
            </div>
          </div>

          {/* ── MISTAKES ── */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❌"} Mistakes to Avoid</h2>
            <div className="space-y-3">
              {[
                { title: "Skipping the morning aarti", desc: "The 6:30am aarti at Dwarkadhish is the single most powerful experience in Dwarka. Tour groups arrive by 9am and the temple becomes a queue. Non-negotiable: be there at 6am.", icon: "\u23F0" },
                { title: "Missing the last ferry from Bet Dwarka", desc: "The last government ferry from Bet Dwarka to Okha is around 5:30pm. Miss it and you are stuck on the island overnight with very limited accommodation. Keep track of time.", icon: "\u26F4\uFE0F" },
                { title: "Visiting the lighthouse in the morning", desc: "The Dwarka Lighthouse is only open from 4pm to 5:30pm. Many visitors walk there in the morning, find it closed, and never return. Plan it for late afternoon.", icon: "\uD83D\uDEA8" },
                { title: "Not carrying water to Nageshwar", desc: "Nageshwar Jyotirlinga is 16km outside Dwarka with minimal facilities en route. The midday heat in Gujarat is brutal. Carry at least 1.5 litres of water and sunscreen.", icon: "\uD83D\uDCA7" },
                { title: "Expecting seafood in Dwarka town", desc: "Dwarka is a vegetarian pilgrim town. Almost every restaurant serves pure veg only. For seafood, you need to go to Okha port area or eat before arriving in Dwarka.", icon: "\uD83C\uDF7D\uFE0F" },
                { title: "Wearing shorts or sleeveless tops to temples", desc: "Dwarka temples have strict dress codes. Men need to cover knees, women need covered shoulders. Carry a shawl or dupatta. Leather items (belts, bags) must be left outside many temples.", icon: "\uD83D\uDC55" },
              ].map((m) => (
                <TipCard key={m.title} icon={m.icon} title={m.title} desc={m.desc}
                  color="bg-white border-parchment-2 hover:border-rust/30 transition-colors" />
              ))}
            </div>
          </section>

          {/* ── PRO TIPS ── */}
          <section id="tips" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"\uD83D\uDCA1"} Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { icon: "\uD83C\uDF05", title: "Sunset at Gomti Ghat", desc: "The 56 steps leading down to the confluence are Dwarka’s best sunset spot. Arrive by 5:15pm for a step with a view. The temple spire silhouetted against the orange sky is unforgettable.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83D\uDEF6", title: "First Ferry to Bet Dwarka", desc: "Take the earliest ferry (around 6:30am). The island is magical before tour groups arrive at 10am. You get quiet temples, friendly locals, and morning light in the narrow lanes.", color: "bg-amber-50 border-amber-200" },
                { icon: "\uD83E\uDDED", title: "Hire a Priest Guide", desc: "A temple guide (₹200–400) at Dwarkadhish transforms the visit. They explain the mythology of each section, manage darshan flow, and can arrange special puja. Worth every rupee.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83C\uDF7D\uFE0F", title: "Gujarati Thali is King", desc: "Don’t fight the veg-only reality — embrace it. The unlimited Gujarati thali here (₹100–180) is one of India’s great food bargains: dal, kadhi, 3–4 sabzis, rotli, rice, papad, and buttermilk.", color: "bg-teal-50 border-teal-200" },
                { icon: "\uD83D\uDCF1", title: "Download Offline Maps", desc: "Mobile signal drops between Dwarka and Okha, and is patchy on Bet Dwarka island. Download Google Maps offline for the entire area before you leave your hotel.", color: "bg-rose-50 border-rose-200" },
                { icon: "\uD83D\uDCC6", title: "Best Month by Month", desc: "Oct–Nov \u2705 best weather, fewer crowds | Dec–Feb \u2705 peak pilgrimage, pleasant 20–30°C | Mar \u2600\uFE0F warming up | Apr–Jun ❌ extreme heat 40°C+ | Jul–Sep \uD83C\uDF27\uFE0F monsoon, ferries may stop | Janmashtami (Aug–Sep): spectacular but massively crowded", color: "bg-rose-50 border-rose-200" },
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
              Tell us your dates, group and budget — we&apos;ll send a personalised Dwarka itinerary within 24 hours. Free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Plan My Dwarka Trip {"→"}
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip {"→"}</a>
            </div>
          </div>

          {/* ── FAQ ── */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">{"❓"} Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: "How many days are enough for Dwarka?", a: "2 days is the sweet spot. Day 1 covers Dwarkadhish Temple, Gomti Ghat, Rukmini Temple, and the lighthouse. Day 2 covers Bet Dwarka island, Nageshwar Jyotirlinga, and Gopi Talav. 1 day is too rushed if you want the Bet Dwarka ferry trip. 3 days only if you want to include Porbandar, Somnath, or the underwater archaeology sites." },
                { q: "What is the best time to visit Dwarka?", a: "October to March. October–November offers pleasant weather and fewer crowds. December–February is peak pilgrimage season with comfortable 20–30°C temperatures. Janmashtami (August–September) is spectacular but extremely crowded — book accommodation months ahead. Avoid April–June when it crosses 40°C." },
                { q: "How much does a 2-day Dwarka trip cost?", a: "Budget solo: under ₹4,000 including accommodation, food, and ferry. Pilgrimage mid-range: ₹5,000–12,000 per person with better hotels, private transport, and priest guides. Temple entry is free everywhere. Bet Dwarka ferry is the cheapest part at ₹20–50." },
                { q: "How do I reach Bet Dwarka island?", a: "Take a bus or auto from Dwarka to Okha port (30km, 45 minutes). Government ferries run every 30 minutes from Okha to Bet Dwarka. The ride is 30 minutes and costs ₹20–50. Last return ferry is around 5:30pm. Private boats cost ₹500–800 for a group. Do not miss the last ferry." },
                { q: "Is the underwater city of Dwarka real?", a: "Marine archaeological surveys have found submerged structures off the Dwarka coast. Whether it is Krishna’s legendary city is debated, but the archaeological site is real and significant. Scuba diving tours to the underwater ruins are available through authorized operators but must be booked weeks in advance. The visibility window is October–February." },
                { q: "What food is Dwarka famous for?", a: "Dwarka is a vegetarian pilgrim town. The Gujarati unlimited thali (₹100–180) is the highlight: dal, kadhi, multiple sabzis, rotli, rice, papad, and chaas. Street food standouts are kachori, dabeli, and fresh sugarcane juice. Temple prasadam at Dwarkadhish is available daily. For seafood, head to Okha port area." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          {/* ── COMMENTS ── */}

          <DestinationGallery
            title="Dwarka — Highlights"
            subtitle="The best of Dwarka in photos."
            spots={[
              { name: "Dwarka Landscape", query: "dwarka india landscape scenic beautiful travel", desc: "The stunning landscapes of Dwarka." },
              { name: "Dwarka Temple", query: "dwarka temple architecture heritage india", desc: "Historic temples and architecture in Dwarka." },
              { name: "Dwarka Street Scene", query: "dwarka street market local culture india", desc: "Local life and culture in Dwarka." },
              { name: "Dwarka Nature", query: "dwarka nature hills forest river india", desc: "Natural beauty around Dwarka." },
              { name: "Dwarka Sunset", query: "dwarka sunset golden hour india travel", desc: "Dwarka at golden hour." },
            ]}
          />

         
          <Comments />

          {/* ── INTERNAL LINKS ── */}
          <section>
            <h3 className="font-serif text-lg font-light text-ink mb-4">Exploring More of Gujarat & Western India?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Gujarat — 7 Day Complete Circuit", href: "/blog/gujarat-7-days", soon: false },
                { label: "Rameswaram — 2 Day Pilgrimage Guide", href: "/blog/rameswaram-2-days", soon: false },
                { label: "Varanasi — 3 Day Spiritual Guide", href: "/blog/varanasi-3-days", soon: false },
                { label: "Browse All India Packages", href: "/#packages", soon: false },
              ].map((link) => (
                <Link key={link.label} href={link.href}
                  className="flex items-center justify-between p-4 bg-white rounded-lg border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group">
                  <span className="text-sm text-ink font-light group-hover:text-teal transition-colors">{link.label}</span>
                  <span className="text-xs text-muted">{link.soon ? "Coming Soon →" : "View →"}</span>
                </Link>
              ))}
            </div>
          </section>

          <RelatedGuides currentSlug="dwarka-2-days" />
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

// ── FAQ Item accordion ────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors"
      >
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-amber-800 text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}
