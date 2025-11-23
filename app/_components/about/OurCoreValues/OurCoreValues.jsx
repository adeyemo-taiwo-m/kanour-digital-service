"use client";

import { motion } from "framer-motion";

const values = [
  "Excellence",
  "Integrity",
  "Innovation",
  "Impact",
  "Partnership",
  "Discipline",
  "Growth"
];

const MarqueeRow = ({ items, direction = "left", speed = 20 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-4 group">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex gap-8 md:gap-16"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span
            key={idx}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent transition-all duration-500 cursor-default select-none"
            style={{
              WebkitTextStroke: "1px rgba(var(--foreground), 0.2)",
            }}
          >
            <span className="hover:text-primary-default text-light-default/70 hover:drop-shadow-[0_0_15px_rgba(var(--primary-default),0.5)] transition-all duration-300">
                {item}
            </span>
            <span className="ml-8 md:ml-16 text-primary-default/20">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function OurCoreValues() {
  return (
    <section className="w-full py-20 lg:py-32 overflow-hidden bg-background/50">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <span className="text-primary-default font-semibold tracking-wider uppercase text-sm">
            What Drives Us
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Core <span className="text-primary-default">Values</span>
            </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8">
        <MarqueeRow items={values} direction="left" speed={40} />
        <MarqueeRow items={[...values].reverse()} direction="right" speed={40} />
      </div>
    </section>
  );
}
