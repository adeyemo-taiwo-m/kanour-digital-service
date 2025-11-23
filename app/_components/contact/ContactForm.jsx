"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/app/_ui/Button";
import { FaPaperPlane } from "react-icons/fa";

const projectTypes = [
  "AI Automation & Integration",
  "Web Application Development",
  "Mobile App Development",
  "FinTech Solution",
  "Enterprise System",
  "Consultation / Advisory",
  "Other",
];

const budgetRanges = [
  "$5k - $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-variant/10 border border-gray-200 dark:border-gray-700 focus:border-primary-default focus:ring-2 focus:ring-primary-default/20 outline-none transition-all duration-300 text-dark-default dark:text-light-default placeholder-gray-400";
  const labelClasses = "block text-sm font-medium text-dark-variant/80 dark:text-light-variant/80 mb-2";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto bg-white dark:bg-dark-variant/5 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClasses}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={inputClasses}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className={inputClasses}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className={labelClasses}>Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Name"
            className={inputClasses}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectType" className={labelClasses}>Project Type</label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
              required
            >
              <option value="" disabled className="bg-white dark:bg-dark-default text-dark-default dark:text-light-default">Select a type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type} className="bg-white dark:bg-dark-default text-dark-default dark:text-light-default">{type}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className={labelClasses}>Budget Range</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
              required
            >
              <option value="" disabled className="bg-white dark:bg-dark-default text-dark-default dark:text-light-default">Select a range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range} className="bg-white dark:bg-dark-default text-dark-default dark:text-light-default">{range}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className={labelClasses}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your project goals, timeline, and any specific requirements..."
            className={`${inputClasses} resize-none`}
            required
          />
        </div>

        <div className="pt-4">
          <Button type="primary" className="w-full justify-center !py-4 !text-lg">
            Send Message
            <FaPaperPlane className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </form>
    </motion.div>
  );
}
