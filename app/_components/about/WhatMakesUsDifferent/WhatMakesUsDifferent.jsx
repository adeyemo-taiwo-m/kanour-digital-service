"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaBuilding, FaRocket, FaBrain, FaUserTie, FaHandshake, FaArrowRight } from "react-icons/fa";

const features = [
  {
    title: "Business Infrastructure",
    description: "We do not build generic apps — we build business infrastructure.",
    icon: FaBuilding,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "Speed + Quality",
    description: "We don’t promise speed at the expense of quality — we deliver both.",
    icon: FaRocket,
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "Integrated Capability",
    description: "We combine AI + Software + FinTech into one integrated capability.",
    icon: FaBrain,
    className: "md:col-span-1 lg:col-span-1",
  },
  {
    title: "CTO-Level Guidance",
    description: "We provide CTO-level guidance, not just development.",
    icon: FaUserTie,
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    title: "True Partnership",
    description: "We work as partners, not contractors.",
    icon: FaHandshake,
    className: "md:col-span-3 lg:col-span-3",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-default font-semibold tracking-wider uppercase text-sm">
              Why Us
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              What Makes Us <span className="text-primary-default">Different</span>
            </h2>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-primary-default/50 transition-colors duration-500 ${feature.className}`}
            >
              {/* Spotlight Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-default/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon Background */}
              <div className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-primary-default/10 transition-colors duration-500">
                <feature.icon className="w-48 h-48 transform rotate-12 group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="relative z-10 h-full flex flex-col justify-between gap-6">
                <div className="w-12 h-12 rounded-xl bg-primary-default/20 flex items-center justify-center text-primary-default group-hover:bg-primary-default group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary-default transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link href="/portfolio" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-default text-white font-semibold text-lg hover:bg-primary-variant transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary-default/25">
            See What We Build
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
