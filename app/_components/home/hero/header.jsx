"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Button from "@/app/_ui/Button";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = ["Home", "About", "Services", "Pricing", "Contact"];

  const isActive = (item) => {
    const path = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-dark-variant/10 dark:border-light-variant/10 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="text-2xl font-bold tracking-tighter text-dark-default dark:text-light-default group-hover:text-primary-default group-hover:rounded-full transition-colors">
            Kanour
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className={`
                text-sm font-medium 
                px-3 py-1.5 rounded-md
                transition-all
                ${isActive(item) 
                  ? "text-primary-default bg-primary-default/10" 
                  : "text-dark-variant/80 dark:text-light-variant/80 hover:bg-dark-variant/10 dark:hover:bg-light-variant/10 hover:text-primary-default"
                }
              `}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Button onClick={() => router.push("https://calendly.com/adeyemotaiwom999/30min")} type="primarySmall">
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-dark-default dark:text-light-default hover:text-primary-default transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-dark-default/95 backdrop-blur-md border-b border-dark-variant/10 dark:border-light-variant/10 shadow-lg lg:hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className={`
                    text-lg font-medium py-2 border-b border-dark-variant/5 dark:border-light-variant/5 last:border-0 transition-colors
                    ${isActive(item)
                      ? "text-primary-default"
                      : "text-dark-default dark:text-light-default hover:text-primary-default"
                    }
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <div className="pt-4 sm:hidden">
                <Button onClick={() => {
                  router.push("https://calendly.com/adeyemotaiwom999/30min");
                  setIsMobileMenuOpen(false);
                }} type="primary" className="w-full justify-center">
                  Book a Call
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
