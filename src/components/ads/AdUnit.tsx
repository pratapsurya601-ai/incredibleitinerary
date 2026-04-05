"use client";

import { useEffect, useRef } from "react";

const PUB_ID = "ca-pub-8778466914590495";

interface AdUnitProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  className?: string;
  label?: boolean;
}

export default function AdUnit({
  slot,
  format = "auto",
  className = "",
  label = true,
}: AdUnitProps) {
  const ref = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded yet — silently ignore
    }
  }, []);

  return (
    <div className={`my-8 text-center ${className}`}>
      {label && (
        <p className="text-[0.6rem] tracking-[0.15em] uppercase text-muted/40 mb-1">
          Advertisement
        </p>
      )}
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={PUB_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
