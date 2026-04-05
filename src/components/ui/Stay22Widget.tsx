"use client";

interface Stay22WidgetProps {
  destination: string; // e.g. "Goa, India"
  label?: string;      // e.g. "Goa"
}

export default function Stay22Widget({ destination, label }: Stay22WidgetProps) {
  const campaignId = process.env.NEXT_PUBLIC_STAY22_ID || "incredibleitinerary";
  const src = `https://www.stay22.com/embed/map?campaignid=${encodeURIComponent(campaignId)}&address=${encodeURIComponent(destination)}`;

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
      <div className="rounded-2xl overflow-hidden border border-parchment-2 shadow-sm">
        <iframe
          src={src}
          width="100%"
          height="480"
          frameBorder="0"
          title={`Hotels in ${label || destination}`}
          loading="lazy"
          style={{ display: "block" }}
        />
      </div>
      <p className="text-[0.62rem] text-muted/60 mt-2 text-center font-light">
        Prices shown are per night · Updated in real-time · Book directly for best rates
      </p>
    </div>
  );
}
