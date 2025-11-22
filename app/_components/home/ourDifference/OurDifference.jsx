"use client";

import React from "react";
import Heading from "@/app/_ui/Heading";
import { HiLightningBolt, HiCode, HiChartBar } from "react-icons/hi";

const differences = [
  {
    title: "AI-first",
    description:
      "We don't just add AI as an afterthought. We build intelligent systems from the ground up to automate complex workflows.",
    icon: <HiLightningBolt className="w-10 h-10 text-primary-default" />,
  },
  {
    title: "Engineering-driven",
    description:
      "Robust, scalable, and secure code is our obsession. We build software that stands the test of time and scale.",
    icon: <HiCode className="w-10 h-10 text-primary-default" />,
  },
  {
    title: "Results-focused",
    description:
      "Technology is a means to an end. We focus on delivering tangible business outcomes and measurable ROI.",
    icon: <HiChartBar className="w-10 h-10 text-primary-default" />,
  },
];

export default function OurDifference() {
  return (
    <section className="w-full py-24 bg-dark-default text-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary-default/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary-variant/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Heading type="h2" className="text-white mb-6">
            The Kanour Difference
          </Heading>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {["AI-first", "Engineering-driven", "Results-focused"].map(
              (tag, index) => (
                <span
                  key={index}
                  className="px-6 py-2 rounded-full border border-primary-default/30 bg-primary-default/5 text-primary-variant shadow-[0_0_15px_rgba(15,183,183,0.15)] backdrop-blur-sm text-lg font-medium"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {differences.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-default/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(15,183,183,0.15)] flex flex-col items-center text-center"
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
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto border-t border-white/10 pt-12">
          <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
            "We combine software, automation, and FinTech expertise to deliver
            intelligent systems that move businesses forward."
          </p>
        </div>
      </div>
    </section>
  );
}
