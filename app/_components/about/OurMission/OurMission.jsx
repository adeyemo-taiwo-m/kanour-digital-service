"use client";

import { motion } from "framer-motion";
import { FaGlobeAfrica } from "react-icons/fa";

export default function OurMission() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-background/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Visual Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group order-2 lg:order-1 max-w-md mx-auto w-full"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-l from-primary-default/20 to-primary-variant/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-background/50 backdrop-blur-sm flex items-center justify-center">
               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-tl from-primary-default/10 via-transparent to-transparent z-10" />

              {/* Icon Placeholder */}
              <div className="relative z-20 text-primary-default/80 group-hover:text-primary-default transition-colors duration-500">
                  <FaGlobeAfrica className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_15px_rgba(var(--primary-default),0.3)] transition-transform duration-700 group-hover:scale-110" />
              </div>

               {/* Glass Card Overlay */}
               <div className="absolute top-6 right-6 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 z-20 transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-col items-end gap-2">
                  <div className="h-10 w-10 rounded-full bg-primary-default/20 flex items-center justify-center text-primary-default mb-2">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">Accelerating Growth</p>
                    <p className="text-white/70 text-sm">Africa & The World</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-primary-default font-semibold tracking-wider uppercase text-sm"
              >
                Our Purpose
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Our <span className="text-primary-default">Mission</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                To design <span className="text-foreground font-medium">intelligent systems</span> that strengthen businesses, improve operations, and accelerate financial services across Africa and the world.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-1 bg-gradient-to-r from-primary-default to-transparent rounded-full"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
