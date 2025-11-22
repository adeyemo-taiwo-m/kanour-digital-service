"use client";

import React from "react";
import { HiChip, HiCode, HiCreditCard, HiCheck } from "react-icons/hi";

const services = [
  {
    title: "AI Automation & Intelligent Systems",
    description:
      "Automate workflows, speed up operations, eliminate manual work, and unlock new business capabilities through intelligent AI tools.",
    icon: <HiChip className="w-8 h-8 text-primary-default" />,
    features: [
      "AI workflow assistants",
      "AI customer support",
      "Process automation",
      "Predictive analytics",
      "Document intelligence",
      "Voice-to-text & transcription",
      "Operations AI tools",
    ],
  },
  {
    title: "Software & Product Engineering",
    description:
      "We build fast, secure, scalable software that supports real business operations.",
    icon: <HiCode className="w-8 h-8 text-primary-default" />,
    features: [
      "Web apps",
      "Mobile apps (iOS/Android)",
      "Dashboards & analytics",
      "Enterprise systems",
      "Internal tools",
      "MVPs & prototypes",
      "Cloud architecture & modernization",
    ],
  },
  {
    title: "FinTech Engineering",
    description:
      "Secure, reliable, compliant, and high-performance engineering for financial services.",
    icon: <HiCreditCard className="w-8 h-8 text-primary-default" />,
    features: [
      "Wallet systems",
      "Payment integrations",
      "Digital banking modules",
      "Lending platforms",
      "KYC & onboarding",
      "Compliance automation",
      "Agency banking systems",
    ],
  },
];

export default function WhatWeDo() {
  return (
    <section className="w-full py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-dark-default dark:text-light-default">
            What We Do
          </h2>
          <p className="text-lg text-dark-variant/70 dark:text-light-variant/70">
            Comprehensive digital solutions tailored to elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white dark:bg-dark-variant/10 border border-dark-variant/5 dark:border-light-variant/5 hover:border-primary-default/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-default/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-default/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-primary-default/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-dark-default dark:text-light-default">
                  {service.title}
                </h3>

                <p className="text-dark-variant/70 dark:text-light-variant/70 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 min-w-[18px]">
                        <HiCheck className="w-4.5 h-4.5 text-primary-default" />
                      </div>
                      <span className="text-sm text-dark-variant/80 dark:text-light-variant/80 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
