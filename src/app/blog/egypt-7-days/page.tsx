import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Egypt",
  country: "Egypt",
  countryFlag: "🇪🇬",
  slug: "egypt-7-days",
  heroQuery: "egypt pyramids giza sphinx cairo nile sunset",
  heroAlt: "Great Pyramids of Giza and Sphinx at golden hour with the Nile in the background, Egypt",
  category: "Africa & Middle East",
  date: "April 5, 2026",
  readTime: "18 min read",
  intro: "Seven days in Egypt is enough to see three civilisations at once — the Pharaonic world of the pyramids and Karnak, the Islamic splendour of Cairo's old city, and the Nubian warmth of Aswan's riverbanks. The Nile still flows through it all, unhurried, and Abu Simbel still faces the sunrise at the same angle Ramesses II commanded 3,200 years ago. It is one of the most overwhelming, rewarding, occasionally chaotic, and entirely unmissable journeys on earth.",
  stats: { duration: "7 Days", budgetFrom: "$35", bestMonths: "Oct–Apr", airport: "CAI (Cairo International)" },
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
        ["e-Visa Required", "Indian passport holders must obtain an e-Visa before travel. Apply at evisa.eg.gov.eg at least 5–7 days before departure. Fee: $25 USD. Processing is typically 3–5 business days. Print the approval and carry it alongside your passport."],
        ["Visa on Arrival", "A visa on arrival ($25) is also available at Cairo International Airport, but the online e-Visa is strongly recommended to avoid queues that can be 30–60 minutes long on busy arrival days."],
        ["Duration", "Tourist e-Visa grants a single entry stay of up to 30 days. Multiple-entry visas (for visiting Sinai Peninsula and returning to mainland Egypt) are available for $60."],
        ["Key Documents", "Valid passport with at least 6 months remaining validity, confirmed hotel bookings, return flight ticket, and proof of sufficient funds. Egypt does not have strict income proof requirements compared to Schengen."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passport Holders",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["e-Visa or Visa on Arrival", "USA, UK, Canada, Australia, EU citizens, and most Western passport holders can obtain a visa on arrival at Cairo airport ($25) or apply for an e-Visa online in advance at evisa.eg.gov.eg. The e-Visa is faster and hassle-free."],
        ["Sinai Entry Exception", "Travelers entering Egypt only at Sharm el-Sheikh or Taba (for Sinai Peninsula travel only) can get a free Sinai-only stamp that covers the Sinai region for 15 days — useful if combining with a Red Sea or desert trip separately."],
        ["Currency on Arrival", "Change money at the airport bank kiosks (better rates than the exchange desks in arrivals hall). The ATMs at the airport work reliably for Visa/Mastercard. Current rate: approx $1 = 50 EGP (2026)."],
        ["Registration", "Hotels register foreign guests with the government automatically. No action needed on your part — this is standard practice across Egyptian accommodation."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$35–60/day",
      days: [
        {
          day: "Day 1–2",
          title: "Cairo — Pyramids, Sphinx & the Egyptian Museum",
          items: [
            "Day 1 morning — Arrive at Giza Pyramids complex at 8am sharp when it opens. Entry: EGP 450. The light is golden, the vendors are just setting up, and you have 30 minutes before the tour buses arrive. Walk the plateau at your own pace.",
            "Pyramid interior — Entering Khufu's Great Pyramid costs EGP 100 extra (Solar Boat Museum a further EGP 100). The interior passage is cramped and hot — claustrophobic but historically staggering. Budget travelers: choose one entry. Khufu's pyramid is the largest and most impressive interior.",
            "The Sphinx — Entry included in the main ticket. Walk the full perimeter of the Sphinx enclosure. The best photograph is from the eastern viewing platform at 9–10am with the pyramid behind it.",
            "Camel rides — Available outside the complex perimeter for EGP 150–300 for a short circuit. Agree on the price and duration before mounting — and confirm there is no 'extra fee to get off.' Budget tip: entirely optional, the plateau walk is the real experience.",
            "Day 1 afternoon — Egyptian Museum in Tahrir Square. Entry: EGP 200. The mummies room is EGP 300 extra and worth it — 11 royal mummies including Ramesses II. The Tutankhamun treasures fill two upper rooms: the golden death mask, the innermost gold coffin, the alabaster canopic jars. Give it 3 hours minimum.",
            "Day 1 evening — Khan el-Khalili bazaar after 5pm. Free to walk, endlessly atmospheric. Perfume shops, spice stalls, copperware, papyrus (see scam warning), silver jewellery. Haggle everything — first quoted price is always 3–5x the selling price. Start at 20% of the ask.",
            "Day 2 — Islamic Cairo. Mohammed Ali Mosque (Citadel of Saladin, EGP 180 for the Citadel complex) — the alabaster mosque interior with brass lamps and sweeping views over Cairo. Ibn Tulun Mosque (free, oldest intact mosque in Cairo, stunning geometric courtyard). Coptic Cairo: Hanging Church, Coptic Museum, ancient Roman fortress walls — all free or minimal entry.",
          ],
          cost: "$25–40 total (both days combined)",
        },
        {
          day: "Day 3–4",
          title: "Luxor — Karnak, Valley of the Kings & the West Bank",
          items: [
            "Overnight train or budget flight Cairo to Luxor. Overnight sleeper train: EGP 450–700/person (book at Ramses Station, Cairo). Budget flight on Air Cairo or EgyptAir: $30–50. The train is an experience; the flight is faster.",
            "Day 3 morning — Karnak Temple complex. Entry: EGP 220. The largest religious building ever constructed — 134 columns in the Hypostyle Hall, some 23 metres tall. Allow 2–3 hours. The Avenue of Sphinxes leading to Luxor Temple was recently excavated and is now walkable.",
            "Day 3 afternoon — Luxor Temple. Entry: EGP 160. Visit in the late afternoon (4–6pm) and stay for the illumination after dark — the ochre stone turns gold under spotlights and the atmosphere is extraordinary. Dinner near the corniche for EGP 80–150.",
            "Day 4 morning — West Bank. Colossi of Memnon: free, the two enormous seated statues guarding the entrance to the necropolis. Hatshepsut Temple (Deir el-Bahari): EGP 140 — the three-tiered mortuary temple of Egypt's greatest female pharaoh, set against sheer limestone cliffs.",
            "Valley of the Kings — EGP 240 covers three tombs. Tutankhamun's tomb is EGP 100 extra (small but contains the original sarcophagus). Ramesses VI's tomb (KV9) is included in the standard ticket and has the most spectacular astronomical ceiling. No photos inside.",
            "Day 4 afternoon — Felucca on the Nile at sunset. EGP 50–100 per hour for the whole boat. Arrange at the corniche. Watch the West Bank cliffs turn pink and the river go silver as the sun drops.",
          ],
          cost: "$20–35 total (both days, excluding transport to Luxor)",
        },
        {
          day: "Day 5–6",
          title: "Aswan — Philae Temple, High Dam & Abu Simbel",
          items: [
            "Travel Luxor to Aswan by train (EGP 100–200, 3h) or minibus (EGP 80, scenic Nile road). Aswan is smaller, quieter, and many travelers find it the most beautiful part of Egypt — the Nile here is dotted with green islands and Nubian villages.",
            "Day 5 — Philae Temple: EGP 180 entry + EGP 60 for the motor boat from Shellal dock. The temple of Isis on its island, rebuilt after the Aswan High Dam flooded the original site — one of the great stories of archaeological rescue. Visit in the morning light.",
            "Aswan High Dam: EGP 60. The Soviet-built dam that created Lake Nasser and changed Egypt forever. The scale is genuinely impressive. Combined visit with the Unfinished Obelisk (EGP 80) — the largest ancient obelisk ever attempted, abandoned in the quarry when it cracked.",
            "Nubian Village — hire a small motorboat from the corniche (EGP 50–80 return) to visit a Nubian village on Elephantine Island or across the river. Colourful painted houses, strong tea, friendly locals, souvenir shopping at fair prices (Nubians are less pushy than Cairo vendors).",
            "Day 6 — Abu Simbel day trip. This is non-negotiable. 300km south of Aswan. Options: shared minibus convoy departs 3–4am ($30–50/person, 3–4h each way, convoy for safety), or fly ($150–200 return on EgyptAir, 45 minutes). The shared minibus is the budget choice and the convoy system is reliable and well-organised.",
            "Abu Simbel: EGP 450 entry. Ramesses II's greatest monument — four colossal 20-metre statues carved into the cliff face, plus the interior hall with painted reliefs of the Battle of Kadesh. The smaller Temple of Nefertari next to it is equally remarkable. Spend 2 hours minimum.",
          ],
          cost: "$40–60 total (both days; Abu Simbel minibus adds $30–50)",
        },
        {
          day: "Day 7",
          title: "Red Sea Day Trip or Alexandria & Departure",
          items: [
            "Option A — Hurghada & the Red Sea: Bus from Luxor to Hurghada (3.5h, EGP 100). The Red Sea here has some of the world's best snorkelling and diving. Day snorkelling trips from Hurghada run $20–30 including gear. Coral reefs, parrotfish, sea turtles. Return bus to Luxor or fly Hurghada–Cairo directly.",
            "Option B — Alexandria day trip (if flying home from Cairo): 2.5h express train from Cairo (EGP 80–100). Bibliotheca Alexandrina (EGP 70) — the stunning modern library on the ancient site, worth 2 hours. Citadel of Qaitbay (EGP 80) — 15th-century fortress built on the ruins of the Pharos Lighthouse. Mediterranean corniche walk and fresh seafood lunch.",
            "Option C — Cairo leisure day: Cairo Tower (EGP 200, panoramic views), Al-Azhar Park (EGP 30, beautiful Islamic garden), afternoon at a traditional ahwa (coffee house) on Muizz Street playing backgammon and drinking hibiscus tea.",
            "Departure from Cairo — budget at least 3 hours before international flights. Cairo airport is sprawling and security queues can be long. Uber from central Cairo to the airport costs EGP 200–300 (40–60 minutes). Do not use airport taxis — they charge EGP 500–800.",
          ],
          cost: "$15–40 depending on option chosen",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$100–200/day",
      days: [
        {
          day: "Day 1–2",
          title: "Cairo with a Licensed Guide",
          items: [
            "Day 1 — Licensed Egyptologist guide for the Giza Plateau and Egyptian Museum ($30–50 for a full day, plus your own entry fees). The guide handles touts and vendors, explains the astronomical alignments of the pyramids, contextualises the sculptures at the museum, and saves you hours of confusion. Worth every dollar.",
            "Giza Plateau private tour: guide leads you through the Great Pyramid, Khafre's pyramid (exterior), Menkaure's pyramid (smallest, most photogenic angle), and the Sphinx enclosure. Solar Boat Museum for the reconstructed cedar vessel. Lunch at a Giza restaurant with pyramid views.",
            "Egyptian Museum with guide: mummies room, Tutankhamun treasures, Old Kingdom sculpture gallery. 3 hours guided gives you more than 5 hours solo wandering.",
            "Day 1 evening — Khan el-Khalili with a guide or knowledgeable local contact who can help you buy authentic papyrus from the Papyrus Institute (not the tourist 'museums' which sell banana-leaf fakes), silver at fair prices, and spices from reputable merchants.",
            "Day 2 — Islamic Cairo: Citadel, Mohammed Ali Mosque, Al-Muizz Street (the medieval Islamic spine of old Cairo), Khan el-Khalili by day for photographs. Lunch in the Al-Azhar neighbourhood at a local restaurant — koshary (Egypt's national dish of pasta, lentils, tomato sauce, crispy onions, EGP 40–60) or ful medames (fava bean stew, EGP 25).",
            "Coptic Cairo afternoon: Hanging Church, Ben Ezra Synagogue, Coptic Museum. Good mid-range hotel in central Cairo: Kempinski Nile Hotel or Cairo Marriott Garden City, $80–150/night.",
          ],
          cost: "$90–150 total (both days)",
        },
        {
          day: "Day 3–4",
          title: "Luxor Highlights with Egyptologist",
          items: [
            "Nile cruise from Cairo to Luxor is an option for mid-range travelers: a 3-night Nile cruise Luxor–Aswan costs $200–400/person all-inclusive, covering the main temple sites with a guide. Book with a reputable operator (Abercrombie & Kent, Movenpick, or Sanctuary Retreats). Alternatively, fly Cairo–Luxor ($50–80) and stay at a mid-range hotel ($50–100/night).",
            "Day 3 — Karnak Temple with an Egyptologist: the guide explains the layers of construction over 2,000 years from the Middle Kingdom through the Ptolemaic period. The Sacred Lake, the obelisks of Hatshepsut, the hypostyle hall at the light of different hours.",
            "Luxor Temple sound-and-light show (EGP 250, evenings only) — theatrical but genuinely atmospheric. The illuminated columns and the narrated history create a memorable evening.",
            "Day 4 — West Bank private tour: Valley of the Kings with guide covering the royal astronomical theology, tomb paintings, and their historical sequence. Hatshepsut Temple, Deir el-Medina (the workers' village — their own tombs are arguably more human and colourful than the royal ones). Lunch at Al Sahaby Lane restaurant overlooking the West Bank.",
            "Hot air balloon over the West Bank at dawn: $80–120/person, 45-minute flight over the Valley of the Kings, Hatshepsut Temple, the Nile. Sunrise from 300m over the temples is one of Egypt's great experiences.",
          ],
          cost: "$120–200 total (both days, excluding Nile cruise option)",
        },
        {
          day: "Day 5–6",
          title: "Aswan & Abu Simbel Comfortably",
          items: [
            "Travel Luxor to Aswan: train (EGP 100–200) or include as part of a Nile cruise. Check in to a mid-range Aswan hotel: Mövenpick Resort Aswan (Elephantine Island, boat access) or Sofitel Legend Old Cataract (historic property, Winston Churchill and Agatha Christie both stayed here, $150–250/night).",
            "Philae Temple with guide: the story of Isis and Osiris explained in context of the wall reliefs. The boat crossing at dusk when the lake is calm. Sound-and-light show at Philae Temple (EGP 250) — held on the water, theatrical, recommended.",
            "Aswan souq: the best market in Egypt for Nubian textiles, galabeyyas, saffron, hibiscus tea (karkade), and handmade crafts. Less aggressive than Khan el-Khalili, better quality at comparable prices.",
            "Day 6 — Abu Simbel by flight ($150–200 return) for comfort, or first-class convoy minibus. Arrive at 6am when the site opens and the crowds are thinnest. Abu Simbel village has a simple hotel if you prefer to stay overnight and catch the early morning light — the temple faces dead east and the sunrise on the facade is extraordinary.",
            "Abu Simbel sun alignment dates: February 22 and October 22 each year, the inner sanctuary is illuminated by direct sunlight onto the four statues — if your dates allow, plan around these. Hundreds of Egyptologists come from around the world for these days.",
          ],
          cost: "$100–180 total (both days)",
        },
        {
          day: "Day 7",
          title: "Nile Cruise Farewell or Cairo Luxury Day",
          items: [
            "If ending in Aswan: optional Nubian cooking class ($20–30) before departing — learn to make ful, koshary, and Egyptian flatbread in a Nubian home. A genuinely warm cultural experience far removed from the tourist sites.",
            "Return flight Aswan to Cairo ($50–100) for international departure, or extend to Hurghada for diving (world-class Red Sea reefs, PADI dive courses from $300–500/week).",
            "Cairo farewell: afternoon at Al-Azhar Park for a relaxed picnic with views over Islamic Cairo, followed by dinner at Sequoia restaurant on the Nile in Zamalek — the best Egyptian fine dining experience in the capital, $30–60/person.",
            "Departure: Arrive at Cairo airport 3 hours early. Priority Pass lounges available in Terminal 2 for mid-range and above travelers.",
          ],
          cost: "$70–130 total",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$350–1,200+/day",
      days: [
        {
          day: "Day 1–2",
          title: "Private Cairo — Pyramids at Dawn & Museum After Hours",
          items: [
            "Arrive into Cairo and transfer to Four Seasons at Nile Plaza or Kempinski Nile Hotel ($300–600/night). Private luxury vehicle transfer from the airport.",
            "Day 1 — Private sunrise Giza tour before public opening through a licensed speciality operator (Context Travel, Wild Frontiers, or Abercrombie & Kent Egypt). You, a PhD Egyptologist, and the pyramids at first light. The plateau with no one else on it is a completely different encounter. Cost: $200–400 including guide and private entry arrangement.",
            "Solar Boat Museum, Khafre Pyramid interior, and private Sphinx enclosure visit. Helicopter overview of the Giza plateau can be arranged through select operators ($300–500 for a 20-minute flight).",
            "Egyptian Museum after-hours private tour: available through premium tour operators with Ministry of Antiquities permits. The mummies room, Tutankhamun's treasures, and Old Kingdom statuary without another visitor in the building. Cost: $400–600 for a group of up to 6.",
            "Day 2 — Customised Islamic Cairo walking tour with architectural historian. Al-Muizz Street, Bab Zuweila gate, Khan el-Khalili at 7am before opening. Private lunch at Naguib Mahfouz Café inside the bazaar ($20–40 per person for traditional Egyptian mezze). Old Cairo Coptic district with Coptic art specialist.",
          ],
          cost: "$500–900 total (both days, excl. hotel)",
        },
        {
          day: "Day 3–4",
          title: "Luxury Nile Cruise — Karnak to Valley of the Kings",
          items: [
            "Private charter flight Cairo to Luxor ($400–600 one way for private jet, or $80–150 business class on EgyptAir). Board the luxury Nile cruise: Sanctuary Sun Boat IV, Oberoi Philae, or Dahabiya private houseboat ($400–800/person/night all-inclusive with Egyptologist on board).",
            "Karnak Temple private access early morning before the site opens: available through the luxury cruise operators with advance permits. The scale of the Hypostyle Hall at dawn — with the light coming through the columns and no other visitors — is one of the most powerful architectural experiences in Egypt.",
            "Luxor Temple and its extraordinary nighttime illumination, viewed from the deck of the Nile cruise vessel with cocktails and a resident expert.",
            "Day 4 — Valley of the Kings VIP access: some operators can arrange access to normally closed tombs (KV5, the largest tomb ever found, or KV62 Tutankhamun with the sarcophagus lid raised for VIP visits). Check with your operator 3–6 months in advance.",
            "Hot air balloon at dawn over the West Bank — private balloon with champagne breakfast on landing. The Nile, the temples, the limestone cliffs, and silence at 400 metres.",
          ],
          cost: "$800–1,500 total (both days, incl. cruise)",
        },
        {
          day: "Day 5–6",
          title: "Aswan Elegance & Private Abu Simbel",
          items: [
            "Sofitel Legend Old Cataract Aswan ($400–800/night) — the most storied hotel in Nile Valley travel. Agatha Christie wrote Death on the Nile here. The terrace overlooks the Nile cataracts and Elephantine Island. Butler service, private pool villa available.",
            "Philae Temple private sunset visit followed by the sound-and-light show with champagne — arrange through the hotel concierge. The island temple reflected in the still lake is genuinely dreamlike.",
            "Nubian cultural dinner: private home-hosted dinner in a Nubian village, arranged through the hotel. Nubian music, henna art, and dishes you will not find in any restaurant.",
            "Day 6 — Abu Simbel by private charter plane ($500–800 for a small aircraft, Aswan to Abu Simbel, 45 minutes) — arrive at 6am before the public site opens if your operator can arrange early access. The four colossal statues with no tourists, a specialist guide, and morning silence is one of the defining experiences of luxury Egypt travel.",
            "Abu Simbel VIP return: private lunch in the village, then return flight to Aswan. Afternoon on the Old Cataract terrace with sundowners watching the Nubian sunset over the first cataract of the Nile.",
          ],
          cost: "$900–1,800 total (both days, incl. hotel)",
        },
        {
          day: "Day 7",
          title: "Farewell Cairo — Rooftop Dinner & Airport Transfer",
          items: [
            "Private flight Aswan to Cairo ($400–600) or business class on EgyptAir ($150–250). Transfer to Four Seasons First Residence or the Nile Ritz-Carlton for a final night.",
            "Afternoon at the Cairo Marriott spa or Four Seasons Nile Plaza rooftop pool — the pool overlooks the Nile and the Cairo skyline with the pyramids visible on a clear day from the upper floors.",
            "Final dinner at Sequoia Zamalek (riverfront, best setting in Cairo, $50–100/person) or arrange a private dinner at an Egyptologist's home through speciality cultural operators — eating traditional Egyptian food in a local home is an experience that money rarely buys elsewhere.",
            "Private luxury vehicle to Cairo airport. Business class lounge, and the knowledge that you have just completed one of the most extraordinary journeys available to any traveller.",
          ],
          cost: "$500–900 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$8–20", food: "$8–15", transport: "$5–12", activities: "$10–20", total: "$35–60/day" },
    { tier: "✨ Mid-Range", accommodation: "$50–100", food: "$20–40", transport: "$15–30", activities: "$25–50", total: "$100–200/day" },
    { tier: "💎 Luxury", accommodation: "$200–600", food: "$50–150", transport: "$50–150", activities: "$100–400", total: "$350–1,200+/day" },
  ],
  mistakes: [
    {
      icon: "🐪",
      title: "Visiting the Pyramids Without a Licensed Guide",
      desc: "The Giza plateau without a guide means 30–40 vendors following you from the moment you enter. A licensed Egyptologist guide (EGP 500–800 for a half day, roughly $12–20) keeps vendors at a respectful distance, provides historical context, and saves you hours of stress. The cost is negligible against the improvement in the experience.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☀️",
      title: "Visiting in Summer Heat",
      desc: "Cairo in July or August regularly hits 45°C. The Giza plateau has zero shade. The Valley of the Kings adds geothermal heat from the tombs. Heat exhaustion is a real medical risk. October through April is when Egypt is meant to be visited — 20–28°C, blue skies, and manageable crowds. May–September is for travellers with no other option and a very serious sunhat.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏛️",
      title: "Skipping Abu Simbel",
      desc: "The most common regret of Egypt travelers is skipping Abu Simbel because it's 'too far.' The 4-hour round trip convoy costs $30–50 and the experience — Ramesses II's temple with its four 20-metre cliff-carved colossi — is arguably more staggering than the pyramids. It exists nowhere else on earth. It is the single non-negotiable detour in Egyptian travel.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "📜",
      title: "Buying 'Papyrus' From Tourist Shops",
      desc: "99% of papyrus sold in Cairo bazaars and outside temple sites is made from banana leaves or dried reeds — it looks like papyrus, feels like papyrus, and is completely worthless in 10 years. Authentic papyrus is only reliably sold at the Dr. Ragab Papyrus Institute (Nile-side museum near Cairo). The price difference is minimal; the quality difference is permanent.",
      color: "bg-pink-50 border-pink-200",
    },
    {
      icon: "🚢",
      title: "Skipping Aswan in Favour of Going Straight Back to Cairo",
      desc: "Many budget itineraries fly Cairo–Luxor and then fly straight back from Luxor, skipping Aswan. This is the wrong choice. Aswan is the most peaceful and beautiful part of the Nile Valley — the Nubian culture, the island temples, the cataracts, and Abu Simbel are all here. Adding two nights in Aswan costs almost nothing but transforms the trip from 'monuments tour' to 'understanding of Egypt.'",
      color: "bg-purple-50 border-purple-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Arrive at Giza at 8am — Pyramids Opening Time",
      desc: "The Great Pyramid complex opens at 8am. The light at 8–9am is warm gold, the plateau is not yet packed, and the professional photographers who charge EGP 200–500 for forced portrait sessions are still setting up. At 11am, 30 tour buses have arrived. The first hour is a completely different experience.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "✨",
      title: "Abu Simbel Sun Alignment Dates: Feb 22 & Oct 22",
      desc: "Ramesses II engineered the temple so that twice a year, on February 22 (his birthday) and October 22 (his coronation), the rising sun penetrates the entire 60-metre length of the inner sanctuary and illuminates the four statues at the back — including Ramesses himself — while the god of darkness remains in shadow. Plan your trip around these dates if at all possible.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "🌙",
      title: "Luxor Temple at Night — Non-Negotiable",
      desc: "Luxor Temple is open until 10pm and illuminated after dark. The golden sandstone columns and the ancient sphinxes take on a completely different quality at night — theatrical, deeply atmospheric, far less visited than the daytime crowds. Combine an evening visit here with dinner on the corniche and you have one of Egypt's finest nights.",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🛶",
      title: "Felucca at Sunset in Aswan — The Best EGP 80 You'll Spend",
      desc: "A private felucca (traditional Nile sailboat) for an hour at sunset in Aswan costs EGP 50–100. The Nile between Aswan's islands — Elephantine, Sehel, the Botanical Garden — is lined with palms, Nubian villages, and ancient granite boulders. The light at 5pm turns everything amber. No motorboats, no traffic, just the Nile and the wind.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "💱",
      title: "Haggling Is Not Optional — It Is the System",
      desc: "In Egypt's tourist economy, prices are not fixed unless displayed on a government-set board. Opening price at the bazaar: 3–5x the final price. Camel ride ask: always 3x the fair price. Taxi without a meter: negotiate before you get in. The rule is: smile, offer 20% of the ask, shake hands, meet in the middle. Never get angry — it is not personal, it is commerce. A fixed-price culture would ruin the experience.",
      color: "bg-rose-50 border-rose-200",
    },
  ],
  faqs: [
    {
      q: "Is Egypt safe for tourists in 2026?",
      a: "The main tourist circuit — Cairo, Luxor, Aswan, and Abu Simbel — is considered safe for international tourists. Egypt has a significant tourism police presence at all major sites. The Sinai Peninsula (outside Sharm el-Sheikh) has different advisories; check your government's current travel advice before visiting North Sinai. Petty scams are common at tourist sites but violent crime against tourists is rare. The biggest risk is the pyramid vendor harassment, which a guide eliminates.",
    },
    {
      q: "Do Indian passport holders need a visa for Egypt?",
      a: "Yes. Indian citizens require a tourist visa. The easiest option is an e-Visa from evisa.eg.gov.eg (cost: $25, apply 5–7 days before travel). A visa on arrival is also available at Cairo airport for the same cost but involves queuing. The e-Visa is printed and carried with your passport. Duration: 30 days single entry.",
    },
    {
      q: "What is the best time to visit Egypt?",
      a: "October through April is optimal — temperatures of 20–28°C in Cairo, slightly cooler in Luxor and Aswan, and the long Nile Valley never drops below pleasant. February is arguably the best month: low crowds, beautiful light, and the Abu Simbel sun alignment on February 22. Avoid May through September when Cairo and Upper Egypt regularly exceed 40–45°C.",
    },
    {
      q: "Nile cruise vs. individual sites — which is better?",
      a: "A 3–4 night Nile cruise from Luxor to Aswan (or vice versa) covers all the major temple sites between the two cities with an Egyptologist guide on board, comfortable cabins, and the river itself as the backdrop. Budget cruises start from $200/person all-inclusive. The compromise is flexibility — cruise schedules are fixed. Independent travel in Luxor and Aswan is cheaper and more flexible. For a first visit, the cruise is strongly recommended; it provides context that solo temple-hopping doesn't.",
    },
    {
      q: "Is it worth going inside the pyramids?",
      a: "The interior of the Great Pyramid (Khufu) consists of cramped ascending passages leading to the King's Chamber — a plain granite room with an empty sarcophagus. There are no paintings, no treasures (everything was stolen in antiquity), and no interpretation inside. It is hot, claustrophobic, and physically demanding. It is also one of the most conceptually staggering spaces on earth — you are inside the largest stone structure ever built. If you are not severely claustrophobic, go in once.",
    },
    {
      q: "How do I handle the haggling and scams?",
      a: "Establish prices before any transaction: before getting on a camel, before entering a taxi, before accepting a 'free' gift at a stall. The most common scams: the 'papyrus museum' (always free entry, always ends in high-pressure sales of fake papyrus); the 'police' who offer to take photos and then demand payment; the helpful stranger who guides you somewhere and expects significant payment. A simple 'la shukran' (no thank you) said firmly and walked away from ends 95% of unwanted approaches.",
    },
    {
      q: "Can solo female travelers visit Egypt safely?",
      a: "Solo female travel in Egypt requires higher situational awareness than in Western Europe or Southeast Asia. Harassment is reported more frequently than in most destinations, particularly in Cairo. Practical mitigation: dress conservatively (covering shoulders and knees at sites, head covering in mosques), use licensed tour guides and Uber/Careem rather than street taxis, stay in reputable accommodation, join day tours rather than solo site visits. Many women travel Egypt solo annually without incident — but preparation and awareness are non-negotiable.",
    },
  ],
  combineWith: ["morocco-7-days", "dubai-4-days", "istanbul-5-days"],
  relatedSlugs: ["morocco-7-days", "kenya-safari-7-days", "istanbul-5-days", "dubai-4-days"],
  galleryQuery: "egypt pyramids karnak luxor nile aswan nubian",
};

export const metadata: Metadata = {
  title: "Egypt in 7 Days: Pyramids, Luxor, Nile Cruise & Abu Simbel (2026)",
  description: "Complete 7-day Egypt itinerary covering Cairo pyramids, Luxor temples, Aswan Nubian culture, and Abu Simbel — with real costs in EGP and USD, visa info for Indian travelers, and expert tips.",
  keywords: ["egypt itinerary 7 days", "egypt travel guide 2026", "pyramids giza guide", "luxor valley of the kings", "abu simbel tour", "nile cruise budget", "egypt budget travel"],
  openGraph: {
    title: "Egypt in 7 Days: Pyramids, Luxor, Nile & Abu Simbel (2026)",
    description: "7-day Egypt guide covering every major site from Cairo to Aswan — real costs, visa info, scam warnings, and the Abu Simbel secret no guide mentions.",
    images: [{ url: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80", width: 1200, height: 630, alt: "Great Pyramids of Giza Egypt at sunset" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Egypt in 7 Days (2026)", description: "Pyramids, Karnak, Abu Simbel, and the Nile — complete costs and route." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/egypt-7-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Egypt in 7 Days: Pyramids, Luxor, Nile Cruise & Abu Simbel (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80",
      description: "Complete 7-day Egypt itinerary covering Cairo pyramids, Luxor temples, Aswan Nubian culture, and Abu Simbel with real costs and visa info.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Egypt 7 Days", item: "https://www.incredibleitinerary.com/blog/egypt-7-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Egypt",
      description: "One of the world's oldest civilisations — home to the Great Pyramids of Giza, the temples of Luxor and Karnak, the Nile Valley, and the Nubian wonders of Abu Simbel.",
      touristType: ["History enthusiasts", "Archaeological travelers", "Cultural tourists", "Adventure travelers"],
      geo: { "@type": "GeoCoordinates", latitude: 26.8206, longitude: 30.8025 },
    },
  ],
};

export default function EgyptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
