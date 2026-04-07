"use client";
import { AFFILIATE, SHOP_PRODUCTS } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

interface AffiliateHotel {
  name: string;
  type: string;
  price: string;
  rating: string;
  url: string;
  badge?: string;
}

interface AffiliateActivity {
  name: string;
  duration: string;
  price: string;
  url: string;
  badge?: string;
}

interface AffiliateBlockProps {
  destination: string;          // e.g. "Goa" or "Jaipur, Rajasthan"
  hotels?: AffiliateHotel[];
  activities?: AffiliateActivity[];
  pdfProductId?: string;        // ID from SHOP_PRODUCTS to show PDF upsell
}

export default function AffiliateBlock({
  destination,
  hotels = [],
  activities = [],
  pdfProductId,
}: AffiliateBlockProps) {
  const pdfProduct = pdfProductId
    ? SHOP_PRODUCTS.find((p) => p.id === pdfProductId)
    : null;

  return (
    <div className="my-10 space-y-5">

      {/* Hotels */}
      {hotels.length > 0 && (
        <div className="rounded-2xl border-2 border-gold/30 overflow-hidden shadow-sm">
          <div className="bg-gold/10 px-5 py-4 border-b border-gold/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🏨</span>
              <div>
                <p className="text-sm font-semibold text-ink">Where to Stay in {destination}</p>
                <p className="text-[0.65rem] text-muted font-light">Verified prices · Instant booking</p>
              </div>
            </div>
            <a
              href={AFFILIATE.bookingCom(destination)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-[0.7rem] text-white bg-[#003580] hover:bg-[#00224f] px-3 py-1.5 rounded-lg font-medium transition-colors flex-shrink-0"
              onClick={() => trackEvent("affiliate_clicked", { destination, provider: "booking" })}
            >
              All hotels →
            </a>
          </div>
          <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {hotels.map((hotel) => (
              <a
                key={hotel.name}
                href={hotel.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex flex-col p-4 bg-parchment rounded-xl border border-parchment-2 hover:border-gold hover:shadow-md transition-all duration-200 group"
                onClick={() => trackEvent("hotel_clicked", { hotel: hotel.name, destination })}
              >
                <div className="flex items-center justify-between mb-2">
                  {hotel.badge && (
                    <span className="text-xs bg-gold text-ink px-2 py-0.5 rounded-full font-semibold uppercase tracking-wide">
                      {hotel.badge}
                    </span>
                  )}
                  <span className="text-xs text-gold ml-auto">{"★".repeat(parseInt(hotel.rating))}</span>
                </div>
                <p className="text-sm font-semibold text-ink group-hover:text-teal transition-colors mb-0.5">
                  {hotel.name}
                </p>
                <p className="text-[0.65rem] text-muted font-light mb-3">{hotel.type}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm font-semibold text-teal">{hotel.price}</span>
                  <span className="text-[0.65rem] text-[#003580] font-medium group-hover:underline">Book →</span>
                </div>
              </a>
            ))}
          </div>
          <div className="bg-white px-5 py-2 border-t border-parchment-2">
            <p className="text-xs text-muted/60 font-light">
              Affiliate links — we earn a small commission at no extra cost to you. Helps keep our guides free.
            </p>
          </div>
        </div>
      )}

      {/* Activities */}
      {activities.length > 0 && (
        <div className="rounded-2xl border-2 border-teal/30 overflow-hidden shadow-sm">
          <div className="bg-teal/10 px-5 py-4 border-b border-teal/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-xl">🎯</span>
              <div>
                <p className="text-sm font-semibold text-ink">Things to Do in {destination}</p>
                <p className="text-[0.65rem] text-muted font-light">Tours & experiences · Instant confirmation</p>
              </div>
            </div>
            <a
              href={AFFILIATE.getYourGuide(destination)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-[0.7rem] text-white bg-[#FF5533] hover:bg-[#cc4429] px-3 py-1.5 rounded-lg font-medium transition-colors flex-shrink-0"
              onClick={() => trackEvent("affiliate_clicked", { destination, provider: "getyourguide" })}
            >
              All tours →
            </a>
          </div>
          <div className="bg-white p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {activities.map((act) => (
              <a
                key={act.name}
                href={act.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-start gap-3 p-4 bg-parchment rounded-xl border border-parchment-2 hover:border-teal hover:shadow-md transition-all duration-200 group"
                onClick={() => trackEvent("activity_clicked", { activity: act.name, destination })}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <p className="text-sm font-semibold text-ink group-hover:text-teal transition-colors leading-tight">
                      {act.name}
                    </p>
                    {act.badge && (
                      <span className="text-xs bg-teal/15 text-teal px-2 py-0.5 rounded-full font-semibold flex-shrink-0">
                        {act.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[0.65rem] text-muted font-light">⏱ {act.duration}</span>
                    <span className="text-sm font-semibold text-teal">{act.price}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="bg-white px-5 py-2 border-t border-parchment-2">
            <p className="text-xs text-muted/60 font-light">
              Affiliate links — we earn a small commission at no extra cost to you.
            </p>
          </div>
        </div>
      )}

      {/* Generic fallback CTAs — shown when no specific hotels/activities are provided */}
      {hotels.length === 0 && activities.length === 0 && (
        <div className="rounded-2xl border-2 border-gold/30 overflow-hidden shadow-sm">
          <div className="bg-gold/10 px-5 py-4 border-b border-gold/20">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xl">🏨</span>
              <div>
                <p className="text-sm font-semibold text-ink">Where to Stay in {destination}</p>
                <p className="text-[0.65rem] text-muted font-light">Compare prices · Free cancellation on most rooms</p>
              </div>
            </div>
            <a
              href={AFFILIATE.bookingCom(destination)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block w-full text-center text-sm text-white bg-[#003580] hover:bg-[#00224f] px-4 py-3 rounded-xl font-medium transition-colors"
              onClick={() => trackEvent("affiliate_clicked", { destination, provider: "booking" })}
            >
              Search Hotels in {destination} on Booking.com →
            </a>
          </div>
          <div className="bg-white px-5 py-4 border-b border-parchment-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-xl">🎯</span>
              <div>
                <p className="text-sm font-semibold text-ink">Tours &amp; Activities in {destination}</p>
                <p className="text-[0.65rem] text-muted font-light">Skip the queue · Instant confirmation · Free cancellation</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={AFFILIATE.getYourGuide(destination)}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-1 block text-center text-sm text-white bg-[#FF5533] hover:bg-[#cc4429] px-4 py-3 rounded-xl font-medium transition-colors"
                onClick={() => trackEvent("affiliate_clicked", { destination, provider: "getyourguide" })}
              >
                GetYourGuide →
              </a>
              <a
                href={AFFILIATE.viator(destination)}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex-1 block text-center text-sm text-white bg-[#1A1A2E] hover:bg-black px-4 py-3 rounded-xl font-medium transition-colors"
                onClick={() => trackEvent("affiliate_clicked", { destination, provider: "viator" })}
              >
                Viator →
              </a>
            </div>
          </div>
          <div className="bg-white px-5 py-2">
            <p className="text-xs text-muted/60 font-light">
              Affiliate links — we earn a small commission at no extra cost to you. Helps keep our guides free.
            </p>
          </div>
        </div>
      )}

      {/* PDF upsell */}
      {pdfProduct && (
        <div className={`rounded-2xl border p-5 ${pdfProduct.color} flex flex-col sm:flex-row items-start sm:items-center gap-5`}>
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className="text-3xl flex-shrink-0">{pdfProduct.emoji}</span>
            <div>
              <p className="font-serif text-base font-normal text-ink leading-tight mb-0.5">
                {pdfProduct.title}
              </p>
              <p className="text-xs text-muted font-light">
                {pdfProduct.pages} · Instant download · Free updates
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="font-serif text-lg font-light text-ink">
                  {pdfProduct.currency}{pdfProduct.price}
                </span>
                <span className="text-xs text-muted line-through">
                  {pdfProduct.currency}{pdfProduct.originalPrice}
                </span>
              </div>
            </div>
          </div>
          <a
            href={pdfProduct.razorpayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-5 py-2.5 bg-gold text-ink text-xs font-medium tracking-wide uppercase rounded-lg hover:bg-gold-dark hover:text-white transition-all duration-200 whitespace-nowrap"
          >
            Download PDF →
          </a>
        </div>
      )}
    </div>
  );
}
