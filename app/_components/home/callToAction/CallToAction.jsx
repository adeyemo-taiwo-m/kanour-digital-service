"use client";

import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import Button from "@/app/_ui/Button";

export default function CallToAction() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-dark-default rounded-t-[3rem]">
      {/* Background with Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-default/20 to-transparent opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary-default/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to modernize, automate, or build?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
            Let’s create something intelligent together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button 
                variant="primary" 
                className="!py-4 !px-8 !text-lg !rounded-full shadow-[0_0_20px_rgba(15,183,183,0.4)] hover:shadow-[0_0_30px_rgba(15,183,183,0.6)]"
              >
                Start Your Project 
                <HiArrowRight className="ml-2 w-5 h-5 inline-block" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
