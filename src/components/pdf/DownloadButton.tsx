"use client";
import { useState } from "react";
import DownloadModal from "./DownloadModal";

interface DownloadButtonProps {
  slug: string;
  title: string;
  variant?: "primary" | "secondary" | "inline";
  className?: string;
}

export default function DownloadButton({
  slug,
  title,
  variant = "primary",
  className = "",
}: DownloadButtonProps) {
  const [open, setOpen] = useState(false);

  const baseClasses: Record<string, string> = {
    primary:
      "inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg",
    secondary:
      "inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200",
    inline:
      "inline-flex items-center gap-1.5 text-gold hover:text-gold-dark font-medium text-sm underline underline-offset-2 transition-colors duration-150",
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`${baseClasses[variant]} ${className}`}
        aria-label={`Download ${title} PDF guide`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download Free PDF
      </button>

      {open && (
        <DownloadModal slug={slug} title={title} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
