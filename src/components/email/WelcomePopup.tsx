'use client';

import { useEffect, useState } from 'react';

const STORAGE_SUBSCRIBED = 'ii_subscribed';
const STORAGE_DISMISSED  = 'ii_welcome_dismissed';
const DISMISS_TTL_MS     = 7 * 24 * 60 * 60 * 1000; // 7 days
const DELAY_MS           = 40_000; // 40 seconds — enough time to read content before prompting

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

function Spinner() {
  return (
    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg"
      fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
    </svg>
  );
}

export default function WelcomePopup() {
  const [open,   setOpen]   = useState(false);
  const [email,  setEmail]  = useState('');
  const [name,   setName]   = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error,  setError]  = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!shouldSuppress()) setOpen(true);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try { localStorage.setItem(STORAGE_DISMISSED, String(Date.now())); } catch { /* ignore */ }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      const res = await fetch('/api/newsletter', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email, name, source: 'welcome-popup' }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      try { localStorage.setItem(STORAGE_SUBSCRIBED, 'true'); } catch { /* ignore */ }
      setTimeout(() => setOpen(false), 3000);
    } catch {
      setError('Something went wrong. Please try again.');
      setStatus('idle');
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[490] flex items-center justify-center bg-ink/70 backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
      aria-modal="true"
      role="dialog"
      aria-label="Get free travel guides"
    >
      <div className="bg-ink border border-white/10 rounded-2xl shadow-2xl max-w-[460px] w-full overflow-hidden animate-fade-up">

        {/* Gold top strip */}
        <div className="h-1 bg-gradient-to-r from-gold via-amber-400 to-gold" />

        <div className="relative px-7 pt-7 pb-8">

          {/* Close */}
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-white/35 hover:text-white/70 hover:bg-white/10 transition-all text-lg"
          >
            ✕
          </button>

          {status === 'success' ? (
            /* ── Success ── */
            <div className="text-center py-4">
              <p className="text-5xl mb-4">🎉</p>
              <p className="font-serif text-2xl font-light text-gold mb-2">You&apos;re in!</p>
              <p className="text-sm text-white/60 font-light">
                Check your inbox — your free guides are on their way.
              </p>
            </div>
          ) : (
            /* ── Form ── */
            <>
              <span className="text-[0.65rem] tracking-[0.22em] uppercase text-gold font-medium block mb-4">
                Free · No spam · Unsubscribe anytime
              </span>

              <h2 className="font-serif text-[1.7rem] font-light text-white mb-3 leading-tight">
                Planning a trip to India?<br />
                <em className="italic text-gold">Get 300+ free guides</em>
              </h2>

              <p className="text-sm text-white/55 font-light mb-6 leading-relaxed">
                Real costs, local secrets, zero tourist traps — every week, straight to your inbox.
                Join 2,400+ travellers already planning smarter.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1c1208] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition"
                />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                  disabled={status === 'loading'}
                  className="w-full bg-[#1c1208] border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition disabled:opacity-60"
                />
                {error && <p className="text-red-400 text-xs">{error}</p>}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gold hover:bg-gold-dark text-ink font-semibold text-sm py-3.5 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'loading' ? <><Spinner />Joining…</> : 'Get Free Guides →'}
                </button>
              </form>

              <button
                onClick={dismiss}
                className="mt-4 w-full text-center text-white/25 hover:text-white/45 text-xs transition-colors"
              >
                No thanks, I&apos;ll figure it out myself
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
