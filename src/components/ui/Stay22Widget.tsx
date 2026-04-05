"use client";

interface Stay22WidgetProps {
  destination: string; // e.g. "Goa, India"
  label?: string;      // e.g. "Goa"
}

export default function Stay22Widget({ destination, label }: Stay22WidgetProps) {
  const bookingUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination)}&aid=2820480&lang=en-us&sb=1&src=searchresults&src_elem=sb`;

  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <div>
          <p className="text-[0.68rem] tracking-[0.18em] uppercase text-gold font-medium mb-1">
            Where to Stay
          </p>
          <h3 className="font-serif text-xl font-light text-ink">
            Hotels in {label || destination}
          </h3>
        </div>
        <p className="text-xs text-muted font-light">
          Best-rated • All budgets • Instant booking
        </p>
      </div>
      <div className="rounded-2xl overflow-hidden border border-parchment-2 shadow-sm bg-parchment p-8 flex flex-col items-center gap-5 text-center">
        <p className="text-sm text-muted font-light max-w-md">
          Compare prices across hundreds of hotels, guesthouses, and resorts in {label || destination}. Best price guarantee on Booking.com.
        </p>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gold text-white text-sm font-medium px-6 py-3 rounded-xl hover:bg-gold/90 transition-colors"
        >
          Search Hotels in {label || destination} →
        </a>
        <p className="text-xs text-muted/60 font-light">
          Opens Booking.com · Free cancellation options available
        </p>
      </div>
    </div>
  );
}
