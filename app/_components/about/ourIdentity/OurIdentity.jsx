"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ourIdentity from "@/public/images/our-identity.jpg";

export default function OurIdentity() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
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
                Who We Are
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Our <span className="text-primary-default">Identity</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                <span className="font-semibold text-foreground">Kanour Digital Services</span> is the service and engineering division of Kanour — built to help businesses run smarter using modern software and intelligent automation.
              </p>
              <p>
                We support the parent company’s vision by delivering world-class engineering today while building the foundation for future AI, IoT, and robotics innovation.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-4"
            >
              <div className="h-1 w-20 bg-gradient-to-r from-primary-default to-primary-variant rounded-full" />
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative group"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-default/20 to-primary-variant/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-background/50 backdrop-blur-sm">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-default/10 via-transparent to-transparent z-10" />
              
              {/* Image Placeholder - Using a high-quality Unsplash image for tech/engineering */}
              <Image
                src={ourIdentity}
                alt="Digital Innovation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Glass Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary-default/20 flex items-center justify-center text-primary-default">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Engineering Future</p>
                    <p className="text-white/70 text-sm">AI • IoT • Robotics</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
