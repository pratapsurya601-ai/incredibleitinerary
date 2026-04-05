"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import InquiryModal from "@/components/ui/InquiryModal";

export default function BlogSlugNav() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Navbar onPlanTrip={() => setModalOpen(true)} />
      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
