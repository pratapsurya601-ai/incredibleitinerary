import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Las Vegas",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "las-vegas-4-days",
  heroQuery: "las vegas strip nevada night lights usa neon",
  heroAlt: "Las Vegas Strip at night with neon lights and casino hotels illuminated Nevada USA",
  category: "North America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Las Vegas after dark — the Strip stretching four miles of impossible neon, the Bellagio fountains firing in choreographed arcs to Frank Sinatra, a thousand slot machines playing the same five sounds — is one of the most deliberately overwhelming sensory experiences on earth. Four days gives you the Strip's spectacle, a Grand Canyon sunrise you'll remember for years, the city's surprisingly excellent food and art scene, and enough time to figure out whether gambling is actually your thing (it probably isn't — but the shows are).",
  stats: {
    duration: "4 Days",
    budgetFrom: "$70",
    bestMonths: "Mar–May, Sep–Nov",
    airport: "LAS (Harry Reid International)",
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
        ["B-2 Visa Required", "Indian passport holders require a B-2 tourist visa for the USA — the same visa as for New York, Florida, or any other US state. Apply at ustraveldocs.com. Fee: $185 (MRV fee, non-refundable). An in-person interview at a US Embassy or Consulate is mandatory."],
        ["Interview Wait Times", "Current interview wait times at Indian consulates are 400–800 days at standard processing. Use the DROP (Domestic Routine Off-Peak) reschedule system on the USVISA scheduling portal — check for cancellations early morning daily. Expedited processing is available for urgent medical or official travel only."],
        ["ESTA Not Available", "India is not a Visa Waiver Program country. ESTA is not an option regardless of travel history to other countries. The B-2 visa with a consulate interview is the only path to the USA for Indian passport holders."],
        ["Gambling Age Note", "The minimum gambling age in Nevada is 21. This is federal law and strictly enforced — casinos card anyone who appears under 30. Indian visitors under 21 can still enjoy all non-casino amenities: shows, restaurants, pools, the Grand Canyon, and every attraction on this itinerary."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["ESTA — Visa Waiver Program", "Citizens of 42 countries (UK, Australia, Japan, most EU nations, New Zealand, Canada, and others) can enter the USA visa-free for up to 90 days under the VWP. Apply for ESTA at esta.cbp.dhs.gov before departure. Cost: $21. Valid 2 years or until passport expiry. Most approvals are instant."],
        ["Apply Before You Fly", "Apply for ESTA at least 72 hours before departure — most approvals arrive within minutes, but some applications are held for manual review for up to 72 hours. Airline check-in staff will verify your ESTA status. Without an approved ESTA, you will not be allowed to board."],
        ["Gambling Age 21", "The legal gambling age in Nevada is 21, enforced regardless of your home country's laws. UK, Australian, and European visitors over 21 can gamble freely. Those under 21 cannot enter the casino gaming floor (though they can walk through to restaurants and shows in most properties)."],
        ["CBP Entry Process", "All visitors complete US Customs and Border Protection (CBP) processing on arrival — biometric fingerprinting and a facial photo. Have your hotel address for the first night ready. Las Vegas's Harry Reid International is one of the country's most efficient airports for immigration processing."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$70–120/day",
      days: [
        {
          day: "Day 1",
          title: "The Strip Walk — Free Las Vegas at Its Best",
          items: [
            "2:00pm — Check in to Circus Circus (the northern Strip's budget anchor, $40–80/night midweek, $100–200 weekends). The resort fee ($30–35/night) is always on top of the room rate — budget for it from the start.",
            "4:00pm — Welcome to Las Vegas sign: take the free Deuce bus ($6 all-day pass) down the Strip to the Welcome to Fabulous Las Vegas sign at the south end (between Mandalay Bay and the airport). The sign is best photographed in late afternoon light, before the evening crowds. There's a small parking lot with a median; everyone takes the same photo — the sign is genuinely worth seeing once.",
            "5:30pm — Walk north from MGM Grand: the free spectacles begin. The Lion Habitat at MGM is gone, but the casino floor's sheer scale (170,000 sq ft) is its own attraction. The Showcase Mall (giant Coca-Cola bottle and M&M's World) — free to enter, absurdly overpriced to shop.",
            "7:00pm — Bellagio fountains (free, every 15–30 minutes from 3pm, every 15 minutes 7pm–midnight on the hour and half-hour): stand on the walkway above the lake facing the casino for the full effect. The choreography changes seasonally — current program is to Frank Sinatra, Celine Dion, and classical pieces. Each show lasts 4 minutes. Watch 2–3 shows from different angles. This is the single best free attraction in Las Vegas.",
            "7:30pm — Bellagio Conservatory and Botanical Gardens (inside the casino, free, open 24 hours): the 14,000-square-foot glass-domed atrium is redone 5 times per year by a 140-person horticulture team. Current displays involve thousands of live flowers, elaborate topiary, and themed sculptures. It is genuinely extraordinary for a free attraction inside a casino.",
            "9:00pm — Fremont Street Experience (take the Deuce bus north, $6 day pass): the world's largest video display, a 1,500-foot LED canopy covering the original downtown Las Vegas casino corridor (Circa, Golden Nugget, Binion's). Free light shows every hour from dusk until 1am. The zip line ($39–59) runs the length of the canopy — optional but memorable. The energy here is rawer and more authentic than the Strip.",
            "11:00pm — Dinner at In-N-Out Burger (3545 Las Vegas Blvd South): open late, $5–9 for a Double-Double combo, cash or card, always correct. The Animal Style burger (grilled onions, Thousand Island spread, extra sauce) is the correct order — ask for it off the menu.",
          ],
          cost: "$40–60 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Valley of Fire — Desert Day Trip",
          items: [
            "7:00am — Early start is essential. Rent a car ($30–50/day from off-Strip rental agencies) or join a guided tour ($65–85/person). Valley of Fire State Park is 1 hour (80km) northeast of Las Vegas on Highway 93 then Highway 169.",
            "8:30am — Valley of Fire State Park ($15 vehicle entry): Nevada's oldest state park features Aztec Sandstone formations that glow deep red and orange in morning light. The name is literal — at midday in summer, the red rock reflects heat that makes the landscape seem to smolder. March–May and September–November are the optimal visiting times.",
            "9:00am — Fire Wave: a 1.2-mile round-trip hike (moderate difficulty) to a swirling pink-and-red Navajo sandstone formation that looks sculpted by water and wind over 150 million years. Arrive early — the parking lot fills by 9:30am and the park service turns cars away. No shade on the trail — bring 2L of water per person.",
            "10:30am — White Domes Loop Trail (1.25 miles, easy to moderate): slot canyon section, red and white sandstone formations, and a dry wash. The most photogenic short hike in the park. Silica Dome (visible from the road) is a vivid white formation contrasting the red rock landscape.",
            "12:00pm — Elephant Rock and the Seven Sisters formations (roadside, 5-minute walk): the giant sandstone elephant silhouette is the park's most immediately recognizable landmark. Mouse's Tank Trail (0.75 miles round-trip) passes the best collection of prehistoric petroglyphs in the park — estimated 2,000+ years old.",
            "2:00pm — Drive back to Las Vegas via Lake Mead (brief stop at the overlook, free): the largest reservoir in the USA by volume — though drought has lowered the water level dramatically, leaving a white 'bathtub ring' on the canyon walls showing the historical water line.",
            "6:00pm — Return to Las Vegas. Dinner at a casino worker cafeteria or off-Strip buffet: Ellis Island Casino (Koval Lane, 0.5 miles east of the Strip) has a $15 steak dinner that's a Las Vegas local institution. Budget $15–25 for a full meal.",
          ],
          cost: "$55–85 total (car rental + park entry + food)",
        },
        {
          day: "Day 3",
          title: "Hoover Dam + Shows + Fremont Street",
          items: [
            "8:00am — Hoover Dam (45 minutes southeast on US-93/Boulder Highway, free to drive across): one of the seven engineering wonders of the modern world — built 1931–1936 during the Great Depression, the 726-foot-tall concrete arch-gravity dam still powers 1.3 million homes. The visitor center costs $10 (dam tour $30 for inside access to the penstock tunnels and generators). Even without entering, walking across the Mike O'Callaghan–Pat Tillman Memorial Bridge (the bypass bridge built in 2010) gives you a view of the dam, Lake Mead, and the Black Canyon that no amount of photography fully prepares you for.",
            "11:00am — Boulder City lunch: the small town between Las Vegas and Hoover Dam has genuine 1930s diner character and the best green chili cheeseburger in Nevada at the Coffee Cup Café ($12–15). It's also the only city in Nevada where gambling is illegal — a deliberate policy from 1931 to protect construction workers' wages.",
            "2:00pm — Return to Las Vegas. AREA15 / Meow Wolf Omega Mart ($45 entry): this immersive art experience is unlike anything in conventional tourism — a fake 1970s supermarket that dissolves into a surreal multi-story world of rooms, corridors, video installations, and interactive narrative. Budget 2.5–3 hours. Not a casino. Genuinely strange and excellent.",
            "7:00pm — Cosmopolitan casino for a drink: the Chandelier Bar (a three-story bar inside an LED chandelier in the center of the casino) serves the Verbena cocktail with a rare dehydrated flower that numbs your tongue — a Las Vegas signature experience ($18–22). The Cosmopolitan's design is notably better than any other casino on the Strip.",
            "9:00pm — Free casino floors: walk through Caesars Palace (the Forum Shops are a shopping mall built to look like an ancient Roman city, complete with a ceiling that cycles from dawn to dusk over 3 hours — free to walk through), The Venetian (a recreation of Venice with painted skies and gondolas on indoor canals, free), and the Wynn (the most beautiful hotel design on the Strip, free botanical atrium).",
            "11:00pm — Fremont Street for the midnight light show: the canopy runs shows every hour — the midnight show is the best attended and most energetic of the night.",
          ],
          cost: "$60–80 total",
        },
        {
          day: "Day 4",
          title: "Mob Museum, Neon Museum & Arts District",
          items: [
            "10:00am — The Mob Museum (formally the National Museum of Organized Crime and Law Enforcement, 300 Stewart Ave, downtown, $30): housed in a 1933 federal courthouse where actual mob hearings were held, this is one of the most well-curated museums in the American West. The speakeasy in the basement (Prohibition Bar) serves Prohibition-era cocktails. The electric chair and the wall from the St. Valentine's Day Massacre are genuine artifacts.",
            "12:30pm — Lunch in the Arts District (18b Las Vegas Arts District, around Main Street and Colorado Ave): a grid of galleries, cafés, vintage shops, and murals that feels like a completely different city from the Strip. PublicUs (1126 Fremont St) for excellent coffee and sandwiches ($10–15). The First Friday art walk happens monthly — check dates.",
            "2:30pm — 18b Arts District gallery walk: Trifecta Gallery, Anonyomous Gallery, and a dozen independent spaces showing local and regional artists. All free. The area's street murals extend for several blocks and are worth photographing.",
            "5:00pm — Neon Museum (770 Las Vegas Blvd North, $25 day / $30–40 for illuminated night tour): the boneyard of Las Vegas's historic casino signs — the original Stardust, Caesars Palace, the Sahara, the Moulin Rouge, and 200 other signs from the city's history. The night tour, when the functional restored signs are illuminated against the desert sky, is one of the most atmospheric experiences in Las Vegas. Book the night tour in advance online — they sell out.",
            "7:30pm — Farewell dinner in Chinatown Las Vegas (Spring Mountain Road, 3 miles west of the Strip): Las Vegas has a genuinely excellent Asian food corridor with Korean, Vietnamese, Japanese, and Chinese restaurants at a fraction of Strip prices. Ramen Sora ($15–18 for a bowl), Makino Chaya (Japanese buffet, $25), or Yui Edomae Sushi ($30–50 for omakase-lite) are all excellent.",
            "9:30pm — Final night on the Strip: watch the Bellagio fountains one more time, then a slow walk south to north (or take the monorail, $7 per ride) for a last look at the light show.",
          ],
          cost: "$55–80 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$180–350/day",
      days: [
        {
          day: "Day 1",
          title: "Strip Check-In, Bellagio & High-End Casino Night",
          items: [
            "2:00pm — Check in to Park MGM ($100–200/night) or Vdara Hotel & Spa ($120–180/night): Vdara is non-smoking, non-gaming, and notably quieter than casino hotels — an excellent base for non-gamblers. Park MGM has no smoking allowed anywhere in the building, the only major Strip casino with this policy.",
            "4:00pm — Welcome to Las Vegas sign by Lyft ($12 each way, pool car) — faster than the Deuce bus for getting to the south Strip photo stop.",
            "5:30pm — Cosmopolitan cocktails at the Chandelier Bar, then a walk through the casino floors: compare the design of The Venetian (Italian Renaissance excess), Caesars Palace (Roman kitsch at scale), and the Bellagio (the most refined design of the classic Strip hotels).",
            "7:00pm — Bellagio fountains: watch 2–3 shows, different songs, from the casino-side walkway above the lake.",
            "7:30pm — Bellagio Conservatory: the current seasonal botanical installation.",
            "9:00pm — Dinner at Lago by Julian Serrano (inside Bellagio, $50–70/person): Italian small plates overlooking the fountain lake. Reserve in advance — the fountain-view tables require asking specifically at booking. Watching the show from your table while eating osso buco is a genuinely Las Vegas experience.",
            "11:30pm — Omnia Nightclub (Caesars Palace) or XS (Wynn) for one drink at a nightclub — cover charge $30–50, cocktails $20–25. The production design of Las Vegas nightclubs (10-story DJ booths, drone light shows, $500 bottle service for VIP) is worth seeing once as a cultural curiosity. Arrive early (before midnight) to avoid the longest queues.",
          ],
          cost: "$160–240 total",
        },
        {
          day: "Day 2",
          title: "Grand Canyon South Rim Day Trip",
          items: [
            "5:00am — Depart by rental car (reserve the previous evening, $50–80/day) or join a guided bus tour ($110–160/person including entry). The South Rim of Grand Canyon National Park is 450km (4.5 hours) from Las Vegas via US-93 and I-40.",
            "9:30am — South Rim arrival. Grand Canyon National Park entry: $35/vehicle (valid 7 days). The South Rim is the most visited and most developed — the viewpoints along the Rim Trail (paved, free, 13 miles total) give views into the 1.6km-deep, 29km-wide canyon that no photograph ever adequately communicates.",
            "10:00am — Mather Point (the first major viewpoint from the entry gate): the standard Grand Canyon photo. Walk east to Yavapai Point for the geological museum (free) — the exhibit explains 2 billion years of Colorado River erosion and canyon formation. The canyon's visible rock layers span 270–1,840 million years of Earth's history.",
            "11:30am — Bright Angel Trail: hike down 1.5 miles to the first rest house (a 3-mile round trip, 1,000-foot descent). This is the canyon's most accessible hike. Do not attempt to reach the Colorado River in a day — it's a 9-mile, 4,500-foot descent and rangers have to rescue dozens of hikers per year who underestimate it. Turn back at the first rest house and be prepared for the uphill return to take twice as long.",
            "1:30pm — Lunch at El Tovar Hotel (1905, the canyon's grand historic lodge): the restaurant at El Tovar serves lunch at $20–35 — the setting (a log-and-stone national park lodge built directly on the rim) is worth the price. Book ahead for the rim-view window tables.",
            "3:00pm — Desert View Drive (east from the visitor center, 25 miles): the Watchtower at Desert View (a 1932 stone tower designed by Mary Colter, free) gives a higher viewpoint with a broader panorama than the main Rim Trail — the Colorado River is visible below as a silver thread. The Painted Desert begins to the east.",
            "6:00pm — Return drive to Las Vegas. Arrive 10:30–11pm. Late dinner at a 24-hour casino restaurant.",
          ],
          cost: "$190–260 total (car + park entry + meals)",
        },
        {
          day: "Day 3",
          title: "Cirque du Soleil, AREA15 & Rooftop Cocktails",
          items: [
            "11:00am — Late morning: pool day at the hotel (most Strip hotels have excellent pools, mid-range hotels have heated pools year-round). This is a Las Vegas institution — the dayclub concept means pools often have DJs and bottle service from noon, but the pools themselves are free for hotel guests.",
            "1:00pm — Lunch at Secret Pizza (Cosmopolitan, 3rd floor, unmarked — follow the handwritten signs past the corridors): one of Las Vegas's best-kept secrets. An unremarkable-looking pizzeria serving excellent thin-crust New York-style pizza by the slice ($5–8) or whole pie, open from 11am to 3am. No sign outside. No website. Always a queue of people in the know.",
            "3:00pm — AREA15 / Meow Wolf Omega Mart ($45): the immersive art environment. Budget 2.5 hours minimum — the narrative within the experience rewards exploration rather than a quick pass-through.",
            "7:00pm — Cirque du Soleil O (Bellagio, $100–200/person): the water-based Cirque show, performed in and around a 1.5-million-gallon pool that transforms from a stage to a 25-foot-deep pool in seconds. The most technically extraordinary show in Las Vegas — 85 performers from 23 countries, equal parts acrobatics, synchronized swimming, and theatrical storytelling. Book online at cirquedusoleil.com.",
            "9:30pm — Post-show drinks at Hyde Bellagio (the Bellagio nightclub/lounge with direct fountain views) or the Wynn's La Cave Food & Wine Hideaway (a natural wine bar in a cave-like setting, $15–22/glass).",
            "11:00pm — The Wynn casino floor: the most design-coherent casino on the Strip (Steve Wynn's original vision, unlike the sprawling corporate casinos). The floral atrium, the lake-view restaurants, and the outdoor pool are all accessible for a walk-through even if you're not gambling.",
          ],
          cost: "$200–300 total",
        },
        {
          day: "Day 4",
          title: "Mob Museum, Neon Museum Night Tour & Farewell Dinner",
          items: [
            "10:00am — Mob Museum ($30): the Prohibition Bar in the basement opens at 10am with morning coffee options before switching to cocktails. Take the full tour — 3 floors of organized crime history, the actual wiretapping equipment used by the FBI, and the genuine bullet-scarred wall panel from the St. Valentine's Day Massacre.",
            "1:00pm — Arts District lunch: PublicUs or ReBar for a proper sit-down lunch ($15–25/person) in the 18b Arts District. Walk the murals on Casino Center Blvd and Colorado Ave.",
            "3:00pm — Container Park (Fremont East, downtown): an outdoor shopping and entertainment complex built from repurposed shipping containers. Free to enter. The Treehouse (a climbable art installation) and the rotating food and beverage vendors are good for 90 minutes.",
            "5:00pm — Hotel pool or spa afternoon before dinner. Most mid-range hotels have a spa — 60-minute massage $90–130 (significantly cheaper than Strip luxury spas at $200+).",
            "7:00pm — Neon Museum night tour (illuminated boneyard, $30–40, book in advance): the restored signs illuminated against the desert sky — the old Stardust sign, the Moulin Rouge entrance, the Binion's horseshoe. The tour guide explains the history of each sign and the casino it came from. 90-minute tour.",
            "9:30pm — Farewell dinner at Giada De Laurentiis at The Cromwell ($50–70/person): the Food Network star's Las Vegas restaurant on the Strip, serving Italian-American food with exceptional pasta and antipasti. The view of the Bellagio fountains from the outdoor terrace is excellent if weather permits.",
          ],
          cost: "$220–300 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$500–2,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Wynn Check-In, Private Dining & VIP Casino Floor",
          items: [
            "Check in to Wynn Las Vegas ($300–600/night for standard rooms, $800–3,000+ for suites): Steve Wynn's original masterpiece — the most consistently elegant hotel design on the Strip. The rooms have floor-to-ceiling windows, Frette linens, and marble bathrooms. The resort fee ($45/night) is charged on top — ask the concierge to waive it as a high-value guest.",
            "Private car transfer from LAS Airport: Wynn limousine service (complimentary for suite guests) or arrange via Carey Limousine ($80–120). The airport is 5 minutes from the Strip — the most convenient major airport-to-city transfer in the USA.",
            "4:00pm — Wynn pool: the property has two pool areas and a designated adults-only pool (21+). The Mountain pool has a 30-foot waterfall, private cabanas ($300–500/day including food and beverage credit), and the best pool environment on the Strip.",
            "7:00pm — Cocktails at Encore Beach Club's indoor Bar (the outdoor dayclub version is open April–September): the interiors are spectacular.",
            "8:30pm — Dinner at Wing Lei (Wynn, $120–180/person): the first Chinese restaurant in Las Vegas to receive a Michelin star. Cantonese cuisine at a level of refinement you will not find at Strip buffets. The Peking duck (order 24 hours in advance) is exceptional. The private dining room (6–10 guests) can be arranged for an additional surcharge.",
          ],
          cost: "$500–900 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Grand Canyon by Helicopter & Canyon Ranch Spa",
          items: [
            "6:00am — Grand Canyon helicopter tour ($350–500/person): departing from the Las Vegas helipad (Maverick Helicopters, 6075 Las Vegas Blvd South, or Papillon Grand Canyon Helicopters). The 45-minute flight covers the Las Vegas Valley at dawn, Hoover Dam, Lake Mead, and descends into the Grand Canyon's Dragon Corridor — a narrow section of the canyon inaccessible by road. Some tours ($500+) include a champagne landing at the canyon floor on a platform above the Colorado River.",
            "10:00am — Return to Las Vegas by 11am. Canyon Ranch Spa at The Venetian ($200–400 for a 90-minute treatment): 6,000 square feet of spa including hydrotherapy, salt rooms, and a medical wellness center. Las Vegas's most prestigious spa facility — treatments include integrative medicine consultations you can't get at standard hotel spas.",
            "1:00pm — Lunch at Buddy V's Ristorante (The Venetian, $40–60/person): Buddy Valastro's (Cake Boss) Italian restaurant. The pasta is house-made; the cannoli are flown in from a New Jersey bakery.",
            "4:00pm — Private shopping at Wynn/Encore shops: the mall attached to Wynn houses Chanel, Dior, Alexander McQueen, and Manolo Blahnik. The Wynn personal stylist service (complimentary for hotel guests) can arrange private viewings with champagne.",
            "8:00pm — Dinner at SW Steakhouse (Wynn, $120–180/person): the open-air lakeside steakhouse facing the Wynn's private lake and waterfall show. The 22-oz dry-aged prime rib and the 48-hour short rib are the signature cuts. The lake show runs hourly — the timing of the choreographed water and fire show during your meal is orchestrated by the restaurant staff.",
          ],
          cost: "$700–1,100 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Hoover Dam Tour & Blue Man Group Front Row",
          items: [
            "8:00am — Private guided Hoover Dam tour ($250–400 for 4 hours, door-to-door from hotel): a specialist guide provides historical and engineering context unavailable on the standard self-guided tour. Access includes the powerplant tour, the original penstock tunnels, and the observation deck on the Nevada side. The guide's knowledge of the New Deal politics, the workers' conditions, and the engineering challenges transforms the site.",
            "12:30pm — Lunch at the Foundation Room (House of Blues, Mandalay Bay): the private members club opens for lunch to hotel guests and VIP reservations. The rooftop terrace overlooks the south Strip and the Spring Mountains beyond — one of the best daytime views from an elevated position in Las Vegas.",
            "3:00pm — Luxury poker at Bellagio or Wynn: both casinos have world-class poker rooms used in the World Series of Poker circuit. Buy-in from $200 for cash games. The room staff are exceptionally professional; the atmosphere is the best in casino gaming.",
            "6:00pm — Pre-show dinner at Gordon Ramsay Hell's Kitchen (Caesars Palace, $60–90/person): the TV show's Hell's Kitchen restaurant is exactly what you'd expect — theatrical, loud, excellent beef Wellington at $55. Book a week in advance.",
            "8:30pm — Blue Man Group (Luxor, $80–150 for good seats, $200+ for front row): the avant-garde percussion and comedy performance is genuinely unlike any other Las Vegas show — paint-splashing, audience interaction, original music, and a finale involving the entire theater. Front-row seats are provided with ponchos.",
            "11:00pm — Post-show cocktails at The Bank (Bellagio) or the FLIGHT Bar (Wynn Encore) with a nightcap of Weller 12 bourbon or a vintage Armagnac from the bar's rare spirits menu.",
          ],
          cost: "$600–900 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Neon Museum Private Tour, Joël Robuchon & Final Strip Walk",
          items: [
            "11:00am — Late checkout (request from the concierge — Wynn and Bellagio typically grant 2pm checkout for suite guests without charge).",
            "1:00pm — Neon Museum private tour ($200–300 for a private 2-person tour): the boneyard with a dedicated guide and the ability to photograph any sign in detail. The museum's archivist can pull records on the original casinos, the sign designers, and the cultural history of neon in Las Vegas from 1930s to the LED transition.",
            "3:00pm — Last afternoon on the Strip: The Palazzo Shoppes (The Venetian's luxury mall) for browsing, or Encore's Wynn Golf Course (18 holes, $600/person, Las Vegas's only Strip-adjacent golf course — designed for resort guests, not tournament play). The course has views of the Wynn towers and the Spring Mountains beyond.",
            "5:00pm — Rooftop sunset at Skyfall Lounge (Delano Las Vegas, top of Mandalay Bay): the best panoramic south Strip view — from the Welcome to Las Vegas sign below to the Wynn towers 4.5 miles north. Cocktails $18–25.",
            "8:00pm — Farewell dinner at Joël Robuchon (MGM Grand, $250–400/person): the 16-course tasting menu from the late Joël Robuchon's Las Vegas restaurant, managed by his protégés. One of three Michelin-starred restaurants in Las Vegas (all at MGM properties), the restaurant serves extraordinary French cuisine in a 1930s Paris apartment setting. Reserve 4–6 weeks in advance. The wine pairing adds $150–250/person.",
            "11:00pm — One final walk past the Bellagio fountains. Private car to the airport for a late-night or early-morning departure.",
          ],
          cost: "$700–1,200 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$40–80",
      food: "$20–35",
      transport: "$10–20",
      activities: "$10–40",
      total: "$70–120/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$100–200",
      food: "$50–90",
      transport: "$20–40",
      activities: "$40–100",
      total: "$180–350/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$300–2,000",
      food: "$150–400",
      transport: "$50–150",
      activities: "$100–500",
      total: "$500–2,000+/day",
    },
  ],
  mistakes: [
    {
      icon: "📅",
      title: "Booking Weekend Hotel Rates",
      desc: "The same room at MGM Grand or Caesars Palace costs $45 on a Wednesday and $380 on a Friday night. This is not a small variation — it's the most extreme hotel pricing differential in any US city. If your schedule is flexible, always arrive Sunday–Thursday. You will sometimes save $250+/night for an identical room. Check both Booking.com and the casino's direct website — loyalty members often get better rates direct, but weekend demand pricing is universal.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏜️",
      title: "Skipping the Grand Canyon Day Trip",
      desc: "The most common regret among Las Vegas visitors is not making the effort to reach the Grand Canyon. The 4.5-hour drive to the South Rim is genuinely worth it — the canyon is one of the few natural landmarks that exceeds its reputation. For those without a car, half-day helicopter tours from Las Vegas ($200–500) descend into the canyon itself and cover the distance in 45 minutes each way. The West Rim (the Skywalk, closer at 2.5 hours) is accessible but more commercialized and less spectacular than the South Rim.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🍽️",
      title: "Eating on the Strip (Without Research)",
      desc: "Strip restaurant pricing is 40–80% higher than equivalent quality restaurants 10–15 minutes off-Strip. The celebrity chef restaurants (Gordon Ramsay, Guy Fieri, Bobby Flay) are often good but not exceptional for their price. The best value on the Strip is finding the hidden gems: Secret Pizza (Cosmopolitan, $5/slice), In-N-Out Burger (south Strip), and the worker cafeterias inside large casinos. Spring Mountain Road (Chinatown, 3 miles west) has genuinely excellent food at half the Strip's prices.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "💰",
      title: "Not Checking Resort Fees Before Booking",
      desc: "Every major Las Vegas hotel charges a mandatory resort fee of $30–50/night on top of the room rate, regardless of whether you use the included amenities (pool, WiFi, fitness center). This fee is often not displayed prominently until checkout. A room listed at $45/night may actually cost $80–90 after resort fee and taxes. Always check the total nightly cost including all fees before booking. Some smaller casinos (Ellis Island, The D) have lower or no resort fees — a genuine competitive advantage for budget travelers.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌡️",
      title: "Las Vegas Weather Is an Extreme Sport in Summer",
      desc: "June through August: temperatures regularly reach 40–45°C (104–113°F). The desert strip of asphalt and glass buildings amplifies the heat — the sidewalk between casinos can feel like a convection oven at 3pm. If visiting in summer, plan all outdoor activities (the Grand Canyon, Valley of Fire) for 6–9am, then retreat to air-conditioned casinos during peak heat (11am–5pm). The casino floors are kept at a constant 21°C regardless of outdoor temperature. March–May and September–November are when Las Vegas is genuinely pleasant — 18–28°C, low humidity, long daylight hours.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🎰",
      title: "The Player's Card Is Free Money",
      desc: "Every casino offers a free player's card (loyalty card) that earns points for gambling, dining, hotel stays, and entertainment. If you're going to gamble at all — even $20 at a slot machine — get the card first. MGM Rewards, Caesars Rewards, and Wynn Rewards all offer genuine value: free meals, room upgrades, show tickets, and parking. The casinos genuinely want you to have your card swiped — they use the data, but they give real comps in return. Ask the casino host at the front desk: 'What can you do for me as a new member?' — you'll often get a free dinner or free play credit on the spot.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🆓",
      title: "The Best Free Things in Las Vegas Are Genuinely World-Class",
      desc: "Bellagio fountains (every 15–30 minutes, free forever), Bellagio Conservatory (botanical art, 14,000 sq ft, free, 24 hours), Wynn botanical garden (the atrium walk, free), Fremont Street Experience (light shows hourly, free), casino floor-walking (The Venetian's indoor Grand Canal, Caesars Palace Forum Shops, Paris Las Vegas's Eiffel Tower replica exterior), the Welcome to Las Vegas sign, and the Las Vegas Arts District murals. A $0 day in Las Vegas, properly spent, is better than a $0 day in most cities.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚗",
      title: "Getting Around Las Vegas — What Actually Works",
      desc: "The Strip is longer than it looks — from Mandalay Bay to the Wynn is 6.5km (4 miles), a 90-minute walk in summer heat. The Las Vegas Monorail ($7/ride, $13/day) runs from the MGM Grand to SLS Las Vegas (the north Strip), with 7 stops — useful for mid-Strip hotel jumps. The Deuce bus ($6/day unlimited) covers the full Strip including downtown Fremont Street. Uber/Lyft are cheap ($8–15 for most Strip trips) and the fastest option for off-Strip destinations. From the airport: Lyft/Uber to the Strip is $15–25 (8 minutes); hotel shuttles are slower but sometimes free.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🍸",
      title: "Drinking on the Street Is Legal in Las Vegas",
      desc: "Nevada state law permits open-container alcohol on the Las Vegas Strip and Fremont Street — which means you can legally walk between casinos with a cocktail in hand. This is genuinely unusual by US standards. Casinos will often give free drinks to gamblers at table games (tip the cocktail server $1–2 per drink — this is how they are compensated). The Fremont Street Experience has multiple bars with walk-up windows. Do not drink and drive — Nevada DUI enforcement is strict, and rideshare is cheap enough that there's no excuse.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  faqs: [
    {
      q: "What is the minimum gambling age in Las Vegas?",
      a: "21 years old, enforced throughout Nevada state law. This applies to all casino gaming — slot machines, table games, poker, sports betting. There are no exceptions for international visitors regardless of the legal gambling age in their home country. Casinos will ID anyone who appears under 30, and being caught gambling under 21 results in immediate removal and possible arrest. Non-gambling amenities — shows, restaurants, pools, hotels — are available to guests of all ages.",
    },
    {
      q: "Can you really drink alcohol on the Las Vegas Strip?",
      a: "Yes — Nevada state law allows open containers of alcohol on the Las Vegas Strip (Las Vegas Boulevard) and in the Fremont Street Experience area. This means you can legally walk between casinos carrying a cocktail, beer, or wine. Plastic cups and to-go cups are used — casino bars and walk-up windows on Fremont Street sell drinks specifically for this purpose. The only restriction: glass containers are not permitted on the street (hence plastic cups). Casinos also provide free drinks to active gamblers at table games, though you're expected to tip the cocktail server $1–2 per drink.",
    },
    {
      q: "What are the best shows in Las Vegas in 2026?",
      a: "Cirque du Soleil O at Bellagio ($100–200) is the consistent benchmark — the water show is the most technically spectacular production in the city. Blue Man Group at Luxor ($80–150) for something genuinely different. For residencies: check current lineups at Dolby Live (Park MGM) and the Michelob Ultra Arena — major artists (Adele, Bruno Mars, Katy Perry) do long Las Vegas residencies, typically with better production than touring shows. The Sphere (Las Vegas Blvd near the Venetian) opened in 2023 with the largest LED screen ever built — check current programming at msg.com/sphere. Legends in Concert (Tropicana area) for classic tribute shows from $50.",
    },
    {
      q: "How far is the Grand Canyon from Las Vegas?",
      a: "Grand Canyon South Rim: 450km, 4.5 hours by car via I-40 and Highway 64. Most visitors make this a very long day (5am departure, return by 10pm). Grand Canyon West Rim (the Skywalk): 190km, 2.5 hours. Closer but less spectacular and more commercialized — the Skywalk ($80 extra on top of park fees) is a glass-bottomed walkway over a side canyon, not the main canyon. Recommended: South Rim if you have a full day, or a helicopter tour ($350–500) that covers the distance in 45 minutes each way and includes a canyon-floor landing on some packages.",
    },
    {
      q: "Is Las Vegas safe for tourists?",
      a: "The casino-heavy Strip and downtown Fremont Street are heavily policed and generally safe for tourists. The main concerns: pickpockets in crowded areas (Fremont Street late at night can get rowdy), card slappers (people who aggressively push business cards advertising adult entertainment — annoying but not dangerous), and scammers targeting people outside casinos. Stay inside casino properties if you're uncomfortable on the street — they are private security-monitored environments. Areas immediately off the Strip (especially east of the Strip in some directions) are less touristed and require more situational awareness. Las Vegas is a 24-hour city — the Strip is busy and staffed at all hours.",
    },
    {
      q: "Where is the best location to stay in Las Vegas?",
      a: "Center Strip (Bellagio to Venetian): the best location for walking to both the north and south Strip attractions. This is where the Bellagio, Cosmopolitan, Caesar's Palace, and The Venetian are located — the premium real estate with the highest hotel rates. North Strip (Wynn, Encore, Resorts World): slightly less central but quieter and closer to the Convention Center — good for business travelers or those who prefer Wynn's refined atmosphere. South Strip (Mandalay Bay, MGM Grand, Park MGM): closest to the airport (5 minutes), convenient for arrivals and departures, but requires more travel to reach the Venetian/Bellagio area. Downtown Fremont Street: cheapest area, more authentic Las Vegas character, less polished. Good base if you prefer the Mob Museum and Arts District to the Strip's spectacle.",
    },
  ],
  combineWith: ["new-york-5-days", "los-angeles-4-days", "grand-canyon-3-days"],
  relatedSlugs: ["new-york-5-days", "bali-5-days", "dubai-4-days", "tokyo-5-days"],
  galleryQuery: "las vegas strip nevada casino bellagio grand canyon desert",
};

export const metadata: Metadata = {
  title: "Las Vegas in 4 Days: The Strip, Grand Canyon & What to Actually Spend (2026)",
  description: "4 complete Las Vegas plans — budget to luxury — covering the Bellagio fountains, Grand Canyon day trip, best shows, resort fee traps, and real dollar costs for every activity.",
  keywords: [
    "las vegas itinerary 4 days",
    "las vegas travel guide 2026",
    "las vegas budget travel",
    "grand canyon day trip from las vegas",
    "las vegas strip guide",
    "what to do in las vegas",
    "las vegas trip planning",
  ],
  openGraph: {
    title: "Las Vegas in 4 Days: The Strip, Grand Canyon & What to Actually Spend (2026)",
    description: "Bellagio fountains, Grand Canyon day trip, best shows, resort fee traps, and real dollar costs for every Las Vegas budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Las Vegas Strip at Night Neon Lights Nevada USA",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas in 4 Days (2026)",
    description: "4 plans, resort fee traps, Grand Canyon tips, and real dollar costs.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/las-vegas-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Las Vegas in 4 Days: The Strip, Grand Canyon & What to Actually Spend (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1200&q=80",
      description:
        "4 complete Las Vegas plans with Bellagio fountain guides, Grand Canyon day trip options, best shows, resort fee warnings, and real dollar costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Las Vegas 4 Days",
          item: "https://www.incredibleitinerary.com/blog/las-vegas-4-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Las Vegas, Nevada, USA",
      description:
        "The entertainment capital of the world — 4.2 miles of casino resorts, world-class shows, celebrity chef restaurants, and the gateway to the Grand Canyon, Hoover Dam, and Valley of Fire.",
      touristType: ["Entertainment seekers", "Foodies", "Gamblers", "Architecture enthusiasts", "Adventure travelers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 36.1699,
        longitude: -115.1398,
      },
    },
  ],
};

export default function LasVegasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
