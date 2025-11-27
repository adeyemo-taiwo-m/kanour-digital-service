"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/app/_ui/Button";
import { FaArrowRight } from "react-icons/fa";

export default function PricingCTA() {
  return (
    <section className="py-20 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-dark-default rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] rounded-full bg-primary-default/10 blur-[120px]" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] rounded-full bg-primary-variant/10 blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Need a custom solution?
            </h2>
            <p className="text-xl text-gray-300 mb-10 font-light">
              Every business is unique. Let's discuss your specific requirements
              and build a plan that fits your budget and goals.
            </p>
            <div className="w-full flex justify-center">
              <Link href="/contact">
                <Button type="primary">
                  Get an Exact Quote
                  <FaArrowRight className="ml-2 w-5 h-5 inline-block" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
