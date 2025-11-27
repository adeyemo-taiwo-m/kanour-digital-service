"use client";

import React from "react";
import ScrollStack, { ScrollStackItem } from "@/app/_ui/ScrollStack";
import Heading from "@/app/_ui/Heading";
import PortfolioContainer from "./PortfolioContainer";
import { projects } from "@/app/_lib/data";




export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full relative bg-background py-20">
      <div className="container mx-auto px-4  text-center">
        <Heading type="h2" className="mb-4">
          Featured <span className="text-primary-default">Projects</span>
        </Heading>
        <p className="text-xl text-dark-variant/70 dark:text-light-variant/70 max-w-2xl mx-auto">
          Explore how we've helped innovative companies transform their ideas into powerful digital reality.
        </p>
      </div>

      <div className=" w-full">
        <ScrollStack useWindowScroll={true} itemDistance={100} itemStackDistance={50}>
          {projects.map((project) => (
            <ScrollStackItem key={project.id} itemClassName="bg-white dark:bg-dark-variant/10 border border-gray-200 dark:border-white/10 backdrop-blur-xl !p-0 overflow-hidden group">
             <PortfolioContainer project={project} />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
