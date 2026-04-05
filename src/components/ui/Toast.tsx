"use client";
import { useEffect, useState } from "react";

type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
  exiting: boolean;
}

// Call this from anywhere — no context required
export function showToast(message: string, type: ToastType = "success") {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("ii-toast", { detail: { message, type } })
  );
}

const ICONS: Record<ToastType, string> = {
  success: "✓",
  error:   "✕",
  info:    "ⓘ",
};

const COLORS: Record<ToastType, string> = {
  success: "bg-[#161008] text-white",
  error:   "bg-rust text-white",
  info:    "bg-[#1E6B5E] text-white",
};

export default function Toast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      const { message, type } = (e as CustomEvent<{ message: string; type: ToastType }>).detail;
      const id = Date.now();

      setToasts((prev) => [...prev, { id, message, type, exiting: false }]);

      // Start exit animation
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
        );
      }, 3200);

      // Remove from DOM
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 3600);
    };

    window.addEventListener("ii-toast", handler);
    return () => window.removeEventListener("ii-toast", handler);
  }, []);

  if (!toasts.length) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-32 inset-x-0 z-[9998] flex flex-col items-center gap-2 pointer-events-none px-4"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-medium
            shadow-[0_8px_32px_rgba(22,16,8,0.2)] pointer-events-auto
            ${COLORS[toast.type]}
            ${toast.exiting
              ? "animate-[toastOut_0.4s_ease_forwards]"
              : "animate-[toastIn_0.35s_cubic-bezier(0.34,1.56,0.64,1)_forwards]"
            }
          `}
        >
          <span className="text-base leading-none">{ICONS[toast.type]}</span>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
