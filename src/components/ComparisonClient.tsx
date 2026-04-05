"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import DownloadButton from "@/components/pdf/DownloadButton";
import type { Comparison } from "@/data/comparisons";

// Map destination hrefs to PDF slugs
const DEST_PDF_SLUGS: Record<string, string> = {
  "/blog/goa-3-days":        "goa-3-days",
  "/blog/kerala-5-days":     "kerala-5-days",
  "/blog/rajasthan-7-days":  "rajasthan-7-days",
  "/blog/kashmir-6-days":    "kashmir-6-days",
  "/blog/manali-5-days":     "manali-5-days",
  "/blog/leh-ladakh-7-days": "leh-ladakh-7-days",
  "/blog/bali-5-days":       "bali-5-days",
  "/blog/bangkok-4-days":    "bangkok-4-days",
  "/blog/dubai-4-days":      "dubai-4-days",
};

/* ── Winner badge ───────────────────────────────────────────────────────────── */
function WinnerBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-2xs font-sans font-medium tracking-widest uppercase text-gold-dark">
      <span aria-hidden>&#9733;</span> Winner
    </span>
  );
}

/* ── Pros / Cons list ───────────────────────────────────────────────────────── */
function ProConList({
  items,
  type,
}: {
  items: string[];
  type: "pro" | "con";
}) {
  const icon = type === "pro" ? "\u2713" : "\u2717";
  const color = type === "pro" ? "text-teal" : "text-rust";
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-sm font-sans font-light leading-relaxed text-ink dark:text-white/80">
          <span className={`mt-0.5 font-medium ${color}`}>{icon}</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ── Category comparison row ────────────────────────────────────────────────── */
function CategoryRow({
  name,
  dest1Text,
  dest2Text,
  winner,
  dest1Name,
  dest2Name,
}: {
  name: string;
  dest1Text: string;
  dest2Text: string;
  winner: 1 | 2 | 0;
  dest1Name: string;
  dest2Name: string;
}) {
  return (
    <div className="border border-parchment-2 rounded-lg overflow-hidden bg-cream dark:bg-[#1a1209] dark:border-white/10">
      <div className="bg-parchment dark:bg-[#161008] px-5 py-3 flex items-center justify-between">
        <h3 className="font-serif text-lg font-light text-ink dark:text-white/90">
          {name}
        </h3>
        {winner !== 0 && (
          <span className="text-2xs font-sans font-medium tracking-widest uppercase text-gold-dark">
            {winner === 1 ? dest1Name : dest2Name} edges it
          </span>
        )}
        {winner === 0 && (
          <span className="text-2xs font-sans font-medium tracking-widest uppercase text-muted">
            Tie
          </span>
        )}
      </div>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-parchment-2 dark:divide-white/10">
        <div className={`p-5 ${winner === 1 ? "bg-gold/5" : ""}`}>
          <p className="text-xs font-sans font-medium tracking-wider uppercase text-muted mb-2">
            {dest1Name}
          </p>
          <p className="text-sm font-sans font-light leading-relaxed text-ink dark:text-white/80">
            {dest1Text}
          </p>
          {winner === 1 && (
            <div className="mt-2">
              <WinnerBadge />
            </div>
          )}
        </div>
        <div className={`p-5 ${winner === 2 ? "bg-gold/5" : ""}`}>
          <p className="text-xs font-sans font-medium tracking-wider uppercase text-muted mb-2">
            {dest2Name}
          </p>
          <p className="text-sm font-sans font-light leading-relaxed text-ink dark:text-white/80">
            {dest2Text}
          </p>
          {winner === 2 && (
            <div className="mt-2">
              <WinnerBadge />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Main client component ──────────────────────────────────────────────────── */
export default function ComparisonClient({
  comparison,
}: {
  comparison: Comparison;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const { dest1, dest2, categories, verdict } = comparison;

  const dest1Wins = categories.filter((c) => c.winner === 1).length;
  const dest2Wins = categories.filter((c) => c.winner === 2).length;

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative bg-ink dark:bg-[#0a0704] pt-32 pb-16 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,169,110,0.08),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="section-label text-gold-light block mb-4">
            Destination Comparison
          </span>
          <h1 className="serif-title text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            {comparison.title}
          </h1>
          <p className="font-sans font-light text-white/60 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            {comparison.description}
          </p>

          {/* Quick score */}
          <div className="mt-10 flex items-center justify-center gap-6 md:gap-10">
            <div className="text-center">
              <span className="text-3xl md:text-4xl block mb-1">{dest1.emoji}</span>
              <span className="font-serif text-xl md:text-2xl text-white">
                {dest1.name}
              </span>
              <span className="block text-gold text-lg font-serif mt-1">
                {dest1Wins} {dest1Wins === 1 ? "win" : "wins"}
              </span>
            </div>
            <span className="font-serif text-2xl text-white/50 italic">vs</span>
            <div className="text-center">
              <span className="text-3xl md:text-4xl block mb-1">{dest2.emoji}</span>
              <span className="font-serif text-xl md:text-2xl text-white">
                {dest2.name}
              </span>
              <span className="block text-gold text-lg font-serif mt-1">
                {dest2Wins} {dest2Wins === 1 ? "win" : "wins"}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick stats cards ────────────────────────────────────────────── */}
      <section className="bg-cream dark:bg-[#0e0a06] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[dest1, dest2].map((dest) => (
              <div
                key={dest.name}
                className="border border-parchment-2 dark:border-white/10 rounded-lg p-6 bg-white dark:bg-[#1a1209]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{dest.emoji}</span>
                  <h2 className="font-serif text-2xl font-light text-ink dark:text-white/90">
                    {dest.name}
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-2xs font-sans font-medium tracking-widest uppercase text-muted mb-1">
                      Best For
                    </p>
                    <p className="text-xs font-sans font-light text-ink dark:text-white/80">
                      {dest.bestFor}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xs font-sans font-medium tracking-widest uppercase text-muted mb-1">
                      Budget
                    </p>
                    <p className="text-xs font-sans font-light text-ink dark:text-white/80">
                      &#8377;{dest.budget}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xs font-sans font-medium tracking-widest uppercase text-muted mb-1">
                      Duration
                    </p>
                    <p className="text-xs font-sans font-light text-ink dark:text-white/80">
                      {dest.duration}
                    </p>
                  </div>
                </div>

                {/* Pros */}
                <div className="mb-4">
                  <p className="text-xs font-sans font-medium tracking-wider uppercase text-teal mb-2">
                    Pros
                  </p>
                  <ProConList items={dest.pros} type="pro" />
                </div>

                {/* Cons */}
                <div className="mb-5">
                  <p className="text-xs font-sans font-medium tracking-wider uppercase text-rust mb-2">
                    Cons
                  </p>
                  <ProConList items={dest.cons} type="con" />
                </div>

                <Link
                  href={dest.href}
                  className="inline-flex items-center gap-1.5 text-xs font-sans font-medium tracking-wider uppercase text-gold-dark hover:text-gold transition-colors"
                >
                  Read full {dest.name} guide
                  <span aria-hidden>&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category-by-category comparison ──────────────────────────────── */}
      <section className="bg-parchment dark:bg-[#161008] py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label">Head to Head</span>
            <h2 className="serif-title text-2xl sm:text-3xl text-ink dark:text-white/90">
              Category Breakdown
            </h2>
          </div>
          <div className="space-y-5">
            {categories.map((cat) => (
              <CategoryRow
                key={cat.name}
                name={cat.name}
                dest1Text={cat.dest1}
                dest2Text={cat.dest2}
                winner={cat.winner}
                dest1Name={dest1.name}
                dest2Name={dest2.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Verdict ──────────────────────────────────────────────────────── */}
      <section className="bg-cream dark:bg-[#0e0a06] py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label">Our Verdict</span>
          <h2 className="serif-title text-2xl sm:text-3xl text-ink dark:text-white/90 mb-6">
            So, Which One?
          </h2>
          <p className="font-sans font-light text-sm md:text-base leading-relaxed text-ink/80 dark:text-white/70">
            {verdict}
          </p>
        </div>
      </section>

      {/* ── PDF Download Strip ───────────────────────────────────────────── */}
      {(DEST_PDF_SLUGS[dest1.href] || DEST_PDF_SLUGS[dest2.href]) && (
        <section className="bg-amber-50 border-y border-gold/30 py-10">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-gold-dark text-xs tracking-[0.18em] uppercase font-medium mb-2">Free PDF Guides</p>
            <h3 className="font-serif text-xl text-ink font-light mb-6">
              Take the guides offline — download for free
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {DEST_PDF_SLUGS[dest1.href] && (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">{dest1.emoji}</span>
                  <DownloadButton
                    slug={DEST_PDF_SLUGS[dest1.href]}
                    title={`${dest1.name} Guide`}
                    variant="primary"
                    className="text-xs"
                  />
                </div>
              )}
              {DEST_PDF_SLUGS[dest2.href] && (
                <div className="flex flex-col items-center gap-2">
                  <span className="text-2xl">{dest2.emoji}</span>
                  <DownloadButton
                    slug={DEST_PDF_SLUGS[dest2.href]}
                    title={`${dest2.name} Guide`}
                    variant="primary"
                    className="text-xs"
                  />
                </div>
              )}
            </div>
            <p className="text-muted/50 text-xs mt-4">2 guides free per email · No credit card</p>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-ink dark:bg-[#0a0704] py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label text-gold-light block mb-3">
            Still not sure?
          </span>
          <h2 className="serif-title text-2xl sm:text-3xl text-white mb-4">
            Let Us Plan It for You
          </h2>
          <p className="font-sans font-light text-white/50 text-sm mb-8 max-w-xl mx-auto">
            Tell us your dates, budget and travel style. We will build a
            personalised itinerary covering both {dest1.name} and {dest2.name} if
            you want, or whichever one is the better fit.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-gold"
          >
            Plan My Trip
          </button>
        </div>
      </section>

      {/* ── Read the guides ──────────────────────────────────────────────── */}
      <section className="bg-parchment dark:bg-[#161008] py-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="section-label">Dive Deeper</span>
            <h2 className="serif-title text-xl sm:text-2xl text-ink dark:text-white/90">
              Read the Full Guides
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[dest1, dest2].map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="flex items-center gap-4 border border-parchment-2 dark:border-white/10 rounded-lg p-5 bg-cream dark:bg-[#1a1209] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-3xl">{dest.emoji}</span>
                <div>
                  <p className="font-serif text-lg font-light text-ink dark:text-white/90">
                    {dest.name} Guide
                  </p>
                  <p className="text-xs font-sans text-muted">
                    {dest.duration} itinerary &middot; Full day-by-day plan
                  </p>
                </div>
                <span className="ml-auto text-gold-dark" aria-hidden>
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
