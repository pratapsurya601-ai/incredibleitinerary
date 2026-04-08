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
  { id: "why", emoji: "⚡", label: "Why Africa" },
  { id: "country-guide", emoji: "🌍", label: "Country Guide" },
  { id: "best-safari-routes", emoji: "🗺️", label: "Best Safari Routes" },
  { id: "budget", emoji: "💰", label: "Budget" },
  { id: "visa-health", emoji: "📋", label: "Visa & Health" },
  { id: "mistakes", emoji: "❌", label: "Mistakes" },
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
      <a href={`mailto:?subject=Africa Travel Guide — IncredibleItinerary&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=Africa%20Travel%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
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

const countries = [
  { name: "Kenya", flag: "🇰🇪", budget: "$60–$200/day", links: [{ label: "Kenya Safari 7 Days", href: "/blog/kenya-safari-7-days" }, { label: "Nairobi 4 Days", href: "/blog/nairobi-4-days" }], desc: "The Masai Mara, the Great Migration, Nairobi National Park, Mount Kenya, and Diani Beach. Kenya is Africa&apos;s quintessential safari destination." },
  { name: "South Africa", flag: "🇿🇦", budget: "$40–$120/day", links: [{ label: "Cape Town 5 Days", href: "/blog/cape-town-5-days" }], desc: "Cape Town&apos;s Table Mountain, the Garden Route, Kruger National Park, the Winelands, and Johannesburg&apos;s cultural renaissance. Africa&apos;s most developed tourism infrastructure." },
  { name: "Tanzania", flag: "🇹🇿", budget: "$60–$200/day", links: [{ label: "Tanzania & Zanzibar 7 Days", href: "/blog/tanzania-zanzibar-7-days" }], desc: "Serengeti plains, Ngorongoro Crater, Mount Kilimanjaro, and the spice island of Zanzibar. Tanzania combines the best safari with Indian Ocean beaches." },
  { name: "Morocco", flag: "🇲🇦", budget: "$30–$80/day", links: [{ label: "Morocco 7 Days", href: "/blog/morocco-7-days" }, { label: "Casablanca 3 Days", href: "/blog/casablanca-3-days" }, { label: "Fez 3 Days", href: "/blog/fez-morocco-3-days" }], desc: "Marrakech medinas, Sahara Desert camps, Fez tanneries, Chefchaouen blue streets, and Atlas Mountain passes. Africa&apos;s most accessible and affordable destination." },
  { name: "Egypt", flag: "🇪🇬", budget: "$25–$60/day", links: [{ label: "Egypt 7 Days", href: "/blog/egypt-7-days" }], desc: "The Pyramids of Giza, the Nile, Luxor temples, Abu Simbel, and the Red Sea. Also covered in our Middle East hub — a crossroads of Africa and Asia." },
  { name: "Rwanda", flag: "🇷🇼", budget: "$80–$300/day", links: [{ label: "Rwanda Gorillas 5 Days", href: "/blog/rwanda-gorillas-5-days" }], desc: "Mountain gorilla trekking in Volcanoes National Park ($1,500 permit), Kigali&apos;s remarkable transformation, Nyungwe Forest chimps, and Lake Kivu. A bucket-list wildlife experience." },
  { name: "Namibia", flag: "🇳🇦", budget: "$50–$150/day", links: [{ label: "Namibia 7 Days", href: "/blog/namibia-7-days" }], desc: "Sossusvlei red dunes, Etosha National Park, Skeleton Coast, Fish River Canyon, and the world&apos;s oldest desert. Namibia is Africa&apos;s best self-drive destination." },
  { name: "Botswana", flag: "🇧🇼", budget: "$100–$500/day", links: [{ label: "Botswana Okavango 6 Days", href: "/blog/botswana-okavango-6-days" }], desc: "The Okavango Delta — the world&apos;s largest inland delta, where you explore by mokoro (dugout canoe) among elephants, hippos, and lions. Africa&apos;s most exclusive safari experience." },
  { name: "Ethiopia", flag: "🇪🇹", budget: "$25–$60/day", links: [{ label: "Ethiopia Lalibela 5 Days", href: "/blog/ethiopia-lalibela-5-days" }], desc: "Lalibela&apos;s rock-hewn churches, Simien Mountains trekking, Addis Ababa&apos;s coffee culture, and the Danakil Depression — the hottest place on Earth." },
  { name: "Zambia / Zimbabwe", flag: "🇿🇲", budget: "$50–$120/day", links: [{ label: "Victoria Falls 4 Days", href: "/blog/victoria-falls-4-days" }], desc: "Victoria Falls — the world&apos;s largest sheet of falling water, straddling the border of Zambia and Zimbabwe. Bungee jumping, white-water rafting, and sunset cruises." },
  { name: "Seychelles", flag: "🇸🇨", budget: "$80–$200/day", links: [{ label: "Seychelles 5 Days", href: "/blog/seychelles-5-days" }], desc: "Granite boulder beaches, turquoise lagoons, giant tortoises, and some of the Indian Ocean&apos;s most exclusive resorts. Also accessible on a mid-range budget with guesthouses." },
  { name: "Mauritius", flag: "🇲🇺", budget: "$60–$150/day", links: [{ label: "Mauritius 5 Days", href: "/blog/mauritius-5-days" }], desc: "Coral reefs, seven-coloured earth of Chamarel, Black River Gorges, and a Hindu-influenced culture that feels familiar to Indian travelers." },
  { name: "Madagascar", flag: "🇲🇬", budget: "$30–$80/day", links: [{ label: "Madagascar 7 Days", href: "/blog/madagascar-7-days" }], desc: "Lemurs, baobab avenues, tsingy limestone forests, and wildlife found nowhere else on Earth. The world&apos;s fourth-largest island is a biodiversity hotspot." },
];

export default function AfricaGuideClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="Africa" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage query="kenya safari elephant kilimanjaro sunset africa savanna" fallback="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=85" alt="Kenya safari with elephants and Kilimanjaro at sunset" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">Africa Travel Guide</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">Africa</span>
                <span className="text-white/60 text-xs">April 9, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">20 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">Africa Travel Guide:<em className="italic text-amber-300"> Safari, Cape Town, Morocco & the Complete Guide</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">The complete guide to Africa — world-class safaris, ancient civilizations, Saharan adventures, tropical islands, and the most diverse wildlife on Earth.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🌍 10+ Countries</span><span>·</span><span>🗓 15+ Guides</span><span>·</span><span>💰 From $30/day</span></div>
          </div>

          {/* WHY AFRICA */}
          <section id="why" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ Why Africa</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Africa is the continent that redefines what travel means. Nothing prepares you for watching a lion pride hunt at dawn in the Masai Mara, standing before the Great Pyramids at Giza, trekking through bamboo forest to sit with mountain gorillas in Rwanda, or camping under a billion stars in the Namibian desert. Africa is raw, vast, and profoundly moving in a way that no other continent matches.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">The diversity is extraordinary — 54 countries, over 2,000 languages, landscapes ranging from the Sahara to tropical rainforests to glaciated peaks at the equator. Morocco&apos;s medinas feel nothing like Kenya&apos;s savannas, which feel nothing like Cape Town&apos;s cosmopolitan waterfront, which feels nothing like Madagascar&apos;s alien-looking baobab forests. Every region is a different world.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">For Indian travelers, Africa offers a compelling mix of the familiar and the extraordinary. East African countries have significant Indian-origin communities (Kenya, Tanzania, Mauritius), the food often resonates with Indian palates, and the warmth of African hospitality is legendary. Safari costs have come down significantly with budget operators, and countries like Morocco and Egypt are genuinely affordable.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🌍", val: "13", label: "Countries covered" },
                { icon: "🗺️", val: "15+", label: "Guides" },
                { icon: "🦁", val: "Big Five", label: "Safari wildlife" },
                { icon: "💰", val: "$30+", label: "Budget from/day" },
              ].map((s) => (
                <div key={s.label} className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <p className="font-serif text-lg font-light text-ink">{s.val}</p>
                  <p className="text-[0.65rem] text-muted uppercase tracking-wide mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* COUNTRY GUIDE */}
          <section id="country-guide" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌍 Country Guide</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">Every country card below links to our detailed itineraries with day-by-day plans, budgets, and local tips. Click through for the full guide.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {countries.map((c) => (
                <div key={c.name} className="bg-white rounded-xl border border-parchment-2 p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-serif text-lg font-light text-ink">{c.flag} {c.name}</h3>
                    <span className="text-xs text-muted bg-parchment px-2 py-0.5 rounded-full">{c.budget}</span>
                  </div>
                  <p className="text-xs text-muted font-light leading-relaxed mb-3">{c.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.links.map((l) => (
                      <Link key={l.href} href={l.href} className="text-xs text-teal hover:text-amber-700 underline underline-offset-2 transition-colors">{l.label}</Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BEST SAFARI ROUTES */}
          <section id="best-safari-routes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗺️ Best Safari & Multi-Country Routes</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-parchment-2 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">10 Days</span>
                  <h3 className="font-serif text-lg font-light text-ink">East Africa Safari & Beach</h3>
                </div>
                <p className="text-sm text-muted font-light leading-relaxed mb-3">Nairobi → Masai Mara → Serengeti → Zanzibar</p>
                <p className="text-xs text-muted font-light leading-relaxed">The ultimate East Africa combination. Start in Nairobi (1 day), drive to the Masai Mara for 3 days of game drives during the Great Migration (June-October is peak), cross into Tanzania&apos;s Serengeti for 3 more days of safari, then fly to Zanzibar for beach recovery and Stone Town exploration (3 days). Budget: $2,500–$6,000 depending on lodge tier.</p>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">7 Days</span>
                  <h3 className="font-serif text-lg font-light text-ink">Southern Africa Highlights</h3>
                </div>
                <p className="text-sm text-muted font-light leading-relaxed mb-3">Cape Town → Garden Route → Victoria Falls</p>
                <p className="text-xs text-muted font-light leading-relaxed">South Africa&apos;s greatest hits. Cape Town for Table Mountain, the V&amp;A Waterfront, and the Winelands (3 days), drive the stunning Garden Route through Knysna and Tsitsikamma (2 days), fly to Victoria Falls for the thundering Zambezi, sunset cruise, and optional bungee jump (2 days). Budget: $1,500–$4,000.</p>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">2 Weeks</span>
                  <h3 className="font-serif text-lg font-light text-ink">North Africa Explorer</h3>
                </div>
                <p className="text-sm text-muted font-light leading-relaxed mb-3">Morocco → Egypt</p>
                <p className="text-xs text-muted font-light leading-relaxed">Africa&apos;s most affordable route. Start in Marrakech for the medina and Atlas Mountains (3 days), travel to Fez for the world&apos;s oldest university and tanneries (2 days), Sahara Desert camp overnight (1 day), then fly to Cairo for the Pyramids (2 days), Luxor for Valley of the Kings and Karnak Temple (2 days), and optionally Abu Simbel or the Red Sea (2 days). Budget: $1,200–$3,000.</p>
              </div>
            </div>

            {/* SAFARI BOOKING TIPS */}
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h3 className="font-medium text-sm text-amber-800 mb-2">Safari Booking Tips</h3>
              <ul className="text-xs text-amber-700 font-light leading-relaxed space-y-1.5">
                <li>Book 3-6 months ahead for peak season (June-October in East Africa, May-September in Southern Africa).</li>
                <li>Budget safaris ($150-200/day) use shared vehicles and basic camps — still excellent for wildlife viewing.</li>
                <li>Mid-range ($250-400/day) gets you private vehicles, better guides, and comfortable tented camps.</li>
                <li>Luxury ($500+/day) includes fly-in lodges, gourmet meals, and exclusive concessions with fewer vehicles.</li>
                <li>Self-drive safaris in South Africa (Kruger) and Namibia (Etosha) are the most affordable option at $80-150/day.</li>
                <li>Always verify your operator&apos;s reviews on TripAdvisor and SafariBookings.com before paying deposits.</li>
              </ul>
            </div>
          </section>

          {/* BUDGET */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">💰 Budget Comparison</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">All costs in USD per person per day. Budget assumes hostels/basic guesthouses, local food, and shared transport. Safari costs include park fees, transport, accommodation, and meals. Luxury includes premium lodges and private game drives.</p>
            <div className="overflow-x-auto rounded-xl border border-parchment-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-parchment">
                    <th className="text-left px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Country</th>
                    <th className="text-left px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Budget</th>
                    <th className="text-left px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Mid-range</th>
                    <th className="text-left px-4 py-3 font-medium text-ink text-xs uppercase tracking-wide">Luxury</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { country: "Egypt 🇪🇬", budget: "$25–$35", mid: "$50–$80", lux: "$100–$250" },
                    { country: "Ethiopia 🇪🇹", budget: "$25–$35", mid: "$50–$80", lux: "$80–$200" },
                    { country: "Morocco 🇲🇦", budget: "$30–$45", mid: "$60–$100", lux: "$120–$300" },
                    { country: "Madagascar 🇲🇬", budget: "$30–$50", mid: "$60–$100", lux: "$100–$250" },
                    { country: "South Africa 🇿🇦", budget: "$40–$60", mid: "$80–$150", lux: "$200–$500" },
                    { country: "Kenya 🇰🇪 (safari)", budget: "$60–$100", mid: "$150–$300", lux: "$400–$1,000" },
                    { country: "Tanzania 🇹🇿 (safari)", budget: "$60–$100", mid: "$150–$300", lux: "$400–$1,200" },
                    { country: "Rwanda 🇷🇼 (gorillas)", budget: "$80–$120", mid: "$200–$400", lux: "$500–$1,500" },
                    { country: "Botswana 🇧🇼 (Okavango)", budget: "$100–$200", mid: "$300–$500", lux: "$800–$2,000" },
                  ].map((r) => (
                    <tr key={r.country} className="border-t border-parchment-2">
                      <td className="px-4 py-3 font-light text-ink">{r.country}</td>
                      <td className="px-4 py-3 text-muted font-light">{r.budget}</td>
                      <td className="px-4 py-3 text-muted font-light">{r.mid}</td>
                      <td className="px-4 py-3 text-muted font-light">{r.lux}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* VISA & HEALTH */}
          <section id="visa-health" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">📋 Visa & Health Guide for Indian Passport Holders</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Visa requirements and health precautions vary significantly across Africa. Here&apos;s the 2026 overview for Indian travelers.</p>

            <h3 className="font-serif text-lg font-light text-ink mb-3 mt-6">Visa Requirements</h3>
            <div className="space-y-3 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h4 className="font-medium text-sm text-green-800 mb-1">Visa-Free / Visa on Arrival</h4>
                <p className="text-xs text-green-700 font-light leading-relaxed">Morocco (90 days visa-free), Mauritius (visa-free), Seychelles (visa-free), Rwanda (visa on arrival or e-visa, $50), Egypt (visa on arrival, $25), Ethiopia (e-visa, $82), Madagascar (visa on arrival, $37).</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="font-medium text-sm text-amber-800 mb-1">E-Visa Available</h4>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Kenya (e-visa, $51), Tanzania (e-visa, $50), Zambia (e-visa, $50), Zimbabwe (e-visa, $30-45). Apply online 2-4 weeks before travel. Processing is usually 3-7 business days.</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h4 className="font-medium text-sm text-red-800 mb-1">Embassy Visa Required</h4>
                <p className="text-xs text-red-700 font-light leading-relaxed">South Africa (embassy visa, allow 2-3 weeks), Namibia (embassy visa), Botswana (embassy visa). South Africa is notoriously strict — apply well in advance with complete documentation including hotel bookings, return flights, and bank statements.</p>
              </div>
            </div>

            <h3 className="font-serif text-lg font-light text-ink mb-3">Health & Vaccinations</h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <h4 className="font-medium text-sm text-yellow-800 mb-1">⚠️ Yellow Fever Vaccination</h4>
                <p className="text-xs text-yellow-700 font-light leading-relaxed">Required for entry into Kenya, Tanzania, Rwanda, and Ethiopia if arriving from a Yellow Fever endemic country (which includes India). Get vaccinated at least 10 days before departure. The certificate is valid for life. Many African countries will deny entry without the yellow card.</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                <h4 className="font-medium text-sm text-orange-800 mb-1">🦟 Malaria Prevention</h4>
                <p className="text-xs text-orange-700 font-light leading-relaxed">Malaria risk exists in most sub-Saharan safari destinations including Kenya, Tanzania, Zambia, Zimbabwe, Botswana, and Madagascar. Consult a travel doctor 4-6 weeks before departure. Common prophylaxis: Malarone (atovaquone-proguanil, fewest side effects), doxycycline (cheapest), or mefloquine (weekly dosing). Use DEET repellent, wear long sleeves at dusk, and sleep under treated mosquito nets. Morocco, Egypt, Cape Town, and Seychelles are malaria-free.</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="font-medium text-sm text-blue-800 mb-1">Other Vaccinations</h4>
                <p className="text-xs text-blue-700 font-light leading-relaxed">Recommended: Hepatitis A &amp; B, Typhoid, and routine boosters (Tetanus, Polio). For Rwanda gorilla trekking: ensure all vaccines are current. Drink bottled water everywhere except South Africa and Namibia where tap water is generally safe in cities.</p>
              </div>
            </div>
          </section>

          {/* FOODS */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍴 5 Foods You Must Try</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Tagine", where: "Morocco", desc: "Slow-cooked stew of meat, vegetables, dried fruits, and spices in a conical clay pot. Lamb tagine with prunes and almonds in Marrakech is unforgettable. Served with fresh bread.", price: "$3–$10" },
                { name: "Nyama Choma", where: "Kenya / Tanzania", desc: "Charcoal-grilled meat — usually goat or beef — seasoned simply with salt and fire. Kenya&apos;s national dish, best enjoyed with a cold Tusker beer and ugali (maize porridge).", price: "$4–$12" },
                { name: "Bobotie", where: "South Africa", desc: "Cape Malay curried mince with an egg custard topping, served with yellow rice and chutney. South Africa&apos;s national dish — a unique fusion of Malay, Dutch, and African flavours.", price: "$5–$15" },
                { name: "Koshari", where: "Egypt", desc: "Layers of rice, lentils, pasta, and chickpeas topped with crispy fried onions and spicy tomato sauce. Cairo&apos;s ultimate street food — hearty, cheap, and vegan.", price: "$1–$3" },
                { name: "Injera & Wot", where: "Ethiopia", desc: "A giant spongy sourdough flatbread spread with colourful stews of lentils, chickpeas, and meat. You eat with your hands, tearing injera and scooping wot. Communal, flavourful, and unlike anything else.", price: "$2–$6" },
              ].map((f) => (
                <div key={f.name} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-serif text-base font-light text-ink">{f.name}</h3>
                    <span className="text-xs text-muted">{f.price}</span>
                  </div>
                  <p className="text-xs text-amber-700 font-medium mb-2">{f.where}</p>
                  <p className="text-xs text-muted font-light leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AFFILIATE BLOCK */}
          <AffiliateBlock
            destination="Africa"
            hotels={[
              { name: "Fairmont Mount Kenya Safari Club", type: "Luxury · Mount Kenya", price: "From $350/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/searchresults.html?ss=Kenya+safari+lodge&aid=2820480" },
              { name: "Riad Yasmine Marrakech", type: "Mid-range · Morocco", price: "From $80/night", rating: "4", badge: "Great value", url: "https://www.booking.com/searchresults.html?ss=Marrakech+riad&aid=2820480" },
              { name: "Meramec Hostel Cape Town", type: "Hostel · Cape Town", price: "From $15/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.html?ss=Cape+Town+hostel&aid=2820480" },
            ]}
            activities={[
              { name: "Masai Mara Safari 3-Day", duration: "3 days", price: "From $350/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=masai+mara+safari&partner_id=PSZA5UI" },
              { name: "Pyramids of Giza & Sphinx Tour", duration: "Full day", price: "From $35/person", badge: "Iconic", url: "https://www.getyourguide.com/s/?q=giza+pyramids&partner_id=PSZA5UI" },
              { name: "Table Mountain Cable Car & City Tour", duration: "Full day", price: "From $50/person", url: "https://www.getyourguide.com/s/?q=cape+town+table+mountain&partner_id=PSZA5UI" },
              { name: "Sahara Desert Overnight Camp", duration: "2 days", price: "From $60/person", url: "https://www.getyourguide.com/s/?q=sahara+desert+morocco&partner_id=PSZA5UI" },
            ]}
          />

          {/* DESTINATION GALLERY */}
          <DestinationGallery
            title="Africa — Safari, Sahara & Ancient Wonders"
            subtitle="From sea level to 5,895m Kilimanjaro."
            spots={[
              { name: "Masai Mara Migration", query: "masai mara kenya wildebeest migration safari savanna golden hour", desc: "The greatest wildlife spectacle on Earth — over 2 million wildebeest and zebra crossing the Mara River between July and October." },
              { name: "Pyramids of Giza", query: "pyramids giza egypt sphinx desert sunset ancient wonder", desc: "The last surviving Ancient Wonder of the World — 4,500 years old and still awe-inspiring at every visit." },
              { name: "Victoria Falls", query: "victoria falls zambia zimbabwe waterfall rainbow mist aerial", desc: "The world's largest sheet of falling water — 1.7km wide, 108m high, visible from 40km away during high water." },
              { name: "Sossusvlei Dunes", query: "sossusvlei namibia red sand dunes dead vlei desert sunrise", desc: "The world's tallest sand dunes, rising 300m in the Namib Desert — the oldest desert on Earth at 55 million years." },
              { name: "Gorilla Trekking Rwanda", query: "mountain gorilla rwanda volcanoes national park silverback jungle", desc: "Sitting face-to-face with a silverback mountain gorilla in the bamboo forests of Volcanoes National Park — life-changing." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ 5 Mistakes to Avoid</h2>
            <div className="space-y-4">
              {[
                { title: "Booking the cheapest safari operator without research", desc: "Budget safaris are excellent, but the cheapest option is often the worst. Poorly maintained vehicles break down in national parks, inexperienced guides miss wildlife, and budget camps can be genuinely uncomfortable. Read reviews on SafariBookings.com and TripAdvisor. A slightly more expensive operator with a great guide transforms the entire experience." },
                { title: "Skipping malaria prophylaxis", desc: "Malaria is a serious risk in safari destinations. Don&apos;t rely on &apos;natural&apos; repellents or assume you&apos;ll be fine. Consult a travel doctor, take prophylaxis as prescribed, use DEET repellent at dusk, and sleep under treated nets. One mosquito bite can ruin your trip — or worse." },
                { title: "Not allowing enough time for safari", desc: "A 1-day safari is rushed and often disappointing. Wildlife sightings are unpredictable — you might see the Big Five in one morning or need three days to spot a leopard. Minimum 3 days for a proper safari experience. The Masai Mara and Serengeti deserve 4-5 days each." },
                { title: "Forgetting Yellow Fever certificates", desc: "Several African countries require proof of Yellow Fever vaccination for entry, especially if arriving from another African country or India. Airlines may deny boarding without the certificate. Get vaccinated at least 10 days before departure and carry the yellow card with your passport at all times." },
                { title: "Underestimating distances and travel times", desc: "Africa is enormous — the Sahara alone is larger than the continental United States. Overland travel between countries is slow. Internal flights save days of driving but must be booked ahead in peak season. Don&apos;t try to combine Cape Town, the Serengeti, and Morocco in one 10-day trip — pick one region and explore it properly." },
              ].map((m, i) => (
                <div key={i} className="bg-white rounded-xl border border-parchment-2 p-5">
                  <h3 className="font-medium text-sm text-ink mb-1">{m.title}</h3>
                  <p className="text-xs text-muted font-light leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❓ FAQ</h2>
            <div className="space-y-3">
              {[
                { q: "Is Africa safe for Indian tourists?", a: "Yes, with standard precautions. Kenya, Tanzania, South Africa, Morocco, Egypt, and Mauritius are well-established tourist destinations with millions of visitors annually. Use reputable safari operators, avoid walking alone at night in unfamiliar city areas, and follow your guide's advice in wildlife areas. Safari lodges and camps are extremely safe. The Indian diaspora in East Africa means you'll often find familiar food and friendly connections." },
                { q: "How far in advance should I book a safari?", a: "For peak season (June-October in East Africa, May-September in Southern Africa), book 3-6 months ahead. Popular lodges in the Masai Mara and Serengeti sell out 6-12 months in advance during Great Migration season. For shoulder season, 1-2 months is usually sufficient. Rwanda gorilla permits should be booked as far ahead as possible — they sell out months in advance." },
                { q: "Can I do a safari on a budget?", a: "Absolutely. Budget group safaris in Kenya and Tanzania start at $150-200/day all-inclusive. Self-drive safaris in South Africa's Kruger National Park can be done for $80-100/day with rest camp accommodation. Namibia's Etosha is another excellent self-drive option. The cheapest approach is camping safaris where you share a vehicle with other travelers and sleep in tents at public campsites." },
                { q: "What should I pack for an African safari?", a: "Neutral-coloured clothing (khaki, olive, brown — avoid bright colours and white), layers for cold early morning game drives, a good pair of binoculars, a camera with zoom lens (200mm minimum), sun hat, sunscreen, insect repellent with DEET, and a headlamp. Pack light — small planes to safari camps have strict baggage limits (usually 15-20kg in soft bags, no hard suitcases)." },
                { q: "Is the Great Migration worth timing your trip around?", a: "Yes, if you can afford peak season prices (30-50% higher than shoulder season). Watching 2 million wildebeest cross the Mara River is genuinely one of Earth's greatest spectacles. The migration is in Kenya's Masai Mara from July-October and in Tanzania's Serengeti from November-June. However, East African safaris are excellent year-round — wildlife doesn't disappear outside migration season." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <CombineWith currentSlug="africa-travel-guide" />

          <RelatedGuides currentSlug="africa-travel-guide" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
