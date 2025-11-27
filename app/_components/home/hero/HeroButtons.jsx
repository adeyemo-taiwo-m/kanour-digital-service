"use client";

import Button from "@/app/_ui/Button";
import Link from "next/link";
import Modal from "@/app/_ui/Modal";
import { useState } from "react";
import BookingForm from "./BookingForm";

export default function HeroButtons() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Link href="/contact">
          <Button type="primary"> Start Your Project </Button>
        </Link>

        <Button type="secondary" onClick={() => setOpenModal(true)}>
          {" "}
          Book a Consultation{" "}
        </Button>
      </div>

      <div>
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <BookingForm />
        </Modal>
      </div>
    </>
  );
}
