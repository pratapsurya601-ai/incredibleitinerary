import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Banff",
  country: "Canada",
  countryFlag: "🇨🇦",
  slug: "banff-5-days",
  heroQuery: "banff national park canada lake louise turquoise mountains",
  heroAlt: "Banff National Park Lake Louise turquoise water with Rocky Mountain reflections",
  category: "North America",
  date: "April 5, 2026",
  readTime: "15 min read",
  intro: "Banff at 5:30am — the first shuttle to Moraine Lake pulling away in darkness, arriving to an electric-blue lake turning gold as the sun clears the Valley of Ten Peaks, not another voice anywhere — is one of those rare travel moments that matches every photograph you've seen and then surpasses them. Five days gives you Lake Louise at leisure, the Icefields Parkway in full, Moraine Lake at sunrise, wildlife at dusk on the Vermilion Lakes, and enough mountain air to feel genuinely restored.",
  stats: { duration: "5 Days", budgetFrom: "C$80", bestMonths: "Jun–Sep (summer), Dec–Mar (skiing)", airport: "YYC (Calgary, 1.5h drive)" },
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
        ["Visa Required", "Indian passport holders are not eligible for the eTA and must apply for a full Canadian Temporary Resident Visa (TRV). This is a lengthier process — apply a minimum of 3 months before travel, ideally earlier. The IRCC (Immigration, Refugees and Citizenship Canada) processing times fluctuate significantly and can exceed 12 weeks."],
        ["Application Process", "Apply online at the IRCC portal (canada.ca/en/immigration-refugees-citizenship). Fee: CAD 100 per person. Required documents include a valid passport, completed application form, financial proof (bank statements, employment letter, salary slips), travel history, confirmed itinerary, and photographs. Biometric enrollment may be required (CAD 85 additional)."],
        ["Financial Proof", "IRCC expects proof of sufficient funds — typically bank statements showing a minimum of CAD 3,000–5,000 readily available, combined with employment letters demonstrating stable income and strong ties to home country. The visa is discretionary; rejection rates for some nationalities are non-trivial. Apply with a strong application package."],
        ["Multi-Entry Visa", "If approved, Canadian visas are often issued as multi-entry with 10-year validity (or until passport expiry, whichever is sooner). This makes the significant application effort worthwhile for repeat Canada travel. Include a cover letter explaining your travel plans clearly."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports / eTA",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["eTA Required", "Citizens of the UK, Australia, EU member states, and most other developed nations are not visa-exempt but require an Electronic Travel Authorization (eTA) before boarding a flight to Canada. Apply online at canada.ca — CAD 7, takes minutes, valid for 5 years or until passport expires. Do this weeks before travel, not at the gate."],
        ["USA Passport Holders", "US citizens and permanent residents do not need a visa or eTA to enter Canada and can cross the land border or fly in with a valid passport. A passport or NEXUS card is required — a driver's license is not sufficient for air travel."],
        ["NEXUS Card", "For frequent US-Canada travelers, the NEXUS trusted traveler card (CAD 50, 5-year validity) allows expedited border crossing and access to dedicated airport lanes. Requires a background check and interview — apply 3–4 months ahead."],
        ["Parks Canada Pass", "Not a visa requirement but essential to plan: the Banff National Park day pass (CAD 11.70/person/day) or Annual Discovery Pass (CAD 72.25/person or CAD 145.25 for a family of up to 7) is required for all national park activities including hiking. Buy online at reservation.pc.gc.ca before arrival."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "C$80–140/day",
      days: [
        {
          day: "Day 1",
          title: "Banff Town: Gondola, Hot Springs & Bow Falls",
          items: [
            "Arrive from Calgary (YYC, 1.5h drive or Brewster Express shuttle CAD 35–55 one-way). Check into HI Banff Alpine Centre hostel (CAD 35–60/dorm, CAD 120–160 private room — book months ahead for summer) or Banff Caribou Lodge for a mid-range option.",
            "2:00pm — Sulphur Mountain Gondola (CAD 65 return, 8-minute ride to 2,281m elevation). The 360° panorama from the summit takes in the Bow Valley, town of Banff below, and the Rocky Mountain range stretching to the horizon. The boardwalk at the top (free with gondola) connects to the restored Sanson's Peak Meteorological Station — a short walk with consistently better views than the main gondola terminal.",
            "4:30pm — Banff Upper Hot Springs (CAD 12, 10-minute walk from the gondola base). The thermal pool sits at 37–40°C with a direct view of Mount Rundle. Bring a towel (CAD 2 rental available). Avoid the peak 6–8pm window on weekends.",
            "6:30pm — Bow Falls (free, 10-minute walk from town). A short waterfall where the Bow River narrows through a canyon — the volume and colour of the glacially-fed water is extraordinary even if the falls themselves are modest.",
            "8:00pm — Fairmont Banff Springs Hotel exterior (free). The most photographed building in Canada — a Scottish Baronial castle in the Rocky Mountains, built 1888, now a National Historic Site. Walk around the exterior at dusk when the castle lights up. Dinner on Banff Avenue: Wild Flour Bakery for soup and sandwich (CAD 12–18) or Tooloulou's for Cajun food (CAD 18–28).",
          ],
          cost: "C$120–190 total (gondola + hot springs + food + shuttle from Calgary)",
        },
        {
          day: "Day 2",
          title: "Lake Louise & Moraine Lake",
          items: [
            "IMPORTANT: Moraine Lake requires a Parks Canada shuttle (CAD 16 return, book months in advance at reservation.pc.gc.ca — fills up by February for summer). Private vehicles are NOT permitted to drive to Moraine Lake June–October. Without a shuttle reservation you cannot go. Book this before anything else when planning your trip.",
            "5:00am — First shuttle to Moraine Lake departs at 5:30am from Lake Louise Village. Arrive at the lake by 5:50am. Walk the Rockpile Trail (20 minutes, free) to the famous overlook. The lake turns electric blue when the sun clears the Ten Peaks — approximately 6:00–6:30am. This is the view on the Canadian twenty-dollar bill. No photograph does it justice.",
            "9:00am — Return shuttle to Lake Louise Village. Walk 20 minutes to Lake Louise itself (C$10 parking if driving). The glacier-fed lake and Chateau Lake Louise in the background are instantly recognisable — but the lake is even more arresting in person because the colour is continuously shifting from green to jade to turquoise.",
            "10:30am — Plain of Six Glaciers hike (14km return, 5–6 hours, free with park pass). The trail follows the Lake Louise shoreline then climbs to the historic Plain of Six Glaciers teahouse (open seasonally, CAD 15–25 for lunch — worth it for the view). The glaciers visible from the teahouse are retreating measurably year by year.",
            "5:30pm — Return to Banff town. Dinner: The Grizzly House (Banff Avenue institution since 1967, fondue speciality, CAD 35–60/person) or a supermarket self-catering option (Safeway on Banff Avenue for budget cooking).",
          ],
          cost: "C$80–160 total (shuttle + park pass + food, no accommodation upgrade)",
        },
        {
          day: "Day 3",
          title: "Icefields Parkway Drive",
          items: [
            "The Icefields Parkway (Highway 93 North) is consistently ranked among the most beautiful highways on earth — 230km from Banff to Jasper along a corridor of glaciers, turquoise lakes, and wildlife. The drive itself is free (park pass required). Stop at everything.",
            "8:00am — Depart Banff. First stop: Bow Lake (95km north, 1h drive) — the source of the Bow River, surrounded by the Wapta Icefield. The lodge at Bow Lake (Num-Ti-Jah, no entry fee to walk the shore) is the closest building to the icefield.",
            "10:00am — Peyto Lake viewpoint (125km, 15km north of Bow Lake). Park and walk 20 minutes uphill to the overlook. The lake is shaped like a teardrop and the colour is electric blue from the glacial flour suspended in the water. Japanese tour buses typically arrive at 10:30am — aim to reach the viewpoint by 10:00am.",
            "12:00pm — Columbia Icefield Discovery Centre (168km). The Athabasca Glacier extends to within 1km of the highway. Walk the free interpretive trail to the glacier toe. The Glacier Adventure snow bus experience (CAD 52) takes you onto the icefield in a specially modified vehicle — standing on a glacier is an experience worth the price.",
            "2:30pm — Athabasca Falls (30km south of Jasper) — a wide, powerful waterfall cutting through a narrow canyon. The spray at the main overlook is impressive in high water season (June–July). Free with park pass.",
            "5:00pm — Return to Banff (or continue to Jasper for overnight if adjusting the itinerary). Dinner at the Elkhorn Dining Room or a Banff Avenue restaurant.",
          ],
          cost: "C$100–160 total (fuel/transport + Glacier Adventure CAD 52 optional + food)",
        },
        {
          day: "Day 4",
          title: "Johnston Canyon, Vermilion Lakes & Wildlife",
          items: [
            "8:00am — Johnston Canyon (26km west of Banff). The trail follows a catwalk bolted to the canyon walls above a turquoise river. Lower Falls: 2.6km return, 45 minutes, accessible, spectacular. Upper Falls: 4.8km return, 2 hours, more dramatic. The canyon can be icy in early morning in spring — trail spikes are available for rent at the trailhead (CAD 5). Free with park pass.",
            "11:00am — Ink Pots: continue 3km past the Upper Falls to a series of circular cold-water springs that bubble up through the meadow floor in eerie concentric circles. Very few visitors make it this far — you may have the meadow to yourself.",
            "1:30pm — Picnic lunch in the canyon car park area (bring food from Banff — there is no food service at Johnston Canyon).",
            "3:00pm — Vermilion Lakes (5-minute drive from Banff townsite). Three interconnected lakes in a wetland in the valley floor. The best place in the Banff area for wildlife at dusk: elk are common (keep 30m distance), beavers active at sunset, great blue herons stalking the shallows. The reflection of Mount Rundle in the still water at sunset is the most photographed scene in Banff after Lake Louise.",
            "6:30pm — Banff Avenue for dinner. Saltlik (steakhouse, CAD 45–75/person) or Bear Street Tavern (wood-fired pizza, CAD 20–35).",
            "8:30pm — Two Jack Lake (20 minutes from Banff) for the last light. The lake is smaller and quieter than Louise — elk are frequently visible on the far shore in summer evenings.",
          ],
          cost: "C$60–110 total (free hiking + food + park pass)",
        },
        {
          day: "Day 5",
          title: "Ha Ling Peak Hike (Canmore) & Calgary Departure",
          items: [
            "7:00am — Drive 25 minutes east to Canmore (no national park pass required in Canmore — it's outside the park boundary). Ha Ling Peak trailhead is a 5-minute drive from downtown Canmore.",
            "7:30am — Ha Ling Peak hike (7.2km return, 520m elevation gain, 2.5–3.5 hours). The summit panorama takes in the full Three Sisters peaks, the Bow Valley, and the Canmore Nordic Centre below. The trail is steep but well-maintained. Bring water and layers — summit temperatures can be 10°C colder than the valley.",
            "11:00am — Descend to Canmore. Lunch at Communitea Café (CAD 15–25, vegetarian-friendly, outdoor seating) or Rocky Mountain Bagel (CAD 10–15).",
            "1:00pm — Farewell poutine (Quebec-style, gravy and cheese curds on fries — CAD 12–18 anywhere in Banff or Canmore). This is mandatory.",
            "2:00pm — Drive to Calgary YYC (1.5h). Allow extra time if returning a rental car. Calgary Airport has a direct CTrain rail link to downtown if spending a night in Calgary.",
            "Departure or overnight Calgary: The 5-day Banff trip naturally combines with a Calgary stopover (Stampede in July, excellent restaurant scene year-round).",
          ],
          cost: "C$60–100 total (food + fuel to Calgary)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "C$220–400/day",
      days: [
        {
          day: "Day 1",
          title: "Banff Arrival, Gondola & Castle Evening",
          items: [
            "Arrive from Calgary by private shuttle or rental car. Check into Banff Park Lodge (CAD 180–280/night) or Moose Hotel & Suites (CAD 200–320, rooftop hot pools included).",
            "2:30pm — Sulphur Mountain Gondola (CAD 65) with the extension walk to Sanson's Peak — the boardwalk is less crowded than the main summit and the views are better.",
            "5:00pm — Banff Upper Hot Springs for a post-gondola soak (CAD 12).",
            "7:30pm — Fairmont Banff Springs Hotel tour: the castle is a National Historic Site and the interior (lobby, corridors, art collection) is open to non-staying guests. Stop for a drink at the Rundle Bar (CAD 18–25/cocktail) overlooking the Bow River and Bow Falls below.",
            "9:00pm — Dinner at Eden Restaurant at the Rimrock Resort Hotel (CAD 80–120/person, contemporary Canadian cuisine, panoramic valley views from the clifftop dining room — book ahead).",
          ],
          cost: "C$280–420 total",
        },
        {
          day: "Day 2",
          title: "Moraine Lake Sunrise & Lake Louise",
          items: [
            "4:45am — Pre-booked Parks Canada shuttle to Moraine Lake (first departure 5:30am, CAD 16 return). Arrive at the Rockpile in darkness and wait for sunrise — the transition from grey to gold to the full electric blue of the lake takes approximately 40 minutes and is the best 40 minutes in Canadian tourism.",
            "9:00am — Return shuttle to Lake Louise. Breakfast at the Chateau Lake Louise Fairview Bar & Restaurant (CAD 30–50, views across the lake to the glacier). The château's interior is worth exploring even if not staying — the public areas reflect the full grandeur of the Canadian Pacific Railway era.",
            "11:00am — Lake Agnes Teahouse hike (7.2km return, 385m gain, 3 hours). The teahouse at the top of Lake Agnes has been serving hikers since 1905 — no running water or electricity, everything packed in by staff on foot. Tea and scones at CAD 12–20 after a mountain climb is one of Canada's great simple pleasures.",
            "4:00pm — Return to Banff. Spa treatment at the Willow Stream Spa at Fairmont Banff Springs (CAD 200–350 for a 75-minute treatment).",
            "8:00pm — Dinner at the Bow Valley Grill at Fairmont Banff Springs (CAD 60–90/person, Alberta prime beef, extensive Canadian wine list).",
          ],
          cost: "C$350–550 total",
        },
        {
          day: "Day 3",
          title: "Icefields Parkway Guided Drive",
          items: [
            "8:00am — Guided Icefields Parkway tour (Discover Banff Tours or Pursuit, CAD 150–250/person, full-day, includes lunch and Columbia Icefield snow bus). A guide provides geological and ecological context that transforms the drive — the formations are explained, the wildlife spotted and identified, the stops optimised for the best light.",
            "10:00am — Peyto Lake with a guide who knows exactly where to stand for the best photographs and can explain the glacial flour phenomenon that creates the colour.",
            "12:30pm — Lunch at the Columbia Icefield Discovery Centre (CAD 25–40).",
            "1:30pm — Glacier Adventure snow bus onto Athabasca Glacier (CAD 52, included in most guided tours or pay on-site). Skyliner glass walkway over the glacier: CAD 35 extra.",
            "5:00pm — Return via Athabasca Falls. In the late afternoon the canyon light turns golden and the crowds have thinned.",
            "8:00pm — Dinner at The Bison Restaurant (Bear Street, Banff, CAD 45–70/person — Alberta bison, locally-foraged ingredients, excellent wine list).",
          ],
          cost: "C$380–550 total",
        },
        {
          day: "Day 4",
          title: "Via Ferrata & Vermilion Lakes Wildlife",
          items: [
            "8:30am — Mt Norquay Via Ferrata (CAD 119–189 depending on route difficulty, 3–5 hours, includes guide, harness, and helmet). You clip into steel cables bolted to the mountain face and climb cliff sections that would be impossible without the fixed equipment. The Explorer route is ideal for first-timers; the Skyline route is more committing. Minimum age 11. Advance booking essential.",
            "2:00pm — Johnston Canyon Lower and Upper Falls (free with park pass). If the Via Ferrata used up energy, just do the Lower Falls (2.6km return, 45 minutes).",
            "5:00pm — Vermilion Lakes at dusk for wildlife. Rent an e-bike from Wilson Mountain Sports in Banff (CAD 60–90/half day) and ride the Vermilion Lakes Road — the flat trail is perfect for cycling while scanning the wetland edges for elk and beaver.",
            "8:00pm — Dinner at Elk and Oarsman (Banff Avenue, CAD 35–55/person, reliable Alberta beef, live music some evenings).",
          ],
          cost: "C$300–420 total",
        },
        {
          day: "Day 5",
          title: "Canmore & Golden Hour Farewell",
          items: [
            "8:00am — Ha Ling Peak hike from Canmore (7.2km return, 2.5h, free). The mid-range option: hire a local guide from Canmore Alpine Guides (CAD 150–200) who can introduce the technical climbing history of the Three Sisters and Ha Ling.",
            "12:00pm — Brunch at Communitea or the Drake Eatery in Canmore (CAD 20–35/person).",
            "2:30pm — Canmore Art Gallery district and Bow River walk. Canmore's small-town main street has excellent outdoor gear shops, galleries, and coffee.",
            "5:00pm — Back to Banff for sunset from the Fairmont Banff Springs terrace — the Bow Valley fills with pink light at this time of year. The castle's exterior photographed against alpenglow is exceptional.",
            "7:00pm — Farewell dinner at Saltlik (steakhouse, CAD 55–80/person) with an Alberta VQA wine.",
          ],
          cost: "C$280–380 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "C$600–2,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at Fairmont Banff Springs",
          items: [
            "Private car from Calgary YYC (CAD 300–450 for a luxury vehicle service). Check into Fairmont Banff Springs (CAD 500–1,500/night depending on room and season — book 6+ months ahead for summer) or Rimrock Resort Hotel (CAD 350–800/night). The castle rooms with Bow Valley views are the standard you're paying for.",
            "Afternoon: private guide meets you for a 2-hour Banff orientation walk — Bow Falls, the confluence of the Spray and Bow Rivers, and the castle's history as Canada's 3rd national park foundation story.",
            "5:30pm — Willow Stream Spa at the Fairmont (CAD 200–400 for a 90-minute Rocky Mountain signature treatment — hot stone, pine oil, river-stone compress). The thermal pools are open until 9pm.",
            "8:30pm — Dinner at Eden Restaurant at the Rimrock (CAD 120–180/person tasting menu) or room service in a Bow Valley view suite with champagne.",
          ],
          cost: "C$800–1,400 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Exclusive Moraine Lake & Lake Louise",
          items: [
            "4:30am — Private car to Moraine Lake (hotel concierge can arrange CAD 300–500 return with driver wait). You cannot drive to Moraine Lake in season without a shuttle reservation, but a knowledgeable concierge can navigate the Parks Canada permit system for private vehicle access under certain conditions — ask specifically.",
            "5:30am — Moraine Lake at sunrise with a private photography guide (CAD 300–500 for a 3-hour session). Composition, light, and technical guidance while the lake turns blue in front of you.",
            "10:00am — Lake Agnes Teahouse hike with a professional mountain guide (Yamnuska Mountain Adventures, CAD 250–400/person, small group). The guide interprets the alpine ecology, identifies medicinal plants, and ensures safety in wildlife territory.",
            "3:00pm — Private helicopter flightseeing over the Columbia Icefield (Alpine Helicopters or Rockies Heli, CAD 350–600/person for a 30-minute flight over the icefield and surrounding peaks).",
            "8:00pm — Private chef dinner at the Fairmont Banff Springs (arrange through concierge, CAD 250–400/person for an in-room multi-course Alberta feast).",
          ],
          cost: "C$1,200–2,500 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Icefields Parkway by Helicopter & Ground",
          items: [
            "8:00am — Private guided Icefields Parkway drive in a chartered luxury SUV with a senior naturalist guide (CAD 800–1,500 for the day, vehicle and guide). Stops are entirely at your discretion — as long as needed at Peyto Lake, Bow Lake, and the Columbia Icefield.",
            "12:00pm — Lunch at Num-Ti-Jah Lodge on Bow Lake (historic 1920s log lodge, CAD 40–70 for lunch, no advance booking available — arrive and wait if needed).",
            "2:00pm — Columbia Icefield: Glacier Adventure + Skywalk (CAD 87 combined). Then a private 30-minute snowmobile tour of the icefield for those booked with Pursuit Adventures (CAD 200–300 extra).",
            "6:00pm — Return to Banff. Cocktails at the Waldhaus Bar inside the Fairmont (a separate clubhouse building in the forest — extraordinary setting).",
            "8:30pm — The Bow Valley Grill tasting menu (CAD 120–160/person).",
          ],
          cost: "C$1,400–2,000 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Via Ferrata & Evening Wildlife Safari",
          items: [
            "8:30am — Mt Norquay Skyline Via Ferrata (most challenging route, CAD 189, guide included). A serious mountaineering experience along the mountain ridgeline.",
            "2:00pm — Recovery at Willow Stream Spa (90-minute deep tissue mountain recovery treatment, CAD 250–350).",
            "5:30pm — Private wildlife safari with a naturalist guide (Banff Trail Riders or a specialised wildlife operator, CAD 250–400/person, 3-hour evening tour by 4WD). Grizzly bear sightings, wolf tracks, elk herds, and bighorn sheep at close range — this is the Rocky Mountain ecosystem at the time of day it's most active.",
            "9:00pm — Late dinner at The Maple Leaf restaurant on Banff Avenue (CAD 70–100/person, Canadian wild game and seafood menu — Arctic char, elk medallion, Canadian lobster).",
          ],
          cost: "C$900–1,400 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Canmore & Farewell Banff",
          items: [
            "9:00am — Private helicopter to Canmore Summit helipad (Rocky Mountain Helitours, CAD 400–600/person one-way scenic flight with glacier and valley views).",
            "10:30am — Guided alpine rock climbing on the Canmore limestone walls with a ACMG-certified guide from Yamnuska (CAD 350–500 for a private half-day).",
            "1:30pm — Farewell lunch at The Drake Eatery (CAD 40–65/person, Canmore's best upscale casual restaurant).",
            "4:00pm — Private car back to Banff or directly to Calgary YYC.",
            "Last experience: the Fairmont Banff Springs Tea Lobby for afternoon tea (CAD 75–95/person with champagne option, served in the castle's great hall).",
          ],
          cost: "C$900–1,500 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "C$35–65", food: "C$25–45", transport: "C$10–20", activities: "C$30–60", total: "C$100–190/day" },
    { tier: "✨ Mid-Range", accommodation: "C$180–320", food: "C$60–100", transport: "C$30–60", activities: "C$80–150", total: "C$350–630/day" },
    { tier: "💎 Luxury", accommodation: "C$500–1,500", food: "C$150–400", transport: "C$100–500", activities: "C$200–800", total: "C$950–3,200/day" },
  ],
  mistakes: [
    { icon: "🚌", title: "Not Booking the Moraine Lake Shuttle in Advance", desc: "The Moraine Lake Parks Canada shuttle fills by February for the July–August peak season. There is no alternative transport to Moraine Lake in season — private vehicles are banned, taxis are prohibited, and walking the access road is dangerous with wildlife. If you arrive without a shuttle reservation in July or August, you cannot go. Book at reservation.pc.gc.ca the day reservations open (typically January for the following summer).", color: "bg-red-50 border-red-200" },
    { icon: "🐻", title: "Visiting Without Bear Spray", desc: "Banff National Park has active populations of black bears and grizzly bears. Bear spray (a powerful pepper-based deterrent, effective range 7–10m) is the most effective protection against a charging bear — more effective than firearms. Buy or rent bear spray immediately upon arrival in Banff (CAD 40–55 to purchase, CAD 5–10/day to rent). Carry it accessible on your hip, not in your pack. Make noise on trails.", color: "bg-orange-50 border-orange-200" },
    { icon: "🚗", title: "Driving the Icefields Parkway Without Stopping", desc: "Many visitors treat the Icefields Parkway as a highway to Jasper and drive it in 2.5 hours. The Parkway has 30+ designated pullouts, each with a specific feature — a particular mountain face, a turquoise lake, a glacier tongue. Stopping at all of them adds 2–3 hours to the drive and transforms the experience entirely. Allow a full day, not a morning.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🎫", title: "Entering Banff Without a Parks Canada Pass", desc: "Banff National Park requires a valid Parks Canada entry pass for all visitors, including those just driving through. Day passes (CAD 11.70/person) and annual Discovery Passes (CAD 72.25/individual, CAD 145.25/group of up to 7) can be purchased at park gates or online. The annual pass pays for itself on day 7 of use and is the best value for a 5-day visit combined with other national parks.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🌅", title: "Moraine Lake Sunrise: First Shuttle is 5:30am", desc: "The lake turns electric blue when sunlight clears the Valley of Ten Peaks — typically 6:00–6:30am. Take the first Parks Canada shuttle departure (5:30am), walk the Rockpile (20 min), and reach the viewpoint before 6am. The transition from grey mountain shadow to full lake colour takes about 40 minutes and is the single greatest natural display in Canada. By 8am the lake is crowded; by 9am it is very crowded.", color: "bg-amber-50 border-amber-200" },
    { icon: "🦌", title: "Peyto Lake at 8am Before Tour Buses Arrive", desc: "The Peyto Lake viewpoint is on every tour bus itinerary in Banff. Japanese and Chinese tour operators typically arrive at the lower viewpoint between 10am–11am. Arrive by 8am and you have the overlook to yourself — the electric-blue teardrop lake and the valley below in morning light. The upper viewpoint (15-minute additional walk) is almost always empty even during peak hours.", color: "bg-teal-50 border-teal-200" },
    { icon: "🦌", title: "Banff at Dusk for Wildlife on the Valley Floor", desc: "Elk and deer regularly walk through Banff townsite in the hour before and after sunset. The Vermilion Lakes road at dusk (free to walk or cycle) is consistently productive — beaver at the dam, great blue heron in the shallows, elk crossing the meadow in the background of Mount Rundle. Keep a 30m distance from elk at all times — they appear docile but can charge. Bears are occasionally seen near the lakes.", color: "bg-green-50 border-green-200" },
    { icon: "🏰", title: "Fairmont Banff Springs Exterior at Golden Hour", desc: "The castle turns from grey stone to warm amber in the 30-minute window before sunset — the most photogenic version of the most photogenic building in Canada. Stand on the Bow River bridge or at the lower terrace of the hotel for the classic angle with Bow Falls in the foreground. You do not need to be a guest to access the grounds and take photographs. This is free and worth planning your Day 1 evening around.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "How do I get a Canada visa as an Indian passport holder?", a: "Indian passport holders require a full Canadian Temporary Resident Visa, not an eTA. Apply on the IRCC portal at canada.ca. Fee: CAD 100 plus CAD 85 for biometrics if required. Processing times vary from 4 weeks to 16+ weeks — apply at least 3 months before travel. Strong bank statements, an employment letter with stable income, and a clear travel itinerary significantly improve approval chances. Multi-entry visas are commonly issued for 10 years if approved." },
    { q: "How do I book the Moraine Lake shuttle?", a: "Reservations open on the Parks Canada website (reservation.pc.gc.ca) in January for the following summer season. Set a calendar alert for the exact opening date — popular time slots are fully booked within hours. The round-trip shuttle costs CAD 16/person and departs from the Lake Louise Overflow Parking lot or the Lake Louise Ski Resort. First departure is 5:30am. Without a reservation, there is no legal way to access Moraine Lake between June and October." },
    { q: "How serious is the bear danger in Banff?", a: "Bear encounters are real but serious incidents are rare when visitors follow protocols. Black bears and grizzly bears are both present in the park. Carry bear spray and know how to use it (remove safety, spray at face level when a bear is within 10m). Make noise on trails — clap, talk loudly, use a bear bell. Never run from a bear. Keep food in approved bear canisters when camping. Parks Canada rangers do excellent bear safety briefings at the Banff Visitor Centre — attend one on Day 1." },
    { q: "When is the best time to visit Banff?", a: "Summer (June–September) for hiking, Moraine Lake, and wildlife — the lakes are at maximum colour from glacier melt. July and August are peak crowds and prices. June is excellent (lower crowds, some snow on high trails) and September is arguably the best month — larches turn gold, crowds drop by 40%, elk are in rut. Winter (December–March) for skiing at Banff Sunshine, Lake Louise, and Mt Norquay — the skiing is world-class, the town is atmospheric with snow, and hotel rates drop substantially." },
    { q: "Should I visit Banff or Toronto and Vancouver first?", a: "Banff and Toronto/Vancouver serve entirely different purposes. Banff is for wilderness, mountains, and nature. Toronto and Vancouver are for urban culture, food scenes, and city exploration. Most international first-timers to Canada choose Banff over the cities because the landscape is uniquely Canadian and unavailable elsewhere. If you have 10 days: 5 in Banff, 2 in Vancouver, and a day in Whistler is the classic combination. Banff is the non-negotiable anchor of any Canadian trip." },
  ],
  combineWith: ["vancouver-4-days", "jasper-3-days", "whistler-3-days"],
  relatedSlugs: ["vancouver-4-days", "toronto-3-days", "new-york-5-days", "patagonia-7-days"],
  galleryQuery: "banff canada lake louise moraine lake icefields parkway mountains",
};

export const metadata: Metadata = {
  title: "Banff in 5 Days: Lake Louise, Moraine Lake, Icefields Parkway & Wildlife (2026)",
  description: "Complete Banff National Park 5-day guide — Moraine Lake shuttle booking secrets, Lake Louise hikes, Icefields Parkway stops, bear safety, and real Canadian dollar costs for every budget.",
  keywords: ["banff itinerary 5 days", "banff national park guide 2026", "moraine lake shuttle booking", "lake louise hike", "banff budget travel", "canada national park"],
  openGraph: {
    title: "Banff in 5 Days: Lake Louise, Moraine Lake & Icefields Parkway (2026)",
    description: "Moraine Lake sunrise, Icefields Parkway stops, bear spray essentials, and real C$ costs for every budget in Banff.",
    images: [{ url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80", width: 1200, height: 630, alt: "Banff National Park Lake Louise turquoise water mountains Canada" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Banff in 5 Days (2026)", description: "Lake Louise, Moraine Lake, Icefields Parkway — 5 plans with real C$ costs." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/banff-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Banff in 5 Days: Lake Louise, Moraine Lake, Icefields Parkway & Wildlife (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80",
      description: "Complete Banff 5-day itinerary with Moraine Lake shuttle guide, Lake Louise hikes, Icefields Parkway, and wildlife safety for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Banff 5 Days", item: "https://www.incredibleitinerary.com/blog/banff-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Banff, Canada",
      description: "Canada's first national park in the Canadian Rockies — home to Lake Louise, Moraine Lake, the Icefields Parkway, grizzly bears, elk, and the most dramatically beautiful mountain landscapes in North America.",
      touristType: ["Nature lovers", "Hikers", "Wildlife photographers", "Ski tourists"],
      geo: { "@type": "GeoCoordinates", latitude: 51.1784, longitude: -115.5708 },
    },
  ],
};

export default function BanffPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
