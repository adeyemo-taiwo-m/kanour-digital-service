"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "Partner 1", color: "#0FB7B7" },
  { name: "FinTech Corp", color: "#8B5CF6" },
  { name: "Startup Inc", color: "#F59E0B" },
  { name: "Enterprise Solutions", color: "#10B981" },
  { name: "Global Systems", color: "#3B82F6" },
];

export default function TrustedBy() {
  return (
    <section className="w-full py-12 overflow-hidden bg-background border-y border-light-variant/5 dark:border-dark-variant/5">
      <div className="container mx-auto px-4 mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-dark-variant/50 dark:text-light-variant/50">
          Trusted by innovative companies worldwide
        </p>
      </div>

      <div className="relative flex w-full overflow-hidden mask-gradient">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          className="flex items-center gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {/* Duplicate logos to create seamless loop */}
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[150px] opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
            >
              {/* Placeholder Logo SVG */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  style={{ backgroundColor: logo.color }}
                >
                  {logo.name.charAt(0)}
                </div>
                <span className="text-lg font-bold text-dark-default dark:text-light-default">
                  {logo.name}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
