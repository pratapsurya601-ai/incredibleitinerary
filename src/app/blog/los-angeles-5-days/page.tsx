import type { Metadata } from "next";
import LosAngelesClient from "./LosAngelesClient";

// Legacy data object retained below for reference only — rendering is handled by LosAngelesClient
const _data = {
  destination: "Los Angeles",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "los-angeles-5-days",
  heroQuery: "los angeles hollywood sign california usa sunset skyline",
  heroAlt: "Los Angeles skyline at sunset with the Hollywood Sign visible in the Santa Monica Mountains California USA",
  category: "North America",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro: "Los Angeles doesn't reveal itself to people who stay on Hollywood Boulevard. It reveals itself at 6am on Venice Beach when the bodybuilders are already at Muscle Beach and the sky is turning pink over the Pacific, or on a Tuesday at the Getty Center when you walk into a room of Van Goghs with almost no one else there, or the moment you bite into your first taco from Mariscos Jalisco and understand why people move here and never leave. Five days is enough time to get past the surface.",
  stats: { duration: "5 Days", budgetFrom: "$90", bestMonths: "Mar–May, Sep–Nov", airport: "LAX" },
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
        ["B-2 Tourist Visa", "Indian passport holders require a B-2 visitor visa for the USA — ESTA is not available. Apply at the US Embassy or consulate. Consular fee: $185 (MRV fee, non-refundable). Processing time: 2–8 weeks depending on location and demand. Book your interview slot as early as possible — popular slots at Mumbai, Delhi, and Chennai consulates fill weeks in advance."],
        ["Key Documents", "DS-160 application form, passport valid for at least 6 months beyond your travel dates, bank statements showing sufficient funds ($100/day minimum recommended), confirmed hotel reservations, return flight tickets, employment letter or business registration proof, recent payslips, and income tax returns for the past 2–3 years."],
        ["Interview Tips", "The consular interview is brief but critical. Be clear about your trip purpose, itinerary, and ties to India (job, property, family). Having a detailed day-by-day itinerary and proof of accommodation dramatically increases approval odds. Avoid vague answers about where you will stay or what you will do."],
        ["Travel Insurance", "Not mandatory for the US visa application but strongly recommended. US medical costs are extremely high — an emergency room visit without insurance can cost $3,000–15,000. Purchase a comprehensive plan with at least $500,000 medical coverage before departure. Check that it covers emergency evacuation."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["ESTA / Visa Waiver", "Citizens of 42 Visa Waiver Program countries (including UK, Australia, Germany, France, Japan, South Korea) can enter the USA under ESTA. Apply at esta.cbp.dhs.gov before travel — fee: $21, approval typically within minutes to 72 hours. Valid for 2 years or until your passport expires, for stays up to 90 days."],
        ["ESTA Requirements", "Your passport must be e-passport (electronic chip) for ESTA eligibility. Passports issued before 2007 may not qualify — check the chip symbol on the cover. If previously denied a US visa or arrested, you must apply for a B-2 visa instead of ESTA regardless of your passport."],
        ["Canadian Citizens", "Canadians do not need ESTA or a visa — entry is visa-free at the port of entry. Bring your passport (required since 2016 for air travel). Canadian citizens can stay up to 6 months as visitors at the border officer's discretion."],
        ["UK Post-Brexit Note", "UK citizens are still eligible for ESTA and the Visa Waiver Program — Brexit did not affect US visa requirements. Ensure your passport has the electronic chip symbol. Dual nationals with certain nationalities (Iran, Iraq, North Korea, Syria, Cuba, Sudan, Libya, Somalia, Yemen) must apply for a B-2 visa even with a UK passport."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$90–150/day",
      days: [
        {
          day: "Day 1",
          title: "Santa Monica & Venice Beach",
          items: [
            "9:00am — Arrive at Santa Monica Beach at the northern end near the pier parking. Parking at Santa Monica State Beach: free along PCH or $3–10 in city lots. Avoid the pier parking structure ($20+).",
            "9:30am — Walk south along the Venice Beach Boardwalk — 3km of street performers, murals, palm-lined paths, and the famous Muscle Beach outdoor gym (free to watch, $10 day pass to use). Best people-watching in LA, no ticket required.",
            "11:00am — Abbot Kinney Boulevard (one block inland from the boardwalk) — LA's most acclaimed street of independent shops, coffee roasters, and brunch spots. Blue Bottle Coffee or Intelligentsia for coffee ($5–6). Walk the full 8 blocks for free.",
            "1:00pm — Lunch: tacos from one of the food trucks on Rose Avenue or Washington Boulevard ($3–4/taco). Jalisco-style fish tacos or birria tacos are the regional specialty. Budget $12–15 for a proper feed.",
            "3:00pm — Rent a beach cruiser on the boardwalk ($15–20/hour or $40/day) and cycle the 24km South Bay Bicycle Trail from Venice to Manhattan Beach and back. Flat, car-free, ocean-adjacent the entire way.",
            "6:00pm — Return to Santa Monica Pier for sunset. The pier is free to walk. Get a churro ($4) from one of the stands and watch the sun drop into the Pacific from the west end of the pier — one of the best free sunsets in California.",
            "8:00pm — Dinner on Main Street, Santa Monica: Back on the Beach Café is overpriced (tourist trap); instead try Father's Office (9th & Colorado, $25–35 range) for what many consider the best burger in LA, or the Tacos Por Favor truck nearby for $15 total.",
          ],
          cost: "$60–90 total",
        },
        {
          day: "Day 2",
          title: "Hollywood & Griffith Observatory",
          items: [
            "8:00am — Drive to Griffith Park early (free entry always). Take the Brush Canyon Trail to the Hollywood Sign viewpoint: 3.5km round trip, starts at the Bronson Canyon parking lot off Canyon Drive, free, takes 60–75 minutes. The sign is 15m tall — you cannot walk up to it (there's a fence), but the viewpoint gets you within 50m and eye-level.",
            "10:30am — Griffith Observatory (free admission always, open daily 12–10pm, but grounds open from dawn). The building itself and the grounds offer the best unobstructed city views in Los Angeles — the Downtown skyline, the ocean on clear days, the Hollywood Sign, and the Santa Monica Mountains. Arrive by 10am to find parking in the free lot before it fills.",
            "1:00pm — Drive down to Hollywood Boulevard. Avoid the tourist-trap restaurants (anything within 100m of the Walk of Fame charges 2–3x normal prices). Eat at Pinks Hot Dogs on La Brea (since 1939, $8–12, cash preferred) or the In-N-Out Burger on Sunset Boulevard ($5–8, order 'Animal Style' off the secret menu).",
            "2:30pm — Hollywood Walk of Fame — the 2.7km stretch of terrazzo stars is free to walk. The TCL Chinese Theatre (exterior free, interior theater tours $18) has celebrity handprints in cement since 1927. The Dolby Theatre (Oscars venue) exterior is worth a photo.",
            "4:00pm — Runyon Canyon Park (free, no car required from Hollywood) — 3.5km loop above Hollywood with expansive views over the city and Hollywood Hills. Popular with locals and their dogs. Trailhead on Fuller Avenue, 5-minute walk from Fountain Avenue.",
            "7:00pm — Hollywood Boulevard for dinner: the surrounding streets (Cahuenga, Vine, Selma) have reasonable restaurants. Republique on La Brea for $20–28 mains or Night + Market on Sunset for Thai food at $15–20 are both worth the short drive.",
          ],
          cost: "$40–65 total",
        },
        {
          day: "Day 3",
          title: "Getty Center & Beverly Hills",
          items: [
            "10:00am — Getty Center (admission always free, timed entry required — book at getty.edu up to 2 weeks ahead). The building itself is a Richard Meier masterpiece on a hill above the 405 freeway. Take the free tram from the base parking ($22 for the day) up to the museum. Allow 2–3 hours.",
            "10:30am — Getty collection highlights: Van Gogh's Irises, Rembrandt's Portrait of a Young Man, Pontormo's Portrait of a Halberdier, the Impressionist galleries, and the Central Garden designed by artist Robert Irwin. The rooftop terrace views over Bel Air and toward the Pacific are as good as any exhibit.",
            "1:00pm — Beverly Hills on foot: Rodeo Drive walk is free. The designer boutiques (Gucci, Prada, Chanel, Louis Vuitton) have their own architectural worth — the Armani and Tiffany buildings are genuinely interesting even if you are not buying. Beverly Hills City Hall is free to photograph.",
            "3:00pm — Melrose Avenue (between Highland and Fairfax) — the streetwear and vintage capital of LA. Free to walk. Decades vintage store, Wasteland, and the Paul Smith pink wall (148 S La Brea) are the notable stops. The wall was an unofficial Instagram landmark before the shop changed ownership.",
            "5:00pm — The Grove outdoor shopping center (free entry) and adjacent Original Farmers Market (since 1934) — get food at the Farmers Market stalls: Lotería! Grill for Mexican ($12–15), Magee's Kitchen for a sandwich ($10), or McCall's Meat & Fish for a top-quality deli experience.",
            "8:00pm — Dinner at Canter's Deli on Fairfax (open 24/7, since 1931) — a genuine LA institution. Matzo ball soup $9, Reuben sandwich $18, cheesecake $8. The late-night crowd is half celebrities and half cab drivers, which is a very LA combination.",
          ],
          cost: "$35–55 total",
        },
        {
          day: "Day 4",
          title: "Malibu & Pacific Coast Highway",
          items: [
            "8:00am — Drive north on the Pacific Coast Highway (PCH/Highway 1) from Santa Monica. The road hugs the coast for 50km to Malibu — every mile has a different angle on the Pacific. Traffic is light this early going north; the southbound return at 4–5pm will be slower.",
            "9:00am — El Matador State Beach (32350 PCH, Malibu) — free parking in a small lot ($8 machine fee at the lot, but roadside parking along PCH is free). Three separate beach coves separated by sea stacks and rock arches — the most photogenic beach in Los Angeles County. Arrive early for parking. The stairs down to the beach are steep.",
            "11:00am — Point Dume State Beach — free, large lot, often uncrowded on weekday mornings. Walk the Point Dume headland trail (30 minutes, free) for views of the Santa Monica Bay. In winter (December–April) this is one of the best coastal spots to see migrating gray whales.",
            "1:00pm — Neptune's Net Seafood (42505 PCH, Malibu) — a Malibu institution since 1956, beloved by surfers and motorcyclists and featured in multiple films. Shrimp tacos $14, steamed clams $16, fish and chips $19. Eat on the outdoor tables looking at the Pacific. Budget $20–30 per person.",
            "3:00pm — Zuma Beach (30000 PCH) — the biggest public beach in LA County, free, lifeguarded in summer. Wide, flat, and rarely as crowded as Santa Monica. Last swim of the trip.",
            "5:30pm — Drive back to base on PCH. Stop at Malibu Pier (free to walk) for the late afternoon light on the water before heading south.",
            "8:00pm — Koreatown for dinner (10–15 minutes east of DTLA): the best Korean BBQ in the United States, at prices that remain genuinely reasonable. Park's BBQ ($35–45/person), Soowon Galbi ($25–35/person) or Sun Nong Dan for sundubu jjigae stew ($18). Koreatown runs until 2am.",
          ],
          cost: "$50–75 total (including gas)",
        },
        {
          day: "Day 5",
          title: "Koreatown Brunch, LACMA or Universal Studios",
          items: [
            "9:00am — Brunch in Koreatown at Ham Ji Park on 6th Street ($12–18, galbi and rice or seollongtang bone broth soup) or Cassell's Hamburgers (a K-Town classic, $14–18) before choosing your afternoon.",
            "Option A — LACMA (free 'pay what you wish' on Tuesdays, otherwise $25 admission): Los Angeles County Museum of Art on Wilshire Boulevard. Largest art museum in the western USA. Don't miss Chris Burden's Urban Light installation (122 antique streetlamps, free to visit even without a ticket — it's on the street-facing exterior). The Stanley Kubrick retrospective and the Islamic art galleries are perennial highlights.",
            "Option B — Universal Studios Hollywood ($109+ online, cheaper than gate price): 30-minute drive north on the 101. The Studio Tour tram is the unique attraction — a 60-minute behind-the-scenes ride through working sound stages including the Jaws lake, the Psycho house, and the Jurassic Park jungle. The Wizarding World of Harry Potter and the Jurassic World ride are the top theme park elements.",
            "Option C — Long Beach day trip (30–45 minutes south on the 405/710): Aquarium of the Pacific ($35 adults, $20 children) — one of the finest aquariums on the West Coast. The Queen Mary ocean liner is docked next to it ($35 tours). The East Village Arts District in downtown Long Beach has free galleries and murals.",
            "4:00pm — Return to base. If departing today, LAX is 25–45 minutes from most LA neighborhoods (budget extra time for traffic — LAX departures on Sunday evenings create the worst congestion of the week).",
            "7:00pm — Final dinner: Leo's Tacos Truck on La Brea ($3–4/taco, famous al pastor, cash only) or Guisados in Echo Park ($4–5/taco, braised meat tacos, excellent agua fresca). Both are among the top taco destinations in a city that takes tacos more seriously than almost anywhere outside Mexico.",
          ],
          cost: "$45–120 total (varies by Option chosen)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$250–450/day",
      days: [
        {
          day: "Day 1",
          title: "Santa Monica & Venice with Rooftop Dining",
          items: [
            "10:00am — Check into Hotel Figueroa DTLA ($120–200/night) or Kimpton Everly Hollywood ($160–240/night). Both offer free morning bike rentals — use them for the Venice Boardwalk.",
            "12:00pm — Brunch at Gjusta in Venice ($20–30/person) — the most celebrated bakery-deli in Los Angeles, with housemade bread, charcuterie, smoked fish, and pastries. Lines form but move quickly.",
            "2:00pm — Rent a paddleboard or kayak at Venice Beach ($30–40/hour from multiple rental shops on the boardwalk). The Santa Monica Bay is calm in the mornings and early afternoon.",
            "5:00pm — Walk Abbot Kinney Boulevard end to end. Stop at Salt & Straw ice cream ($7–9/scoop, inventive seasonal flavors) and Intelligentsia Coffee for an afternoon pick-me-up.",
            "7:30pm — Dinner at Rustic Canyon Wine Bar in Santa Monica ($40–60/person) — farm-to-table California cuisine with an excellent natural wine list and produce-driven menu that changes weekly.",
            "9:30pm — Sunset drinks at the Erwin Hotel rooftop bar in Venice ($15–18/cocktail) — unobstructed ocean views, fire pits on the terrace, very LA atmosphere.",
          ],
          cost: "$160–220 total",
        },
        {
          day: "Day 2",
          title: "Griffith Observatory & Silver Lake",
          items: [
            "9:00am — Sunrise hike up to Griffith Observatory via the East Observatory Trail (4km round trip from the Greek Theatre parking lot). The city spread below at dawn, completely silent except for coyotes in the chaparral.",
            "11:00am — Observatory opens at noon; use the morning to walk through the native plant garden on the south slope. Explore the Zeiss telescope in the East Dome (free on clear evenings).",
            "1:00pm — Drive to Silver Lake for lunch at Sqirl ($16–22 for their famous jam and ricotta toast or grain bowls) — the restaurant that defined LA's farm-to-table brunch movement. Arrive early; lines can reach an hour on weekends.",
            "3:00pm — Silver Lake Reservoir Loop (5.5km, free, flat, popular with cyclists and joggers). The Silver Lake neighborhood surrounding it is full of independent bookshops, vinyl record stores, and design studios.",
            "6:00pm — Pre-dinner drinks at Bar Covell on Vermont Avenue — an excellent natural wine bar with 50+ wines by the glass at $12–20.",
            "8:00pm — Dinner at Night + Market on Sunset ($30–45/person) — Thai food cooked the way it's cooked in Thailand rather than the Americanized version. The pork laab, the beef crying tiger, and the whole fish are essential orders.",
          ],
          cost: "$180–250 total",
        },
        {
          day: "Day 3",
          title: "Getty Center & LACMA with Architectural Tour",
          items: [
            "10:00am — Getty Center (free, timed entry required). Hire a private docent-led tour through the museum's education office ($50–80/person) to understand the collection in depth rather than walking through rooms.",
            "1:00pm — Lunch at the Getty's Restaurant ($30–40/person) with panoramic views over the Sepulveda Pass. The California cuisine is genuinely good — not a typical museum cafeteria.",
            "3:00pm — LACMA ($25 admission). Focus on the Broad Contemporary Art Museum wing — Jeff Koons, Cy Twombly, and the rotating contemporary collection. Chris Burden's Urban Light at dusk is the defining photographic moment.",
            "5:30pm — Drive Mulholland Drive from Laurel Canyon to Coldwater Canyon — a 20km ridgeline road above Hollywood Hills with Valley views to the north and city views to the south. Free, no stops required, just drive it for the experience.",
            "8:00pm — Dinner at Republique on La Brea ($45–65/person) — housed in a 1929 Charlie Chaplin building. The French-Californian menu changes with the season; the charcuterie board and any pasta on the menu are reliably excellent.",
          ],
          cost: "$200–280 total",
        },
        {
          day: "Day 4",
          title: "Malibu with Private Beach Club",
          items: [
            "8:30am — Drive PCH north to Nobu Malibu (21038 PCH) for a late breakfast ($30–45/person) on the deck over the water. Nobu's morning menu is a fraction of the dinner prices and the Pacific view is identical.",
            "11:00am — El Matador State Beach. Hire a surfing lesson through Malibu Surf Shack ($100–120/2-hour lesson including board rental) — the waves at Malibu are among the best in California for learning.",
            "2:00pm — Malibu Farm Pier Café (Malibu Pier, 23000 PCH) for lunch ($20–35/person) — the pier café version is more casual and affordable than the main restaurant. Farm-raised and locally sourced California cooking overlooking the ocean.",
            "5:00pm — Drive back through Malibu Colony (the private beach neighborhood where celebrities live — you can't enter, but the colony entrance gates on PCH are a Hollywood landmark).",
            "8:00pm — Dinner at Osteria Mozza (Highland & Melrose, $60–90/person) — Mario Batali and Nancy Silverton's flagship. The mozzarella bar (burrata, bufala, fior di latte) and the house-made pasta are the reason food writers make pilgrimages here.",
          ],
          cost: "$250–350 total (including surfing lesson)",
        },
        {
          day: "Day 5",
          title: "Arts District & Departure",
          items: [
            "9:00am — Downtown LA Arts District morning walk: free, architecturally fascinating post-industrial neighborhood. Hauser & Wirth gallery (free admission, consistently world-class exhibitions). The ROW DTLA complex of warehouses-turned-restaurants and boutiques.",
            "11:00am — Bestia in the Arts District for brunch ($25–40/person) — if they are open for weekend brunch. Otherwise Grand Central Market (DTLA, open from 8am) has everything from eggnog waffles to bone broth to pupusas at $8–15.",
            "1:00pm — The Broad museum on Grand Avenue (free timed tickets required, book at thebroad.org) — the contemporary art collection including Jeff Koons' Balloon Dog and Cindy Sherman photographs. The building by Diller Scofidio + Renfro is itself notable.",
            "3:00pm — Pack and head to LAX. Use the FlyAway bus ($9.75, runs from Union Station and Van Nuys) or rideshare ($25–45 depending on traffic). LAX is chronically congested — arrive 2.5–3 hours before international flights.",
          ],
          cost: "$120–180 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$700–2500+/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival & Shutters on the Beach",
          items: [
            "Private car transfer from LAX: Blacklane or Carey Limousine, $150–200 to Santa Monica. Your hotel has arranged early check-in.",
            "Check into Shutters on the Beach ($450–800/night) or Chateau Marmont ($500–900/night) — the former is the only directly beachfront hotel in Santa Monica; the latter is the most legendary hotel in Hollywood history (Greta Garbo, F. Scott Fitzgerald, Led Zeppelin).",
            "Afternoon: personal shopping appointment on Rodeo Drive. Several boutiques (Gucci, Brunello Cucinelli, Tom Ford) offer private appointment shopping — contact the store's client services team in advance. Complimentary alterations included.",
            "7:30pm — Dinner at Nobu Malibu ($150–250/person): reserve the ocean-deck table through your hotel concierge. The black cod miso and the omakase sashimi selection are the benchmark. Non-Nobu alternative: Providence in Hollywood ($250+/person, 2 Michelin stars) for the finest seafood tasting menu in LA.",
          ],
          cost: "$600–1,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Getty Tour & Malibu Coastline",
          items: [
            "9:00am — Private curator-led tour of the Getty Center ($400–600 arranged through the Getty's private events office). Access to normally restricted conservation labs and the photography archive is available through advanced VIP booking.",
            "1:00pm — Helicopter flight over the Santa Monica coastline to Malibu ($350–500/person for 30-minute tour, departs from Santa Monica Airport). Seeing the PCH, Malibu Colony, and Point Dume from 300 meters above is a completely different version of the same view you'd drive.",
            "3:00pm — Afternoon at Soho Farmhouse Malibu or The Ranch at Live Oak (day membership, $200–400) for private beach access, pool, and treatment rooms.",
            "8:00pm — Dinner at Bavel (Downtown LA Arts District, $100–150/person) — the Middle Eastern-Californian tasting menu from the team behind Bestia. The whole roasted cauliflower, duck basteeya, and za'atar focaccia are extraordinary. Book 3–4 weeks in advance.",
          ],
          cost: "$800–1,400 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Exclusive Hollywood & Beverly Hills",
          items: [
            "10:00am — Private Warner Bros. Studio VIP Tour ($500–700/person for the Executive Tour): access to sets, prop rooms, costume archives, and a sit-down briefing from a studio executive or director. Covers Harry Potter: The Exhibition and the Friends Central Perk set.",
            "1:00pm — Lunch at Spago Beverly Hills ($80–120/person) — Wolfgang Puck's flagship, the restaurant that created California cuisine as a concept. The smoked salmon pizza and the Austrian dessert cart remain the signature offerings four decades in.",
            "4:00pm — Private fitting at Maxfield on Melrose or Syd Jerome in Beverly Hills — the two LA clothiers with the most credible luxury menswear edit. By appointment only.",
            "8:00pm — Dinner at n/naka ($350+/person, kaiseki omakase, 12 courses) — the most difficult reservation in Los Angeles. Chef Niki Nakayama's Japanese-Californian kaiseki menu was featured on Chef's Table. Book 4–6 weeks in advance; opens reservations on the 1st of each month.",
          ],
          cost: "$900–1,500 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Malibu Private Estate Day & Sunset Cruise",
          items: [
            "9:00am — Private surfing session at Malibu Point with a former professional surfer instructor ($300–500 for 2-hour private lesson). The point break at First Point Malibu is one of the most famous waves in surfing history.",
            "1:00pm — Private chef catered beachside lunch ($300–500 for two, arranged through luxury concierge services like PURE Entertainment Group). Several Malibu estates with private beach access are available for day rental ($2,000–5,000).",
            "5:00pm — Sunset yacht charter from Marina del Rey ($800–2,000 for 3-hour charter): watch the sun set from the water over Santa Monica Bay. Catered charcuterie and Champagne included.",
            "9:00pm — Late dinner at Craig's in West Hollywood ($80–120/person) — the most celebrity-dense restaurant in LA. Not the best food in the city, but an irreplaceable experience. Table positioning matters; ask your hotel concierge to request a specific section.",
          ],
          cost: "$1,000–2,000 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Arts District Farewell & Private Transfer",
          items: [
            "10:00am — Private art collection visit: several LA collectors open their homes to vetted guests through platforms like Artsy or private art advisors. The Broad family collection and several Hollywood Hills estates have rotating access for serious visitors.",
            "1:00pm — Farewell lunch at Otium (adjacent to The Broad museum, $60–90/person) — Timothy Hollingsworth's California cuisine with produce from his own farm. The mushroom toast and the dry-aged duck are exceptional.",
            "3:00pm — Hotel checkout. Luggage arranged by concierge and loaded into your private car.",
            "4:00pm — Private transfer to LAX with Carey or Blacklane ($150–200). Access the LAX international terminal's The Club at LAX lounge ($50 day pass if not included with your airline) for departure.",
          ],
          cost: "$400–700 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$40–70", food: "$20–35", transport: "$15–30", activities: "$10–25", total: "$90–150/day" },
    { tier: "✨ Mid-Range", accommodation: "$120–240", food: "$50–90", transport: "$30–60", activities: "$40–80", total: "$250–450/day" },
    { tier: "💎 Luxury", accommodation: "$450–900", food: "$150–400", transport: "$80–200", activities: "$150–500", total: "$700–2,500+/day" },
  ],
  mistakes: [
    { icon: "🚌", title: "Relying on Public Transport", desc: "Los Angeles has a Metro system (fare $1.75/ride) and it covers some routes adequately — the B Line (Red) connects Hollywood to DTLA, and the E Line (Expo) runs to Santa Monica. But most of the city's best destinations (Malibu, Getty, Griffith Park, Beverly Hills, Venice) are inaccessible or require multiple transfers. Rent a car. Budget $40–70/day including insurance. It fundamentally changes what is possible.", color: "bg-red-50 border-red-200" },
    { icon: "🌄", title: "Skipping Griffith Observatory", desc: "Most tourists focus on the Hollywood Walk of Fame and never make it to Griffith Observatory — which provides the best view of the city, the Hollywood Sign, and the LA Basin from any publicly accessible point. It's free, open daily, and 10 minutes by car from Hollywood Boulevard. Missing it is the equivalent of going to Paris and skipping the view from Sacré-Cœur.", color: "bg-orange-50 border-orange-200" },
    { icon: "🍔", title: "Eating on Hollywood Boulevard", desc: "The restaurants on Hollywood Boulevard and adjacent tourist-facing blocks charge Manhattan prices for mediocre food. Walk 5–10 minutes north or south and prices drop 40–60%. The entire neighborhood of Thai Town (on Hollywood Blvd east of Western) has exceptional Thai food for $12–18/meal. Franklin Avenue and Melrose Avenue running parallel to Hollywood both have significantly better options at better prices.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🚗", title: "Underestimating Traffic and Distances", desc: "Los Angeles is 87km from north to south. What Google Maps says is 20 minutes can take 90 minutes at 5pm on a weekday. The I-405 and I-10 are among the most congested highways in the United States. Plan your days geographically — do beach activities together, do Hollywood and Griffith together, do DTLA and Koreatown together. Never schedule a museum at 3pm if you need to be in Malibu at 7pm.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🌮", title: "The Best Tacos Are on Figueroa Street and in Boyle Heights", desc: "The finest tacos in Los Angeles — and therefore among the best in the USA — are at Mariscos Jalisco in Boyle Heights (the dorado shrimp taco, crispy and sauced, $4), Leo's Tacos Truck on La Brea (al pastor cooked on a vertical trompo spit, $3.50, cash only), and the trucks on Figueroa Street between Olympic and Venice. None are on Hollywood Boulevard. All require a car or rideshare.", color: "bg-amber-50 border-amber-200" },
    { icon: "🏖️", title: "All California Beaches Are Free and Publicly Accessible by Law", desc: "California law guarantees public access to all beaches up to the mean high tide line. Even in Malibu, where billionaires have built homes right on the coast, you have the legal right to walk the beach. The California Coastal Commission actively enforces this. Parking at state beaches (El Matador, Zuma, Point Dume) costs $8–12 in the lots, but roadside parking along PCH is free if you can find a space.", color: "bg-teal-50 border-teal-200" },
    { icon: "🔭", title: "Griffith Observatory Parking: Arrive 20 Minutes Before Sunset", desc: "The free parking lot at Griffith Observatory holds approximately 170 cars and fills completely on clear evenings. Arrive by 30 minutes before sunset or take the LADOT Dash Observatory shuttle from Vermont/Sunset Metro station ($0.50). The observatory is open noon–10pm Tuesday–Friday, 10am–10pm weekends. The Samuel Oschin Planetarium shows are $8 and worth it on your first visit.", color: "bg-green-50 border-green-200" },
    { icon: "💈", title: "In-N-Out Burger: Order Off the Secret Menu", desc: "In-N-Out Burger is a California institution with prices deliberately kept low ($3.45 for a Double-Double in 2026, $2.65 for a single). The secret menu is printed on the food wrappers: 'Animal Style' adds mustard-fried patties, extra sauce, pickles, and caramelized onions. '3x3' or '4x4' means three or four patties. 'Protein Style' replaces the bun with lettuce wraps. Neapolitan milkshake mixes all three flavors. Every location consistently excellent.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Do I need a car in Los Angeles?", a: "Yes, for a proper experience of LA you need a car. The Metro covers Hollywood, Downtown, and Santa Monica adequately, but Malibu, the Getty Center, Griffith Observatory, Venice Beach, Beverly Hills, and Koreatown all require driving. Rent from LAX ($40–70/day) or use Uber/Lyft for individual trips ($15–40 per journey within the city). Parking at state beaches is free roadside along PCH. City parking costs $15–40/day depending on location." },
    { q: "Is Los Angeles safe for tourists?", a: "The main tourist areas — Santa Monica, Venice Beach (boardwalk area), Hollywood, Beverly Hills, West Hollywood, Silver Lake, the Arts District — are safe for tourists with standard urban precautions. Don't leave valuables visible in your car (car break-ins are extremely common throughout the city — this is the primary crime affecting tourists). Homeless encampments exist in Venice, near Union Station, and in DTLA — be situationally aware but they are not targeting tourists. Boyle Heights and East LA are safe to visit for tacos during the day." },
    { q: "What is the best neighborhood to stay in for first-timers?", a: "Santa Monica is the best base for first-timers: centrally located, walkable (which almost no LA neighborhood is), on the beach, 20 minutes from Venice, 25 minutes from Beverly Hills, 30 minutes from Hollywood. Mid-range hotels cost $120–250/night. West Hollywood is better positioned for nightlife and Hollywood attractions. Downtown LA (DTLA) offers the cheapest options and is improving rapidly, but is less convenient for beach days." },
    { q: "How many days do I need in Los Angeles?", a: "Five days is the ideal minimum to cover the major areas without feeling rushed: 1 day for beach (Venice/Santa Monica), 1 day for Hollywood/Griffith, 1 day for museums/Beverly Hills, 1 day for Malibu, 1 day flexible for Koreatown/DTLA/Universal or a day trip. Seven days allows Disneyland (45 minutes south in Anaheim) and a proper Joshua Tree National Park overnight without sacrificing anything in the city." },
    { q: "How far is Disneyland from Los Angeles?", a: "Disneyland in Anaheim is approximately 45 minutes south of central LA on the I-5, traffic permitting. Leave before 8am or after 10am to avoid I-5 congestion. Disneyland tickets start at $104/day for single-park access, with popular dates reaching $189. Disney California Adventure is the adjacent park (separate ticket). A two-park ticket for both: $199+. Book well in advance for weekend visits. The resort hotels are convenient but expensive ($350–700/night); the surrounding Anaheim hotels are much cheaper ($80–150) and within walking distance." },
    { q: "What is the tipping culture in Los Angeles?", a: "Tipping in LA follows standard US conventions: restaurants 18–22% (automatic service charges are increasingly common but check your bill), taxis and rideshare 10–15%, hotel housekeeping $3–5/night, valet parking $3–5 when you collect the car, coffee shops $1–2 per drink. Many restaurants have moved to automatic 18–20% service charges — if so, you are not obligated to tip additionally (though you can). Tipping below 15% at a sit-down restaurant in California is considered rude by local standards." },
  ],
  combineWith: ["las-vegas-4-days", "san-francisco-4-days", "new-york-5-days"],
  relatedSlugs: ["las-vegas-4-days", "new-york-5-days", "miami-4-days", "bali-5-days"],
  galleryQuery: "los angeles california hollywood venice beach malibu sunset",
};

export const metadata: Metadata = {
  title: "Los Angeles in 5 Days: Hollywood, Malibu, Venice Beach & Real LA Food (2026)",
  description: "Complete 5-day Los Angeles itinerary covering Hollywood Sign hike, Griffith Observatory, Getty Center, Malibu PCH drive, Venice Beach, Koreatown, and the best tacos in LA — budget to luxury.",
  keywords: ["los angeles itinerary 5 days", "los angeles travel guide 2026", "la budget travel", "hollywood griffith observatory guide", "los angeles things to do", "venice beach malibu guide", "LA tacos guide"],
  openGraph: {
    title: "Los Angeles in 5 Days: Hollywood, Malibu & Real LA Food (2026)",
    description: "Hollywood Sign hike, Getty Center, Malibu PCH drive, Venice Beach and the best tacos in the USA — complete budget to luxury itinerary.",
    images: [{ url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80", width: 1200, height: 630, alt: "Los Angeles Hollywood Sign California Sunset Skyline" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Los Angeles in 5 Days (2026)", description: "Hollywood, Malibu, Venice, Koreatown — complete LA itinerary for every budget." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/los-angeles-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Los Angeles in 5 Days: Hollywood, Malibu, Venice Beach & Real LA Food (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80",
      description: "Complete 5-day Los Angeles itinerary from Venice Beach and Hollywood to Malibu and Koreatown, covering budget hostels to luxury hotels.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Los Angeles 5 Days", item: "https://www.incredibleitinerary.com/blog/los-angeles-5-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Los Angeles, California, USA",
      description: "The entertainment capital of the world — home to Hollywood, Venice Beach, Malibu, the Getty Center, Griffith Observatory, and some of the finest taco trucks on earth.",
      touristType: ["Beach lovers", "Film and entertainment enthusiasts", "Food travelers", "Art museum visitors", "Outdoor hikers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 34.0522,
        longitude: -118.2437,
      },
    },
  ],
};

export default function LosAngelesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LosAngelesClient />
    </>
  );
}
