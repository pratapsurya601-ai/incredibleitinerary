"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie_consent";
const ADSENSE_SRC =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8778466914590495";

function loadAdSense() {
  if (document.querySelector(`script[src^="${ADSENSE_SRC.split("?")[0]}"]`)) return;
  const s = document.createElement("script");
  s.src = ADSENSE_SRC;
  s.async = true;
  s.crossOrigin = "anonymous";
  document.head.appendChild(s);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted") {
        // Returning visitor who already consented — load AdSense immediately
        loadAdSense();
      } else if (!stored) {
        setVisible(true);
      }
    } catch {
      // localStorage blocked (private browsing, etc.) — don't show banner
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch { /* noop */ }
    setVisible(false);
    loadAdSense();
  };

  const decline = () => {
    try { localStorage.setItem(STORAGE_KEY, "declined"); } catch { /* noop */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[500] border-t border-white/10"
      style={{ background: "rgba(22,16,10,0.97)", backdropFilter: "blur(12px)" }}
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-[1180px] mx-auto px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="text-xs text-white/60 font-light leading-relaxed flex-1">
          This site uses analytics cookies to understand how visitors use the site.{" "}
          <Link href="/privacy" className="text-gold underline underline-offset-2">
            Learn more about cookies
          </Link>
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={decline}
            className="text-xs text-white/40 hover:text-white/70 transition-colors px-3 py-1.5 rounded"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-xs bg-gold text-ink font-medium px-4 py-1.5 rounded hover:bg-gold-dark hover:text-white transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
