import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Puerto Rico",
  country: "Puerto Rico (US Territory)",
  countryFlag: "🇵🇷",
  slug: "puerto-rico-5-days",
  heroQuery: "old san juan puerto rico colorful streets el morro fort",
  heroAlt: "Old San Juan Puerto Rico with colorful colonial buildings and El Morro fortress overlooking the Caribbean",
  category: "North America",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro:
    "Puerto Rico punches far above its weight as a Caribbean destination — it's the only island where you can walk 500-year-old Spanish cobblestone streets in the morning, hike a US National Rainforest at noon, kayak through a bioluminescent bay at night, and never need a passport if you're American. El Morro fortress has defended the island since 1539. Mosquito Bay on Vieques is the world's brightest bioluminescent bay. El Yunque is the only tropical rainforest in the US National Forest system. And the mofongo — mashed plantains with garlic and your choice of protein — is one of the Caribbean's great culinary achievements. Five days barely scratches the surface.",
  stats: { duration: "5 Days", budgetFrom: "$75", bestMonths: "Dec–Apr", airport: "SJU" },
  toc: [
    { id: "visa", emoji: "🛂", label: "Visa & Entry" },
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Local Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
    { id: "day1", emoji: "📅", label: "Day 1 — Old San Juan" },
    { id: "day2", emoji: "📅", label: "Day 2 — El Yunque Rainforest" },
    { id: "day3", emoji: "📅", label: "Day 3 — Vieques Bioluminescence" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Indian Passport — US Visa Required",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Requirement", "B1/B2 Tourist Visa (Puerto Rico is US territory)"],
        ["Processing", "6–12 weeks (schedule early)"],
        ["Fee", "$185 (non-refundable)"],
        ["Validity", "Up to 10 years, 6 months per entry"],
        ["Apply at", "US Embassy or VFS Global India"],
        ["Documents", "Bank statements, employment letter, return ticket, hotel bookings"],
        ["Notes", "Same visa as mainland USA. Indian passport holders cannot use ESTA. Apply 3 months in advance."],
      ],
    },
    {
      flag: "🇺🇸",
      title: "US Citizens — No Passport or Visa Needed",
      bg: "bg-green-50",
      border: "border-green-200",
      titleColor: "text-green-800",
      items: [
        ["Requirement", "No passport required (US territory)"],
        ["Processing", "No visa process needed"],
        ["Fee", "Free"],
        ["Currency", "US Dollar (USD) — no exchange needed"],
        ["Non-US Visitors", "Same entry requirements as mainland USA"],
        ["ESTA Eligible", "UK, EU, AU, CA citizens use ESTA ($21) as for mainland US"],
        ["Notes", "Puerto Rico uses the same immigration rules as the 50 US states. US citizens only need a driver's license."],
      ],
    },
  ],
  plans: [
    {
      label: "💰 Budget",
      sub: "$75–110/day",
      days: [
        {
          day: "Day 1",
          title: "Old San Juan Cobblestones & El Morro",
          items: [
            "09:00 — Walk from your guesthouse in Old San Juan along Calle Fortaleza — the cobblestones are made from blue-grey iron slag ballast brought from Spain in the 1500s; the streets are completely flat and walkable",
            "10:00 — Castillo San Felipe del Morro (El Morro): $10 admission covers both El Morro and Castillo San Cristóbal — the National Park passport is worth getting stamped here; the grass esplanade facing the bay has the best kite-flying in the Caribbean",
            "13:00 — Lunch at La Bombonera on Calle San Francisco — open since 1902, this is where jíbaro culture meets café culture; the mallorca sandwich (sweet bread, ham, egg, powdered sugar) costs $6–8 and has been on the menu for generations",
            "15:00 — Walk the Old San Juan city walls: the 16th-century fortification walls are free to walk and frame views of the Atlantic on one side and the harbour on the other; the La Perla neighbourhood visible below is photogenic from the walls",
            "18:00 — Happy hour at La Factoría on Calle San Sebastian — often called one of the best bars in the world; cocktails from $9 during happy hour; the passionfruit rum punch is the local entry drink",
            "20:00 — Dinner at Barrachina in Old San Juan ($15–20/pp): the restaurant claims to have invented the piña colada in 1963; the mofongo with pulled pork runs $14 and the cocktails are generous",
          ],
          cost: "$50–70 (El Morro, meals, drinks, transport)",
        },
        {
          day: "Day 2",
          title: "El Yunque National Rainforest",
          items: [
            "07:30 — Drive or take a publico (shared taxi, $4–6) east to El Yunque National Forest — arrive before 9am to beat the afternoon clouds; the forest receives 100 inches of rain annually so mornings are clearest",
            "08:30 — La Mina Trail (1.9 miles round trip, free with $2 reservation fee) leads to La Mina waterfall — the easiest and most popular trail; the 35-foot waterfall has a swimming hole cold enough to be refreshing in the Caribbean heat",
            "11:00 — Yokahu Tower: free to climb, the 1963 stone observation tower rises above the forest canopy with 360-degree views; look for the endangered Puerto Rican parrot — about 500 remain wild and El Yunque is their primary habitat",
            "13:00 — Roadside lechonera lunch on Route 184 near Cayey ($10–14): these roadside pork roasting stalls are a Puerto Rican institution; a plate of lechón (roasted whole pig), rice, and beans with a cold Medalla beer is $10–12",
            "17:00 — Return to San Juan and walk Condado beach boardwalk for sunset — the free public beach is lined with palm trees and catches the Atlantic breeze; fresh piña colada from a beach vendor $5",
          ],
          cost: "$40–60 (transport, entry, meals)",
        },
        {
          day: "Day 3",
          title: "Vieques Bioluminescent Bay",
          items: [
            "08:00 — Ferry from Ceiba to Vieques ($2 each way, reservations required at prtc.pr) — the 30-minute ferry is the cheapest way to reach the island; reserve 2 weeks ahead as ferries sell out",
            "10:00 — Sun Bay (Balneario Sun Bay): a free 1-mile-long crescent beach on Vieques with water so clear it's almost invisible; rent a bike from the ferry terminal for $10 to reach the more remote Red and Blue beaches",
            "18:00 — Mosquito Bay bioluminescent kayak tour ($45–55, 2 hours after dark): the bay produces 720,000 dinoflagellates per gallon of water — the highest concentration on earth; each paddle stroke glows electric blue; book Bio Bay Tours or Island Adventures",
            "21:30 — Late dinner in Isabel Segunda on Vieques ($12–18) — small restaurants along the main street serve fresh catch; the night fishing boats return by 8pm and the restaurants buy directly",
          ],
          cost: "$70–90 (ferry, bike, bio bay tour, meals)",
        },
        {
          day: "Day 4",
          title: "Rincón Surfing & West Coast",
          items: [
            "07:00 — Drive west to Rincón (2.5 hours): the World Surfing Championships have been held here three times; even beginners can take a 2-hour surf lesson on the gentler beaches like Domes or Sandy Beach for $50–60",
            "13:00 — Lunch at Tamboo Seaside Bar & Grill ($15–18/pp) — the famous roadside spot above Rincón's main break; the grilled mahi-mahi sandwich and Medalla draft beer are the order; watch surfers from the terrace",
            "16:00 — Sunset at El Faro de Rincón lighthouse: the 1892 lighthouse grounds are free to visit and face due west — one of the best sunsets in Puerto Rico with the Dominican Republic visible on very clear days",
            "19:00 — Drive back to San Juan or stay a night in Rincón ($50–80 at a guesthouse) — Rincón's beach town atmosphere is entirely different from San Juan and worth experiencing at night",
          ],
          cost: "$80–100 (surf lesson, transport, meals, optional night)",
        },
        {
          day: "Day 5",
          title: "Piñones Kiosks & Old San Juan Farewell",
          items: [
            "09:00 — Piñones boardwalk east of San Juan airport: the 12-mile coastal path passes through mangrove forests and arrives at the Piñones kiosk strip — alcapurrias (fried plantain fritters stuffed with crab or beef) cost $2 each and are made fresh",
            "11:00 — Return to Old San Juan for final wandering: the Catedral de San Juan Bautista (free, holds Ponce de León's tomb), the colourful Casa Blanca museum ($3), and the Paseo de la Princesa esplanade along the harbour",
            "14:00 — Farewell lunch at Café Manolin on Calle San Justo ($12–16) — a classic Puerto Rican diner that has survived since 1945; the arroz con pollo (chicken with rice) and fried sweet plantains (maduros) are the essential comfort food order",
            "16:00 — Short Uber to Luis Muñoz Marín International Airport (SJU) — allow 30 minutes from Old San Juan; the airport is compact and security is fast outside peak holiday periods",
          ],
          cost: "$40–55 (transport, food, museums)",
        },
      ],
    },
    {
      label: "✨ Mid-Range",
      sub: "$200–320/day",
      days: [
        {
          day: "Day 1",
          title: "Old San Juan Deep Dive & Condado",
          items: [
            "10:00 — Check into a boutique hotel in Old San Juan ($180–250/night) — El Convento Hotel (a converted 17th-century convent), La Terraza de San Juan, or Hotel Milano all offer historic character at mid-range prices",
            "11:00 — El Morro and Castillo San Cristóbal full morning with audio guide ($10 entry) — the combined fortifications took 250 years to complete and defended Puerto Rico through British and Dutch invasion attempts",
            "14:00 — Lunch at Marmalade Restaurant ($35–45/pp) — one of Old San Juan's most respected farm-to-table kitchens; the tuna carpaccio with local citrus and the slow-roasted suckling pig are consistently excellent",
            "17:00 — Paseo de la Princesa sunset walk along the harbour then cocktails at the Bacardí cocktail experience at nearby La Casa del Bacardí ($12 per cocktail, premium aged rums)",
            "20:00 — Dinner at El Jibarito ($20–28/pp) — the beloved local restaurant famous for traditional Puerto Rican cooking; the bistec encebollado (steak with onions) and the mofongo con camarones have been made the same way since 1970",
          ],
          cost: "$220–280 (hotel, meals, cocktails, entry fees)",
        },
        {
          day: "Day 2",
          title: "El Yunque Private Tour & Luquillo Beach",
          items: [
            "08:00 — Private El Yunque guided tour ($80–100 per person, small group of 4–6): experienced naturalists lead you to spots off the main tourist trail including secret waterfalls and the rare orchid preserve",
            "12:30 — Luquillo Beach kiosks for lunch ($15–20): 60 food kiosks line the beach road serving fresh alcapurrias, bacalaítos (fried cod fritters), and empanadillas — a leisurely Caribbean lunch; Luquillo is one of Puerto Rico's most beautiful public beaches",
            "15:00 — Snorkeling at Seven Seas Beach in Fajardo ($15 for gear rental) — clear, calm, and reef-fringed with parrotfish, angelfish, and the occasional turtle",
            "19:00 — Return to San Juan for dinner at La Jaquita Baya in Santurce ($25–35/pp) — the Santurce arts district's best restaurant, housed in a converted shipping container complex with local artwork covering every wall",
          ],
          cost: "$200–260 (guided tour, meals, snorkel, transport)",
        },
        {
          day: "Day 3",
          title: "Vieques VIP Bio Bay & Beach Hopping",
          items: [
            "07:00 — Small charter plane from SJU to Vieques ($80–100 each way, Air Flamenco or Vieques Air Link): 10-minute flight versus 2-hour ferry; book a week ahead — the tiny planes and island airstrip are part of the adventure",
            "09:00 — Secluded beach hopping on Vieques by rental jeep ($70/day): Red Beach, Blue Beach, and Secret Beach are all accessible only by 4WD; bring snorkel gear as the offshore coral is excellent",
            "14:00 — Lunch at El Quenepo in Isabel Segunda ($25–35/pp) — Vieques's best restaurant uses local catch; the whole fried snapper with tostones and the mango mojito are the signature dishes",
            "20:00 — Private Bio Bay kayak or electric boat tour ($85–100/person) — the electric boats are silent and allow you to lie down and dip your hands in the glowing water; far more atmospheric than the standard kayak groups",
          ],
          cost: "$280–380 (charter flight, jeep, meals, bio bay)",
        },
        {
          day: "Day 4",
          title: "Rincón Surf & Hacienda Coffee Tour",
          items: [
            "08:00 — Drive through the mountain coffee region (La Ruta del Café) via Jayuya and Maricao — the cloud forest coffee farms here produce beans that once supplied the Vatican and the Spanish Royal Family",
            "10:30 — Hacienda San Pedro or Café Hacienda Buena Vista tour ($20–30/person): learn how Puerto Rican arabica coffee is grown, harvested, and roasted; the tour ends with a tasting of several different single-origin roasts",
            "13:00 — Arrive Rincón for lunch at Banana Dang restaurant ($20–25/pp) — popular with the surf community for fresh fish and creative cocktails; the fish tacos with mango salsa are legendary",
            "15:30 — Intermediate surf lesson or paddleboard session at Domes Beach ($65 with instructor, 2 hours)",
            "19:00 — Sunset drinks at Tamboo then dinner at Rincón Beer Company ($20–28/pp) — craft beers brewed on-site pair with Caribbean-inflected pub food",
          ],
          cost: "$200–260 (transport, coffee tour, surf, meals)",
        },
        {
          day: "Day 5",
          title: "Santurce Murals & Farewell Piña Colada",
          items: [
            "09:00 — Santurce art district self-guided mural tour (free) — the murals in the Calle Loíza and La Placita areas include works by internationally recognised Puerto Rican artists; the neighbourhood rebirth post-Hurricane Maria is a story worth understanding",
            "11:00 — Mercado de Santurce La Placita: the weekend market has fresh tropical fruits (tamarind, quenepas, guanabana), fresh-pressed juices, and local artisan crafts; a full breakfast from market stalls costs $8–12",
            "13:00 — Final lunch at Sobre las Olas in Condado ($35–45/pp) — the seafood restaurant literally built over the ocean; the tostones with garlic shrimp and the whole grilled catch of the day are worth the splurge",
            "15:30 — Original piña colada at the Caribe Hilton bar ($18) — the cocktail was invented here by bartender Ramón 'Monchito' Marrero in August 1954; the historic bar is a worthy farewell toast",
          ],
          cost: "$150–200 (meals, market, transport, airport)",
        },
      ],
    },
    {
      label: "💎 Luxury",
      sub: "$500–900/day",
      days: [
        {
          day: "Day 1",
          title: "Arrival at El San Juan & Private Old Town Tour",
          items: [
            "12:00 — Check into El San Juan Hotel in Isla Verde ($350–600/night) or Condado Vanderbilt Hotel ($400–700/night) — both are legendary Puerto Rican luxury properties with direct beach access and casino",
            "15:00 — Private walking tour of Old San Juan ($150 for 3 hours, licensed historian guide) — exclusive access to the Governor's Mansion courtyard (La Fortaleza), private roof access at El Convento, and the archives of the Cathedral",
            "19:00 — Pre-dinner cocktails at the rooftop bar of La Factoria (private event space available) or at the Caribe Hilton terrace watching the Condado lagoon at sunset",
            "21:00 — Dinner at Marmalade Restaurant Chef's Table ($120–150/pp with wine pairing) — the Chef's Table experience is the most refined dining in Puerto Rico; José Santaella's seasonal tasting menu changes with each Atlantic fishing week",
          ],
          cost: "$700–950 (hotel, private tour, dinner, drinks)",
        },
        {
          day: "Day 2",
          title: "Private El Yunque & Bioluminescent Kayak",
          items: [
            "07:30 — Private El Yunque sunrise hike with naturalist guide ($200/person, 4 hours, departs before park opens to public): exclusive dawn access reveals coquí frogs at their most vocal; the tree frog chorus before sunrise is one of Puerto Rico's iconic sounds",
            "12:30 — Lunch at Wilo Benet's Pikayo at Museum of Art of Puerto Rico ($55–70/pp): Puerto Rico's most celebrated chef; the modern Puerto Rican tasting menu using indigenous ingredients is a culinary landmark",
            "16:00 — Private bioluminescent bay experience on Vieques via charter flight ($250 round trip) and private boat tour ($200/person, electric boat, maximum 4 guests): the most exclusive way to experience Mosquito Bay",
            "22:00 — Late-night return to San Juan; nightcap at the historic Rum Bar at El San Juan Hotel — over 1,000 rum expressions, the largest rum selection in the world",
          ],
          cost: "$900–1,200 (hotel, private guide, charter, dinner)",
        },
        {
          day: "Day 3",
          title: "Vieques Secluded Beaches & Culebra",
          items: [
            "08:00 — Charter flight to Culebra ($120 round trip) — the smaller sister island is less visited than Vieques; Flamenco Beach is consistently rated among the top 10 beaches in the world and is rarely crowded on weekday mornings",
            "10:00 — Private catamaran day charter around Culebra ($400–600 for the boat, accommodates 8 guests): snorkel at Luis Peña Marine Reserve, anchor at Tamarindo Beach, and the crew serves freshly grilled lobster and rum punch on board",
            "16:00 — Return to San Juan via charter; check into the suite at Condado Vanderbilt for sunset cocktails from the penthouse terrace",
            "20:00 — Dinner at 1919 Restaurant at Condado Vanderbilt ($100–150/pp with wine): the Vanderbilt's fine dining restaurant occupies a restored 1919 ballroom; the Puerto Rican wagyu beef and the Caribbean lobster thermidor are the signature courses",
          ],
          cost: "$800–1,100 (charter flights, catamaran, hotel, dinner)",
        },
        {
          day: "Day 4",
          title: "Mountain Coffee Estate & Ponce",
          items: [
            "09:00 — Private hacienda tour and coffee breakfast at a mountain estate in Maricao ($200/person including breakfast): some haciendas offer exclusive morning experiences to luxury guests with direct farm access, cupping sessions, and breakfast made from estate-grown produce",
            "12:30 — Drive to Ponce (Puerto Rico's second city, 1.5 hours south): the Museo de Arte de Ponce ($12 admission) holds one of the finest pre-Raphaelite art collections in the Western Hemisphere — completely unexpected in a Caribbean city",
            "15:00 — Ponce's Plaza Las Delicias: the black-and-red Parque de Bombas fire station is one of the most photographed buildings in Puerto Rico; the plaza fountain and the nearby Cathedral are free to visit",
            "19:00 — Return to San Juan for final dinner at Santaella restaurant in Santurce ($70–90/pp): Chef José Santaella's flagship combines Puerto Rican grandmother cooking with French classical technique in a warmly converted warehouse",
          ],
          cost: "$600–800 (hacienda tour, transport, museum, dinner)",
        },
        {
          day: "Day 5",
          title: "Spa Morning & Farewell Cocktail Ceremony",
          items: [
            "08:00 — Spa morning at the Condado Vanderbilt Spa ($300 for 2-hour oceanfront treatment): the signature Puerto Rican coffee scrub and the salt cave relaxation room are exclusive to this property",
            "11:00 — Private rum masterclass at Hacienda Santa Ana (arrange through concierge, $150/person): learn Puerto Rico's official national drink from a fifth-generation rum master; compare 12 aged expressions including the 23-year Single Cask reserve",
            "14:00 — Farewell lunch at Acacia Cocina Caribeña ($50–65/pp) — the rooftop ocean-view restaurant in Condado prepares a modern Caribbean tasting menu using 40+ local ingredients per dish",
            "16:30 — Private car to Luis Muñoz Marín International Airport ($60–80 via concierge car service) for departure",
          ],
          cost: "$700–900 (spa, rum class, lunch, airport car)",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "$40–70 (guesthouse in Old San Juan or Condado)",
      food: "$20–30 (kiosks, taco shops, lechoneras)",
      transport: "$8–15 (publicos, Uber, ferry $2)",
      activities: "$15–30 (El Morro, bio bay tour)",
      total: "$75–115/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "$150–250 (boutique hotel in Old San Juan)",
      food: "$60–90 (restaurants + craft cocktails)",
      transport: "$25–50 (rental car, ferry, charter)",
      activities: "$60–100 (guided tours, snorkel, surf)",
      total: "$200–320/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "$350–700 (Condado Vanderbilt or El San Juan)",
      food: "$150–250 (tasting menus + rum bar)",
      transport: "$100–250 (charter flights, private car)",
      activities: "$200–400 (private tours, catamaran)",
      total: "$500–900+/day",
    },
    {
      tier: "🎒 Backpacker",
      accommodation: "$25–40 (hostel dorm, San Juan or Rincón)",
      food: "$12–20 (kiosks, alcapurrias, rice & beans)",
      transport: "$5–10 (publicos, ferry $2 to Vieques)",
      activities: "$10–20 (El Morro $10, free beaches)",
      total: "$50–80/day",
    },
    {
      tier: "🏖️ Beach & Adventure",
      accommodation: "$100–200 (Vieques guesthouse or Rincón surf hostel)",
      food: "$30–50 (local spots, beach kiosks)",
      transport: "$70–120 (rental car + charter flight)",
      activities: "$80–150 (bio bay, surf lesson, kayak)",
      total: "$180–280/day",
    },
  ],
  mistakes: [
    {
      icon: "⛈️",
      title: "Visiting during hurricane season without travel insurance",
      desc: "Puerto Rico's hurricane season runs June through November with peak risk in August and September. Hurricane Maria in 2017 caused catastrophic damage. If visiting May–November, comprehensive travel insurance with trip cancellation is essential. December through April is the safe, dry, and most popular season.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🚤",
      title: "Not booking the Vieques ferry in advance",
      desc: "The Ceiba-to-Vieques ferry costs only $2 but is the only affordable link to the island and sells out weeks ahead during peak season (Dec–Apr) and holiday weekends. Book at prtc.pr at least 2 weeks ahead. The alternative — a small charter plane ($80–100) — is actually a better experience but costs 40x more.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌙",
      title: "Missing the bioluminescent bay on a full moon",
      desc: "Mosquito Bay's bioluminescence is caused by microscopic organisms that glow when disturbed. The phenomenon is invisible or very dim on nights around the full moon because ambient moonlight overwhelms the blue glow. Always check the lunar calendar and book your bio bay tour for new moon nights — the experience is literally 10x more impressive.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🍽️",
      title: "Eating only at tourist restaurants in Condado",
      desc: "Puerto Rican cuisine is one of the Caribbean's most developed food cultures — mofongo, lechón, tostones, pasteles, and sancocho all have specific regional variations. The best mofongo is in La Placita in Santurce or in mountain towns like Cayey. Paying $25 for mofongo in Condado when the $14 version in Santurce is superior is the tourist trap.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🌿",
      title: "Not exploring beyond San Juan and the north coast",
      desc: "Most tourists never leave the San Juan–El Yunque–Luquillo triangle, missing the southwest coast's phosphorescent Laguna Grande, the mountains of the Central Cordillera, and Ponce's extraordinary museums and Spanish Colonial architecture. Rent a car for at least one day to drive PR-52 south over the mountains to Ponce.",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🎫",
      title: "Rent a car for at least 2 days of the 5",
      desc: "Puerto Rico's public transport (publicos) covers major towns but is unreliable for El Yunque, Rincón, Vieques ferry terminal in Ceiba, and the coffee mountains. A rental car ($35–50/day at SJU) transforms the trip. The mountain roads are well-maintained and the drives through the Central Cordillera are genuinely beautiful. Book tours at https://www.getyourguide.com/s/?q=Puerto+Rico&partner_id=PSZA5UI",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌊",
      title: "Book El Yunque entry in advance — timed entry required",
      desc: "El Yunque National Forest switched to a mandatory timed-entry reservation system in 2021. The fee is $2 and reservations open 60 days ahead at recreation.gov. Without a reservation you will be turned away at the gate. Morning slots (7–9am) are best for clear skies and wildlife — the forest is often in cloud by 1pm.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🍹",
      title: "Puerto Rico produces 70% of all rum sold in the United States",
      desc: "The island has been producing rum since the 1500s and houses Bacardí's largest rum distillery (free tours, visit the free museum in Cataño). Don Q, Serralles, and Ron del Barrilito are local labels that don't export widely and cost $12–20 a bottle — take rum home rather than paying airport duty-free prices for the same bottles.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🏖️",
      title: "The best beaches are not in San Juan",
      desc: "Condado and Isla Verde beaches are convenient but crowded and not Puerto Rico's finest. Flamenco Beach on Culebra, Playa Sucia near Cabo Rojo, and Bahía Honda near Rincón are dramatically more beautiful. Rent a car, get up early, and drive to the southwest or take a charter flight to Culebra for the genuinely pristine Caribbean beaches.",
      color: "bg-teal-50 border-teal-200",
    },
  ],
  faqs: [
    {
      q: "Do US citizens need a passport to visit Puerto Rico?",
      a: "No — Puerto Rico is a US territory and US citizens only need a valid government-issued ID (driver's license). No customs, no immigration, no currency exchange. However, non-US citizens follow standard US entry rules — UK, EU, AU, and CA citizens use ESTA ($21), and Indian passport holders require a B1/B2 US visa.",
    },
    {
      q: "Is Puerto Rico safe for tourists?",
      a: "The tourist areas of Old San Juan, Condado, Isla Verde, La Placita (Santurce), and Luquillo are very safe and heavily visited. Vieques and Culebra are quiet and safe. Exercise standard big-city caution in the Puerta de Tierra and certain San Juan residential neighborhoods. The island rebuilt extensively after Hurricane Maria (2017) and tourist infrastructure is fully restored.",
    },
    {
      q: "What is the best time to visit Puerto Rico?",
      a: "December through April is the dry season with temperatures 75–85°F, calm seas, and minimal rain. This is also peak tourist season with higher prices. May and November are excellent shoulder months with lower prices, good weather, and fewer crowds. Avoid August and September which are the most active hurricane months. El Yunque receives rain year-round but mornings are usually clear even in summer.",
    },
    {
      q: "How far in advance should I book the bioluminescent bay tour?",
      a: "Book 2–4 weeks ahead during peak season (December–April) and on new moon weekends when demand is highest. The most reputable operators on Vieques — Bio Bay Tours and Island Adventures — fill up quickly. Always check the lunar calendar before booking: tours within 5 days of the full moon are significantly less impressive as moonlight dilutes the bioluminescence.",
    },
  ],
  combineWith: ["miami-4-days", "jamaica-5-days", "barbados-5-days"],
  relatedSlugs: ["miami-4-days", "jamaica-5-days", "havana-4-days", "los-angeles-5-days"],
  galleryQuery: "puerto rico old san juan caribbean beach el yunque rainforest",
};

export const metadata: Metadata = {
  title: "Puerto Rico in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
  description:
    "The perfect 5-day Puerto Rico itinerary — Old San Juan cobblestones, El Morro fortress, bioluminescent Mosquito Bay, El Yunque rainforest, Rincón surfing, mofongo and piña coladas. Budget $75/day to luxury resorts.",
  keywords: [
    "Puerto Rico itinerary",
    "Puerto Rico 5 days",
    "Puerto Rico travel guide 2026",
    "Old San Juan",
    "El Morro fortress",
    "Mosquito Bay bioluminescent",
    "El Yunque rainforest",
    "Rincón surfing",
    "Puerto Rico visa Indian passport",
    "mofongo piña colada",
  ],
  openGraph: {
    title: "Puerto Rico in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
    description:
      "Old San Juan, El Morro, glowing Mosquito Bay, El Yunque rainforest, Rincón waves, and the world's best mofongo — Puerto Rico in 5 days from $75/day.",
    type: "article",
    url: "https://www.incredibleitinerary.com/blog/puerto-rico-5-days",
  },
  twitter: {
    card: "summary_large_image",
    title: "Puerto Rico in 5 Days: Complete 2026 Itinerary",
    description:
      "The complete Puerto Rico 5-day guide — Old San Juan, bioluminescent bay, El Yunque, Rincón, mofongo. Budget to luxury.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/puerto-rico-5-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Puerto Rico in 5 Days: Complete 2026 Itinerary (Budget to Luxury)",
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
          name: "Puerto Rico in 5 Days",
          item: "https://www.incredibleitinerary.com/blog/puerto-rico-5-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Puerto Rico",
      description:
        "Puerto Rico — 500-year-old Spanish cobblestones, El Morro fortress, the world's brightest bioluminescent bay, El Yunque rainforest, Caribbean beaches, and the birthplace of the piña colada.",
      geo: { "@type": "GeoCoordinates", latitude: 18.2208, longitude: -66.5901 },
    },
  ],
};

export default function PuertoRicoPage() {
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
