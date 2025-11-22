"use client";

import React from "react";
import Link from "next/link";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { reasons } from "@/app/_lib/data";
import {  HiArrowRight } from "react-icons/hi";



export default function WhyChooseUs() {
  return (
    <section className="w-full py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-dark-default dark:text-light-default">
              Why Companies Choose Us
            </h2>
            <p className="text-xl text-dark-variant/80 dark:text-light-variant/80 mb-8 font-light">
              Engineering quality that delivers results — not excuses.
            </p>
            
            <Link 
              href="/services" 
              className="inline-flex items-center gap-2 text-primary-default font-semibold hover:gap-3 transition-all group"
            >
              Explore Our Services 
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Side: Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
             <WhyChooseUsCard index={index} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
