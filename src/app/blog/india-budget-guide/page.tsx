import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

export const metadata: Metadata = {
  title: "India Budget Travel Guide: ₹3,000/Day Formula for Backpackers (2026)",
  description: "How to travel India on ₹1,500–3,000 per day — budget breakdown for accommodation, food, transport and activities across 8 major cities. Scam alerts, best apps and money-saving hacks included.",
  keywords: ["india budget travel", "india backpacker guide", "india travel cost per day", "cheap travel india", "india on a budget 2026"],
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/india-budget-guide" },
  openGraph: {
    title: "India Budget Travel Guide 2026: ₹3,000/Day Formula",
    description: "The complete budget breakdown for travelling India — accommodation, food, transport, scam alerts and money-saving hacks.",
    url: "https://www.incredibleitinerary.com/blog/india-budget-guide",
    type: "article",
  },
};

const data: UniversalBlogData = {
  destination: "India",
  country: "India",
  countryFlag: "🇮🇳",
  slug: "india-budget-guide",
  heroQuery: "india travel backpacker rajasthan market train varanasi ghat",
  heroAlt: "Indian Railways train passing through Rajasthan landscape at golden hour",
  category: "Budget Travel",
  date: "April 2026",
  readTime: "18 min read",
  intro: "India can cost ₹1,500 per day or ₹15,000 per day — and the experience is often better at the lower end. The chaotic train compartments, the ₹40 thali that beats any restaurant, the ₹500 guesthouse run by a family who treat you like a guest — budget travel in India isn't a compromise. It's the real thing. This guide gives you the exact formula: what to spend, where to cut, what's worth splurging on, and the scams that drain travellers who don't know better.",

  stats: {
    duration: "Flexible",
    budgetFrom: "₹1,500/day",
    bestMonths: "Oct–Mar",
    airport: "DEL / BOM / BLR",
  },

  toc: [
    { id: "plans", emoji: "💰", label: "The ₹3k/Day Formula" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "Budget Day Templates" },
    { id: "budget", emoji: "📊", label: "City-by-City Costs" },
    { id: "mistakes", emoji: "❌", label: "Scams & Mistakes" },
    { id: "tips", emoji: "💡", label: "Money-Saving Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],

  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Citizens — No Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["No Visa Required", "India is your home country. A valid government-issued photo ID (Aadhaar, PAN card, driving licence, or passport) is sufficient for all domestic travel — flights, trains, and hotel check-in."],
        ["Train Booking", "Book on IRCTC Rail Connect app. Sleeper class (SL) is the cheapest for long routes; 3AC is comfortable and affordable. Book at least 2 weeks in advance for confirmed seats — Tatkal quota opens 1 day before at 1.5–2x price for last-minute travel."],
        ["Best Apps for Travel", "IRCTC Rail Connect (trains), Ola & Uber (transport), Zomato (restaurants), Paytm/GPay (UPI payments everywhere), Google Translate with Hindi offline pack downloaded."],
      ],
    },
    {
      flag: "🌍",
      title: "Foreign Nationals — e-Visa Required",
      bg: "bg-blue-50",
      border: "border-blue-200",
      titleColor: "text-blue-800",
      items: [
        ["e-Visa Available", "Most nationalities can apply for an Indian e-Tourist Visa at indianvisaonline.gov.in. Fee: USD $25 (30-day single entry) or USD $40 (1-year multiple entry). Apply at least 4 business days before arrival. Print the approval letter and carry it."],
        ["Foreigner Ticket Prices", "Foreign nationals pay significantly more at heritage sites — Taj Mahal is ₹1,100 for foreigners vs ₹50 for Indians. Budget accordingly. Monument entry across India ranges from ₹500–1,100 for foreigners at major ASI sites."],
        ["SIM Card on Arrival", "Airtel, Jio, and Vi kiosks at major airports. A prepaid tourist SIM with 1.5GB/day data for 28 days costs ₹300–400. Bring a passport copy and passport photo — required for activation. Jio has the strongest network across most of India."],
        ["Currency & ATMs", "Carry ₹2,000–3,000 in cash at all times — many dhabas, local markets, and autos are cash-only. State Bank of India ATMs are most reliable for foreign cards. Inform your home bank before travel to avoid card blocks."],
      ],
    },
  ],

  plans: [
    {
      label: "Budget",
      sub: "₹1,200–2,500/day",
      days: [
        {
          day: "Day 1",
          title: "The Backpacker Template Day",
          items: [
            "Wake up in a hostel dorm or budget guesthouse (₹350–650). Breakfast at a local dhaba — poha, idli-sambhar or aloo paratha with chai for ₹35–80.",
            "Walk or use local buses to morning sights. Most ghats, temples and markets are free. Old city areas in Varanasi, Jaipur, and Delhi's Chandni Chowk cost nothing to explore.",
            "Lunch at a thali restaurant — unlimited thali ₹80–150. Afternoon walking tour of the heritage area. Many cities have volunteer-run heritage walks — check the local tourism office.",
            "Street food dinner — chaat, pav bhaji, biryani or dosa for ₹60–120. Book your next overnight train on IRCTC (sleeper class saves accommodation cost for the next night).",
            "Total food for the day: ₹200–350. Total transport: ₹80–200 on buses or autos. Paid sights: ₹50–200 (most sites ₹30–50 for Indians).",
          ],
          cost: "₹680–1,400 (excl. accommodation)",
        },
        {
          day: "Day 2",
          title: "Overnight Train Day — City to City",
          items: [
            "Check out of guesthouse. Store luggage if needed — most railway stations have paid cloakrooms at ₹30–50/bag. Spend the morning exploring one more area or a free museum.",
            "Final local lunch (₹80–150). Make your way to the railway station 30 minutes early. Platform tea costs ₹10 — much cheaper than station restaurants.",
            "Board overnight train in sleeper class (SL) — ₹200–600 depending on route. Delhi to Varanasi: ~₹350. Mumbai to Goa: ~₹250. Jaipur to Jodhpur: ~₹180.",
            "Sleep while travelling. You arrive at your next destination at dawn — effectively saving one full night of accommodation cost.",
            "This is the single most powerful budget move in India: travel at night, arrive refreshed, skip the hotel bill.",
          ],
          cost: "₹400–1,050 (overnight train = free accommodation night)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₹3,000–6,000/day",
      days: [
        {
          day: "Day 1",
          title: "Comfortable India Day",
          items: [
            "Private room in a heritage guesthouse or 3-star hotel (₹1,200–2,500). Hotel breakfast or a good local café. Use Ola/Uber for transfers — metered, reliable, no negotiation needed.",
            "Hire an auto for a half-day sightseeing tour (₹500–800 for 4 hours). Visit 2–3 major paid attractions — entry ₹100–300 each for Indians.",
            "Lunch at an established restaurant from Zomato's top picks for the city (₹300–600 for two). Afternoon at a museum or heritage monument.",
            "Dinner at a well-reviewed restaurant (₹500–900 for two). Try one cultural experience — music performance, cooking class, or evening boat ride (₹300–600).",
            "Total for the day excluding accommodation: ₹1,600–3,200. With a ₹1,500 hotel room, you're well within ₹5,000/day.",
          ],
          cost: "₹1,600–3,200 (excl. accommodation)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₹10,000–30,000/day",
      days: [
        {
          day: "Day 1",
          title: "Palace & Premium India",
          items: [
            "Palace hotel or 5-star property (₹6,000–18,000). Breakfast included. Private car with driver for the full day (₹1,500–2,500).",
            "Private guided tours with certified expert guides (₹2,000–4,000 half day). These are worth the cost — the context they provide transforms ordinary monuments into extraordinary ones.",
            "Fine dining at the hotel or top-rated restaurant (₹1,500–3,000 for two). India has some of the world's finest hotel restaurants at a fraction of Western prices.",
            "Evening: sunset private boat cruise, rooftop dinner, or spa treatment (₹2,000–5,000). Premium cultural experience — private tabla recital, cooking masterclass with a palace chef.",
            "Total excluding accommodation: ₹7,500–16,000. India's palace hotels offer genuine luxury that would cost 10x more in Europe.",
          ],
          cost: "₹7,500–16,000 (excl. accommodation)",
        },
      ],
    },
  ],

  budgetTable: [
    { tier: "🏕️ Backpacker (dorm)", accommodation: "₹350–600/night", food: "₹200–350/day", transport: "₹80–200/day", activities: "₹50–200/day", total: "₹680–1,350/day" },
    { tier: "💰 Budget (private room)", accommodation: "₹550–900/night", food: "₹300–500/day", transport: "₹120–250/day", activities: "₹100–300/day", total: "₹1,070–1,950/day" },
    { tier: "✨ Mid-Range (AC hotel)", accommodation: "₹1,200–2,500/night", food: "₹600–1,000/day", transport: "₹300–600/day", activities: "₹300–700/day", total: "₹2,400–4,800/day" },
    { tier: "🏛️ Heritage / Boutique", accommodation: "₹2,000–4,500/night", food: "₹800–1,500/day", transport: "₹500–1,200/day", activities: "₹500–1,200/day", total: "₹3,800–8,400/day" },
    { tier: "💎 Luxury / Palace", accommodation: "₹6,000–18,000/night", food: "₹2,000–5,000/day", transport: "₹1,500–3,500/day", activities: "₹2,000–6,000/day", total: "₹11,500–32,500/day" },
  ],

  mistakes: [
    { icon: "🚕", title: "Using tourist taxis from airports and stations", desc: "Pre-paid tourist taxis at major tourist spots charge 3–5x market rates. Download Ola and Uber before you land. In cities without ride-hailing apps, ask your guesthouse to book a local auto — they know fair prices and will help you avoid getting overcharged.", color: "bg-red-50 border-red-200" },
    { icon: "🍽️", title: "Eating at restaurants right next to monuments", desc: "Any restaurant with a view of the Taj Mahal, Red Fort or Qutub Minar prices itself for tourists with no local competition. Walk 5 minutes away. The single best quality indicator in India: a dhaba where local working people are eating at lunchtime. If it's full — go in.", color: "bg-orange-50 border-orange-200" },
    { icon: "🎫", title: "Not knowing Indian vs foreigner ticket prices", desc: "Indian nationals pay far less at most heritage sites. Taj Mahal: ₹50 (Indian) vs ₹1,100 (foreigner). Carry your Aadhaar card at all times. The Indian ticket queue is also usually shorter. Monument entry across India is ₹0–300 for Indians — very affordable once you know the system.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "💳", title: "Assuming cards or UPI work everywhere", desc: "UPI is accepted at most urban food stalls, but many budget guesthouses, rural markets, dhabas and autos are still cash-only. Always carry ₹2,000–3,000 in cash. ATMs in tourist areas can run out on weekends. State Bank of India ATMs are most reliable for both Indian and foreign cards.", color: "bg-blue-50 border-blue-200" },
    { icon: "🚂", title: "Not booking trains in advance", desc: "Indian Railways sells out weeks ahead, especially in peak season (Oct–Feb). Book on the IRCTC app minimum 2 weeks in advance for confirmed seats. Tatkal quota opens 1 day before and costs 1.5–2x but guarantees a seat. If everything is waitlisted, check RAC tickets — you share a berth but it's better than standing.", color: "bg-purple-50 border-purple-200" },
    { icon: "🏨", title: "Booking the cheapest accommodation instead of best value", desc: "A ₹250/night guesthouse with no hot water, broken locks and street noise at 3am will ruin your trip. The sweet spot is ₹600–900 with an 8.0+ rating on Booking.com — usually a family-run place with clean rooms and an owner who gives honest local advice. Value beats cheap every time.", color: "bg-green-50 border-green-200" },
  ],

  tips: [
    { icon: "🚂", title: "Overnight trains = free accommodation", desc: "An overnight sleeper train (SL class) from Delhi to Varanasi costs ₹350–450 and takes 12 hours. You sleep in transit, arrive at dawn, and skip one night of accommodation entirely. Do this 3–4 times on a 2-week trip and you save ₹2,000–3,500. Sleeper class is crowded but safe — bring a lock for your bag.", color: "bg-amber-50 border-amber-200" },
    { icon: "🍛", title: "The unlimited thali system", desc: "Thali restaurants serve a metal tray with small bowls of dal, two sabzis, rice, roti, papad and often a sweet. When you finish, they refill — it's unlimited. Ask 'ek aur roti/rice dijiye' for a refill. Cost: ₹80–160 for a complete meal. This is the backbone of budget eating across India.", color: "bg-green-50 border-green-200" },
    { icon: "📱", title: "Apps that save money every day", desc: "IRCTC Rail Connect (train booking — mandatory), Ola and Uber (transport — never flag an auto without checking app prices first), Zomato (find local restaurants with real reviews, avoid tourist traps), Paytm/GPay (UPI payments everywhere), Google Translate with Hindi offline pack.", color: "bg-blue-50 border-blue-200" },
    { icon: "📅", title: "Best months: shoulder seasons save 20–35%", desc: "October–November and February–March are the budget sweet spots. Weather is good, crowds are below peak, and hotels drop prices significantly. December–January is peak season — everything costs 30–50% more. June–August is monsoon — beautiful landscapes, far fewer tourists, but possible transport disruptions in hill areas.", color: "bg-teal-50 border-teal-200" },
    { icon: "🤝", title: "Negotiation basics that actually work", desc: "Anything without a printed price tag is negotiable: auto-rickshaws (before app era), market shopping, guesthouse room rates (especially for 3+ nights), boat rides and guided tours. Start at 50–60% of the opening quote and settle around 65–75%. Always smile — negotiation here is friendly commerce, not confrontation. Walking away often brings the price down immediately.", color: "bg-rose-50 border-rose-200" },
    { icon: "💊", title: "The ₹3,000 travel insurance rule", desc: "Travel insurance for India costs ₹2,000–5,000 for 2 weeks. Medical costs are low — but food poisoning requiring a hospital visit can run ₹5,000–15,000. A broken bone: ₹30,000–60,000. If something goes wrong in a remote area without insurance, the cost can define your trip. Get it before you board.", color: "bg-purple-50 border-purple-200" },
  ],

  faqs: [
    { q: "How much does it cost to travel India per day on a budget?", a: "A realistic backpacker budget is ₹1,500–2,500/day covering a dorm bed or budget room, 3 meals from local places, local transport and some paid sights. If you use overnight trains strategically, you can average ₹1,200–1,800/day over a 2-week trip. Mid-range comfortable travel runs ₹3,500–6,000/day." },
    { q: "What is the cheapest way to travel between cities in India?", a: "Sleeper class (SL) on Indian Railways is the cheapest intercity option — ₹150–600 for most routes under 500km. For under 200km, state government buses are often cheaper (₹80–200). Overnight trains are best value: you travel and sleep simultaneously, saving accommodation. Book on IRCTC app at least 2 weeks ahead." },
    { q: "Which cities in India are cheapest to visit?", a: "Varanasi and Rishikesh offer the best budget guesthouses with memorable settings (ghats, riverside) for ₹400–700/night. Rajasthan cities (Jaipur, Jodhpur, Jaisalmer) are competitive. Delhi is affordable if you stay in Paharganj or Karol Bagh. Mumbai is India's most expensive city. Goa is pricier than most of India, especially in peak season (Nov–Feb)." },
    { q: "Is India safe for solo budget travellers?", a: "Yes — for both men and women, with sensible precautions. Use Ola/Uber instead of flagging random autos at night. Solo women should choose guesthouses with reception desks rather than unmarked budget rooms. Most Indians are extraordinarily helpful to lost travellers. The main risks are pickpockets in very crowded markets and overcharging scams — not violent crime." },
    { q: "Do I need cash or can I use UPI and cards everywhere?", a: "Both. UPI (GPay, PhonePe, Paytm) is accepted almost everywhere in cities — including street food stalls, auto-rickshaws and small shops. Cards work at hotels, restaurants and tourist sites. But rural areas, dhabas, and local markets are often cash-only. Always carry ₹2,000–3,000 in cash. SBI ATMs are most reliable." },
    { q: "How do I book trains in India as a first-timer?", a: "Download the IRCTC Rail Connect app. Register with your phone number and email (takes 10 minutes). Search by station name, choose date, select class (SL = cheapest, 3A = AC comfortable, 2A = more private). Pay via UPI or card. Download the ticket — you'll need to show it at the gate. Book at least 2 weeks in advance for confirmed berths." },
  ],

  combineWith: ["rajasthan-7-days", "kerala-5-days", "varanasi-3-days", "delhi-3-days"],
  relatedSlugs: ["rajasthan-7-days", "kerala-5-days", "goa-3-days", "varanasi-3-days", "delhi-3-days"],
  galleryQuery: "india budget travel backpacker train market street food chai rajasthan varanasi",
};

export default function IndiaBudgetGuidePage() {
  return <UniversalBlogClient data={data} />;
}
