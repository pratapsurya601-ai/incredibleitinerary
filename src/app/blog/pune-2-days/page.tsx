import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Pune",
  country: "India",
  countryFlag: "🇮🇳",
  slug: "pune-2-days",
  heroQuery: "pune shaniwar wada fort maharashtra india",
  heroAlt: "Shaniwar Wada historic fort at sunset in Pune, Maharashtra with its towering stone walls",
  category: "India",
  date: "April 6, 2026",
  readTime: "10 min read",
  intro: "Pune is Maharashtra's unsung powerhouse — a city that packs 300 years of Maratha history, a world-famous meditation resort, the Western Ghats' most dramatic hilltop fort, and one of India's finest café cultures into a two-day itinerary that costs under ₹3,000. Start your mornings at Shaniwar Wada — the seat of Peshwa power that once ruled half the subcontinent — and end them on FC Road with a cold Kingfisher and a plate of Pune's signature misal pav. Sinhagad Fort before sunrise. Khadakwasla Dam by noon. This is how you do Pune right.",
  stats: {
    duration: "2 Days",
    budgetFrom: "₹1,500",
    bestMonths: "Oct–Feb",
    airport: "PNQ (Pune Airport)",
  },
  toc: [
    { id: "plans", emoji: "⚡", label: "Which Plan Are You?" },
    { id: "visa", emoji: "📋", label: "Getting There & Around" },
    { id: "itineraries", emoji: "📅", label: "The Itineraries" },
    { id: "budget", emoji: "💰", label: "Budget Breakdown" },
    { id: "mistakes", emoji: "❌", label: "Mistakes to Avoid" },
    { id: "tips", emoji: "💡", label: "Pro Tips" },
    { id: "faq", emoji: "❓", label: "FAQ" },
  ],
  visa: [
    {
      flag: "🇮🇳",
      title: "Getting to Pune",
      bg: "bg-amber-50",
      border: "border-amber-200",
      titleColor: "text-amber-800",
      items: [
        ["From Mumbai", "The Pune–Mumbai Expressway (NH 48) is India's best-maintained intercity road. Volvo AC buses from Dadar or Swargate run every 30 minutes (₹300–450, 3 hours non-peak). Private cabs (Ola Outstation) cost ₹2,200–2,800. Shivneri MSRTC buses (₹450–600) are the most comfortable state buses in Maharashtra."],
        ["By Train", "Pune Junction is well-connected. Deccan Express (11007) from Mumbai CST takes 3h 30min (₹145 sleeper). Intercity trains from Nashik, Aurangabad, Bengaluru, and Hyderabad run daily. Booking on IRCTC at least 3 days ahead is recommended for weekends."],
        ["By Flight", "Pune International Airport (PNQ) in Lohegaon is 11km from the city centre. IndiGo, Air India, and Vistara connect Pune to Delhi (₹2,500–5,000), Bengaluru (₹1,500–3,000), and Hyderabad (₹1,200–2,500). Uber/Ola from airport to Shivajinagar costs ₹200–280."],
        ["Getting Around Pune", "Autos: ₹30 base fare, metered. A ride from Shaniwar Wada to FC Road costs ₹60–80. Ola/Uber cabs are ₹100–150 for the same route. For Sinhagad Fort (25km), book an Ola Outstation or hire a local cab for ₹600–800 for a half-day. Avoid autos for long routes — they refuse metered fares."],
      ],
    },
    {
      flag: "🏛️",
      title: "Entry Fees & Key Info",
      bg: "bg-orange-50",
      border: "border-orange-200",
      titleColor: "text-orange-800",
      items: [
        ["Shaniwar Wada", "Entry: ₹5 (Indians), ₹125 (foreigners). Open 8am–6:30pm. Sound & Light Show evenings at 7:15pm (Hindi) and 8:15pm (English), ₹25/person — do not skip this. It tells the full story of the Peshwa empire and the murder of Narayanrao in vivid detail."],
        ["Sinhagad Fort", "Entry: Free. Open 24 hours. Parking at base: ₹50 per vehicle. Shared jeeps from Sinhagad base village: ₹30/person one way. Horse ride up the fort path: ₹200–300. Bhakri, zunka, and curd at the fort top stalls: ₹50–80."],
        ["Aga Khan Palace", "Entry: ₹25 (Indians). The palace where Gandhi and Kasturba were imprisoned during the Quit India Movement — Kasturba died here in 1944. Open 9am–5:30pm. Plan 1.5 hours. The memorial gardens are meticulously maintained."],
        ["Osho Resort Area", "Entry to Osho International Meditation Resort requires advance registration (osho.com) and a COVID/health check-in process. Day visits cost ₹700–1,000. The surrounding Koregaon Park area is free to walk — cafés, boutiques, and tree-lined lanes are worth exploring without entering the resort."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₹1,500–3,000/day",
      days: [
        {
          day: "Day 1",
          title: "Shaniwar Wada, Peshwa History & Café Culture",
          items: [
            "7:30am — Shaniwar Wada (₹5 entry). Arrive first thing — the crowds arrive after 10am. The fort was the administrative seat of the Peshwa Maratha empire from 1732 until 1818, when the British seized it after the Battle of Koregaon. The original seven-storey palace burned in a mysterious fire in 1828 — only the massive stone perimeter walls and five ornate gates survive. Spend 1 hour reading every information board; the context transforms what looks like ruins into one of the most significant political sites in Indian history. Do not miss the Dilli Darwaza (Delhi Gate), the main entrance, and the Hazari Karanje fountain courtyard.",
            "9:30am — Kasba Ganpati (10-minute walk from Shaniwar Wada, free). Pune's oldest and most important Ganesh temple, established in 1636 by Jijabai, the mother of Chhatrapati Shivaji. Mornings are calm before the office crowds arrive — the inner sanctum has lovely old silver work.",
            "10:30am — Laxmi Road market walk. Pune's traditional shopping spine: Chitale Bandhu (Shivajinagar branch, ₹50–100 for fresh chivda and bakarwadi take-home snacks), saree shops, and old-school Pune commerce. Good for 45 minutes of wandering.",
            "12:00pm — Misal Pav at Bedekar Misal (Narayan Peth, ₹80–100). This family-run institution has been serving Pune's most celebrated misal pav for decades. Kat (spicy gravy) over sprouted moth beans, topped with farsan, raw onion, and lemon — spicier than anything Mumbai serves. Eat with fresh pav and a glass of cold water. Queue may be 10–15 minutes on weekends.",
            "1:30pm — Aga Khan Palace (₹25 entry, auto from Narayan Peth ₹60). One of Pune's most important historical and architectural sites — built in 1892 by Sultan Muhammad Shah Aga Khan III, and used as a prison by the British for Mahatma Gandhi, Kasturba Gandhi, and other Congress leaders in 1942. Kasturba died here. Her samadhi is in the palace garden. The museum inside is small but moving. Allow 1.5 hours.",
            "4:00pm — Koregaon Park cafe walk (auto from Aga Khan Palace ₹40). Koregaon Park is Pune's most leafy and upscale neighbourhood — cafés, art galleries, and boutiques in colonial-era bungalows. Arthur's Theme (North Main Road, Koregaon Park) for cold coffee (₹120). Café 1730 on North Main Road for a quiet sit-down.",
            "7:00pm — FC Road evening. Ferguson College Road is Pune's student hub — bookshops, snack stalls, and excellent casual restaurants. Vaishali Restaurant (FC Road) for masala dosa (₹90) and their legendary filter coffee (₹40) — always packed, always worth it. Queue is part of the Pune experience.",
            "Evening option — Shaniwar Wada Sound & Light Show at 8:15pm (₹25). A must-do: the entire Peshwa story told through dramatic lighting and narration directly on the fort walls.",
          ],
          cost: "₹600–900 (entry fees + food + autos)",
        },
        {
          day: "Day 2",
          title: "Sinhagad Fort Trek, Khadakwasla Dam & MG Road",
          items: [
            "5:30am — Depart for Sinhagad Fort. Hire a cab from your hotel (₹600–800 for Sinhagad + Khadakwasla return, half-day). Uber One-Way Outstation: ₹550–650. The fort is 25km from central Pune. CRUCIAL: arrive at the fort base by 6:30–7:00am. By 10am, the single-lane road becomes gridlocked with hundreds of cars, parking becomes impossible, and the fort top is overcrowded. On weekends this situation is severe from 9am onwards.",
            "6:30am — Sinhagad Fort trek (Free entry). 'Sinhagad' means Lion's Fort — it has been fought over more than any other fort in the Sahyadri range. The greatest battle here was in 1670, when Maratha commander Tanaji Malusare scaled the cliff walls at night to retake the fort from the Mughals — Tanaji was killed but the fort was won. Shivaji famously lamented: 'The lion is gone, but the fort is won.' The fort top has Tanaji's memorial, Kali temple, the tomb of Rajaram (Shivaji's son), and stunning views of Pune and the surrounding Sahyadri hills. On clear mornings you can see Raigad in the distance.",
            "8:00am — Breakfast at the fort top stalls: zunka bhakri (jowar flatbread with dry chickpea curry, ₹50–60), buttermilk (taak, ₹20), and fresh curd. These stalls are a Pune institution — the zinc vessels of curd with a pinch of salt, served by Mavalha farmers who carry provisions up the cliff path daily.",
            "10:00am — Khadakwasla Dam (15 minutes drive from Sinhagad base, free). One of the four reservoirs supplying Pune's water. The dam walls are open for walking; the views across the reservoir toward the Sahyadri hills are genuinely beautiful, especially in winter when the water level is high. Street food at the dam road: corn, bhutta (₹30), sugarcane juice (₹30).",
            "12:30pm — Return to Pune city. Drop your cab and freshen up.",
            "2:00pm — Pataleshwar Cave Temple (Jangli Maharaj Road, Free). An 8th-century rock-cut Shiva temple carved directly from basalt — the Pune equivalent of the Ellora caves on a smaller scale. It sits incongruously in the middle of the city, surrounded by apartment buildings. The main Nandi (bull) in the circular mandapa is particularly fine. Open and quiet on weekday afternoons.",
            "3:30pm — MG Road and Camp area shopping. The Camp (Cantonment) area is Pune's most British-era neighbourhood — wide tree-lined roads, old churches, and Moledina Road shops. Dorabjee & Sons supermarket for dry fruits and Kolhapuri chappals. Crossword Bookstores on Moledina Road (one of India's best-stocked independent bookshops). Budget shopping for Kolhapuri footwear: ₹300–600.",
            "6:30pm — Dinner at German Bakery (North Main Road, Koregaon Park). The original German Bakery is an iconic Pune institution — brown bread sandwiches (₹180), mushroom soup (₹160), lemon cheesecake (₹180), and real espresso (₹120). Sit in the garden section. It has been rebuilt after the 2010 bombing and retains its relaxed, multi-cultural character that makes it uniquely Pune.",
          ],
          cost: "₹800–1,200 (cab ₹600–800 + food + shopping)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₹4,000–8,000/day",
      days: [
        {
          day: "Day 1",
          title: "Heritage & Café Culture with Comfort",
          items: [
            "Stay at Hotel Surya Villa (Koregaon Park, ₹2,500–3,500/night) or O Hotel (Nagar Road, ₹3,500–5,000) — both have pools and good restaurants. Mid-range Pune hotels often include breakfast.",
            "8:00am — Guided heritage walk of Shaniwar Wada and Kasba Peth with a certified Pune heritage guide (₹500–800 for 2-person private tour via Pune City Walks). The guide transforms the ruins into a living story — the water supply system, the Peshwa court intrigue, the 1828 fire mystery, the last days of the empire.",
            "10:30am — Rajiv Gandhi Zoological Park, Katraj (₹50 entry, ₹100 camera fee). Pune's well-maintained zoo with a snake park and deer sanctuary attached. The zoo covers 130 acres of natural forest — worth 2 hours for families or wildlife enthusiasts.",
            "1:00pm — Lunch at Malaka Spice (North Main Road, Koregaon Park). Pune's most celebrated Southeast Asian restaurant, set in a heritage bungalow garden. Thai green curry (₹380), Vietnamese spring rolls (₹320), and their signature chocolate lava cake. Mains ₹280–480.",
            "3:30pm — Aga Khan Palace with time and space to absorb the Gandhi connection properly. Mid-range travel means less rushing — the gardens and archive room deserve a full 2 hours.",
            "6:00pm — Rooftop sundowner at The Poona Club or Amanora Town Centre food court rooftop (Hadapsar). Pune's Koregaon Park restaurant strip at night: The Sassy Spoon (European-Indian fusion, mains ₹450–800), ABC Farms (colonial-era garden dining, traditional Maharashtrian thali ₹550).",
            "Evening option — Sound & Light Show at Shaniwar Wada (₹25) then late dinner at Malaka Spice or Boteco (Brazilian, North Main Road).",
          ],
          cost: "₹3,500–5,500/day (hotel + food + experiences)",
        },
        {
          day: "Day 2",
          title: "Sinhagad, Dam & Lavish Camp Dining",
          items: [
            "5:30am — Pre-booked Ola Outstation or hotel-arranged cab to Sinhagad (₹800–1,000 half-day, AC). Reach the fort base by 6:30am. Mid-range travellers can hire a private jeep from the base (₹300–400 one way, saving the 30-minute climb) to reach the fort top fresh before the heat builds.",
            "Fort top breakfast: curd and zunka bhakri from fort stalls (₹80–100) — authentic Pune hill experience that no hotel breakfast can replicate.",
            "9:30am — Khadakwasla Dam and Panshet/Varasgaon Dam circuit. Your driver can take you to Panshet Water Park and reservoir (₹200–400 entry, watersports available) — the extended dam-lake circuit is beautiful for photography in winter.",
            "12:30pm — Lunch at Sinhagad Restaurant (Sinhagad Road, on the way back). Maharashtrian thali: ₹250–350. Or Durvankur (Deccan Gymkhana area) — their sol kadhi and kombdi vade (rice pancakes with chicken curry) are exceptional Puneri cuisine.",
            "3:00pm — Pataleshwar Cave Temple (free). Peaceful afternoon visit when tourists are fewest.",
            "4:30pm — Jehangir Art Gallery / Pune's art galleries walk. The city has a thriving contemporary art scene — Sudarshan Art Gallery (MG Road, free) shows local artists.",
            "7:30pm — Dinner at The Poona Spice (Bund Garden Road, ₹400–700/person) or Vohuman Café (Bund Garden Road) for Irani chai and bun maska (₹40–60) — Pune's Irani café tradition is a Parsi legacy worth experiencing.",
          ],
          cost: "₹4,000–7,000/day",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₹10,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Heritage & Fine Dining",
          items: [
            "Stay at JW Marriott Pune (Senapati Bapat Road, ₹8,000–15,000/night) or Conrad Pune (Mangaldas Road, ₹7,500–12,000/night, connected to the restored Mangaldas Heritage Market). The Conrad is particularly special — luxury rooms opening directly into a working heritage textile bazaar.",
            "Private guided heritage tour: Shaniwar Wada, Raja Dinkar Kelkar Museum (₹100 entry — one of India's finest private collections, 20,000 objects covering everyday Maratha life), and Pataleshwar Caves with an art historian (₹1,500–2,500 for private guide).",
            "Lunch at Mykonos Restaurant (JW Marriott, ₹1,500–2,500/person). Their Sunday brunch is among Pune's finest — continental and Indian spreads, unlimited cocktails.",
            "Afternoon spa at Conrad Pune or JW Marriott. Pune luxury hotels offer exceptional value vs. Mumbai or Delhi equivalents at the same star level.",
            "Dinner at Boteco (North Main Road, Koregaon Park, ₹1,200–2,000/person) — authentic Brazilian churrasco in Pune's liveliest neighbourhood.",
          ],
          cost: "₹12,000–20,000/day (hotel + experiences + dining)",
        },
        {
          day: "Day 2",
          title: "Sinhagad & Luxury Day Trip",
          items: [
            "Private luxury cab to Sinhagad at 6am. Pre-arranged fort breakfast picnic set up at the fort top by a catering service (some Pune luxury travel operators offer this — worth calling ahead).",
            "Private day trip extension to Lonavala (60km) or Mahabaleshwar (120km) as an add-on to Day 2 — see the 'Pune as a Base' tip. Mahabaleshwar strawberry farms, Venna Lake, and Pratapgad Fort can be covered in a long day (₹3,000–4,000 for private vehicle).",
            "Evening return: pre-dinner drinks at Elephant & Co. (Koregaon Park) — Pune's most design-forward craft beer bar. ₹400–600 for cocktails.",
            "Dinner at Sassy Spoon (Boat Club Road, ₹1,500–2,500/person) — consistently voted Pune's best restaurant for contemporary Indian-continental cuisine.",
          ],
          cost: "₹15,000–25,000/day",
        },
      ],
    },
  ],
  budgetTable: [
    {
      tier: "💰 Budget",
      accommodation: "₹600–1,200",
      food: "₹300–600",
      transport: "₹200–400",
      activities: "₹100–300",
      total: "₹1,500–3,000/day",
    },
    {
      tier: "✨ Mid-Range",
      accommodation: "₹2,500–4,500",
      food: "₹800–2,000",
      transport: "₹600–1,200",
      activities: "₹300–800",
      total: "₹4,000–8,000/day",
    },
    {
      tier: "💎 Luxury",
      accommodation: "₹7,500–15,000",
      food: "₹2,000–5,000",
      transport: "₹1,500–3,000",
      activities: "₹1,000–3,000",
      total: "₹10,000–25,000/day",
    },
  ],
  mistakes: [
    {
      icon: "⛰️",
      title: "Going to Sinhagad After 9am on Weekends",
      desc: "Sinhagad Fort has a single narrow road to the base. By 10am on Saturdays and Sundays, it becomes one of Pune's worst traffic jams — hundreds of cars, bikes, and tourist vehicles all funnelling onto a one-lane mountain road. Parking disappears by 9:30am. The fort top gets genuinely overcrowded by 11am. Leave Pune by 5:30am at the latest. Arriving at the fort base by 6:30–7am means you get the sunrise over the Sahyadris, empty fort paths, the famous curd stalls just setting up, and departure before the chaos. Going late means queuing for an hour to park and then hiking in afternoon heat.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "🏰",
      title: "Treating Shaniwar Wada as Just Ruins",
      desc: "Most visitors walk around Shaniwar Wada in 20 minutes, look at the walls, and leave thinking it is 'just rubble.' This misses the entire point. Shaniwar Wada was the nerve centre of an empire that controlled territory from Peshawar to Thanjavur — the Peshwas were, for a time, the most powerful rulers in India. The main palace burned in 1828, but the surviving fortifications, gates, and layout speak to this scale. Read the information boards, understand the Peshwa lineage, and return for the evening Sound & Light Show (₹25) which dramatises the full story including the 1773 assassination of 16-year-old Peshwa Narayanrao by his uncle's men — inside these very walls.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🌶️",
      title: "Skipping Misal Pav and Eating Only at Cafés",
      desc: "Pune's café culture is excellent, but the city's true culinary identity is in its traditional Maharashtrian food. Misal pav (sprouted moth beans in fiery gravy with farsan), vada pav (Pune's version is spicier and smaller than Mumbai's), and thalipeeth (multigrain pancakes) are the backbone of Pune cuisine. Bedekar Misal (Narayan Peth), Katakir Misal (Sarasbaug), and Rupali Restaurant (Deccan) serve these for ₹60–120. Spending all meals at Koregaon Park's international cafés means missing the food Pune actually runs on.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "🚖",
      title: "Not Negotiating Autos or Using Metered Rides",
      desc: "Pune auto-rickshaw drivers frequently quote flat rates to tourists — ₹200 for a ₹80 journey is common around Koregaon Park and near Shaniwar Wada. Always insist on the meter ('meter lavaa'). If a driver refuses, the next auto will almost always agree. Ola and Uber operate efficiently in Pune at ₹8–10 per km. For Sinhagad Fort and Khadakwasla, autos will refuse the trip — pre-book an Ola Outstation or call a local cab operator the evening before.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🗺️",
      title: "Pune Is Your Best Base for Mahabaleshwar, Lonavala & Aurangabad",
      desc: "Pune's geographic position makes it one of India's best weekend-trip bases. Lonavala is 65km (1.5 hours) — misty hill station with Bhushi Dam, Karla Caves, and the famous Lonavala chikki (₹150–300/pack). Mahabaleshwar is 120km (2.5–3 hours) — strawberry country with Pratapgad Fort, Venna Lake, and exceptional views from Wilson Point. Aurangabad (240km, 4 hours) gives you Ajanta and Ellora caves, among the greatest rock-cut monuments on earth. For any of these, rent a self-drive car from Zoomcar (₹1,500–2,500/day) or hire a local travel agent cab (₹2,500–3,500 for Mahabaleshwar, ₹3,500–4,500 for Aurangabad).",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "☕",
      title: "The FC Road–Deccan Gymkhana Café Crawl",
      desc: "Pune's café culture is concentrated on a 3km strip running from Ferguson College Road through Deccan Gymkhana to JM Road. Vaishali (FC Road) for morning dosa and filter coffee (₹90–150). Coffee House (JM Road) for Irani chai and bun maska (₹40–60). The German Bakery (Koregaon Park) for European-style baking and garden seating. Café 1730 (North Main Road) for quiet afternoon work. Pagdandi Books Chai Café (Baner) for books and cardamom chai. This strip is best explored on foot between 8–11am when the student energy and street food vendors are at peak.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🏛️",
      title: "Raja Dinkar Kelkar Museum — Pune's Most Underrated Attraction",
      desc: "Almost no tourist list prominently features the Raja Dinkar Kelkar Museum (Bajirao Road, ₹100 Indians), but it is one of the finest museums in India. D.G. Kelkar spent 60 years collecting 20,000 objects of everyday Maratha and Indian life — from 200-year-old nutcrackers and inkpots to ivory door locks, hookah bases, and medieval dice. The collection is housed across multiple floors of a building he built specifically for it and donated to Maharashtra state. Allow 2 hours minimum. Context: Kelkar began collecting after his son Raghu died — the entire museum is a memorial to his son.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🌄",
      title: "The Best of the Sahyadri Hill Forts — Sinhagad Timing Is Everything",
      desc: "Sinhagad is Pune's signature trek — but it is only magical with timing. Leave at 5:30am, reach the base by 6:30am, summit by 7:15am for sunrise over the Sahyadris and the Pune plains below. The hike is 2.2km with 490m elevation gain — moderate fitness required, no technical gear needed. Carry 1.5 litres of water. The fort is best in October–February (cool, clear air, best views). Avoid June–September (monsoon makes the path muddy and the fort misty all morning). The Konkani darwaza (the cliff-face gate Tanaji scaled in 1670) is on the south wall — find it and absorb the scale of what happened here.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "How many days is enough for Pune?",
      a: "Two focused days covers Pune's main sights comfortably — Shaniwar Wada and Peshwa history on Day 1, Sinhagad Fort and the Camp area on Day 2. A third day allows a day trip to Lonavala (65km) or a deeper dive into the Raja Dinkar Kelkar Museum and Pataleshwar Caves. Pune also works as a base for Mahabaleshwar (120km) and Aurangabad/Ajanta-Ellora (240km) if you add days.",
    },
    {
      q: "What is the best time to visit Pune?",
      a: "October to February is optimal — temperatures range 10–28°C, the skies are clear, and Sinhagad Fort is at its best for trekking. March–April becomes warm (30–36°C) but is still manageable. May–June pre-monsoon is hot and dry. July–September monsoon brings heavy rain — the Western Ghats around Pune become lush and dramatic but waterfalls make Sinhagad's path slippery. The Ganesh Chaturthi festival (August–September, 10 days) sees Pune at its most celebratory — genuinely spectacular if you're comfortable in large crowds.",
    },
    {
      q: "How do I get from Mumbai to Pune cheapest?",
      a: "MSRTC Shivneri AC bus from Mumbai Central or Dadar: ₹300–450, 3 hours. Volvo AC private operators (Neeta Travels, Paulo Travels, VRL) from Dadar TT: ₹350–500. Train: Deccan Express (11007) Mumbai CST to Pune takes 3h 30min, sleeper class ₹145, AC chair car ₹300. If you book trains 30+ days ahead, seats are plentiful. Weekends see all options filling up — book Friday at the latest for a weekend trip.",
    },
    {
      q: "Is Pune safe for solo travellers and women?",
      a: "Pune is consistently ranked among India's safest major cities. The large student and IT professional population means the city is cosmopolitan and alert. Koregaon Park, FC Road, and the Camp area are busy and well-lit until midnight. Standard city precautions apply for late nights. Ola and Uber work well as safe transport options at all hours. The MG Road and Deccan areas are particularly active and feel safe throughout the day.",
    },
    {
      q: "What should I eat in Pune that I can't find elsewhere?",
      a: "Misal Pav (Bedekar Misal, Narayan Peth — ₹80, world-class). Puneri Bhakarwadi (Chitale Bandhu, Shivajinagar — spicier than the Mumbai version, ₹60–120 per pack). Thalipeeth (Rupali Restaurant, Deccan — multigrain flatbread with chutney). Mastani (Sujata Mastani, Pune's famous thick milkshake with ice cream on top, ₹120–180). Kande Pohe (breakfast): flattened rice with mustard, turmeric, onion, and coriander — every Pune household serves this; Vaishali Restaurant has a great version (₹80).",
    },
    {
      q: "Can I do Lonavala and Pune in the same trip?",
      a: "Yes, very easily. Lonavala is 65km from Pune (1.5 hours on the expressway). You can visit Lonavala as a half-day addition on Day 2 after Sinhagad if you manage your time well, or add a third day dedicated to Lonavala-Khandala — Bhushi Dam, Tiger's Leap viewpoint, Karla and Bhaja Caves (ancient Buddhist rock-cut), and the famous Lonavala chikki shops on the main market street. A private cab from Pune to Lonavala and back costs ₹1,800–2,200.",
    },
  ],
  combineWith: ["lonavala-weekend", "mahabaleshwar-2-days", "mumbai-3-days"],
  relatedSlugs: ["mumbai-3-days", "goa-5-days", "north-east-india-10-days"],
  galleryQuery: "pune shaniwar wada sinhagad fort maharashtra koregaon park",
};

export const metadata: Metadata = {
  title: "Pune in 2 Days: Shaniwar Wada, Sinhagad Fort & FC Road Cafés (2026)",
  description: "Complete 2-day Pune itinerary for Indian travellers — Peshwa history at Shaniwar Wada, Sinhagad Fort trek tips, Aga Khan Palace, Koregaon Park cafés, misal pav spots, and real ₹ costs.",
  keywords: [
    "pune itinerary 2 days",
    "pune travel guide 2026",
    "shaniwar wada pune",
    "sinhagad fort trek pune",
    "pune budget travel india",
    "pune koregaon park cafes",
    "pune misal pav",
    "pune to lonavala day trip",
  ],
  openGraph: {
    title: "Pune in 2 Days: Shaniwar Wada, Sinhagad Fort & Café Culture (2026)",
    description: "Maratha history, Sahyadri fort treks, and the best misal pav in India — 2-day Pune guide from ₹1,500/day.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Shaniwar Wada historic Peshwa fort walls at sunrise in Pune Maharashtra",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pune in 2 Days (2026)",
    description: "Shaniwar Wada, Sinhagad Fort, misal pav, and Koregaon Park cafés — real ₹ costs for Indian travellers.",
  },
  alternates: {
    canonical: "https://www.incredibleitinerary.com/blog/pune-2-days",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Pune in 2 Days: Shaniwar Wada, Sinhagad Fort & FC Road Cafés (2026)",
      datePublished: "2026-04-06T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: {
        "@type": "Organization",
        name: "IncredibleItinerary",
        url: "https://www.incredibleitinerary.com",
      },
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      description:
        "Complete 2-day Pune travel guide covering Shaniwar Wada Peshwa history, Sinhagad Fort trek, Aga Khan Palace, Koregaon Park cafés, and authentic misal pav spots.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pune 2 Days",
          item: "https://www.incredibleitinerary.com/blog/pune-2-days",
        },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Pune",
      description:
        "Maharashtra's cultural capital — home to Shaniwar Wada Peshwa fort, Sinhagad hilltop trek, Aga Khan Palace Gandhian history, and a thriving café culture along FC Road and Koregaon Park.",
      touristType: ["History enthusiasts", "Trekkers", "Food lovers", "Weekend travellers", "Cultural tourists"],
      geo: {
        "@type": "GeoCoordinates",
        latitude: 18.5204,
        longitude: 73.8567,
      },
    },
  ],
};

export default function Pune2DaysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
