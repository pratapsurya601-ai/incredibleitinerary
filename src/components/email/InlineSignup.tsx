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
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName }),
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

  return (
    <div
      className="
        bg-gradient-to-br from-amber-50 to-orange-50
        border border-amber-200 rounded-2xl
        p-6 md:p-8 my-12
      "
    >
      {submitted ? (
        <SuccessBanner />
      ) : (
        <>
          {/* Top label */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl" aria-hidden="true">📧</span>
            <span className="text-xs font-sans font-semibold uppercase tracking-widest text-stone-600">
              Never Miss a Free Guide
            </span>
          </div>

          {/* Headline */}
          <h3
            className="font-serif text-stone-900 font-semibold leading-tight mb-3"
            style={{ fontSize: '1.6rem' }}
          >
            Get weekly itineraries delivered free
          </h3>

          {/* Body copy */}
          <p className="text-stone-700 text-sm font-sans leading-relaxed mb-3">
            Join 2,400+ travellers. Every week: one destination deep-dive, real costs,
            and local secrets — straight to your inbox.
          </p>

          {/* Lead magnet */}
          <p className="text-gold-dark text-sm font-sans italic mb-5">
            🎁 Plus, get our India 7-Day Budget Planner PDF free when you subscribe.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-3 items-stretch md:items-start"
          >
            <input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="
                md:w-36 shrink-0
                rounded-lg border border-parchment-2 bg-[#FAF7F2]
                px-4 py-2.5 text-sm font-sans text-stone-900
                placeholder:text-muted/60
                focus:outline-none focus:ring-2 focus:ring-gold/40
                transition
              "
            />
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                flex-1 min-w-0
                rounded-lg border border-parchment-2 bg-[#FAF7F2]
                px-4 py-2.5 text-sm font-sans text-stone-900
                placeholder:text-muted/60
                focus:outline-none focus:ring-2 focus:ring-gold/40
                transition
              "
            />
            <button
              type="submit"
              disabled={loading}
              className="
                shrink-0
                rounded-lg bg-gold hover:bg-gold-dark
                text-white font-sans font-semibold text-sm
                px-5 py-2.5
                transition-colors duration-200
                flex items-center justify-center gap-2
                disabled:opacity-70 disabled:cursor-not-allowed
                whitespace-nowrap
              "
            >
              {loading ? (
                <>
                  <Spinner />
                  Subscribing…
                </>
              ) : (
                'Subscribe Free →'
              )}
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-xs mt-2 font-sans">{error}</p>
          )}

          {/* Fine print */}
          <p className="text-stone-500 text-[0.7rem] font-sans mt-3">
            No spam ever. Unsubscribe with one click.
          </p>
        </>
      )}
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
        body: JSON.stringify({ email }),
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
      <div
        className="
          flex items-center gap-3
          bg-parchment border border-parchment-2 rounded-xl px-5 py-4
        "
      >
        <span className="text-lg" aria-hidden="true">✅</span>
        <p className="text-sm font-sans text-stone-900">
          You&apos;re subscribed! Check your inbox for the free PDF.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        flex flex-col sm:flex-row items-start sm:items-center gap-4
        bg-parchment border border-parchment-2 rounded-xl px-5 py-4
      "
    >
      {/* Left label */}
      <div className="flex items-center gap-2 shrink-0">
        <span className="text-lg" aria-hidden="true">📬</span>
        <span className="text-sm font-sans font-medium text-stone-900 whitespace-nowrap">
          Get free weekly itineraries →
        </span>
      </div>

      {/* Right: form */}
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
          className="
            flex-1 min-w-0
            rounded-lg border border-parchment-2 bg-[#FAF7F2]
            px-3 py-2 text-sm font-sans text-stone-900
            placeholder:text-muted/60
            focus:outline-none focus:ring-2 focus:ring-gold/40
            transition
          "
        />
        <button
          type="submit"
          disabled={loading}
          className="
            shrink-0
            rounded-lg bg-gold hover:bg-gold-dark
            text-white font-sans font-semibold text-sm
            px-4 py-2
            transition-colors duration-200
            flex items-center justify-center gap-1.5
            disabled:opacity-70 disabled:cursor-not-allowed
            whitespace-nowrap
          "
        >
          {loading ? <Spinner /> : 'Subscribe'}
        </button>
      </form>

      {error && (
        <p className="text-red-500 text-xs font-sans w-full sm:w-auto">{error}</p>
      )}
    </div>
  );
}

// ── Shared helpers ────────────────────────────────────────────────────────────

function SuccessBanner() {
  return (
    <div className="flex items-center gap-3 py-2">
      <span className="text-3xl" aria-hidden="true">✅</span>
      <p className="text-sm font-sans text-stone-900 leading-relaxed">
        <span className="font-semibold text-teal">You&apos;re subscribed!</span>{' '}
        Check your inbox for the free PDF.
      </p>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4 text-white"
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
