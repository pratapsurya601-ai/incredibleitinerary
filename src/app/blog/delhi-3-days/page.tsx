import type { Metadata } from "next";
import DelhiClient from "./DelhiClient";

const _data = {
  destination: "Delhi",
  country: "India",
  countryFlag: "🇮🇳",
  slug: "delhi-3-days",
  heroQuery: "delhi india gate red fort old delhi spices",
  heroAlt: "Delhi India Gate at sunset with the hexagonal war memorial lit against the evening sky",
  category: "India",
  date: "April 6, 2026",
  readTime: "14 min read",
  intro: "Delhi is two cities occupying one — and that collision is exactly what makes three days here feel like three weeks anywhere else. Old Delhi's lanes still smell of cardamom and frying jalebi, the same lanes where Mughal emperors once paraded on elephants. New Delhi's broad Lutyens avenues lead to monuments so large they challenge comprehension. Day one belongs to the Mughals. Day two to the British and the medieval. Day three to wherever the city takes you — Purani Dilli at dusk, Dilli Haat with its craft villages, or the Agra train for one impossible pre-dawn Taj Mahal moment.",
  stats: { duration: "3 Days", budgetFrom: "₹1,200", bestMonths: "Oct–Mar", airport: "DEL (Indira Gandhi International)" },
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
      title: "Indian Citizens — Domestic Travel",
      bg: "bg-orange-50", border: "border-orange-200", titleColor: "text-orange-800",
      items: [
        ["No Visa Required", "Delhi is a domestic destination for Indian passport holders. Any government-issued photo ID (Aadhaar card, PAN card, driving licence, or passport) is accepted for domestic flights, trains, and hotel check-in. Aadhaar is sufficient everywhere."],
        ["Delhi Metro Tourist Card", "The Delhi Metro Tourist Card (₹200 for 1 day, ₹500 for 3 days, with ₹50 refundable deposit) gives unlimited Metro travel on all Delhi Metro lines. Buy it at any major Metro station's token vending machine or customer service window. Far more economical than buying individual tokens."],
        ["Train Bookings to Delhi", "Book IRCTC trains to Hazrat Nizamuddin (NZM), New Delhi (NDLS), or Old Delhi (DLI) on irctc.co.in 60 days ahead. New Delhi station is the most central. Hazrat Nizamuddin is closer to South Delhi and Agra-bound trains."],
      ],
    },
    {
      flag: "🌍",
      title: "International Visitors",
      bg: "bg-blue-50", border: "border-blue-200", titleColor: "text-blue-800",
      items: [
        ["e-Tourist Visa", "Most nationalities can apply for an Indian e-Tourist Visa at indianvisaonline.gov.in. 30-day single entry: USD 25. 1-year multiple entry: USD 40. Apply minimum 4 business days before arrival. The approval email must be printed and presented at immigration. DEL T3 has dedicated e-Visa immigration counters — use them to avoid the general queue."],
        ["Airport to Delhi City", "DEL T3 has a direct Delhi Metro connection (Airport Express Line) to New Delhi station in 22 minutes (₹60). Trains run every 15 minutes from 4:45am to 11:30pm. For luggage-heavy arrivals, pre-paid taxi counters in arrivals charge ₹350–600 to central Delhi depending on distance. Avoid unauthorized cab touts inside the terminal."],
        ["SIM Card at DEL", "Airtel and Jio counters in T3 arrivals (past customs) issue prepaid tourist SIMs. Jio's ₹349 plan gives 2GB/day for 28 days. Bring passport + 2 passport photos (or use the photo booth in arrivals, ₹80 for 4 prints). SIM activation takes 2–4 hours."],
        ["Currency Exchange", "Thomas Cook and Centrum Forex counters in T3 arrivals offer competitive rates (better than airport-front kiosks). HDFC, ICICI, and SBI ATMs in arrivals dispense up to ₹20,000 per transaction. Inform your home bank before travel. Forex cards (BookMyForex, Thomas Cook) are the most economical option for international visitors holding multiple currencies."],
      ],
    },
  ],
  plans: [
    {
      label: "Budget",
      sub: "₹1,200–2,500/day",
      days: [
        {
          day: "Day 1",
          title: "Old Delhi — Mughals, Markets & Chaat",
          items: [
            "7:00am — Red Fort (Lal Qila) opens at sunrise. Entry ₹35 for Indians. Arrive at opening to avoid crowds — the Diwan-i-Aam (Hall of Public Audience), Diwan-i-Khas, and the Pearl Mosque are best experienced before the 10am rush. Pre-book on ASI's website (asi.payumoney.com) to skip the cash queue.",
            "9:00am — Walk to Chandni Chowk via the Chatta Chowk bazaar exit. The main road is pedestrianised from the Red Fort to the Town Hall — no vehicles. The 17th-century stepwell (Hira Mahal Vav) is 200 metres down Dariba Kalan lane.",
            "9:30am — Breakfast at Paranthe Wali Gali, Chandni Chowk — the narrow lane off the main chowk with 5–6 paratha stalls. Stuffed paratha with aloo, mooli, or paneer: ₹40–60 per piece, served with dahi and achar. The best is Kanhaiya Lal Durga Prasad Dixit at the lane entrance.",
            "11:00am — Jama Masjid — India's largest mosque, built by Shah Jahan in 1656. Entry free (₹300 to take camera inside, mobile photography free). Climb the south minaret for a panoramic view over Old Delhi's rooftops: ₹100.",
            "1:00pm — Lunch at Karim's, Gali Kababiyan (30 seconds from Jama Masjid south gate) — mutton seekh kebab ₹180, mutton korma ₹220, roomali roti ₹25. India's most famous Mughal restaurant since 1913. Arrive before 1:30pm or queue 30+ minutes.",
            "3:00pm — Khari Baoli Spice Market — Asia's largest wholesale spice market, two lanes off Chandni Chowk near Fatehpuri Mosque. The colours, aromas, and 100-kg sacks of red chilli, cumin, and cardamom are extraordinary. You don't need to buy anything.",
            "5:30pm — Auto or Metro (Chandni Chowk station, Yellow Line) to Connaught Place for evening chai at United Coffee House, Inner Circle — chai ₹60, the last surviving art deco café in CP.",
            "7:30pm — Dinner at Bengali Market, Minto Road — Nathu's Sweets for dahi bhalla and chaat (₹80–120 per plate), then Bengali Market's tiny dhabas for dal makhani and tandoori roti (₹180–250 for a full meal).",
          ],
          cost: "₹700–1,100 total",
        },
        {
          day: "Day 2",
          title: "New Delhi — India Gate, Qutub & Humayun's Tomb",
          items: [
            "7:30am — India Gate at sunrise — the 42-metre war memorial on Kartavya Path is most photogenic in early morning light before the tourist coaches arrive. Amar Jawan Jyoti (the eternal flame at the foot) was merged with the National War Memorial in 2022. Entry free, always accessible.",
            "9:00am — Delhi Metro (Central Secretariat station, Yellow/Violet Line) to Qutub Minar: transfer to Yellow Line south toward Huda City Centre, alight at Qutub Minar station, 10-minute walk. Total Metro fare: ₹40.",
            "9:30am — Qutub Minar complex (₹35 for Indians) — the 73-metre 12th-century minaret, the Iron Pillar (resisted rust for 1,600 years), the Quwwat-ul-Islam mosque (the first mosque built in India), and the Alai Darwaza. Budget 1.5 hours. Best visited before 11am.",
            "11:30am — Auto to Humayun's Tomb (₹80–100, or Metro to JLN Stadium + 15-minute walk). Entry ₹35 for Indians. The 16th-century Mughal garden tomb that directly inspired the Taj Mahal — its proportions, red sandstone and white marble inlay, and the charbagh garden are magnificent. 1 hour.",
            "1:00pm — Lunch at Sunder Nagar Market, 10 minutes from Humayun's Tomb — Triveni Terrace Café (₹120–200 for lunch thali) or Potbelly Rooftop Café, Shahpur Jat (₹180–280 mains, rooftop, 15-minute auto ride).",
            "3:00pm — Lodhi Garden (free, open 5am–8pm) — a 90-acre park with the 15th-century Lodi Dynasty tombs dispersed across manicured lawns. The Muhammad Shah tomb and Bada Gumbad are the finest. Popular with joggers, families, and lovers in equal measure.",
            "5:30pm — Hauz Khas Village — the medieval reservoir, 13th-century madrasa and mosque ruins on the hillock above the lake are free to explore. The surrounding lanes have Delhi's best independent cafés, vintage boutiques, and streetwear stores.",
            "8:00pm — Dinner at Sarvana Bhavan, Connaught Place (Inner Circle, P Block) — South Indian, masala dosa ₹120, filter coffee ₹60. Or Wengers Deli, A Block CP for club sandwiches and cold coffee (₹150–250).",
          ],
          cost: "₹600–1,000 total",
        },
        {
          day: "Day 3",
          title: "Akshardham / Dilli Haat & Purani Dilli at Dusk",
          items: [
            "8:30am — Akshardham Temple (Noida Mor area, NH24 — Metro to Akshardham station, Blue Line). Entry to the main monument is free. No photography of the main temple permitted and no electronic devices — leave phone/camera in the cloakroom (₹25). The 234-foot pink sandstone and marble complex is among the most technically elaborate Hindu temples built in the modern era. Budget 2.5 hours.",
            "11:30am — Return Metro to INA station (Yellow Line). Dilli Haat, INA (entry ₹100) — a permanent craft bazaar with rotating stalls from every Indian state. Pashmina shawls from Srinagar, Channapatna wooden toys, Madhubani paintings, Kutch embroidery. Real artisans, fair prices. Good for gifts.",
            "1:30pm — Lunch inside Dilli Haat — each state's stall serves regional food. Rajasthani dal baati churma (₹120), Kashmiri rogan josh (₹180), Odisha pithas (₹60). The variety in one spot is India's best culinary sampler.",
            "3:30pm — Safdarjung's Tomb (₹35 for Indians, 10-minute Metro from INA to Jor Bagh or short auto) — the last great Mughal garden tomb in Delhi, almost always quiet. Built 1754, the garden is a calm alternative to the crowded Humayun complex.",
            "5:30pm — Return to Old Delhi for the evening. Dariba Kalan lane for silver jewellery and traditional bangles. Kinari Bazaar (next lane) for wedding accessories and zari work. This is Chandni Chowk at its most concentrated.",
            "7:30pm — Dinner at Al Jawahar, Matia Mahal Chowk (opposite Jama Masjid) — mutton nihari ₹220, baida roti ₹80, kheer ₹60. Founded in 1947 and unchanged since. A better Mughal dining experience than most hotel restaurants charging 10x the price.",
            "9:00pm — Walk to the Jama Masjid steps at night — the mosque lit from outside, the Red Fort floodlit to the east, and the narrow lanes of Old Delhi humming with late-night street food and chai stalls.",
          ],
          cost: "₹500–900 total",
        },
      ],
    },
    {
      label: "Mid-Range",
      sub: "₹5,000–10,000/day",
      days: [
        {
          day: "Day 1",
          title: "Old Delhi with Expert Guide + Mughal Dinner",
          items: [
            "8:00am — Check into The Claridges, Aurangzeb Road (₹8,000–12,000/night) or ITC Maurya, Sardar Patel Marg (₹9,000–14,000/night) — both in central New Delhi with excellent Metro access.",
            "9:00am — Red Fort with a Khaki Tours guide (₹1,800/person, khakitours.com) — the pre-booked ticket and guided context transforms the monument. The sound-and-light show (₹80, evenings only) is separate and worth attending if you return.",
            "11:00am — Chandni Chowk guided food walk with Delhi Food Walks (₹1,500/person, delhifoodwalks.com) — 3 hours covering Paranthe Wali Gali, Ghantewala Halwai (the 1790 sweet shop), Giani's faluda, Old Famous Jalebi Wala. The guide context on each 100-year-old institution is exceptional.",
            "1:30pm — Jama Masjid and Karim's lunch — mutton burra kebab ₹280, chicken Jahangiri ₹320, tandoori roti ₹30. Wine not served (no alcohol anywhere in Karim's or Old Delhi), order nimbu pani.",
            "4:00pm — Auto to Crafts Museum, Pragati Maidan (entry ₹20) — Delhi's best and most-overlooked museum, with complete regional village reconstructions and a textile gallery holding 22,000 objects. Often empty.",
            "7:30pm — Dinner at Bukhara, ITC Maurya — India's most legendary restaurant, serving the same dal bukhara slow-cooked for 18 hours since 1977. Dal bukhara ₹950, sikandari raan (leg of lamb, 24-hour marinade) ₹3,800. Reserve 1 week ahead. Smart casual required.",
          ],
          cost: "₹6,000–9,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "New Delhi Icons + Hauz Khas & Dusk at Lodhi",
          items: [
            "8:30am — India Gate and Kartavya Path (formerly Rajpath) walking circuit. The 3km ceremonial axis from Rashtrapati Bhavan to India Gate is Lutyens Delhi's spine. The rose garden near the North and South Blocks is open to public.",
            "10:00am — Rashtrapati Bhavan Museum (India's President's estate) — free entry, requires Aadhaar-based online registration at rb.nic.in. The Mughal Garden (Amrit Udyan) is open to public Feb–March seasonally. The museum wing is open year-round.",
            "12:00pm — Lunch at Indian Accent, The Lodhi Hotel (Lodhi Road) — India's finest contemporary Indian cuisine restaurant. Tasting menu ₹4,500/person (lunch menu ₹2,800). Reserve 2 weeks ahead. The chaat trolley starter alone is worth the visit.",
            "2:30pm — Humayun's Tomb (₹35) and the Aga Khan Trust-restored Sunder Nursery (free) adjacent to it — a 90-acre heritage garden with 280 species of trees, Mughal water channels, and 16th-century garden pavilions newly restored.",
            "5:00pm — Lodhi Garden at dusk — the monuments are lit from within; the garden atmosphere at golden hour is one of Delhi's finest free experiences.",
            "7:30pm — Hauz Khas Village for drinks at Kunzum Travel Café (donation-model café, extremely laid-back) then dinner at Naivedyam (Hauz Khas Village main lane) — South Indian, thali ₹450, filter coffee ₹80.",
          ],
          cost: "₹5,500–8,500 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Agra Day Trip Option or Delhi Deep Dive",
          items: [
            "Option A — Agra Day Trip: Board the Gatimaan Express from Hazrat Nizamuddin (NZM) at 8:10am (₹755 chair car, 1h40min, India's fastest train). Arrive Agra Cantonment 9:50am. Taj Mahal (₹1,100 for Indian citizens) from 10am–1pm, Agra Fort (₹40) 2:00–3:30pm. Gatimaan return departs Agra at 5:50pm, arrives NZM 7:25pm. Book both trains and Taj tickets in advance.",
            "Option B — Delhi Deep Dive: Akshardham (free main temple) from 9am, then Dilli Haat INA (₹100) after noon, then Lodi Colony graffiti art district (free, South Delhi's open-air gallery) in the afternoon.",
            "Option B continued: Qutub Minar evening light show (₹60, book at ASI portal) at 7:30pm — the complex lit in orange and gold at night is a different monument than it is in daylight.",
            "Regardless of option — final dinner at Gulati Restaurant, Pandara Road Market (behind Khan Market) — North Indian, butter chicken ₹450, dal makhani ₹320, naan ₹45. Pandara Road is Delhi's most reliable neighbourhood for classic Punjabi restaurant cooking. Open past 11pm.",
            "Shopping note: Khan Market (10-minute walk from Pandara Road) — Delhi's most upscale market for books (Bahri Sons, Full Circle), spices (Good Earth), artisanal foods, and independent clothing. Open until 9pm.",
          ],
          cost: "₹4,000–7,000 total (excl. hotel, Agra option adds ₹2,500)",
        },
      ],
    },
    {
      label: "Luxury",
      sub: "₹15,000+/day",
      days: [
        {
          day: "Day 1",
          title: "Red Fort Private Tour & Mughal Feast",
          items: [
            "Check into The Imperial, Janpath (₹18,000–35,000/night) — Delhi's finest colonial-era hotel. The 1930s art deco property has the city's best art collection in its corridors, an outstanding spa, and Spice Route restaurant, one of India's great dining rooms.",
            "Private transfer to Red Fort with a luxury car service (hotel concierge or Savaari, ₹2,500–4,000 for the day with driver). Delhi Tourism's VIP entry (₹800/person) allows guided private groups to enter before public opening.",
            "9:30am — Private archaeological guide for Red Fort and Jama Masjid with Trident Tours (₹3,500 for 3-hour guided tour, tridentsafari.com). The Rang Mahal ceiling with its carved mirror ceiling and the Divan-i-Khas with its famous inscription ('If there is paradise on earth, it is here') take on a different dimension with expert context.",
            "1:00pm — Lunch at Lodi – The Garden Restaurant, Lodhi Road (₹600–1,200 per main, outdoor seating in a garden) — the most atmospheric lunch setting in Delhi.",
            "4:00pm — Private shopping tour of Dilli Haat with a craft consultant (arrange through The Imperial concierge) — knowing which stalls are run by master artisans versus commercial traders makes all the difference.",
            "9:00pm — Dinner at Spice Route, The Imperial — Southeast Asian and spice route cuisine, tasting menu ₹5,500/person. The hand-painted temple mural ceiling took 14 years to complete — the room is a work of art independent of the food.",
          ],
          cost: "₹18,000–28,000 total (excl. hotel)",
        },
        {
          day: "Day 2",
          title: "Mughal Monuments Private Circuit & Dum Pukht",
          items: [
            "8:00am — Sunrise at Humayun's Tomb in a private car before the public opening (gates open at 6am year-round). The tomb garden in early morning mist with no crowds is an experience that makes the monument comprehensible as a place of contemplation rather than a tourist site.",
            "10:00am — Qutub Minar with a private INTACH-certified guide (Indian National Trust for Art and Cultural Heritage, ₹2,000–3,000 for 2 hours). The guide can access restricted sections of the complex unavailable to independent visitors.",
            "1:00pm — Lunch at Le Cirque, The Leela Palace Delhi (Diplomatic Enclave) — Italian-French fine dining, three-course lunch ₹3,500/person.",
            "3:30pm — Sunder Nursery and Hazrat Nizamuddin Dargah — the Sufi shrine adjacent to Humayun's Tomb has Thursday evening qawwali performances (free, voluntary donation). Even outside qawwali evenings, the dargah compound is spiritually and architecturally compelling.",
            "6:00pm — Khan Market for books at Bahri Sons, single-origin coffee at Blue Tokai, artisan spices at Zirqa.",
            "9:00pm — Dinner at Dum Pukht, ITC Maurya — the other great dining room of the ITC. Awadhi cuisine, dum-cooked in sealed handi pots: dum gosht biryani ₹1,200, kakori kebab ₹850. The history and technique here are as important as the flavour.",
          ],
          cost: "₹16,000–25,000 total (excl. hotel)",
        },
        {
          day: "Day 3",
          title: "Private Agra or Spa Day & Farewell at Indian Accent",
          items: [
            "Option A — Private Agra by Gatimaan or Helicopter: Pawan Hans Helicopter services (Delhi–Agra, ₹25,000–40,000/person return, 45 minutes) operate seasonally from Safdarjung Airport — book through your hotel concierge. Private guide at Taj Mahal (₹3,000–5,000 for an Archaeological Survey of India-certified guide). Return by Gatimaan Express evening train.",
            "Option B — Delhi Luxury Day: Morning spa treatment at The Imperial Spa (90-minute Ayurvedic treatment, ₹5,500). Noon at the National Museum, Janpath (₹20, but the Harappan and Mughal galleries are world-class — this is not a tourist trap museum).",
            "Afternoon: Saket Select Citywalk or DLF Emporio mall for Indian luxury brands — Sabyasachi, Ritu Kumar, Good Earth flagship, Forest Essentials spa.",
            "6:00pm — Sunset from the rooftop terrace of The Imperial with cocktails from 1911 Bar — whisky-based cocktails from ₹950, bar snacks ₹400–700.",
            "9:00pm — Farewell dinner at Indian Accent, The Lodhi Hotel — the definitive modern Indian tasting menu. Chef Manish Mehrotra's menus change seasonally but always include the iconic meetha achaar pork ribs and the doda barfi treacle tart. Full tasting menu ₹5,500/person. Reserve 2–3 weeks ahead.",
          ],
          cost: "₹15,000–35,000 total (excl. hotel)",
        },
      ],
    },
  ],
  budgetTable: [
    { tier: "💰 Budget", accommodation: "₹400–1,000", food: "₹250–500", transport: "₹100–200", activities: "₹200–500", total: "₹950–2,200/day" },
    { tier: "✨ Mid-Range", accommodation: "₹4,000–8,000", food: "₹800–2,500", transport: "₹300–600", activities: "₹500–2,000", total: "₹5,600–13,100/day" },
    { tier: "💎 Luxury", accommodation: "₹15,000–35,000", food: "₹3,000–8,000", transport: "₹2,000–5,000", activities: "₹2,000–8,000", total: "₹22,000–56,000/day" },
  ],
  mistakes: [
    { icon: "🎟️", title: "Visiting Red Fort Without Pre-Booking Tickets", desc: "The Red Fort cash queue on weekends and public holidays stretches 45–90 minutes. The ASI online booking system (asi.payumoney.com) lets you book timed entry tickets 48 hours ahead for ₹35 (Indians) — no queue at the booked-entry gate. Sound-and-light show tickets (evenings only) also need advance booking and sell out on weekends. Plan both in advance.", color: "bg-red-50 border-red-200" },
    { icon: "🚗", title: "Getting Stuck in Chandni Chowk by Auto or Taxi", desc: "The Chandni Chowk main road is pedestrianised but the surrounding lanes are a gridlocked maze. Autos get stuck in traffic for 30–45 minutes for distances of 500 metres. The correct approach: Delhi Metro to Chandni Chowk station (Yellow Line), walk the main road, and use an auto only to exit toward the eastern or western edges of the area. Never take a taxi into the interior lanes.", color: "bg-orange-50 border-orange-200" },
    { icon: "🍽️", title: "Eating at Tourist Restaurants Near India Gate", desc: "The food kiosks and restaurants on Kartavya Path and in the India Gate garden area are overpriced and mediocre. The Bengali Market (1.5km north), Pandara Road Market (1km south-east), or Connaught Place's inner circle restaurants are far better for the same or lower prices. India Gate is for morning walks, not for eating.", color: "bg-yellow-50 border-yellow-200" },
    { icon: "🛺", title: "Negotiating Autorickshaws Without the Meter", desc: "Delhi autos are legally required to use the meter (₹25 base fare + ₹9.5/km). Most drivers near tourist spots refuse the meter and quote fixed rates 3–4x higher. The fix: open Ola or Uber on your phone and show the price estimate — most drivers will then accept a meter fare near that figure. Alternatively, book directly through Ola Auto, which shows a fixed upfront price. Never agree to a fixed rate before comparing with Ola.", color: "bg-blue-50 border-blue-200" },
  ],
  tips: [
    { icon: "🚇", title: "Get the 3-Day Delhi Metro Tourist Card", desc: "The 3-day unlimited Delhi Metro Tourist Card costs ₹500 (including ₹50 deposit, refundable on return). It covers all Metro lines including the Airport Express. The Metro connects virtually every major sight: Chandni Chowk (Yellow Line), Qutub Minar (Yellow Line), Akshardham (Blue Line), Humayun's Tomb/Lodhi Garden (Violet Line), Dilli Haat (Yellow Line at INA). Buy at New Delhi, Rajiv Chowk, or DEL Airport station customer windows.", color: "bg-amber-50 border-amber-200" },
    { icon: "🥘", title: "Best Chaat Spots in Delhi", desc: "Delhi's chaat culture is city-specific and worth navigating. Bengali Market (Minto Road): Nathu's dahi bhalla and golgappa are the benchmark. Old Famous Jalebi Wala, Chandni Chowk (since 1884): jalebi with rabri ₹80 per 100g, eat standing at the fryer. Annapurna Sweets, Sarojini Nagar for aloo tikki chaat (₹40). Khan Chacha, Khan Market for seekh rolls (₹130). Connaught Place's Wengers Deli for a club sandwich when chaat fatigue sets in.", color: "bg-green-50 border-green-200" },
    { icon: "🏨", title: "Safest and Best-Value Areas to Stay in Delhi", desc: "Pahar Ganj (Central Station area): budget hostels and guesthouses ₹400–1,200/night, functional for backpackers, but noisy and touristy. Karol Bagh: better value mid-range hotels ₹1,500–4,000, quieter, good Metro access. Connaught Place: premium mid-range to luxury, excellent Metro centrality, walkable to most New Delhi sights. South Delhi (Hauz Khas, Greater Kailash): safest, nicest neighbourhood, slightly farther from Old Delhi but excellent restaurants and Metro connections. Avoid Paharganj if you value quiet and cleanliness.", color: "bg-purple-50 border-purple-200" },
    { icon: "🌡️", title: "Timing Your Delhi Visit Around the Weather", desc: "October–November: ideal — post-monsoon freshness, temperatures 18–30°C, clear skies but air quality beginning to worsen in November (Diwali stubble-burning season). December–January: cold (3–15°C at night), bright days, ideal sightseeing weather — wear layers. February–March: the best compromise — mild days (18–28°C), low smog, spring colour in Mughal gardens. April–June: extreme heat (38–46°C), outdoor sightseeing is punishing — start everything before 9am, stop by noon. July–September: monsoon, 35–38°C humidity, but monuments are uncrowded and the red sandstone glows dramatically in rain.", color: "bg-teal-50 border-teal-200" },
  ],
  faqs: [
    { q: "How do I get from DEL airport to central Delhi?", a: "The Airport Express Metro (Orange Line) runs from T3 to New Delhi station in 22 minutes (₹60) and Dwarka Sector 21 in 20 minutes (₹60). Trains every 15 minutes, 4:45am–11:30pm. For baggage-heavy arrivals, pre-paid taxis from the official counter in T3 arrivals charge ₹350–500 to Connaught Place, ₹450–650 to Karol Bagh, ₹600–900 to South Delhi. Uber/Ola also operate from the designated taxi zone outside T3 arrivals (exit via the lower level for app cabs)." },
    { q: "Is Delhi safe for solo female travellers?", a: "Delhi requires more situational awareness than other Indian metros. Stick to well-lit, populated areas after dark. The Metro is safe (ladies-only first coach). Use Ola/Uber rather than negotiated autos or cycle rickshaws at night. Connaught Place, Khan Market, Hauz Khas, and South Delhi neighbourhoods are all comfortable. Avoid Paharganj after midnight. The tourist police (Dial 1363 or 100) are responsive in tourist zones. Most solo women travelling in Delhi report no issues when using standard urban precautions." },
    { q: "Can I do an Agra day trip from Delhi?", a: "Yes, and it's extremely well set up. The Gatimaan Express (Train 12049) departs Hazrat Nizamuddin at 8:10am and arrives Agra Cantonment at 9:50am (1h40min, ₹755 chair car). The return train departs Agra at 5:50pm, arrives Delhi at 7:25pm. This gives you 8 hours in Agra — enough for the Taj Mahal (entry ₹1,100, sunrise timing is best), Agra Fort (₹40), and Fatehpur Sikri if you pre-hire a car (₹1,500–2,000 for a car with driver for the day). Book all tickets on IRCTC well in advance — Gatimaan books out." },
    { q: "What is the best way to experience Old Delhi food?", a: "Morning is when Old Delhi's food scene is most genuine. Paranthe Wali Gali for breakfast (7–11am). Old Famous Jalebi Wala on Dariba Kalan for jalebi-rabri (8am onwards). Karim's for a late lunch (12:30–2:30pm before the evening rush). Al Jawahar opposite Jama Masjid for dinner (7pm–midnight). The Delhi Food Walks tour (₹1,500, delhifoodwalks.com) is worthwhile even for experienced travellers — the guide access to century-old commercial kitchens and the historical context on each dish transforms the experience." },
    { q: "How do I buy a Delhi Metro Tourist Card?", a: "Metro Tourist Cards are sold at the Customer Service Centre at all major stations: New Delhi (Airport Express + Yellow Line), Rajiv Chowk (Yellow + Blue Line junction), Kashmere Gate, and DEL Airport T3 station. The 1-day card costs ₹200 (includes ₹50 deposit), the 3-day card ₹500 (includes ₹50 deposit). Return the card at your last journey's station to reclaim the ₹50. Alternatively, just buy a Smart Card (₹150 with ₹50 deposit) and top up with cash — works exactly like a stored-value card on all Metro lines." },
  ],
  combineWith: ["agra-2-days", "jaipur-3-days", "amritsar-2-days"],
  relatedSlugs: ["agra-2-days", "jaipur-3-days", "amritsar-2-days", "mumbai-3-days"],
  galleryQuery: "delhi red fort india gate qutub minar chandni chowk old delhi street food",
};

export const metadata: Metadata = {
  title: "Delhi in 3 Days: Complete 2026 Itinerary for Indian Travellers (Budget to Luxury)",
  description: "3 complete Delhi plans with Red Fort, Qutub Minar, Humayun's Tomb, Chandni Chowk, Karim's, and real rupee costs — plus Delhi Metro tips and Agra day trip guide.",
  keywords: ["delhi itinerary 3 days", "delhi travel guide 2026", "delhi budget travel", "red fort guide", "chandni chowk food", "qutub minar", "delhi metro tourist card"],
  openGraph: {
    title: "Delhi in 3 Days: Budget to Luxury 2026 Itinerary",
    description: "Old Delhi Mughals, New Delhi monuments, Karim's, India Gate — real rupee costs for every budget.",
    images: [{ url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80", width: 1200, height: 630, alt: "Delhi India Gate Red Fort Old Delhi spices India" }],
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Delhi in 3 Days (2026)", description: "3 plans, Red Fort tips, Karim's, Delhi Metro card, Agra day trip guide." },
  alternates: { canonical: "https://www.incredibleitinerary.com/blog/delhi-3-days" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Delhi in 3 Days: Complete 2026 Itinerary for Indian Travellers (Budget to Luxury)",
      datePublished: "2026-04-06T00:00:00Z",
      author: { "@type": "Person", name: "Surya Pratap", url: "https://www.incredibleitinerary.com/about" },
      publisher: { "@type": "Organization", name: "IncredibleItinerary", url: "https://www.incredibleitinerary.com" },
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=80",
      description: "3 complete Delhi itinerary plans with Red Fort, Qutub Minar, Humayun's Tomb, Chandni Chowk, and real rupee costs for budget, mid-range, and luxury travellers.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.incredibleitinerary.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.incredibleitinerary.com/blog" },
        { "@type": "ListItem", position: 3, name: "Delhi 3 Days", item: "https://www.incredibleitinerary.com/blog/delhi-3-days" },
      ],
    },
    {
      "@type": "TouristDestination",
      name: "Delhi, India",
      description: "India's capital — a city of Mughal monuments, colonial boulevards, and one of the world's great street food cultures. Home to the Red Fort, Qutub Minar, India Gate, and Chandni Chowk.",
      touristType: ["Cultural tourists", "History buffs", "Food lovers", "Architecture enthusiasts"],
    },
  ],
};

export default function DelhiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DelhiClient />
    </>
  );
}
