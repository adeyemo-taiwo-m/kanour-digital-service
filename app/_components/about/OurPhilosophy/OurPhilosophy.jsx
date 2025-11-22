"use client";

import { motion } from "framer-motion";
import { FaLayerGroup, FaServer, FaTachometerAlt, FaShieldAlt, FaSearch, FaTools } from "react-icons/fa";

const philosophyItems = [
  {
    title: "Clean Architecture",
    icon: FaLayerGroup,
    description: "Structured, scalable codebases that stand the test of time."
  },
  {
    title: "Reliable Systems",
    icon: FaServer,
    description: "Building robust infrastructure that you can depend on 24/7."
  },
  {
    title: "Performance at Scale",
    icon: FaTachometerAlt,
    description: "Optimized for speed and efficiency, no matter the user load."
  },
  {
    title: "Security-First Approach",
    icon: FaShieldAlt,
    description: "Protecting your data and users is our top priority from day one."
  },
  {
    title: "Obsessive Detail",
    icon: FaSearch,
    description: "Perfection in every pixel and every line of code."
  },
  {
    title: "Long-Term Maintainability",
    icon: FaTools,
    description: "Code that is easy to update, extend, and manage for years."
  }
];

export default function OurPhilosophy() {
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
              Core Values
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Our <span className="text-primary-default">Philosophy</span>
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Engineering is not just delivery — it is <span className="text-foreground font-medium">responsibility</span>.
            </p>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-default/30 transition-colors duration-300 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-default/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-default/10 text-primary-default group-hover:bg-primary-default group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary-default transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
