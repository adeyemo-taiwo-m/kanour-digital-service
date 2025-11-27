"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaLaptopCode, FaCreditCard } from "react-icons/fa";

const projects = [
  {
    title: "AI Automation",
    priceRange: "$10,000 – $50,000",
    unit: "per integration",
    description: "End-to-end automation of complex business workflows.",
    icon: <FaRobot className="w-8 h-8 text-white" />,
    gradient: "from-primary-default to-primary-variant",
  },
  {
    title: "Software Projects",
    priceRange: "$8,000 – $80,000",
    unit: "depending on scope",
    description: "Custom web and mobile applications built for scale.",
    icon: <FaLaptopCode className="w-8 h-8 text-white" />,
    gradient: "from-primary-default to-primary-variant",
  },
  {
    title: "FinTech Engineering",
    priceRange: "$30,000 – $200,000",
    unit: "depending on modules",
    description:
      "Secure, compliant financial systems and payment integrations.",
    icon: <FaCreditCard className="w-8 h-8 text-white" />,
    gradient: "from-primary-default to-primary-variant",
  },
];

export default function ProjectPricing() {
  return (
    <section className="py-20 w-full bg-gray-50 dark:bg-dark-variant/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-default dark:text-light-default mb-4">
            Project Pricing
          </h2>
          <p className="text-xl text-dark-variant/70 dark:text-light-variant/70 mb-2">
            We use outcome-based pricing — not hourly billing.
          </p>
          <p className="text-sm text-dark-variant/50 dark:text-light-variant/50">
            Monthly retainers also available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-dark-default shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${project.gradient}`}
              />

              <div className="p-8">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold text-dark-default dark:text-light-default mb-2">
                  {project.title}
                </h3>

                <div className="my-6">
                  <p className="text-2xl font-bold text-primary-default">
                    {project.priceRange}
                  </p>
                  <p className="text-sm text-dark-variant/60 dark:text-light-variant/60 font-medium">
                    {project.unit}
                  </p>
                </div>

                <p className="text-dark-variant/70 dark:text-light-variant/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
