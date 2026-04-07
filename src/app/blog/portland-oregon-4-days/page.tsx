import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Portland, Oregon",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "portland-oregon-4-days",
  heroQuery: "Portland Oregon skyline Mount Hood Willamette River",
  heroAlt: "Portland Oregon skyline with Mount Hood in the background and the Willamette River",
  category: "North America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Portland is America's most effortlessly cool city — a place where Powell's Books takes up an entire city block, food cart pods serve James Beard-worthy meals for under $15, and Multnomah Falls drops 620 feet through old-growth Columbia River Gorge forest. Four days is the ideal window: enough time to lose yourself in Powell's, cycle the Eastside Esplanade, sip your way through the Craft Beer Mile in Alberta Arts District, wander the Japanese Garden in the West Hills, and still squeeze in a Mount Hood day trip before your flight home.",
  stats: { duration: "4 Days", budgetFrom: "$75", bestMonths: "Jun–Sep or Oct", airport: "PDX" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Powell's & Food Carts" },
    { id: "day2", emoji: "📅", label: "Day 2 — Columbia River Gorge" },
    { id: "day3", emoji: "📅", label: "Day 3 — Japanese Garden & Beer Mile" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — B-2 Tourist Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "B-1/B-2 Tourist Visa"],
        ["Processing", "2–8 weeks (interview required)"],
        ["Fee", "$185 USD (non-refundable MRV fee)"],
        ["Validity", "Up to 10 years, 6 months per entry"],
        ["Apply at", "US Embassy or Consulate in India"],
        ["Documents", "DS-160 form, bank statements, ITR, travel history, ties to India"],
        ["Notes", "Interview waitlists can be 2–6 months — apply early. ESTA not available for Indian passport holders."],
      ],
    },
    {
      flag: "🇬🇧",
      title: "UK / EU / AU / CA — ESTA Visa Waiver",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "ESTA (Electronic System for Travel Authorization)"],
        ["Processing", "Instant to 72 hours online"],
        ["Fee", "$21 USD per person"],
        ["Validity", "2 years or until passport expires, 90 days per visit"],
        ["Apply at", "esta.cbp.dhs.gov (official US government site only)"],
        ["Passport", "Must be e-Passport (biometric chip) and valid for duration of stay"],
        ["Notes", "Apply at least 72 hours before departure. ESTA is for VWP-eligible countries only."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$75–100/day",
      days: [
        {
          day: "Day 1",
          title: "Powell's Books & Downtown Food Carts",
          items: [
            "10:00 — Check in to a hostel in the Pearl District or NW Portland ($35–55/night for dorm) — the Pearl District puts you walking distance from Powell's and MAX light rail connections",
            "11:00 — Spend at least 2 hours at Powell's Books (1005 W Burnside St) — the world's largest independent bookstore occupies a full city block with over 1 million new, used, and rare books across color-coded rooms; entry is free",
            "13:00 — Lunch at the SW 9th & Alder food cart pod — Portland's original and most famous food cart concentration; full meals from $8–13 including Thai, Korean, Mexican, and falafel; a food cart pod visit is quintessential Portland",
            "15:00 — Walk the Pearl District galleries and browse Powell's technical bookstore annex; grab a coffee at Water Avenue Coffee ($4–5) — Portland's third-wave coffee scene rivals Seattle's",
            "17:30 — Ride the MAX light rail to the Alberta Arts District ($2.50 single trip) — Alberta Street is lined with murals, vintage shops, and bars; the Last Thursday art walk happens on the last Thursday of each month",
            "19:30 — Dinner at a food cart pod on Alberta: full Korean BBQ bowl or Vietnamese banh mi for $10–13; the rotating vendors change seasonally",
            "21:00 — First craft beer stop: Breakside Brewery on NE Dekum ($6–7/pint); Portland has over 80 breweries — more per capita than any other US city",
          ],
          cost: "$45–60 (hostel, food, transit, 2 beers)",
        },
        {
          day: "Day 2",
          title: "Columbia River Gorge & Multnomah Falls",
          items: [
            "08:00 — Catch the Columbia Gorge Express bus from Gateway Transit Center ($5 round trip, reservation required at gorgeexpress.com) — the only practical car-free way to reach the Gorge; runs April–October",
            "09:30 — Multnomah Falls: Oregon's tallest waterfall drops 620 feet in two tiers through ancient basalt; the viewing bridge is a 0.2-mile walk from the base; free entry but timed permits required May–Sep ($2)",
            "11:00 — Hike the Larch Mountain Trail from Multnomah Falls (2.2 miles one way, 1,200ft elevation gain) — emerges at Crown Point Vista House overlook with 180-degree Gorge views; strenuous but extraordinary",
            "13:30 — Lunch at Multnomah Falls Lodge restaurant (casual counter service, $12–16 for soup, sandwich, or burger) — the historic 1925 lodge itself is worth seeing; or bring packed sandwiches to save money",
            "15:30 — Return Gorge Express bus; stop at Vista House at Crown Point if time permits (free, 733 feet above the Columbia River with panoramic views)",
            "18:00 — Back in Portland: dinner at Pok Pok (SE Division St) — Thai street food that launched Andy Ricker's James Beard Award; the wings ($14) and drinking vinegars are legendary; arrive early to avoid the wait",
          ],
          cost: "$30–45 (bus pass, lunch, permits, dinner)",
        },
        {
          day: "Day 3",
          title: "Japanese Garden & Craft Beer Mile",
          items: [
            "09:30 — Portland Japanese Garden ($20 general admission) — consistently ranked the finest Japanese garden outside Japan; the 12-acre garden in the West Hills has five distinct garden styles including a strolling pond garden and a sand and stone garden",
            "11:30 — Washington Park: adjacent to the Japanese Garden is the International Rose Test Garden (free) — Portland's nickname is City of Roses; 10,000 rose plants representing over 650 varieties bloom June–October",
            "13:00 — Lunch at a food cart on SE Hawthorne Blvd ($9–12) — the Hawthorne neighborhood has a dozen rotating food carts plus vintage shops and bookstores along a 10-block stretch",
            "15:00 — Craft Beer Mile: walk or bike NE Alberta Street hitting Breakside, Stormbreaker, and Ecliptic Brewing — pints range $6–7; each brewery has free tasting notes and seasonal releases; this neighborhood is the heartbeat of Portland's beer culture",
            "17:00 — Bike rental along the Eastside Esplanade trail ($15–25 for 3 hours from Biketown bikeshare) — the multi-use path along the east bank of the Willamette connects SE Portland neighborhoods with downtown bridges",
            "20:00 — Night market or street food on N Mississippi Ave — the Mississippi neighborhood has permanent bar-restaurants with live music most nights; dinner plus 1 drink under $25",
          ],
          cost: "$55–75 (garden, bike rental, beer, food)",
        },
        {
          day: "Day 4",
          title: "Mount Hood Day Trip or Farmers Market",
          items: [
            "07:30 — Option A: Mount Hood day trip — rent a car ($40–60/day) and drive 1 hour east on US-26 to Timberline Lodge (elevation 5,960ft); the historic 1937 WPA lodge served as the exterior of The Shining; hiking trails begin right from the parking lot",
            "10:00 — Timberline Lodge free self-guided tour — the interior hand-carved timber and stone work is extraordinary Depression-era craftsmanship; the mountain views from the terrace are among Oregon's finest",
            "12:00 — Lunch at Timberline Lodge Wy'East Day Lodge ($12–18 for burgers, pizza, soup) — the cafeteria-style dining is surprisingly good; the cozy fireplace rooms are worth lingering in",
            "14:30 — Drive back stopping at Trillium Lake ($5 day use pass) — the mirror-flat lake with Mount Hood perfectly reflected is one of Oregon's most photographed scenes; a 1.8-mile flat trail circles the lake",
            "18:00 — Option B (no car): Saturday/Sunday Portland Farmers Market at PSU Park Blocks (free entry, 8:30am–2pm) — 200 vendors selling Oregon berries, artisan cheese, hazelnuts, and food stalls; much of what Portland restaurants serve begins here",
            "20:00 — Final dinner: Luce restaurant on SE Stark or a Hawthorne Thai spot; budget farewell meal under $18",
          ],
          cost: "$60–80 (car rental or transit, meals, day passes)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$150–220/day",
      days: [
        {
          day: "Day 1",
          title: "Powell's, Pearl District & Alberta Arts",
          items: [
            "12:00 — Check in to a boutique hotel in the Pearl District or NW Portland ($130–180/night) — Hotel Lucia or The Hoxton Portland both have design credentials and excellent locations near Powell's",
            "13:30 — Powell's Books deep dive with the rare book room — request access to the Rose Room rare book collection; first editions and signed copies in glass cases; the staff recommendations shelf changes weekly",
            "15:30 — Guided food tour of the Pearl District and downtown ($65–85, 2.5 hours) — local guides cover Portland's food cart history, artisan coffee scene, and the story of how abandoned warehouses became the Pearl District's gallery row",
            "18:30 — Dinner at Tasty n Daughters (NW 23rd Ave) — John Gorham's modern American brunch-all-day concept; the Portland Benedict and crispy lamb riblets are local institutions; expect a 30-minute wait, no reservations",
            "20:30 — Alberta Street bar crawl: Stormbreaker Brewing terrace, then Breakside Brewery's flagship taproom — their Passion Fruit IPA and Aztec Ale have won multiple World Beer Cup medals",
          ],
          cost: "$160–200 (hotel, food tour, dinner, beers)",
        },
        {
          day: "Day 2",
          title: "Columbia River Gorge with Windsurfing",
          items: [
            "08:30 — Rent a car or book a guided Gorge day tour ($80–120 per person, 8–9 hours, includes transportation and guide) — tours stop at Vista House, multiple waterfall hikes, and a winery in Hood River",
            "10:00 — Multnomah Falls + Latourell Falls loop — Latourell Falls (lower tier: 249 feet) is 2 miles west and gets far fewer visitors; both are accessible from the Historic Columbia River Highway",
            "13:00 — Lunch in Hood River at Pfriem Family Brewers ($15–22 for food, $7 for craft pints) — Hood River is the windsurfing capital of North America and the brewery terrace overlooks the Columbia River",
            "15:00 — Optional: beginner kiteboarding or windsurfing intro lesson at Hood River Waterplay ($120 for 90-minute lesson) — the Columbia River Gorge's reliable wind makes Hood River the best place in the country to learn",
            "19:00 — Dinner at Ox Restaurant (NE Martin Luther King Blvd) — Argentinian wood-fire grill concept with the best beef in Portland; the bone marrow and short rib are $28–38/main; book 1 week ahead",
          ],
          cost: "$180–240 (car/tour, meals, optional lesson)",
        },
        {
          day: "Day 3",
          title: "Japanese Garden, Art Museum & Food Scene",
          items: [
            "09:30 — Portland Japanese Garden ($20) followed by a guided 45-minute docent tour (included with admission) — docents explain the symbolism behind each garden element; the moss garden is considered the most meditative space in Portland",
            "11:30 — Portland Art Museum ($25 general admission) — Oregon's oldest art museum with a strong Northwest Coast Indigenous art collection and significant European paintings; the contemporary galleries have rotating exhibitions",
            "13:30 — Lunch at Little Bird Bistro downtown ($18–26 for mains) — Gabriel Rucker's French-inspired bistro sibling to Le Pigeon; perfect roast chicken and a magnificent French onion soup",
            "15:30 — Explore the NE Mississippi neighborhood: vintage shops on N Mississippi Ave, the Mississippi Studios music venue, and the Rebuilding Center salvage architecture warehouse",
            "19:00 — Dinner at Le Pigeon (E Burnside) — Portland's most celebrated restaurant; Gabriel Rucker's imaginative small plates push French-American cooking into adventurous territory; $80–110/pp with drinks; reserve weeks ahead",
          ],
          cost: "$190–250 (museums, lunch, fine dinner)",
        },
        {
          day: "Day 4",
          title: "Mount Hood Lodge & Timberline Hike",
          items: [
            "08:00 — Rent a car and drive to Timberline Lodge on Mount Hood (1 hour, US-26 east) — the drive through Sandy River Valley and rhododendron forests is itself scenic",
            "10:00 — Silcox Hut snowcat tour in winter or summer ridge hike on the Timberline Trail in summer ($35–60 guided interpretation tour from the lodge) — Palmer Snowfield has year-round skiing and the crater rim hike reaches 8,000ft",
            "13:00 — Lunch at Timberline Lodge's Cascade Dining Room ($25–35 for mains) — proper dining room with locally sourced Oregon ingredients; the lamb and wild mushroom risotto showcase Oregon's Pacific Northwest larder",
            "16:00 — Stop at Multnomah Whiskey Library in Portland on the way back ($35 member-for-a-day pass) — the city's most impressive whiskey collection with over 1,500 bottles in a wood-panelled library setting",
            "19:30 — Final dinner at Ava Gene's (SE Morrison) — vegetable-forward Italian cooking that earns national praise; handmade pasta and the wood-roasted cauliflower are revelations at $22–30/main",
          ],
          cost: "$200–270 (car, lodge tour, whiskey bar, dinner)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$350–550/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival, Ace Hotel & Private Food Tour",
          items: [
            "14:00 — Check in to the Ace Hotel Portland (W Burnside, $250–350/night) or The Nines ($300–420/night) — both are design landmarks; The Nines occupies the upper floors of a 1909 Beaux-Arts building with original terracotta details preserved",
            "16:00 — Private food and culture tour of Portland ($150–200 per person, 3 hours, private guide) — covers the full Powell's rare book room, the story of Portland's food cart culture, and guided tastings at 4–5 stops from street food to artisan ice cream",
            "19:30 — Dinner at Canard (E Burnside) — Gabriel Rucker's wine bar and snack restaurant; the entire menu is designed for sharing; exceptional natural wine list and the deep-fried ham sandwich has a cult following; $60–80/pp",
            "21:30 — After-dinner drinks at Multnomah Whiskey Library ($35 membership for the evening) — request a guided flight of rare Oregon whiskeys from the sommelier",
          ],
          cost: "$400–520 (hotel, private tour, dinner, drinks)",
        },
        {
          day: "Day 2",
          title: "Private Gorge Tour & Hood River Winery",
          items: [
            "08:30 — Private car and guide for Columbia River Gorge ($300–400 for full day, private vehicle) — custom itinerary covers Vista House, Latourell, Multnomah, and Horsetail Falls with stops timed to avoid tour groups",
            "11:00 — Hike the Eagle Creek Trail to Punchbowl Falls (4 miles round trip, moderate) — one of the most spectacular gorge hikes with the pool at Punchbowl Falls appearing almost tropical; guided naturalist explains the Missoula Floods geology",
            "13:30 — Private winery lunch at Phelps Creek Vineyards in Hood River ($80–100/pp for tasting menu with wine pairings) — Columbia Gorge AVA pinot gris and syrah with Mount Hood views; book well in advance",
            "17:00 — Sunset viewing from Crown Point Vista House with private guide explaining the geological formation of the Columbia River Gorge",
            "20:00 — Dinner at Mucca Osteria (SE Morrison) or Room & Board private chef experience through Portland's luxury concierge services ($200–300/pp for in-hotel chef dinner)",
          ],
          cost: "$500–650 (private guide, winery lunch, dinner)",
        },
        {
          day: "Day 3",
          title: "Japanese Garden Private Tour & Le Pigeon",
          items: [
            "09:00 — Private Japanese Garden curator tour ($150, by appointment) — the garden curator leads a 90-minute behind-the-scenes tour explaining traditional horticultural techniques, the symbolism of each stone placement, and the seasonal maintenance calendar",
            "11:00 — Portland Art Museum private collection tour with a curator ($200, by arrangement) — access to works in storage and the conservation lab; the PAM has one of the finest Northwest Coast Indigenous collections in any museum",
            "13:30 — Lunch at Tasty n Daughters or a private reservation at Tusk (NW 21st Ave) — farm-to-table Pacific Northwest cuisine with a $55–70 prix fixe tasting menu available by advance request",
            "16:00 — Spa afternoon at The Nines hotel spa or Rejuvenation Spa on NE Glisan ($150–250 for 80-minute treatment)",
            "19:30 — Le Pigeon tasting menu ($120–150/pp, 7 courses, wine pairing extra) — Portland's most celebrated kitchen; reserve the chef's counter 3–4 weeks ahead for the full immersive tasting experience",
          ],
          cost: "$550–700 (private tours, spa, tasting dinner)",
        },
        {
          day: "Day 4",
          title: "Mount Hood Timberline & Farewell",
          items: [
            "08:00 — Private chauffeur to Timberline Lodge ($150 round trip) — avoiding the parking situation is alone worth it; the drive along US-26 in autumn with the vine maples turning is exceptional",
            "09:30 — Private guided summit approach hike on Mount Hood with a licensed guide from Timberline Mountain Guides ($250 for half-day guided ridge hike) — reach Palmer Snowfield or the Illumination Rock area with professional interpretation",
            "13:00 — Lunch at Timberline Lodge Cascade Dining Room as a seated guest ($35–50 for mains); arrange in advance for the private dining room experience with wine service",
            "16:00 — Return to Portland: final shopping at Powell's rare book room — a signed first edition or rare Oregon history title makes the ultimate Portland souvenir; rare books from $45 to several thousand",
            "19:00 — Farewell dinner at Bullard (downtown Portland) — Texas BBQ reimagined with Oregon ingredients; the brisket and jalapeño cheddar biscuits are $30–45/pp; or return to Le Pigeon for the bar menu",
          ],
          cost: "$450–600 (chauffeur, guided hike, meals, souvenirs)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$35–55 (hostel dorm, NW Portland)",
      food: "$20–30 (food carts, grocery stores)",
      transport: "$5–10 (MAX light rail, Biketown)",
      activities: "$15–25 (garden, waterfalls, free parks)",
      total: "$75–120/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$130–180 (boutique hotel, Pearl District)",
      food: "$50–80 (bistros, breweries, food tours)",
      transport: "$15–35 (car rental days, ride-share)",
      activities: "$40–65 (museums, guided tours)",
      total: "$150–220/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$250–420 (Ace Hotel, The Nines)",
      food: "$120–200 (tasting menus, private chef)",
      transport: "$50–150 (private car, chauffeur)",
      activities: "$150–350 (private guides, spa, exclusive tours)",
      total: "$350–550+/day",
    },
    {
      tier: "🍺 Beer Focus",
      accommodation: "$60–100 (mid hostel or budget hotel)",
      food: "$25–40 (food carts, pub food)",
      transport: "$10–15 (MAX + bike)",
      activities: "$40–70 (brewery tours, tastings)",
      total: "$135–225/day",
    },
    {
      tier: "🥾 Outdoor",
      accommodation: "$45–80 (hostel or Airbnb near trailhead)",
      food: "$20–35 (packed lunches, post-hike burgers)",
      transport: "$30–60 (car rental for Gorge/Hood access)",
      activities: "$10–40 (permits, guided hikes)",
      total: "$105–215/day",
    },
  ],
  mistakes: [
    {
      icon: "🌧️",
      title: "Underestimating Portland's rain season",
      desc: "Portland receives over 36 inches of rain annually, mostly October–May. Pack a waterproof layer regardless of the season. The Japanese Garden and Powell's are perfect rainy-day activities — plan outdoor Gorge hikes for your best weather day.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🚗",
      title: "Driving to the Columbia River Gorge without a plan",
      desc: "The most popular trailheads at Multnomah Falls and Eagle Creek fill to capacity by 9am on summer weekends. Timed entry permits are required May–September. The Gorge Express bus from Gateway TC is the stress-free alternative at just $5 round trip.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🍺",
      title: "Trying to visit every brewery in one trip",
      desc: "Portland has over 80 breweries. Pick 3–4 in the same neighborhood (Alberta Arts District, NE Mississippi, SE Division) rather than Uber-ing across the city chasing taprooms. Walking brewery crawls are cheaper and more fun than scattered visits.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌹",
      title: "Visiting the Rose Garden outside bloom season",
      desc: "The International Rose Test Garden peaks June through mid-October. Visiting in winter gets you bare canes and none of the 10,000-plant display. If you can't visit in bloom season, the Japanese Garden is beautiful year-round.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🏕️",
      title: "Skipping the Mount Hood day trip",
      desc: "Most Portland visitors skip Mount Hood entirely and miss Oregon's most iconic natural landmark. The drive from Portland is only 1 hour, the Timberline Lodge is a national historic landmark, and the summit views on a clear day are extraordinary. Rent a car for just this day.",
      color: "bg-orange-50 border-orange-200",
    },
  ],
  tips: [
    {
      icon: "🚌",
      title: "Use the MAX light rail and TriMet day pass",
      desc: "Portland's MAX light rail connects PDX airport to downtown in 40 minutes for $2.50. A TriMet day pass ($5) covers MAX, streetcar, and all buses. The Yellow and Green lines reach most neighborhoods. Book tours and Gorge activities in advance at https://www.getyourguide.com/s/?q=Portland+Oregon&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "📚",
      title: "Visit Powell's Books first thing on arrival",
      desc: "Powell's opens at 9am daily. Arriving early means you get the room to yourself — by noon on weekends it becomes a crowd. Pick up the free store map at the entrance; the Gold Room (rare books), Blue Room (science), and Pearl Room (literature) are distinct wings worth separate visits.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌲",
      title: "Plan outdoor activities around weather windows",
      desc: "Check the forecast 48 hours out. Portland's weather shifts quickly — a gray morning often clears by noon. Save Powell's and the food cart pods for overcast days, and schedule the Gorge, Japanese Garden, and Mount Hood for your clear weather days.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍜",
      title: "Eat at food cart pods for the best value and quality",
      desc: "Portland's food cart culture began as a way for trained chefs to open restaurants without the overhead. The result is James Beard-caliber cooking at $10–15 a plate. The SW Alder Pod, Cartopia on SE Hawthorne, and the Mississippi Food Cart Block are the top three concentrations.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "What is the best time of year to visit Portland, Oregon?",
      a: "June through September offers the best weather — dry, sunny days with highs around 75–80°F. July and August are peak tourist months. October is spectacular for fall foliage in the Gorge and along the Willamette Valley. May and early June see the International Rose Test Garden in full bloom. Winter (November–March) is the rainy season but offers low hotel prices and uncrowded museums.",
    },
    {
      q: "Do I need a car to visit Portland?",
      a: "For the city itself, no — Portland's MAX light rail, streetcar, and Biketown bike share cover most tourist areas. However, a car is strongly recommended for the Columbia River Gorge and Mount Hood day trips. Car rental for a single day costs $40–60 plus gas. The Gorge Express bus ($5 round trip, April–October) handles Multnomah Falls without a car, but access to the wider Gorge and Hood River requires driving.",
    },
    {
      q: "How do I get from Portland Airport (PDX) to downtown?",
      a: "The MAX Red Line runs directly from PDX to downtown Portland in about 40 minutes for $2.50. Trains run every 15 minutes from 5am to midnight. Ride-share (Uber/Lyft) costs $25–35 and takes 20–30 minutes depending on traffic. There is no dedicated airport shuttle bus, but the MAX is the most cost-effective and reliable option.",
    },
    {
      q: "Is Portland safe for tourists?",
      a: "Portland's main tourist areas — the Pearl District, NW 23rd Ave, SE Hawthorne, Alberta Arts District, and the waterfront — are safe and walkable. Like all major US cities, certain downtown blocks near Burnside and W Burnside have experienced elevated homelessness and property crime in recent years. Stay aware, use standard urban common sense, and stick to the well-lit commercial corridors in the evening. The neighborhoods around Powell's and the food cart pods are perfectly fine at night.",
    },
  ],
  combineWith: ["seattle-3-days", "san-francisco-4-days", "vancouver-4-days"],
  relatedSlugs: ["seattle-3-days", "san-francisco-4-days", "las-vegas-4-days", "denver-3-days"],
  galleryQuery: "Portland Oregon Powell's Books Multnomah Falls Japanese Garden",
};

export const metadata: Metadata = {
  title: "Portland Oregon in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 4-day Portland, Oregon itinerary — Powell's Books, food cart pods, Multnomah Falls, Columbia River Gorge, Mount Hood, Japanese Garden, and craft beer mile. Budget $75/day to luxury hotels.",
  keywords: [
    "Portland Oregon itinerary",
    "Portland Oregon 4 days",
    "Portland travel guide 2026",
    "Multnomah Falls",
    "Powell's Books",
    "Columbia River Gorge",
    "Mount Hood day trip",
    "Portland craft beer",
    "Portland visa Indian passport",
  ],
  openGraph: {
    title: "Portland Oregon in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Powell's Books, Multnomah Falls, Columbia River Gorge, Mount Hood, and Portland's legendary craft beer scene — 4 days from $75/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/portland-oregon-4-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portland Oregon in 4 Days: Complete 2026 Itinerary",
    description:
      "Powell's Books, Multnomah Falls, Japanese Garden, Mount Hood, and the craft beer mile — Portland in 4 days from $75/day to luxury.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/portland-oregon-4-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Portland Oregon in 4 Days: Complete 2026 Itinerary (Budget to Luxury)",
      datePublished: "2026-04-05",
      dateModified: "2026-04-05",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Portland Oregon in 4 Days",
          item: "https://www.incredibleitinerary.com/blog/portland-oregon-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Portland, Oregon",
      description:
        "Portland, Oregon — Powell's Books, Multnomah Falls, Columbia River Gorge, Japanese Garden, Mount Hood, and over 80 craft breweries.",
      geo: { "@type": "GeoCoordinates", latitude: 45.5051, longitude: -122.675 },
    },
  ],
};

export default function PortlandOregonPage() {
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
