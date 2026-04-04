import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Sri Lanka",
  country: "Sri Lanka",
  countryFlag: "🇱🇰",
  slug: "sri-lanka-7-days",
  heroQuery: "sri lanka sigiriya lion rock temple elephant train",
  heroAlt: "Sri Lanka Sigiriya Lion Rock fortress rising above jungle at sunrise",
  category: "Asia",
  date: "April 5, 2026",
  readTime: "15 min read",
  intro: "Sri Lanka is the rare destination that delivers every type of travel experience within a country the size of Ireland — a 1,200-step rock fortress that predates most European cathedrals, five centuries of Buddhist cave temples, the most photogenic train ride in Asia through tea-scented mountains, stilt fishermen at dawn on the Indian Ocean, and whale sharks in the warm waters off the south coast. Seven days is enough to get to the heart of it.",
  stats: {
    duration: "7 Days",
    budgetFrom: "$30",
    bestMonths: "Dec–Apr (west/south coast), May–Sep (east coast)",
    airport: "CMB (Colombo Bandaranaike International)",
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
        ["ETA Required", "Indian citizens require an Electronic Travel Authorization (ETA) before entering Sri Lanka. Apply at VisaOnline.gov.lk. Fee: $35 USD. Processing is usually within 24 hours, sometimes instant. Do NOT rely on getting this at the airport — apply before flying."],
        ["Stay Duration", "30 days, extendable to 90 days at the Department of Immigration in Colombo or Kandy ($30 extension fee)."],
        ["Application Process", "Online at VisaOnline.gov.lk — enter passport details, travel dates, accommodation address in Sri Lanka, and credit/debit card for payment. Print the ETA approval email or save to your phone. Present on arrival at CMB."],
        ["Multiple Entry", "The standard tourist ETA is single-entry. If you plan to enter Sri Lanka multiple times (e.g., via a cruise stop), apply for a double-entry ETA or contact the embassy."],
      ],
    },
    {
      flag: "🌍",
      title: "Western & Other Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["ETA Required", "All nationalities (including USA, UK, EU, Australia, Canada, New Zealand) require an ETA. Apply at VisaOnline.gov.lk. Fee: $35 USD. Free ETAs are no longer routinely offered — check the current fee structure as this changed in 2023."],
        ["On Arrival Option", "ETA can technically be obtained on arrival at CMB, but the queue can be 45–90 minutes. Apply online in advance — takes 5 minutes and the approval comes within 24 hours."],
        ["Validity", "The ETA allows a 30-day stay, extendable at the Department of Immigration. Most 7-day trips have no complications — simply ensure you apply at least 48 hours before travel."],
        ["Passport Validity", "Your passport must be valid for at least 6 months beyond your intended departure date from Sri Lanka. Check this before booking."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$30–55/day",
      days: [
        {
          day: "Day 1",
          title: "Colombo Arrival & City Orientation",
          items: [
            "Arrive at Colombo Bandaranaike (CMB) — the airport is 35km from the city. Express tuk-tuk to Negombo ($3–5 for 5km) if staying near the airport, or airport express bus/taxi into Colombo ($5–8 by bus, $15–20 by taxi).",
            "Gangaramaya Temple ($3) — Colombo's most celebrated Buddhist temple, a fascinating mix of Thai, Indian, Chinese, and Sri Lankan architecture styles. The museum adjacent houses extraordinary donated religious objects. Best visited at dawn before the tourist buses.",
            "Dutch Hospital Precinct (free entry) — a beautifully restored Dutch colonial building from the 17th century, now housing cafés, restaurants, and boutiques. Good coffee and lunch options at $5–10 per person.",
            "Pettah Bazaar (free) — the most frenetic market district in Colombo, arranged by street: electronics, spices, fabrics, fruit. Entirely local, zero tourist infrastructure. Watch for tuk-tuks; keep your bag in front.",
            "Galle Face Green at sunset (free) — Colombo's seafront promenade on the Indian Ocean. Food stalls sell spicy fish rolls, isso wade (shrimp fritters), and corn on the cob for $0.50–1.50. The sunset over the ocean is the best free view in Colombo.",
            "Dinner at a local rice and curry canteen near Galle Face — $1.50–3 for a full meal of rice, three curries, dhal, and pickle. This is how 22 million Sri Lankans eat every day. It is outstanding.",
          ],
          cost: "$25–40 total",
        },
        {
          day: "Days 2–3",
          title: "Sigiriya & Dambulla — The Cultural Triangle",
          items: [
            "Morning — shared minibus or public bus Colombo to Sigiriya via Dambulla (5–6 hours, $4–7). Or rent a tuk-tuk for the day in the Cultural Triangle for $20–30 (negotiate the night before in Sigiriya village).",
            "Sigiriya Rock Fortress (UNESCO, $30) — climb before 7am. The 1,200-step ascent via the Lion's Paw entrance takes 45 minutes at a moderate pace. The 5th-century palace on the summit plateau offers 360-degree views over the jungle and twin water gardens below. The frescoes of the 'Cloud Maidens' on the western face (halfway up) are extraordinary — painted in the 5th century AD, still vivid. Go at 6:30am — the rock is empty, cool, and the light is perfect.",
            "Sigiriya village exploration after the climb — the town has cheap guesthouses ($8–15/night) and excellent rice and curry lunch spots. The village tank (reservoir) has monitor lizards on the banks.",
            "Day 3 — Dambulla Cave Temple (UNESCO, $10) — five caves carved into a granite outcrop, containing 153 Buddha statues and painted ceilings covering 2,100 square meters. The finest Buddhist cave complex in Sri Lanka. Enter the caves barefoot (bring socks for the hot stone). Allow 2 hours.",
            "Minneriya National Park jeep safari ($25–35 for shared jeep, 3 hours) — home to the 'Elephant Gathering,' one of the largest gatherings of wild Asian elephants in the world (200–400 elephants, July–September). Outside those months, smaller groups of 20–50 elephants are reliably seen at the reservoir. Also: spotted deer, monkeys, painted storks.",
          ],
          cost: "$35–60 total/day",
        },
        {
          day: "Days 4–5",
          title: "Kandy — Temple, Lake & the Tea Train",
          items: [
            "Kandy via public bus or shared van from Dambulla (2 hours, $2–3). Kandy sits in a bowl of forested hills at 500m — markedly cooler than the Cultural Triangle.",
            "Temple of the Tooth Relic (Dalada Maligawa, $10) — the most sacred Buddhist site in Sri Lanka, housing the left canine tooth of the historical Buddha. Puja ceremonies at 6:30am, 9:30am, and 6:30pm with Kandyan drumming. The evening puja is the most atmospheric — drums echo through the colonial city center.",
            "Kandy Lake walk (free) — the artificial lake built by the last Kandyan king in 1807. The lakeside walk takes 45 minutes; elegant colonial architecture, Buddhist shrines at intervals, and mountains behind.",
            "Peradeniya Royal Botanic Gardens ($5, 6km from Kandy center) — 147 acres of colonial-era botanical gardens with an extraordinary orchid house, giant bamboo grove, and the Great Circle of palm trees. One of the finest botanical gardens in Asia.",
            "Kandyan cultural dance show ($5–10 evening performance) — fire walking, Kandyan dancers, and traditional drumming. Touristy but genuinely impressive — the acrobatics and fire acts are worth seeing.",
            "Day 5 — Kandy to Ella scenic train ($2–8 second class, 7 hours) — reserve at raildna.com 2+ weeks ahead as this sells out. Right-side window seat from Kandy. The route passes Nine Arch Bridge (most photographed structure in Sri Lanka), Nuwara Eliya tea country, waterfalls, tunnels, and 2,000m mountain passes. Pack breakfast from Kandy market.",
          ],
          cost: "$30–55 total/day",
        },
        {
          day: "Days 6–7",
          title: "Galle & the South Coast",
          items: [
            "From Ella: train or bus to Galle via Colombo or direct (4–6 hours, $5–8). Or from Kandy directly to the south coast bypassing Ella if time is short.",
            "Galle Fort (UNESCO, free to walk) — a perfectly preserved Dutch colonial fortification from 1663, enclosing a small town of churches, mosques, boutique hotels, cafés, and art galleries. The rampart walk at sunset takes 45 minutes along the Indian Ocean seawall — the best walk in the south of Sri Lanka.",
            "Stilt fishermen at Koggala (free, 6km east of Galle, sunrise only) — men perched on poles above the surf, fishing by rod. Arrive before 6:30am — the authentic fishermen are gone by 7:30am when the tourist operations set up replica photo-ops. The real thing, at dawn, with the sun rising over the Indian Ocean behind them, is genuinely beautiful.",
            "Unawatuna beach (free, 5km from Galle) — the most popular beach on the south coast, with calm water, good snorkeling on the reef, and a string of beachfront restaurants ($5–12 for seafood). Excellent for swimming November–April.",
            "Whale watching from Mirissa (Nov–Apr, $35–50 for shared boat, 5am departure, 4–5 hours) — blue whales and sperm whales are seen year-round but are most reliable December–March. The world's largest animals in warm tropical water within sight of the Sri Lankan coast.",
            "Turtle hatcheries near Kosgoda ($2–5 entry) — release baby sea turtles at sunset. Several legitimate conservation hatcheries along the coast operate nightly releases. Go to the ones affiliated with the Turtle Conservation Project.",
          ],
          cost: "$40–65 total/day",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$80–160/day",
      days: [
        {
          day: "Day 1",
          title: "Colombo — Colonial & Contemporary",
          items: [
            "Stay at a boutique hotel in Colombo 7 (Cinnamon Gardens) or Colombo 3 (Kollupitiya), $60–100/night — Cinnamon Grand, Galle Face Hotel (colonial, iconic), or a Airbnb heritage apartment in the fort area.",
            "Cinnamon Grand breakfast buffet ($20) — legendary Sunday brunch and daily buffet with 100+ Sri Lankan dishes. The hoppers (bowl-shaped fermented rice pancakes with egg), string hoppers, and kottu roti are essential ordering points.",
            "Private half-day Colombo food tour ($50–70/person) — covering Pettah spice bazaar, a Burgher home cook, a Muslim biryani house, and a colonial tearoom. Context Travel and local operators run excellent versions.",
            "National Museum of Colombo ($3) — important collection of royal regalia, prehistoric artifacts, and the Anuradhapura period stone sculptures. Two hours suffices.",
            "Dinner at Ministry of Crab ($40–60/person) — Sri Lanka's most celebrated restaurant, housed in the Dutch Hospital Precinct. Massive Sri Lankan mud crabs cooked in traditional preparations. Book 2–3 weeks ahead.",
          ],
          cost: "$120–180 total",
        },
        {
          day: "Days 2–3",
          title: "Sigiriya — Luxury Cultural Triangle",
          items: [
            "Private driver-guide ($60–80/day for vehicle + guide) from Colombo to the Cultural Triangle. Stay at a mid-range hotel near Sigiriya ($60–100/night) — Jetwing Vil Uyana or Habarana Village by Cinnamon.",
            "Sigiriya at 6:30am with guide context on the Kassapan dynasty that built it in the 5th century. The mirror wall, water gardens, and summit palace rooms become far more intelligible with good historical narration.",
            "Dambulla Cave Temple afternoon with guide — the iconographic program of the cave paintings tells a complete narrative of Buddhist cosmology that most independent visitors miss entirely.",
            "Minneriya evening safari in a private jeep ($50–70) — more flexibility to stay with elephant herds at the reservoir rather than following the group safari rotation.",
            "Polonnaruwa ancient city ($25) — a UNESCO-listed medieval capital 40km from Sigiriya with extraordinary outdoor Buddhist sculpture including the Gal Vihara rock-carved Buddhas. Often skipped by 7-day travelers — include it if time allows (half day).",
          ],
          cost: "$130–190/day",
        },
        {
          day: "Days 4–5",
          title: "Kandy & the Tea Train",
          items: [
            "Stay at a heritage hotel in Kandy ($70–120/night) — Hotel Suisse (colonial, lake views) or Earl's Regency above the city.",
            "Tooth Relic Temple evening puja with guide context ($10 entry + $30–40 guide) — the religious significance and royal history of the Kandyan Kingdom makes the ceremony profoundly more interesting with narration.",
            "Tea plantation tour ($15–25, half day) at a working estate in the Kandy hills — see the rolling green terraces, visit the factory floor where withering, rolling, oxidation, and drying convert fresh leaves to finished tea. Tasting session included.",
            "Kandy to Ella first-class scenic train ($10–15, seat reservation essential from raildna.com) — right-side window seat. Pack Kandy market snacks for the 7-hour journey. The Nine Arch Bridge at Ella is the most photographed railway viaduct in Asia.",
            "Ella itself ($35–55/night at a boutique guesthouse) — a small hill town at 1,000m surrounded by tea estates and waterfalls. Little Adam's Peak hike (1.5 hours, free) for excellent valley views.",
          ],
          cost: "$110–170/day",
        },
        {
          day: "Days 6–7",
          title: "Galle Fort & Whale Watching",
          items: [
            "Stay at a boutique hotel inside Galle Fort ($80–140/night) — Amangalla, Fort Bazaar, or The Bartizan. The colonial fort at night, when the day-trippers have left, is one of the most atmospheric places in Sri Lanka.",
            "Private guided Galle Fort walking tour with a heritage specialist ($40–60, 2 hours) — the Dutch, Portuguese, and British layers of colonial history, the mosque, the Dutch Reformed Church, the governor's mansion.",
            "Whale watching from Mirissa with a responsible operator ($50–70, 5am) — book with Raja & the Whales or Mirissa Water Sports for better crew standards. Blue whales (largest animals on earth), spinner dolphins, and occasional orcas.",
            "Sunset at Galle Fort ramparts with a glass of Ceylon wine (local vineyards in Nuwara Eliya produce drinkable red and white) — the Indian Ocean view from the seawall at dusk is the finest in the south.",
          ],
          cost: "$130–200/day",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$300–900+/day",
      days: [
        {
          day: "Day 1",
          title: "Colombo Arrival — Heritage & Fine Dining",
          items: [
            "Private luxury transfer from CMB ($50–80 by chauffeur sedan). Check in to The Galle Face Hotel ($200–350/night) — Colombo's most storied colonial hotel, opened in 1864, seafront on the Indian Ocean. The history suite rooms have direct sea views.",
            "Private city tour with a heritage architect ($150–200 for half day) covering Colombo's Dutch and British colonial layers, the Cinnamon Gardens mansion district, and the contemporary art gallery circuit in the Fort.",
            "Dinner at Gallery Café ($50–70/person) — the restaurant arm of Geoffrey Bawa's architecture studio, set in the legendary Sri Lankan architect's Colombo office. The best food and design experience in Colombo. Reserve ahead.",
          ],
          cost: "$400–600 (excl. hotel)",
        },
        {
          day: "Days 2–3",
          title: "Cultural Triangle — Private Fortress & Safari",
          items: [
            "Private driver-guide Colombo to Cultural Triangle. Stay at Jetwing Vil Uyana ($300–500/night) — luxury eco-lodges on an artificial wetland with remarkable bird life. Or Heritance Kandalama by Geoffrey Bawa ($200–350/night) — the masterpiece of Sri Lankan architecture, built into a cliff above a reservoir.",
            "Private pre-dawn Sigiriya access ($150–200 for VIP guide package) — access before public opening at 6am, with a specialist art historian explaining the Cloud Maiden frescoes in detail and full summit time without crowds.",
            "Private Minneriya elephant safari in a dedicated vehicle ($100–150) — best elephant sightings in Asia with none of the shared jeep tour constraints.",
            "Dambulla caves with a Buddhist monk guide ($80–120) — contextualizes the 2,000 years of continuous religious use and the iconographic significance of each cave's sculpture program.",
          ],
          cost: "$500–800/day (excl. hotel)",
        },
        {
          day: "Days 4–5",
          title: "Tea Country & the Train",
          items: [
            "Private charter of a heritage rail carriage for the Kandy–Ella route (available through certain luxury operators, $500–800 for the carriage). Alternatively, first-class with private catering and a guide to narrate the landscape.",
            "Stay at Heritance Tea Factory ($200–300/night) — a converted Victorian tea factory at 2,000m elevation in Nuwara Eliya, surrounded by 100 acres of working tea estate. The architecture preserves the original factory machinery as interior design elements.",
            "Private tea estate tour with the head planter ($100–150) — full access to the estate, private tasting of single-origin teas, and a tea blending workshop to create your own blend to take home.",
            "Horton Plains National Park dawn walk ($25 entry + private guide $50) — the World's End escarpment drops 870m into jungle below. Baker's Falls in the mist at 6am. One of the most dramatic landscapes in Sri Lanka.",
          ],
          cost: "$400–700/day (excl. hotel)",
        },
        {
          day: "Days 6–7",
          title: "Galle Fort — Aman & the Ocean",
          items: [
            "Stay at Amangalla ($700–1,200/night) — the finest hotel in Galle Fort, a restored Dutch colonial building with spa, courtyard pool, and the most elegant rooms in southern Sri Lanka.",
            "Private whale watching charter from Mirissa ($400–600 for dedicated boat, 5–8 people) — more time with blue whales, ability to follow pods without tour-boat constraints, professional marine biologist on board.",
            "Private tuk-tuk art and architecture tour of the south coast — Geoffrey Bawa's Lunuganga estate ($15 entry, better with private guide $80), the Villa at Bentota, and the Lighthouse Hotel.",
            "Final dinner at Amangalla dining room or Fort Printers restaurant — the finest food on the south coast. Ceylon-style crab curry, prawn pol sambol, and coconut ice cream.",
          ],
          cost: "$600–1,200/day (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$8–18",
      food: "$5–12",
      transport: "$3–8",
      activities: "$10–20",
      total: "$30–55/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$60–120",
      food: "$25–45",
      transport: "$20–40",
      activities: "$25–50",
      total: "$80–160/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$200–700",
      food: "$60–150",
      transport: "$50–100",
      activities: "$80–200",
      total: "$300–900+/day",
    },
  ],
  mistakes: [
    {
      icon: "🚂",
      title: "Not Booking the Scenic Train Ticket in Advance",
      desc: "The Kandy–Ella (and Kandy–Nuwara Eliya) scenic train routes are the most popular train journeys in Asia among travelers. Tickets sell out 2–4 weeks ahead, especially for second-class reserved seats and first class. Book at raildna.com the moment you confirm your travel dates. Showing up at the station to buy on the day — even a day before — will leave you standing in a crowded aisle or unable to travel at all. This ruins itineraries.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☀️",
      title: "Visiting Sigiriya in the Middle of the Day",
      desc: "Sigiriya Rock is a 200-meter exposed granite formation in the Sri Lankan lowlands. At midday in the dry season it reaches 38–45°C on the open rock face with no shade on the upper section. Tourists who arrive at 10am for the climb regularly turn back from heat exhaustion. The correct time: 6:30–7:30am. The rock is cool, the light is extraordinary, and the fortress is nearly empty of other visitors. Set your alarm.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏛️",
      title: "Skipping Dambulla to Save Time",
      desc: "Dambulla Cave Temple is 20km from Sigiriya and often dropped from rushed itineraries. This is a mistake. The five painted cave temples — 2,000 years in continuous use, 153 Buddha statues, the largest cave temple complex in Sri Lanka — are a genuinely different experience from Sigiriya and equally impressive. Combined, the two UNESCO sites make the Cultural Triangle visit complete. Budget one day for Sigiriya, one half-day for Dambulla.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍱",
      title: "Eating at Tourist Restaurants Instead of Local Canteens",
      desc: "Sri Lankan rice and curry at a local canteen costs $1.50–3 and is exceptional — multiple curries, dhal, coconut sambol, pickle, and as much rice as you want. The same meal in a tourist restaurant near a major sight costs $8–15. The quality in the canteen is equal or better — these places cook fresh every morning and rotate seasonal vegetables. Ask locals to point you to the nearest rice and curry joint. You will eat better for a fraction of the cost.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Sigiriya at 6:30am — the Rock to Yourself",
      desc: "The gates open at 7am but VIP guides with early access can get you in at 6:30am. Even standard arrival at opening puts you on the summit by 8am. The Cloud Maiden frescoes are best in morning light, the summit is at 25°C instead of 40°C, and you will have the palace ruins largely to yourself. Compare: arriving at 10am puts you behind 400 other tourists and in direct equatorial sun. The 6:30am visit is categorically better in every dimension.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🚂",
      title: "Right-Side Window Seat on the Kandy–Ella Train",
      desc: "When traveling from Kandy toward Ella, the right side of the train (when facing the direction of travel) has better views of the tea estates, waterfalls, and mountain valleys. Secure a window seat on the right by booking second-class reserved ($4–6) at raildna.com. Open the window — the Sri Lankan train windows open completely and the air is tea-scented at altitude. The Nine Arch Bridge at Ella is visible from the left side as you approach the station.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🎣",
      title: "Stilt Fishermen at Sunrise — Koggala Beach Before 7am",
      desc: "The famous image of Sri Lankan stilt fishermen — balanced on poles in the surf — is authentic only at dawn. By 8am the working fishermen have left and are replaced by men hired specifically for tourist photos (who charge you $5–10 for the privilege). Go to Koggala beach (8km east of Galle) before 6:30am with a tuk-tuk. The real fishermen fish at dawn for practical reasons: calmer surf, better catches. The light at sunrise behind them is also far more photogenic.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌃",
      title: "Galle Fort Evening Walk — Most Atmospheric in Sri Lanka",
      desc: "The day-trip crowds leave Galle Fort by 5pm. Walk the ramparts at 6pm with the Indian Ocean turning orange, the mosque calling evening prayer, the Dutch Reformed Church lit from within, and the old streets quiet. The Fort at evening is the most beautiful place in southern Sri Lanka and requires only your feet and thirty minutes. Have dinner at one of the Fort restaurants after — Pedlar's Inn or Fortaleza for wood-fired seafood with the ocean behind you.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Do Indians need an ETA visa for Sri Lanka?",
      a: "Yes. Indian passport holders require an Electronic Travel Authorization (ETA) to enter Sri Lanka — there is no visa-free arrangement. Apply at VisaOnline.gov.lk before your flight. Cost: $35 USD. Processing is usually within 24–48 hours. The ETA allows 30 days stay. Do not rely on getting this at Colombo airport — the process is smoother and faster when done in advance.",
    },
    {
      q: "When is the best time to visit Sri Lanka?",
      a: "Sri Lanka has two monsoon seasons affecting different coasts. The west and south coasts (Colombo, Galle, Mirissa, Unawatuna) are best December–April. The east coast (Trincomalee, Arugam Bay) is best May–September. The Cultural Triangle (Sigiriya, Dambulla) and the Hill Country (Kandy, Ella) are accessible year-round as the central highlands create their own microclimate. The 7-day route in this guide covers the west/south coast — plan it for December–April for the best weather.",
    },
    {
      q: "Sri Lanka vs Maldives — which should I choose?",
      a: "They're completely different trips. Sri Lanka offers culture, wildlife, trekking, temples, train journeys, and diverse beaches — 7–14 days, high activity, $30–150/day range. The Maldives offers one thing: extraordinary overwater villa seclusion with world-class reef diving — typically 5–7 days, very expensive ($300–2,000+/day), limited cultural content. Combine them: fly into Colombo, explore Sri Lanka for 7 days, then fly to Malé for 5 days of total beach recovery.",
    },
    {
      q: "How do I book the Sri Lanka scenic train?",
      a: "Go to raildna.com — the official third-party booking platform for Sri Lanka Railways. Create an account, search Kandy–Ella or Kandy–Nuwara Eliya, and book second-class reserved ($4–6) or first-class ($8–15) seats. Book 2–4 weeks ahead, especially for December–April and July–August peak seasons. Seats are limited. Arrive at the station 20 minutes before departure. Show the booking confirmation on your phone.",
    },
    {
      q: "Is Pinnawala Elephant Orphanage ethical to visit?",
      a: "Pinnawala Elephant Orphanage near Kandy has been criticized by wildlife organizations for practices including chaining elephants, separating calves from mothers for tourist interaction, and overcrowding. The 'orphanage' framing is contested — many elephants are captive-bred rather than rescued. For ethical elephant encounters, prefer wild elephant safaris at Minneriya or Udawalawe National Parks, where elephants are genuinely wild and free-ranging. If you visit Pinnawala, do not participate in bathing or riding interactions.",
    },
    {
      q: "Is Sri Lanka safe to visit after the 2022 economic crisis?",
      a: "Yes. Sri Lanka experienced a severe economic crisis in 2022 — fuel shortages, power cuts, political upheaval, and temporary food supply disruptions. The situation has substantially recovered by 2024–2026. Tourism infrastructure is fully operational, fuel is available, the political situation has stabilized under a new government, and the IMF restructuring program has reduced the acute crisis. Travelers report normal conditions at all tourist destinations. Crime rates affecting tourists remain low. Standard precautions apply.",
    },
  ],
  combineWith: ["maldives-5-days", "india-kerala-5-days", "thailand-7-days"],
  relatedSlugs: ["nepal-7-days", "maldives-5-days", "thailand-7-days", "palawan-4-days"],
  galleryQuery: "sri lanka sigiriya kandy galle fort tea plantation train",
};

export const metadata: Metadata = {
  title: "Sri Lanka in 7 Days: Sigiriya, Kandy, Galle & the Scenic Tea Train (2026)",
  description: "Complete 7-day Sri Lanka itinerary covering Sigiriya Rock, Dambulla caves, Kandy tooth temple, the most scenic train in Asia, Galle Fort, and whale watching — real costs, ETA visa info.",
  keywords: [
    "sri lanka itinerary 7 days",
    "sri lanka travel guide 2026",
    "sigiriya rock fortress",
    "kandy ella scenic train",
    "galle fort sri lanka",
    "sri lanka budget travel",
    "do indians need visa for sri lanka",
  ],
  openGraph: {
    title: "Sri Lanka in 7 Days: Sigiriya, Tea Train & Galle Fort (2026)",
    description: "Lion Rock fortress at 6am, the most scenic train in Asia, stilt fishermen at dawn — complete Sri Lanka guide from $30/day.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sri Lanka Sigiriya Lion Rock fortress above jungle at sunrise",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lanka in 7 Days (2026)",
    description: "Sigiriya, Kandy, tea train, Galle Fort — real costs, ETA visa info, train booking tips.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/sri-lanka-7-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Sri Lanka in 7 Days: Sigiriya, Kandy, Galle & the Scenic Tea Train (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1200&q=80",
      description:
        "7-day Sri Lanka itinerary covering Sigiriya Rock, Dambulla Cave Temple, Kandy Tooth Temple, the scenic hill country train, Galle Fort, and south coast beaches.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Sri Lanka 7 Days",
          item: "https://www.incredibleitinerary.com/blog/sri-lanka-7-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Sri Lanka",
      description:
        "Island nation off the southern tip of India with ancient Buddhist temples, colonial-era fortresses, scenic hill country train routes, and pristine Indian Ocean beaches.",
      touristType: ["Cultural tourists", "Beach travelers", "Wildlife enthusiasts", "History buffs", "Adventure travelers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 7.8731,
        longitude: 80.7718,
      },
    },
  ],
};

export default function SriLankaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
