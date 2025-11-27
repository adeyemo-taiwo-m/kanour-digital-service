"use client";

import React, { useState } from "react";
import Button from "@/app/_ui/Button";
import { FaPaperPlane } from "react-icons/fa";
import ScrollAnimation from "@/app/_ui/ScrollAnimation";
import Toast from "@/app/_ui/Toast";
import { send } from "@emailjs/browser";

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
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });
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
    console.log("Form submitted:", formData);
    const serviceID = "service_5znnigg";
    const templateID = "template_ecz2nrr";
    const publicKey = "PR4BYMprY_gY4sfDB";

    send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setToast({
          show: true,
          message: "Booking submitted! We'll get back to you soon.",
          type: "success",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          projectType: "",
          budget: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        setToast({
          show: true,
          message: "Failed to send booking. Please try again later.",
          type: "error",
        });
      });
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-white dark:bg-dark-variant/10 border border-gray-200 dark:border-gray-700 focus:border-primary-default focus:ring-2 focus:ring-primary-default/20 outline-none transition-all duration-300 text-dark-default dark:text-light-default placeholder-gray-400";
  const labelClasses =
    "block text-sm font-medium text-dark-variant/80 dark:text-light-variant/80 mb-2";

  return (
    <div className="w-full max-w-6xl mx-auto bg-white dark:bg-dark-variant/5 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollAnimation delay={0.1}>
            <label htmlFor="name" className={labelClasses}>
              Name
            </label>
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
          </ScrollAnimation>
          <ScrollAnimation delay={0.2}>
            <label htmlFor="email" className={labelClasses}>
              Email
            </label>
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
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.3}>
          <label htmlFor="company" className={labelClasses}>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Name"
            className={inputClasses}
          />
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScrollAnimation delay={0.4}>
            <label htmlFor="projectType" className={labelClasses}>
              Project Type
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
              required
            >
              <option
                value=""
                disabled
                className="bg-white dark:bg-dark-default text-dark-default dark:text-light-default"
              >
                Select a type
              </option>
              {projectTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                  className="bg-white dark:bg-dark-default text-dark-default dark:text-light-default"
                >
                  {type}
                </option>
              ))}
            </select>
          </ScrollAnimation>
          <ScrollAnimation delay={0.5}>
            <label htmlFor="budget" className={labelClasses}>
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`${inputClasses} appearance-none cursor-pointer`}
              required
            >
              <option
                value=""
                disabled
                className="bg-white dark:bg-dark-default text-dark-default dark:text-light-default"
              >
                Select a range
              </option>
              {budgetRanges.map((range) => (
                <option
                  key={range}
                  value={range}
                  className="bg-white dark:bg-dark-default text-dark-default dark:text-light-default"
                >
                  {range}
                </option>
              ))}
            </select>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.6}>
          <label htmlFor="message" className={labelClasses}>
            Message
          </label>
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
        </ScrollAnimation>

        <ScrollAnimation delay={0.7} className="pt-4">
          <Button
            type="primary"
            className="w-full justify-center !py-4 !text-lg"
          >
            Send Message
            <FaPaperPlane className="ml-2 w-4 h-4" />
          </Button>
        </ScrollAnimation>
      </form>

      <Toast
        message={toast.show ? toast.message : ""}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />
    </div>
  );
}
