import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Malaysia",
  country: "Malaysia",
  countryFlag: "🇲🇾",
  slug: "malaysia-7-days",
  heroQuery: "kuala lumpur petronas towers malaysia penang street food",
  heroAlt: "Petronas Twin Towers illuminated at night in Kuala Lumpur with Penang street food hawker stalls",
  category: "Southeast Asia",
  date: "April 6, 2026",
  readTime: "14 min read",
  intro: "Malaysia is the most underrated country in Southeast Asia for Indian travellers. Kuala Lumpur has the world's most photogenic skyscrapers, food that rivals anything in Asia, and an Indian diaspora so large you'll find Tamil signboards and banana-leaf rice on every corner. Penang's UNESCO-listed George Town is a living street-food museum. Langkawi has beaches with no crowds and duty-free alcohol. Best of all: Indians get 30 days visa-free. AirAsia flies direct from Chennai, Kolkata, Kochi, and Delhi. And RM 1 costs roughly ₹18 — making it one of the most affordable quality destinations you can visit.",
  stats: { duration: "7 Days", budgetFrom: "₹3,500", bestMonths: "Mar–Oct", airport: "KUL (Kuala Lumpur International)" },
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
      title: "Indian Passport Holders — Visa-Free Entry",
      bg: "bg-green-50", border: "border-green-200", titleColor: "text-green-800",
      items: [
        ["Visa-Free Stay", "Indians receive a 30-day visa-free entry to Malaysia as of 2024. No prior application needed — simply arrive at KL International Airport, show your passport and return ticket, and immigration stamps you in. This applies to tourism visits."],
        ["eNTRI (Previously Required)", "Malaysia previously required Indians to apply for the eNTRI (Electronic Travel Registration and Information) via INIS online at RM 14 (≈₹250). This has been replaced by full visa exemption — no eNTRI needed as of 2024. Verify the current status on the Malaysia Immigration website (imi.gov.my) before travel as policies can change."],
        ["What to Carry", "Valid passport (6 months validity), confirmed return ticket, hotel booking proof, and evidence of sufficient funds (credit card or cash). Immigration officers occasionally ask — having a printed itinerary helps."],
        ["Arrival Airport", "KLIA (Kuala Lumpur International Airport) is the main terminal. AirAsia uses KLIA2 (the budget terminal, 5 min drive away). KLIA Express train from KLIA to KL Sentral takes 28 minutes, costs RM 55 (≈₹990) one-way."],
      ],
    },
    {
      flag: "🌍",
      title: "Other Nationalities & Practical Entry Info",
      bg: "bg-blue-50", border: "border-blue-200", titleColor: "text-blue-800",
      items: [
        ["ASEAN Nationals", "Citizens of Thailand, Indonesia, Philippines, Vietnam, etc. enter visa-free for 30–90 days. Singapore and Brunei citizens get 30 days visa-free."],
        ["Western Passports", "USA, UK, Australia, Canada, EU, Japan, Korea — all get 90 days visa-free. Simply arrive and get stamped."],
        ["Touch 'n Go Card", "Buy a Touch 'n Go eWallet-linked card at KLIA for RM 10 (≈₹180). Use it on KL's LRT, MRT, monorail, buses, highway tolls, and many petrol stations. Essential for getting around KL cheaply."],
        ["Currency", "Malaysian Ringgit (MYR/RM). RM 1 ≈ ₹18. ATMs widely available — use DuitNow QR at shops. Carry RM 200–300 (≈₹3,600–5,400) cash for hawker stalls and small shops. Avoid exchanging at airport — rates are poor. Best rates at money changers in Brickfields or Petaling Street, KL."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "RM 200–350/day (~₹3,600–6,300)",
      days: [
        {
          day: "Day 1",
          title: "Arrive Kuala Lumpur — Petronas Towers & Bukit Bintang",
          items: [
            "Arrive at KLIA2 (AirAsia terminal). Take KLIA Transit train to KL Sentral: RM 55 (≈₹990). Or shared airport bus for RM 12 (≈₹216).",
            "Check in to hostel or budget hotel in Bukit Bintang — CapsuleTransit KLCC (RM 80/≈₹1,440) or Reggae Mansion (RM 60/≈₹1,080) in Chinatown.",
            "10:00am — Walk to Petronas Twin Towers (exterior viewing free). The towers are breathtaking at ground level — the KLCC Park fountain show runs daily at 8pm.",
            "Book Skybridge tickets in advance at petronastwintowers.com.my — RM 80 (≈₹1,440) for timed entry. The 41st-floor sky bridge and 86th-floor observation deck are worth it for the views.",
            "1:00pm — Lunch at Jalan Alor, Bukit Bintang — KL's famous food street. Wong Ah Wah chicken wings (RM 12/≈₹216 for 6 pieces), char kway teow (RM 8/≈₹144), Malaysian fried rice (RM 7/≈₹126).",
            "4:00pm — Petaling Street (Chinatown) — KL's oldest market, knockoff goods, dried foods, Chinese temples. Visit Sri Mahamariamman Temple (free) on the same street.",
            "7:00pm — Dinner at Masjid India area — Indian-Muslim mamak stalls serve roti canai (RM 1.50/≈₹27), teh tarik (RM 2/≈₹36), nasi lemak (RM 5/≈₹90). Open 24 hours.",
          ],
          cost: "RM 150–200 total (≈₹2,700–3,600)",
        },
        {
          day: "Day 2",
          title: "Batu Caves, Little India & Central Market",
          items: [
            "7:30am — Batu Caves by KTM Komuter from KL Sentral (RM 3/≈₹54, 30 minutes). Arrive early to beat heat and crowds.",
            "8:00am — Batu Caves: free entry, 272 rainbow-painted steps to the main Hindu temple cave. The 43-metre golden Lord Murugan statue is the world's tallest. Takes 90 minutes.",
            "Dark Cave inside: guided tour RM 40 (≈₹720), shows bats, cave racer snakes, and formations.",
            "10:30am — Return to KL. Walk Brickfields (Little India) — colourful garlands, banana-leaf rice restaurants, Tamil music. Saravana Bhavan KL has banana-leaf meals for RM 15–20 (≈₹270–360).",
            "1:00pm — Central Market (Pasar Seni) — colonial-era Art Deco market, now a crafts and souvenir hub. Best place for batik fabric, pewter, and Malaysian handicrafts. Free entry.",
            "3:00pm — KL Tower (Menara KL): observation deck RM 52 (≈₹936). Higher than Petronas, 360° views of the city.",
            "6:30pm — Explore KLCC Park lake fountains and evening light at Petronas Towers (free).",
            "8:00pm — Mamak stall dinner — Restoran Pelita or Nasi Kandar Pelita in Ampang, open 24hr. Murtabak RM 9, teh tarik RM 2.",
          ],
          cost: "RM 120–180 total (≈₹2,160–3,240)",
        },
        {
          day: "Day 3",
          title: "Thean Hou Temple, KLCC Mall & Evening Night Market",
          items: [
            "9:00am — Thean Hou Temple (free) — six-tiered Chinese temple on a hilltop, spectacular architecture. The view of KL from the temple courtyard is excellent.",
            "11:00am — Petaling Street wet market and dim sum breakfast — Kedai Kopi Chun Heong (RM 15–20/≈₹270–360 for dim sum set).",
            "1:00pm — Pavilion KL or Suria KLCC mall: browse, eat at the food courts (RM 12–18/≈₹216–324 per meal), window-shop.",
            "4:00pm — Aquaria KLCC (in the KLCC convention centre): RM 60 (≈₹1,080). Underwater tunnel with sharks, rays, and coral reef — impressive for families.",
            "7:00pm — Bangsar Sunday Market (if visiting Sunday) or Mid Valley Megamall night food court. Rojak, satay, and Malaysian desserts.",
            "Take AirAsia evening flight to Penang — KL to Penang: RM 60–120 (≈₹1,080–2,160) booked in advance, 1 hour flight.",
          ],
          cost: "RM 200–300 including flight (≈₹3,600–5,400)",
        },
        {
          day: "Day 4",
          title: "Penang — Georgetown Heritage & Street Art",
          items: [
            "Arrive Penang Airport (PEN), take Grab to Georgetown hotel: RM 20–25 (≈₹360–450). Budget guesthouse in Georgetown: RM 60–100 (≈₹1,080–1,800). Try Red Inn Heritage Boutique or Broadway Budget Hotel.",
            "10:00am — Clan Jetties (free) — Chinese water villages built on stilts over the sea, each jetty belonging to a different clan. Most photogenic at sunrise or evening light.",
            "11:30am — Georgetown Street Art walk (free) — follow the Ernest Zacharevic murals map. The famous 'Boy on Bicycle' mural and 'Children on a Swing' are must-sees. Pick up a map at the tourist info office.",
            "1:00pm — Lunch at Gurney Drive Hawker Centre or New Lane Hawker Centre. Penang assam laksa (RM 5/≈₹90), char kway teow (RM 6/≈₹108), Penang prawn mee (RM 6/≈₹108). The best char kway teow in Malaysia is at Lorong Selamat.",
            "4:00pm — Kek Lok Si Temple (RM 10/≈₹180 for pagoda) — Malaysia's largest Buddhist temple complex, stunning on a hillside. The pagoda blends Chinese, Thai, and Burmese architecture.",
            "7:00pm — Chulia Street at night — backpacker hub with cheap eats, Indian food, and travel agents.",
          ],
          cost: "RM 150–220 (≈₹2,700–3,960)",
        },
        {
          day: "Day 5",
          title: "Penang Hill, Spice Garden & Hawker Final Evening",
          items: [
            "8:00am — Penang Hill funicular railway (RM 30/≈₹540 return). The top at 830m is cooler by 5°C. Views of Georgetown, the Penang Bridge, and the mainland on a clear day.",
            "Owl Museum at the top: RM 25 (≈₹450). Entopia butterfly farm: RM 60 (≈₹1,080). Both optional.",
            "11:00am — Penang Spice Garden or Tropical Spice Garden (RM 26/≈₹468) — walk among 500 spice and herb plants with guided commentary. Cafe on site serves spice-infused food.",
            "1:00pm — Lunch at Gurney Plaza food court or Air Itam market (hawker stalls near Kek Lok Si). Air Itam laksa is considered the best in Penang — one bowl RM 4.",
            "3:00pm — Sri Mahamariamman Temple Penang (free) — Tamil Hindu temple on Queen Street, magnificent gopuram tower with deity sculptures.",
            "5:00pm — Penang Esplanade and Padang Kota Lama waterfront: free walk, sea views, old colonial buildings.",
            "7:00pm — Hawker dinner at Gurney Drive Hawker Centre — outdoor seafood, 100+ stalls, most dishes RM 5–12. Penang laksa, otak-otak, and cendol (shaved ice dessert) for dessert.",
            "Take early morning AirAsia flight to Langkawi OR ferry from Penang Jetty (RM 60/≈₹1,080, 3 hours — scenic but slow).",
          ],
          cost: "RM 180–260 (≈₹3,240–4,680)",
        },
        {
          day: "Day 6",
          title: "Langkawi — Cenang Beach & Eagle Square",
          items: [
            "Arrive Langkawi Airport (LGK). Grab or taxi to Cenang Beach area: RM 25–35 (≈₹450–630). Budget guesthouse near Cenang: RM 80–120 (≈₹1,440–2,160). Cenang Beach has the best beaches and restaurants.",
            "Cenang Beach is duty-free — alcohol significantly cheaper than mainland Malaysia. Bottles of spirits cost RM 40–80 (≈₹720–1,440).",
            "11:00am — Pantai Cenang (Cenang Beach): free. Long stretch of white sand with calm water, good for swimming. Rent a sun lounger for RM 10.",
            "1:00pm — Lunch at Cenang Beach restaurants: seafood rice for RM 15–25 (≈₹270–450), grilled fish, laksa, or Indian banana-leaf rice at the many Indian restaurants along the strip.",
            "3:00pm — Eagle Square (Dataran Lang): free. Giant eagle sculpture at the north tip of the island, pleasant waterfront esplanade.",
            "5:00pm — Langkawi Cable Car (SkyCab) + SkyBridge: RM 55 (≈₹990) combo. The cable car rises 700m above the rainforest canopy. The 125m curved pedestrian bridge hangs from a single mountain peak — extraordinary views of Thailand on clear days.",
            "8:00pm — Dinner at Cenang Beach night stalls: grilled seafood, chicken satay, Malaysian BBQ. Budget RM 30–50 (≈₹540–900) for a full spread.",
          ],
          cost: "RM 200–300 (≈₹3,600–5,400)",
        },
        {
          day: "Day 7",
          title: "Langkawi Mangrove Tour & Departure",
          items: [
            "8:00am — Kilim Karst Geoforest Mangrove Tour (RM 90–120/≈₹1,620–2,160 per person, half-day, includes boat). Guides take you through mangrove tunnels, visit the eagle feeding area (white-bellied sea eagles swoop down for fish), and explore bat caves.",
            "Kuah Jetty fish farm en route: see sea bass, grouper, and tiger prawns in floating pens.",
            "12:00pm — Lunch at Kuah Town (Langkawi's main town): cheaper than Cenang, local restaurants serve lunch for RM 8–15 (≈₹144–270).",
            "2:00pm — Langkawi duty-free shops in Kuah: chocolate, perfume, electronics — no GST on the island. Lindt, Toblerone, and Cadbury at 40% cheaper than mainland prices.",
            "4:00pm — Final swim at Cenang Beach or Tengah Beach (quieter, 5 min walk from Cenang).",
            "Evening — Fly home from Langkawi Airport (LGK). AirAsia flies Langkawi to Chennai, Bangalore, and KL with onwards connections.",
          ],
          cost: "RM 200–280 (≈₹3,600–5,040)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "RM 450–800/day (~₹8,100–14,400)",
      days: [
        {
          day: "Days 1–3",
          title: "Kuala Lumpur — Business Class Experience",
          items: [
            "Stay at Hotel Stripes KL (RM 350/≈₹6,300/night) or Aloft KL Sentral — design hotels with rooftop pools in the heart of the city.",
            "Petronas Towers Skybridge and Observation Deck (pre-book, RM 80/≈₹1,440). Reserve KLCC Park dinner at Troika Sky Dining for KL skyline views.",
            "Sunway Lagoon (RM 170/≈₹3,060): Malaysia's biggest theme park with 6 parks including wave pool, scream park, and extreme park.",
            "Day trip to Genting Highlands by cable car (RM 22/≈₹396) — hill station casino resort at 1,800m, cool climate, theme parks.",
            "Dinner at Cantaloupe Troika (Malaysian fine dining, RM 150–250/≈₹2,700–4,500 per person) or Enak KL at Starhill Gallery for royal Malay cuisine.",
            "Shopping at Pavilion KL, Suria KLCC, and Bangsar Village for local designer brands and premium batik.",
          ],
          cost: "RM 600–900/day (≈₹10,800–16,200)",
        },
        {
          day: "Days 4–5",
          title: "Penang — Heritage Hotels & Fine Hawker Dining",
          items: [
            "Stay at Cheong Fatt Tze Mansion (The Blue Mansion, RM 380–500/≈₹6,840–9,000/night) — a UNESCO-restored Straits Eclectic mansion hotel, or Macalister Mansion boutique hotel.",
            "Private Georgetown Heritage Walk with licensed guide (RM 150–200/≈₹2,700–3,600 per person, 3 hours) covering Peranakan history, clan associations, and colonial architecture.",
            "Penang Hill sunrise hike or funicular (RM 30/≈₹540). Breakfast at The Habitat cafe on the hilltop.",
            "Cooking class at Nazlina Spice Station or Peranakan cooking class — RM 200/≈₹3,600 half-day, includes market visit and a 5-course meal.",
            "Evening tasting tour of Penang hawker food with a food guide — Communal Table Penang or Eat Penang Food Tours (RM 200/≈₹3,600), 10+ dishes across 5–6 stalls.",
          ],
          cost: "RM 700–1,100/day (≈₹12,600–19,800)",
        },
        {
          day: "Days 6–7",
          title: "Langkawi — Beach Resort & Island Hopping",
          items: [
            "Stay at Meritus Pelangi Beach Resort (RM 500–700/≈₹9,000–12,600/night) on Cenang Beach, or Casa del Mar Langkawi.",
            "Private island hopping boat charter (RM 300–450/≈₹5,400–8,100 half-day): Dayang Bunting (Pregnant Maiden Lake — freshwater lake inside an island), Singa Besar (wildlife — hornbills, monkeys), Pulau Beras Basah (snorkelling reef).",
            "Langkawi Underwater World (RM 63/≈₹1,134) — one of Southeast Asia's largest aquariums.",
            "Dinner at Bon Ton Restaurant in Cenang — traditional Malay wooden house restaurant, RM 80–120/≈₹1,440–2,160 per person for seafood and Malay heritage cuisine.",
          ],
          cost: "RM 800–1,200/day (≈₹14,400–21,600)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "RM 1,500+/day (~₹27,000+)",
      days: [
        {
          day: "Days 1–3",
          title: "Kuala Lumpur — Mandarin Oriental & Private Tours",
          items: [
            "Stay at Mandarin Oriental Kuala Lumpur (facing Petronas Towers, from RM 1,200/≈₹21,600/night) or The RuMa Hotel & Residences.",
            "Private helicopter tour over KL city and Petronas Towers (RM 2,500–4,000/≈₹45,000–72,000 per couple, 20 minutes) — book through Weststar Aviation.",
            "Private Petronas Towers Skybridge + corporate-level access with concierge booking.",
            "Dinner at Nobu Kuala Lumpur in Cerrado — RM 300–500/≈₹5,400–9,000 per person for Japanese-Peruvian cuisine.",
            "KL Tower Sky Box (glass floor viewing pod), private car transfers everywhere. Bespoke luxury shopping tour at Pavilion.",
          ],
          cost: "RM 3,000–6,000/day (≈₹54,000–108,000)",
        },
        {
          day: "Days 4–5",
          title: "Penang — Private Villa & Tasting Menus",
          items: [
            "Stay at The Edison George Town (colonial heritage hotel, RM 600–800/≈₹10,800–14,400/night) or Prestige Hotel Penang with sea-view suites.",
            "Private Peranakan heritage tour with a local historian, including private entry to clan association halls.",
            "Dinner at Kebaya Restaurant in Seven Terraces Hotel — Nyonya tasting menu RM 250/≈₹4,500 per person.",
            "Private cooking class with a Penang hawker master — learn char kway teow, assam laksa, and Nyonya kueh.",
          ],
          cost: "RM 2,000–3,500/day (≈₹36,000–63,000)",
        },
        {
          day: "Days 6–7",
          title: "Langkawi — Four Seasons & Private Yacht",
          items: [
            "Stay at Four Seasons Resort Langkawi (from RM 2,500/≈₹45,000/night) on Tanjung Rhu — Malaysia's most spectacular resort, in a UNESCO Geopark with mangrove-fringed lagoons.",
            "Private catamaran sunset cruise (RM 1,500–2,000/≈₹27,000–36,000 half-day, exclusive charter) with snorkelling, champagne, and freshly grilled seafood on deck.",
            "Four Seasons Spa (RM 500–800/≈₹9,000–14,400 for signature treatment) in individual pavilions by the sea.",
            "Private mangrove kayaking at dawn with a naturalist guide — Four Seasons concierge arranges.",
          ],
          cost: "RM 5,000–9,000/day (≈₹90,000–162,000)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "RM 60–120 (≈₹1,080–2,160) hostel/budget hotel", food: "RM 30–60 (≈₹540–1,080) hawker stalls", transport: "RM 20–50 (≈₹360–900) LRT/bus/Grab", activities: "RM 50–100 (≈₹900–1,800)", total: "RM 160–330/day (≈₹2,880–5,940)" },
    { tier: "✨ Mid-Range", accommodation: "RM 250–500 (≈₹4,500–9,000)", food: "RM 100–200 (≈₹1,800–3,600)", transport: "RM 60–120 (≈₹1,080–2,160) Grab", activities: "RM 150–300 (≈₹2,700–5,400)", total: "RM 560–1,120/day (≈₹10,080–20,160)" },
    { tier: "💎 Luxury", accommodation: "RM 800–2,500 (≈₹14,400–45,000)", food: "RM 300–600 (≈₹5,400–10,800)", transport: "RM 150–400 (≈₹2,700–7,200) private car", activities: "RM 500–2,000 (≈₹9,000–36,000)", total: "RM 1,750–5,500/day (≈₹31,500–99,000)" },
  ],
  mistakes: [
    { icon: "🏙️", title: "Visiting Petronas Towers Without Pre-Booking the Skybridge", desc: "The Petronas Twin Towers Skybridge and Observation Deck tickets are free but limited — they release on the day and sell out within minutes online. Book 2–3 weeks ahead at petronastwintowers.com.my. Walk-in queues form at 8:30am but availability is not guaranteed. The exterior view is free and dramatic, but the 41st-floor bridge walk is worth the effort of pre-booking.", color: "bg-red-50 border-red-200" },
    { icon: "🍜", title: "Skipping Penang's Hawker Centres for Restaurants", desc: "Penang is Asia's street food capital — the city's hawker centres serve food that regularly tops 'World's Best Street Food' lists. Char kway teow at Lorong Selamat (RM 7), assam laksa at Air Itam market (RM 4), and prawn mee at Jalan Macalister are irreplaceable. Eating at air-conditioned restaurants in Penang is like visiting Paris and eating at McDonald's.", color: "bg-orange-50 border-orange-200" },
    { icon: "🏨", title: "Booking a Hotel in Central Langkawi Town Instead of Near the Beaches", desc: "Kuah Town is Langkawi's administrative centre — fine for duty-free shopping but has no beach. The beaches (Cenang, Tengah, Tanjung Rhu, Datai) are 15–25km away. Always book accommodation near Pantai Cenang or Pantai Tengah. Grab rides from Kuah to Cenang cost RM 25–35 each way — it adds up across multiple days.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "✈️", title: "Not Checking AirAsia's Direct Routes from Indian Cities", desc: "AirAsia flies direct from Chennai (MAA), Kolkata (CCU), Kochi (COK), Delhi (DEL), and Hyderabad (HYD) to Kuala Lumpur (KLIA2). Return fares during sales can be as low as ₹8,000–12,000 including baggage. Booking 3–4 months ahead secures the best fares. The Chennai–KL route is particularly cheap — often ₹6,000–9,000 one-way.", color: "bg-pink-50 border-pink-200" },
  ],
  tips: [
    { icon: "🍛", title: "Mamak Stalls Are India's Malaysian Cousin — Open 24 Hours", desc: "Mamak stalls are Indian-Muslim restaurants, a Malaysian institution descended from Tamil Muslim traders. They serve roti canai (layered flatbread, RM 1.50/≈₹27), teh tarik (pulled tea, RM 2/≈₹36), murtabak (stuffed pancake, RM 8/≈₹144), and nasi kandar (rice with curries). They are open 24 hours, everywhere, and are the best late-night food option. Restoran Pelita and Nasi Kandar Pelita are the reliable nationwide chains.", color: "bg-amber-50 border-amber-200" },
    { icon: "🚌", title: "AirAsia Flies KL to Penang for RM 40–80 — Book Early", desc: "The Kuala Lumpur to Penang flight takes 55 minutes and costs RM 40–80 (≈₹720–1,440) booked 4–6 weeks ahead on AirAsia. The bus takes 4.5 hours (RM 35/≈₹630) and the train 3.5 hours (RM 40/≈₹720). For 7 days, flying saves a half-day each way. Book KL→Penang and Penang→Langkawi separately for the best prices.", color: "bg-teal-50 border-teal-200" },
    { icon: "💳", title: "KL City Pass Bundles Petronas, KL Tower & Aquaria", desc: "The Visit KL tourist pass bundles entry to multiple attractions. The KL Tower observation deck, Aquaria KLCC, and other attractions can be booked as packages on Klook or GetYourGuide for 15–20% less than walk-in prices. Grab the AirAsia SNAP deal (hotel + flight bundle) for KL to Langkawi packages, which can save RM 100–200 vs booking separately.", color: "bg-green-50 border-green-200" },
    { icon: "🌿", title: "Langkawi Is Duty-Free — Stock Up Strategically", desc: "Langkawi is a duty-free island. Alcohol costs 40–50% less than mainland Malaysia — a 1-litre bottle of Johnnie Walker Black costs RM 70 (≈₹1,260) vs RM 140 on the mainland. You can bring back 1 litre of spirits duty-free to Malaysia. Chocolates, perfumes, and electronics also have no GST. The Duty Free Complex in Kuah has the best selection.", color: "bg-blue-50 border-blue-200" },
  ],
  faqs: [
    { q: "Do Indians need a visa for Malaysia in 2024–2026?", a: "As of 2024, Indian passport holders receive a 30-day visa-free entry to Malaysia. The previous eNTRI system (RM 14 electronic registration) has been replaced by full visa exemption for tourism. Simply arrive with a valid passport (6 months validity), confirmed return ticket, and hotel bookings. Always verify the current status on imi.gov.my before travel as policies can change." },
    { q: "What is the best time to visit Malaysia?", a: "March to October is generally best for West Malaysia (Kuala Lumpur, Penang, Langkawi) — drier and cooler. The East Coast of Malaysia (Borneo) has different weather patterns. Avoid the monsoon season from November to February for Langkawi and Penang. KL is year-round with afternoon thunderstorms typical in any season." },
    { q: "How much does a 7-day Malaysia trip cost from India?", a: "Flights from India to KL cost ₹8,000–18,000 return on AirAsia booked in advance. On a budget of RM 200/day (≈₹3,600/day), total on-ground cost for 7 days is approximately RM 1,400 (≈₹25,200). Add inter-city flights (KL→Penang→Langkawi) for another RM 150–250. Total budget trip: ₹40,000–55,000 for 7 days including flights. Mid-range: ₹80,000–1,20,000." },
    { q: "Is Malaysia vegetarian-friendly for Indian tourists?", a: "Very much so. Indian-Muslim mamak restaurants serve vegetarian roti canai, dal, vegetable curries, and banana-leaf meals. Indian restaurants in Brickfields (KL) and Penang's Mahamariamman Temple area serve pure vegetarian South Indian food. Chinese Buddhist restaurants in KL also serve mock-meat vegetarian options. Look for 'vegetarian' or '素食' (Chinese vegetarian) signage." },
    { q: "Is it safe to use street food at hawker stalls?", a: "Hawker stalls in Malaysia are extremely safe. Malaysia's hawker culture is regulated — stalls must have hygiene certificates. Food is cooked fresh at extremely high temperatures in woks. Millions of tourists eat hawker food daily without issue. The only precaution: avoid raw salads and unpeeled fruit at roadside stalls. Cooked hawker food — laksa, chicken rice, satay — is perfectly safe." },
  ],
  combineWith: ["singapore-3-days", "thailand-7-days", "bali-5-days"],
  relatedSlugs: ["singapore-3-days", "bali-5-days", "bangkok-4-days", "langkawi-3-days", "penang-3-days", "kuala-lumpur-3-days"],
  galleryQuery: "kuala lumpur petronas towers penang george town langkawi beach malaysia",
};

export const metadata: Metadata = {
  title: "Malaysia in 7 Days: Complete Itinerary — KL, Penang & Langkawi (2026)",
  description: "7-day Malaysia itinerary for Indian travellers — visa-free entry, Petronas Towers, Penang street food, Langkawi beaches. Budget ₹3,500–6,000/day with real prices in MYR and ₹.",
  keywords: ["malaysia itinerary 7 days", "malaysia travel guide 2026", "kuala lumpur penang langkawi itinerary", "malaysia visa for indians", "malaysia budget travel india", "petronas towers guide", "penang hawker food"],
  openGraph: {
    title: "Malaysia in 7 Days: KL, Penang & Langkawi 2026",
    description: "Visa-free for Indians, ₹3,500/day budget, Petronas Twin Towers, Penang street food & Langkawi duty-free beaches.",
    images: [{ url: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80", width: 1200, height: 630, alt: "Petronas Twin Towers Kuala Lumpur Malaysia at night" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Malaysia in 7 Days: KL, Penang & Langkawi (2026)", description: "Visa-free for Indians. Hawker food, Petronas Towers, and Langkawi duty-free beaches." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/malaysia-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Malaysia in 7 Days: Complete Itinerary for Indian Travellers — KL, Penang & Langkawi 2026",
      datePublished: "2026-04-06T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      url: "https://www.incredibleitinerary.com/blog/malaysia-7-days",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Malaysia 7 Days", item: "https://www.incredibleitinerary.com/blog/malaysia-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Malaysia",
      description: "Southeast Asian country known for the Petronas Twin Towers in Kuala Lumpur, Penang's UNESCO-listed street food culture, and Langkawi's duty-free beach island.",
      touristType: "Cultural, Beach, Food",
    },
  ],
};

export default function Malaysia7DaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
