import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Mekong Delta",
  country: "Vietnam",
  countryFlag: "🇻🇳",
  slug: "mekong-delta-3-days",
  heroQuery: "mekong delta vietnam floating market boat river",
  heroAlt: "Mekong Delta Vietnam floating market vendors selling from boats on the river at sunrise",
  category: "Southeast Asia",
  date: "April 5, 2026",
  readTime: "12 min read",
  intro: "The Mekong Delta at 5am — a speedboat cutting through mist toward Cai Rang floating market, vendors calling out from wooden boats hung with the day's produce, the river smelling of rain and river fish and woodsmoke — is one of the most authentically Vietnamese experiences left in the country. Three days gives you the floating market at its best (dawn, before the tourist armada arrives), a full day lost in Ben Tre's coconut country, and a slow afternoon in Can Tho before the bus north.",
  stats: { duration: "3 Days", budgetFrom: "$22", bestMonths: "Nov–Apr", airport: "SGN (Ho Chi Minh City, then 2–3h bus south)" },
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
        ["E-Visa Required", "India is on Vietnam's e-visa eligible list. Apply at evisa.xuatnhapcanh.gov.vn. Fee: $25 USD. Processing: 3 business days. Valid for 90 days, single or multiple entry — the multiple-entry option is worth the same price, always choose it."],
        ["On Arrival Alternative", "Some travellers still use visa-on-arrival via a letter of approval from a visa agency ($15–25) + $25 stamping fee at the airport. E-visa is cleaner and cheaper overall. Do not pay airport touts who approach you at SGN arrivals."],
        ["Key Documents", "Passport valid 6+ months beyond entry date, passport-quality photo, confirmed accommodation address for first night (Can Tho address is fine — hotel can provide booking confirmation), credit card or PayPal for e-visa payment."],
        ["Getting to the Delta", "From SGN (Tan Son Nhat Airport), take a Grab (Vietnam's Uber) to Mien Tay bus terminal ($5–8), then Phuong Trang/FUTA bus to Can Tho ($5, 2.5–3 hours, runs every 30 min). Skip the tourist minibuses — local buses are faster, cheaper, and go door-to-door."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["E-Visa Available", "US, UK, EU, Australian, Canadian, and most Western passport holders are eligible for the Vietnam e-visa ($25, 90 days, multiple entry). Apply online at the official portal — no embassy visit or agent needed. Processing takes 3 business days."],
        ["Visa-Free Access", "As of August 2023, Vietnam grants visa-free entry to citizens of France, Germany, Italy, Spain, UK (and several others) for stays up to 45 days. Check the current list at the Vietnam Immigration portal as the list has expanded recently."],
        ["ASEAN Connection", "If combining with Thailand, Cambodia, or Laos, Vietnam's e-visa makes multi-country Southeast Asia itineraries seamless. The Mekong Delta is a natural entry/exit point when crossing into Cambodia via Moc Bai or Ha Tien border crossings."],
        ["Health Notes", "No vaccinations required but recommended: Hepatitis A, Typhoid (water and food safety varies in rural delta areas). Bring a good mosquito repellent — DEET 30%+ recommended, especially near the waterways and rice paddies at dusk."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$22–40/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Can Tho + Ninh Kieu Wharf Evening",
          items: [
            "Arrive Can Tho by FUTA bus from Ho Chi Minh City (depart SGN area by 2–3pm, arrive 5–5:30pm). Book your Can Tho guesthouse in the Ninh Kieu district — budget options $10–20/night, most within walking distance of the pier.",
            "Check in and drop bags, then walk to Ninh Kieu Wharf (free) on the Can Tho River. At sunset, the riverside promenade fills with locals — families, couples, street food stalls selling bánh mì and freshly squeezed sugar cane juice ($0.50).",
            "Dinner at the Ninh Kieu Night Market ($1–3 per dish) — the wet market stalls serve elephant fish (cá tai tượng) deep-fried whole and morning glory stir-fried with garlic. Order by pointing. Total dinner budget: $3–6.",
            "Set your alarm for 4:15am. The single most important act of your Mekong Delta trip is leaving Can Tho pier by 4:30am to reach Cai Rang at first light. This is non-negotiable.",
            "Before bed: buy a bottle of water and some snacks at a convenience store near the market ($1) — you'll want them on the boat. Guesthouses can arrange a local boat for the morning ($8–12 per person for a shared boat), or you can negotiate at the pier yourself at 4:30am.",
          ],
          cost: "$15–25 total (bus + accommodation + dinner)",
        },
        {
          day: "Day 2",
          title: "Cai Rang Floating Market (5am) + Ben Tre Province",
          items: [
            "4:30am — Leave Can Tho pier. The 20-minute speedboat ride to Cai Rang in the dark with mist on the water is itself one of the great travel moments in Southeast Asia. Cost: $8–15 per person (local boat, negotiate the night before or at the pier).",
            "5:00–8:00am — Cai Rang Floating Market. Hundreds of wooden boats laden with watermelons, pineapples, durian, pomelos, ginger — all hung on poles at the bow (each boat advertises what it sells this way). Larger wholesale boats tether smaller retail boats alongside. Buy a coffee from the floating café boat ($0.50) and drift.",
            "Leave by 8am sharp — the tourist speedboats arrive at 8:30am and transform the market into chaos. The floating market is dying commercially (supermarkets, logistics), but it remains genuinely active at dawn because the wholesale trade still happens here.",
            "Return to Can Tho for breakfast: bún bò Huế or phở at a street stall near the market ($1.50). Check out and store bags at guesthouse.",
            "Take a local bus or mini-van to Ben Tre Province ($2, 45 minutes). The road crosses the My Thuan Bridge — the first bridge ever built across the Mekong main channel, opened 2000.",
            "Ben Tré afternoon: hire a local rowing boat for a 2-hour tour through the coconut palm-lined canals and mangroves ($15–20, negotiate at the pier or through your guesthouse). This — not the floating market — is the most peaceful hour in the Delta.",
            "Visit a coconut candy factory on the canal banks (free, the workers are used to visitors). Watch candy being made from coconut milk and sugar, rolled by hand. Buy a bag of candy for $1–2. Also visit a rice paper making village — thin rice paper dried on bamboo racks in the sun.",
            "Evening: Vinh Trang Pagoda (free entry, 5 minutes from Ben Tre town) — the most eclectic Buddhist temple in southern Vietnam, mixing French colonial architecture, Chinese ornamental detail, and Vietnamese Mahayana Buddhist iconography. The giant Buddha statues at the entrance are unmissable.",
            "Sleep in Ben Tre ($12–18/night) or return to Can Tho for the final day.",
          ],
          cost: "$20–35 total (boat + lunch + pagoda + guesthouse)",
        },
        {
          day: "Day 3",
          title: "Can Tho + Return to Ho Chi Minh City",
          items: [
            "Morning: return to Can Tho or start there if you stayed. Walk the Ninh Kieu riverside in the daytime — completely different atmosphere to the night before, with fishing boats unloading their catch at the wholesale fish market on the embankment.",
            "Can Tho Market (Chợ Cần Thơ): the covered wet market a block from the riverside. Buy Mekong Delta specialties to take home: dried shrimp ($2/bag), lotus seeds ($1.50), coconut sweets from Ben Tre ($1–2), fresh durian if it's in season ($1.50/kg).",
            "Lunch near the market: cơm tấm (broken rice with grilled pork, fried egg, pickled vegetables, $1.50–2.50) — this is southern Vietnam's most beloved lunch dish and the Can Tho version is exceptional.",
            "Optional: Bình Thủy Ancient House (free, 4km from center, Grab $1.50) — a 19th-century Vietnamese merchant's home preserved perfectly, used as a film location for L'Amant (The Lover, 1992). The French colonial-Vietnamese hybrid architecture is genuinely beautiful.",
            "Afternoon bus back to Ho Chi Minh City: FUTA/Phuong Trang from Can Tho bus terminal ($5, depart 2–3pm, arrive 5:30–6pm at Mien Tay terminal or direct to District 1).",
            "If flying home from SGN: the FUTA bus drops passengers near Pham Ngu Lao backpacker street — take a Grab to the airport ($6–10, 30 minutes outside peak hours, 60 minutes in traffic).",
          ],
          cost: "$10–20 total (market + lunch + bus + transfers)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$70–130/day",
      days: [
        {
          day: "Day 1",
          title: "Arrive Can Tho by Private Transfer + Riverside Hotel",
          items: [
            "Book a private car transfer from SGN to Can Tho ($60–80, 2.5 hours, door-to-door, comfortable). Worth it for groups of 2–3 — split the cost to $20–27/person.",
            "Stay at Victoria Can Tho Resort ($80–120/night) or Azerai Can Tho ($100–150/night) — both are on the Can Tho River with pools, river views, and their own boat docks for early morning departures to Cai Rang. The logistics of the 5am market trip become seamless when your hotel arranges the boat.",
            "Afternoon: check in, swim, settle in. Ask the hotel to arrange the Cai Rang boat for 4:30am departure — mid-range hotels typically have a private speedboat or a relationship with reliable local boatmen.",
            "Dinner at a riverside restaurant in Ninh Kieu district ($8–15 per person): try the grilled Mekong elephant fish (cá tai tượng), deep-fried soft-shell crab, and lotus stem salad. Pair with a cold Tiger or Saigon beer ($1).",
          ],
          cost: "$100–180 total (transfer + hotel + dinner)",
        },
        {
          day: "Day 2",
          title: "Private Cai Rang Tour + Ben Tre Day Trip",
          items: [
            "4:30am — Hotel private boat to Cai Rang. The mid-range advantage here is a better, faster boat and a guide who explains the wholesale system and can take you to the smaller side channels where the floating market is more intimate.",
            "Hire a half-day guide for the morning ($25–40) who speaks English and can translate vendor conversations — the floating market's human stories (vendors who've been on the river for 30+ years, family boats that sell the same fruit their grandparents grew) are what elevate the experience.",
            "Ben Tre afternoon: private car or hotel-arranged minivan ($15–25 for the vehicle) for a half-day Ben Tre tour — coconut candy factories, canal boat through narrow channels, lunch at a riverside restaurant ($6–10) serving freshly caught Mekong catfish.",
            "Visit Vinh Trang Pagoda with your guide for context on Vietnamese Buddhist practice — much richer with explanation. Stop at a local coconut wine distillery for a tasting ($2–3).",
            "Return to Can Tho for dinner: Spice Restaurant at Victoria Can Tho for elevated Vietnamese cuisine ($20–35/person) with river views.",
          ],
          cost: "$70–120 total (guide + transport + meals)",
        },
        {
          day: "Day 3",
          title: "Phong Dien Market + Return",
          items: [
            "7:00am — Phong Dien Floating Market, smaller than Cai Rang but often considered more authentic — fewer tour boats, more local produce buyers. 30-minute boat from Can Tho ($10–15). The market sells vegetables, fruit, and noodle soup from floating kitchen boats.",
            "Return to Can Tho for a proper breakfast at your hotel (included at most mid-range properties), then a morning walk through the city's old quarter — the streets behind Ninh Kieu Wharf have beautiful French colonial shophouses.",
            "Bình Thủy Ancient House visit ($3) and the nearby Thu Duc neighborhood for local coffee culture — Ca phe sua da (Vietnamese iced coffee with condensed milk, $1) at a local café on a plastic stool.",
            "Lunch: Book a river cruise lunch package ($15–25/person) — some operators run a 2-hour lunch cruise with traditional music performance on the river before you depart.",
            "Private car return to SGN ($60–80). Arrive in time for an early evening flight or dinner in Ho Chi Minh City.",
          ],
          cost: "$60–100 total (market + activities + transfer)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$250–600/day",
      days: [
        {
          day: "Day 1",
          title: "Helicopter or Private Car to Azerai Can Tho",
          items: [
            "Private helicopter transfer from SGN to Can Tho is available through select charter operators ($600–900 for the aircraft, 40 minutes vs 2.5h by road) — spectacular views of the delta's waterway network from above. Split 4 ways: $150–225/person.",
            "Azerai Can Tho ($200–350/night) or Victoria Can Tho's best river-view suite — both properties have private pools, spa facilities, and direct boat access. Check in, spa treatment, and a private welcome cocktail reception on the riverside terrace.",
            "Private evening boat cruise on the Can Tho River at sunset with a private guide and onboard catering — traditional Vietnamese appetizers, local wine and spirits, river sunset. Arranged through your hotel ($80–120 per couple).",
            "Dinner at Azerai's restaurant: modern Vietnamese tasting menu with Mekong Delta ingredients — river prawn, lotus root, water hyacinth, Mekong catfish. $40–60/person.",
          ],
          cost: "$350–600 total (transfer + hotel + experiences)",
        },
        {
          day: "Day 2",
          title: "Private Cai Rang at Dawn + Ben Tre by Private Boat",
          items: [
            "4:30am — Hotel's private speedboat (just your group) to Cai Rang with a senior guide. Arrive before any other tourists. The guide arranges permission to board wholesale boats — you see the behind-the-scenes operation most tourists never access.",
            "Full-day private Ben Tre exploration by private longtail boat (your own boat, your guide, your schedule, $150–200 for the day). Navigate narrow jungle canals, stop at a private family coconut farm for a cooking demonstration and lunch (prepared by the family, $25–35/person).",
            "Afternoon: traditional Mekong music performance (đờn ca tài tử) arranged at a riverside homestay — an hour of southern Vietnamese folk music in a garden setting, $30–50 for the private performance.",
            "Return to Can Tho by evening. Massage and spa treatment at your hotel ($40–80 for 90-minute treatment).",
          ],
          cost: "$250–400 total (private boat + cooking class + spa)",
        },
        {
          day: "Day 3",
          title: "Sunrise Photography Tour + Helicopter Return",
          items: [
            "5:30am — Private photography boat for golden-hour shots of the delta — your guide knows the best light positions along the river channels. Professional photographers sometimes base their entire Mekong trip around this dawn shoot.",
            "Return for a full hotel breakfast. Late morning checkout with luggage stored.",
            "Final Mekong morning: a slow coffee on the hotel terrace watching river traffic — cargo boats, fishing vessels, commuter ferries — before departure.",
            "Private luxury car return to SGN ($120–180 for a premium vehicle with professional driver) or helicopter return. Time the departure to avoid Ho Chi Minh City peak traffic (avoid 4–7pm).",
          ],
          cost: "$200–400 total (photography + transfer + farewell experiences)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$10–20", food: "$5–10", transport: "$3–8", activities: "$8–15", total: "$22–40/day" },
    { tier: "✨ Mid-Range", accommodation: "$30–70", food: "$15–30", transport: "$10–20", activities: "$15–30", total: "$70–130/day" },
    { tier: "💎 Luxury", accommodation: "$150–300", food: "$40–80", transport: "$50–150", activities: "$60–120", total: "$250–600/day" },
  ],
  mistakes: [
    {
      icon: "🚌",
      title: "Taking the Overnight Bus Instead of Staying",
      desc: "The most common Mekong Delta mistake: arriving by overnight bus from Ho Chi Minh City, spending one day on a group tour, and leaving the same evening. The floating market is at 5–8am. If you don't overnight in Can Tho, you cannot reach Cai Rang at dawn. Day-trippers who join the 8:30am tour boats arrive to find a market winding down, packed with other tourists. Stay at least one night in Can Tho — the economics of the overnight are completely different from a 12-hour day trip.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗺️",
      title: "Skipping Ben Tre and Just Doing Can Tho",
      desc: "Can Tho is the delta's main city, but Ben Tre Province is its soul. The coconut palm canal networks, narrow mangrove channels passable only by wooden rowing boat, the cottage industries of coconut candy and rice paper — this is what the Mekong looked like before roads connected everything. Most group tours skip Ben Tre because it requires half a day. This is exactly why it's worth the effort.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "💸",
      title: "Buying Expensive Pre-Packaged Tour Boat Trips",
      desc: "Tour operators in Ho Chi Minh City sell Mekong Delta day trips for $30–60 that include transport, guide, and boat — but the boats are large, the groups are 20+ people, and the itinerary stops at tourist-facing souvenir workshops. Local boats from Can Tho pier for the floating market cost $8–15 per person and you get a smaller, faster boat with better access. Arrange locally, not in advance from HCMC.",
      color: "bg-yellow-50 border-yellow-200",
    },
  ],
  tips: [
    {
      icon: "⏰",
      title: "Cai Rang Means 4:30am Departure from Can Tho",
      desc: "The floating market is 6km from Can Tho, 20 minutes by speedboat. The peak activity is 5:00–7:30am when wholesale transactions happen between boat-to-boat vendors. By 8am the market is commercial; by 9am it's tourist boats. Leave the Can Tho pier no later than 4:30am to arrive at first light. Your guesthouse or hotel can arrange the boat the night before — confirm the exact departure time, not 'early morning'.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚣",
      title: "Ben Tre Coconut Canals: Go by Rowing Boat, Not Motorboat",
      desc: "Ben Tre's narrowest canals — where the coconut palms form a canopy overhead and the silence is complete except for birdsong and water — are only accessible by manual rowing boat. A motorboat is faster but destroys the atmosphere and scares the birds. Ask specifically for a rowing boat (xuồng chèo). It costs the same and is a completely different experience. Allow 2 full hours minimum.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🍽️",
      title: "Eat at Local Markets, Not Tourist Restaurants Near the Pier",
      desc: "The best Mekong food costs $1–3 and is served from plastic stools in wet markets. Cá kho tộ (caramelised catfish in clay pot, $2), bún mắm (fermented fish noodle soup unique to the delta, $1.50), and lẩu mắm (fermented fish hot pot, $5 for two) are dishes you will not find this authentic outside the Mekong Delta. The tourist-facing restaurants near Ninh Kieu Wharf charge 3x the price for the same quality.",
      color: "bg-green-50 border-green-200",
    },
  ],
  faqs: [
    {
      q: "Can you do the Mekong Delta as a day trip from Ho Chi Minh City?",
      a: "Technically yes — Can Tho is 2.5–3 hours by bus each way, making a 12-hour day trip possible. But this is the wrong way to experience the Delta. The floating market (the entire reason to come) operates from 5–8am, which is only accessible if you overnight in Can Tho. Day-trippers arrive to a market that's winding down and packed with tourist boats. One night in Can Tho transforms the trip entirely — budget guesthouses cost $10–20/night.",
    },
    {
      q: "What is the best time of year to visit the Mekong Delta?",
      a: "November through April is the dry season and best time to visit. The delta is navigable year-round, but the rainy season (May–October) brings daily downpours, occasional flooding of lower-lying canals, and more intense mosquito activity. The floating market operates all year. February–March, just after Tet (Vietnamese Lunar New Year), the delta is particularly alive with festival activity.",
    },
    {
      q: "Do Indian passport holders need a visa for Vietnam?",
      a: "Yes. Indian passport holders need a Vietnam e-visa, available online at evisa.xuatnhapcanh.gov.vn. Cost: $25 USD. Processing time: 3 business days (apply at least a week before departure for safety). Valid for 90 days, choose multiple-entry even for a single trip. The e-visa is sufficient for all of Vietnam including the Mekong Delta — no additional permits required.",
    },
    {
      q: "Is the Mekong Delta floating market dying out?",
      a: "The floating markets are changing, not dying. The wholesale commercial function (boat-to-boat bulk trading of produce) still happens at Cai Rang every morning — this is why local farmers and traders still come at 5am. What has declined is the retail floating market (buying individual produce from boats). Supermarkets have replaced this for most locals. The market at dawn is still genuinely active and authentically commercial — just arrive early.",
    },
  ],
  combineWith: ["ho-chi-minh-city-3-days", "mui-ne-3-days", "phu-quoc-4-days"],
  relatedSlugs: ["angkor-wat-4-days", "bagan-4-days", "chiang-mai-4-days", "luang-prabang-4-days"],
  galleryQuery: "mekong delta vietnam floating market river canals boats",
};

export const metadata: Metadata = {
  title: "Mekong Delta in 3 Days: Floating Markets, River Villages & Can Tho (2026)",
  description: "3 complete Mekong Delta plans with Cai Rang floating market secrets, Ben Tre coconut canals, real USD costs, and how to see the delta before the tourist boats arrive.",
  keywords: ["mekong delta itinerary 3 days", "cai rang floating market", "can tho travel guide", "mekong delta vietnam 2026", "ben tre vietnam", "vietnam river delta travel"],
  openGraph: {
    title: "Mekong Delta in 3 Days: Floating Markets & River Villages (2026)",
    description: "Cai Rang at 5am, Ben Tre coconut canals, and real budget costs for the Mekong Delta.",
    images: [{ url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80", width: 1200, height: 630, alt: "Mekong Delta Vietnam floating market boats river" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Mekong Delta in 3 Days (2026)", description: "Floating markets, river canals, and $22/day budget breakdown." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/mekong-delta-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Mekong Delta in 3 Days: Floating Markets, River Villages & Can Tho (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
      description: "3 complete Mekong Delta plans with Cai Rang floating market secrets, Ben Tre coconut canals, and real USD costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Mekong Delta 3 Days", item: "https://www.incredibleitinerary.com/blog/mekong-delta-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Mekong Delta, Vietnam",
      geo: { "@type": "GeoCoordinates", latitude: 10.0452, longitude: 105.7469 },
      description: "The Mekong Delta is the southernmost region of Vietnam, a vast network of rivers, swamps and islands where the Mekong River approaches its end, famous for floating markets and river villages.",
      touristType: ["Adventure tourists", "Cultural tourists", "Photography enthusiasts", "Food lovers"],
    },
  ],
};

export default function MekongDeltaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
