"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import BlogSlugNav from "@/app/blog/[slug]/BlogSlugNav";
import TableOfContents from "@/components/blog/TableOfContents";
import InlineSignup from "@/components/email/InlineSignup";
import DestinationGallery from "@/components/blog/DestinationGallery";
import RelatedGuides from "@/components/blog/RelatedGuides";

const tocItems = [
  { id: "quick-list", label: "Quick Reference List", emoji: "⚡" },
  { id: "southeast-asia", label: "Southeast Asia", emoji: "🌴" },
  { id: "south-asia", label: "South Asia & Subcontinent", emoji: "🏔️" },
  { id: "middle-east", label: "Middle East & Gulf", emoji: "🏙️" },
  { id: "africa", label: "Africa", emoji: "🦁" },
  { id: "americas-caribbean", label: "Americas & Caribbean", emoji: "🌊" },
  { id: "pacific", label: "Pacific & Indian Ocean", emoji: "🏝️" },
  { id: "what-to-carry", label: "What to Carry", emoji: "📋" },
  { id: "faq", label: "FAQ", emoji: "❓" },
];

interface DestEntry {
  country: string;
  type: "Visa-Free" | "Visa on Arrival" | "e-Visa on Arrival" | "e-Visa (Online)";
  stay: string;
  fee: string;
  notes: string;
}

const SOUTHEAST_ASIA: DestEntry[] = [
  { country: "Malaysia", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "Policy since Dec 2023. Passport must be valid 6 months. Show hotel booking + return ticket." },
  { country: "Thailand", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "Visa-free policy extended 2024–2025. No stamp needed. Shows up as 'Exemption' in passport." },
  { country: "Indonesia (Bali etc.)", type: "Visa on Arrival", stay: "30 days", fee: "USD 35", notes: "Pay at Ngurah Rai (Bali), Soekarno-Hatta (Jakarta). Cash only at some counters. Extendable once." },
  { country: "Cambodia", type: "e-Visa (Online)", stay: "30 days", fee: "USD 30", notes: "Apply at evisa.gov.kh before travel. Takes 3 business days. Also available at land borders." },
  { country: "Laos", type: "Visa on Arrival", stay: "30 days", fee: "USD 35–42", notes: "Available at major airports and some land borders. Bring USD cash and 1 passport photo." },
  { country: "Vietnam", type: "e-Visa (Online)", stay: "45 days", fee: "USD 25", notes: "Apply at evisa.xuatnhapcanh.gov.vn. Single and multiple entry available. 90 days multiple-entry also offered." },
  { country: "Philippines", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "No pre-visa needed. Show return ticket. Extendable at Bureau of Immigration. Very welcoming to Indians." },
  { country: "Myanmar", type: "e-Visa (Online)", stay: "28 days", fee: "USD 50", notes: "Apply at evisa.moip.gov.mm. Note: check travel advisories before visiting (political situation)." },
  { country: "Macau SAR", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "Separate from mainland China. Easy day trip from Hong Kong. Indian passport exempt." },
  { country: "Timor-Leste", type: "Visa on Arrival", stay: "30 days", fee: "USD 30", notes: "Least-visited Southeast Asian country. Available at Dili airport." },
];

const SOUTH_ASIA: DestEntry[] = [
  { country: "Nepal", type: "Visa-Free", stay: "Unlimited", fee: "Free", notes: "No visa required. Just carry your Indian passport/voter ID. Treat it like crossing state borders." },
  { country: "Bhutan", type: "e-Visa (Online)", stay: "Flexible", fee: "Free (permit fee ₹1,200/day)", notes: "No traditional visa, but a Sustainable Development Fee of ₹1,200/day applies for Indians. Book via Tourism Council of Bhutan." },
  { country: "Maldives", type: "Visa on Arrival", stay: "30 days", fee: "Free", notes: "Just land and go. No paperwork at immigration. Show hotel booking. Extendable to 90 days." },
  { country: "Sri Lanka", type: "e-Visa on Arrival", stay: "30 days", fee: "Free (till end 2025)", notes: "Apply at eta.gov.lk before travel OR get Electronic Travel Authorisation on arrival. Free ETA policy extended for India." },
];

const MIDDLE_EAST: DestEntry[] = [
  { country: "Qatar", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "Visa-free since 2022. Doha is excellent for a 2–3 day stopover. Qatar Airways often cheapest through Doha." },
  { country: "Jordan", type: "Visa on Arrival", stay: "30 days", fee: "JOD 40 (≈₹4,500)", notes: "Available at Queen Alia Airport (Amman) and Aqaba. If coming from Israel, use Jordan River crossing only." },
  { country: "Oman", type: "e-Visa (Online)", stay: "30 days", fee: "OMR 20 (≈₹4,300)", notes: "Apply at evisa.rop.gov.om. Muscat is very easy + safe for Indians. Process takes 3–7 days." },
  { country: "Georgia", type: "Visa-Free", stay: "365 days", fee: "Free", notes: "Georgia is fully visa-free for Indians. Tbilisi has a huge Indian community. Very affordable Europe-adjacent destination." },
  { country: "Armenia", type: "Visa-Free", stay: "180 days", fee: "Free", notes: "Visa-free. Yerevan is beautiful, affordable, and easy from Delhi via IndiGo." },
  { country: "Kyrgyzstan", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "Visa-free since 2023. Issyk-Kul lake and Tian Shan mountains. Very affordable destination." },
  { country: "Kazakhstan", type: "Visa-Free", stay: "14 days", fee: "Free", notes: "Visa-free for Indian citizens. Almaty and Nur-Sultan (Astana) are popular for Indian families." },
  { country: "Tajikistan", type: "e-Visa (Online)", stay: "45 days", fee: "USD 50", notes: "Apply at evisa.tj. Incredible Pamir Highway access. Adventure destination." },
  { country: "Uzbekistan", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "Visa-free since 2022. Samarkand, Bukhara, Tashkent — stunning Silk Road history. Direct flights from Delhi." },
];

const AFRICA: DestEntry[] = [
  { country: "Mauritius", type: "Visa-Free", stay: "90 days", fee: "Free", notes: "Most popular Indian Ocean island. No visa — just land. Very Indian-friendly with a large Indian diaspora." },
  { country: "Seychelles", type: "Visa on Arrival", stay: "30 days", fee: "Free", notes: "Visa granted on arrival. Show hotel booking + sufficient funds. Extendable on island for longer stays." },
  { country: "Kenya", type: "e-Visa (Online)", stay: "90 days", fee: "USD 51", notes: "Apply at evisa.go.ke. Single, multiple, and transit visas available. Safari capital of Africa." },
  { country: "Tanzania (Zanzibar)", type: "e-Visa (Online)", stay: "90 days", fee: "USD 50", notes: "Apply at eservices.immigration.go.tz. Covers mainland Tanzania and Zanzibar. Kilimanjaro, Serengeti, Zanzibar." },
  { country: "Rwanda", type: "Visa on Arrival", stay: "30 days", fee: "Free", notes: "One of Africa's most welcoming countries. Gorilla trekking. Visas issued on arrival for free." },
  { country: "Ethiopia", type: "Visa on Arrival", stay: "30 days", fee: "USD 52", notes: "Available at Addis Ababa Bole International. Ethiopian Airlines hub — often cheapest Africa connection." },
  { country: "Zimbabwe", type: "Visa on Arrival", stay: "30 days", fee: "USD 30–75", notes: "Victoria Falls VOA. Single-country USD 30, KAZA (multi-park pass) USD 75. Available at Harare and Victoria Falls airports." },
  { country: "Zambia", type: "e-Visa on Arrival", stay: "30 days", fee: "USD 50", notes: "Victoria Falls from the Zambian side. Apply online or get on arrival at Lusaka or Livingstone." },
  { country: "Madagascar", type: "Visa on Arrival", stay: "30 days", fee: "Free", notes: "Available at Antananarivo Ivato Airport. Extendable for up to 90 days. Incredible biodiversity." },
  { country: "Comoros Islands", type: "Visa on Arrival", stay: "45 days", fee: "Free", notes: "Almost unknown to Indian tourists. Archipelago in Indian Ocean. Excellent diving." },
];

const AMERICAS_CARIBBEAN: DestEntry[] = [
  { country: "Ecuador (incl. Galápagos)", type: "Visa-Free", stay: "90 days", fee: "Free", notes: "Visa-free. Quito, Guayaquil, and Galápagos (special entry fee for islands). Amazing biodiversity." },
  { country: "Bolivia", type: "Visa on Arrival", stay: "90 days", fee: "USD 30", notes: "VOA at El Alto airport, La Paz. Salar de Uyuni salt flats — one of the world's great landscapes." },
  { country: "Trinidad and Tobago", type: "Visa-Free", stay: "90 days", fee: "Free", notes: "Large Indian diaspora (40% of population is Indo-Trinidadian). Visa-free for Indian passport." },
  { country: "Jamaica", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "No visa required for Indians. Show return ticket + accommodation. Bob Marley, Blue Mountains, Dunn's River." },
  { country: "Dominica", type: "Visa-Free", stay: "21 days", fee: "Free", notes: "Nature island of the Caribbean. Indian passport visa-free. Boiling Lake, rainforests, diving." },
  { country: "Haiti", type: "Visa-Free", stay: "90 days", fee: "Free", notes: "Check travel advisories before visiting. Technically visa-free but security situation varies." },
  { country: "Micronesia", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "Federated States of Micronesia. Tiny Pacific destination. World-class wreck diving at Chuuk." },
];

const PACIFIC: DestEntry[] = [
  { country: "Fiji", type: "Visa-Free", stay: "4 months", fee: "Free", notes: "One of the most generous visa-free allowances. Large Indian-Fijian community. Direct charters from Sydney." },
  { country: "Vanuatu", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "Pacific archipelago. Volcano island, diving, genuinely off-beaten-path." },
  { country: "Tuvalu", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "One of the world's least-visited countries. Visa-free for Indian passport." },
  { country: "Niue", type: "Visa-Free", stay: "30 days", fee: "Free", notes: "Tiny coral island between Tonga and Samoa. Whale watching, chasms, diving. Very few tourists." },
  { country: "Cook Islands", type: "Visa-Free", stay: "31 days", fee: "Free", notes: "South Pacific jewel. Rarotonga and the Aitutaki lagoon are genuinely stunning." },
];

function DestTable({ entries, id, title, emoji }: { entries: DestEntry[]; id: string; title: string; emoji: string }) {
  const typeColors: Record<string, string> = {
    "Visa-Free": "bg-teal/10 text-teal",
    "Visa on Arrival": "bg-gold/10 text-[#8B6835]",
    "e-Visa on Arrival": "bg-gold/10 text-[#8B6835]",
    "e-Visa (Online)": "bg-parchment text-[#7A6A52]",
  };

  return (
    <section id={id} className="mt-12">
      <h2 className="font-serif text-2xl font-light text-ink mb-2 flex items-center gap-2">
        <span>{emoji}</span> {title}
      </h2>
      <div className="overflow-x-auto rounded-xl border border-parchment-2 my-4">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-parchment border-b border-parchment-2">
              <th className="text-left p-3 font-medium text-ink text-xs">Country</th>
              <th className="text-left p-3 font-medium text-ink text-xs">Entry Type</th>
              <th className="text-left p-3 font-medium text-ink text-xs hidden sm:table-cell">Max Stay</th>
              <th className="text-left p-3 font-medium text-ink text-xs hidden md:table-cell">Fee</th>
              <th className="text-left p-3 font-medium text-ink text-xs hidden lg:table-cell">Notes</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e, i) => (
              <tr key={e.country} className={i % 2 === 0 ? "bg-white" : "bg-cream/40"}>
                <td className="p-3 font-medium text-ink text-xs">{e.country}</td>
                <td className="p-3">
                  <span className={`text-[0.65rem] px-2 py-0.5 rounded-full font-medium ${typeColors[e.type] ?? "bg-parchment text-muted"}`}>
                    {e.type}
                  </span>
                </td>
                <td className="p-3 text-xs text-muted hidden sm:table-cell">{e.stay}</td>
                <td className="p-3 text-xs text-muted hidden md:table-cell">{e.fee}</td>
                <td className="p-3 text-xs text-muted font-light hidden lg:table-cell leading-relaxed">{e.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted font-light mt-1 italic">Tap a row for full details on mobile. Rules change — always verify at the official embassy site before travel.</p>
    </section>
  );
}

export default function VisaFreeClient() {
  return (
    <>
      <BlogSlugNav />
      <TableOfContents items={tocItems} />

      <main className="pt-[72px] bg-cream min-h-screen">
        {/* Hero */}
        <div className="relative h-[380px] md:h-[440px] overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1400&q=80"
            alt="Indian passport with boarding passes for international travel"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-[900px]">
            <span className="inline-block bg-gold text-ink text-xs tracking-[0.12em] uppercase font-medium px-2.5 py-1 rounded-[1px] mb-4">
              Travel Tips
            </span>
            <h1 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-light text-white leading-tight">
              Visa-Free Countries for Indian Passport 2026
            </h1>
            <p className="text-white/65 text-sm mt-3">April 7, 2026 · 14 min read</p>
          </div>
        </div>

        <div className="max-w-[860px] mx-auto px-5 md:px-8 py-10 md:py-14">

          {/* Lede */}
          <div className="bg-gold/8 border border-gold/20 rounded-xl p-6 mb-10">
            <p className="text-sm text-ink font-light leading-relaxed">
              <strong className="font-medium">Quick answer:</strong> Indian passport holders can access <strong>60+ countries</strong> without a pre-arranged visa in 2026 — including Thailand, Malaysia, Maldives, Mauritius, Nepal, Seychelles, Qatar, Indonesia, Fiji, and 50+ more. This list covers visa-free, visa on arrival, and e-visa on arrival entries sorted by region.
            </p>
          </div>

          {/* Quick-reference summary */}
          <section id="quick-list">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">Quick Reference: Best Destinations by Type</h2>
            <div className="grid sm:grid-cols-3 gap-4 my-6">
              <div className="bg-teal/8 border border-teal/20 rounded-xl p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-teal mb-3">True Visa-Free</p>
                <ul className="space-y-1.5 text-sm text-ink font-light">
                  <li>🇳🇵 Nepal — unlimited</li>
                  <li>🇲🇻 Maldives — 30 days</li>
                  <li>🇲🇺 Mauritius — 90 days</li>
                  <li>🇫🇯 Fiji — 4 months</li>
                  <li>🇶🇦 Qatar — 30 days</li>
                  <li>🇲🇾 Malaysia — 30 days</li>
                  <li>🇵🇭 Philippines — 30 days</li>
                  <li>🇹🇭 Thailand — 30 days</li>
                  <li>🇬🇪 Georgia — 365 days</li>
                  <li>🇺🇿 Uzbekistan — 30 days</li>
                </ul>
              </div>
              <div className="bg-gold/8 border border-gold/20 rounded-xl p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-[#8B6835] mb-3">Visa on Arrival</p>
                <ul className="space-y-1.5 text-sm text-ink font-light">
                  <li>🇮🇩 Indonesia — USD 35</li>
                  <li>🇱🇦 Laos — USD 35–42</li>
                  <li>🇯🇴 Jordan — JOD 40</li>
                  <li>🇷🇼 Rwanda — Free</li>
                  <li>🇸🇨 Seychelles — Free</li>
                  <li>🇿🇼 Zimbabwe — USD 30</li>
                  <li>🇪🇹 Ethiopia — USD 52</li>
                  <li>🇲🇬 Madagascar — Free</li>
                  <li>🇯🇲 Jamaica — Free</li>
                  <li>🇱🇰 Sri Lanka — Free (ETA)</li>
                </ul>
              </div>
              <div className="bg-parchment rounded-xl p-5">
                <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-3">e-Visa (Apply Online)</p>
                <ul className="space-y-1.5 text-sm text-ink font-light">
                  <li>🇻🇳 Vietnam — USD 25</li>
                  <li>🇰🇭 Cambodia — USD 30</li>
                  <li>🇰🇪 Kenya — USD 51</li>
                  <li>🇹🇿 Tanzania — USD 50</li>
                  <li>🇴🇲 Oman — OMR 20</li>
                  <li>🇹🇯 Tajikistan — USD 50</li>
                  <li>🇿🇲 Zambia — USD 50</li>
                  <li>🇧🇹 Bhutan — ₹1,200/day fee</li>
                  <li>🇲🇲 Myanmar — USD 50</li>
                  <li>🇧🇴 Bolivia — USD 30</li>
                </ul>
              </div>
            </div>
          </section>

          <DestTable entries={SOUTHEAST_ASIA} id="southeast-asia" title="Southeast Asia" emoji="🌴" />

          <p className="text-sm text-muted font-light mt-4 leading-relaxed">
            <strong className="text-ink font-medium">Note on Singapore:</strong> Singapore does NOT offer visa-free entry for Indian passport holders in 2026 — a visa must be applied in advance via the Singapore ICA portal (₹3,000–4,500, processing 3–5 days). Approval rates are high but it requires effort.
          </p>

          <DestTable entries={SOUTH_ASIA} id="south-asia" title="South Asia & Subcontinent" emoji="🏔️" />

          <div className="bg-ink rounded-xl p-6 my-8">
            <p className="text-xs tracking-widest uppercase text-gold mb-2 font-medium">Pro Tip — Nepal & Bhutan</p>
            <p className="text-sm text-white/75 font-light leading-relaxed">
              Nepal requires no visa and no passport — your Aadhaar card or voter ID is sufficient at the land border. For flights, carry your passport. Bhutan requires a <strong className="text-white">Sustainable Development Fee of ₹1,200/day</strong> (₹200 for children under 5). This replaces their old USD $200 high-value tourist charge and makes Bhutan affordable for Indians.
            </p>
          </div>

          <DestTable entries={MIDDLE_EAST} id="middle-east" title="Middle East, Central Asia & Caucasus" emoji="🏙️" />

          <DestTable entries={AFRICA} id="africa" title="Africa" emoji="🦁" />

          <div className="bg-parchment rounded-xl p-6 my-8">
            <p className="text-xs tracking-widest uppercase text-[#8B6835] mb-2 font-medium">Africa is more open than you think</p>
            <p className="text-sm text-muted font-light leading-relaxed">
              South Africa, Egypt, Morocco, and Nigeria all require advance visas. But East and Southern Africa are remarkably easy — Kenya, Tanzania, Rwanda, Ethiopia, Zambia, Zimbabwe, and Mozambique all offer e-visa or VOA options. A Kenya-Tanzania safari requires two separate visas but both are straightforward online.
            </p>
          </div>

          <DestTable entries={AMERICAS_CARIBBEAN} id="americas-caribbean" title="Americas & Caribbean" emoji="🌊" />

          <DestTable entries={PACIFIC} id="pacific" title="Pacific & Indian Ocean Islands" emoji="🏝️" />

          <InlineSignup variant="compact" />

          {/* What to Carry */}
          <section id="what-to-carry" className="mt-12">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">What to Carry for VOA Countries</h2>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="bg-white border border-parchment-2 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink mb-3">Always Required</p>
                <ul className="space-y-2 text-sm text-muted font-light">
                  <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">✓</span> Passport valid 6+ months beyond travel</li>
                  <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">✓</span> Return / onward flight ticket (printed or digital)</li>
                  <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">✓</span> Hotel / accommodation confirmation</li>
                  <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">✓</span> USD cash for VOA fees (small bills, like $1, $5, $10)</li>
                  <li className="flex items-start gap-2"><span className="text-teal mt-0.5 flex-shrink-0">✓</span> Bank statement showing sufficient funds</li>
                </ul>
              </div>
              <div className="bg-white border border-parchment-2 rounded-xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-ink mb-3">Often Asked For</p>
                <ul className="space-y-2 text-sm text-muted font-light">
                  <li className="flex items-start gap-2"><span className="text-gold-dark mt-0.5 flex-shrink-0">•</span> Travel insurance certificate</li>
                  <li className="flex items-start gap-2"><span className="text-gold-dark mt-0.5 flex-shrink-0">•</span> 2 passport-size photos (Laos, Ethiopia, Zimbabwe)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-dark mt-0.5 flex-shrink-0">•</span> Yellow fever vaccination card (some African countries)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-dark mt-0.5 flex-shrink-0">•</span> Completed arrival form (given on flight)</li>
                  <li className="flex items-start gap-2"><span className="text-gold-dark mt-0.5 flex-shrink-0">•</span> Previous country visa (if transiting)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gold/8 border border-gold/20 rounded-xl p-5 my-6">
              <p className="text-sm font-medium text-ink mb-1">Why USD Cash Matters</p>
              <p className="text-sm text-muted font-light leading-relaxed">
                For VOA countries, always carry crisp USD bills (no tears, no folds — some counters reject worn notes). Amounts between $20–$60 cover most fees. <strong className="text-ink">Don&apos;t rely on card payments at VOA counters</strong> — many are cash-only, especially in Africa and Laos. Exchange at the airport after clearing immigration for local spending.
              </p>
            </div>
          </section>

          {/* Countries Requiring Pre-Visa */}
          <section className="mt-10">
            <h2 className="font-serif text-2xl font-light text-ink mb-4">Popular Countries That Require Advance Visa</h2>
            <p className="text-sm text-muted font-light leading-relaxed mb-4">
              These high-demand destinations require you to apply for a visa before travel — but all have straightforward processes:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { country: "🇦🇪 UAE (Dubai)", how: "Online at icp.gov.ae or via airline, 3–5 days, ₹3,000–5,000" },
                { country: "🇸🇬 Singapore", how: "SG ICA portal, 3–5 days, ₹3,500–4,500. High approval rate." },
                { country: "🇯🇵 Japan", how: "Embassy / VFS Global, 7–10 days, ₹1,000 fee. Documents-heavy but worth it." },
                { country: "🇫🇷 France / Schengen", how: "VFS Global, 6–8 weeks ahead. Cover letter, bank statement, insurance." },
                { country: "🇬🇧 UK", how: "VFS UK, apply 3 months ahead. Highest refusal rate — strong application needed." },
                { country: "🇺🇸 USA", how: "B2 tourist visa. Long wait times. Embassy interview required. Apply 6–12 months ahead." },
                { country: "🇿🇦 South Africa", how: "South Africa VFS, in-person biometrics required. 10–15 working days." },
                { country: "🇲🇦 Morocco", how: "Moroccan Embassy, 5–7 days. Simple single-entry tourist visa." },
              ].map((item) => (
                <div key={item.country} className="bg-parchment rounded-lg p-4">
                  <p className="text-sm font-medium text-ink mb-1">{item.country}</p>
                  <p className="text-xs text-muted font-light">{item.how}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-12">
            <h2 className="font-serif text-2xl font-light text-ink mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How many countries can Indian passport holders visit visa-free in 2026?",
                  a: "Approximately 57–62 countries offer visa-free or visa-on-arrival access to Indian passport holders in 2026. This includes countries like Nepal, Maldives, Mauritius, Seychelles, Fiji, Qatar, Malaysia, Thailand, Philippines, Georgia, Uzbekistan, and many more. The count varies depending on whether you include e-visa (pre-apply online) or only true VOA/visa-free entries."
                },
                {
                  q: "Is Malaysia really visa-free for Indians?",
                  a: "Yes — since December 2023, Malaysia introduced visa-free entry for Indian citizens. You can stay up to 30 days per visit. You still need to show a return ticket and accommodation proof at immigration. This was a major policy shift that makes Kuala Lumpur, Penang, and Langkawi very easy to visit."
                },
                {
                  q: "Do I need travel insurance for visa-free countries?",
                  a: "Technically, most visa-free and VOA countries don't legally require travel insurance — but you should get it anyway. Medical costs in the Maldives, Fiji, or remote African countries can be astronomical if you need evacuation. A solid annual travel insurance plan costs ₹3,000–8,000/year and covers unlimited trips. It's one of the best travel investments you can make."
                },
                {
                  q: "Can holders of an Indian passport travel to Europe without a visa?",
                  a: "No — the Schengen Area (most of Europe) requires Indian passport holders to obtain a Schengen visa in advance. Exceptions are Georgia (1 year visa-free) and some Balkans countries like Albania, Bosnia, Serbia, and North Macedonia which are visa-free for Indians. Kosovo and Montenegro may also be accessible — verify before travel."
                },
                {
                  q: "Which are the best visa-free beach destinations for Indians?",
                  a: "Top picks for beaches with no advance visa: Maldives (30 days, visa-free), Mauritius (90 days, visa-free), Seychelles (visa on arrival), Bali/Indonesia (visa on arrival, USD 35), Thailand (30 days, visa-free), Philippines (30 days, visa-free), Fiji (4 months, visa-free). For Indian Ocean, Maldives is the premium option. For Southeast Asia, Thailand and Philippines are the best value."
                },
              ].map((faq, i) => (
                <div key={i} className="border border-parchment-2 rounded-xl p-5 bg-white">
                  <p className="text-sm font-medium text-ink mb-2">{faq.q}</p>
                  <p className="text-sm text-muted font-light leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="my-12 bg-ink rounded-2xl p-7 md:p-9">
            <p className="text-xs tracking-widest uppercase text-gold mb-3 font-medium">Before You Book</p>
            <p className="font-serif text-xl font-light text-white mb-3">Visa rules change. Always verify.</p>
            <p className="text-sm text-white/60 font-light leading-relaxed mb-5">
              This list is accurate as of April 2026 but immigration policies change frequently. Always check the official embassy website or IATA Travel Centre before finalising bookings. Visa rules for Indian passports have been rapidly improving — check back for updates.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/tools/visa-checker" className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-ink font-semibold text-sm px-5 py-2.5 rounded-xl transition-colors">
                Use Our Visa Checker →
              </Link>
              <Link href="/blog" className="inline-flex items-center text-white/60 hover:text-white text-sm font-light transition-colors">
                More Travel Guides
              </Link>
            </div>
          </div>

          <DestinationGallery
            title="Visa Free Countries — Highlights"
            subtitle="The best of Visa Free Countries in photos."
            spots={[
              { name: "Visa Free Countries Landscape", query: "visa free countries india landscape scenic beautiful travel", desc: "The stunning landscapes of Visa Free Countries." },
              { name: "Visa Free Countries Heritage", query: "visa free countries temple architecture heritage india", desc: "Historic heritage and architecture in Visa Free Countries." },
              { name: "Visa Free Countries Culture", query: "visa free countries street market local culture india", desc: "Local life and culture in Visa Free Countries." },
              { name: "Visa Free Countries Nature", query: "visa free countries nature hills forest river india", desc: "Natural beauty around Visa Free Countries." },
              { name: "Visa Free Countries Sunset", query: "visa free countries sunset golden hour india travel", desc: "Visa Free Countries at golden hour." },
            ]}
          />

         

          <RelatedGuides currentSlug="visa-free-countries-indian-passport" />
        </div>
      </main>
      <Footer />
    </>
  );
}
