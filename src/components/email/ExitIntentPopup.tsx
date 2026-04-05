'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const STORAGE_SUBSCRIBED = 'ii_subscribed';
const STORAGE_DISMISSED  = 'ii_popup_dismissed';
const DISMISS_TTL_MS     = 7 * 24 * 60 * 60 * 1000; // 7 days
const SLUG               = 'rajasthan-7-days';

type Step = 'form' | 'loading' | 'success' | 'paywall';

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

export default function ExitIntentPopup() {
  const [isOpen,    setIsOpen]    = useState(false);
  const [step,      setStep]      = useState<Step>('form');
  const [email,     setEmail]     = useState('');
  const [error,     setError]     = useState('');
  const [remaining, setRemaining] = useState<number | null>(null);
  const triggered = useRef(false);

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

  // ── triggers ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const onMouseLeave = (e: MouseEvent) => { if (e.clientY < 10) openPopup(); };
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total    = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= 0.6) openPopup();
    };
    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });
    const timer = setTimeout(openPopup, 45_000);
    return () => {
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── submit ────────────────────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setStep('loading');

    try {
      const res  = await fetch('/api/download', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: email.toLowerCase().trim(), slug: SLUG }),
      });
      const data = await res.json();

      // Paywall hit
      if (res.status === 402 || data.paywall) {
        try { localStorage.setItem('ii_email', email.toLowerCase().trim()); } catch { /* ignore */ }
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
        localStorage.setItem('ii_email', email.toLowerCase().trim());
      } catch { /* ignore */ }

      // Open guide in new tab
      const url = `/api/serve-pdf?slug=${encodeURIComponent(SLUG)}&token=${encodeURIComponent(data.token)}`;
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
      className="fixed inset-0 z-[500] flex items-center justify-center bg-ink/60 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) handleDismiss(); }}
      aria-modal="true" role="dialog" aria-label="Download free guide"
    >
      <div className="bg-[#FAF7F2] rounded-2xl shadow-2xl max-w-[460px] w-full overflow-hidden animate-fade-up">
        {/* Gold strip */}
        <div className="h-1.5 bg-gradient-to-r from-gold via-amber-400 to-gold" />

        <div className="relative px-6 pt-6 pb-8">
          {/* Close */}
          <button
            onClick={handleDismiss}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-muted hover:text-ink hover:bg-parchment-2 transition-all text-lg"
          >
            ✕
          </button>

          {/* ── FORM ─────────────────────────────────────────────────────── */}
          {(step === 'form' || step === 'loading') && (
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl mb-4" aria-hidden="true">📄</span>

              <h2 className="font-serif text-ink font-semibold mb-2 leading-tight" style={{ fontSize: '1.75rem' }}>
                Free Rajasthan 7-Day PDF
              </h2>
              <p className="text-muted text-sm mb-4 max-w-sm leading-relaxed">
                Day-by-day plan · real budgets · packing list · route maps.
                Download it instantly — no email chain, opens right now.
              </p>

              <span className="inline-flex items-center gap-1.5 border border-gold/30 bg-gold/10 text-gold-dark text-xs rounded-full px-3 py-1 mb-5 font-medium">
                🎁 Free · 2 guides per email · No credit card
              </span>

              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  disabled={step === 'loading'}
                  className="w-full rounded-lg border border-parchment-2 bg-parchment px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-gold/40 transition disabled:opacity-60"
                />

                {error && <p className="text-red-500 text-xs text-left">{error}</p>}

                <button
                  type="submit"
                  disabled={step === 'loading'}
                  className="w-full rounded-lg bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {step === 'loading' ? <><Spinner />Opening guide…</> : 'Download Free PDF →'}
                </button>
              </form>

              <p className="text-muted/60 text-[0.7rem] mt-3">🔒 No spam · Unsubscribe anytime</p>

              <button
                onClick={handleDismiss}
                className="mt-3 text-muted/60 hover:text-muted text-xs underline underline-offset-2 transition-colors"
              >
                No thanks, I&apos;ll figure it out myself
              </button>
            </div>
          )}

          {/* ── SUCCESS ──────────────────────────────────────────────────── */}
          {step === 'success' && (
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl mb-4" aria-hidden="true">✅</span>
              <h2 className="font-serif text-ink font-semibold mb-2 leading-tight" style={{ fontSize: '1.75rem' }}>
                Your guide is open!
              </h2>
              <p className="text-muted text-sm mb-5 max-w-sm leading-relaxed">
                A new tab just opened. Press{' '}
                <kbd className="bg-parchment-2 border border-parchment-2 px-1.5 py-0.5 rounded text-xs font-mono">Ctrl+P</kbd>
                {' '}→ <strong>Save as PDF</strong> → tick <strong>Background graphics</strong>.
              </p>

              {remaining !== null && remaining > 0 && (
                <div className="w-full bg-green-50 border border-green-200 rounded-xl p-3 mb-4 text-left">
                  <p className="text-green-700 text-xs">
                    ✅ You have <strong>{remaining} free guide{remaining > 1 ? 's' : ''}</strong> remaining.
                    Try{' '}
                    <Link href="/blog/kerala-6-days" onClick={handleDismiss} className="underline font-medium">Kerala</Link>
                    {' '}or{' '}
                    <Link href="/blog/goa-5-days" onClick={handleDismiss} className="underline font-medium">Goa</Link>.
                  </p>
                </div>
              )}

              {remaining === 0 && (
                <div className="w-full bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 text-left">
                  <p className="text-amber-800 text-xs font-medium mb-1">⚠️ That was your last free guide</p>
                  <a
                    href="https://rzp.io/rzp/qhP2iBq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 bg-gold text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-gold-dark transition-colors"
                  >
                    Unlock All 50+ Guides — ₹499 →
                  </a>
                </div>
              )}

              <button
                onClick={handleDismiss}
                className="rounded-lg border border-gold/40 hover:border-gold text-gold-dark hover:text-gold font-medium text-sm px-6 py-2.5 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          )}

          {/* ── PAYWALL ──────────────────────────────────────────────────── */}
          {step === 'paywall' && (
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl mb-4" aria-hidden="true">🔒</span>
              <h2 className="font-serif text-ink font-semibold mb-2 leading-tight" style={{ fontSize: '1.75rem' }}>
                You&apos;ve used 2 free guides
              </h2>
              <p className="text-muted text-sm mb-5 max-w-xs leading-relaxed">
                Unlock <strong className="text-ink">all 50+ guides forever</strong> — one-time payment, no subscription.
              </p>

              <div className="w-full flex flex-col gap-2 mb-4">
                <a
                  href="https://rzp.io/rzp/qhP2iBq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-colors duration-200"
                >
                  All 50+ Guides — ₹499 one-time →
                </a>
                <a
                  href="https://rzp.io/rzp/SfJqFBV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center border border-ink/20 hover:border-ink text-ink font-medium text-sm px-6 py-3 rounded-full transition-colors duration-200"
                >
                  India Pack only — ₹249 →
                </a>
              </div>

              <p className="text-muted/50 text-[0.65rem] mb-4">
                UPI · Cards · Net Banking · Wallets via Razorpay
              </p>

              <button
                onClick={handleDismiss}
                className="text-muted/60 hover:text-muted text-xs underline underline-offset-2 transition-colors"
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
