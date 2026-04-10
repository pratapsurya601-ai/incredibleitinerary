'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const STORAGE_SUBSCRIBED = 'ii_subscribed';
const STORAGE_DISMISSED  = 'ii_popup_dismissed';
const DISMISS_TTL_MS     = 7 * 24 * 60 * 60 * 1000; // 7 days

type Step = 'form' | 'loading' | 'success' | 'paywall';

// ── Blog slug → PDF info mapping ─────────────────────────────────────────────
const BLOG_TO_PDF: Record<string, { pdfSlug: string; title: string; emoji: string; free: boolean; price?: string }> = {
  "rajasthan-7-days":        { pdfSlug: "rajasthan-7-days",  title: "Rajasthan 7-Day Guide",  emoji: "🏰", free: true },
  "kerala-5-days":           { pdfSlug: "kerala-5-days",      title: "Kerala 5-Day Guide",     emoji: "🌿", free: true },
  "goa-3-days":              { pdfSlug: "goa-3-days",          title: "Goa 3-Day Guide",        emoji: "🏖️", free: false, price: "₹99" },
  "india-budget-guide":      { pdfSlug: "india-budget-guide",  title: "India Budget Guide",     emoji: "🇮🇳", free: false, price: "₹99" },
  "leh-ladakh-7-days":       { pdfSlug: "leh-ladakh-7-days",   title: "Leh Ladakh 7-Day Guide", emoji: "🏔️", free: false, price: "₹199" },
  "bangkok-4-days":          { pdfSlug: "bangkok-4-days",      title: "Bangkok 4-Day Guide",    emoji: "🇹🇭", free: false, price: "₹199" },
  "kashmir-6-days":          { pdfSlug: "kashmir-6-days",      title: "Kashmir 6-Day Guide",    emoji: "❄️", free: false, price: "₹149" },
  "manali-5-days":           { pdfSlug: "manali-5-days",       title: "Manali 5-Day Guide",     emoji: "⛰️", free: false, price: "₹149" },
  "bali-5-days":             { pdfSlug: "bali-5-days",         title: "Bali 5-Day Guide",       emoji: "🌴", free: false, price: "₹199" },
  "dubai-4-days":            { pdfSlug: "dubai-4-days",        title: "Dubai 4-Day Guide",      emoji: "🏙️", free: false, price: "₹249" },
  "andaman-5-days":          { pdfSlug: "andaman-5-days",      title: "Andaman 5-Day Guide",    emoji: "🏝️", free: false, price: "₹149" },
  "varanasi-3-days":         { pdfSlug: "varanasi-3-days",     title: "Varanasi 3-Day Guide",   emoji: "🕌", free: false, price: "₹99" },
  "singapore-3-days":        { pdfSlug: "singapore-3-days",    title: "Singapore 3-Day Guide",  emoji: "🇸🇬", free: false, price: "₹199" },
  "sri-lanka-7-days":        { pdfSlug: "sri-lanka-7-days",    title: "Sri Lanka 7-Day Guide",  emoji: "🦁", free: false, price: "₹199" },
  "tokyo-5-days":            { pdfSlug: "japan-10-days",       title: "Japan 10-Day Guide",     emoji: "🗼", free: false, price: "₹299" },
  "kyoto-4-days":            { pdfSlug: "japan-10-days",       title: "Japan 10-Day Guide",     emoji: "🗼", free: false, price: "₹299" },
  "osaka-3-days":            { pdfSlug: "japan-10-days",       title: "Japan 10-Day Guide",     emoji: "🗼", free: false, price: "₹299" },
  "hanoi-3-days":            { pdfSlug: "vietnam-10-days",     title: "Vietnam 10-Day Guide",   emoji: "🇻🇳", free: false, price: "₹199" },
  "ho-chi-minh-city-3-days": { pdfSlug: "vietnam-10-days",     title: "Vietnam 10-Day Guide",   emoji: "🇻🇳", free: false, price: "₹199" },
  "ha-long-bay-3-days":      { pdfSlug: "vietnam-10-days",     title: "Vietnam 10-Day Guide",   emoji: "🇻🇳", free: false, price: "₹199" },
  "phuket-5-days":           { pdfSlug: "thailand-10-days",    title: "Thailand 10-Day Guide",  emoji: "🌴", free: false, price: "₹199" },
  "chiang-mai-4-days":       { pdfSlug: "thailand-10-days",    title: "Thailand 10-Day Guide",  emoji: "🌴", free: false, price: "₹199" },
  "lisbon-4-days":           { pdfSlug: "portugal-7-days",     title: "Portugal 7-Day Guide",   emoji: "🇵🇹", free: false, price: "₹249" },
  "porto-3-days":            { pdfSlug: "portugal-7-days",     title: "Portugal 7-Day Guide",   emoji: "🇵🇹", free: false, price: "₹249" },
  "algarve-4-days":          { pdfSlug: "portugal-7-days",     title: "Portugal 7-Day Guide",   emoji: "🇵🇹", free: false, price: "₹249" },
  "athens-3-days":           { pdfSlug: "greece-10-days",      title: "Greece 10-Day Guide",    emoji: "🇬🇷", free: false, price: "₹299" },
  "santorini-4-days":        { pdfSlug: "greece-10-days",      title: "Greece 10-Day Guide",    emoji: "🇬🇷", free: false, price: "₹299" },
  "crete-5-days":            { pdfSlug: "greece-10-days",      title: "Greece 10-Day Guide",    emoji: "🇬🇷", free: false, price: "₹299" },
};

const DEFAULT_PDF = { pdfSlug: "rajasthan-7-days", title: "Rajasthan 7-Day Guide", emoji: "🏰", free: true, price: undefined as string | undefined };

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

export default function LeadMagnetPopup() {
  const pathname = usePathname();
  const [isOpen,    setIsOpen]    = useState(false);
  const [step,      setStep]      = useState<Step>('form');
  const [email,     setEmail]     = useState('');
  const [firstName, setFirstName] = useState('');
  const [error,     setError]     = useState('');
  const [remaining, setRemaining] = useState<number | null>(null);
  const triggered = useRef(false);

  // ── Derive which PDF to show based on current URL ─────────────────────────
  const blogSlug = pathname?.startsWith('/blog/') ? pathname.replace('/blog/', '').replace(/\/$/, '') : null;
  const pdf = (blogSlug && BLOG_TO_PDF[blogSlug]) ? BLOG_TO_PDF[blogSlug] : DEFAULT_PDF;

  // ── suppress logic ────────────────────────────────────────────────────────
  function shouldSuppress(): boolean {
    try {
      if (localStorage.getItem(STORAGE_SUBSCRIBED) === 'true') return true;
      const dismissed = localStorage.getItem(STORAGE_DISMISSED);
      if (dismissed) {
        const ts = parseInt(dismissed, 10);
        if (!isNaN(ts) && Date.now() - ts < DISMISS_TTL_MS) return true;
      }
    } catch { /* SSR / private mode */ }
    return false;
  }

  function openPopup() {
    if (triggered.current || shouldSuppress()) return;
    triggered.current = true;
    setIsOpen(true);
  }

  function handleDismiss() {
    setIsOpen(false);
    try { localStorage.setItem(STORAGE_DISMISSED, String(Date.now())); } catch { /* ignore */ }
  }

  // ── reset on navigation ───────────────────────────────────────────────────
  useEffect(() => {
    triggered.current = false;
    setIsOpen(false);
    setStep('form');
    setError('');
  }, [pathname]);

  // ── triggers: exit intent, scroll 60%, 25-second timer ────────────────────
  useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => { if (e.clientY < 10) openPopup(); };
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total    = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= 0.6) openPopup();
    };
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    const timer = setTimeout(openPopup, 25_000);
    return () => {
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // ── submit ────────────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setStep('loading');

    const normalizedEmail = email.toLowerCase().trim();

    try {
      const res  = await fetch('/api/download', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: normalizedEmail, slug: pdf.pdfSlug }),
      });
      const data = await res.json();

      // Paywall hit
      if (res.status === 402 || data.paywall) {
        try { localStorage.setItem('ii_email', normalizedEmail); } catch { /* ignore */ }
        setStep('paywall');
        return;
      }

      if (!res.ok || !data.success) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        setStep('form');
        return;
      }

      // Mark subscribed so popup won't show again
      try {
        localStorage.setItem(STORAGE_SUBSCRIBED, 'true');
        localStorage.setItem('ii_email', normalizedEmail);
      } catch { /* ignore */ }

      // Also send to /api/subscribe for Mailchimp sync + welcome email (if not already done by download)
      if (firstName.trim()) {
        fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: normalizedEmail, firstName: firstName.trim(), source: 'lead-magnet-popup' }),
        }).catch(() => {});
      }

      // Open guide in new tab
      const url = `/api/serve-pdf?slug=${encodeURIComponent(pdf.pdfSlug)}&token=${encodeURIComponent(data.token)}`;
      window.open(url, '_blank', 'noopener');

      setRemaining(data.remaining ?? null);
      setStep('success');
    } catch {
      setError('Network error. Please check your connection and try again.');
      setStep('form');
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) handleDismiss(); }}
      aria-modal="true" role="dialog" aria-label="Get your free travel guide"
    >
      <div className="bg-ink border border-white/10 rounded-2xl shadow-2xl max-w-[480px] w-full overflow-hidden animate-fade-up">
        {/* Gold top accent */}
        <div className="h-1 bg-gradient-to-r from-gold via-amber-400 to-gold" />

        <div className="relative px-7 pt-7 pb-8">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/30 hover:text-white/70 hover:bg-white/10 transition-all text-lg"
          >
            ✕
          </button>

          {/* ── FORM STEP ──────────────────────────────────────────────────── */}
          {(step === 'form' || step === 'loading') && (
            <>
              {/* Badge */}
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold font-medium block mb-4">
                {pdf.free ? 'Free Download · No credit card' : `${pdf.price} · Instant access`}
              </span>

              {/* Headline */}
              <h2 className="font-serif text-[1.65rem] font-light text-white mb-2 leading-tight">
                {pdf.free ? (
                  <>Get the free<br /><em className="italic text-gold">{pdf.title}</em></>
                ) : (
                  <>Get the<br /><em className="italic text-gold">{pdf.title}</em></>
                )}
              </h2>

              {/* Value props */}
              <ul className="text-sm text-white/50 font-light mb-5 space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-gold/70 mt-0.5 shrink-0">&#10003;</span>
                  <span>Day-by-day itinerary with route maps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold/70 mt-0.5 shrink-0">&#10003;</span>
                  <span>Real budgets — no inflated tourist prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold/70 mt-0.5 shrink-0">&#10003;</span>
                  <span>Packing list, local food spots & transport tips</span>
                </li>
              </ul>

              {/* Social proof */}
              <p className="text-[0.7rem] text-white/30 mb-5">
                Joined by 2,400+ travellers planning smarter trips
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={step === 'loading'}
                  className="w-full bg-[#1c1208] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition disabled:opacity-60"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  disabled={step === 'loading'}
                  className="w-full bg-[#1c1208] border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition disabled:opacity-60"
                />

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <button
                  type="submit"
                  disabled={step === 'loading'}
                  className="w-full bg-gold hover:bg-gold-dark text-ink font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {step === 'loading' ? (
                    <><Spinner /> Opening guide...</>
                  ) : pdf.free ? (
                    'Download Free Guide →'
                  ) : (
                    `Get Guide for ${pdf.price} →`
                  )}
                </button>
              </form>

              <p className="text-white/20 text-[0.65rem] mt-3 text-center">
                No spam, ever. Unsubscribe with one click.
              </p>

              <button
                onClick={handleDismiss}
                className="mt-3 w-full text-center text-white/20 hover:text-white/40 text-xs transition-colors"
              >
                No thanks, I&apos;ll figure it out myself
              </button>
            </>
          )}

          {/* ── SUCCESS STEP ─────────────────────────────────────────────── */}
          {step === 'success' && (
            <div className="flex flex-col items-center text-center py-2">
              <span className="text-5xl mb-4" aria-hidden="true">✅</span>
              <h2 className="font-serif text-2xl font-light text-gold mb-2">
                Your guide is open!
              </h2>
              <p className="text-sm text-white/55 font-light mb-5 max-w-sm leading-relaxed">
                A new tab just opened with your guide. Press{' '}
                <kbd className="bg-white/10 border border-white/20 px-1.5 py-0.5 rounded text-xs font-mono text-white/70">Ctrl+P</kbd>
                {' '}→ <strong className="text-white/80">Save as PDF</strong> → tick <strong className="text-white/80">Background graphics</strong>.
              </p>

              {remaining !== null && remaining > 0 && (
                <div className="w-full bg-green-900/30 border border-green-500/30 rounded-xl p-3 mb-4 text-left">
                  <p className="text-green-400 text-xs">
                    You have <strong>{remaining} free guide{remaining > 1 ? 's' : ''}</strong> remaining.
                    Try{' '}
                    <Link href="/blog/kerala-5-days" onClick={handleDismiss} className="underline font-medium">Kerala</Link>
                    {' '}or{' '}
                    <Link href="/blog/rajasthan-7-days" onClick={handleDismiss} className="underline font-medium">Rajasthan</Link>.
                  </p>
                </div>
              )}

              {remaining === 0 && (
                <div className="w-full bg-amber-900/20 border border-amber-500/30 rounded-xl p-4 mb-4 text-left">
                  <p className="text-amber-400 text-xs font-medium mb-2">That was your last free guide</p>
                  <a
                    href="https://rzp.io/rzp/oUANvqjl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gold text-ink text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors"
                  >
                    Unlock All 20+ Guides — ₹499 →
                  </a>
                </div>
              )}

              <button
                onClick={handleDismiss}
                className="rounded-xl border border-gold/30 hover:border-gold text-gold hover:text-gold-dark font-medium text-sm px-6 py-2.5 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          )}

          {/* ── PAYWALL STEP ─────────────────────────────────────────────── */}
          {step === 'paywall' && (
            <div className="flex flex-col items-center text-center py-2">
              <span className="text-5xl mb-4" aria-hidden="true">🔒</span>
              <h2 className="font-serif text-2xl font-light text-white mb-2">
                You&apos;ve used 2 free guides
              </h2>
              <p className="text-sm text-white/50 font-light mb-5 max-w-xs leading-relaxed">
                Unlock <strong className="text-white/80">all 20+ guides forever</strong> — one-time payment, no subscription.
              </p>

              <div className="w-full flex flex-col gap-2 mb-4">
                <a
                  href="https://rzp.io/rzp/oUANvqjl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-gold hover:bg-gold-dark text-ink font-semibold text-sm px-6 py-3.5 rounded-full transition-colors duration-200"
                >
                  All 20+ Guides — ₹499 one-time →
                </a>
                <a
                  href="https://rzp.io/rzp/aRVZcSi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center border border-white/20 hover:border-white/40 text-white font-medium text-sm px-6 py-3 rounded-full transition-colors duration-200"
                >
                  India Pack only — ₹249 →
                </a>
              </div>

              <p className="text-white/30 text-[0.65rem] mb-4">
                UPI · Cards · Net Banking · Wallets via Razorpay
              </p>

              <button
                onClick={handleDismiss}
                className="text-white/25 hover:text-white/45 text-xs underline underline-offset-2 transition-colors"
              >
                Maybe later
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
