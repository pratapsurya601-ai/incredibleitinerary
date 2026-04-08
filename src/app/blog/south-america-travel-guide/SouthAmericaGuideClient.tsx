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
  { id: "why", emoji: "⚡", label: "Why South America" },
  { id: "country-guide", emoji: "🌎", label: "Country Guide" },
  { id: "best-routes", emoji: "🗺️", label: "Best Routes" },
  { id: "budget", emoji: "💰", label: "Budget" },
  { id: "visa-guide", emoji: "📋", label: "Visa Guide" },
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
      <a href={`mailto:?subject=South America Travel Guide — IncredibleItinerary&body=${typeof window !== "undefined" ? window.location.href : ""}`} className="bg-ink text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Email</a>
      <a href={`https://x.com/intent/tweet?text=South%20America%20Travel%20Guide&url=${typeof window !== "undefined" ? window.location.href : ""}`} target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] text-white text-[0.65rem] font-medium tracking-wide uppercase px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity">Twitter</a>
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
  { name: "Peru", flag: "🇵🇪", budget: "$30–$80/day", links: [{ label: "Peru & Machu Picchu 7 Days", href: "/blog/peru-machu-picchu-7-days" }], desc: "Machu Picchu, Sacred Valley, Lima ceviche scene, Cusco colonial charm, and the Amazon basin. Peru is South America&apos;s most iconic destination." },
  { name: "Brazil", flag: "🇧🇷", budget: "$40–$100/day", links: [{ label: "Rio de Janeiro 5 Days", href: "/blog/rio-de-janeiro-5-days" }], desc: "Christ the Redeemer, Copacabana, the Amazon, Iguazu Falls, and Salvador&apos;s Afro-Brazilian culture. Enormous and endlessly varied." },
  { name: "Argentina", flag: "🇦🇷", budget: "$25–$70/day", links: [{ label: "Buenos Aires 5 Days", href: "/blog/buenos-aires-5-days" }, { label: "Mendoza 4 Days", href: "/blog/mendoza-argentina-4-days" }], desc: "Buenos Aires tango, Mendoza wine country, Patagonian glaciers, and world-class steak. Argentina offers exceptional value right now." },
  { name: "Colombia", flag: "🇨🇴", budget: "$25–$60/day", links: [{ label: "Colombia 7 Days", href: "/blog/colombia-7-days" }, { label: "Medellin 4 Days", href: "/blog/medellin-4-days" }, { label: "Cartagena 4 Days", href: "/blog/cartagena-4-days" }], desc: "Cartagena&apos;s colonial walled city, Medellin&apos;s mountain innovation, coffee country, Caribbean coast, and incredible warmth from locals." },
  { name: "Chile", flag: "🇨🇱", budget: "$35–$90/day", links: [{ label: "Patagonia 7 Days", href: "/blog/chile-patagonia-7-days" }, { label: "Santiago 4 Days", href: "/blog/santiago-chile-4-days" }], desc: "Torres del Paine, the Atacama Desert, Santiago wine valleys, and a 4,300km coastline. Chile stretches from desert to glacier." },
  { name: "Bolivia", flag: "🇧🇴", budget: "$20–$50/day", links: [{ label: "Salar de Uyuni 5 Days", href: "/blog/bolivia-salar-5-days" }], desc: "Salar de Uyuni salt flats, La Paz at 3,640m, Lake Titicaca, and South America&apos;s most affordable destination." },
  { name: "Ecuador", flag: "🇪🇨", budget: "$30–$80/day", links: [{ label: "Galapagos 7 Days", href: "/blog/galapagos-7-days" }, { label: "Quito 4 Days", href: "/blog/quito-ecuador-4-days" }], desc: "Galapagos Islands wildlife, Quito&apos;s colonial old town, the Avenue of Volcanoes, and the Amazon. All in a country smaller than Nevada." },
  { name: "Uruguay", flag: "🇺🇾", budget: "$35–$80/day", links: [{ label: "Uruguay 4 Days", href: "/blog/uruguay-4-days" }], desc: "Montevideo&apos;s relaxed charm, Colonia del Sacramento&apos;s cobblestones, and Punta del Este beaches. South America&apos;s quietest gem." },
  { name: "Cuba", flag: "🇨🇺", budget: "$30–$60/day", links: [{ label: "Havana 4 Days", href: "/blog/havana-4-days" }], desc: "Classic cars, crumbling colonial architecture, Malecon sunsets, cigars, and salsa. Havana is a time capsule unlike anywhere else." },
  { name: "Costa Rica", flag: "🇨🇷", budget: "$40–$100/day", links: [{ label: "Costa Rica 7 Days", href: "/blog/costa-rica-7-days" }], desc: "Cloud forests, volcanoes, Pacific and Caribbean beaches, sloths, and zip-lining. The gold standard for eco-tourism." },
  { name: "Guatemala", flag: "🇬🇹", budget: "$20–$50/day", links: [{ label: "Antigua Guatemala 4 Days", href: "/blog/antigua-guatemala-4-days" }], desc: "Antigua&apos;s colonial streets beneath volcanoes, Lake Atitlan, Tikal Mayan ruins, and genuine affordability." },
  { name: "Panama", flag: "🇵🇦", budget: "$35–$80/day", links: [{ label: "Panama City 3 Days", href: "/blog/panama-city-3-days" }], desc: "The Panama Canal, Casco Viejo old town, San Blas Islands, and a surprisingly modern skyline on the Pacific." },
  { name: "Trinidad & Tobago", flag: "🇹🇹", budget: "$40–$90/day", links: [{ label: "Trinidad & Tobago 5 Days", href: "/blog/trinidad-tobago-5-days" }], desc: "Carnival culture, birdwatching paradise, doubles street food, and Caribbean beaches without the resort crowds." },
];

export default function SouthAmericaGuideClient() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <ReadingProgress />
      <TableOfContents items={TOC} />
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <Breadcrumb destination="South America" />
      <main className="bg-cream min-h-screen">

        {/* HERO */}
        <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
          <SmartImage query="machu picchu peru andes mountains sunrise south america" fallback="https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1600&q=85" alt="Machu Picchu Peru sunrise with Andes mountains" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
          <div className="absolute top-24 left-0 right-0 px-6 md:px-14">
            <div className="max-w-[860px] mx-auto flex items-center gap-2 text-white/50 text-xs">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link><span>/</span>
              <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link><span>/</span>
              <span className="text-white/70">South America Travel Guide</span>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-14 pb-10">
            <div className="max-w-[860px] mx-auto">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="bg-amber-600 text-white text-xs tracking-[0.12em] uppercase font-medium px-3 py-1.5 rounded-full">South America</span>
                <span className="text-white/60 text-xs">April 9, 2026</span>
                <span className="text-white/50">·</span>
                <span className="text-white/60 text-xs">22 min read</span>
              </div>
              <h1 className="font-serif text-[clamp(1.9rem,4.5vw,3.2rem)] font-light text-white leading-[1.08] mb-4">South America Travel Guide:<em className="italic text-amber-300"> Peru, Brazil, Argentina, Colombia & Beyond</em></h1>
              <p className="text-white/65 text-sm font-light max-w-[560px] leading-relaxed">The complete guide to South America — ancient ruins, Amazon jungle, Andean peaks, salt flats, tango, and the best street food on the continent.</p>
            </div>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-6 md:px-8 pt-10 pb-20">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-8 border-b border-parchment-2">
            <ShareBar />
            <div className="flex items-center gap-4 text-xs text-muted"><span>🌎 10+ Countries</span><span>·</span><span>🗓 25+ Guides</span><span>·</span><span>💰 From $25/day</span></div>
          </div>

          {/* WHY SOUTH AMERICA */}
          <section id="why" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">⚡ Why South America</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">South America is the continent that delivers on every front — ancient civilizations at Machu Picchu and Tiwanaku, the world&apos;s largest rainforest in the Amazon, the driest desert in Atacama, the most surreal landscape on Earth at Salar de Uyuni, and cities like Buenos Aires and Cartagena that pulse with music, food, and warmth. It&apos;s also one of the most affordable continents for long-term travel, with Bolivia, Colombia, and Peru offering incredible value.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">The diversity is staggering. In a single trip you can hike to a lost Incan citadel at 2,430m, dance salsa in a Caribbean colonial city, trek across glaciers in Patagonia, and surf on Brazil&apos;s Atlantic coast. The distances are vast — South America is twice the size of Europe — but the bus networks are excellent, internal flights are increasingly affordable, and every leg of the journey takes you into a different world.</p>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">For Indian travelers, South America is the ultimate adventure — far enough to feel truly foreign, affordable enough to stay for weeks, and culturally rich enough to change your perspective. The food alone is worth the flight: ceviche in Lima, asado in Buenos Aires, arepas in Bogota, and feijoada in Rio.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🌎", val: "13", label: "Countries covered" },
                { icon: "🗺️", val: "25+", label: "Guides" },
                { icon: "🌡️", val: "Year-round", label: "Travel season" },
                { icon: "💰", val: "$25+", label: "Budget from/day" },
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
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🌎 Country Guide</h2>
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

          {/* BEST ROUTES */}
          <section id="best-routes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🗺️ Best Multi-Country Routes</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-parchment-2 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">2 Weeks</span>
                  <h3 className="font-serif text-lg font-light text-ink">The Classic South America</h3>
                </div>
                <p className="text-sm text-muted font-light leading-relaxed mb-3">Lima → Cusco &amp; Machu Picchu → La Paz → Salar de Uyuni → Buenos Aires</p>
                <p className="text-xs text-muted font-light leading-relaxed">The essential first-timer route. Start with Lima&apos;s food scene (2 days), train to Cusco and hike Machu Picchu (4 days), cross into Bolivia for La Paz and the surreal Salar de Uyuni salt flats (3 days), then fly to Buenos Aires for steak, tango, and wine (3 days). Budget: $1,800–$3,500 including flights between cities.</p>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">10 Days</span>
                  <h3 className="font-serif text-lg font-light text-ink">Colombia Circuit</h3>
                </div>
                <p className="text-sm text-muted font-light leading-relaxed mb-3">Bogota → Medellin → Cartagena</p>
                <p className="text-xs text-muted font-light leading-relaxed">Colombia&apos;s three essential cities. Start in Bogota&apos;s cultural heart with Monserrate and La Candelaria (3 days), fly to Medellin for its mountain setting, Comuna 13, and coffee country day trip (4 days), then finish on the Caribbean coast in Cartagena&apos;s walled old town (3 days). Budget: $800–$1,500. Colombia is South America&apos;s best value right now.</p>
              </div>
              <div className="bg-white rounded-xl border border-parchment-2 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">3 Weeks</span>
                  <h3 className="font-serif text-lg font-light text-ink">The Ultimate South America</h3>
                </div>
                <p className="text-sm text-muted font-light leading-relaxed mb-3">Rio de Janeiro → Buenos Aires → Patagonia → Santiago → Machu Picchu</p>
                <p className="text-xs text-muted font-light leading-relaxed">The grand tour. Begin in Rio with Christ the Redeemer and Sugarloaf (3 days), fly to Buenos Aires for culture and steak (3 days), head south to Patagonia for Torres del Paine and Perito Moreno glacier (5 days), cross to Santiago and the wine valleys (3 days), then fly north to Lima, Cusco, and Machu Picchu (5 days). Budget: $3,500–$7,000 including internal flights.</p>
              </div>
            </div>
          </section>

          {/* BUDGET */}
          <section id="budget" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">💰 Budget Comparison</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-6">All costs in USD per person per day. Budget assumes hostels, street food, and local buses. Mid-range includes private rooms, restaurants, and domestic flights. Luxury covers boutique hotels, guided tours, and premium experiences.</p>
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
                    { country: "Bolivia 🇧🇴", budget: "$20–$30", mid: "$40–$70", lux: "$80–$150" },
                    { country: "Guatemala 🇬🇹", budget: "$20–$30", mid: "$40–$70", lux: "$80–$150" },
                    { country: "Colombia 🇨🇴", budget: "$25–$35", mid: "$50–$80", lux: "$100–$200" },
                    { country: "Peru 🇵🇪", budget: "$25–$40", mid: "$50–$90", lux: "$120–$250" },
                    { country: "Ecuador 🇪🇨", budget: "$25–$40", mid: "$50–$90", lux: "$100–$250" },
                    { country: "Argentina 🇦🇷", budget: "$25–$40", mid: "$50–$80", lux: "$100–$200" },
                    { country: "Brazil 🇧🇷", budget: "$30–$50", mid: "$60–$120", lux: "$150–$350" },
                    { country: "Chile 🇨🇱", budget: "$35–$50", mid: "$70–$120", lux: "$150–$300" },
                    { country: "Costa Rica 🇨🇷", budget: "$40–$55", mid: "$70–$130", lux: "$150–$350" },
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

          {/* VISA GUIDE */}
          <section id="visa-guide" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-4">📋 Visa Guide for Indian Passport Holders</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">Visa requirements vary significantly across South America. Here&apos;s the 2026 overview for Indian passport holders — always verify with the specific embassy before booking flights.</p>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="font-medium text-sm text-green-800 mb-1">Visa-Free / Visa on Arrival</h3>
                <p className="text-xs text-green-700 font-light leading-relaxed">Ecuador (90 days visa-free), El Salvador (visa-free), Haiti (visa on arrival). These are the easiest entry points for Indian travelers.</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="font-medium text-sm text-amber-800 mb-1">E-Visa Available</h3>
                <p className="text-xs text-amber-700 font-light leading-relaxed">Brazil (e-visa, $80, apply online 2-3 weeks before). Colombia has announced plans for e-visa but check current status. Cuba requires a tourist card ($20-50) purchasable through airlines or agencies.</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="font-medium text-sm text-red-800 mb-1">Embassy Visa Required</h3>
                <p className="text-xs text-red-700 font-light leading-relaxed">Argentina, Chile, Peru, Colombia, Bolivia, Costa Rica, Guatemala, Panama, Uruguay, Trinidad &amp; Tobago. Apply at the respective embassy in New Delhi or Mumbai. Processing time: 1-4 weeks. Fees range from $30-$160. Peru and Argentina typically process within 7-10 working days.</p>
              </div>
            </div>
            <p className="text-xs text-muted font-light mt-4 leading-relaxed">Pro tip: If you hold a valid US, UK, or Schengen visa, several countries (Colombia, Peru, Chile) offer simplified or waived visa processes. A US B1/B2 visa is the most useful secondary visa for South America travel.</p>
          </section>

          {/* FOODS */}
          <section className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">🍴 5 Foods You Must Try</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Ceviche", where: "Peru", desc: "Raw fish cured in citrus, chili, and onions — Peru&apos;s national dish. Lima&apos;s cevicherias are world-class. Best eaten at lunch when the fish is freshest.", price: "$3–$12" },
                { name: "Empanadas", where: "Argentina", desc: "Hand-folded pastries stuffed with beef, chicken, cheese, or corn. Every Argentine province has its own style. Salta and Tucuman claim the best. Street food perfection.", price: "$0.50–$2" },
                { name: "Asado", where: "Argentina / Uruguay", desc: "South American barbecue — whole cuts of beef slow-grilled over wood coals for hours. In Argentina, asado is a Sunday ritual. Pair with Malbec wine from Mendoza.", price: "$8–$25" },
                { name: "Arepa", where: "Colombia / Venezuela", desc: "Thick cornmeal patties grilled and stuffed with cheese, beans, meat, or egg. Colombia&apos;s most ubiquitous street food — every corner has an arepa vendor.", price: "$0.50–$3" },
                { name: "Feijoada", where: "Brazil", desc: "Black bean stew slow-cooked with pork cuts, served with rice, farofa (toasted cassava flour), orange slices, and collard greens. Brazil&apos;s national dish, traditionally eaten on Saturdays.", price: "$5–$15" },
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
            destination="South America"
            hotels={[
              { name: "Belmond Sanctuary Lodge", type: "Luxury · Machu Picchu", price: "From $800/night", rating: "5", badge: "Top pick", url: "https://www.booking.com/searchresults.html?ss=Machu+Picchu+luxury&aid=2820480" },
              { name: "Selina Medellin", type: "Mid-range · Medellin", price: "From $40/night", rating: "4", badge: "Great value", url: "https://www.booking.com/searchresults.html?ss=Medellin+Colombia&aid=2820480" },
              { name: "Loki Hostel Cusco", type: "Hostel · Cusco", price: "From $10/night", rating: "3", badge: "Budget", url: "https://www.booking.com/searchresults.html?ss=Cusco+hostel&aid=2820480" },
            ]}
            activities={[
              { name: "Machu Picchu Guided Tour", duration: "Full day", price: "From $60/person", badge: "Must do", url: "https://www.getyourguide.com/s/?q=machu+picchu&partner_id=PSZA5UI" },
              { name: "Salar de Uyuni 3-Day Tour", duration: "3 days", price: "From $120/person", badge: "Iconic", url: "https://www.getyourguide.com/s/?q=uyuni+salt+flat&partner_id=PSZA5UI" },
              { name: "Rio Christ the Redeemer & Sugarloaf", duration: "Full day", price: "From $45/person", url: "https://www.getyourguide.com/s/?q=rio+de+janeiro&partner_id=PSZA5UI" },
              { name: "Buenos Aires Tango Show & Dinner", duration: "Evening", price: "From $50/person", url: "https://www.getyourguide.com/s/?q=buenos+aires+tango&partner_id=PSZA5UI" },
            ]}
          />

          {/* DESTINATION GALLERY */}
          <DestinationGallery
            title="South America — Ruins, Salt Flats & Glaciers"
            subtitle="From 0m sea level to 6,961m Aconcagua."
            spots={[
              { name: "Machu Picchu", query: "machu picchu peru andes mountains inca ruins sunrise clouds", desc: "The 15th-century Inca citadel at 2,430m — South America's most iconic site. Arrive at sunrise for the most magical experience." },
              { name: "Salar de Uyuni", query: "salar de uyuni bolivia salt flat mirror sky reflection", desc: "The world's largest salt flat at 10,582 sq km. During the wet season, a thin layer of water creates a perfect mirror of the sky." },
              { name: "Torres del Paine", query: "torres del paine patagonia chile mountains glaciers lake blue", desc: "Patagonia's crown jewel — granite towers, glaciers, and turquoise lakes in one of the world's greatest trekking destinations." },
              { name: "Cartagena Old Town", query: "cartagena colombia old town colonial colorful streets caribbean", desc: "A UNESCO walled city of pastel colonial buildings, bougainvillea-draped balconies, and Caribbean energy." },
              { name: "Christ the Redeemer", query: "christ the redeemer rio de janeiro brazil sunset panoramic view", desc: "The 30m Art Deco statue overlooking Rio — one of the New Seven Wonders of the World." },
            ]}
          />

          {/* MISTAKES */}
          <section id="mistakes" className="mb-14">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6">❌ 5 Mistakes to Avoid</h2>
            <div className="space-y-4">
              {[
                { title: "Trying to see too many countries in one trip", desc: "South America is enormous — Brazil alone is larger than India. Pick 2-3 countries for 2 weeks, or one region to explore deeply. Don&apos;t try to do Peru, Brazil, Argentina, and Colombia in 14 days — you&apos;ll spend half your trip in airports." },
                { title: "Not acclimatizing to altitude", desc: "Cusco (3,400m), La Paz (3,640m), and Bogota (2,640m) are all at serious altitude. Spend at least one full day acclimatizing before any strenuous activity. Drink coca tea, stay hydrated, and don&apos;t rush Machu Picchu on your first day at altitude." },
                { title: "Carrying only USD and no local currency", desc: "While USD is accepted in some tourist areas, you&apos;ll get terrible exchange rates. Always carry local currency for buses, street food, and small shops. ATMs are widely available in cities. Notify your bank before traveling to avoid card blocks." },
                { title: "Ignoring safety basics in cities", desc: "Don&apos;t walk around with your phone out in unfamiliar neighborhoods. Use Uber or registered taxis at night. Keep expensive jewelry and watches hidden. Carry a photocopy of your passport, not the original. Most tourist areas are safe but petty theft targets careless travelers." },
                { title: "Not learning basic Spanish", desc: "English is not widely spoken outside tourist zones. Learn basic Spanish phrases — greetings, numbers, directions, food ordering. Even basic effort is appreciated enormously and opens doors. In Brazil, Portuguese is the language — but Spanish speakers can generally make themselves understood." },
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
                { q: "Is South America safe for solo travelers?", a: "Yes, with standard precautions. Colombia, Peru, Argentina, and Chile are popular solo travel destinations with well-established backpacker routes. Hostels make it easy to meet other travelers. Avoid walking alone at night in unfamiliar areas, use registered taxis or Uber, and keep valuables hidden. Female solo travelers report positive experiences across the continent, especially in Colombia and Argentina." },
                { q: "How long do I need for a South America trip?", a: "Minimum 10 days for one country. Two weeks is ideal for 2 countries. Three weeks lets you cover a full route like Lima-Cusco-Uyuni-Buenos Aires comfortably. If you have a month, you can do the grand tour covering 4-5 countries. Don't rush — the distances are vast and the bus rides are long (but scenic)." },
                { q: "Can I get by with English in South America?", a: "In major tourist areas and hostels, yes. But outside those zones, English is limited. Basic Spanish (or Portuguese in Brazil) is essential for buses, markets, and smaller towns. Download Google Translate offline packs before your trip. Learning 50-100 basic phrases transforms the experience." },
                { q: "What vaccinations do I need for South America?", a: "Yellow Fever vaccination is required or recommended for several countries including Brazil, Bolivia, Colombia, Ecuador, and Peru (Amazon region). Consult a travel doctor 4-6 weeks before departure. Hepatitis A and Typhoid boosters are recommended. Malaria prophylaxis may be needed for Amazon basin areas." },
                { q: "Should I book in advance or travel spontaneously?", a: "Book Machu Picchu permits, Galapagos cruises, and Patagonia lodges 2-3 months ahead — they sell out. For everything else, booking 1-2 days ahead is fine. Hostels in popular cities (Cusco, Cartagena, Buenos Aires) fill up in peak season (June-August for Peru, December-February for Patagonia). Internal flights are cheaper booked 2-4 weeks ahead." },
              ].map((item, i) => <FaqItem key={i} {...item} />)}
            </div>
          </section>

          <Comments />

          <CombineWith currentSlug="south-america-travel-guide" />

          <RelatedGuides currentSlug="south-america-travel-guide" />
        </div>
      </main>
      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
