'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const STORAGE_SUBSCRIBED = 'ii_subscribed';
const STORAGE_DISMISSED = 'ii_popup_dismissed';
const DISMISS_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

type Step = 'form' | 'success';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('form');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const triggered = useRef(false);

  // ── helpers ──────────────────────────────────────────────────────────────
  function shouldSuppress(): boolean {
    try {
      if (localStorage.getItem(STORAGE_SUBSCRIBED) === 'true') return true;
      const dismissed = localStorage.getItem(STORAGE_DISMISSED);
      if (dismissed) {
        const ts = parseInt(dismissed, 10);
        if (!isNaN(ts) && Date.now() - ts < DISMISS_TTL_MS) return true;
      }
    } catch {
      // localStorage unavailable (SSR / private mode)
    }
    return false;
  }

  function openPopup() {
    if (triggered.current) return;
    if (shouldSuppress()) return;
    triggered.current = true;
    setIsOpen(true);
  }

  function handleDismiss() {
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_DISMISSED, String(Date.now()));
    } catch {
      // ignore
    }
  }

  // ── trigger logic ─────────────────────────────────────────────────────────
  useEffect(() => {
    // Trigger 1 — exit intent (mouse leaves viewport upward)
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10) openPopup();
    };

    // Trigger 3 — scroll past 60 % of page height
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total > 0 && scrolled / total >= 0.6) openPopup();
    };

    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Trigger 2 — 45-second timer
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
      setStep('success');
      try {
        localStorage.setItem(STORAGE_SUBSCRIBED, 'true');
      } catch {
        // ignore
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-[500] flex items-center justify-center bg-ink/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleDismiss();
      }}
      aria-modal="true"
      role="dialog"
      aria-label="Email signup popup"
    >
      {/* Card */}
      <div
        className="
          bg-[#FAF7F2] rounded-2xl shadow-2xl
          max-w-[480px] w-[calc(100%-2rem)] mx-4
          overflow-hidden
          transition-all duration-300 ease-out
          animate-fade-up
        "
      >
        {/* Top decorative strip */}
        <div className="h-1.5 bg-gradient-to-r from-gold via-amber-400 to-gold" />

        <div className="relative px-6 pt-6 pb-8">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            aria-label="Close popup"
            className="
              absolute top-4 right-4
              text-muted hover:text-ink
              transition-colors duration-150
              text-xl leading-none p-1
            "
          >
            ✕
          </button>

          {step === 'form' ? (
            <FormState
              firstName={firstName}
              email={email}
              loading={loading}
              error={error}
              onFirstNameChange={setFirstName}
              onEmailChange={setEmail}
              onSubmit={handleSubmit}
              onDismiss={handleDismiss}
            />
          ) : (
            <SuccessState email={email} onClose={handleDismiss} />
          )}
        </div>
      </div>
    </div>
  );
}

// ── sub-components ────────────────────────────────────────────────────────────

interface FormStateProps {
  firstName: string;
  email: string;
  loading: boolean;
  error: string;
  onFirstNameChange: (v: string) => void;
  onEmailChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onDismiss: () => void;
}

function FormState({
  firstName,
  email,
  loading,
  error,
  onFirstNameChange,
  onEmailChange,
  onSubmit,
  onDismiss,
}: FormStateProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon */}
      <span className="text-5xl mb-4" aria-hidden="true">✈️</span>

      {/* Headline */}
      <h2
        className="font-serif text-ink font-semibold mb-2 leading-tight"
        style={{ fontSize: '1.8rem' }}
      >
        Travel Smarter. Pack Less. Spend Less.
      </h2>

      {/* Subhead */}
      <p className="text-muted text-sm mb-4 max-w-sm leading-relaxed">
        Join 2,400+ travellers getting free itineraries, budget tips, and destination
        guides — every week.
      </p>

      {/* Lead magnet badge */}
      <span
        className="
          inline-flex items-center gap-1.5
          border border-gold/30 bg-gold/10 text-gold-dark
          text-xs rounded-full px-3 py-1 mb-5 font-sans font-medium
        "
      >
        🎁 FREE when you join: India 7-Day Budget Planner PDF
      </span>

      {/* Form */}
      <form onSubmit={onSubmit} className="w-full flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your first name"
          value={firstName}
          onChange={(e) => onFirstNameChange(e.target.value)}
          className="
            w-full rounded-lg border border-parchment-2 bg-parchment
            px-4 py-2.5 text-sm font-sans text-ink
            placeholder:text-muted/60
            focus:outline-none focus:ring-2 focus:ring-gold/40
            transition
          "
        />
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          required
          className="
            w-full rounded-lg border border-parchment-2 bg-parchment
            px-4 py-2.5 text-sm font-sans text-ink
            placeholder:text-muted/60
            focus:outline-none focus:ring-2 focus:ring-gold/40
            transition
          "
        />

        {error && (
          <p className="text-red-500 text-xs text-left">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full rounded-lg bg-gold hover:bg-gold-dark
            text-white font-sans font-semibold text-sm
            px-6 py-3
            transition-colors duration-200
            flex items-center justify-center gap-2
            disabled:opacity-70 disabled:cursor-not-allowed
          "
        >
          {loading ? (
            <>
              <Spinner />
              Sending…
            </>
          ) : (
            'Send Me the Free PDF →'
          )}
        </button>
      </form>

      {/* Fine print */}
      <p className="text-muted/70 text-[0.7rem] mt-3 font-sans">
        🔒 No spam. Unsubscribe anytime.
      </p>

      {/* Soft dismissal */}
      <button
        onClick={onDismiss}
        className="
          mt-3 text-muted/60 hover:text-muted text-xs font-sans
          underline underline-offset-2 transition-colors duration-150
        "
      >
        No thanks, I&apos;ll figure it out myself
      </button>
    </div>
  );
}

interface SuccessStateProps {
  email: string;
  onClose: () => void;
}

function SuccessState({ email, onClose }: SuccessStateProps) {
  const popularPosts: { label: string; href: string }[] = [
    { label: 'Kashmir 6-Day Guide →', href: '/blog/kashmir-6-days' },
    { label: 'Santorini 4-Day Guide →', href: '/blog/santorini-4-days' },
    { label: 'Bangkok 4-Day Guide →', href: '/blog/bangkok-4-days' },
  ];

  return (
    <div className="flex flex-col items-center text-center">
      {/* Checkmark */}
      <span className="text-5xl mb-4" aria-hidden="true">✅</span>

      <h2
        className="font-serif text-ink font-semibold mb-3 leading-tight"
        style={{ fontSize: '1.8rem' }}
      >
        You&apos;re in! Check your inbox.
      </h2>

      <p className="text-muted text-sm mb-6 max-w-sm leading-relaxed">
        Your free India 7-Day Budget Planner is on its way to{' '}
        <span className="text-ink font-medium">{email}</span>. While you wait,
        explore our most popular guides:
      </p>

      <ul className="flex flex-col gap-2 mb-6 w-full">
        {popularPosts.map((post) => (
          <li key={post.href}>
            <Link
              href={post.href}
              onClick={onClose}
              className="
                block text-sm font-sans font-medium text-gold-dark hover:text-gold
                transition-colors duration-150
              "
            >
              {post.label}
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={onClose}
        className="
          rounded-lg border border-gold/40 hover:border-gold
          text-gold-dark hover:text-gold
          font-sans font-medium text-sm
          px-6 py-2.5
          transition-colors duration-200
        "
      >
        Close
      </button>
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
