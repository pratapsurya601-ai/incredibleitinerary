"use client";
import { useEffect } from "react";
import { captureUtmOnLanding } from "@/lib/analytics";

export default function UtmCaptureMount() {
  useEffect(() => {
    captureUtmOnLanding();
  }, []);
  return null;
}
