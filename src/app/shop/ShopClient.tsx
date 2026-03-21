"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import { SHOP_PRODUCTS } from "@/lib/config";

// ── Product Card ──────────────────────────────────────────────────────────────
function ProductCard({ product, featured = false }: {
  product: typeof SHOP_PRODUCTS[0];
  featured?: boolean;
}) {
  const [buying, setBuying] = useState(false);

  const handleBuy = () => {
    setBuying(true);
    // Open Gumroad overlay
    if (product.gumroadUrl && !product.gumroadUrl.includes("YOUR_")) {
      window.open(product.gumroadUrl, "_blank");
    } else {
      alert("Payment link coming soon! WhatsApp us to get this PDF directly.");
    }
    setTimeout(() => setBuying(false), 2000);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      featured ? "border-gold shadow-lg" : "border-parchment-2"
    }`}>
      {/* Badge */}
      <div className={`px-5 py-2.5 flex items-center justify-between ${featured ? "bg-gold" : "bg-parchment"}`}>
        <span className={`text-[0.65rem] font-semibold tracking-[0.15em] uppercase ${featured ? "text-ink" : "text-muted"}`}>
          {product.badge}
        </span>
        <span className={`text-[0.65rem] font-medium px-2 py-0.5 rounded-full ${featured ? "bg-ink/15 text-ink" : "bg-gold/15 text-gold-dark"}`}>
          {discount}% off
        </span>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className={`w-14 h-14 rounded-xl border flex items-center justify-center text-2xl flex-shrink-0 ${product.color}`}>
            {product.emoji}
          </div>
          <div>
            <h3 className="font-serif text-lg font-normal text-ink leading-tight mb-1">
              {product.title}
            </h3>
            <p className="text-xs text-muted font-light leading-relaxed">
              {product.subtitle}
            </p>
          </div>
        </div>

        {/* Meta pills */}
        <div className="flex gap-2 flex-wrap mb-5">
          <span className="text-[0.65rem] px-2.5 py-1 rounded-full bg-parchment text-muted border border-parchment-2">
            📄 {product.pages}
          </span>
          <span className="text-[0.65rem] px-2.5 py-1 rounded-full bg-parchment text-muted border border-parchment-2">
            ⚡ Instant download
          </span>
          <span className="text-[0.65rem] px-2.5 py-1 rounded-full bg-parchment text-muted border border-parchment-2">
            🔄 Free updates
          </span>
        </div>

        {/* What's included */}
        <div className="mb-6">
          <p className="text-[0.65rem] tracking-[0.15em] uppercase text-muted font-medium mb-3">
            What&apos;s inside
          </p>
          <ul className="space-y-1.5">
            {product.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted font-light leading-relaxed">
                <span className="text-teal mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="h-px bg-parchment-2 mb-5" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-[2rem] font-light text-ink leading-none">
                {product.currency}{product.price}
              </span>
              <span className="text-sm text-muted line-through font-light">
                {product.currency}{product.originalPrice}
              </span>
            </div>
            <p className="text-[0.65rem] text-muted font-light mt-0.5">
              One-time payment · Instant download
            </p>
          </div>
          <button
            onClick={handleBuy}
            disabled={buying}
            className={`px-5 py-3 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 ${
              featured
                ? "bg-gold text-ink hover:bg-gold-dark hover:text-white"
                : "bg-ink text-white hover:bg-ink-mid"
            } disabled:opacity-60`}
          >
            {buying ? "Opening..." : "Buy Now →"}
          </button>
        </div>

        {/* Guarantee */}
        <div className="flex items-center gap-2 p-3 bg-parchment rounded-lg border border-parchment-2">
          <span className="text-base">🔒</span>
          <p className="text-[0.65rem] text-muted font-light leading-relaxed">
            Secure payment via Gumroad. Instant delivery to your email.
            100% satisfaction guarantee — full refund if not happy.
          </p>
        </div>
      </div>
    </div>
  );
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function ShopClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const faqs = [
    { q: "How do I receive the PDF?", a: "Immediately after payment, Gumroad sends the PDF to your email. You can also download it directly from the Gumroad confirmation page. No waiting." },
    { q: "What format is the PDF in?", a: "Standard PDF — works on any device. Mobile, tablet, laptop. You can print it or save it offline for travel with no internet." },
    { q: "Can I share the PDF with my travel group?", a: "Yes — share it with your travel companions. We only ask that you don't resell or publicly distribute it." },
    { q: "What if the information is outdated?", a: "We update all PDFs regularly. If you've already purchased and a major update is released, email us and we'll send you the new version free." },
    { q: "I want a custom itinerary, not a template PDF.", a: "That's what our free trip planning service is for! Fill the inquiry form and we'll build a personalised plan for your exact dates, group and budget within 24 hours." },
    { q: "Do you accept UPI / Razorpay?", a: "Currently payments go through Gumroad (accepts UPI, cards, net banking). We're also setting up direct Razorpay integration — coming soon." },
  ];

  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />

      <main className="bg-cream min-h-screen pt-[72px]">

        {/* ── HERO ── */}
        <div className="bg-ink py-14 px-6 md:px-12 text-center">
          <div className="max-w-[680px] mx-auto">
            <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold block mb-3">
              Digital Downloads
            </span>
            <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white leading-tight mb-4">
              Ready-Made India Itineraries
              <em className="italic text-gold-light"> — Instant Download</em>
            </h1>
            <p className="text-sm text-white/55 font-light leading-relaxed mb-8 max-w-[480px] mx-auto">
              Buy once, travel better. These are the exact guides we use with our
              private trip planning clients — day-by-day plans, real budgets,
              Google Maps routes, restaurant picks and insider tips.
            </p>
            {/* Trust row */}
            <div className="flex items-center justify-center gap-5 flex-wrap">
              {[
                { icon: "⚡", text: "Instant delivery" },
                { icon: "🔒", text: "Secure payment" },
                { icon: "✓", text: "100% satisfaction" },
                { icon: "🔄", text: "Free updates" },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-1.5 text-xs text-white/50">
                  <span>{t.icon}</span>
                  <span>{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PRODUCTS ── */}
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-16">

          {/* Compare vs custom planning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 p-6 bg-parchment rounded-2xl border border-parchment-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-3">
                📄 PDF Itinerary — Buy once
              </p>
              <ul className="space-y-1.5">
                {["Ready in seconds", "Fixed plan for the most popular routes", "Perfect for independent travellers", "Covers every standard situation", "₹149–₹299 one-time"].map(t => (
                  <li key={t} className="flex items-center gap-2 text-xs text-muted font-light">
                    <span className="text-teal">✓</span>{t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-3">
                ✦ Custom Itinerary — Free service
              </p>
              <ul className="space-y-1.5">
                {["Built for your exact dates", "Your specific group + budget", "Unusual routes or combinations", "Personal hotel + guide recommendations", "Free — takes 24hrs"].map(t => (
                  <li key={t} className="flex items-center gap-2 text-xs text-muted font-light">
                    <span className="text-gold-dark">✓</span>{t}
                  </li>
                ))}
              </ul>
              <button onClick={() => setModalOpen(true)}
                className="mt-4 text-xs font-medium text-gold-dark underline underline-offset-2 hover:text-teal transition-colors">
                Get free custom plan →
              </button>
            </div>
          </div>

          {/* Product grid */}
          <div className="mb-6">
            <span className="section-label">All Products</span>
            <h2 className="font-serif text-[clamp(1.8rem,3vw,2.5rem)] font-light text-ink mb-2">
              Download & Start Planning
            </h2>
            <p className="text-sm text-muted font-light">
              Instant PDF download after payment. Works on any device.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {SHOP_PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} featured={i === 0} />
            ))}
          </div>

          {/* Bundle deal */}
          <div className="bg-ink rounded-2xl p-8 md:p-10 mb-16 text-center">
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-gold block mb-2">
              Best Value
            </span>
            <h2 className="font-serif text-[1.9rem] font-light text-white mb-3">
              Get All 3 PDFs — Save 40%
            </h2>
            <p className="text-sm text-white/55 font-light mb-2 max-w-sm mx-auto leading-relaxed">
              Goa + Rajasthan + India Budget Guide
            </p>
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="font-serif text-[2.5rem] font-light text-gold">₹449</span>
              <span className="text-white/40 line-through text-lg">₹747</span>
              <span className="text-xs text-gold-light bg-gold/15 px-2 py-1 rounded-full">Save ₹298</span>
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="https://gumroad.com/l/YOUR_BUNDLE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex"
              >
                Buy Bundle — ₹449 →
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-teal text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[1px] hover:bg-teal/80 transition-colors">Plan My Trip →</a>
            </div>
            <p className="text-xs text-white/30 mt-4">
              Bundle also available via WhatsApp — pay via UPI and get PDFs instantly
            </p>
          </div>

          {/* FAQ */}
          <div className="max-w-[680px] mx-auto mb-16">
            <h2 className="font-serif text-[1.9rem] font-light text-ink mb-6 text-center">
              Questions About the PDFs
            </h2>
            <div className="space-y-2">
              {faqs.map((f, i) => (
                <FaqItem key={i} q={f.q} a={f.a} />
              ))}
            </div>
          </div>

          {/* Custom plan CTA */}
          <div className="bg-parchment rounded-2xl p-8 text-center border border-parchment-2">
            <p className="text-2xl mb-3">✦</p>
            <h3 className="font-serif text-xl font-light text-ink mb-2">
              Need something more personalised?
            </h3>
            <p className="text-sm text-muted font-light mb-6 max-w-md mx-auto leading-relaxed">
              Our free custom itinerary service builds a plan around your exact
              dates, group size, and budget. Takes 24 hours. Completely free.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setModalOpen(true)} className="btn-gold">
                Get Free Custom Plan →
              </button>
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-parchment-2 text-muted text-[0.78rem] font-light tracking-[0.1em] uppercase rounded-[1px] hover:border-gold hover:text-gold transition-all">
                Read Free Guides
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-parchment-2 rounded-xl overflow-hidden bg-white">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-parchment transition-colors">
        <span className="font-medium text-sm text-ink pr-4">{q}</span>
        <span className={`text-gold text-lg flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          +
        </span>
      </button>
      {open && (
        <div className="px-5 pb-4 pt-1 border-t border-parchment-2">
          <p className="text-sm text-muted font-light leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}
