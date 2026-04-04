import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Istanbul",
  country: "Turkey",
  countryFlag: "🇹🇷",
  slug: "istanbul-5-days",
  heroQuery: "istanbul hagia sophia blue mosque bosphorus turkey skyline",
  heroAlt: "Istanbul Hagia Sophia and Blue Mosque skyline across the Bosphorus Turkey",
  category: "Europe",
  date: "April 4, 2026",
  readTime: "15 min read",
  intro: "The only city on two continents — Hagia Sophia's dome has stood for 1,500 years, the Grand Bazaar has 4,000 shops across 61 streets, and the Bosphorus ferry from Europe to Asia costs 50 cents. Istanbul is ancient Rome, Byzantine Empire, and Ottoman glory compressed into one city that never sleeps.",
  stats: { duration: "5 Days", budgetFrom: "₺500", bestMonths: "Apr – Jun, Sep – Nov", airport: "IST (Istanbul Airport)" },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50", border: "border-amber-200", titleColor: "text-amber-800",
      items: [
        ["E-Visa", "Apply at evisa.gov.tr — $60 USD, processed instantly to 24 hrs. Single entry, 30-day stay."],
        ["Visa on Arrival", "No longer available for most nationalities. E-Visa is now mandatory."],
        ["Documents", "Passport valid 6+ months beyond stay, return ticket, hotel booking. No bank statements required."],
        ["Duration", "30 days. Can extend at local immigration offices but rarely needed for tourists."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "Citizens of Japan, Korea, Singapore get 90 days visa-free. Check your country at evisa.gov.tr."],
        ["E-Visa", "USA, UK, Australia, Canada need E-Visa ($60 USD, instant approval). Apply at evisa.gov.tr."],
        ["EU Citizens", "Most EU passport holders get 90 days visa-free or need E-Visa depending on nationality."],
        ["Tip", "Buy the Istanbulkart transport card at the airport — works on metro, tram, ferry, and bus. Load ₺100 to start."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₺500–900/day (~$16–30)",
      days: [
        {
          day: "Day 1",
          title: "Sultanahmet: Hagia Sophia, Blue Mosque & Grand Bazaar",
          items: [
            "9:00am — Hagia Sophia (free entry since 2020, now a mosque — cover hair/shoulders). Arrive before 10am to avoid crowds",
            "10:30am — Blue Mosque exterior (free) — actually called Sultan Ahmed Mosque, the blue tiles are inside",
            "11:30am — Basilica Cistern (₺250) — 6th century underground reservoir with columns reflected in water",
            "1:00pm — Lunch: Simit (sesame bread ring) from street cart ₺10, ayran ₺15, baklava ₺25",
            "2:30pm — Grand Bazaar (free to enter) — get lost for 2 hours, buy Turkish delight, spices, ceramics",
            "5:00pm — Spice Bazaar (Egyptian Bazaar) — smaller, better quality than Grand Bazaar",
            "7:00pm — Sunset from Galata Bridge walkway (free). Watch fishing rods over the Golden Horn",
            "8:30pm — Dinner at a lokanta (cafeteria) in Eminonu — döner, pilav, salad for ₺80",
          ],
          cost: "₺400–500 total",
        },
        {
          day: "Day 2",
          title: "Topkapi Palace & Bosphorus Ferry",
          items: [
            "9:00am — Topkapi Palace (₺500 entry + ₺300 for Harem) — 400 years of Ottoman sultans, Prophet Mohammed's cloak",
            "12:00pm — Lunch at a Sultanahmet restaurant — köfte and bread for ₺120",
            "2:00pm — Bosphorus ferry from Eminonu (₺30 one way on the local ferry) — passes under two bridges, 90 min each way",
            "Get off at Anadolu Kavagi on the Asian side — walk up to the castle, get fresh fish",
            "6:00pm — Return ferry to Eminonu",
            "8:00pm — Karakoy neighborhood for dinner — modern Istanbul restaurants, ₺150–200",
          ],
          cost: "₺600–700 total",
        },
        {
          day: "Day 3",
          title: "Asian Side & Princes Islands",
          items: [
            "Take the ferry from Eminonu or Besiktas to Kadikoy (Asian Istanbul) — ₺30",
            "Walk through Kadikoy market — better food, less tourist prices, local atmosphere",
            "Lunch at Ciya Sofrasi — Istanbul's most famous lokanta, Musa Dagdeviren's restaurant. Queue up, worth it.",
            "Afternoon: Take the ferry to Buyukada (Princes' Islands, ₺60 return) — no cars, horse carriages, Victorian villas",
            "Swim at Yoros Castle beach or rent a bicycle (₺100/hr)",
            "Return to Istanbul for dinner",
          ],
          cost: "₺400–500 total",
        },
        {
          day: "Day 4",
          title: "Beyoglu, Galata Tower & Istiklal",
          items: [
            "10:00am — Galata Tower (₺300) — 360° views of both sides of the Bosphorus from the medieval tower",
            "11:30am — Walk through Galata neighborhood — independent coffee shops, artisan workshops",
            "1:00pm — Istiklal Avenue — 1.5km pedestrian street with 3 million visitors per day. Walk it, don't shop it.",
            "2:30pm — Çukurcuma antique district (uphill from Istiklal) — Ottoman furniture, old maps, vintage items",
            "5:00pm — Taksim Square + Gezi Park",
            "8:00pm — Balık-ekmek (fish sandwich) from the boats at Eminonu, ₺40. Most famous street food in Istanbul.",
          ],
          cost: "₺400–500 total",
        },
        {
          day: "Day 5",
          title: "Dolmabahçe Palace & Bosphorus Villages",
          items: [
            "9:00am — Dolmabahçe Palace (₺800) — 19th century Ottoman-European palace on the Bosphorus shore",
            "12:00pm — Besiktas fish market for lunch — fresh meze, ₺150",
            "2:00pm — Walk along the Bosphorus shore north through Ortakoy",
            "Ortakoy waffle (stuffed sweet waffle, ₺80) under the Bosphorus Bridge",
            "4:00pm — Bebek neighborhood — Istanbul's most beautiful residential area",
            "7:30pm — Final dinner: Balık restaurant in Arnavutköy — fresh Bosphorus fish",
          ],
          cost: "₺600–700 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₺2,000–4,000/day (~$65–130)",
      days: [
        {
          day: "Day 1",
          title: "Sultanahmet Private Tour",
          items: [
            "Private guide for Hagia Sophia + Topkapi Palace (₺1,500 for 4 hrs)",
            "Lunch at Matbah — Ottoman palace cuisine",
            "Grand Bazaar private shopping tour with guide",
            "Rooftop dinner at Seven Hills restaurant with Bosphorus view",
          ],
          cost: "₺2,500–3,500",
        },
        {
          day: "Day 2",
          title: "Private Bosphorus Yacht",
          items: [
            "Private Bosphorus cruise by yacht (₺3,000–5,000 for a 4-hr boat)",
            "Stop at Asian villages, swim from the boat, lunch on board",
            "Afternoon: Dolmabahçe Palace with guide",
            "Evening: Karaköy contemporary restaurant",
          ],
          cost: "₺3,000–5,000",
        },
        {
          day: "Day 3",
          title: "Food Tour & Hamam",
          items: [
            "Istanbul food tour — Kadikoy, Karakoy, Galata (₺800 per person)",
            "Traditional Turkish hamam (Çemberlitaş Hamamı, ₺500 including massage)",
            "Beyoglu cocktail bars — Nardis Jazz Club for live music",
          ],
          cost: "₺2,000–2,500",
        },
        {
          day: "Day 4",
          title: "Princes Islands & Local Dinner",
          items: [
            "Ferry to Buyukada island, bicycle tour of the island",
            "Lunch at the island's best fish restaurant",
            "Evening: Dinner at Karaköy Lokantası — classic Turkish",
          ],
          cost: "₺1,500–2,000",
        },
        {
          day: "Day 5",
          title: "Shopping & Farewell",
          items: [
            "Private shopping tour — leather goods, ceramics, jewelry",
            "Turkish coffee at Mandabatmaz near Istiklal",
            "Farewell meze dinner at Meze by Lemon Tree, Asmalimescit",
          ],
          cost: "₺2,000–3,000",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₺8,000+/day (~$260+)",
      days: [
        {
          day: "Days 1–5",
          title: "Istanbul in Complete Luxury",
          items: [
            "Check in to Four Seasons Istanbul at Sultanahmet (converted 19th century prison) or Çırağan Palace Kempinski — actual Ottoman palace on the Bosphorus",
            "Private archaeological guide for all historic sites",
            "Private Bosphorus yacht for sunset cruise each evening",
            "Michelin dining: Mikla (modern Anatolian, rooftop views), Nicole (rooftop), Neolokal (Anatolian heritage cuisine)",
            "Private hamam session at the historic Süleymaniye Hamam after hours",
            "Helicopter Bosphorus tour",
            "Private cooking class with a pastry chef specializing in Ottoman sweets",
          ],
          cost: "₺12,000–25,000/day",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "₺300–600", food: "₺150–300", transport: "₺50–100", activities: "₺200–500", total: "₺700–1,500/day" },
    { tier: "✨ Mid-Range", accommodation: "₺1,500–3,000", food: "₺500–1,000", transport: "₺200–400", activities: "₺500–1,000", total: "₺2,700–5,400/day" },
    { tier: "💎 Luxury", accommodation: "₺5,000–15,000", food: "₺2,000–5,000", transport: "₺1,000–3,000", activities: "₺1,000–5,000", total: "₺9,000–28,000/day" },
  ],
  mistakes: [
    { icon: "🔄", title: "Doing Everything in Sultanahmet", desc: "Sultanahmet has the monuments but not the soul of Istanbul. The best neighborhoods — Karakoy, Kadikoy, Beyoglu, Ortakoy — are where real Istanbul life happens. Spend at least 2 of 5 days on the Asian side and Beyoglu.", color: "bg-red-50 border-red-200" },
    { icon: "🛵", title: "Taking Official Airport Taxis", desc: "The Istanbul airport is far from the city (45 min). Official taxis cost ₺600–1,000. The Havaist airport bus (₺100) or Metro to Gayrettepe then subway (₺40 total) are much cheaper and only slightly longer.", color: "bg-orange-50 border-orange-200" },
    { icon: "🎭", title: "Buying 'Genuine' Carpets from Shops Near Hagia Sophia", desc: "The carpet shops near the major sights offer 'chai and friendly conversation' which leads to high-pressure carpet sales with grossly inflated prices. If you want a carpet, research and buy from a Kapali Carsi dealer with receipts.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "⏰", title: "Scheduling Too Many Sites Per Day", desc: "Topkapi Palace alone takes 4–5 hours if you do it properly (including the Harem). Hagia Sophia is an hour minimum. Planning 4 monuments in one day means you rush everything. Two per day is right.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "⛴️", title: "The Bosphorus Ferry Costs 50 Cents", desc: "The public ferry from Eminonu to Kadikoy (Asian side) costs ₺30 (~$1) and takes 20 minutes across the strait dividing two continents. It's the best value experience in Istanbul — run by IDO and TURYOL. Use Istanbulkart.", color: "bg-amber-50 border-amber-200" },
    { icon: "🥐", title: "Simit from a Street Cart, Not a Bakery", desc: "The sesame-crusted bread rings sold from carts by simit sellers are ₺10 fresh and hot. The same simit in a café near Hagia Sophia costs ₺50. Street cart at 8am with tea from a çaycı (tea seller) is the authentic Istanbul breakfast.", color: "bg-teal-50 border-teal-200" },
    { icon: "🌉", title: "The Galata Bridge Fishermen at Sunset", desc: "Every evening, 100+ fishermen line the Galata Bridge over the Golden Horn. Watch them fish while the mosques glow behind them and ferries pass below. Completely free, incredibly photogenic.", color: "bg-green-50 border-green-200" },
    { icon: "☕", title: "Turkish Coffee is an Experience, Not Just a Drink", desc: "Order Turkish coffee (Türk kahvesi) at Mandabatmaz near Istiklal or Hafiz Mustafa in Sultanahmet. It arrives with a glass of water and often lokum (Turkish delight). Drink slowly, wait for the grounds to settle.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Is Istanbul safe for tourists?", a: "Istanbul is generally safe for tourists. The main areas (Sultanahmet, Beyoglu, Karakoy, Kadikoy) are well-policed and heavily visited. Petty theft exists in crowded areas. The main issue is tourist scams — carpet shop pressure tactics and inflated prices near monuments. Use common sense and you'll be fine." },
    { q: "How long should I spend in Istanbul?", a: "5 days is ideal for a first visit — enough to cover the main sights, explore neighborhoods on both sides of the Bosphorus, and discover some local spots. 3 days is possible but rushed. 7+ days lets you explore the Princes' Islands and day trips to Bursa." },
    { q: "What is the best time to visit Istanbul?", a: "April–June and September–November. Weather is ideal (18–25°C), crowds are manageable, and the city is in full swing. July–August is very hot (30–38°C) and crowded. December–February is cold but cheap, and Istanbul in light snow is magical." },
    { q: "Do I need to cover up in mosques in Istanbul?", a: "Yes — for both men and women. At Hagia Sophia and Blue Mosque, women must cover their hair (scarves provided at the entrance), and both men and women must cover shoulders and knees. Remove shoes before entering prayer halls." },
    { q: "What currency should I use in Istanbul?", a: "Turkish Lira (TRY). Most establishments also accept EUR and USD, but the exchange rate given is usually poor. Withdraw TRY from ATMs (Garanti or İşbank give good rates). Avoid exchanging at the airport." },
  ],
  combineWith: ["cappadocia-3-days", "athens-3-days", "dubai-4-days"],
  relatedSlugs: ["cappadocia-3-days", "athens-3-days", "barcelona-4-days", "rome-4-days"],
  galleryQuery: "istanbul hagia sophia grand bazaar bosphorus turkey",
};

export const metadata: Metadata = {
  title: "Istanbul in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "5-day Istanbul guide — Hagia Sophia timing, Grand Bazaar survival guide, Bosphorus ferry routes, Asian side highlights, and the Turkish street food you must eat.",
  keywords: ["istanbul itinerary 5 days", "istanbul travel guide 2026", "hagia sophia guide", "istanbul budget travel", "turkey travel", "bosphorus cruise"],
  openGraph: {
    title: "Istanbul in 5 Days: Budget to Luxury 2026",
    description: "Hagia Sophia timing, Grand Bazaar guide, Bosphorus ferry routes.",
    images: [{ url: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80", width: 1200, height: 630, alt: "Istanbul Hagia Sophia Turkey" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Istanbul in 5 Days (2026)", description: "5 plans, Grand Bazaar guide, Bosphorus routes." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/istanbul-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Istanbul in 5 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
      datePublished: "2026-04-04T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Istanbul 5 Days", item: "https://www.incredibleitinerary.com/blog/istanbul-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Istanbul, Turkey",
      description: "City spanning two continents with 1,500 years of Byzantine and Ottoman heritage, from Hagia Sophia to the Grand Bazaar.",
    },
  ],
};

export default function IstanbulPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
