"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RelatedGuides from "@/components/blog/RelatedGuides";

const DAYS = [
  {
    day: "Day 1",
    title: "Amsterdam — Canals, Anne Frank & the Jordaan",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200&q=80",
    plan: [
      "Arrive at Schiphol (AMS) — take the direct train to Amsterdam Centraal (€5.90, 17 min).",
      "Drop bags, grab a stroopwafel from Van Wonderen on Kalverstraat — they make them fresh.",
      "Walk the Nine Streets (De 9 Straatjes) — boutique canal shopping.",
      "Anne Frank House (book online 6 weeks ahead at annefrank.org, €16).",
      "Canal cruise at dusk — Those Dam Boat Guys or Flagship for a small-group vibe (€25-€35).",
      "Dinner in the Jordaan — Winkel 43 for apple pie (the best in the city), De Reiger for mains.",
    ],
    cost: "€110-€170 per person",
  },
  {
    day: "Day 2",
    title: "Amsterdam — Rijksmuseum, Vondelpark, Red Light District",
    image:
      "https://images.unsplash.com/photo-1459679749680-18eb1eb37418?w=1200&q=80",
    plan: [
      "Rent a bike (€12/day from MacBike near Centraal).",
      "Rijksmuseum at 9am opening — head straight to the Night Watch before crowds (€22.50, book at rijksmuseum.nl).",
      "Van Gogh Museum next door (€22, timed entry only — book weeks ahead).",
      "Lunch at Foodhallen (Oud-West) — Indian dosas to Vietnamese bao.",
      "Afternoon cycling through Vondelpark — stop at Blauwe Theehuis for coffee.",
      "Evening in De Pijp — Albert Cuyp Market for snacks, Bar Fisk or Brouwerij Troost for drinks.",
      "Optional: walk the Red Light District after 9 pm (respectfully — no photos of workers).",
    ],
    cost: "€100-€150 per person",
  },
  {
    day: "Day 3",
    title: "Rotterdam — Cube Houses, Markthal & Modern Architecture",
    image:
      "https://images.unsplash.com/photo-1578843301928-13a4a4b5a7fa?w=1200&q=80",
    plan: [
      "Intercity Direct from Amsterdam Centraal to Rotterdam Centraal (€17.30, 40 min).",
      "Start at Rotterdam Centraal itself — the station is a UNESCO-worthy piece of architecture.",
      "Walk to the Cube Houses (Kubuswoningen) — tour Show Cube for €3.",
      "Markthal for lunch — the famous horseshoe food hall. Try kibbeling or bitterballen.",
      "Erasmus Bridge walk → SS Rotterdam (or the Euromast observation tower, €13.50).",
      "Afternoon: Water taxi to Hotel New York (former Holland America Line HQ) for coffee.",
      "Kop van Zuid for dinner — Fenix Food Factory or Restaurant FG.",
      "Last train back to Amsterdam around 11:30 pm, or stay the night in Rotterdam.",
    ],
    cost: "€80-€130 per person (excluding accommodation)",
  },
  {
    day: "Day 4",
    title: "Utrecht — Medieval Charm & the Dom Tower",
    image:
      "https://images.unsplash.com/photo-1584824486516-0555a07fc511?w=1200&q=80",
    plan: [
      "30-min train from Amsterdam Centraal to Utrecht Centraal (€8.50).",
      "Climb the Dom Tower — the Netherlands' tallest church tower, 465 steps (€12, pre-book).",
      "Walk the Oudegracht canal — Utrecht's signature feature, with wharfs at water level lined with cafes.",
      "Miffy Museum (if traveling with kids) or the Railway Museum — a full-scale steampunk wonderland (€19.50).",
      "Lunch along the Oudegracht — De Potdeksel or Le Connaisseur.",
      "Afternoon cycle to Rhijnauwen Estate or Castle De Haan (spring tulips, 7 km ride).",
      "Evening back in Amsterdam for dinner.",
    ],
    cost: "€60-€110 per person",
  },
  {
    day: "Day 5",
    title: "The Hague & Delft — Royalty, Peace Palace, Delftware",
    image:
      "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=1200&q=80",
    plan: [
      "50-min train from Amsterdam Centraal to The Hague HS (€12.40).",
      "Mauritshuis — home of Vermeer's Girl with a Pearl Earring (€19.50, book ahead).",
      "Binnenhof walk — the 13th-century parliament complex.",
      "Peace Palace visitor centre (free entry to grounds).",
      "Tram 1 to Scheveningen beach for a seaside lunch + North Sea breeze.",
      "Short 15-min train to Delft. Walk the Markt with its Gothic Nieuwe Kerk (William of Orange's tomb).",
      "Royal Delft factory tour — see blue pottery being hand-painted (€15).",
      "Train back to Amsterdam via Delft → Schiphol direct (40 min).",
    ],
    cost: "€100-€150 per person",
  },
];

export default function Netherlands5DaysClient() {
  return (
    <div className="min-h-screen bg-parchment">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534351590666-13e3e96c5017?w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 pb-12 text-white">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-300 mb-3">
            Europe Travel · 5 Days · April 2026
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-tight mb-4">
            Netherlands in 5 Days
          </h1>
          <p className="text-lg md:text-xl font-light max-w-3xl">
            Amsterdam, Rotterdam, Utrecht, The Hague & Delft — the complete
            itinerary with trains, tulips, stroopwafel and cycling.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-lg text-ink font-light leading-relaxed">
          The Netherlands is the ultimate rail traveler's country. Nothing is
          more than an hour from anywhere else. You can base yourself in
          Amsterdam for all five nights, ride the Intercity trains on day
          trips, and be back in your canal-house hotel by dinner. No
          rebooking, no repacking, no rental car stress.
        </p>
        <p className="text-lg text-ink font-light leading-relaxed mt-5">
          This itinerary gives Amsterdam the two days it deserves, then
          takes you out to explore what most tourists skip — Rotterdam's
          wild modern architecture, Utrecht's medieval canals on two
          levels, and the Royal Dutch one-two punch of The Hague and Delft.
          You'll come back understanding why the Dutch think Amsterdam is
          the loudest, most touristy corner of an otherwise gentle, cycling,
          stroopwafel-and-cheese-eating country.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
            <p className="text-2xl mb-1">🚆</p>
            <p className="font-serif text-lg text-ink font-light">5 Days</p>
            <p className="text-[0.65rem] text-muted uppercase tracking-wide">
              Duration
            </p>
          </div>
          <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
            <p className="text-2xl mb-1">💶</p>
            <p className="font-serif text-lg text-ink font-light">
              €900-€1,400
            </p>
            <p className="text-[0.65rem] text-muted uppercase tracking-wide">
              Per Person
            </p>
          </div>
          <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
            <p className="text-2xl mb-1">🌷</p>
            <p className="font-serif text-lg text-ink font-light">Apr-May</p>
            <p className="text-[0.65rem] text-muted uppercase tracking-wide">
              Tulip Season
            </p>
          </div>
          <div className="bg-white rounded-xl border border-parchment-2 p-4 text-center">
            <p className="text-2xl mb-1">🚴</p>
            <p className="font-serif text-lg text-ink font-light">22.8M</p>
            <p className="text-[0.65rem] text-muted uppercase tracking-wide">
              Bikes (more than people)
            </p>
          </div>
        </div>
      </section>

      {/* Day-by-day */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mb-10 text-center">
          Day-by-day Itinerary
        </h2>
        <div className="space-y-10">
          {DAYS.map((d) => (
            <article
              key={d.day}
              className="bg-white rounded-xl border border-parchment-2 overflow-hidden shadow-sm"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${d.image}')` }}
              />
              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-widest text-amber-700 mb-2">
                  {d.day}
                </p>
                <h3 className="font-serif text-2xl text-ink font-light mb-4">
                  {d.title}
                </h3>
                <ul className="space-y-2 mb-5">
                  {d.plan.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-ink font-light leading-relaxed"
                    >
                      <span className="text-amber-600 mt-1.5 flex-shrink-0 text-xs">
                        ●
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted pt-3 border-t border-parchment-2">
                  <span className="font-medium text-ink">Est. cost:</span>{" "}
                  {d.cost}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Trains */}
      <section className="bg-white border-y border-parchment-2 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-light text-ink mb-5">
            Trains — your best friend in the Netherlands
          </h2>
          <p className="text-ink font-light leading-relaxed mb-4">
            The NS (Nederlandse Spoorwegen) runs the rail network. Buy an
            OV-chipkaart at any station machine, load €30-€50 on it, and
            just tap in and out of every train, tram, bus and metro. Or use
            your contactless credit card — NS accepts them directly now
            (OVpay).
          </p>
          <ul className="space-y-2 text-ink font-light">
            <li>• Amsterdam ↔ Rotterdam: Intercity Direct, 40 min, €17.30</li>
            <li>• Amsterdam ↔ Utrecht: 30 min, €8.50</li>
            <li>• Amsterdam ↔ The Hague: 50 min, €12.40</li>
            <li>• The Hague ↔ Delft: 15 min, €3.40</li>
            <li>• Schiphol ↔ Amsterdam Centraal: 17 min, €5.90</li>
          </ul>
          <p className="text-ink font-light leading-relaxed mt-5">
            A <strong>Dagkaart (day pass)</strong> at €59.50 is worth it if
            you're doing Amsterdam → Rotterdam → Utrecht in one day, but
            rarely otherwise.
          </p>
        </div>
      </section>

      {/* Budget */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="font-serif text-3xl font-light text-ink mb-6 text-center">
          Budget Breakdown (5 days, per person)
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm bg-white border border-parchment-2 rounded-xl">
            <thead className="bg-parchment border-b border-parchment-2">
              <tr>
                <th className="text-left p-4 font-medium text-ink">Item</th>
                <th className="text-left p-4 font-medium text-ink">
                  Backpacker
                </th>
                <th className="text-left p-4 font-medium text-ink">
                  Mid-range
                </th>
                <th className="text-left p-4 font-medium text-ink">Luxury</th>
              </tr>
            </thead>
            <tbody className="font-light text-ink">
              <tr className="border-t border-parchment-2">
                <td className="p-4">Accommodation (4 nts)</td>
                <td className="p-4">€160 (hostels)</td>
                <td className="p-4">€480 (3-star hotel)</td>
                <td className="p-4">€1,200+ (canal hotel)</td>
              </tr>
              <tr className="border-t border-parchment-2 bg-parchment/40">
                <td className="p-4">Trains & transport</td>
                <td className="p-4">€75</td>
                <td className="p-4">€90</td>
                <td className="p-4">€120</td>
              </tr>
              <tr className="border-t border-parchment-2">
                <td className="p-4">Food (5 days)</td>
                <td className="p-4">€150</td>
                <td className="p-4">€275</td>
                <td className="p-4">€500+</td>
              </tr>
              <tr className="border-t border-parchment-2 bg-parchment/40">
                <td className="p-4">Museums & tours</td>
                <td className="p-4">€85</td>
                <td className="p-4">€130</td>
                <td className="p-4">€200+</td>
              </tr>
              <tr className="border-t border-parchment-2">
                <td className="p-4">Cycling & misc</td>
                <td className="p-4">€40</td>
                <td className="p-4">€75</td>
                <td className="p-4">€150</td>
              </tr>
              <tr className="border-t-2 border-ink/20 font-medium">
                <td className="p-4">Total (excl. flights)</td>
                <td className="p-4">€510 / ₹46k</td>
                <td className="p-4">€1,050 / ₹94k</td>
                <td className="p-4">€2,170+ / ₹1.95L+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tulip season */}
      <section className="bg-amber-50 border-y border-amber-200 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-light text-ink mb-5">
            The tulip season window
          </h2>
          <p className="text-ink font-light leading-relaxed mb-3">
            Keukenhof Gardens open for exactly 8 weeks a year — typically
            <strong> late March to mid-May</strong>. Peak bloom is usually
            mid-April (check keukenhof.nl for exact dates).
          </p>
          <p className="text-ink font-light leading-relaxed mb-3">
            Best way in: the Keukenhof Express bus 858 from Schiphol airport
            (€32 combo ticket with park entry). Weekday mornings before
            10:30 am are the quiet window — weekends are genuinely unpleasant
            with crowds.
          </p>
          <p className="text-ink font-light leading-relaxed">
            Want tulip fields without the crowds? Rent a bike in Noordwijk
            or Lisse and ride the rural roads — endless color stripes, no
            tickets needed.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section className="max-w-3xl mx-auto px-6 py-14">
        <h2 className="font-serif text-3xl font-light text-ink mb-6">
          Pro tips the Dutch would share
        </h2>
        <ul className="space-y-3 text-ink font-light leading-relaxed">
          <li>
            <strong>Cyclists have right of way.</strong> Not cars, not
            pedestrians — cyclists. Look both ways twice before crossing any
            bike lane.
          </li>
          <li>
            <strong>Dutch pancakes are a full meal.</strong> Pannenkoeken
            come savory (bacon + cheese) or sweet (apple + stroop).
            Pannenkoekenhuis Upstairs in Amsterdam is legendary.
          </li>
          <li>
            <strong>Coffeeshops ≠ cafes.</strong> Coffeeshops sell cannabis.
            Regular coffee houses are "koffiehuis" or just "café."
          </li>
          <li>
            <strong>Cash is rare.</strong> Contactless debit/credit cards
            work everywhere; many places don't accept cash at all.
          </li>
          <li>
            <strong>Tip 5-10%,</strong> not 15-20% — service is included.
          </li>
          <li>
            <strong>The Netherlands ≠ Holland.</strong> "Holland" technically
            refers only to the two western provinces. The government
            officially stopped promoting "Holland" in 2020.
          </li>
          <li>
            <strong>Everyone speaks English.</strong> Like, actual fluency.
            Don't stress about Dutch.
          </li>
          <li>
            <strong>Book Anne Frank House 6 weeks ahead.</strong> 80% of
            tickets are released exactly 6 weeks before. If you miss the
            window, try again daily — last-minute slots open up.
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="bg-white border-t border-parchment-2 py-14">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-light text-ink mb-6">FAQ</h2>
          <div className="space-y-6">
            <div>
              <p className="font-medium text-ink mb-1">
                Is 4 days in the Netherlands enough?
              </p>
              <p className="text-ink font-light">
                Yes — Amsterdam 2 days + Rotterdam 1 day + The Hague/Delft
                1 day covers the highlights. 5 days lets you add Utrecht,
                which is arguably the most charming Dutch city of all.
              </p>
            </div>
            <div>
              <p className="font-medium text-ink mb-1">
                Should I stay in Amsterdam or move around?
              </p>
              <p className="text-ink font-light">
                Stay in Amsterdam all 5 nights. The country is so small that
                day trips are faster and cheaper than changing hotels.
              </p>
            </div>
            <div>
              <p className="font-medium text-ink mb-1">
                Do I need a car?
              </p>
              <p className="text-ink font-light">
                No. Amsterdam, Rotterdam, Utrecht, The Hague, and Delft are
                all connected by frequent trains. A car is actively a
                burden in Dutch cities — parking is expensive and rare.
              </p>
            </div>
            <div>
              <p className="font-medium text-ink mb-1">
                When is the best time to visit?
              </p>
              <p className="text-ink font-light">
                Late April to early May — tulips in full bloom, mild
                weather, long daylight. June-August is peak summer (warm,
                crowded). December has Christmas markets and Amsterdam
                Light Festival.
              </p>
            </div>
            <div>
              <p className="font-medium text-ink mb-1">
                Is the Netherlands expensive?
              </p>
              <p className="text-ink font-light">
                Moderately. Cheaper than Switzerland or Norway, more
                expensive than Portugal or Spain. Plan on €150-€220 per
                person per day for a mid-range trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-light mb-4">
            Already hooked on the canals?
          </h2>
          <p className="text-lg font-light text-amber-100 mb-6">
            Dig into our deep-dive Amsterdam 4-day guide, or pair
            Netherlands with Belgium (Bruges + Ghent) for a perfect 8-day
            Low Countries loop.
          </p>
          <Link
            href="/blog/amsterdam-4-days"
            className="inline-block bg-amber-500 text-ink px-8 py-3 rounded-full font-medium hover:bg-amber-400 transition-colors"
          >
            Read the Amsterdam guide
          </Link>
        </div>
      </section>

      <RelatedGuides currentSlug="netherlands-5-days" />
      <Footer />
    </div>
  );
}
