"use client";

import React from "react";
import Heading from "@/app/_ui/Heading";
import { differences } from "@/app/_lib/data";


import ScrollAnimation from "@/app/_ui/ScrollAnimation";

export default function OurDifference() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-dark-default z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-default/20 to-transparent opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-primary-default/10 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <ScrollAnimation>
            <Heading type="h2" className="text-white mb-6">
              The Kanour Difference
            </Heading>
          </ScrollAnimation>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {["AI-first", "Engineering-driven", "Results-focused"].map(
              (tag, index) => (
                <ScrollAnimation key={index} delay={0.2 + index * 0.1}>
                  <span
                    className="px-6 py-2 rounded-full border border-primary-default/30 bg-primary-default/5 text-primary-variant shadow-[0_0_15px_rgba(15,183,183,0.15)] backdrop-blur-sm text-lg font-medium"
                  >
                    {tag}
                  </span>
                </ScrollAnimation>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {differences.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} className="h-full">
              <div
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-default/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(15,183,183,0.15)] flex flex-col items-center text-center h-full"
              >
                <div className="mb-6 p-4 bg-white/5 rounded-full group-hover:scale-110 group-hover:bg-primary-default/20 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-default transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                  {item.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto border-t border-white/10 pt-12">
          <ScrollAnimation delay={0.3}>
            <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
              "We combine software, automation, and FinTech expertise to deliver
              intelligent systems that move businesses forward."
            </p>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
