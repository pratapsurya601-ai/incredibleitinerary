import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Tanzania + Zanzibar",
  country: "Tanzania",
  countryFlag: "🇹🇿",
  slug: "tanzania-zanzibar-7-days",
  heroQuery: "zanzibar beach tanzania white sand turquoise indian ocean",
  heroAlt: "Zanzibar white sand beach turquoise Indian Ocean Tanzania Africa",
  category: "Africa",
  date: "April 5, 2026",
  readTime: "18 min read",
  intro: "Seven days in Tanzania is a rare combination that few destinations on Earth can replicate: three nights on an open-top safari vehicle in the Serengeti watching the Big 5 against an endless savannah horizon, an afternoon peering down into Ngorongoro Crater — the world's largest intact caldera packed with 25,000 animals — and then three nights on Zanzibar, where dhow boats drift past powder-white beaches and the air smells of cloves and cardamom. This is one of the great one-two punches of world travel.",
  stats: {
    duration: "7 Days",
    budgetFrom: "$80",
    bestMonths: "Jun–Oct, Jan–Feb (dry)",
    airport: "JRO (Kilimanjaro) or DAR (Dar es Salaam)",
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
        ["Visa on Arrival", "Indian passport holders receive a visa on arrival at Kilimanjaro (JRO) and Dar es Salaam (DAR) international airports. Fee: $50 USD, paid in cash. Single-entry, valid 90 days. You will need a completed arrival form, passport valid 6+ months, return flight ticket, and proof of accommodation."],
        ["Yellow Fever", "Tanzania requires a Yellow Fever vaccination certificate if you are arriving from a Yellow Fever endemic country. India is not on the list, so most Indian travelers are exempt — but check the official Tanzania immigration portal before flying as the list can change. Carry your International Certificate of Vaccination (yellow booklet) regardless."],
        ["Malaria Precautions", "Tanzania is a malaria zone including the coast and Zanzibar. Consult your doctor before travel for antimalarial medication (doxycycline or Malarone). Pack DEET-based repellent (50%+). Most lodges in Serengeti and Zanzibar provide mosquito nets — use them every night."],
        ["Zanzibar Entry", "Zanzibar is a semi-autonomous island within Tanzania. If flying directly to Zanzibar (ZNZ) from outside Tanzania, you clear immigration at Zanzibar airport. Your Tanzania visa covers both mainland and Zanzibar — you do not need a separate permit. Carry your yellow fever certificate as it may be checked again."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa on Arrival", "USA, UK, Canada, Australia, and most EU passport holders receive a visa on arrival at Tanzanian airports. Fee: $50 USD cash. Single-entry 90-day stay. Multiple-entry visas ($100) available for those combining Tanzania with Kenya or Uganda and re-entering."],
        ["EAC Tourist Visa", "The East Africa Tourist Visa ($100, triple-entry) covers Kenya, Uganda, and Rwanda in a single permit — Tanzania is not part of this scheme but is considering joining. If combining East African countries, check current status as it may have changed."],
        ["Yellow Fever Note", "If arriving from Brazil, Peru, or equatorial Africa — countries on Tanzania's Yellow Fever risk list — your Yellow Fever vaccination certificate is a legal entry requirement, not a suggestion. Officers at Kilimanjaro Airport routinely check. Travelers without certificates have been denied entry and held for on-site vaccination."],
        ["Health Insurance", "Tanzania has limited medical infrastructure outside Dar es Salaam and Arusha. Comprehensive travel insurance with medical evacuation cover is strongly recommended — evacuation flights from the Serengeti to Nairobi can cost $15,000–30,000 without insurance. World Nomads and SafetyWing are popular options."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$80–130/day",
      days: [
        {
          day: "Day 1",
          title: "Arusha Arrival & Cultural Orientation",
          items: [
            "Arrive at Kilimanjaro International Airport (JRO). Visa on arrival at the airport immigration desk — $50 cash, queues move reasonably fast. Arusha town is 45 minutes from the airport by shared taxi ($5) or private transfer ($20).",
            "Check in to Arusha Backpackers ($15–25/night, highly rated, central location, excellent safari booking notice board). Dorm beds from $12, private rooms from $22.",
            "Afternoon: Arusha Cultural Heritage Centre (free to browse, a huge curio and art complex) — good for understanding Maasai and Chagga cultural objects, even if you don't buy anything.",
            "Late afternoon: Arrange your camping safari departure for tomorrow morning through operators on the backpacker notice board or in person on India Street. Budget camping safari operators: Shah Tours, Sunny Safaris, Transcape Tours — prices $150–250/day all-inclusive (park fees, meals, vehicle, crew). Verify park fees are included: Serengeti is $70/person/day, Ngorongoro Crater is $70 entry + $60 crater fee.",
            "Evening: Dinner at a local Tanzanian restaurant near the Arusha bus station — nyama choma (grilled meat) with ugali and sukuma wiki (collard greens), $3–6. Kilimanjaro Lager or Konyagi gin for under $2.",
          ],
          cost: "$25–40 total",
        },
        {
          day: "Day 2–3",
          title: "Serengeti National Park Safari",
          items: [
            "5:30am departure from Arusha. Budget safari in a 4WD Land Cruiser with a pop-up roof. Drive 6–7 hours to the Serengeti via the Ngorongoro Conservation Area — stop at Olduvai Gorge viewpoint en route if your operator includes it.",
            "Serengeti National Park entry: $70/person/day. The southern Serengeti (Ndutu area) hosts the wildebeest calving season January–March. The central Serengeti (Seronera) is the classic Big 5 area year-round. The northern Serengeti (Kogatende) sees the Mara River wildebeest crossings July–October.",
            "Afternoon game drive: Big 5 sightings are realistic every day in Serengeti. Lions are frequently visible from the vehicle — prides rest in kopjes (granite rock outcrops). Cheetahs are most active at dawn and dusk. Leopards in riverine trees near Seronera River.",
            "Night in a budget camping site inside Serengeti ($10–15/night pp, or included in all-in safari rate). Tented camps include basic meals, flush toilets at the public campsite, and the sounds of hyenas and lions outside the camp perimeter — entirely normal and safe inside the tent.",
            "Day 3: Full game drive starting at 6am for the best wildlife activity. Watch for the Great Migration if visiting December–July (wildebeest and zebra columns across the plains). African wild dogs are the rarest sighting — spotted occasionally in the Serengeti's western corridor.",
            "Sunset game drive: Acacia tree silhouettes against orange sky are among the most photographed images in Africa. Budget cameras capture it; no professional lens required.",
          ],
          cost: "$150–200/day all-inclusive safari rate (park fees + meals + vehicle)",
        },
        {
          day: "Day 4",
          title: "Ngorongoro Crater — World's Best Single Game Drive",
          items: [
            "Early departure from Serengeti camp. Drive to Ngorongoro Crater rim (2,300m elevation) — the air is noticeably cooler and the views down into the 20km-wide caldera are staggering.",
            "Ngorongoro Crater entry: $70/person entry + $60/vehicle crater fee (most budget safaris include this in their all-in rate — confirm before booking).",
            "Descend into the crater via a single steep access road. Inside: 25,000 large mammals in a self-contained ecosystem — lions, elephants, buffalo, zebra, wildebeest, hippos in the crater lake, flamingos on the alkaline lake margins, hyenas, jackals, warthogs.",
            "Black rhino: Ngorongoro has one of the few remaining populations of black rhinoceros in Tanzania — roughly 20–25 individuals. Your guide will know their current territory. Sighting is not guaranteed but the probability in Ngorongoro is higher than anywhere else in the country.",
            "Picnic lunch at the designated area near the hippo pool — hippos visible from 10 meters as they wallow at the water's edge.",
            "Optional: Olduvai Gorge archaeological site on the crater rim road ($30 entry) — where Louis and Mary Leakey discovered Homo habilis fossils in the 1960s, some of the earliest evidence of human ancestors. The on-site museum is genuinely excellent for 45 minutes.",
            "Drive to Arusha or continue directly to Kilimanjaro Airport for your flight to Zanzibar. Coastal Aviation and Auric Air fly Arusha–Zanzibar, roughly $150–250, 1.5 hours.",
          ],
          cost: "$40–60 (day costs, safari rate covers the Ngorongoro fees)",
        },
        {
          day: "Day 5",
          title: "Zanzibar: Stone Town UNESCO World Heritage",
          items: [
            "Arrive Zanzibar (ZNZ airport, south of Stone Town). Shared taxi to Stone Town $3–5, private taxi $10–15.",
            "Check in to a budget guesthouse in Stone Town ($25–50/night) — the labyrinthine old town is the best base for Day 5. Recommended: Zanzibar Coffee House, Karibu Inn, Stone Town Cafe & Rooms.",
            "Afternoon: Stone Town self-guided walk. The African House Hotel (former British Club, now a hotel with a famous rooftop bar) and Beit El-Ajaib (House of Wonders, the largest building in 19th-century Zanzibar — check restoration status). The narrow alleys of the old town are designed to trap the sea breeze — genuinely beautiful urban fabric.",
            "Slave Chamber Memorial: the site of the last slave market in East Africa, closed in 1873 by the British. Free to visit. Underground chambers where enslaved people were held before auction are preserved as a memorial. The Anglican Cathedral built above the market site is nearby.",
            "Darajani Market: Zanzibar's main covered market. Fish section, vegetable section, spice section. Best visited 7–10am for full activity. Buy fresh sugarcane juice for $0.30.",
            "Evening: Forodhani Gardens waterfront night market. Dozens of stalls set up at sunset selling Zanzibar mix (fried cassava and potato with chutney, $0.50), Zanzibar pizza (stuffed flatbread, $1–2), fresh grilled seafood by weight ($3–8), and fresh sugar cane juice. The most atmospheric $5 dinner in East Africa.",
          ],
          cost: "$30–50 total",
        },
        {
          day: "Day 6",
          title: "Zanzibar: Spice Tour & Nungwi Beach",
          items: [
            "Morning: Zanzibar spice tour ($20–30 including transport, 3 hours). Visit a working spice farm and identify vanilla pods, clove trees, cinnamon bark, cardamom, black pepper, lemongrass, and turmeric growing in their natural environment. The guide will crack open a jackfruit and hand out slices. Book through your guesthouse — most standard tours are excellent value.",
            "Afternoon: Travel north to Nungwi Beach (45 min by dala-dala shared minibus, $1.50 or private taxi $15). Nungwi and adjacent Kendwa Beach are the best beaches on Zanzibar for swimming at any time of day — the north coast has minimal tidal variation, so the water is always accessible unlike the southeast coast which can expose coral flats at low tide.",
            "Swim in clear turquoise water, $0. Rent a sunbed at a beach bar, $5 including one drink. Fresh grilled lobster on the beach, $12–20 depending on size.",
            "Optional: Prison Island boat trip from Nungwi or Stone Town ($20–25 including boat and entry). Changu Island (Prison Island) has a colony of giant Aldabra tortoises, some over 100 years old. Snorkeling around the island included in some trip packages.",
            "Evening: Sunset at Nungwi Beach — the west-facing shore means direct sunset over the Indian Ocean. Unfiltered, unhurried, extraordinary.",
          ],
          cost: "$40–70 total",
        },
        {
          day: "Day 7",
          title: "Snorkeling Mnemba Atoll & Departure",
          items: [
            "Morning: Mnemba Atoll day trip ($50–70 from Nungwi or Matemwe) — the best snorkeling in Zanzibar, protected by a private island. Sea turtles are regularly seen at the atoll. Reef fish: parrotfish, angelfish, clownfish, hawksbill turtles, dolphins in the surrounding channels.",
            "Alternatively: Jambiani or Paje Beach on the southeast coast for kitesurfing ($60/day for beginner lesson + equipment) — these beaches have consistent southeast trade winds making them world-class kite spots.",
            "Afternoon: Return to Stone Town for final shopping — cloves, vanilla pods, Zanzibar coffee, kangas (colorful printed cloth), Tingatinga paintings. The shops around the Darajani Market have better prices than the tourist craft stalls.",
            "Evening: Sundowner at The Old Fort (Ngome Kongwe) in Stone Town — free to enter, occasional live taarab music performances. The fort dates to 1699 (Omani Arab construction over a Portuguese chapel). Sit on the fort walls and watch the dhows coming in with the evening tide.",
            "Depart from Zanzibar Airport or arrange onward connection. Overnight flights from Zanzibar via Dar es Salaam to international hubs available on Kenya Airways, Ethiopian Airlines, and Qatar Airways.",
          ],
          cost: "$60–90 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$200–400/day",
      days: [
        {
          day: "Day 1",
          title: "Arusha & Arusha National Park Half-Day",
          items: [
            "Arrive JRO. Private transfer to Arusha ($40–60). Check in to a mid-range hotel: Arusha Hotel (central, historic, $80–140/night), Kibo Palace Hotel ($100–180/night), or Mount Meru Hotel with Kilimanjaro view rooms ($90–150/night).",
            "Afternoon: Arusha National Park half-day game drive ($50/person entry, 2-3 hours, the park is only 30 minutes from the Arusha city center). Giraffe, buffalo, colobus monkeys, flamingos on Momella Lakes, warthogs, zebras — a genuinely good game drive at a fraction of Serengeti costs. Mount Meru (4,566m, Africa's 5th highest peak) views from the park.",
            "Evening: Dinner at The Arusha Coffee Lodge restaurant — excellent farm-to-table Tanzanian food using local produce. Tilapia fillet with coconut rice, $15–25. Kilimanjaro craft beer on tap.",
          ],
          cost: "$120–180 total",
        },
        {
          day: "Day 2–3",
          title: "Serengeti — Mid-Range Tented Camp",
          items: [
            "Fly from Arusha Airstrip to Seronera or Kogatende (Grumeti) airstrip via Coastal Aviation — 1 hour, $180–250 one way. Flying avoids the 7-hour road journey and is strongly recommended for mid-range travelers.",
            "Check in to a mid-range permanent tented camp: Serengeti Serena Safari Lodge ($250–450/night full board), Ikoma Wild Camp ($180–280/night), or Four Seasons Safari Lodge (higher-end, $700–1200/night all-inclusive). All camps include morning and afternoon game drives.",
            "Serengeti game drives with a professional guide (included in camp rate): predator tracking, Big 5 sightings, bird watching (500+ species). The guides at mid-range camps are highly knowledgeable and communicate via radio network to share sighting locations.",
            "Sunrise game drive on Day 3: leave camp at 5:30am. Lions are most active at dawn — hunting, cub play, morning movement before the heat. Elephants at the Seronera River. Serengeti dawn light for photography is extraordinary.",
            "Sundowner in the bush: your guide will set up drinks on a kopje at sunset — a private bush bar with the Serengeti horizon extending 360 degrees around you. Standard service at mid-range camps.",
          ],
          cost: "$280–450/day (full-board lodge rate)",
        },
        {
          day: "Day 4",
          title: "Ngorongoro Crater with Expert Guide",
          items: [
            "Morning fly-out or drive from Serengeti to Ngorongoro. Fly-in option: charter flight to Manyara Airstrip ($200–350) then short drive to crater rim.",
            "Stay at Ngorongoro Serena Safari Lodge ($250–450/night, perched on the crater rim with views across the caldera) or Ngorongoro Wildlife Lodge (similar price, similar location).",
            "Full-day crater drive with your expert guide: arrive at crater floor at 7am for the best predator activity. A full game drive circuit takes 5–6 hours covering the crater lake (hippos, flamingos), the salt lick area (elephants, rhino territory), the Lerai Forest (lion prides, colobus monkeys), and the crater floor open grasslands (cheetah territory).",
            "Black rhino sighting: your guide will contact park rangers for current rhino location. These are critically endangered animals — if a sighting happens, it's a genuine privilege.",
            "Afternoon: Ngorongoro Conservation Area archaeological walk or guided Maasai village visit ($30–50, organized through your lodge). The Maasai have lived in the Ngorongoro Conservation Area (but not the crater floor) since the 1950s.",
          ],
          cost: "$350–500 total",
        },
        {
          day: "Day 5",
          title: "Zanzibar: Stone Town & Forodhani",
          items: [
            "Fly from Kilimanjaro or Manyara to Zanzibar via Coastal Aviation ($150–250). Check in to a mid-range Stone Town hotel: Zanzibar Serena Hotel ($150–280/night, converted 19th-century cable house on the seafront), Emerson Spice Hotel ($180–300/night, rooftop restaurant with best view in Stone Town), or Park Hyatt Zanzibar ($250–400/night, contemporary design adjacent to Old Fort).",
            "Private guided Stone Town walk (2.5 hours, $50–80 with a knowledgeable local guide): the history of Arab, Indian, African, and European influences layered in the architecture. The famous carved wooden doors of Stone Town (over 560 documented) tell social status through their ornamentation — Indian doorframes have detailed carvings, Omani Arab doorframes have simple geometric patterns.",
            "Late afternoon: Sunset dhow cruise from Stone Town harbor ($25–40/person, includes drink). Traditional wooden dhows sail past the Zanzibar waterfront as the sky turns orange — one of the most photographed moments in East Africa.",
            "Evening: Dinner at The Rock Restaurant (reachable by boat at high tide, $40–60/person) or Emerson Spice rooftop dinner with live taarab music performance.",
          ],
          cost: "$200–320 total",
        },
        {
          day: "Day 6",
          title: "Spice Tour, Nungwi & Kendwa Beach",
          items: [
            "Morning: Private spice tour ($60–80 including transport and expert guide, 4 hours) — more in-depth than the budget group tours, including a cooking demonstration using fresh spices from the farm.",
            "Afternoon: Nungwi Beach resort day — check in to a mid-range beach hotel (Z Hotel Zanzibar, $150–280/night; Essque Zalu, $300–500/night) or simply book a day pass at a resort pool ($30–50 including towel and sun lounger service).",
            "Sunset yoga on the beach or sunset sailing trip on a traditional outrigger boat ($30–40/person, 1.5 hours).",
            "Dinner at Langi Langi Beach Bungalows or Nungwi Inn beachfront restaurant — fresh grilled kingfish, Zanzibar lobster, and cold Kilimanjaro beer as the stars emerge over the Indian Ocean.",
          ],
          cost: "$150–250 total",
        },
        {
          day: "Day 7",
          title: "Mnemba Atoll Snorkeling & Farewell Stone Town",
          items: [
            "Morning: Mnemba Atoll private snorkeling trip ($80–120/person, including snorkeling equipment, guide, and light lunch on the boat). The atoll is a marine protected area and one of the Indian Ocean's best snorkeling destinations — hawksbill sea turtles, reef sharks, thousands of reef fish in clear 25-meter visibility water.",
            "Afternoon: Return to Stone Town for final Stone Town market shopping and a professional spice tasting at a spice shop (Zanzibar's export cloves, vanilla, and black pepper are genuine world quality — far better than supermarket spices at home).",
            "Farewell sundowner: rooftop bar at Africa House Hotel (the most famous sundowner spot in Zanzibar, classic veranda overlooking the dhow harbor), or the Old Fort terrace with a cold Zanzibar gin and tonic.",
            "Transfer to Zanzibar Airport for your onward flight.",
          ],
          cost: "$100–180 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$600–2,500+/day",
      days: [
        {
          day: "Day 1",
          title: "Arusha Arrival & Private Sunset Drive",
          items: [
            "Private aviation charter from Nairobi Wilson or direct international flight to JRO. Luxury transfer to Arusha Coffee Lodge ($300–500/night, working coffee estate, the finest small lodge in Arusha) or Legendary Lodge ($250–450/night, colonial farm estate on the slopes of Mount Meru).",
            "Private afternoon game drive in Arusha National Park with a specialist guide ($150–200 for private vehicle + guide). The park's colobus monkey troops, Momella Lakes flamingos, and Mount Meru views at golden hour in a private vehicle — no other vehicles, no crowds.",
            "Dinner at your lodge — farm-to-table Tanzanian cuisine using ingredients grown on-site. Paired wine list. Candlelit private dining on the lodge terrace.",
          ],
          cost: "$500–800 total (excl. lodge)",
        },
        {
          day: "Day 2–3",
          title: "Serengeti — Singita or &Beyond",
          items: [
            "Private charter flight from Arusha to Serengeti ($400–600/person). Check in to Singita Grumeti ($1,500–3,000/night all-inclusive) or &Beyond Serengeti Under Canvas ($600–1,200/night all-inclusive) — among the finest safari lodges in the world.",
            "All-inclusive covers: all game drives (private vehicle and dedicated guide for your party), all meals and premium bar, laundry, bush dinners, bush breakfasts, specialist activities.",
            "Day 3: Hot air balloon safari over the Serengeti at sunrise ($500–600/person, the single most expensive but most unforgettable activity in Tanzania). The balloon launches at dawn, drifts over the savannah for 45–60 minutes as the sun rises, following wildebeest herds from 300 feet above. Champagne breakfast in the bush after landing is included.",
            "Private walking safari with an armed guide: the Serengeti on foot, tracking animal signs, learning about medicinal plants and insects. The bush at ground level is a completely different experience from the vehicle.",
          ],
          cost: "$1,500–3,000/day all-inclusive lodge rate",
        },
        {
          day: "Day 4",
          title: "Ngorongoro Private Crater Experience",
          items: [
            "Private charter to Manyara Airstrip, helicopter transfer to crater rim. Check in to &Beyond Ngorongoro Crater Lodge ($1,000–2,000/night, the most dramatic lodge in Africa — individual thatched towers on the crater rim, butler service, banana-leaf candelabras, views straight down into the caldera).",
            "Private full-day crater drive with dedicated guide and private 4WD. No shared vehicles, no stopping to wait for other safari trucks. Track the black rhinos with park ranger guidance — the closest legal approach with full context from a specialist.",
            "Private sundowner on the crater rim: butler delivers a cheese and charcuterie board with a bottle of South African wine as the sun sets behind the crater wall.",
            "Dinner at the lodge: candlelit dining room overlooking the crater, 4-course Tanzanian menu with imported wines.",
          ],
          cost: "$1,200–2,200/day (lodge rate)",
        },
        {
          day: "Day 5",
          title: "Zanzibar: Mnemba Island Lodge Arrival",
          items: [
            "Private charter Kilimanjaro to Zanzibar. Transfer by speedboat to Mnemba Island Lodge ($2,000–4,000/night all-inclusive for two, the only accommodation on the private island) — or check in to Park Hyatt Zanzibar for a more central luxury base ($400–700/night).",
            "Mnemba Island is a private island enclosed within a marine reserve. All snorkeling and diving is world-class and entirely uncrowded. Your accommodation is a banda directly on a white sand beach facing the open Indian Ocean.",
            "Afternoon: Private guided reef snorkeling session with the lodge's resident marine biologist. Identification of sea turtles, reef sharks, and coral species. Depth: 2–8 meters with 30-meter visibility.",
            "Sundowner on your private beach, butler service, fresh coconut water.",
          ],
          cost: "$2,000–4,000/day (all-inclusive island lodge)",
        },
        {
          day: "Day 6",
          title: "Zanzibar: Private Dhow Sailing & Spice Estate",
          items: [
            "Morning: Private traditional dhow sailing charter ($300–500 for full day, private boat, crew, gourmet packed lunch prepared by lodge chef). Sail to a remote sandbank, swim in turquoise shallows, snorkel on an unmapped reef.",
            "Afternoon: Private visit to a working spice estate with a culinary expert guide — followed by a hands-on Swahili cooking class using spices harvested that morning ($150–200/person). Cook a full Zanzibari meal: coconut fish curry, pilau rice, tamarind chicken, and cardamom tea.",
            "Evening: Stone Town at dusk with a private historian guide — the city's Swahili, Omani Arab, Indian, and British colonial layers explained through the architecture. Taarab music performance at the Old Fort ($20/person, open-air, the traditional Swahili musical form).",
            "Dinner: Emerson Spice rooftop ($60–100/person, the finest dining in Stone Town, live performance).",
          ],
          cost: "$500–800 total",
        },
        {
          day: "Day 7",
          title: "Final Zanzibar & Departure",
          items: [
            "Morning: Sunrise yoga on the beach or a final solo snorkel at Mnemba Atoll — by 7am you have the reef entirely to yourself.",
            "Late breakfast: freshly caught grilled fish with coconut rice, Zanzibar coffee, and fresh mango.",
            "Last Stone Town purchase: a hand-carved Zanzibari door panel, original Tingatinga painting, or a selection of premium vanilla pods and clove oil from a specialist spice merchant.",
            "Private speedboat transfer to Zanzibar Airport. Private aviation to Nairobi, Addis Ababa, or Doha for onward international connections.",
          ],
          cost: "$400–700 total (excl. lodge)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$12–50",
      food: "$5–15",
      transport: "$3–20",
      activities: "$60–90 (park fees dominate)",
      total: "$80–130/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$150–350 (full-board lodge)",
      food: "$30–60",
      transport: "$50–150 (flights in Tanzania)",
      activities: "$70–150",
      total: "$200–400/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$600–3,000 (all-inclusive)",
      food: "Included",
      transport: "$200–600 (charters)",
      activities: "$100–600 (balloon, private)",
      total: "$600–2,500+/day",
    },
  ],
  mistakes: [
    {
      icon: "🗺️",
      title: "Confusing Tanzania and Kenya — Same Ecosystem, Different Country",
      desc: "The Serengeti (Tanzania) and Masai Mara (Kenya) are the same continuous ecosystem divided by a national border. They are NOT interchangeable. Masai Mara is better for the Great Migration river crossings July–October; Serengeti is better for year-round Big 5 and the calving season January–February. Plan specifically — don't assume a Kenya trip and a Tanzania trip are the same experience.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🕳️",
      title: "Skipping Ngorongoro Crater",
      desc: "Many first-time visitors skip Ngorongoro to save the $130 in fees (crater entry + vehicle fee). This is the single biggest mistake you can make on a Tanzania safari. Ngorongoro is the best single game drive location on Earth — 25,000 large mammals in a 20km caldera, including one of the only accessible black rhino populations in Africa. It is not optional.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏙️",
      title: "Staying Only in Stone Town, Not Going to the Beaches",
      desc: "Stone Town is extraordinary and worth 1–2 full days. But Zanzibar's beaches — Nungwi, Kendwa, Jambiani, Paje — are among the finest in the Indian Ocean. Travelers who stay only in Stone Town miss the core of what makes Zanzibar worth the journey. The north coast beaches are 45 minutes by taxi. Go.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💉",
      title: "Not Bringing Yellow Fever Certificate",
      desc: "Even if your country of origin doesn't require Yellow Fever vaccination, Tanzania may check certificates if you have transited through an endemic country. Immigration officers at Kilimanjaro and Zanzibar airports can and do deny entry without documentation. Get vaccinated (it's valid for life after 2016 WHO ruling), carry the yellow card, photocopy it.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Ngorongoro Crater at Sunrise — Lions Most Active at Dawn",
      desc: "Request the earliest possible descent time into the crater (gates open at 6am). Lion prides are most active in the morning — hunting, cub play, territorial movement. By 10am the cats are mostly resting in shade. The first two hours in the crater are the best two hours of the entire safari for predator sightings.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍢",
      title: "Forodhani Gardens Zanzibar — $1 Seafood at Night",
      desc: "The Forodhani waterfront night market in Stone Town is one of the great affordable dining experiences in the world. Arrive at sunset (around 6:30pm) when the stalls are setting up. Order Zanzibar pizza (stuffed flatbread with egg and cheese, $1.50), freshly grilled octopus ($3), sugarcane juice ($0.30). Budget $5–8 for a full dinner that would cost $50 in a tourist restaurant.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🎈",
      title: "Hot Air Balloon Over Serengeti at Sunrise",
      desc: "At $500–600 per person, the Serengeti hot air balloon is the most expensive single activity in Tanzania, and also the most unforgettable. You drift silently 300 feet above the savannah as the sun rises, following wildebeest herds below, watching lions on kopjes, with the entire Serengeti horizon unfolding around you. Book through your safari camp at least 2 days in advance — launches are weather-dependent.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🕌",
      title: "Stone Town Sunset at the Old Fort",
      desc: "The Ngome Kongwe (Old Fort) in Stone Town is free to enter and has a terrace where you can watch the sun set over the dhow harbor. It's the best free sundowner spot in Zanzibar — locals and travelers mix, sometimes there's live taarab music, and the fort walls provide an elevated view over the waterfront. Arrive at 6pm and stay until dark.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Tanzania safari vs Kenya safari — which is better?",
      a: "Both are extraordinary but different. Tanzania's Serengeti is larger, less crowded, and better for year-round Big 5 including the calving season (January–February). Kenya's Masai Mara is better for the dramatic wildebeest river crossings at the Mara River (July–October). Tanzania adds Ngorongoro Crater and Zanzibar beaches — a combination Kenya cannot match. For a first Africa safari, Tanzania is the stronger overall destination.",
    },
    {
      q: "Is Yellow Fever vaccination required for Tanzania?",
      a: "Yellow Fever vaccination is required only if you are arriving from a Yellow Fever endemic country (listed countries in equatorial Africa and South America). Most travelers from India, Europe, North America, and Southeast Asia do not require it from their home country. However, if you are transiting through Nairobi (Kenya) or Addis Ababa (Ethiopia) — not an issue unless you have a long layover with exit from the airport. Always carry your International Certificate of Vaccination (yellow card) as a precaution.",
    },
    {
      q: "Can I climb Kilimanjaro on this 7-day itinerary?",
      a: "No — Kilimanjaro requires 5–9 days on the mountain alone (the 7-day Machame Route is the most popular and has the best acclimatization and success rates). A full Kilimanjaro climb costs $1,500–3,000 all-inclusive (park fees $800+, guide, porter, camp fees, gear). It is a separate trip that should be planned independently. Arusha is the base for both Kilimanjaro climbs and northern circuit safaris.",
    },
    {
      q: "What is the best beach in Zanzibar?",
      a: "Nungwi and Kendwa on the north coast are the most popular and have the best swimming at all tides (no tidal flats). Paje and Jambiani on the southeast coast are world-class for kitesurfing. Matemwe on the northeast is quietest and most beautiful for budget travelers wanting seclusion. Nungwi wins for overall beach quality, nightlife, and ease of access to snorkeling trips.",
    },
    {
      q: "How does the Tanzania visa on arrival work for Indian passport holders?",
      a: "Join the immigration queue at Kilimanjaro (JRO) or Dar es Salaam (DAR) airport. Fill in the arrival form (available on the plane or at immigration). At the window, present your passport, arrival form, return ticket, and $50 USD in cash (exact amount preferred, clean bills only — torn or old series notes may be refused). The officer stamps your passport with a 90-day single-entry visa. Process takes 15–45 minutes depending on queue length.",
    },
    {
      q: "Do I need malaria tablets for Tanzania?",
      a: "Yes. Tanzania mainland and Zanzibar are both high-risk malaria zones. Consult your doctor 4–6 weeks before travel for a prescription. Common options: Doxycycline (cheap, take daily, start 2 days before arrival, continue 4 weeks after return — can cause sun sensitivity); Malarone (atovaquone/proguanil, more expensive, fewer side effects, start 2 days before, continue 7 days after return). Also: DEET 50%+ repellent every evening, sleep under a mosquito net, wear long sleeves at dusk.",
    },
  ],
  combineWith: ["kenya-safari-7-days", "morocco-7-days", "maldives-5-days"],
  relatedSlugs: ["kenya-safari-7-days", "morocco-7-days", "bali-5-days", "maldives-5-days"],
  galleryQuery: "serengeti safari tanzania zanzibar beach stone town africa",
};

export const metadata: Metadata = {
  title: "Tanzania in 7 Days: Serengeti, Ngorongoro Crater & Zanzibar Beaches (2026)",
  description: "Complete 7-day Tanzania itinerary covering Serengeti safari, Ngorongoro Crater, and Zanzibar beaches. Budget camping safaris to luxury lodges — real costs, visa info, and insider tips.",
  keywords: [
    "tanzania itinerary 7 days",
    "serengeti safari guide 2026",
    "ngorongoro crater visit",
    "zanzibar beach guide",
    "tanzania budget safari",
    "zanzibar travel guide",
    "africa safari itinerary",
  ],
  openGraph: {
    title: "Tanzania in 7 Days: Serengeti, Ngorongoro & Zanzibar (2026)",
    description: "Big 5 safari in the Serengeti, black rhinos in Ngorongoro Crater, and white-sand beaches in Zanzibar — 7 days, all budgets.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Zanzibar white sand beach turquoise Indian Ocean Tanzania Africa",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanzania in 7 Days: Serengeti, Ngorongoro & Zanzibar (2026)",
    description: "Complete safari + beach itinerary with real costs and booking tips.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/tanzania-zanzibar-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Tanzania in 7 Days: Serengeti, Ngorongoro Crater & Zanzibar Beaches (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80",
      description:
        "Complete 7-day Tanzania travel guide covering Serengeti safari, Ngorongoro Crater, and Zanzibar beaches with budget breakdowns and practical visa info.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Tanzania Zanzibar 7 Days",
          item: "https://www.incredibleitinerary.com/blog/tanzania-zanzibar-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Tanzania & Zanzibar",
      description:
        "Home to the Serengeti National Park, Ngorongoro Crater, and the spice island of Zanzibar — one of the world's great combined safari and beach destinations.",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -6.369,
        longitude: 34.8888,
      },
      touristType: ["Safari enthusiasts", "Wildlife photographers", "Beach travelers", "Adventure travelers"],
    },
  ],
};

export default function TanzaniaZanzibarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
