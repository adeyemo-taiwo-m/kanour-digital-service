"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ceoImage from "@/public/images/ceo-image.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { socials } from "@/app/_lib/data";
import Link from "next/link";

export default function OurLeadership() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Left Side (Span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-8 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <span className="text-primary-default font-semibold tracking-wider uppercase text-sm">
                Guiding Force
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Our <span className="text-primary-default">Leadership</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                Kanour Digital Services is led by engineering leaders passionate about <span className="text-foreground font-medium">software, AI, enterprise architecture, automation,</span> and <span className="text-foreground font-medium">high-performance systems</span>.
              </p>
              <p>
                We believe that true innovation comes from a deep understanding of both technology and the human needs it serves. Our leadership is dedicated to building a future where technology empowers every business to reach its full potential.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 mt-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Oluwapelumi Olamilekan
                </h3>
                <p className="text-primary-default text-sm font-medium tracking-wide uppercase">
                  Chief Executive Officer
                </p>
              </div>
              
              <div className="flex gap-4 mt-6">
                {socials.map((social, i) => (
                  <Link   
                    key={i} 
                    href={social.link} 
                    className="p-3 rounded-full bg-white/5 text-foreground hover:bg-primary-default hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image Content - Right Side (Span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Decorative Background Blob */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-default/20 to-primary-variant/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Image Card */}
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-background/50">
                <Image
                  src={ceoImage}
                  alt="CEO"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quote Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <FaQuoteLeft className="text-primary-default text-2xl mb-4" />
                  <p className="text-white/90 italic font-light">
                    "We are not just building software; we are engineering the backbone of the future economy."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
