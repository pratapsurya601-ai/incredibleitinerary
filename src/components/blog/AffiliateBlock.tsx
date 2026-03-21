"use client";
import { AFFILIATE, SHOP_PRODUCTS } from "@/lib/config";

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
        <div className="bg-parchment rounded-2xl border border-parchment-2 overflow-hidden">
          <div className="px-5 py-3 border-b border-parchment-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">🏨</span>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted">
                Where to Stay in {destination}
              </p>
            </div>
            <a
              href={AFFILIATE.bookingCom(destination)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-[0.65rem] text-gold-dark font-medium hover:underline underline-offset-2"
            >
              See all on Booking.com →
            </a>
          </div>
          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {hotels.map((hotel) => (
              <a
                key={hotel.name}
                href={hotel.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-parchment flex items-center justify-center flex-shrink-0 text-base">
                  🏨
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="text-xs font-medium text-ink truncate group-hover:text-teal transition-colors">
                      {hotel.name}
                    </p>
                    {hotel.badge && (
                      <span className="text-[0.55rem] bg-gold/15 text-gold-dark px-1.5 py-0.5 rounded-full font-medium flex-shrink-0">
                        {hotel.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[0.65rem] text-muted font-light">{hotel.type}</p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[0.65rem] text-teal font-medium">{hotel.price}</span>
                    <span className="text-[0.65rem] text-gold">{"★".repeat(parseInt(hotel.rating))}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="px-5 py-2 border-t border-parchment-2">
            <p className="text-[0.6rem] text-muted/60 font-light">
              * Affiliate links — we earn a small commission at no extra cost to you. Helps keep our guides free.
            </p>
          </div>
        </div>
      )}

      {/* Activities */}
      {activities.length > 0 && (
        <div className="bg-parchment rounded-2xl border border-parchment-2 overflow-hidden">
          <div className="px-5 py-3 border-b border-parchment-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">🎯</span>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted">
                Things to Do in {destination}
              </p>
            </div>
            <a
              href={AFFILIATE.getYourGuide(destination)}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-[0.65rem] text-gold-dark font-medium hover:underline underline-offset-2"
            >
              All activities on GetYourGuide →
            </a>
          </div>
          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activities.map((act) => (
              <a
                key={act.name}
                href={act.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="flex items-start gap-3 p-3 bg-white rounded-xl border border-parchment-2 hover:border-gold hover:shadow-sm transition-all duration-200 group"
              >
                <div className="w-9 h-9 rounded-lg bg-parchment flex items-center justify-center flex-shrink-0 text-base">
                  🎯
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <p className="text-xs font-medium text-ink group-hover:text-teal transition-colors leading-tight">
                      {act.name}
                    </p>
                    {act.badge && (
                      <span className="text-[0.55rem] bg-teal/10 text-teal px-1.5 py-0.5 rounded-full font-medium flex-shrink-0">
                        {act.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[0.65rem] text-muted font-light">⏱ {act.duration}</p>
                  <p className="text-[0.65rem] text-teal font-medium mt-0.5">{act.price}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="px-5 py-2 border-t border-parchment-2">
            <p className="text-[0.6rem] text-muted/60 font-light">
              * Affiliate links — we earn a small commission at no extra cost to you.
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
            href={pdfProduct.gumroadUrl}
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
