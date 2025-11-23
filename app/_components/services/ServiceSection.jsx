"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { serviceCategories } from "@/app/_lib/data";
import Button from "@/app/_ui/Button";
import { FaArrowRight } from "react-icons/fa";

export default function ServiceSection() {
  return (
    <div className="w-full bg-background">
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 border-b border-gray-100 dark:border-gray-800 last:border-0">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Header */}
            <div className="mb-12 md:mb-16 max-w-3xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-dark-default dark:text-light-default mb-4"
              >
                {category.title}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-xl text-dark-variant/70 dark:text-light-variant/70"
              >
                {category.description}
              </motion.p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {category.services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white dark:bg-dark-variant/5 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary-default/30 hover:shadow-lg hover:shadow-primary-default/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary-default/10 text-primary-default group-hover:bg-primary-default group-hover:text-white transition-colors duration-300 text-xl">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dark-default dark:text-light-default mb-2 group-hover:text-primary-default transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-dark-variant/70 dark:text-light-variant/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Category CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={category.ctaLink}>
                <Button type="primary" >
                  {category.ctaText}
                  <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
