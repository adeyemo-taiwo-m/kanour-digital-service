"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle, FaTimes } from "react-icons/fa";

export default function Toast({
  message,
  type = "success",
  onClose,
  duration = 5000,
}) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: "-50%", scale: 0.9 }}
          animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed top-10 left-1/2 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl bg-white dark:bg-dark-variant border border-gray-100 dark:border-gray-700 max-w-[95vw] sm:max-w-md"
        >
          <div className="flex-shrink-0">
            {type === "success" ? (
              <FaCheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <FaExclamationCircle className="w-6 h-6 text-red-500" />
            )}
          </div>

          <p className="flex-1 text-base font-medium text-dark-default dark:text-light-default">
            {message}
          </p>

          <button
            onClick={onClose}
            className="flex-shrink-0 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
