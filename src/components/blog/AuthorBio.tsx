import Image from "next/image";
import Link from "next/link";

interface AuthorBioProps {
  date?: string;
  readTime?: string;
}

export default function AuthorBio({ date, readTime }: AuthorBioProps) {
  return (
    <div
      className="rounded-2xl overflow-hidden my-10 not-prose"
      style={{
        background: "rgba(253,250,244,0.9)",
        border: "1px solid rgba(237,228,210,0.8)",
      }}
    >
      <div className="flex flex-col sm:flex-row items-start gap-5 p-6">
        {/* Avatar */}
        <Link href="/about" className="flex-shrink-0">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold/30 hover:border-gold transition-colors">
            <Image
              src="/images/surya/surya-author-primary.jpg"
              alt="Surya Pratap — Founder of IncredibleItinerary"
              fill
              className="object-cover object-top"
              sizes="64px"
            />
          </div>
        </Link>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <Link href="/about" className="text-sm font-semibold text-ink hover:text-gold transition-colors">
              Surya Pratap
            </Link>
            <span className="text-[10px] bg-gold/15 text-gold-dark font-medium px-2 py-0.5 rounded-full">
              Founder
            </span>
            {date && <span className="text-xs text-muted font-light">{date}</span>}
            {readTime && <span className="text-xs text-muted font-light">· {readTime} read</span>}
          </div>
          <p className="text-xs text-muted font-light leading-relaxed mb-3 max-w-[520px]">
            I&apos;m 24, from Delhi — trekked to Kedarnath, Gangotri &amp; Badrinath, driven through Spiti Valley, and logged too many nights on overnight trains across India. I built IncredibleItinerary because every guide I found was vague, outdated, or written by someone who&apos;d never been there.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/about"
              className="text-xs text-gold font-medium hover:underline"
            >
              More about me →
            </Link>
            <a
              href="https://www.linkedin.com/in/surya-pratap-601"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-ink transition-colors flex items-center gap-1"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
