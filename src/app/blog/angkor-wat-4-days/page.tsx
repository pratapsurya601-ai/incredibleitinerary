import type { Metadata } from "next";
import UniversalBlogClient, { type UniversalBlogData } from "@/components/blog/UniversalBlogClient";

const data: UniversalBlogData = {
  destination: "Angkor Wat",
  country: "Cambodia",
  countryFlag: "🇰🇭",
  slug: "angkor-wat-4-days",
  heroQuery: "angkor wat cambodia temple ruins sunrise khmer",
  heroAlt: "Angkor Wat Cambodia temple towers reflected in the moat at sunrise golden light",
  category: "Southeast Asia",
  date: "April 5, 2026",
  readTime: "14 min read",
  intro: "Angkor Wat at 5:30am — the five towers emerging from pre-dawn mist above a moat still as glass, a reflection that makes it impossible to tell where the stone ends and the sky begins, the air thick with incense from monks beginning their morning rounds — is one of the great sights on earth. Four days gives you Angkor Wat's famous sunrise, Bayon's 216 stone faces in golden afternoon light, the jungle-swallowed Ta Prohm before the tour groups arrive, and the outlying temples that most visitors miss completely.",
  stats: { duration: "4 Days", budgetFrom: "$35", bestMonths: "Nov–Mar", airport: "REP (Siem Reap International)" },
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
        ["E-Visa Required", "India is eligible for Cambodia's e-visa. Apply at evisa.gov.kh. Fee: $30 USD. Processing: 3 business days. Valid for 30 days, single entry. Apply at least 5 days before travel. The e-visa covers all tourist purposes including Angkor Wat — no separate Angkor pass visa needed."],
        ["Visa on Arrival", "Also available at Phnom Penh, Siem Reap, and Sihanoukville airports for $30 + passport-quality photo. The e-visa is preferable (avoids the queue at the VOA counter, which can take 45–60 minutes at peak times). Never pay touts outside the queue who offer to 'expedite' — the official VOA process is the only legitimate one."],
        ["Angkor Pass (Separate)", "The Angkor Archaeological Park requires a separate pass: 1-day $37, 3-day $62 (use within 7 days), 7-day $72 (use within 30 days). Buy only at the official Angkor ticket office on the road to the park — nowhere else is legitimate. The 3-day pass is by far the best value. Photo taken on the spot."],
        ["Currency", "US dollars are the de facto currency of Cambodia — nearly all transactions in Siem Reap are in USD. Cambodian riel (KHR) is used for small change (4,000 riel = $1). Bring small USD bills ($1, $5, $10) — tuk-tuk drivers and market vendors struggle to make change for $50/$100 notes."],
      ],
    },
    {
      flag: "🌍",
      title: "Western Passports",
      bg: "bg-teal-50", border: "border-teal-200", titleColor: "text-teal-800",
      items: [
        ["E-Visa Available", "US, UK, EU, Australian, Canadian passport holders are all eligible for Cambodia's e-visa ($30, 30 days single entry, evisa.gov.kh). Process takes 3 business days online. This is the recommended route — it lets you walk straight through the international arrivals lane rather than joining the VOA queue."],
        ["Visa on Arrival", "Available at all major international airports and the main land border crossings. $30 + passport photo. The VOA queue at Siem Reap Airport can be 40–60 minutes long during peak season (November–March). Factor this into your arrival planning — your tuk-tuk driver will be waiting outside."],
        ["Airport Transfer", "Siem Reap Airport is 8km from the town center. Official taxis cost $9 fixed; tuk-tuks cost $7–8. Your hotel will often arrange free pickup if you ask when booking. The drive is 15 minutes — the ancient moat and causeway of Angkor Wat are visible from the road 5 minutes before your hotel."],
        ["Angkor Pass Note", "The 3-day Angkor pass ($62) allows entry on any 3 days within a 7-day window — not necessarily consecutive. This means you can visit temples in the morning, take an afternoon off at your hotel pool, and use your third day on day 4. Excellent flexibility for the heat."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "$35–60/day",
      days: [
        {
          day: "Day 1",
          title: "Angkor Wat Sunrise + Main Temple",
          items: [
            "4:45am — Tuk-tuk to Angkor Wat for sunrise (negotiate $15–20 for a full-day tuk-tuk with the same driver — the best deal in Siem Reap). The driver will bring you at the same time each morning if you ask.",
            "5:00am — Enter through the main western causeway gate. Walk the full 475-meter causeway in the dark. Position yourself at the left pond (south reflecting pool) — the classic Angkor Wat reflection shot. The towers emerge as the sky lightens from black to purple to gold. This is 2 hours you'll never forget.",
            "7:00am — Once the main courtyard fills (8am), move to the outer galleries. The Churning of the Sea of Milk bas-relief (south gallery, eastern section) stretches for 49 meters — 88 gods pulling on a giant serpent to churn the cosmic ocean. It is the finest narrative stonework in the world.",
            "9:00am — Climb to the upper sanctuary (if open — restricted entry, timed tickets required, modest dress code strictly enforced: knees and shoulders covered). The 70-degree stone staircases to the top were built steep to symbolize the difficulty of reaching the gods.",
            "11:00am — Return to Siem Reap. Budget breakfast at a local noodle shop near the Old Market ($1.50 — try bai sach chrouk, pork and rice, the classic Cambodian breakfast).",
            "Afternoon rest (the temple complex is brutal in midday heat — 35–38°C November through March). Book your 3-day Angkor pass at the ticket office if you haven't already.",
            "6:00pm — Pub Street, Siem Reap ($2 Angkor beer, $3–5 amok curry, $2 lok lak). The street is pure tourist infrastructure but it's cheerful, cheap, and the nighttime ambience of the alley is enjoyable once.",
          ],
          cost: "$30–45 total (tuk-tuk + pass + meals)",
        },
        {
          day: "Day 2",
          title: "Angkor Thom, Bayon & Ta Prohm",
          items: [
            "6:30am — Tuk-tuk to Ta Prohm (15 minutes from Siem Reap). Arrive before 8am — before the tour buses. The temple that inspired Lara Croft's Tomb Raider is exactly what it looks like in the films: massive silk-cotton and strangler fig tree roots embracing stone towers, roots the size of walls splitting galleries, silence except for birdsong. The most photogenic site in Angkor. At 8am it transforms into a crowded photo queue.",
            "9:00am — Drive through the south gate of Angkor Thom — the 8-meter faces on the gate towers are your introduction to the Bayon's visual language. The 12th-century walled city of Angkor Thom is 9 square kilometers — larger than medieval London.",
            "9:30am — Bayon Temple: 54 towers, each carved with four enormous faces (216 faces total) gazing in all four compass directions. The face of the bodhisattva Avalokiteshvara — or possibly of the king Jayavarman VII himself — repeated endlessly in stone. It is the most architecturally unusual temple in the Angkor complex. Come in late morning when the sun angles create dramatic shadow across the faces.",
            "11:00am — Baphuon Temple (pyramid form, recently restored by French archaeologists — a 50-year project completed 2011) + Phimeanakas (royal palace temple, most intimate of the Angkor Thom cluster) + the Elephant Terrace (300 meters of carved elephants in parade formation).",
            "12:30pm — Lunch at a local restaurant outside the Angkor complex (the restaurants inside are overpriced). Chicken lok lak with rice and a cold Angkor beer ($5–7 total).",
            "2:00pm — Banteay Kdei (12th century, quiet, few tourists, excellent carved pediments, free with pass). Rest in the shade of the eastern courtyard — this is a good hour to simply sit in a Khmer temple and absorb the scale of what was built here.",
            "Evening: Pub Street or a cooking class ($10–15 for a 2-hour class covering 3 Cambodian dishes — book at any tour agent on the main street).",
          ],
          cost: "$25–40 total (tuk-tuk + lunch + evening)",
        },
        {
          day: "Day 3",
          title: "Banteay Srei + Preah Khan + Neak Pean",
          items: [
            "7:00am — Early departure for Banteay Srei (32km north of Siem Reap, 45 minutes by tuk-tuk, add $5–8 to your daily tuk-tuk rate). The 10th-century 'Jewel of Khmer Art' is built from pink sandstone that carves more finely than the standard laterite. Every surface is covered with mythological bas-reliefs executed at a level of detail that seems physically impossible — devatas (female divine figures), kala (demon faces), intricate scrolling vegetation. UNESCO considers it among the finest examples of Khmer stonework. $37 separate admission.",
            "10:00am — Return toward Angkor via Preah Khan (12th century, built by Jayavarman VII as a city temple — its roofless galleries and mature-tree-entwined towers give it a more jungle-embedded atmosphere than the main complex). A two-story structure with round columns (unique in Khmer architecture — most columns are square) marks the spot where a statue of the king's father once stood.",
            "12:00pm — Neak Pean (set on an artificial island in a large reservoir, a small but jewel-like temple representing a legendary Himalayan lake). The central pond system and the statues emerging from the water are extraordinary — best photographed in morning light, which you've already missed, but still worth 30 minutes.",
            "1:30pm — Preah Ko (one of the oldest temples in the Angkor area, 9th century, six brick towers standing in rice paddy landscape — a completely different atmosphere from the main complex).",
            "3:00pm — Return to Siem Reap. Rest, shower, and a massage ($8–12 for a traditional Khmer massage at any reputable spa on the main street).",
            "7:00pm — Final Siem Reap dinner: Cuisine Wat Damnak or Malis for upmarket Cambodian food ($15–25/person) — the best introduction to authentic Cambodian cuisine beyond the Pub Street basics.",
          ],
          cost: "$40–65 total (Banteay Srei entry + transport + dinner)",
        },
        {
          day: "Day 4",
          title: "Tonlé Sap Lake + Phnom Bakheng Sunset",
          items: [
            "8:00am — Tonlé Sap Lake tour ($15–20/person, book the night before through any tour agent). The largest freshwater lake in Southeast Asia — 16,000 km² at peak flood season, home to floating villages where entire communities live on water year-round: schools, churches, restaurants, and basketball courts all floating.",
            "The 30-minute boat ride across the lake passes fish trap arrays and water hyacinth mats before reaching Kompong Phluk or Chong Khneas floating village. The communities here depend on the lake's extraordinary productivity — the Mekong's annual flood pulse pushes fish into the lake each rainy season, making it one of the most productive freshwater fisheries in the world.",
            "11:00am — Return to Siem Reap for lunch and rest during the hottest part of the day. Pack and check out of accommodation if departing the following morning.",
            "4:30pm — Phnom Bakheng sunset: the hilltop 10th-century temple that gives the best panoramic view over the Angkor Archaeological Park. Limited to 300 visitors at sunset (arrive by 4pm to secure a spot — the climb takes 15 minutes on a steep stone path). The view of Angkor Wat's towers on the horizon at sunset is genuinely breathtaking.",
            "7:00pm — Departure dinner in Siem Reap: any restaurant in the Old Market area. The Cambodian fish amok (fish curry steamed in a banana leaf with coconut cream and kaffir lime — the national dish) is best at smaller family restaurants away from Pub Street.",
          ],
          cost: "$25–45 total (lake tour + sunset temple + final dinner)",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "$100–200/day",
      days: [
        {
          day: "Day 1",
          title: "Angkor Wat Sunrise with Guide",
          items: [
            "Pre-book a licensed Angkor guide for days 1 and 2 ($25–35/day for a licensed English-speaking guide — arranges transport, knows the restricted-access areas, and makes the history live). Book through your hotel or the licensed guide association in Siem Reap.",
            "5:00am — Angkor Wat sunrise with your guide. The key upgrade: your guide knows exactly where to stand for the best reflection shot (south pond, 30 degrees from center) and will explain the cosmological symbolism of the temple's layout — it represents Mount Meru, the axis of the Hindu universe, surrounded by the cosmic ocean.",
            "Full morning temple exploration with context: the guide translates the Sanskrit inscriptions on the bas-reliefs and identifies the 37 different styles of devata across the galleries.",
            "Lunch at a mid-range restaurant in Siem Reap ($10–15/person for a proper Cambodian set menu).",
            "Evening: Phare Circus performance ($18–25/person) — Cambodia's most celebrated social enterprise, training performers rescued from poverty. The shows blend acrobatics, theatre, and traditional Cambodian storytelling. Book ahead.",
          ],
          cost: "$80–130 total (guide + pass + circus + meals)",
        },
        {
          day: "Day 2",
          title: "Grand Circuit with Expert Context",
          items: [
            "7:00am — Ta Prohm with guide before tourist crowds. The guide identifies the flora: the massive trees are silk-cotton (Ceiba pentandra) and strangler figs (Ficus species). The roots grow 3cm per year — some of the trees growing through Ta Prohm are 300 years old.",
            "Bayon Temple with extended time: your guide walks you through each face tower and explains Jayavarman VII's religious-political project — building an empire identity around Buddhism after centuries of Hinduism.",
            "Banteay Kdei + the Srah Srang reservoir at midday — the royal bathing pool with a beautiful 12th-century stone landing terrace. Quiet, photogenic, almost always deserted.",
            "Afternoon: cycling the outer moat path on bicycles rented through your hotel ($3–5/day) — the 12km circumference path through rice paddies and traditional Khmer villages is more peaceful than any interior temple road.",
            "Dinner at Haven Restaurant (trains disadvantaged youth in hospitality, $15–25/person for excellent Khmer-French fusion) or Cuisine Wat Damnak.",
          ],
          cost: "$90–150 total (guide day 2 + cycling + dinner)",
        },
        {
          day: "Day 3",
          title: "Banteay Srei + Kbal Spean River",
          items: [
            "7:00am — Private tuk-tuk to Banteay Srei with guide ($40–60 for private vehicle + guide combination for the day). The pink sandstone carvings are better understood with explanation — the guide identifies which deities are depicted and how the iconography differs from the main Angkor complex.",
            "10:00am — Continue to Kbal Spean ('Bridge of the Head of the River'), an additional 8km north — a 2km jungle hike to a river where thousands of lingas (Shiva fertility symbols) are carved directly into the riverbed. Water flows over them, symbolically fertilising the entire Angkor plain downstream. The setting is extraordinary: a jungle waterfall over carved stone.",
            "Lunch at a local restaurant in the village near Banteay Srei ($5–8 per person — basic but fresh).",
            "Afternoon: Angkor National Museum in Siem Reap ($15) — the context it provides for all four days of temple visits is enormous. The Hall of a Thousand Buddhas is architecturally spectacular.",
            "Evening: Siem Reap spa and massage ($15–25 for 60-minute traditional Khmer massage) + dinner at Old House Restaurant for Khmer BBQ ($12–18).",
          ],
          cost: "$80–130 total (private transport + museum + spa + meals)",
        },
        {
          day: "Day 4",
          title: "Tonlé Sap + Cooking Class",
          items: [
            "Morning: Private Tonlé Sap boat tour ($30–45 for a private boat to the floating village, more intimate than the group tour) + a visit to the stilted village of Kompong Khleang (less touristed than the main floating village, deeper in the lake, $25–35 for the longer tour).",
            "Afternoon: Cooking class at a local cooking school ($25–35, 3 hours — you cook 3 dishes and eat them). The best introduction to Cambodian cuisine: amok, lok lak, and a Khmer dessert. Recipes to take home.",
            "Late afternoon: Phnom Bakheng sunset (arrive 4pm). The view over the Angkor archaeological zone from the hilltop temple in the last light is the perfect farewell to the complex.",
            "Final Siem Reap dinner at your choice of the Old Market area restaurants — by now you know what you want.",
          ],
          cost: "$70–120 total (lake tour + cooking class + sunset + dinner)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "$350–1000+/day",
      days: [
        {
          day: "Day 1",
          title: "Private Angkor Sunrise & Amansara Experience",
          items: [
            "Stay at Amansara ($600–1,200/night) — Cambodia's most celebrated hotel, a 1960s villa that once hosted Jacqueline Kennedy, converted to a 24-suite boutique hotel inside the Angkor Archaeological Zone. Or Belmond La Résidence d'Angkor ($300–600/night) with teak pavilions over a river.",
            "5:00am — Private expert guide and Amansara tuk-tuk to Angkor Wat. The hotel's guides are among the best in Cambodia — many hold postgraduate degrees in Khmer archaeology. The private access means positioning yourself precisely at the reflection pool before anyone else.",
            "Exclusive Angkor experiences available through Amansara: early-morning access arrangements, private after-hours temple visits (limited availability), dawn picnic breakfast inside the Angkor complex.",
            "Midday spa at Amansara ($120–250 for 90-minute treatment) + lunch at the resort's pool terrace.",
            "Evening: Private traditional Khmer apsara dance performance arranged at the hotel ($200–400 for a private performance for your group — the same dancers who perform at the national theatre, in your villa courtyard).",
          ],
          cost: "$800–1,400 total (hotel + guide + private performance)",
        },
        {
          day: "Day 2",
          title: "Helicopter over Angkor + Grand Circuit",
          items: [
            "8:00am — Helicopter flight over the Angkor Archaeological Zone ($350–500 for a 30-minute flight) — the only way to understand the full scale of the Khmer empire's capital. From the air, Angkor Wat's moat (190 meters wide, 1.5km on each side) reads as a geometric masterpiece.",
            "Full-day private expert guide through the Grand Circuit: Angkor Thom, Bayon, Baphuon, Ta Prohm. Your guide carries academic texts and can show you specific panels in the bas-reliefs that most guides walk past.",
            "Lunch at FCC Angkor (Foreign Correspondents' Club) — colonial-era building, excellent Cambodian-French menu, $25–35/person.",
            "Late afternoon: private photography guide for golden-hour shooting at Bayon (the faces in late afternoon light are extraordinary — the guide positions you at the specific towers with the best western exposure).",
            "Dinner: Cuisine Wat Damnak chef's table experience ($65–80/person for a 6-course tasting menu of modern Cambodian cuisine — one of the best restaurants in Southeast Asia).",
          ],
          cost: "$700–1,100 total (helicopter + guide + photography + dinner)",
        },
        {
          day: "Day 3",
          title: "Banteay Srei Deep Dive + Remote Temples",
          items: [
            "Private vehicle to Banteay Srei with an archaeologist guide who specialises in pre-Angkorean period art ($150–250 for specialist guide day rate). The level of iconographic analysis available from a specialist transforms the experience entirely.",
            "Continue to Kbal Spean and Beng Mealea (80km east of Siem Reap, $5 entry) — a massive 12th-century temple that has never been fully restored. Beng Mealea is Angkor Wat's size but consumed entirely by jungle; it looks like the ruins most people imagine all the Angkor temples to look like. A specialist guide makes it legible.",
            "Lunch en route at a local Cambodian family restaurant arranged by your guide ($8–12 per person — the guide's local relationships mean you eat in places with no English signage and extraordinary food).",
            "Return to Siem Reap for spa, hotel pool, and rest.",
            "Evening: private sunset boat on Tonlé Sap lake ($80–120 for a private boat) — watching the sun drop behind the Cardamom Mountains over Southeast Asia's largest lake, with cold Cambodian beer on board.",
          ],
          cost: "$400–700 total (specialist guide + remote temples + private lake sunset)",
        },
        {
          day: "Day 4",
          title: "Siem Reap Departure in Style",
          items: [
            "Final sunrise at Angkor Wat — even the third time is moving. By day 4 you have context for every panel of the bas-reliefs; the sunrise hits differently when you know what you're looking at.",
            "Late checkout at Amansara or Belmond. Final pool morning, final hotel breakfast.",
            "Private transfer to Siem Reap Airport ($25–40 for a hotel-arranged vehicle, clean and air-conditioned).",
            "Airport lounge access available at REP for $30–40. Siem Reap Airport is small — you need 90 minutes before departure, not more.",
          ],
          cost: "$150–350 total (final temple + checkout + transfer)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "$10–25", food: "$8–15", transport: "$10–15", activities: "$15–25", total: "$35–60/day" },
    { tier: "✨ Mid-Range", accommodation: "$40–90", food: "$20–40", transport: "$15–30", activities: "$25–50", total: "$100–200/day" },
    { tier: "💎 Luxury", accommodation: "$200–800", food: "$60–150", transport: "$50–150", activities: "$80–200", total: "$350–1,000+/day" },
  ],
  mistakes: [
    {
      icon: "🎟️",
      title: "Buying Only the 1-Day Angkor Pass",
      desc: "The Angkor Archaeological Zone contains 70+ temples spread over 400 square kilometers. A 1-day pass ($37) gives you one full day — enough for Angkor Wat and possibly Bayon. But you'll miss Ta Prohm, Banteay Srei (the finest carvings in the complex), Preah Khan, and the outer circuit entirely. The 3-day pass is $62 — $25 more for three times the temple access. For anyone visiting Cambodia for the first time, the 3-day pass is the only rational choice.",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "☀️",
      title: "Visiting Angkor Wat at Midday in the Heat",
      desc: "The Angkor complex sits at 13° north latitude. In November–March (peak season) the midday temperature is 35–38°C with direct equatorial sun and no shade on the main causeway or upper galleries. Heat exhaustion is a documented tourist risk. Visit temples from 5:30–11am, then rest during 12–3pm (hotel pool, air-conditioned café), then return for 3:30–5:30pm. This schedule also gives you the best light for photography — the midday sun bleaches the stone to grey.",
      color: "bg-orange-50 border-orange-200",
    },
    {
      icon: "🏛️",
      title: "Skipping Bayon for Angkor Wat Alone",
      desc: "Most visitors spend their entire time at Angkor Wat proper and neglect the Angkor Thom walled city complex, which contains Bayon — arguably the most architecturally remarkable temple in the zone. The 216 carved faces on 54 towers create a visual experience unlike anything in Angkor Wat. Angkor Wat is magnificent symmetry; Bayon is magnificent strangeness. Both are essential. Budget at least 2 hours for Bayon.",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      icon: "📸",
      title: "Missing the Ta Prohm Tree Roots Photograph",
      desc: "Ta Prohm's famous Tomb Raider trees (the massive silk-cotton roots embracing the stone gallery) are in specific locations in the east gallery and the 'Tomb Raider' courtyard. The crowds funnel through these spots from 8:30am onward. Arrive at 6:30–7:00am. The light is beautiful, you are often the only person there, and the photographs you take will look nothing like the ones shot at 10am with 50 other tourists in frame.",
      color: "bg-pink-50 border-pink-200",
    },
  ],
  tips: [
    {
      icon: "🌅",
      title: "Angkor Wat 5:30am Sunrise: South Pond Reflection Position",
      desc: "The reflecting pond on the left (south) side of the main causeway gives the classic Angkor Wat reflection shot — towers above, towers below. Position yourself 30 degrees left of the central axis for the composition where all five towers are visible. Arrive before 5am to secure this spot. In November–February, the sun rises directly behind the central tower, creating a silhouette effect. In March–April, the sunrise position shifts — the reflection is different but equally beautiful.",
      color: "bg-amber-50 border-amber-200",
    },
    {
      icon: "🌳",
      title: "Ta Prohm at 8am: Golden Light on the Tree Roots",
      desc: "Ta Prohm faces east, so morning light enters through the eastern gallery. At 8am (before the tour groups arrive at 8:30am), the low sun creates shaft-of-light effects through the tree-root-covered ruins that are extraordinary for photography. The Tomb Raider courtyard (follow the signs to the 'East Gopura') has the most famous single tree growing through a stone doorway — arrive there first and you'll have it to yourself for 15 minutes.",
      color: "bg-teal-50 border-teal-200",
    },
    {
      icon: "😊",
      title: "Bayon Faces in Afternoon Light: 3pm Is Optimal",
      desc: "Bayon faces west. In the afternoon, the sun illuminates the western faces of the towers with warm golden light while the eastern faces fall into shadow — creating the dramatic contrast that makes the 216 faces most striking in photographs. Visit Bayon as your last stop of the afternoon circuit (3–4pm) rather than the morning. At 3pm in November–March, the stone is warm orange-gold and the shadows carve deep under the stone eyelids.",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "🚲",
      title: "Tuk-Tuk for the Temple Complex: $15–20/Day All-In",
      desc: "Cycling is romanticised but in 35°C heat over rough laterite roads it becomes a hardship by 9am. Hire a tuk-tuk driver for the day ($15–20 for a full day including all temple circuit driving). Ask your hotel for a recommended driver — a good tuk-tuk driver knows the quieter paths, the best photography spots, and will tell you what time to arrive at each temple for ideal conditions. Find a driver you like on day 1 and keep them for the whole trip.",
      color: "bg-blue-50 border-blue-200",
    },
  ],
  faqs: [
    {
      q: "Do Indian passport holders need a visa for Cambodia?",
      a: "Yes. Indian passport holders need a Cambodia e-visa ($30 USD, 30 days single entry). Apply at evisa.gov.kh — the official portal. Processing takes 3 business days; apply at least a week before your trip. Alternatively, visa on arrival is available at Siem Reap Airport ($30 + passport photo), but the queue can be 45–60 minutes during peak season. The e-visa is the recommended option for its convenience.",
    },
    {
      q: "Is the 1-day or 3-day Angkor pass better value?",
      a: "The 3-day pass ($62) is far better value than three separate 1-day passes ($111 total) and allows you to see the full scope of the Angkor complex. The archaeological zone contains 70+ temples across 400 square kilometers — you cannot meaningfully see it in one day. The 3-day pass allows entry on any 3 days within a 7-day window (days do not have to be consecutive). For a first visit to Angkor, the 3-day pass is the only rational choice.",
    },
    {
      q: "What is the best time of year to visit Angkor Wat?",
      a: "November to March is the best time: dry season, lower humidity, temperatures of 25–32°C in the early morning. Peak season is December–January when the light is softest and the air clearest. Avoid April–May (extreme heat, 38–42°C) and June–October (rainy season — the temples themselves remain open and are actually stunning in the rain, but access roads can flood and the humidity is intense). November and March are the shoulder season sweet spots: great conditions, fewer tourists than December–January.",
    },
    {
      q: "How do you get from Phnom Penh to Siem Reap?",
      a: "By bus: 5–6 hours, $6–10 on Giant Ibis or Mekong Express (the two most reliable operators with modern air-conditioned buses). Book online. By plane: 45 minutes, $40–80 on Cambodia Angkor Air, Lanmei Airlines, or JC International. The flight is worth it if your time is short. By boat: a tourist speedboat used to run the Tonlé Sap lake route (6 hours, beautiful) but services have become unreliable — check current availability before planning around it.",
    },
    {
      q: "How does Angkor Wat compare to other Asian temple complexes?",
      a: "Angkor Wat is the largest religious monument ever constructed by humanity — 162 hectares, built in 37 years (1113–1150 CE). By comparison, Borobudur in Indonesia covers 2.5 hectares and Pagan/Bagan in Myanmar has 2,000+ temples spread over a much larger area. The Angkor complex as a whole (including Angkor Thom and the outlying temples) makes it the largest pre-industrial city ever discovered. Nothing else on earth is quite like it.",
    },
  ],
  combineWith: ["siem-reap-3-days", "phnom-penh-2-days", "mekong-delta-3-days"],
  relatedSlugs: ["bagan-4-days", "mekong-delta-3-days", "luang-prabang-4-days", "chiang-mai-4-days"],
  galleryQuery: "angkor wat cambodia temple sunrise bayon ta prohm khmer",
};

export const metadata: Metadata = {
  title: "Angkor Wat in 4 Days: Sunrise, Bayon, Ta Prohm & Siem Reap (2026)",
  description: "4 complete Angkor Wat itineraries with sunrise reflection secrets, Bayon face-tower strategy, Ta Prohm timing tips, and real USD costs from $35/day.",
  keywords: ["angkor wat itinerary 4 days", "angkor wat sunrise tips", "siem reap travel guide 2026", "cambodia temple guide", "bayon temple", "ta prohm tomb raider", "angkor pass cost"],
  openGraph: {
    title: "Angkor Wat in 4 Days: Sunrise, Bayon & Ta Prohm (2026)",
    description: "Sunrise reflection secrets, Bayon face-tower strategy, Ta Prohm timing, and real USD costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&q=80", width: 1200, height: 630, alt: "Angkor Wat Cambodia sunrise temple reflection" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Angkor Wat in 4 Days (2026)", description: "Sunrise, Bayon, Ta Prohm, Banteay Srei — complete strategy for every budget." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/angkor-wat-4-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Angkor Wat in 4 Days: Sunrise, Bayon, Ta Prohm & Siem Reap (2026)",
      datePublished: "2026-04-05T00:00:00Z",
      author: { "@type": "Organization", name: "IncredibleItinerary" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&q=80",
      description: "4 complete Angkor Wat itineraries with sunrise reflection secrets, Bayon face-tower strategy, Ta Prohm timing tips, and real USD costs.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Angkor Wat 4 Days", item: "https://www.incredibleitinerary.com/blog/angkor-wat-4-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Angkor Wat, Siem Reap, Cambodia",
      geo: { "@type": "GeoCoordinates", latitude: 13.4125, longitude: 103.8670 },
      description: "Angkor Wat is the largest religious monument in the world, a 12th-century Khmer temple complex and UNESCO World Heritage Site in northwest Cambodia.",
      touristType: ["Cultural tourists", "Architecture enthusiasts", "Photography enthusiasts", "History buffs"],
    },
  ],
};

export default function AngkorWatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UniversalBlogClient data={data} />
    </>
  );
}
