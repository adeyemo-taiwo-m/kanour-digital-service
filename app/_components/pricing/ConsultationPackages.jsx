"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/app/_ui/Button";
import { FaCheck } from "react-icons/fa";

const packages = [
  {
    title: "Tech Strategy Session",
    price: "$150",
    period: "/session",
    description: "One-hour deep dive into your technical challenges and roadmap.",
    features: ["1-hour video call", "Architecture review", "Stack recommendations", "Written summary"],
  },
  {
    title: "AI Automation Consultation",
    price: "$300",
    period: "/session",
    description: "Identify high-impact automation opportunities for your business.",
    features: ["Workflow analysis", "Tool selection", "ROI estimation", "Implementation roadmap"],
    highlight: true,
  },
  {
    title: "Startup Tech Advisory",
    price: "$500",
    period: "/month",
    description: "Ongoing guidance for non-technical founders building tech products.",
    features: ["Weekly check-ins", "Vendor vetting", "Hiring support", "Technical oversight"],
  },
  {
    title: "CTO-as-a-Service",
    price: "$1,000",
    period: "/month",
    description: "Fractional CTO leadership for growing teams.",
    features: ["Strategic leadership", "Team management", "Code reviews", "Infrastructure planning"],
  },
];

export default function ConsultationPackages() {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-default dark:text-light-default mb-4">
            Consultation Packages
          </h2>
          <p className="text-xl text-dark-variant/70 dark:text-light-variant/70">
            Expert guidance to unblock your team and accelerate your roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 flex flex-col ${
                pkg.highlight
                  ? "bg-primary-default/5 border-primary-default shadow-lg shadow-primary-default/10 scale-105 z-10"
                  : "bg-white dark:bg-dark-variant/5 border-gray-200 dark:border-gray-800 hover:border-primary-default/30 hover:shadow-md"
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-default text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-dark-default dark:text-light-default mb-2">
                  {pkg.title}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary-default">{pkg.price}</span>
                  <span className="text-sm text-dark-variant/60 dark:text-light-variant/60">{pkg.period}</span>
                </div>
                <p className="mt-4 text-sm text-dark-variant/70 dark:text-light-variant/70 leading-relaxed min-h-[60px]">
                  {pkg.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-dark-variant/80 dark:text-light-variant/80">
                    <FaCheck className="w-4 h-4 text-primary-default flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link href="/contact" className="w-full block">
                  <Button 
                    type={pkg.highlight ? "primarySmall" : "secondarySmall"} 
                    className="w-full justify-center"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
