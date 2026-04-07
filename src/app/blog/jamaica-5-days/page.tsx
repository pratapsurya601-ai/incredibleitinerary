import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

export const metadata: Metadata = {
  title: "Jamaica 5-Day Itinerary 2026: Trip Planner",
  description:
    "Plan your Jamaica trip in 5 days. The ultimate Jamaica travel guide — Seven Mile Beach, Rick's Café cliff diving, Blue Mountains coffee, Dunn's River.",
  keywords: [
    "Jamaica travel guide",
    "Jamaica itinerary 5 days",
    "Seven Mile Beach Negril",
    "Rick's Cafe Jamaica cliff diving",
    "Blue Mountains Jamaica coffee",
    "Dunn's River Falls",
    "Bob Marley Museum Kingston",
    "jerk chicken Jamaica",
    "Jamaica budget travel",
    "Pelican Bar Jamaica",
    "Blue Hole Ocho Rios",
    "Rockhouse Hotel Negril",
    "GoldenEye Resort Jamaica",
    "Jamaica things to do",
    "Caribbean travel 2026",
    "Rastafarian culture Jamaica",
  ],
  openGraph: {
    title: "Jamaica 5-Day Itinerary 2026: Trip Planner",
    description:
      "The island that invented cool — cliff diving at Rick's Café, Blue Mountains coffee, jerk chicken that ruins all other jerk chicken, and reggae at noon. Your complete Jamaica itinerary.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/jamaica-5-days",
    images: [
      {
        url: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Jamaica Seven Mile Beach Negril with turquoise Caribbean water and palm trees",
      },
    ],
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/jamaica-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Jamaica in 5 Days: The Complete Travel Guide (Budget to Luxury, 2026)",
      description:
        "Seven Mile Beach, Rick's Café, Blue Mountains, Dunn's River Falls, and the best jerk chicken you'll ever eat. Complete Jamaica itinerary from $90/day to $400/day.",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        logo: { "@type": "ImageObject", url: "https://www.incredibleitinerary.com/logo.png" },
      },
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      mainEntityOfPage: "https://www.incredibleitinerary.com/blog/jamaica-5-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Jamaica 5-Day Guide", item: "https://www.incredibleitinerary.com/blog/jamaica-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Jamaica",
      description:
        "The birthplace of reggae music, Blue Mountain coffee, jerk chicken, and a Caribbean beach culture that other islands can only aspire to — Jamaica rewards every kind of traveller from backpackers to luxury seekers.",
      url: "https://www.incredibleitinerary.com/blog/jamaica-5-days",
      touristType: ["Beach travellers", "Music enthusiasts", "Food lovers", "Adventure seekers", "Luxury travellers", "Culture seekers"],
    },
  ],
};

const data: UniversalBlogData = {
  destination: "Jamaica",
  country: "Jamaica",
  countryFlag: "🇯🇲",
  slug: "jamaica-5-days",
  heroQuery: "jamaica seven mile beach negril caribbean turquoise water",
  heroAlt: "Jamaica Seven Mile Beach Negril with turquoise Caribbean water and palm trees",
  category: "Caribbean",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro:
    "The sun is setting over the Caribbean, someone has just leapt off a 10-metre cliff at Rick's Café into the turquoise water below, and a reggae band is playing Bob Marley loud enough that you feel it in your chest. This is Negril at its peak. Two hours east, the Blue Mountains grow coffee so fine it retails for $50 a pound at Heathrow Airport — and you can drink it on the farm where it was roasted, with mist drifting through the mahogany trees, for a dollar. Further east, in Kingston, the Bob Marley Museum sits exactly where it should: in the house where he lived, slept, recorded, and survived an assassination attempt. And everywhere — at roadside shacks, at beach bars, at gap-in-a-wall kitchens in side streets — there is jerk chicken cooked low and slow over pimento wood that will permanently ruin every other jerk chicken you eat for the rest of your life. Jamaica invented cool, and it hasn't stopped.",
  stats: {
    duration: "5 Days",
    budgetFrom: "$90",
    bestMonths: "Dec–Apr (dry season)",
    airport: "MBJ (Montego Bay) or KIN (Kingston)",
  },
  toc: [
    { id: "visa", emoji: "📋", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "gallery", emoji: "🖼️", label: "Photo Gallery" },
    { id: "combine", emoji: "🗺️", label: "Combine With" },
    { id: "related", emoji: "📖", label: "Related Guides" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport Holders",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["Visa Required", "Indian passport holders require a tourist visa for Jamaica. There is no visa on arrival facility for Indian citizens. Apply in advance through the Jamaican High Commission or the online e-visa portal (evisa.mns.gov.jm) before travel."],
        ["E-Visa Process", "Jamaica's e-visa portal accepts online applications. Fill in the application form, upload a passport photograph, proof of accommodation (hotel booking), return flight itinerary, and bank statement showing sufficient funds. The process is straightforward and can be completed in 30–45 minutes online."],
        ["Fee & Processing Time", "Visa fee approximately $50 USD. Processing time is typically 5–10 business days but can be faster. Apply at least 3 weeks before your travel date to allow for any delays. Print the e-visa approval and carry it with your passport — immigration will check both."],
        ["Duration of Stay", "Tourist visas are typically issued for up to 30 days with a possible extension to 90 days applied for at the Jamaican Immigration Department in Kingston. Overstaying your visa results in fines and possible deportation."],
        ["Currency & Cash", "Jamaican Dollar (JMD). 1 USD ≈ 155 JMD. US Dollars are widely accepted across Jamaica, especially in tourist areas. Carry USD for convenience, but use JMD at local shops, restaurants, and markets for better value. ATMs dispense JMD; most also have a USD option."],
      ],
    },
    {
      flag: "🌍",
      title: "US / UK / EU / AU Passports",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["Visa-Free Entry", "Citizens of the United States, United Kingdom, Canada, Australia, New Zealand, and all EU member states do not require a visa for Jamaica. Tourist entry is granted on arrival for up to 90 days. Present your passport and a filled immigration form on the plane."],
        ["Immigration Form", "Complete the immigration/customs form provided on the aircraft before landing. You'll need your flight number, accommodation address in Jamaica, and purpose of visit (tourism). Keep the bottom half of the customs form — you return it on departure."],
        ["Travel Advisory", "Check your government's current travel advisory for Jamaica before departure. Certain areas — particularly parts of Kingston (Tivoli Gardens, Spanish Town) and inner-city areas of Montego Bay — have elevated violent crime rates. Tourist areas (Negril, Ocho Rios, the North Coast strip) are generally safe with normal precautions. The US State Department issues area-specific guidance; most tourist destinations are at Level 2 (exercise increased caution), not Level 4."],
        ["Currency & Tips", "US Dollars work everywhere in tourist areas. For local markets, jerk pits, and rum bars, Jamaican Dollars give better value as vendors convert USD at unfavourable tourist rates. Exchange some USD to JMD at the airport cambio desks or use ATMs."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$90–120/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival Montego Bay — Negril & Seven Mile Beach",
          items: [
            "Land at Montego Bay (MBJ). Collect your bag and look for the shared taxi ('route taxi') to Negril — the standard tourist transfer is $30–40 one-way per person by minibus, or take a public route taxi to Negril bus station ($4–6 per person, more complicated but works fine). Journey: 1.5–2 hours.",
            "Check into a budget guesthouse or hostel in Negril. Options along Seven Mile Beach start at $30–50/night for a clean room with air conditioning. Touts at the bus station will direct you — go with one that has Google reviews and a clear address.",
            "Seven Mile Beach is exactly what it sounds like: 11km of white sand with calm, turquoise Caribbean water, lined with beachside bars, restaurants, and vendors. No dramatic waves (a reef protects the bay), water temperature 27–29°C year-round. Most beach access is free, though some bars expect a drink purchase.",
            "Sunset at Rick's Café: 20 minutes south of Seven Mile Beach by taxi ($5–8). Rick's Café opens daily and is famous for cliff jumping — professional local divers leap from 10m and 15m heights, and tourists can jump from 6m for free if you're brave enough. A beer costs $5–6. The sunset here, with the crowd cheering each diver, is Jamaica's most exhilarating happy hour. Go early (5pm) to get a good spot.",
            "Dinner: jerk chicken from a roadside stall near West End Road — half a chicken with festival (sweet fried dough) and bammy (cassava flatbread), $7–10. This is the real thing. Sit on a plastic stool and eat it.",
          ],
          cost: "$70–95 total",
        },
        {
          day: "Day 2",
          title: "Negril Beach Day, Blue Hole Mineral Spring & West End Cliffs",
          items: [
            "Morning: rent a beach chair on Seven Mile Beach ($5/day) and swim. The water at Seven Mile Beach is shallow enough to stand in for 50 metres and warm enough to stay in all morning. Vendors patrol the beach selling jerk lobster, fresh coconuts, and aloe vera — negotiate everything.",
            "11:00am: Blue Hole Mineral Spring ($20 entry) — a natural cave pool of Caribbean-blue water 12 metres below ground level, accessible by a ladder or (for the brave) a rope swing into the water from the cave edge. Mineral-rich water, cool and clear. The entrance fee includes the rope swing attempts.",
            "1:30pm: Negril Lighthouse — free to approach, great views from the headland over the West End cliffs.",
            "2:30pm: Swim from the West End cliffs. Unlike Seven Mile Beach, the West End is rocky coastline with cliff-edge guesthouses and bars. Many have ladders down to the sea — snorkel gear is available for rent ($5–10) and the coral immediately offshore is excellent.",
            "5:00pm: Sunset again — walk the cliff road north. Every bar faces west and the sunset is Jamaica's daily ritual. Drink a Ting (Jamaican grapefruit soda) or a Red Stripe at whatever cliff-edge bar appeals.",
            "Evening: Norman's on the Beach for grilled fish and rice and peas ($15–20). Or cook your own from the Negril market if your guesthouse has a kitchen.",
          ],
          cost: "$60–85 total",
        },
        {
          day: "Day 3",
          title: "Road to Ocho Rios — Dunn's River Falls & Blue Hole",
          items: [
            "7:00am: Take a shared taxi or minibus from Negril towards Ocho Rios (2.5–3 hours, change at Montego Bay if needed, total $10–15 one way). Or book a shared day-trip transfer from your guesthouse ($20–30).",
            "10:00am: Dunn's River Falls ($25 entry). The 180-metre limestone waterfall cascades directly to the beach in a series of natural terraces that visitors climb in a human chain from bottom to top. Yes, it's touristy (cruise ship passengers make it extremely busy 10am–3pm — arrive at opening time). Yes, you get soaked. Yes, you hold a stranger's hand while clambering up wet rock in flip flops. It's also genuinely spectacular and genuinely fun. Water shoes rentable on site ($5). Guides are available but the marked path is easy to follow independently.",
            "1:00pm: Lunch near Ocho Rios — jerk pork and festival from a roadside stand ($8–12). Ocho Rios town is compact and tourist-oriented but has excellent cheap food if you walk 200m off the main drag.",
            "3:00pm: Blue Hole (Secret Falls) — a series of turquoise pools fed by a mountain waterfall, 15 minutes by taxi from Ocho Rios ($5). Rope swings, cliff jumps (5–8 metres), and natural slides. Entry $20. Guide required (included in entry). One of the most beautiful natural swimming sites in Jamaica — fewer crowds than Dunn's River and more swimming freedom.",
            "6:00pm: Bus or taxi back to Negril or stay in Ocho Rios ($25–45 for a guesthouse). Dinner at Scotchies Jerk Centre in Ocho Rios — widely considered to serve the best jerk pork in Jamaica. Half-pound jerk pork: $7.",
          ],
          cost: "$80–110 total",
        },
        {
          day: "Day 4",
          title: "Bob Marley Museum, Kingston & Pelican Bar",
          items: [
            "7:00am: Bus to Kingston (2.5 hours from Ocho Rios, $5–8 one way). Kingston is Jamaica's capital and a city that travel advisories sometimes overstate as dangerous. The tourist areas — New Kingston, Hope Road, and the Bob Marley Museum — are perfectly fine to visit with normal urban awareness.",
            "10:30am: Bob Marley Museum, 56 Hope Road ($20 entry). This is the house where Bob Marley lived, recorded the Catch a Fire album, survived an assassination attempt in 1976, and where his personal effects, gold and platinum records, photographs, and the actual bullet holes in the kitchen wall remain as he left them. The guided tour is genuinely moving. The acoustic quality of the recording studio he built in the garden is still discussed by music engineers.",
            "1:00pm: Lunch at Usain Bolt's Tracks & Records (New Kingston, $15–25) — a sports bar and restaurant co-owned by the sprinter. Genuinely good jerk wings, rice and peas, and ackee and saltfish.",
            "3:00pm: National Gallery of Jamaica (Downtown Kingston, $5 entry) — the finest collection of Jamaican art in the world, from colonial portraiture to contemporary sculptural works. Bob Marley, Edna Manley, and the Rastafarian artistic tradition are represented in depth.",
            "5:30pm: Take a taxi to Treasure Beach on Jamaica's south coast ($20–25, 1.5 hours from Kingston) for Pelican Bar — a ramshackle wooden bar built on a sandbar 800 metres out to sea. A fisherman takes you out by canoe ($10 round trip). Order a Red Stripe, sit on a bar stool above the Caribbean, and explain to yourself why you're in a pub in the middle of the sea. No explanation is adequate. Pelican Bar is one of the most singular experiences in the entire Caribbean.",
            "Evening: overnight in Treasure Beach ($30–50 guesthouse).",
          ],
          cost: "$85–115 total",
        },
        {
          day: "Day 5",
          title: "Treasure Beach, South Coast & Departure",
          items: [
            "Morning: Treasure Beach itself — a series of quiet fishing beaches on Jamaica's underdeveloped south coast. No resort hotels, no vendors, no cruise ships. Just fishing boats, pelicans, and local families. Swim, walk, and be glad you found somewhere that hasn't been found by everyone yet.",
            "9:30am: Appleton Estate Rum Distillery is 1.5 hours from Treasure Beach ($30–40 by taxi, $30 entry with tasting). The most famous rum estate in Jamaica, operational since 1749. The tour walks through the entire production process — from sugarcane fields through fermentation to the aging warehouses where barrels of rum develop character over 12–21 years. The tasting at the end includes 5–7 rums. Take the return-transfer taxi option and don't drive after.",
            "1:30pm: Lunch in Black River — a small south coast town with a market, cheap restaurants, and Black River Great Morass, Jamaica's largest wetland. Crocodile-watching boat tours depart from the bridge ($25).",
            "4:00pm: Transfer to Montego Bay airport (MBJ) for your departure flight — 2 hours from Black River or Treasure Beach ($30–40 by taxi). Arrive 2.5 hours before international departure.",
          ],
          cost: "$90–120 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$180–240/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Negril — Boutique Hotel & Rick's Café Sunset",
          items: [
            "Land at Montego Bay (MBJ). Pre-arranged hotel transfer (most boutique hotels offer this, $50–70 for the 90-minute drive to Negril). Check into a boutique hotel on Seven Mile Beach — The Samsara Cliff Resort, The Charela Inn, or Idle Awhile Resort. Rooms $150–250/night with breakfast included.",
            "Afternoon: poolside at the hotel or first swim at Seven Mile Beach. Mid-range hotels in Negril often have direct beach access, sun loungers included, and beach bar service. Order a rum punch ($8–10) and decompress.",
            "5:00pm: Rick's Café sunset — taxi or hotel transfer ($15–20 return). Arrive at 5pm before the sunset crowds. Buy a table reservation if your hotel can arrange it ($10–20 minimum spend at the table, well worth it for a proper seat with the view). Watch the cliff divers, cheer appropriately.",
            "Dinner: Rockhouse Hotel restaurant (open to non-guests, one of Negril's finest) — fresh snapper, lobster in season, and local vegetables. $40–70 per person with cocktails. The restaurant is built into the cliffs of the West End — the view is theatrical.",
          ],
          cost: "$180–230 total",
        },
        {
          day: "Day 2",
          title: "Snorkelling, Negril Mangroves & Sunset Cruise",
          items: [
            "9:00am: Guided snorkelling tour of Negril's coral reef ($50–70 per person, book through hotel or GetYourGuide: https://www.getyourguide.com/s/?q=Negril+Jamaica+snorkelling&partner_id=PSZA5UI). The reef along Negril's West End cliffs has sea turtles, rays, and excellent coral health — one of the better-preserved reef systems in the Caribbean.",
            "12:00pm: Blue Hole Mineral Spring — hotel taxi there and back ($30). The private rope swing area and cave pool, as described in the budget plan, is just as extraordinary regardless of budget. Add a massage at one of the cliff-edge spa operators nearby ($50–80 for a 60-minute beach massage).",
            "3:00pm: Negril Great Morass kayak or eco-boat tour ($40–60 per person, 1.5 hours). The inland mangrove swamp behind Seven Mile Beach is home to West Indian whistling ducks, egrets, and a peculiar ecosystem most Negril visitors never see.",
            "5:30pm: Catamaran sunset cruise from Negril ($60–80 per person, includes open bar and snorkelling stop). The catamarans leave from the beach and sail along the coastline as the sun sets — reggae on board, rum punch flowing, and the West End cliffs in golden light. One of Negril's essential evening experiences.",
            "Dinner: Pushcart Restaurant & Rum Bar in Negril — innovative Jamaican cuisine with a cultural focus. $35–55 per person.",
          ],
          cost: "$200–260 total",
        },
        {
          day: "Day 3",
          title: "Dunn's River Falls, Blue Hole & Ocho Rios Food Scene",
          items: [
            "Organised tour to Ocho Rios via hotel ($80–100 per person, includes transport, Dunn's River Falls entry, and Blue Hole). Book via GetYourGuide: https://www.getyourguide.com/s/?q=Dunn%27s+River+Falls+Jamaica&partner_id=PSZA5UI",
            "Dunn's River Falls at opening time (8:30am) with a knowledgeable local guide — the guide identifies the limestone formations, explains the history (the falls were the site of the Battle of Las Chorreras, 1657, where Spanish and formerly enslaved African soldiers defeated British forces), and steers you away from the queue bottlenecks.",
            "Lunch at Scotchies Jerk Centre in Ocho Rios — the benchmark jerk in Jamaica. $15–25 per person for a full jerk spread.",
            "Blue Hole in the afternoon — guide included, rope swings, cliff jumps, and natural slides in turquoise water.",
            "Return to hotel by 6pm. Sunset cocktails at the hotel bar.",
            "Dinner at Miss T's Kitchen (Ocho Rios, if overnighting) or back at Negril. Miss T's serves elevated traditional Jamaican food — brown stew chicken, escovitch fish, rundown — in a historic estate house. $30–50 per person.",
          ],
          cost: "$185–240 total",
        },
        {
          day: "Day 4",
          title: "Blue Mountains Coffee Estate & Kingston Culture",
          items: [
            "7:00am: Private car to the Blue Mountains ($80–100 for the car, 2 hours from Negril or 45 minutes from Kingston). The Blue Mountains rise to 2,256m — the tallest point in Jamaica — and the mist-shrouded upper slopes produce the world's most expensive regularly traded coffee, grown at 900–1,500m.",
            "9:30am: Coffee estate tour at Old Tavern Estate or Craighton Estate ($25–35 entry, guided). Walk the estate, see the cherry-red coffee berries on the bushes, learn the pulping and drying process, and cup the finished product in the farm's tasting room. Blue Mountain coffee has a distinctive mild, clean sweetness with minimal bitterness — a world away from commercial blends.",
            "12:00pm: Hike to Blue Lagoon waterfall or along the Blue Mountains' ridgeline trail (guide required, $30–40, 2–3 hours). The views over the Caribbean from the upper ridge — Kingston and Port Royal visible, Cuba sometimes visible on clear days — are extraordinary.",
            "3:00pm: Kingston: Bob Marley Museum ($20 entry) with your private guide providing context beyond the standard tour. The political and social circumstances of 1970s Kingston that shaped Bob Marley's music — the JLP-PNP political violence, the Trench Town ghetto culture, the relationship with Haile Selassie and Rastafarianism — become comprehensible.",
            "7:00pm: Dinner in New Kingston at Usain Bolt's Tracks & Records or a local jerk centre. Night transfer back to Negril ($80–100 for private car).",
          ],
          cost: "$200–265 total",
        },
        {
          day: "Day 5",
          title: "Pelican Bar, Appleton Rum & Farewell Negril",
          items: [
            "9:00am: Private car to Pelican Bar on the south coast ($70–90 for the car, 1.5 hours from Negril). The fisherman's canoe ride out to the sandbar ($10), a Red Stripe at sea level, and the slightly surreal feeling of sitting in a bar in the middle of the Caribbean. Mid-morning on a weekday is the best time — fewer crowds, calmer water.",
            "12:00pm: Appleton Estate Rum Distillery — the full tour and private tasting session ($45 guided tour + tasting). Buy a bottle of Appleton Estate 12-year for $35 — considerably cheaper than at home.",
            "3:00pm: Return to Negril. Final afternoon on Seven Mile Beach. Order jerk lobster from a beach vendor ($25–35), swim, and accept that the next beach you visit will suffer by comparison.",
            "6:00pm: Transfer to Montego Bay airport (MBJ) — hotel-arranged transfer ($60–80, 90 minutes). Arrive 2.5 hours before international departure. The airport duty-free has reasonable Blue Mountain coffee and Appleton rum if you didn't buy at the estate.",
          ],
          cost: "$190–245 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$400–600/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & GoldenEye — Jamaica's Most Iconic Resort",
          items: [
            "Private meet-and-greet at Montego Bay airport. Drive in a dedicated air-conditioned vehicle to GoldenEye Resort on the north coast (1.5 hours, $150–200 transfer). GoldenEye is the estate where Ian Fleming wrote all 14 James Bond novels from 1952–1964. The resort preserves his original villa (complete with his writing desk and the lagoon he swam in every morning) and has expanded into a collection of private villas, beachfront cottages, and lagoon-side bungalows set in 52 acres of tropical garden.",
            "Rooms from $750–2,500/night. Fleming Villa itself ($5,000–8,000/night) sleeps 8 and includes a private butler, chef, and the peculiar pleasure of writing your own name at the desk where James Bond was invented.",
            "Afternoon: private snorkelling in Fleming's Lagoon — the same turquoise cove where the author swam every day. A private guide leads the snorkel trip, pointing out the coral formations and identifying species.",
            "Sundowner: cocktails at the resort's Bizot Bar (named after Fleming's neighbour, Noel Coward) as the light fails over the Caribbean.",
            "Dinner at The Gazebo restaurant — eight-course tasting menu using produce from the resort's organic garden, local fishermen's catches, and Blue Mountain ingredients. $120–180 per person. Book before arrival.",
          ],
          cost: "$900–2,500 total (villa + meals)",
        },
        {
          day: "Day 2",
          title: "Private Beach, Hopping & Firefly — Noel Coward's Villa",
          items: [
            "9:00am: Exclusive boat trip from GoldenEye's dock around the north coast — private catamaran ($300–400 for a half-day, 4 people). Snorkelling at Galina Point, a marine protected area with exceptional coral and turtle habitat.",
            "12:00pm: Firefly, Noel Coward's hilltop estate ($15 entry but arrange a private after-hours visit through GoldenEye, $100–150). The playwright's studio sits exactly as he left it, with his paintings, piano, and the terrace where he entertained Elizabeth Taylor, Sophia Loren, Marlene Dietrich, and the Queen Mother. The view over the coast is, by some accounts, the finest in all Jamaica.",
            "3:00pm: James Bond Beach — the beach used in Dr No (1962) is 10 minutes from GoldenEye. Private beach setup arranged by the resort: sun loungers, cold towels, champagne, and a butler.",
            "6:00pm: Return to resort. Spa treatment at Kariba Spa ($120–200 for a 90-minute deep tissue with local pimento oil).",
            "Dinner: private in-villa dinner prepared by the resort's chef — fresh lobster, jerk-spiced rack of lamb, and rum cake. Menus tailored in advance.",
          ],
          cost: "$600–900 total",
        },
        {
          day: "Day 3",
          title: "Blue Mountains Private Tour & Kingston Fine Dining",
          items: [
            "7:00am: Private car and expert guide to the Blue Mountains ($200–280 for car + guide, full day). The guide is a natural history expert who knows the birding trails, the coffee estates, and the hiking routes accessible only with local knowledge.",
            "9:30am: Private estate tour and cupping at Old Tavern Coffee Estate — the oldest single-estate Blue Mountain coffee producer, family-run. The private tasting involves 6–8 different roast profiles of the same bean. Purchase a 1kg bag of fresh-roasted Old Tavern Blue Mountain ($60–80) — this coffee retails for $120+ abroad.",
            "12:30pm: Mountain picnic lunch prepared by GoldenEye's kitchen — packed into a hamper and enjoyed on the Blue Mountain ridgeline with a view over the coast.",
            "3:00pm: Bob Marley Museum with a private guide who specialises in reggae history. After the museum, visit Trench Town Culture Yard ($10 entry) — the community housing project where Bob Marley and Bunny Wailer grew up. Local guides here are former residents who knew the musicians personally.",
            "7:30pm: Dinner at Gaucho's Restaurant or Norma's on the Terrace, Kingston — the finest restaurants in the Jamaican capital. Contemporary Jamaican cuisine using local farmers' produce and Caribbean seafood. $80–140 per person with wine. Return transfer to GoldenEye.",
          ],
          cost: "$500–700 total",
        },
        {
          day: "Day 4",
          title: "Transfer to Rockhouse Hotel, Negril — Cliff Diving & Spa",
          items: [
            "Private car from GoldenEye to Negril (2.5 hours, $150–200). Check into Rockhouse Hotel — a collection of thatch-roofed villas built into the limestone cliffs of Negril's West End. The rooms hang over the Caribbean, with private ladders down to the sea. Rooms $250–450/night. The Rockhouse aesthetic is stripped-back luxury: hammocks, stone bathrooms open to the sky, and the sound of waves below.",
            "Afternoon: cliff diving at Rockhouse's private dive platform ($10 for non-guests, free for guests). 4–8 metre cliffs into deep Caribbean water. The Rockhouse reef immediately below the cliffs has good coral health and snorkelling.",
            "4:30pm: Rockhouse Spa ($150–200 for 90-minute treatment). The spa is cantilevered over the water — listen to the Caribbean through the treatment table while a therapist works through tensions accumulated on lesser holidays.",
            "6:00pm: Rick's Café sunset with a reserved table ($30 minimum spend, well spent). VIP sections exist for guests who book through their hotel. The cliff divers' final performance at sunset is choreographed and genuinely impressive.",
            "Dinner: The Rockhouse Restaurant — one of the best meals in Jamaica. Fresh fish, local produce, and rum cocktails on a cliff above the sea. $60–100 per person.",
          ],
          cost: "$520–700 total",
        },
        {
          day: "Day 5",
          title: "Pelican Bar, Private Boat Tour & Departure",
          items: [
            "8:00am: Private speedboat from Negril to Pelican Bar ($200–300 for a private boat round-trip, 45 minutes each way via the south coast). Arriving by speedboat rather than a fisherman's canoe is pleasingly unnecessary. The bar's proprietor will have cold Red Stripe ready.",
            "12:00pm: Lunch at Jake's Hotel in Treasure Beach (close to Pelican Bar) — one of Jamaica's most beloved boutique hotels, run by the Henzell family (Chris Henzell directed The Harder They Come, 1972). The restaurant serves excellent south coast fish, conch, and breadfruit. $40–70 per person.",
            "3:00pm: Private speedboat return to Negril. Final swim from Rockhouse's cliffs.",
            "5:00pm: Private transfer to Montego Bay airport (MBJ) in a luxury vehicle — $120–160 for the transfer. Access the First Class lounge at MBJ if your airline provides it. Stock your carry-on with duty-free Appleton Estate 21-year rum ($70) and freshly vacuum-sealed Blue Mountain coffee ($50).",
            "Depart Jamaica with rum, coffee, the best jerk chicken memory of your life, and a deep suspicion that most other Caribbean islands are going to disappoint.",
          ],
          cost: "$400–600 total",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "Budget",
      accommodation: "$30–50 (guesthouse)",
      food: "$20–30 (local jerk spots)",
      transport: "$15–25 (shared taxis)",
      activities: "$25–40",
      total: "$90–120",
    },
    {
      tier: "Mid-Range",
      accommodation: "$150–250 (boutique hotel)",
      food: "$40–65",
      transport: "$30–50",
      activities: "$50–80",
      total: "$180–240",
    },
    {
      tier: "Luxury",
      accommodation: "$400–800 (GoldenEye/Rockhouse)",
      food: "$100–180",
      transport: "$100–200 (private car/boat)",
      activities: "$100–200",
      total: "$400–600",
    },
    {
      tier: "All-Inclusive Resort",
      accommodation: "$200–400 (Sandals/Beaches)",
      food: "Included",
      transport: "$30–50",
      activities: "Mostly included",
      total: "$250–450",
    },
    {
      tier: "Self-Catering",
      accommodation: "$60–100 (Airbnb villa)",
      food: "$15–25 (market cooking)",
      transport: "$20–35",
      activities: "$20–35",
      total: "$90–140",
    },
  ],
  mistakes: [
    {
      icon: "🚕",
      title: "Taking Unofficial 'Taxis' from Montego Bay Airport",
      desc: "Montego Bay airport is infamous for unlicensed taxi touts who approach arrivals with aggressive offers of cut-price transfers. These are not regulated, unmetered, and have resulted in overcharging, arguments, and occasional security incidents. Use only licensed white-plate JUTA taxis (red licence plates beginning with PP, TP, or PPV) or pre-book your transfer through your hotel. The official JUTA desk is inside the arrivals terminal. Budget travellers: the knutsford express bus from MBJ to major towns is safe, comfortable, and cheap.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌊",
      title: "Staying Only at an All-Inclusive and Never Leaving",
      desc: "Jamaica's all-inclusive resorts are comfortable but they are not Jamaica. Wristband culture — where everything is provided within a compound and the local economy sees none of your money — keeps travellers 100 metres from one of the most vibrant, interesting, and musically extraordinary cultures in the world. At minimum: leave for jerk chicken from a proper pit, visit a rum bar, take a local route taxi somewhere, and have one meal that isn't buffet. Your experience of Jamaica will be transformed.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "☀️",
      title: "Visiting in Hurricane Season Without Flexible Booking",
      desc: "Jamaica's hurricane season runs June–November. While direct hits are relatively rare, tropical storms can cause flooding, road closures, airport disruption, and rough seas that cancel boat tours for days at a time. If visiting June–November, book fully refundable or flexible accommodation and flights. December–April (dry season) is peak season for good reason — reliably sunny, lower humidity, no hurricane risk. Prices are 20–40% higher in peak season but worth it for predictable weather.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💸",
      title: "Paying in USD Everywhere and Getting Tourist Exchange Rates",
      desc: "US Dollars work everywhere in tourist Jamaica — but vendors apply an exchange rate that benefits them, not you. At a jerk stand, a vendor might price jerk chicken at $10 USD but charge 1,400 JMD (which is $9 USD at the correct rate). Not dramatic on a single purchase, but across a 5-day trip it adds up. Withdraw JMD from ATMs (available in all towns) and pay local prices in local currency for significant daily savings. Keep USD for hotel payments, tour deposits, and emergencies.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌿",
      title: "Buying Ganja From Random Street Vendors",
      desc: "Jamaica decriminalised small amounts of cannabis in 2015 and licensed dispensaries exist. However, buying from unlicensed street vendors can result in police attention, overcharging, and occasional use of cannabis as an excuse for robbery. If you choose to use cannabis legally, licensed dispensaries in tourist areas (Negril, Ocho Rios, Montego Bay) sell quality-tested product at transparent prices. The Rastafarian sacramental use of cannabis is religious and cultural — treat it with respect rather than as a novelty.",
      color: "bg-purple-50 border-purple-200",
    },
    {
      icon: "🏖️",
      title: "Ignoring Jamaica's South Coast Entirely",
      desc: "Most visitors to Jamaica follow the same circuit: Montego Bay → Negril → Ocho Rios. Jamaica's undeveloped south coast — Treasure Beach, Black River, the Great Morass, Jake's Hotel — is everything the north coast was before mass tourism arrived. No cruise ships, no resort strips, local fishing villages, and Pelican Bar (a wooden bar on a sandbar in the middle of the sea, inexplicably wonderful). If you have 5 days, spend at least one of them on the south coast.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  tips: [
    {
      icon: "🍗",
      title: "The Best Jerk is Always Off the Main Tourist Road",
      desc: "The definitive jerk chicken and jerk pork in Jamaica is cooked low and slow over pimento wood (allspice wood) at roadside pits operated by locals for locals. Price guide: $6–10 USD for a half-chicken. Tell-tale signs of a good jerk pit: wood smoke, blackened oil drums, a crowd of Jamaicans, and no tourist pricing board. Scotchies in Ocho Rios and Montego Bay is the most praised, but any serious roadside pit along the B1 highway will outperform any hotel restaurant jerk, always.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🎵",
      title: "Go to a Sound System Dance or Live Reggae Night",
      desc: "Jamaica's music culture is most alive at sound system dances (outdoor reggae/dancehall events with enormous speakers) and live reggae nights at bars in Negril and Kingston. Tourist-friendly live reggae is found at Alfred's Ocean Palace on Seven Mile Beach (free entry on live music nights, Thursday and Sunday) and at the Rockhouse's sundowner events. In Kingston, Dub Club on Sundays at Skyline Drive is Jamaica's finest reggae institution — a rotating cast of the island's best musicians playing under the stars. Take a taxi ($10–15).",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🎒",
      title: "Book Tours Via GetYourGuide for Reliable Operators",
      desc: "Jamaica's informal tour economy has some excellent local operators and some unreliable ones. For cliff diving at Rick's Café, Dunn's River Falls, Blue Hole, catamaran sunset cruises, and Blue Mountain tours, use GetYourGuide for vetted, reviewed operators: https://www.getyourguide.com/s/?q=Jamaica&partner_id=PSZA5UI. Particularly important for the Blue Mountains (where private guides make an enormous difference) and Pelican Bar excursions from Treasure Beach.",
      color: "bg-indigo-50 border-indigo-200",
    },
    {
      icon: "🌅",
      title: "Rick's Café: Go at 5pm, Not Sunset",
      desc: "Rick's Café attracts the largest crowd at the literal moment of sunset — and by that point, every cliff-side perch has 15 people on it. Arrive at 5pm (about 90 minutes before sunset in December–April, 60 minutes before in the long days of June–July). Buy your drink, find your cliff-edge position, and let the crowd fill in behind you. The cliff divers perform throughout the afternoon, not just at sunset — you'll see more dives with less jostling if you arrive early. Weekdays are significantly less crowded than weekends.",
      color: "bg-amber-50 border-amber-200",
    },
  ],
  faqs: [
    {
      q: "Is Jamaica safe for tourists in 2026?",
      a: "Jamaica has a reputation for crime that is simultaneously earned and overstated for tourists. The island's murder rate is concentrated in specific urban areas — parts of Kingston, Spanish Town, and inner-city Montego Bay — that tourists have no reason to visit. The tourist areas (Negril, Seven Mile Beach, Ocho Rios, the north coast resort strip, Treasure Beach) experience very low levels of tourist-targeted violent crime. Petty theft, beach vendors who are occasionally pushy, and overcharging are the main irritants. Travel with normal urban awareness, don't flash expensive items, use hotel-recommended taxis, and Jamaica is a remarkable, welcoming, warm-hearted destination.",
    },
    {
      q: "What is ackee and saltfish and should I try it?",
      a: "Ackee and saltfish is Jamaica's national dish — a sauté of salted cod fish with ackee fruit (which has a scrambled egg-like texture when cooked), onions, tomatoes, Scotch bonnet pepper, and thyme. It is almost always served at breakfast with boiled dumplings, fried plantain, and roasted breadfruit. Yes, you absolutely should try it. It is one of the great breakfast dishes of the world and is completely unlike anything you will have eaten before. Note: unripe ackee is toxic — only buy it in established restaurants where it is cooked properly.",
    },
    {
      q: "What is the best way to get around Jamaica on a budget?",
      a: "Route taxis (shared minibuses and cars that follow fixed routes) are Jamaica's primary public transport and are very cheap ($1–5 for most inter-town hops). They can be crowded, don't run to a schedule, and require some knowledge of local routes — ask your guesthouse to explain the system for your specific route. For longer journeys (Montego Bay to Kingston, Montego Bay to Negril), Knutsford Express runs comfortable coach services with air conditioning, reliable schedules, and no hassle ($15–20). Renting a car ($50–80/day) gives maximum freedom but driving standards on Jamaican roads require alertness.",
    },
    {
      q: "How much does Blue Mountain coffee cost at the source?",
      a: "At the estate in the Blue Mountains, fresh-roasted Blue Mountain coffee sells for $30–60 per pound (450g) depending on the estate and the roast profile. Old Tavern, Mavis Bank, and Wallenford are the most reputable estates. At the airport duty-free, prices are $40–70/pound. In supermarkets in the UK or US, you'll pay $60–120/pound for the same coffee. Buying at the estate is dramatically cheaper and the freshness is incomparable — coffee roasted that morning has a clarity and brightness that week-old roasts lose entirely.",
    },
    {
      q: "Is Negril better than Ocho Rios for a 5-day Jamaica trip?",
      a: "For most first-time visitors, Negril is the better base — Seven Mile Beach is one of the genuinely great Caribbean beaches, the West End cliffs are unique, Rick's Café is an unmissable experience, and the overall atmosphere is more laid-back and less cruise-ship oriented than Ocho Rios. Ocho Rios (Ochie) is more centrally located, making Dunn's River Falls and the Blue Mountains easier to access, but the town itself is heavily tourism-oriented and the beaches are less impressive. An ideal 5-day trip bases in Negril (days 1–2), day-trips to Ocho Rios (day 3), and includes at least one night on the south coast near Treasure Beach (day 4).",
    },
  ],
  combineWith: [
    "Cuba (Havana, Viñales, Trinidad de Cuba)",
    "Barbados (beaches, Mount Gay Rum, Crop Over festival)",
    "Colombia (Cartagena, Medellín — easy Caribbean flight connections)",
  ],
  relatedSlugs: ["havana-4-days", "colombia-7-days", "rio-de-janeiro-5-days"],
  galleryQuery: "jamaica negril beach reggae blue mountains waterfall caribbean",
};

export default function JamaicaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <UniversalBlogClient data={data} />
    </>
  );
}
