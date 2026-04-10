'use client';

import { useState } from 'react';

interface InlineSignupProps {
  variant?: 'default' | 'compact';
}

export default function InlineSignup({ variant = 'default' }: InlineSignupProps) {
  if (variant === 'compact') return <CompactVariant />;
  return <DefaultVariant />;
}

// ── Default variant ───────────────────────────────────────────────────────────

function DefaultVariant() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const normalizedEmail = email.toLowerCase().trim();
    try {
      // Download the free Rajasthan guide as lead magnet + enroll in drip
      const res = await fetch('/api/download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalizedEmail, slug: 'rajasthan-7-days' }),
      });
      const data = await res.json();

      if (!res.ok && res.status !== 402) {
        throw new Error(data?.error ?? 'Something went wrong. Please try again.');
      }

      // Also sync name to Mailchimp via subscribe endpoint
      if (firstName.trim()) {
        fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: normalizedEmail, firstName: firstName.trim(), source: 'blog-inline' }),
        }).catch(() => {});
      }

      // Mark subscribed in localStorage
      try { localStorage.setItem('ii_subscribed', 'true'); } catch { /* ignore */ }

      // Open PDF if token was returned (free guide)
      if (data.token) {
        const url = `/api/serve-pdf?slug=rajasthan-7-days&token=${encodeURIComponent(data.token)}`;
        window.open(url, '_blank', 'noopener');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-ink rounded-2xl p-7 my-12 text-center">
        <p className="text-3xl mb-3">🎉</p>
        <p className="font-serif text-xl font-light text-gold mb-2">Your guide is open!</p>
        <p className="text-sm text-white/60 font-light">
          Check the new tab for your Rajasthan 7-Day Guide. We&apos;ll also send weekly travel tips to your inbox.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-ink rounded-2xl p-7 md:p-9 my-12 relative overflow-hidden">
      {/* Subtle gold glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A96E 0%, transparent 70%)' }}
      />

      <div className="relative">
        {/* Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            🏰 Free Rajasthan 7-Day Guide
          </span>
        </div>

        {/* Headline */}
        <h3 className="font-serif text-2xl md:text-[1.8rem] font-light text-white mb-3 leading-tight">
          Get the free travel guide<br />
          <em className="italic text-gold">+ weekly destination tips</em>
        </h3>

        {/* Body */}
        <p className="text-sm text-white/55 font-light mb-6 leading-relaxed max-w-lg">
          Download the Rajasthan 7-Day Guide instantly — day-by-day itinerary, real budgets,
          local food spots & packing list. Plus weekly guides from 2,400+ travellers&apos; favourite destinations.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="sm:w-36 shrink-0 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition"
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 min-w-0 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition"
          />
          <button
            type="submit"
            disabled={loading}
            className="shrink-0 rounded-xl bg-gold hover:bg-gold-dark text-ink font-semibold text-sm px-6 py-3 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap"
          >
            {loading ? (
              <>
                <Spinner />
                Opening guide…
              </>
            ) : (
              'Get Free Guide →'
            )}
          </button>
        </form>

        {error && (
          <p className="text-red-400 text-xs mt-2">{error}</p>
        )}

        <p className="text-white/25 text-[0.68rem] mt-3">
          No spam, ever. Unsubscribe with one click.
        </p>
      </div>
    </div>
  );
}

// ── Compact variant ───────────────────────────────────────────────────────────

function CompactVariant() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'blog-compact' }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? 'Something went wrong. Please try again.');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 bg-ink border border-gold/20 rounded-xl px-5 py-4">
        <span className="text-lg" aria-hidden="true">✅</span>
        <p className="text-sm font-sans text-gold font-medium">
          You&apos;re subscribed! Check your inbox for free guides.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-ink border border-white/10 rounded-xl px-5 py-4">
      {/* Left label */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-lg" aria-hidden="true">📬</span>
        <span className="text-sm font-sans font-medium text-gold whitespace-nowrap">
          Get free weekly guides →
        </span>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 flex-1 w-full sm:w-auto"
      >
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 min-w-0 rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/60 transition"
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 rounded-lg bg-gold hover:bg-gold-dark text-ink font-semibold text-sm px-4 py-2 transition-colors duration-200 flex items-center justify-center gap-1.5 disabled:opacity-70 whitespace-nowrap"
        >
          {loading ? <Spinner /> : 'Subscribe'}
        </button>
      </form>

      {error && (
        <p className="text-red-400 text-xs font-sans w-full sm:w-auto">{error}</p>
      )}
    </div>
  );
}

// ── Shared helpers ────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      />
    </svg>
  );
}
