import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "New York City",
  country: "USA",
  countryFlag: "🇺🇸",
  slug: "new-york-5-days",
  heroQuery: "new york city times square manhattan skyline usa",
  heroAlt: "New York City Manhattan skyline with Times Square lights and yellow taxis at dusk USA",
  category: "North America",
  date: "April 5, 2026",
  readTime: "16 min read",
  intro: "New York City at sunrise — the skyline catching orange light over the East River, a corner bodega already humming with regulars, the subway rattling beneath your feet before the city has fully woken — is one of the most electric travel experiences on the planet. Five days lets you cross the Brooklyn Bridge on foot, stand beneath the Statue of Liberty, lose yourself in Central Park, and eat your way through five boroughs without once resorting to a Times Square tourist trap.",
  stats: {
    duration: "5 Days",
    budgetFrom: "$80",
    bestMonths: "Apr–Jun, Sep–Nov",
    airport: "JFK / LGA / EWR",
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
        ["B-2 Visa Required", "Indian passport holders need a B-2 tourist visa for the USA. Fee: $185 (MRV fee, non-refundable). Apply through the US Embassy website (ustraveldocs.com). An interview at the US Embassy or Consulate is mandatory."],
        ["Wait Times 2026", "Interview wait times at major Indian consulates (Delhi, Mumbai, Chennai) are currently 400–800 days. Use the DROP (Domestic Routine Off-Peak) rescheduling system to find cancelled slots — check daily, early morning. Some travelers get appointments within weeks this way."],
        ["ESTA Not Available", "ESTA (Electronic System for Travel Authorization) is available only to citizens of 42 Visa Waiver Program countries. India is not on the list. There is no shortcut — a B-2 visa with an interview is the only route."],
        ["Key Documents", "DS-160 form, valid passport (6 months beyond travel), bank statements (last 6 months), employment/business proof, property ownership or ties to India, travel itinerary, confirmed hotel bookings, and travel insurance. Strong financial and professional ties to India significantly improve approval chances."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders",
      bg: "bg-teal-50",
      border: "border-teal-200",
      titleColor: "text-teal-800",
      items: [
        ["ESTA — Visa Waiver Program", "Citizens of 42 countries including the UK, Australia, Japan, South Korea, most of the EU, and New Zealand can enter the USA visa-free for up to 90 days under the Visa Waiver Program. You must apply for ESTA before travel at esta.cbp.dhs.gov. Cost: $21. Valid for 2 years or until your passport expires."],
        ["ESTA Processing", "Apply at least 72 hours before departure, though most approvals come within minutes. Authorization is usually granted immediately but can take up to 72 hours if flagged for review. Do not board without an approved ESTA."],
        ["90-Day Limit", "The VWP allows a maximum 90-day stay per visit. Days are counted strictly — overstaying, even by one day, results in a permanent VWP ban and requires a full visa for all future US travel. Track your entry date carefully."],
        ["CBP Declaration", "All arrivals complete a CBP (Customs and Border Protection) declaration form — now done digitally at kiosks in US airports. Have your accommodation address in New York ready (first night's hotel address is fine)."],
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
          title: "Central Park, Upper West Side & Times Square",
          items: [
            "8:00am — Start at the south end of Central Park (59th St entrance). Walk north past Wollman Rink to Bethesda Fountain — the park's centerpiece and one of the most beautiful public spaces in America. The fountain's Angel of the Waters statue faces the Bethesda Terrace arcade, which has the most ornate tile ceiling in the park.",
            "9:30am — Bow Bridge — the cast-iron bridge over the Lake is NYC's most photographed spot inside the park. Morning light hits from the east; arrive before 10am for clean shots before the joggers crowd the railing.",
            "11:00am — Metropolitan Museum of Art (pay-what-you-wish for NY state residents; suggested $30 for visitors — but you can genuinely pay $1 and it's legal). This is one of the world's great art museums: Egyptian Temple of Dendur, European Masters, Arms and Armor, the Roof Garden. Budget 2–3 hours minimum.",
            "2:00pm — Lunch on Museum Mile: grab a dirty-water hot dog from a cart ($2–3) or head one block to Lexington Ave for a deli sandwich ($8–12). Avoid the museum cafeteria — mediocre at twice the price.",
            "4:00pm — Walk the Upper West Side along Broadway or Amsterdam Ave — brownstone-lined residential streets, independent bookshops, and the Zabar's deli (founded 1934), where a fresh bagel with lox and cream cheese costs $10 and tastes like the city itself.",
            "6:30pm — Times Square at dusk: arrive as the neon kicks in. Walk the pedestrian plaza (not the sidewalks — use the pedestrian area between 42nd and 47th). See it once, don't eat there. Every restaurant in Times Square charges 3x the normal NYC price.",
            "8:00pm — Dinner in Hell's Kitchen (9th Ave between 44th and 57th): NYC's best value restaurant strip. Excellent Thai, Peruvian, Mexican, and Italian at $15–25 mains. The neighborhood's proximity to the theater district means fast service and great quality.",
          ],
          cost: "$40–60 total",
        },
        {
          day: "Day 2",
          title: "Brooklyn Bridge Walk, DUMBO & Brooklyn Heights",
          items: [
            "8:30am — Take the subway (A/C/E or 4/5/6 to Brooklyn Bridge–City Hall, $2.90). Walk the Brooklyn Bridge from Manhattan to Brooklyn — the 1.3km pedestrian walkway above the traffic is free, takes 30 minutes, and gives the most cinematic views of lower Manhattan's skyline you can get without paying for an observation deck.",
            "10:00am — DUMBO (Down Under the Manhattan Bridge Overpass): the best Manhattan Bridge/Brooklyn Bridge double-frame photo is on Washington Street at the intersection with Water Street. Go early before the Instagram crowds. The Empire Fulton Ferry State Park riverfront lawn has a direct view of the Manhattan skyline across the East River.",
            "11:30am — Brooklyn Heights Promenade: a 0.5-mile elevated walkway along the bluff above the Brooklyn-Queens Expressway, facing lower Manhattan. The view here — especially of the Financial District and the Statue of Liberty in the background — is arguably the best skyline view in the whole city, and completely free.",
            "1:00pm — Lunch at Juliana's Pizza (DUMBO, $5–7/slice) — coal-fired thin-crust pizza in a tiny room below the Brooklyn Bridge. Cash preferred. The line at peak hours is worth it. Alternatively: Grimaldi's across the street (the original location, equally legendary).",
            "3:00pm — Smorgasburg (weekends only, April–October, Prospect Park or Williamsburg): NYC's massive outdoor food market, 100+ vendors. Budget $20–30 for a serious eat. If weekday, head to Williamsburg (Bedford Ave) — vintage shops, independent cafés, and the East River State Park waterfront.",
            "5:00pm — Manhattan Bridge walk back to Manhattan (pedestrian path on the north side, free) or subway. The Manhattan Bridge gives a different angle on the skyline and a direct view into DUMBO from above.",
            "7:30pm — Dinner in Chinatown or Little Italy (Manhattan): $10–15 for dumplings and noodles at Joe's Shanghai (famous soup dumplings, $12 for 8). Mulberry Street Little Italy is touristy but has genuine Italian restaurants at reasonable prices.",
          ],
          cost: "$35–55 total",
        },
        {
          day: "Day 3",
          title: "Lower Manhattan — Statue of Liberty, 9/11 Memorial & Financial District",
          items: [
            "7:30am — Statue of Liberty ferry departs from Battery Park (book in advance at statuecruises.com — tickets sell out 2 weeks ahead in peak season). Ferry + grounds: $24 adults. Reserve Access (pedestal/crown) costs $24–30 extra — crown requires booking 3+ months in advance. The ferry itself gives good views of the statue; the grounds access puts you at the base.",
            "10:30am — Ellis Island (included in the ferry ticket): the immigration museum where 12 million Americans' ancestors arrived. The Registry Room (Great Hall) is genuinely moving. The American Immigrant Wall of Honor lists 700,000 names. Budget 45–60 minutes.",
            "12:30pm — 9/11 Memorial (free entry, no ticket required): the twin reflecting pools in the footprints of the original towers, surrounded by the names of the 2,977 victims. One of the most powerful memorials in the world. The museum ($30 entry) goes underground into the surviving foundations — harrowing and important. The Survivor Tree — a Callery pear that survived the collapse and was replanted — grows in the memorial plaza.",
            "2:30pm — Wall Street: the Federal Hall (free) where Washington took the first presidential oath. The New York Stock Exchange building (exterior only — trading floor not publicly accessible). Walk down Broad Street to the Charging Bull sculpture (Bowling Green) and the newer Fearless Girl.",
            "4:00pm — One World Observatory ($46 general admission, book online): 100 floors up, 360-degree view of NYC. Best during daytime for visibility — you can see four states on clear days. The rise to the top (102 seconds in a panoramic elevator with a time-lapse view) is part of the experience.",
            "6:30pm — South Street Seaport (Pier 17 area): free riverside area with views of the Brooklyn Bridge from the water level. The rooftop at Pier 17 has free access — good sunset spot.",
            "8:00pm — Dinner in the Financial District: the neighborhood empties of office workers by 6pm and becomes surprisingly quiet. Genuine restaurant value compared to midtown. Try Nobu Downstairs for high-end sushi ($60–80) or Stone Street (a pedestrianized cobblestone alley) for a more casual $20–30 meal.",
          ],
          cost: "$60–90 total (ferry + memorial museum + observatory)",
        },
        {
          day: "Day 4",
          title: "Midtown — Rockefeller Center, High Line & Hudson Yards",
          items: [
            "8:00am — The High Line: start at the Gansevoort St entrance (14th St) and walk north. This 2.3km elevated park on a disused freight rail line through Chelsea and Hudson Yards is one of NYC's best urban design achievements. Go before 9am — you'll have it nearly to yourself. Free, always open.",
            "10:00am — Chelsea Market (15th St & 10th Ave): an indoor food hall and market in a converted Nabisco factory. The Lobster Place, Amy's Bread, Los Tacos No. 1 (excellent, $4–6 per taco). A solid morning snack or early lunch stop — budget $10–20.",
            "11:30am — Whitney Museum of American Art ($25, open Wed–Mon): the premier collection of 20th and 21st century American art — Edward Hopper, Georgia O'Keeffe, Jasper Johns. The building itself (Renzo Piano design, 2015) is part of the art — the terraces give great High Line views.",
            "1:30pm — Top of the Rock observation deck at Rockefeller Center ($40 general admission, book online): 70th floor, open-air observation level. The key advantage over the Empire State Building: you can see the Empire State Building from here, whereas at the Empire State you cannot. Sunset is the premium time ($44 for sunset tickets) — the sky turns orange over New Jersey as the city lights up below.",
            "3:30pm — Hudson Yards: The Vessel (free to see from outside — $10 to climb, but it reopened in 2024 with stricter guardrails after the 2021–2023 closure). The Edge observation deck ($38) at Hudson Yards is NYC's highest outdoor sky deck. The Shops at Hudson Yards for air-conditioned browsing.",
            "5:30pm — Midtown walk: Grand Central Terminal (free — go inside for the main concourse ceiling, Vanderbilt Hall, and the whispering gallery). Then walk to Bryant Park (free, behind the New York Public Library — the library's reading room is free and magnificent).",
            "7:30pm — Dinner in Koreatown (32nd St between 5th and 6th Ave): NYC's K-Town is one block long but dense with excellent Korean BBQ and bibimbap. Most restaurants open until 2am. Budget $20–35 per person for Korean BBQ with banchan.",
          ],
          cost: "$55–80 total",
        },
        {
          day: "Day 5",
          title: "MoMA, Fifth Avenue & Farewell Dinner",
          items: [
            "9:00am — MoMA (Museum of Modern Art, $25 entry, free Friday evenings 5:30–9pm): Van Gogh's Starry Night, Picasso, Warhol, Pollock, Cindy Sherman, and the best design collection in the world (includes the original Volkswagen Beetle and a Bell 47D helicopter). Budget 2–3 hours.",
            "12:00pm — Governors Island day trip option (May–October): free ferry from the Battery Maritime Building (near Staten Island Ferry terminal) on weekdays, $4 return on weekends. The island has no cars, a hill with a panoramic view of the harbor and lower Manhattan, and food vendors. A genuinely peaceful 2-hour escape from the city.",
            "2:00pm — Fifth Avenue window shopping: Saks Fifth Avenue, Bergdorf Goodman, Tiffany & Co (the new flagship after renovation), the Apple Store glass cube (58th St). Turn onto 57th Street for the luxury mile — free to walk, expensive to buy.",
            "3:30pm — The Frick Collection (74th St & Fifth Ave, $22): Henry Clay Frick's private mansion turned museum — Vermeer, Rembrandt, Velázquez — in a Fifth Avenue mansion that gives you a sense of Gilded Age NYC wealth. One of NYC's most underrated museums.",
            "5:00pm — Staten Island Ferry (Whitehall Terminal, lower Manhattan): completely free, runs every 30 minutes. The 25-minute crossing gives you close-up views of the Statue of Liberty and Ellis Island from the water, the lower Manhattan skyline from the harbor — the same view immigrants had arriving in the early 20th century. Ride there and back; no need to exit at Staten Island.",
            "7:00pm — Farewell dinner in Little Italy (Mulberry St): Umberto's Clam House ($30–45/person) or Caffè Palermo for cannoli. Or head to the East Village for the best value dinner in Manhattan: Veselka (Ukrainian diner, $15–20, open 24 hours), or Momofuku Noodle Bar ($25–35) where David Chang started his empire.",
          ],
          cost: "$35–65 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$220–380/day",
      days: [
        {
          day: "Day 1",
          title: "Central Park Private Tour & Met Rooftop at Sunset",
          items: [
            "9:00am — Check into a mid-range hotel: Pod 51 (Midtown East, $120–180/night) or citizenM Bowery (Lower East Side, $160–220/night, spectacular Manhattan views from the rooftop bar).",
            "10:00am — Central Park guided walking tour (Airbnb Experience or Urban Adventures, $45–60/person): Bethesda Fountain, Bow Bridge, Shakespeare Garden, the Ramble. A knowledgeable guide makes the park's 843 acres navigable and tells the history of each landmark.",
            "1:00pm — Lunch at Tavern on the Green (Central Park West entrance, $35–55/person): the legendary Central Park restaurant, completely renovated. American classics with a view of the park through floor-to-ceiling windows.",
            "3:00pm — Metropolitan Museum of Art: pay the full suggested $30 and use the audio guide ($7). Focus on the Egyptian Wing (Temple of Dendur), the European Masters (Vermeer, Rembrandt), and the Costume Institute if there's a current exhibition. The Roof Garden sculpture installation (May–October) has a direct Midtown skyline view.",
            "6:30pm — Rooftop cocktails at The Met Roof Garden Bar (seasonal) or the 230 Fifth rooftop bar ($18–22 cocktails, heated igloos in winter, open-air in summer, one of NYC's best skyline views).",
            "8:30pm — Dinner in the Upper East Side: Cafe Boulud (76th St, $60–85/person) for French-American cooking from Daniel Boulud, or J.G. Melon (75th & Lexington, $25–35) for the best cheeseburger on the Upper East Side.",
          ],
          cost: "$180–260 total",
        },
        {
          day: "Day 2",
          title: "Brooklyn Food Tour & Williamsburg",
          items: [
            "9:00am — Brooklyn Bridge walk from Manhattan: cross on foot (30 minutes) and arrive in DUMBO by 10am.",
            "10:30am — Brooklyn food tour (Brooklyn Foodie Tours or similar, $65–85/person): stops include artisan cheesemakers, the Fish Market, Jacques Torres chocolate, and a Brooklyn brewery. 3 hours, genuinely worth it for understanding why Brooklyn's food scene beats most of Manhattan's.",
            "2:00pm — Williamsburg: take the L train from DUMBO area (or cab, $15). Bedford Ave is the main strip — vintage clothing at Buffalo Exchange and Crossroads, independent record stores, the Artists & Fleas market (weekends). Dinner prep stop at Marlow & Daughters butcher for a sense of Brooklyn's artisan food culture.",
            "5:00pm — East River State Park (North 8th St waterfront): free park with one of the best sunset views of the Manhattan skyline across the East River. The Williamsburg Bridge is to the south; the skyline is directly west.",
            "7:30pm — Dinner in Williamsburg: Lilia (255 Meeker Ave, $55–75/person) — Missy Robbins's wood-fired pasta restaurant, one of the best Italian tables in NYC. Book 3–4 weeks in advance. Or Kinfolk 94 (rooftop cocktails then dinner, $40–60/person).",
          ],
          cost: "$200–280 total",
        },
        {
          day: "Day 3",
          title: "Statue of Liberty with Reserve Access & Downtown History",
          items: [
            "7:30am — First ferry to Statue of Liberty with Reserve Access to the Pedestal (book statuecruises.com at least 2 weeks ahead, $24 + $24 reserve access = $48 total). The pedestal gives you a view from the statue's feet looking back at Manhattan harbor — a perspective almost no tourist sees.",
            "11:00am — 9/11 Memorial and Museum ($30): the underground museum documenting September 11, 2001, is among the most powerful historical museums in the USA. The Survivors' Staircase, the Last Column, and the Exhibition Galleries with authentic artifacts and survivor testimonies. Budget 90 minutes minimum.",
            "1:30pm — Lunch at Eataly Downtown (101 Liberty St, $25–40/person): the Italian food hall under the Westfield World Trade Center. Excellent pasta and pizza at mid-range prices, or the marketplace for a self-assembled Italian picnic.",
            "3:30pm — One World Observatory ($46): the highest observation deck in the Western Hemisphere. Clear day views extend to New Jersey, Connecticut, and Long Island. The Sky Portal — a live camera feed projected on a disc in the floor, 1,250 feet below — is a disorienting and memorable experience.",
            "6:00pm — Cocktails in the Financial District: Mace (NYC's best cocktail bar for spirits enthusiasts, $18–24 per cocktail) or the bar at the Beekman Hotel (a Victorian atrium hotel with a stunning glass ceiling).",
            "8:00pm — Dinner at Nobu Downtown ($80–120/person): Robert De Niro's flagship Japanese-Peruvian restaurant. The black cod miso is the signature dish. Reserve 2–3 weeks in advance.",
          ],
          cost: "$250–350 total",
        },
        {
          day: "Day 4",
          title: "Top of the Rock at Sunset & Broadway Show",
          items: [
            "10:00am — Rockefeller Center tour ($30/person): the underground tour of 30 Rock's history, the NBC Studios, and the Art Deco architecture. Then Top of the Rock at sunset ($44 for 5–7pm slot) — the best view of the Empire State Building from any observation deck in NYC.",
            "1:00pm — Lunch at Le Bernardin ($60–80 for lunch prix-fixe, $185+ dinner tasting): Eric Ripert's legendary French seafood restaurant, one of America's consistently top-ranked restaurants. The lunch menu is significantly more affordable than dinner.",
            "3:30pm — Broadway matinee ($80–200 for good seats): TKTS booth in Times Square sells same-day tickets at 20–50% off. Shows typically at 2pm or 3pm. Check what's running — NYC consistently has 40+ shows in production.",
            "7:00pm — Dinner pre-theater or post-show in the Theater District: Carmine's (89th St) for family-style Italian ($35–45/person) or Virgil's BBQ (Times Square area, the one exception to the tourist trap rule — genuinely good BBQ at $30–40).",
            "9:30pm — Evening drinks at the Campbell Bar (inside Grand Central Terminal) or the Top of the Standard (Meatpacking District rooftop, $20–25 cocktails, glass walls with panoramic views).",
          ],
          cost: "$280–400 total",
        },
        {
          day: "Day 5",
          title: "MoMA, Chelsea Galleries & Farewell Dinner",
          items: [
            "10:00am — MoMA ($25): spend a focused 2 hours on the permanent collection highlights — Van Gogh's Starry Night (Room 503, 5th floor), Picasso's Les Demoiselles d'Avignon, the Monet Water Lilies triptych, and the Architecture and Design galleries.",
            "1:00pm — Lunch at The Modern (inside MoMA, $45–65/person): the restaurant by chef Thomas Carter in the museum's garden overlooking the Sculpture Garden. One of NYC's best lunch settings.",
            "3:00pm — Chelsea gallery walk (24th–26th St between 10th and 11th Ave): 200+ galleries in a concentrated area, almost all free. Pace Gallery, Gagosian, David Zwirner, Hauser & Wirth. The quality of art on display, for free, is extraordinary.",
            "5:30pm — High Line north end (34th St) for a final walk south through the park toward the Meatpacking District.",
            "7:30pm — Farewell dinner at Pastis ($55–75/person): the beloved Meatpacking District French brasserie, restored to its original 2003 glory. Steak frites, moules marinières, excellent wine list. The neighborhood comes alive after 8pm — the High Line entrance nearby and the adjacent streets are some of Manhattan's most energetic in the evening.",
          ],
          cost: "$200–300 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$700–2,000+/day",
      days: [
        {
          day: "Day 1",
          title: "The Plaza Check-In & Private Skyline Helicopter",
          items: [
            "Check in to The Plaza ($800–1,500/night, Fifth Ave & Central Park South) or The Standard High Line ($350–600, views of the Hudson and the High Line from every room) or The Mark Hotel ($600–1,200, Upper East Side, the closest luxury hotel to the Met).",
            "Private car transfer from JFK: Blade or Carey Limousine, $80–120 door to door. Or, if arriving from the Blade terminal in Manhattan: helicopter from JFK to the East 34th St helipad — $195/person, 8 minutes.",
            "3:00pm — Private helicopter tour of Manhattan ($200–350/person for 15 minutes, departing from FDR heliport, East 34th St): the Statue of Liberty, Central Park, the skyline, the George Washington Bridge. The only way to comprehend New York's scale in a single experience.",
            "7:00pm — Dinner at Le Bernardin ($185–250/person, tasting menu): four-star French seafood, regularly ranked in the world's top 10 restaurants. Eric Ripert's kitchen has held three Michelin stars since 2005. Reserve 6–8 weeks in advance.",
          ],
          cost: "$600–1,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Private Met Tour & Central Park Carriage",
          items: [
            "9:00am — Private guide at the Metropolitan Museum ($250–400 for a 2-hour specialist tour): the curator-level approach to the Egyptian Wing, European Masters, or the American Wing (which most tourists skip but contains the finest 18th and 19th century American painting collection in existence).",
            "12:00pm — Lunch at Majorelle (inside the Mark Hotel, $80–120/person): Jean-Georges Vongerichten's Mediterranean restaurant with an extraordinary Central Park view from the terrace.",
            "2:30pm — Central Park private carriage ride ($100/30 minutes, from the 59th St entrance): a classic and genuinely pleasurable way to see the park's highlights in comfort. The drivers double as historians.",
            "5:00pm — Personal shopping at Bergdorf Goodman (Fifth Ave): the store's personal shopping service is free — a stylist brings selections to a private suite. No obligation to buy.",
            "8:30pm — Dinner at Eleven Madison Park ($335/person, 12-course tasting menu): the plant-based menu from chef Daniel Humm, ranked among the world's 50 best restaurants. Reserve 2–3 months in advance. The Art Deco dining room in the Metropolitan Life building is among the grandest restaurant spaces in NYC.",
          ],
          cost: "$900–1,400 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Statue of Liberty Crown Access & Private Financial District Tour",
          items: [
            "7:00am — First ferry with Crown Access to the Statue of Liberty (must book 4–5 months in advance, $24 + $24 crown fee = $48): 162 steps up a spiral staircase inside the statue's arm — you look out through the crown's 25 windows with the harbor below. Only 240 people per day reach the crown; it is one of the most exclusive experiences in American tourism.",
            "11:00am — Private guide for Lower Manhattan history ($200–350 for 2 hours): the origins of New Amsterdam, the 17th century Dutch city plan that still underlies Wall Street's street grid, Alexander Hamilton's grave at Trinity Church (50 Broadway), the Fraunces Tavern (1719, where Washington said farewell to his officers — still a restaurant and museum).",
            "1:30pm — Lunch at Fraunces Tavern (54 Pearl St, $45–60/person): America's oldest continuously operating restaurant in its original building. The historic setting outperforms the food — order the colonial-era recipes.",
            "4:00pm — One World Observatory VIP experience ($125/person with dedicated floor): private summit access before public hours, a champagne reception at the top, and a guided floor-by-floor orientation of what you're seeing in every direction.",
            "8:00pm — Dinner at Carne Mare ($90–120/person): Andrew Carmellini's waterfront steakhouse at the Pier 17 complex, with a panoramic view of the Brooklyn Bridge illuminated above the East River. The dry-aged Prime strip is exceptional.",
          ],
          cost: "$700–1,000 total (excl. hotel)",
        },
        {
          day: "Day 4",
          title: "Rockefeller Center Private Access & Michelin Tasting Menu",
          items: [
            "10:00am — Private NBC Studios tour ($75/person) followed by a Top of the Rock sunrise booking (special access, $60–80): watch the city wake up from 70 floors above Midtown as the morning light hits the Empire State Building from the north.",
            "12:30pm — Lunch at The Pool (the Seagram Building, $100–150/person): the restored Four Seasons space — Philip Johnson and Mies van der Rohe's 1959 masterpiece of American modernism, with a marble pool in the center of the dining room. Power lunch in the most architecturally significant restaurant room in New York.",
            "3:00pm — Private art advisor afternoon: a Chelsea gallery walk with an art consultant ($300–500 for 2 hours) who provides context on major works and living artists. Collectors use this service; curious travelers find it transforms the gallery experience.",
            "7:00pm — Cocktails at Bar SixtyFive (Rainbow Room, 65th floor of 30 Rock, $25–35 cocktails): the highest bar in Rockefeller Center, with floor-to-ceiling windows over Midtown.",
            "9:00pm — Dinner at Masa ($750/person, omakase): Masa Takayama's minimalist counter-service Japanese restaurant in the Time Warner Center. No menu. Whatever Masa chooses. Ingredients flown daily from Japan. The most expensive restaurant in the USA — and the one with the most justification for it.",
          ],
          cost: "$1,200–2,000 total (excl. hotel)",
        },
        {
          day: "Day 5",
          title: "Farewell — MoMA & Private Harbor Sail",
          items: [
            "10:00am — MoMA private curator tour ($500 for small group, through MoMA's VIP services): the permanent collection with a staff curator, including works not on general display and behind-the-scenes access to the conservation department.",
            "1:00pm — Lunch at The Modern ($120–160/person, chef's tasting lunch): Danny Meyer's two-Michelin-star restaurant in MoMA, serving a full tasting menu at the lunch format. The Sculpture Garden view through the floor-to-ceiling windows is one of New York's most civilized dining experiences.",
            "3:00pm — Private sailing charter in New York Harbor ($500–800 for 2 hours, private for 2 people): sailing past the Statue of Liberty, under the Verrazano Bridge, and around the tip of Manhattan with the skyline as your backdrop. Several operators run from the North Cove Marina (Brookfield Place, Battery Park City).",
            "7:30pm — Farewell dinner at Daniel ($200–250/person, tasting menu): Daniel Boulud's flagship on 65th Street — grand French haute cuisine in a dining room that has been consistently ranked among the top restaurants in America for 25 years. The wine list is 1,900 labels. Reserve 4–6 weeks in advance.",
            "Late departure: private car to JFK. Consider the Blade helicopter if your flight is early enough — 8 minutes, $195/person, the most cinematic way to leave New York.",
          ],
          cost: "$900–1,500 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$45–70",
      food: "$20–35",
      transport: "$10–15",
      activities: "$15–40",
      total: "$80–130/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$120–220",
      food: "$50–90",
      transport: "$20–30",
      activities: "$40–80",
      total: "$220–380/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–1,500",
      food: "$150–400",
      transport: "$50–150",
      activities: "$150–500",
      total: "$700–2,000+/day",
    },
  ],
  mistakes: [
    {
      icon: "🍕",
      title: "Eating in Times Square",
      desc: "Every restaurant in and immediately around Times Square charges 2–3x the normal NYC price for food that's demonstrably worse. The Olive Garden in Times Square has a waiting list from tourists who don't know they're walking past dozens of superior options. Walk 3 blocks in any direction — west to 9th Ave (Hell's Kitchen) or east toward 6th Ave — and prices drop immediately. The rule: if you can see an LED billboard from your table, you're paying the tourist premium.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🗽",
      title: "Not Booking Statue of Liberty Tickets in Advance",
      desc: "The Staten Island Ferry gives free views of the statue from the water, but if you want to actually visit Liberty Island, ferry tickets (statuecruises.com) sell out 2 weeks ahead in peak season. Reserve Access (pedestal/crown) sells out months in advance — crown access can require a 4–5 month lead time. Same-day tickets are almost never available April through October. Book before you leave home.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🚇",
      title: "Not Getting a Transit Card at the Airport",
      desc: "NYC subway stations have OMNY readers (tap-to-pay with any contactless card or phone) so you technically don't need a card — but the 7-day unlimited MetroCard ($34) pays for itself after 12 rides. If you're in NYC for 5 days and riding the subway twice daily, you'll use it 10+ times — the 7-day is almost always worth it. Buy at any subway station vending machine. The AirTrain from JFK requires a separate $8.25 fee regardless of your card type.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🌆",
      title: "Skipping the Outer Boroughs",
      desc: "Brooklyn, Queens, and the Bronx together contain some of the best food, art, and neighborhoods in the entire USA. Flushing (Queens) has better Chinese and Korean food than most Asian cities. Arthur Avenue in the Bronx is more authentically Italian than Little Italy in Manhattan. Williamsburg and DUMBO in Brooklyn have more interesting art galleries per square block than Chelsea. Travelers who only do Manhattan have seen a fraction of New York.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🌅",
      title: "Going to the Empire State Building at Midday",
      desc: "The Empire State Building ($44 general, $70+ for express) has the most famous name but the worst value proposition among NYC's observation decks. At midday, the haze reduces visibility and the sun is directly overhead (flat light for photos). Go at night for the iconic illuminated skyline, or choose Top of the Rock at sunset instead — it costs less, has shorter queues, and you can see the Empire State Building itself in the frame.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🥯",
      title: "New York Bagel Culture Is Real and Important",
      desc: "New York bagels are genuinely different from everywhere else — the water, the kettling process, and the baking method produce a dense, chewy, slightly shiny result that no other city replicates. The canonical experience: Ess-a-Bagel (3rd Ave & 21st St) or Murray's Bagels (6th Ave, Greenwich Village) or Black Seed Bagels (multiple locations). A bagel with cream cheese and lox costs $10–14 and is the correct New York breakfast. Do not eat a bagel from a chain bakery.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🍕",
      title: "The Dollar Slice Is New York's Greatest Institution",
      desc: "New York pizza by the slice is a $2–4 transaction at any corner pizzeria in Midtown or the Village. Joe's Pizza (Carmine St, Greenwich Village) is the consensus gold standard — thin crust, perfect cheese pull, $3.50 per slice. Prince Street Pizza (Nolita) for the spicy square slice (Sicilian style, $6–8). Di Fara in Brooklyn ($5/slice, cash only, 1.5h subway) is pilgrimage-level — the 80-year-old Dom DeMarco still makes every pizza by hand. For a quick lunch, one slice plus a bodega drink is $5–6 total.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌃",
      title: "Best Views by Time of Day — A Definitive Ranking",
      desc: "Top of the Rock at sunset (5–7pm): best overall — clear sight lines, Empire State Building in frame, sky transitions from gold to navy while city lights appear. One World Observatory during daytime: clearest visibility, best for geography. Empire State Building at night: the classic, best light show below. Staten Island Ferry: always free, Lady Liberty close up, harbor panoramic. The High Line at dawn: the city waking up between buildings, completely free. Brooklyn Heights Promenade at golden hour: the most romantic and the most underrated.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "✈️",
      title: "Getting from the Airport to Manhattan Without Getting Ripped Off",
      desc: "JFK to Manhattan: AirTrain ($8.25) to Jamaica station, then E/J/Z subway ($2.90) to Midtown = $11.15 total, 60–75 minutes. Taxi flat rate from JFK is $70 (regulated), plus tolls and tip ($85–95 final). Lyft/Uber surge to $90–150+ at peak times. LaGuardia (LGA): no AirTrain — take M60 bus ($2.90) to 125th St subway, or cab ($35–45 flat, no toll). Newark (EWR): NJ Transit train + AirTrain ($17.50), or taxi ($60–80 depending on traffic). The $10 subway ride is always faster than any road option during rush hour.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "💰",
      title: "Free New York Is Genuinely World-Class",
      desc: "The Staten Island Ferry (free, runs 24/7, views of the Statue of Liberty and Manhattan harbor), Central Park (843 acres, free forever), the High Line (free, 6am–1am), Brooklyn Bridge walk (free), the 9/11 Memorial plaza (free — museum costs $30), and multiple free museums: the American Museum of Natural History (pay-what-you-wish), the Met (pay-what-you-wish), Museum of Arts and Design (free Thursday evenings 6–9pm), MoMA (free every Friday evening 5:30–9pm). A $0 day in NYC can be one of the best travel days of your life.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  faqs: [
    {
      q: "Is New York City safe for tourists?",
      a: "NYC is substantially safer than its reputation suggests — crime statistics have improved dramatically since the 1990s. The main practical risks for tourists are pickpockets in crowded areas (Times Square, the subway at peak hours) and petty theft. Avoid leaving bags unattended on subway seats. At night, the subway is busier and louder than threatening — use the middle of the train near the conductor car after midnight. Certain subway stations (some in the Bronx, parts of Brooklyn) are statistically higher risk; tourist areas (Midtown, Lower Manhattan, the Village, DUMBO) have low crime rates relative to any global megacity.",
    },
    {
      q: "What is the best area to stay in New York City?",
      a: "Midtown (34th–59th St): closest to Times Square, Rockefeller Center, and Central Park. Convenient but expensive and touristy. Lower Manhattan / Financial District: quieter in evenings, excellent access to the 9/11 Memorial, Statue of Liberty ferry, and the subway hub at Fulton St. Chelsea / West Village: the best neighborhood base for first-timers — good transport, excellent restaurants, the High Line nearby, and walkable to both downtown and midtown. Williamsburg (Brooklyn): trendy, great food scene, 15 minutes by L train to Manhattan. For first visits, Midtown East or Chelsea gives the best combination of access and authenticity.",
    },
    {
      q: "How many days do I actually need in New York City?",
      a: "5 days is the ideal first visit — it covers Manhattan's major landmarks plus at least one full Brooklyn day without rushing. 3 days forces very hard choices (either the Statue of Liberty or Brooklyn, not both). 7+ days opens up Queens (Flushing Meadows, Astoria), the Bronx (Yankee Stadium, the Bronx Zoo, Arthur Ave), deeper Brooklyn neighborhoods (Park Slope, Carroll Gardens, Red Hook), and day trips to the Catskills, the Hamptons (summer), or Philadelphia (90 minutes by Amtrak). New York genuinely rewards longer stays — the city doesn't repeat itself.",
    },
    {
      q: "When is the best time to visit New York City?",
      a: "April–June and September–November are optimal. Spring brings the cherry blossoms in Central Park (late March to mid-April), comfortable temperatures (12–22°C), and the city in its most livable state. October is arguably the best single month — mild temperatures, spectacular fall foliage in Central Park and the outer boroughs, the NYC Marathon (first Sunday in November), and manageable crowds. Summer (June–August) is hot (30–38°C with humidity), crowded, and expensive — but the free outdoor events (SummerStage in Central Park, free Shakespeare in the Park, outdoor film screenings) are excellent. December has holiday magic (the Rockefeller Center tree, the Macy's windows) but cold and crowds at Christmas markets.",
    },
    {
      q: "How do I get from JFK Airport to Manhattan?",
      a: "The cheapest option: AirTrain from JFK to Jamaica station ($8.25, using any MetroCard or OMNY tap), then the E/J/Z subway to Midtown ($2.90) = $11.15 total. Travel time: 60–75 minutes depending on destination. The AirTrain also runs to Howard Beach station for the A train — slightly shorter journey to lower Manhattan. Taxi (yellow cab): flat rate of $70 from JFK to anywhere in Manhattan (set by the TLC), plus $8 tolls and a 15–20% tip = $85–95 final total. Uber/Lyft: $45–90+ depending on surge pricing. LIRR (Long Island Rail Road) from the Jamaica hub is a faster, $12–15 option to Penn Station if you're headed to Midtown West.",
    },
    {
      q: "What is tipping culture like in New York City?",
      a: "Tipping in NYC is not optional — it's the primary compensation system for service workers whose base pay is set with the expectation of tips. At restaurants: 20% is the standard minimum, 25% for good service. The easiest calculation: double the NYC sales tax (8.875%) and you get ~18%. At bars: $1–2 per drink, more for elaborate cocktails. Taxis: 15–20%. Hotel porters: $2–3 per bag. Hotel housekeeping: $3–5/night, left daily. Uber/Lyft: tip through the app, 15–20%. Refusing to tip at a sit-down restaurant is considered extremely rude — the server was counting on that income.",
    },
    {
      q: "Is New York City expensive? What can I realistically do on a budget?",
      a: "NYC is expensive by global standards but has extraordinary free and cheap options. A budget traveler can have a genuinely rich experience: the Staten Island Ferry, Central Park, the High Line, Brooklyn Bridge walk, and multiple pay-what-you-wish museums cost next to nothing. Food budget: $2–4 for a slice of pizza, $10 for a deli sandwich, $14 for a bowl of ramen. The main costs are accommodation ($45–80 for a hostel dorm, $120+ for a private room) and paid attractions ($24–46 for major observation decks and the Statue of Liberty). A realistic good-time budget for NYC is $80–130/day if you're disciplined about where you eat and stay.",
    },
  ],
  combineWith: ["las-vegas-4-days", "boston-3-days", "washington-dc-3-days"],
  relatedSlugs: ["las-vegas-4-days", "tokyo-5-days", "london-4-days", "paris-5-days"],
  galleryQuery: "new york city manhattan central park brooklyn bridge skyline",
};

export const metadata: Metadata = {
  title: "New York City in 5 Days: Complete 2026 Itinerary (What to Do, See & Spend)",
  description: "5 complete New York City plans — budget to luxury — with Statue of Liberty booking secrets, NYC subway hacks, the best pizza and bagels, and real dollar costs for every activity.",
  keywords: [
    "new york city itinerary 5 days",
    "nyc travel guide 2026",
    "new york city budget travel",
    "statue of liberty tickets",
    "things to do new york",
    "new york city trip planning",
    "nyc itinerary first time",
  ],
  openGraph: {
    title: "New York City in 5 Days: Budget to Luxury 2026 Itinerary",
    description: "Statue of Liberty booking secrets, subway hacks, the best pizza, and real dollar costs for every NYC budget.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "New York City Manhattan Skyline Times Square USA",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "New York City in 5 Days (2026)",
    description: "5 plans, Statue of Liberty secrets, subway hacks, and real dollar costs.",
  },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/new-york-5-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "New York City in 5 Days: Complete 2026 Itinerary (What to Do, See & Spend)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
      description:
        "5 complete New York City plans with Statue of Liberty booking secrets, subway hacks, the best pizza and bagels, and real dollar costs for every budget.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "New York City 5 Days",
          item: "https://www.incredibleitinerary.com/blog/new-york-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "New York City, USA",
      description:
        "The most iconic city in the world — home to the Statue of Liberty, Central Park, the Brooklyn Bridge, Times Square, and an unmatched cultural and culinary landscape across five distinct boroughs.",
      touristType: ["Cultural tourists", "Food lovers", "Architecture enthusiasts", "History buffs", "City explorers"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 40.7128,
        longitude: -74.006,
      },
    },
  ],
};

export default function NewYorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
