"use client";

import React from "react";
import Heading from "@/app/_ui/Heading";
import WhatWeDoCard from "./WhatWeDoCard";
import { services } from "@/app/_lib/data";



export default function WhatWeDo() {
  return (
    <section className="w-full py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
         <Heading type="h2">  What We Do   </Heading>
           
         
          <p className="text-lg text-dark-variant/70 dark:text-light-variant/70">
            Comprehensive digital solutions tailored to elevate your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <WhatWeDoCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

