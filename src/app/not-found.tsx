import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 text-center">
      <div>
        <p className="font-serif text-[6rem] font-light text-gold leading-none mb-4">
          404
        </p>
        <h1 className="font-serif text-3xl font-light text-ink mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-muted font-light mb-8 max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. Maybe it was moved, or
          you mistyped the URL.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/" className="btn-gold inline-flex">
            Back to Home →
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-sm rounded-[1px] hover:border-gold hover:text-gold transition-all"
          >
            Browse Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
