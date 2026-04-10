import Image from "next/image";
import Link from "next/link";

interface AuthorBylineProps {
  date?: string;
  readTime?: string;
  compact?: boolean; // true = single line (for blog cards), false = full card
}

export default function AuthorByline({ date, readTime, compact = false }: AuthorBylineProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/surya/surya-author-primary.jpg"
            alt="Surya Pratap"
            fill unoptimized
            className="object-cover object-top"
            sizes="24px"
          />
        </div>
        <span className="text-xs text-muted font-light">
          Surya Pratap
          {date && <> · {date}</>}
          {readTime && <> · {readTime} read</>}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 py-4 border-t border-b border-parchment-2 my-6">
      <Link href="/about" className="flex-shrink-0">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-gold/20 hover:border-gold transition-colors">
          <Image
            src="/images/surya/surya-author-primary.jpg"
            alt="Surya Pratap — Founder IncredibleItinerary"
            fill unoptimized
            className="object-cover object-top"
            sizes="44px"
          />
        </div>
      </Link>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/about" className="text-sm font-medium text-ink hover:text-gold transition-colors">
            Surya Pratap
          </Link>
          <span className="text-[10px] bg-gold/15 text-gold-dark font-medium px-2 py-0.5 rounded-full">
            Founder
          </span>
        </div>
        <p className="text-[11px] text-muted font-light">
          Delhi · Visited: Kedarnath, Gangotri, Manali, Shimla, Rishikesh &amp; more
          {date && <> · {date}</>}
          {readTime && <> · {readTime} read</>}
        </p>
      </div>
      <Link
        href="/about"
        className="hidden sm:inline-flex text-[11px] text-muted hover:text-gold transition-colors font-light flex-shrink-0"
      >
        About the author →
      </Link>
    </div>
  );
}
