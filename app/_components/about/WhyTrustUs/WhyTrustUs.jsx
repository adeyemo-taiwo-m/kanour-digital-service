"use client";

import React from "react";
import Heading from "@/app/_ui/Heading";
import ScrollAnimation from "@/app/_ui/ScrollAnimation";
import { trustPoints } from "@/app/_lib/data";


export default function WhyTrustUs() {
  return (
    <section className="w-full py-24 relative overflow-hidden bg-dark-default text-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-default/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary-variant/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollAnimation>
            <Heading type="h2" className="text-white mb-6">
              Why Trust Us?
            </Heading>
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <p className="text-xl text-gray-400 font-light">
              We don't just write code; we engineer intelligent systems that drive business growth.
            </p>
          </ScrollAnimation>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => (
            <ScrollAnimation key={index} delay={index * 0.1} className="h-full">
              <div className="group h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary-default/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(15,183,183,0.1)]">
                <div className="mb-6 inline-flex p-3 rounded-xl bg-primary-default/10 text-primary-default group-hover:bg-primary-default group-hover:text-white transition-colors duration-300">
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-default transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300">
                  {point.description}
                </p>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Bottom CTA / Summary */}
        <div className="mt-16 text-center">
          <ScrollAnimation delay={0.6}>
            <div className="inline-block p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <p className="text-lg font-medium text-gray-300">
                <span className="text-primary-default">Commitment to Excellence:</span> Deep research, AI integration, and high-quality standards.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
