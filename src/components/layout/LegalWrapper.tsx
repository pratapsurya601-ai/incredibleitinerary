"use client";
import { useState } from "react";
import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InquiryModal from "@/components/ui/InquiryModal";

export default function LegalWrapper({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      {children}
      <Footer />
    </>
  );
}
