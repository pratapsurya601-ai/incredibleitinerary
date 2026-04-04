import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Ho Chi Minh City",
  country: "Vietnam",
  countryFlag: "🇻🇳",
  slug: "ho-chi-minh-city-3-days",
  heroQuery: "ho chi minh city saigon skyline vietnam street",
  heroAlt: "Ho Chi Minh City Saigon skyline Vietnam",
  category: "Southeast Asia",
  date: "April 4, 2026",
  readTime: "12 min read",
  intro: "Saigon never sleeps — Cu Chi Tunnels underground where Viet Cong survived years of bombing, War Remnants Museum that leaves you speechless, Ben Thanh Market chaos, and a banh mi from the cart on the same corner for 30 years.",
  stats: {
    duration: "3 Days",
    budgetFrom: "₫400,000",
    bestMonths: "Dec – Apr",
    airport: "SGN (Tan Son Nhat)",
  },
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
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["E-Visa", "Apply at evisa.xuatnhapcanh.gov.vn — 90-day validity, $25 USD. Processed in 3 working days."],
        ["Visa on Arrival", "Requires pre-approval letter. Pay $25 stamping fee on arrival at SGN airport."],
        ["Documents", "Passport valid 6+ months, return ticket, hotel booking, 2 passport photos."],
        ["Duration", "30-day tourist stay, extendable at immigration office on Tran Hung Dao Street."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free", "UK, France, Germany, Spain, Italy get 45 days visa-free. Check your country's specific entitlement."],
        ["E-Visa", "USA, Canada, Australia — E-Visa via official portal, $25 USD, valid 90 days."],
        ["Extension", "Immigration office at 254 Nguyen Trai Street, District 1 handles extensions."],
        ["Tip", "Ho Chi Minh City has better visa extension services than Hanoi — less queuing."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₫400,000–750,000/day (~$16–30)",
      days: [
        {
          day: "Day 1",
          title: "War History & Ben Thanh Market",
          items: [
            "8:00am — Banh mi from Huynh Hoa on Le Thi Rieng Street — best in the city, ₫40,000",
            "9:30am — War Remnants Museum (₫40,000) — essential, emotional, 2-hour visit minimum",
            "12:00pm — Com tam (broken rice) lunch at local eatery, ₫60,000",
            "2:00pm — Ben Thanh Market — browse, not for buying. Better prices on Binh Tay Market in Cholon",
            "4:00pm — Reunification Palace (₫40,000) — the building where the Vietnam War officially ended",
            "6:00pm — Notre-Dame Cathedral exterior (free) + Central Post Office interior (free)",
            "8:00pm — Bui Vien Walking Street for cheap beer (₫15,000) and lively atmosphere",
          ],
          cost: "₫400,000–500,000 total",
        },
        {
          day: "Day 2",
          title: "Cu Chi Tunnels Day Trip",
          items: [
            "7:00am — Early start. Shared bus to Cu Chi Tunnels departs from De Tham Street, ₫120,000 round trip",
            "10:00am — Cu Chi Tunnels (₫110,000 entry) — crawl through 1km of actual tunnels, see booby traps, shooting range",
            "1:00pm — Lunch at the tunnels restaurant — overpriced but only option, ₫150,000",
            "3:30pm — Return to city. Visit Jade Emperor Pagoda (free) in District 3 on the way back",
            "7:00pm — Pho 24 or local pho shop for dinner, ₫70,000",
            "8:30pm — Rooftop bar at a budget hotel in Bui Vien area for city views",
          ],
          cost: "₫550,000–700,000 total",
        },
        {
          day: "Day 3",
          title: "Cholon Chinatown & Mekong Delta",
          items: [
            "Option A: Mekong Delta day trip (₫350,000 shared tour from De Tham) — boat through delta, coconut candy factory, rowing sampan",
            "Option B: Cholon (Chinatown) self-guided — Thien Hau Temple (free), Binh Tay Market (better than Ben Thanh), dim sum breakfast at ₫80,000",
            "Afternoon: Vinhomes Central Park riverfront walk, free",
            "Evening: Last dinner at Quan Bui — Vietnamese comfort food, ₫120,000",
          ],
          cost: "₫450,000–650,000 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₫1,200,000–2,000,000/day (~$48–80)",
      days: [
        {
          day: "Day 1",
          title: "Historical District & Rooftop Bars",
          items: [
            "9:00am — Brunch at L'Usine District 1 — French-Vietnamese, ₫250,000",
            "11:00am — War Remnants Museum with context (audio guide available)",
            "1:30pm — Lunch at Propaganda Bistro — Vietnamese propaganda art + modern cuisine",
            "3:30pm — Reunification Palace tour + French colonial architecture walk",
            "6:30pm — Sundowner at Chill Skybar (Level 26, AB Tower) — city panorama",
            "8:00pm — Dinner at Nha Hang Ngon — traditional Vietnamese in a colonial villa garden",
          ],
          cost: "₫1,500,000–2,000,000 total",
        },
        {
          day: "Day 2",
          title: "Cu Chi Private Tour & River Dinner",
          items: [
            "7:30am — Private car + guide to Cu Chi Tunnels (₫1,500,000 for car, guide extra)",
            "Full Cu Chi experience with historical context from expert guide",
            "1:30pm — Lunch at authentic local restaurant near tunnels",
            "4:00pm — Return via Cu Chi town's local market",
            "7:30pm — Dinner cruise on Saigon River — ₫800,000 per person including food",
          ],
          cost: "₫1,800,000–2,500,000 total",
        },
        {
          day: "Day 3",
          title: "Mekong Delta Private Day",
          items: [
            "7:00am — Private Mekong Delta tour — My Tho and Ben Tre provinces (₫2,000,000 per car)",
            "Rowing boat through narrow canals, coconut candy factory, honey bee farm, fruit orchards",
            "Lunch at local homestay with authentic Mekong dishes",
            "5:00pm — Return to city. Evening at Thao Cam Vien (botanical garden)",
            "Farewell dinner at The Deck Saigon — riverside fine dining",
          ],
          cost: "₫2,000,000–3,000,000 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₫5,000,000+/day (~$200+)",
      days: [
        {
          day: "Day 1",
          title: "Arrival & French Colonial Luxury",
          items: [
            "Check in to Park Hyatt Saigon or Hotel des Arts — central District 1",
            "Afternoon: Private guided District 1 historical walk with expert guide",
            "Cocktails at The Rooftop Bar, Park Hyatt — panoramic city views",
            "Dinner at Nhau Nhau — creative Vietnamese tasting menu",
          ],
          cost: "₫8,000,000–12,000,000 total",
        },
        {
          day: "Day 2",
          title: "Private Cu Chi + Helicopter Option",
          items: [
            "Private luxury car + historian guide to Cu Chi Tunnels",
            "Exclusive underground tour with the full historical narrative",
            "Helicopter return to city (optional, seasonal, contact Vasco's Air for booking)",
            "Afternoon spa at Park Hyatt (₫3,000,000 for 90 min signature treatment)",
            "Dinner at Noir — dining in complete darkness, unique HCMC experience",
          ],
          cost: "₫10,000,000–18,000,000 total",
        },
        {
          day: "Day 3",
          title: "Mekong by Speedboat & Farewell",
          items: [
            "Private speedboat Mekong Delta excursion (₫5,000,000+ private boat charter)",
            "Exclusive floating market visit at Cai Rang",
            "Private homestay lunch with cooking demonstration",
            "Return by 4pm. High tea at La Patisserie, Park Hyatt",
            "Farewell dinner at Xu Restaurant — contemporary Vietnamese cuisine",
          ],
          cost: "₫10,000,000–15,000,000 total",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "₫250,000–400,000", food: "₫100,000–200,000", transport: "₫80,000–150,000", activities: "₫50,000–150,000", total: "₫480,000–900,000" },
    { tier: "✨ Mid-Range", accommodation: "₫700,000–1,200,000", food: "₫300,000–600,000", transport: "₫200,000–400,000", activities: "₫200,000–400,000", total: "₫1,400,000–2,600,000" },
    { tier: "💎 Luxury", accommodation: "₫3,000,000–8,000,000", food: "₫1,000,000–3,000,000", transport: "₫500,000–2,000,000", activities: "₫1,000,000–3,000,000", total: "₫5,500,000–16,000,000" },
  ],
  mistakes: [
    { icon: "🚖", title: "Taking Unmarked Taxis from Airport", desc: "SGN airport has many scam taxis. Only use Vinasun (green) or Mai Linh (green) metered taxis, or book Grab before landing. Confirm the meter is running before moving.", color: "bg-red-50 border-red-200" },
    { icon: "🌡️", title: "Visiting in Peak Summer Heat", desc: "April–May is brutally hot (35–40°C). The best time is December–March (dry season, 25–32°C). If visiting in summer, plan outdoor activities before 10am and after 4pm.", color: "bg-orange-50 border-orange-200" },
    { icon: "🎒", title: "Doing Cu Chi Tunnels with a Group Tour", desc: "Group tours rush through in 2 hours. A private guide lets you spend 4+ hours, crawl through all tunnel sections, and understand the full historical context — worth the extra cost.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "💱", title: "Exchanging Currency at the Hotel", desc: "Hotel exchange rates are 5–10% worse than local banks. Use Techcombank or BIDV ATMs for best rates. Vietcombank at the airport is acceptable in emergencies.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🥖", title: "The Best Banh Mi in the World is Here", desc: "Banh Mi Huynh Hoa on Le Thi Rieng Street — locals queue for 20 minutes for these overstuffed French baguettes. Go at 7am to avoid the queue. ₫40,000 and worth every dong.", color: "bg-amber-50 border-amber-200" },
    { icon: "🛺", title: "Motorbike Tours After Dark", desc: "Vespa tours and motorbike food tours after dark are the best way to see the real HCMC — you visit street food stalls, local spots, and places no tourist bus goes. Book via Vespa Adventures.", color: "bg-teal-50 border-teal-200" },
    { icon: "🏛️", title: "War Remnants Museum: Go First Thing", desc: "The museum is emotionally heavy. Go on your first morning when you have full mental bandwidth, not after a day of walking. Allow 2–3 hours and take breaks.", color: "bg-green-50 border-green-200" },
    { icon: "🌙", title: "Bui Vien Street is Overrated — Try This Instead", desc: "Bui Vien Walking Street is tourist-heavy. For authentic nightlife, go to 3/2 Street in District 10 or Phan Xich Long in Phu Nhuan District — where locals actually drink.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "How many days do I need in Ho Chi Minh City?", a: "3 days covers the city highlights (War Museum, Reunification Palace, Ben Thanh, Notre Dame) plus a day trip to Cu Chi Tunnels. 4–5 days lets you add the Mekong Delta. 2 days is too rushed." },
    { q: "Is it safe to eat street food in Ho Chi Minh City?", a: "Yes — street food is generally safe if the stall is busy and the food is freshly cooked. Avoid pre-cooked items sitting at room temperature. Banh mi, pho, and com tam stalls are safest for sensitive stomachs." },
    { q: "What's the difference between Ben Thanh and Binh Tay Market?", a: "Ben Thanh (District 1) is the touristy market with fixed tourist prices. Binh Tay in Cholon (Chinatown, District 5) is the real wholesale market where locals shop — better prices and more authentic." },
    { q: "How far is Cu Chi Tunnels from HCMC?", a: "About 70km northwest, taking 1.5–2 hours by car. Shared bus tours leave from the backpacker district and take 2.5 hours. A private car is faster and more flexible — costs ₫1,000,000–1,500,000 round trip." },
    { q: "What currency should I use in HCMC?", a: "Vietnamese Dong (VND) is always better than USD at local stalls and markets. USD is widely accepted at hotels and upscale restaurants, but you'll always get more value paying in VND." },
  ],
  combineWith: ["hanoi-3-days", "ha-long-bay-3-days", "bangkok-4-days"],
  relatedSlugs: ["hanoi-3-days", "ha-long-bay-3-days", "bangkok-4-days", "singapore-3-days"],
  galleryQuery: "ho chi minh city saigon vietnam street food market",
};

export const metadata: Metadata = {
  title: "Ho Chi Minh City in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)",
  description: "3 complete Ho Chi Minh City plans with real timings, VND costs, Cu Chi Tunnels guide, street food trail and the mistakes every first-timer makes in Saigon.",
  keywords: ["ho chi minh city itinerary", "saigon travel guide 2026", "cu chi tunnels guide", "ho chi minh city budget travel", "vietnam travel"],
  openGraph: { title: "Ho Chi Minh City in 3 Days: Budget to Luxury 2026", description: "Real timings, VND costs, Cu Chi Tunnels guide.", images: [{ url: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80", width: 1200, height: 630, alt: "Ho Chi Minh City skyline Vietnam" }], type: "article" },
  twitter: { card: "summary_large_image", title: "Ho Chi Minh City in 3 Days (2026)", description: "3 plans, real costs in VND, Cu Chi Tunnels guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/ho-chi-minh-city-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Ho Chi Minh City in 3 Days: Complete Itinerary Guide (Budget to Luxury, 2026)", datePublished: "2026-04-04T00:00:00Z", author: { "@type": "Organization", name: "IncredibleItinerary" } },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" }, { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" }, { "@type": "ListItem", position: 3, name: "Ho Chi Minh City", item: "https://www.incredibleitinerary.com/blog/ho-chi-minh-city-3-days" }] },
    { "@type": "TouristDestination", name: "Ho Chi Minh City, Vietnam", description: "Vietnam's largest city and economic hub, known as Saigon, with French colonial architecture, Cu Chi Tunnels, and world-famous street food." },
  ],
};

export default function HCMCPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
