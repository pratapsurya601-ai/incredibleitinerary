"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <Navbar onPlanTrip={() => {}} />

      <div className="min-h-screen bg-cream flex items-center justify-center px-6 text-center pt-[72px]">
        <div>
          <p className="font-serif text-[5rem] font-light text-gold leading-none mb-4">
            Oops
          </p>
          <h1 className="font-serif text-3xl font-light text-ink mb-3">
            Something went wrong
          </h1>
          <p className="text-sm text-muted font-light mb-8 max-w-sm mx-auto leading-relaxed">
            An unexpected error occurred. Please try again, or head back to the
            homepage.
          </p>
          {error?.digest && (
            <p className="text-xs text-muted/80 mb-6 font-mono">
              Error ID: {error.digest}
            </p>
          )}
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={reset} className="btn-gold inline-flex">
              Try Again
            </button>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-sm rounded-[1px] hover:border-gold hover:text-gold transition-all"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
