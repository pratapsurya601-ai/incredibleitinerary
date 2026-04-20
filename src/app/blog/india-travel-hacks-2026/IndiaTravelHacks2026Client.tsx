"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RelatedGuides from "@/components/blog/RelatedGuides";

const SECTIONS = [
  {
    title: "Trains & IRCTC",
    hacks: [
      {
        n: 1,
        h: "Create your IRCTC account before you land.",
        b: "Foreign tourists can sign up at irctc.co.in — you'll need an Indian mobile number for OTP (get a SIM before booking trains). Verifying the account from abroad is painful; do it once via hotel Wi-Fi on arrival and you're set.",
      },
      {
        n: 2,
        h: "Tatkal opens at 10 am sharp — 11 am for sleeper class.",
        b: "One day before departure. Have payment details saved, passenger details pre-filled in the IRCTC Rail Connect app, and hit confirm at exactly 10:00:01. Seats disappear in 90 seconds on popular routes.",
      },
      {
        n: 3,
        h: "Tourist Quota exists — use it if you're a foreign passport holder.",
        b: "Every train reserves seats for foreign tourists. Book in person at the International Tourist Bureau (IRCA Building, New Delhi station, 1st floor). Bring your passport and cash/card. Works even when the train is 'full' online.",
      },
      {
        n: 4,
        h: "Rail Neer water bottles cost ₹15 — never pay more.",
        b: "This is non-negotiable. Vendors on platforms and inside trains routinely charge ₹25-30 for a ₹15 Rail Neer bottle. The MRP is printed clearly. Refuse to pay more; report overcharging to the TTE or call 139. Insist on the printed price.",
      },
      {
        n: 5,
        h: "TTE = your friend, not your enemy.",
        b: "The Travelling Ticket Examiner can upgrade you to an empty AC berth for the difference in fare (receipted, legal). Ask politely after the train starts.",
      },
      {
        n: 6,
        h: "Use ConfirmTkt or RailYatri to predict waitlist confirmation.",
        b: "Their AI gives 85-90% accurate confirmation probabilities. If CNF chance is under 30%, don't rely on the train — book a backup bus or flight.",
      },
      {
        n: 7,
        h: "Meals in AC class are optional, not mandatory.",
        b: "Rajdhani/Shatabdi fares include food but you can skip and save — deselect at booking. Quality varies wildly; vendor parantha at stations is often better.",
      },
      {
        n: 8,
        h: "Your mobile charging point is above your berth, not near the door.",
        b: "Pack a 1.5m cable. Top berths have sockets near the luggage rack — bring a powerbank as backup on older trains.",
      },
      {
        n: 9,
        h: "Station retiring rooms are a secret.",
        b: "₹400-₹1200/night at major stations (book at irctctourism.com or at the station). Cleaner than most budget hotels, and you can't beat the location.",
      },
    ],
  },
  {
    title: "Money, UPI & Cards",
    hacks: [
      {
        n: 10,
        h: "UPI is now open to foreigners — get UPI One World at the airport.",
        b: "At Delhi, Mumbai, and Bangalore airports you can get a pre-paid UPI wallet linked to a foreign passport (UPI One World by Transcorp/IDFC First). Load rupees, pay by QR anywhere. No more fumbling with cash.",
      },
      {
        n: 11,
        h: "ATMs dispense ₹2,000 notes — change them fast.",
        b: "Many small vendors won't accept ₹2,000 or ₹500 notes. Break them at fuel stations, supermarkets, or chain restaurants. Keep ₹100s and ₹200s for autos, tea, snacks, tips.",
      },
      {
        n: 12,
        h: "Avoid airport currency exchange.",
        b: "They give you 5-10% below the market rate. Use an ATM (SBI, HDFC, Axis are safest) or an in-city Thomas Cook / Centrum branch.",
      },
      {
        n: 13,
        h: "Use a zero-forex-markup card.",
        b: "Niyo Global, Fi, Scapia, IDFC FIRST Wow work without markup. Saves 3-4% versus regular international debit cards.",
      },
      {
        n: 14,
        h: "Check your ATM slip immediately.",
        b: "Some machines (especially in Delhi and Goa) issue a 'transaction failed' slip while your account is debited. Keep the slip; call your bank within 24 hours for reversal.",
      },
    ],
  },
  {
    title: "SIM Cards & Apps",
    hacks: [
      {
        n: 15,
        h: "Get your SIM at the airport on arrival.",
        b: "Airtel or Jio counters at every major airport. Carry passport, visa printout, and one passport photo. Activation is 4-24 hours. A 28-day prepaid with 1.5 GB/day runs ₹300-₹400.",
      },
      {
        n: 16,
        h: "Activate 'International SIM Card' plan before heading to remote areas.",
        b: "Jio has the best coverage in Ladakh, Spiti, Andamans and the Northeast. Airtel is strongest in Rajasthan and South India. Buy both SIMs for peace of mind.",
      },
      {
        n: 17,
        h: "Must-install apps on day one.",
        b: "Ola, Uber, Rapido (bike taxis, cheapest), Zomato/Swiggy (food), Google Pay or PhonePe (UPI), IRCTC Rail Connect, MakeMyTrip, Google Translate with Hindi offline pack, Maps.me for offline maps.",
      },
      {
        n: 18,
        h: "Google Translate camera mode is genius for menus.",
        b: "Point your phone at a Hindi/Tamil/Bengali menu. Instant translation.",
      },
    ],
  },
  {
    title: "Taxis, Autos & Transport",
    hacks: [
      {
        n: 19,
        h: "Always use Ola or Uber over street autos at tourist spots.",
        b: "Auto drivers at the Taj Mahal, Gateway of India, Charminar etc. often refuse the meter and quote 3-5x. Ola auto gives you a fixed fare, a registered driver, and a complaint channel.",
      },
      {
        n: 20,
        h: "Pay auto meter + 10%.",
        b: "In cities with meters (Mumbai, Kolkata, Bangalore), 10% tip is standard and keeps things pleasant. Don't haggle over ₹10.",
      },
      {
        n: 21,
        h: "Rapido is 40-60% cheaper for solo riders.",
        b: "Bike taxis cover 0-8 km faster than any car in Bangalore, Hyderabad, or Mumbai traffic. Wear the helmet offered.",
      },
      {
        n: 22,
        h: "Prepaid taxi booths at airports and stations are trustworthy.",
        b: "Pay at the counter, get a slip, hand to driver at destination. No meter negotiation. A bit more expensive than Ola but zero stress.",
      },
      {
        n: 23,
        h: "Delhi Metro & Mumbai Locals are clean, safe and under ₹60.",
        b: "Download DMRC Smart Card app or Mumbai's MOBIKWIK app for tap-in-tap-out. Ladies' coaches exist — use them.",
      },
      {
        n: 24,
        h: "Never rent a bike without proof of licence.",
        b: "Required by law. Accidents are common; foreign travel insurance often doesn't cover two-wheelers in India. Helmet is mandatory.",
      },
      {
        n: 25,
        h: "Avoid overnight buses in the hills.",
        b: "Mountain roads + night + private buses = high risk. Pay a bit more for a daytime train or government Volvo.",
      },
    ],
  },
  {
    title: "Scams & Safety",
    hacks: [
      {
        n: 26,
        h: "The 'station is closed / hotel is closed' scam.",
        b: "An auto driver tells you your pre-booked hotel is shut / flooded / overbooked and offers to take you to 'a better one' (that pays him commission). Ignore. Go directly. Call the hotel if unsure.",
      },
      {
        n: 27,
        h: "The 'free temple tour' trap.",
        b: "A 'student' / 'priest' offers a free tour and ends with an aggressive donation demand. Firm but polite no.",
      },
      {
        n: 28,
        h: "Jewelry/gem export scam in Jaipur & Agra.",
        b: "Never, ever agree to 'carry gems for a friend' or 'participate in our export programme.' It's a scam every single time.",
      },
      {
        n: 29,
        h: "Photograph your hotel room before checking out.",
        b: "Prevents false 'damage' charges on your credit card.",
      },
      {
        n: 30,
        h: "Dial 112 for any emergency.",
        b: "The pan-India emergency number. Works in every state. Also: 139 for railways, 1091 for women's helpline.",
      },
      {
        n: 31,
        h: "Avoid attending unsolicited 'cultural events' from strangers.",
        b: "Especially in Agra and Jaisalmer. Common setup for overcharging, drink spiking, or forced purchases.",
      },
    ],
  },
  {
    title: "Packing & Health",
    hacks: [
      {
        n: 32,
        h: "Don't drink tap water, but also don't buy branded water in fancy plastic.",
        b: "Rail Neer, Bisleri, Kinley, Aquafina are all safe. Refuse unsealed caps. Bring a LifeStraw bottle — fill from any tap, safe forever.",
      },
      {
        n: 33,
        h: "Street food is safer than fancy hotel food.",
        b: "Seriously. Busy stalls with fast turnover cook fresh. Five-star hotel buffets sitting at 50°C are the common culprits.",
      },
      {
        n: 34,
        h: "Pack Norflox-TZ + ORS.",
        b: "Any Indian pharmacy sells them OTC. Norflox-TZ 400 mg (2x/day for 3 days) handles most Delhi belly. ORS sachets rehydrate fast.",
      },
      {
        n: 35,
        h: "Monsoon = pack mosquito repellent + quick-dry clothes.",
        b: "Odomos cream and Good Knight patches work. Avoid DEET-heavy Western repellents — they melt synthetics.",
      },
      {
        n: 36,
        h: "Sunscreen SPF 50+ is non-negotiable March-October.",
        b: "Indian sun is brutal even in the hills. Lotus Herbals or La Shield (Indian brands) are cheaper than imports.",
      },
      {
        n: 37,
        h: "Carry hand sanitizer and tissue/wet wipes always.",
        b: "Restrooms vary widely. Tissue is rarely provided.",
      },
      {
        n: 38,
        h: "Modest clothing for temples and rural areas.",
        b: "Shoulders and knees covered. A lightweight scarf doubles as head covering at gurudwaras and sun cover at monuments.",
      },
    ],
  },
  {
    title: "Food & Tipping",
    hacks: [
      {
        n: 39,
        h: "Tip 10% at restaurants unless service charge is already added.",
        b: "It's typically listed on the bill as 'Service Charge 5-10%'. If so, no additional tip.",
      },
      {
        n: 40,
        h: "Order 'less spicy' the first week, then dial up.",
        b: "Indian spicy has a different threshold. Say 'kam teekha' (less spicy) and your tongue will thank you.",
      },
      {
        n: 41,
        h: "Thali is the ultimate value meal.",
        b: "₹150-₹350 for unlimited rice, 3-5 curries, dal, roti, papad, dessert. Gujarati and South Indian thalis are the best-value cuisine on earth.",
      },
      {
        n: 42,
        h: "Lassi is an afternoon saviour.",
        b: "Sweet lassi in Punjab, salty mattha in UP, bhang lassi only in Pushkar/Varanasi (and only if you know what you're doing).",
      },
    ],
  },
  {
    title: "Planning & Timing",
    hacks: [
      {
        n: 43,
        h: "Avoid Holi and Diwali travel if you're not celebrating.",
        b: "Train fares spike, trains run late, cities empty out. Great if you're invited somewhere; otherwise plan around.",
      },
      {
        n: 44,
        h: "Monsoon (June-September) = half-price hotels, best photography.",
        b: "Goa, Kerala, Rajasthan, Mumbai hills are stunning in the rain. Pack poncho + quick-dry shoes. Avoid trekking.",
      },
      {
        n: 45,
        h: "Monument entry: Indian citizens pay ₹50, foreigners ₹1,100+.",
        b: "Carry your passport at Taj Mahal, Agra Fort, Qutub Minar, Ellora etc. SAARC/BIMSTEC citizens get Indian-rate at most sites.",
      },
      {
        n: 46,
        h: "Book monuments online — skip the queue.",
        b: "asi.payumoney.com sells Taj Mahal, Qutub, Humayun's Tomb e-tickets. Saves 30-90 minutes in peak season.",
      },
      {
        n: 47,
        h: "Always carry photocopies of your passport + visa.",
        b: "Hotels need to register you. Hand them the copy, not the original. Keep originals in a money belt with digital scans in your email.",
      },
    ],
  },
];

export default function IndiaTravelHacks2026Client() {
  return (
    <div className="min-h-screen bg-parchment">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 pb-12 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-3">
            India Travel Tips · April 2026
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-4">
            47 India Travel Hacks Most Tourists Learn Too Late
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl">
            IRCTC tricks, Rail Neer pricing, UPI for foreigners, Tatkal,
            scam avoidance, SIM cards — the stuff travelers wish someone
            had told them on day one.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-lg text-ink font-light leading-relaxed">
          India rewards travelers who come prepared and punishes those who
          don't. The difference between a magical trip and a frustrating
          one often comes down to small things — knowing that IRCTC Tatkal
          opens at exactly 10 am, that Rail Neer water bottles are capped at
          ₹15, that UPI is finally open to foreigners, and that Ola is
          always better than haggling with an auto driver at a tourist
          site.
        </p>
        <p className="text-lg text-ink font-light leading-relaxed mt-5">
          Here are 47 hacks — sorted by category — that I've either learned
          the hard way or had to teach friends after they learned them the
          hard way. Most of them take 30 seconds to implement. All of them
          save money, time, or sanity.
        </p>
      </section>

      {/* Sections */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        {SECTIONS.map((sec) => (
          <div key={sec.title} className="mb-12">
            <h2 className="font-serif text-3xl font-light text-ink mb-6 pb-2 border-b border-parchment-2">
              {sec.title}
            </h2>
            <div className="space-y-6">
              {sec.hacks.map((hack) => (
                <div
                  key={hack.n}
                  className="bg-white rounded-xl border border-parchment-2 p-5 md:p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="font-serif text-2xl text-amber-600 font-light leading-none flex-shrink-0 w-10">
                      {String(hack.n).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-medium text-ink mb-1">{hack.h}</h3>
                      <p className="text-sm text-muted font-light leading-relaxed">
                        {hack.b}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Callout: Rail Neer */}
      <section className="bg-red-50 border-y border-red-200 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-light text-ink mb-4">
            The Rail Neer rule: never pay more than ₹15
          </h2>
          <p className="text-ink font-light leading-relaxed mb-3">
            Rail Neer is IRCTC's own-brand packaged drinking water. The MRP
            is printed on every bottle and fixed at ₹15. Yet railway
            platform vendors and pantry-car staff regularly charge ₹20-₹30
            — relying on tired travelers not to argue.
          </p>
          <p className="text-ink font-light leading-relaxed mb-3">
            <strong>What to do:</strong> show the vendor the printed MRP,
            pay only that. If refused, report to the Train Ticket Examiner
            (TTE) or call 139 from your mobile. Vendors caught overcharging
            have their licences revoked.
          </p>
          <p className="text-ink font-light leading-relaxed">
            Better yet: carry a stainless-steel bottle and refill from
            filtered water dispensers at major stations (Delhi, Mumbai
            Central, Chennai, Howrah all have them free).
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="font-serif text-3xl font-light text-ink mb-6">FAQ</h2>
        <div className="space-y-6">
          <div>
            <p className="font-medium text-ink mb-1">
              Is India safe for first-time solo travelers?
            </p>
            <p className="text-ink font-light">
              Yes, with standard caution. Stick to tourist-friendly states
              first (Rajasthan, Kerala, Goa, Himachal, Karnataka). Use Ola
              at night, let someone know your itinerary, download Airtel
              Safe Pay, and avoid isolated areas after dark. Most travelers
              report overwhelming helpfulness, not trouble.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink mb-1">
              Can I use my foreign credit card everywhere?
            </p>
            <p className="text-ink font-light">
              Most mid-range and premium places accept Visa / Mastercard.
              Rural stalls, auto-rickshaws, and small restaurants are
              cash/UPI-only. Carry both.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink mb-1">
              How much cash should I carry per day?
            </p>
            <p className="text-ink font-light">
              ₹2,000-₹3,000 in small notes is plenty for most travelers. Top
              up every 2-3 days from an SBI/HDFC/Axis ATM inside a bank
              (safer than standalone roadside ATMs).
            </p>
          </div>
          <div>
            <p className="font-medium text-ink mb-1">
              Do I need to tip tour guides and drivers?
            </p>
            <p className="text-ink font-light">
              Yes. ₹100-₹300/day for drivers, ₹200-₹500 for guides. It's
              expected and makes a real difference to them.
            </p>
          </div>
          <div>
            <p className="font-medium text-ink mb-1">
              Which is the best month to visit India?
            </p>
            <p className="text-ink font-light">
              October-March across most of the country. April-June is hot
              (except Himalayas — peak season). July-September is monsoon
              (brilliant for Kerala, Goa, Hampi — avoid Himalayan roads).
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-light mb-4">
            Planning your first India trip?
          </h2>
          <p className="text-lg font-light text-amber-100 mb-6">
            Start with the Golden Triangle — Delhi, Agra, Jaipur. Our
            complete 7-day itinerary covers routes, real budgets, and the
            Taj Mahal timing guide.
          </p>
          <Link
            href="/blog/golden-triangle-7-days"
            className="inline-block bg-amber-500 text-ink px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
          >
            Read the Golden Triangle guide
          </Link>
        </div>
      </section>

      <RelatedGuides currentSlug="india-travel-hacks-2026" />
      <Footer />
    </div>
  );
}
