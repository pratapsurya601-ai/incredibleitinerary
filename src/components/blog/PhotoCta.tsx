import Link from "next/link";

interface PhotoCtaProps {
  destination: string;
}

export default function PhotoCta({ destination }: PhotoCtaProps) {
  return (
    <div className="my-10 rounded-2xl border border-parchment-2 bg-parchment px-7 py-6 flex flex-col sm:flex-row sm:items-center gap-5">
      <div className="flex-1 min-w-0">
        <h3 className="font-serif text-[1.15rem] font-light text-ink mb-1">
          📸 Been to {destination}?
        </h3>
        <p className="text-sm text-muted font-light leading-relaxed">
          Share your photos and get featured in this guide with full credit.
          Your real photos help thousands of travellers plan better trips.
        </p>
      </div>
      <Link
        href="/contribute"
        className="flex-shrink-0 inline-flex items-center gap-2 bg-gold text-ink text-sm font-medium px-5 py-2.5 rounded-xl hover:bg-gold/90 transition-colors whitespace-nowrap"
      >
        Share Your Photos →
      </Link>
    </div>
  );
}
