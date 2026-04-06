"use client";
import ExitIntentPopup from "@/components/email/ExitIntentPopup";
import WelcomePopup from "@/components/email/WelcomePopup";

export default function EmailCaptureWrapper() {
  return (
    <>
      <WelcomePopup />
      <ExitIntentPopup />
    </>
  );
}
