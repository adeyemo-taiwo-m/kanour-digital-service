"use client";

import { motion } from "framer-motion";
import { FaMicrochip } from "react-icons/fa";

export default function OurVision() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary-default font-semibold tracking-wider uppercase text-sm"
              >
                The Future
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Our <span className="text-primary-default">Vision</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                A world where every business — <span className="text-foreground font-medium">small or large</span> — operates with the power of AI, automation, and modern engineering.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
                {["AI Powered", "Automation", "Modern Engineering"].map((tag, index) => (
                    <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        className="px-4 py-2 rounded-full bg-primary-default/10 text-primary-default text-sm font-medium border border-primary-default/20"
                    >
                        {tag}
                    </motion.div>
                ))}
            </div>
          </motion.div>

          {/* Visual Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative group"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-variant/20 to-primary-default/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative aspect-square max-w-md mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white/5 bg-background/50 backdrop-blur-sm flex items-center justify-center">
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary-default/20 z-10" />

              {/* Icon Placeholder */}
              <div className="relative z-20 text-primary-default/80 group-hover:text-primary-default transition-colors duration-500">
                  <FaMicrochip className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_20px_rgba(var(--primary-default),0.5)] transition-transform duration-700 group-hover:scale-110" />
              </div>

               {/* Floating Badge */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full h-full flex items-center justify-center pointer-events-none">
                  <div className="w-[80%] h-[80%] rounded-full border border-white/20 animate-[spin_10s_linear_infinite] opacity-30" />
                  <div className="absolute w-[60%] h-[60%] rounded-full border border-primary-default/30 animate-[spin_15s_linear_infinite_reverse] opacity-40" />
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
