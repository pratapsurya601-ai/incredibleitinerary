"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";
import DownloadButton from "@/components/pdf/DownloadButton";
import { SHOP_PRODUCTS } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

// ── Product Card ──────────────────────────────────────────────────────────────
function ProductCard({ product, featured = false }: {
  product: typeof SHOP_PRODUCTS[0] & { downloadSlug?: string };
  featured?: boolean;
}) {
  const [buying, setBuying] = useState(false);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleBuy = () => {
    // Show email prompt first — we need it to deliver the PDF after payment
    setShowEmailPrompt(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setBuying(true);
    // Store email so /shop/success can retrieve it
    try { localStorage.setItem("ii_pending_email", trimmed); } catch {}
    trackEvent("shop_product_clicked", { product: product.id, destination: product.destination });
    if (product.razorpayUrl) {
      // Razorpay will redirect to /shop/success after payment
      window.location.href = product.razorpayUrl;
    } else {
      window.location.href = "/unlock";
    }
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  const hasFreeDownload = !!product.downloadSlug;

  return (
    <>
    {/* Email prompt modal — shown before redirecting to Razorpay */}
    {showEmailPrompt && (
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
        onClick={(e) => { if (e.target === e.currentTarget) { setShowEmailPrompt(false); setBuying(false); } }}
      >
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
          <button
            onClick={() => { setShowEmailPrompt(false); setBuying(false); }}
            className="absolute top-4 right-4 text-muted hover:text-ink text-xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-serif text-xl text-ink mb-2 leading-tight">
              Where should we send your PDF?
            </h3>
            <p className="text-xs text-muted font-light leading-relaxed">
              Enter your email below. After payment, your download link is ready
              instantly — we&apos;ll also email a copy so you never lose it.
            </p>
          </div>
          <form onSubmit={handleEmailSubmit} className="space-y-3">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                placeholder="yourname@gmail.com"
                className="w-full px-4 py-3 border border-parchment-2 rounded-lg text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
                autoFocus
                required
              />
              {emailError && (
                <p className="text-xs text-red-500 mt-1.5">{emailError}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={buying}
              className={`w-full py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 ${
                featured
                  ? "bg-gold text-ink hover:bg-gold-dark"
                  : "bg-ink text-white hover:bg-ink-mid"
              } disabled:opacity-60`}
            >
              {buying
                ? "Redirecting to payment…"
                : `Pay ${product.currency}${product.price} — Instant Download →`}
            </button>
            <p className="text-[0.65rem] text-muted text-center font-light">
              🔒 Secure payment via Razorpay · UPI · Cards · Net Banking
            </p>
          </form>
        </div>
      </div>
    )}

    <div className={`bg-white rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      featured ? "border-gold shadow-lg" : "border-parchment-2"
    }`}>
      {/* Badge */}
      <div className={`px-5 py-2.5 flex items-center justify-between ${featured ? "bg-gold" : "bg-parchment"}`}>
        <span className={`text-[0.65rem] font-semibold tracking-[0.15em] uppercase ${featured ? "text-ink" : "text-muted"}`}>
          {product.badge}
        </span>
        <div className="flex items-center gap-2">
          {hasFreeDownload && (
            <span className="text-[0.6rem] font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full border border-green-200">
              🎁 Free sample
            </span>
          )}
          <span className={`text-[0.65rem] font-medium px-2 py-0.5 rounded-full ${featured ? "bg-ink/15 text-ink" : "bg-gold/15 text-gold-dark"}`}>
            {discount}% off
          </span>
        </div>
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

        {/* Star rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-gold text-xs">★</span>
            ))}
          </div>
          <span className="text-[0.65rem] text-muted font-light">4.9 · 200+ downloads</span>
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

        {/* Free download strip — shown only for guides with a live PDF */}
        {hasFreeDownload && (
          <div className="mb-4 p-3.5 bg-amber-50 border border-gold/30 rounded-xl">
            <p className="text-[0.65rem] text-amber-700 font-medium mb-2">
              🎁 Try before you buy — download a free sample
            </p>
            <DownloadButton
              slug={product.downloadSlug!}
              title={product.title}
              variant="secondary"
              className="w-full justify-center text-xs !px-3 !py-2"
            />
          </div>
        )}

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
            {buying ? "Going..." : "Buy Now →"}
          </button>
        </div>

        {/* Guarantee */}
        <div className="flex items-center gap-2 p-3 bg-parchment rounded-lg border border-parchment-2">
          <span className="text-base">🔒</span>
          <p className="text-[0.65rem] text-muted font-light leading-relaxed">
            Secure payment via Razorpay — UPI, Cards, Net Banking. Instant delivery.
            100% satisfaction guarantee — full refund if not happy.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
export default function ShopClient() {
  const [modalOpen, setModalOpen] = useState(false);

  // Bundle deal email-first flow
  const [bundleModal, setBundleModal] = useState<{ url: string; label: string; price: string } | null>(null);
  const [bundleEmail, setBundleEmail] = useState("");
  const [bundleEmailError, setBundleEmailError] = useState("");
  const [bundleGoing, setBundleGoing] = useState(false);

  const handleBundleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = bundleEmail.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setBundleEmailError("Please enter a valid email address.");
      return;
    }
    setBundleEmailError("");
    setBundleGoing(true);
    try { localStorage.setItem("ii_pending_email", trimmed); } catch {}
    if (bundleModal?.url) window.location.href = bundleModal.url;
  };

  const faqs = [
    { q: "How do I receive the PDF?", a: "Immediately after payment you can download the PDF directly. We also send it to your email. No waiting — it's instant." },
    { q: "What format is the PDF in?", a: "Standard PDF — works on any device. Mobile, tablet, laptop. You can print it or save it offline for travel with no internet." },
    { q: "Can I share the PDF with my travel group?", a: "Yes — share it with your travel companions. We only ask that you don't resell or publicly distribute it." },
    { q: "What if the information is outdated?", a: "We update all PDFs regularly. If you've already purchased and a major update is released, email us and we'll send you the new version free." },
    { q: "I want a custom itinerary, not a template PDF.", a: "That's what our free trip planning service is for! Fill the inquiry form and we'll build a personalised plan for your exact dates, group and budget within 24 hours." },
    { q: "Do you accept UPI / Razorpay?", a: "Yes! Payments go through Razorpay — supports UPI, Credit/Debit Cards, Net Banking, and Wallets. Very easy for Indian users." },
    { q: "Can I try before buying?", a: "Yes! The Rajasthan and Kerala guides have free sample downloads — enter your email and get the guide instantly. 2 free per email." },
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
            {/* Social proof pill */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="flex -space-x-1.5">
                {["🧑‍💼","👩‍🦱","🧔","👩"].map((a) => (
                  <span key={a} className="w-6 h-6 rounded-full bg-gold/30 border border-white/20 flex items-center justify-center text-xs">{a}</span>
                ))}
              </span>
              <span className="text-xs text-white/70 font-light">
                <strong className="text-white font-medium">2,000+</strong> travellers have downloaded our guides
              </span>
            </div>
            {/* Trust row */}
            <div className="flex items-center justify-center gap-5 flex-wrap">
              {[
                { icon: "⚡", text: "Instant delivery" },
                { icon: "🔒", text: "Razorpay · UPI · Cards" },
                { icon: "✓", text: "100% satisfaction" },
                { icon: "🎁", text: "2 guides free" },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-1.5 text-xs text-white/50">
                  <span>{t.icon}</span>
                  <span>{t.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FREE GUIDES CALLOUT ── */}
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 pt-10">
          <div className="bg-amber-50 border border-gold/40 rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-ink mb-0.5">🎁 Start with 2 free guides</p>
              <p className="text-xs text-muted font-light">
                Rajasthan 7-Day and Kerala 5-Day PDFs are free to download — just enter your email.
                Unlock all 50+ guides for ₹499.
              </p>
            </div>
            <Link
              href="/guides"
              className="flex-shrink-0 bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap"
            >
              See Free Guides →
            </Link>
          </div>
        </div>

        {/* ── TESTIMONIALS ── */}
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 pt-8">
          <div className="text-center mb-6">
            <p className="text-[0.65rem] tracking-[0.15em] uppercase text-muted font-medium mb-1">What travellers say</p>
            <div className="flex items-center justify-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-gold text-base">★</span>
              ))}
              <span className="text-xs text-muted font-light ml-2">4.9 average · 2,000+ downloads</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Priya S.",
                dest: "Rajasthan",
                avatar: "P",
                text: "The budget breakdown alone saved us ₹8,000. Every price, timing and crowd tip was spot on. Best ₹149 I've spent before a trip.",
              },
              {
                name: "Rahul M.",
                dest: "Kerala",
                avatar: "R",
                text: "Used the Kerala guide for our honeymoon. Every restaurant it recommended was perfect. The backwater booking section was a complete lifesaver.",
              },
              {
                name: "Ananya K.",
                dest: "Kashmir",
                avatar: "A",
                text: "Downloaded the Kashmir guide the night before our trip. Honestly better than any travel agent we've used. The houseboat and Gulmarg sections are brilliant.",
              },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl border border-parchment-2 p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-gold text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-muted font-light leading-relaxed mb-4 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-parchment border border-parchment-2 flex items-center justify-center text-xs font-semibold text-ink flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-ink">{t.name}</p>
                    <p className="text-[0.65rem] text-muted font-light">Downloaded: {t.dest} guide</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PRODUCTS ── */}
        <div className="max-w-[1180px] mx-auto px-6 md:px-12 py-12">

          {/* Compare vs custom planning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 p-6 bg-parchment rounded-2xl border border-parchment-2">
            <div>
              <p className="text-xs font-semibold tracking-[0.12em] uppercase text-muted mb-3">
                📄 PDF Itinerary — Buy once
              </p>
              <ul className="space-y-1.5">
                {["Ready in seconds", "Fixed plan for the most popular routes", "Perfect for independent travellers", "Covers every standard situation", "₹149–₹499 one-time"].map(t => (
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
              Unlock All 50+ Guides — ₹499
            </h2>
            <p className="text-sm text-white/55 font-light mb-2 max-w-sm mx-auto leading-relaxed">
              Every guide we&apos;ve made and every guide we&apos;ll ever make.
              India + International. Pay once, download forever.
            </p>
            <div className="flex items-baseline justify-center gap-3 mb-6">
              <span className="font-serif text-[2.5rem] font-light text-gold">₹499</span>
              <span className="text-white/40 line-through text-lg">₹2,000+</span>
              <span className="text-xs text-gold-light bg-gold/15 px-2 py-1 rounded-full">Lifetime access</span>
            </div>
            <div className="flex gap-3 justify-center flex-wrap">
              <button
                onClick={() => { setBundleEmail(""); setBundleEmailError(""); setBundleGoing(false); setBundleModal({ url: "https://rzp.io/rzp/oUANvqjl", label: "All Guides — Lifetime Access", price: "₹499" }); }}
                className="btn-gold inline-flex"
              >
                Get Lifetime Access — ₹499 →
              </button>
              <button
                onClick={() => { setBundleEmail(""); setBundleEmailError(""); setBundleGoing(false); setBundleModal({ url: "https://rzp.io/rzp/aRVZcSi", label: "India Pack", price: "₹249" }); }}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white/70 text-[0.78rem] font-medium tracking-[0.05em] rounded-full hover:bg-white/15 hover:text-white transition-colors"
              >
                India Pack only — ₹249
              </button>
            </div>
            <p className="text-xs text-white/30 mt-4">
              UPI · Cards · Net Banking · Wallets via Razorpay
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

      {/* Bundle deal email-first modal */}
      {bundleModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) { setBundleModal(null); setBundleGoing(false); } }}
        >
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative">
            <button
              onClick={() => { setBundleModal(null); setBundleGoing(false); }}
              className="absolute top-4 right-4 text-muted hover:text-ink text-xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="font-serif text-xl text-ink mb-2 leading-tight">
                Where should we send your PDFs?
              </h3>
              <p className="text-xs text-muted font-light leading-relaxed">
                Enter your email to receive your <strong className="text-ink">{bundleModal.label}</strong>.
                After payment, your download link is ready instantly.
              </p>
            </div>
            <form onSubmit={handleBundleSubmit} className="space-y-3">
              <div>
                <input
                  type="email"
                  value={bundleEmail}
                  onChange={(e) => { setBundleEmail(e.target.value); setBundleEmailError(""); }}
                  placeholder="yourname@gmail.com"
                  className="w-full px-4 py-3 border border-parchment-2 rounded-lg text-sm text-ink placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
                  autoFocus
                  required
                />
                {bundleEmailError && (
                  <p className="text-xs text-red-500 mt-1.5">{bundleEmailError}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={bundleGoing}
                className="w-full bg-gold hover:bg-gold-dark text-ink py-3.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-60"
              >
                {bundleGoing
                  ? "Redirecting to payment…"
                  : `Pay ${bundleModal.price} — Get All Guides →`}
              </button>
              <p className="text-[0.65rem] text-muted text-center font-light">
                🔒 Secure payment via Razorpay · UPI · Cards · Net Banking
              </p>
            </form>
          </div>
        </div>
      )}
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
