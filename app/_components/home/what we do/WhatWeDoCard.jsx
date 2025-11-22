import React from "react";
import { HiCheck } from "react-icons/hi";

export default function WhatWeDoCard({ title, description, icon, features }) {
  return (
    <div className="bg-white dark:bg-dark-variant/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col h-full hover:-translate-y-1">
      <div className="mb-6 p-3 bg-primary-default/10 rounded-xl w-fit">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-dark-default dark:text-light-default mb-4">
        {title}
      </h3>
      
      <p className="text-dark-variant/70 dark:text-light-variant/70 mb-8 flex-grow">
        {description}
      </p>
      
      <ul className="space-y-3 mt-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <HiCheck className="w-5 h-5 text-primary-default flex-shrink-0 mt-0.5" />
            <span className="text-sm text-dark-variant/80 dark:text-light-variant/80">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
