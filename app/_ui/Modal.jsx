"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, onClose, children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-auto max-w-[95vw] transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all dark:bg-dark-variant border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute right-4 top-4">
          <button
            onClick={onClose}
            className="rounded-full p-1 text-dark-default/50 hover:bg-dark-default/5 hover:text-dark-default dark:text-light-default/50 dark:hover:bg-light-default/10 dark:hover:text-light-default transition-colors"
          >
            <IoClose size={24} />
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-bold font-heading text-dark-default dark:text-white">
            Get in Touch
          </h3>
          <p className="mt-2 text-sm text-dark-default/60 dark:text-light-default/60">
            Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        {children}
      </div>
    </div>,
    document.body
  );
}
