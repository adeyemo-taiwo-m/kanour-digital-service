"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-dark-variant/20 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tighter text-dark-default dark:text-light-default group-hover:text-primary-default group-hover:rounded-full transition-colors">
            Kanour
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
          <Link
  key={item}
  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
  className="
    text-sm font-medium 
    text-dark-variant/80 dark:text-light-variant/80
    px-3 py-1.5 rounded-md
    hover:bg-dark-variant/10 dark:hover:bg-light-variant/10
    hover:text-primary-default
    transition-all
  "
>
  {item}
</Link>

          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="hidden sm:block px-6 py-3 rounded-full bg-primary-default hover:bg-primary-variant text-white font-medium text-sm transition-all active:scale-95 shadow-lg shadow-primary-default/20">
            Book a Call
          </button>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-foreground/80 hover:text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
