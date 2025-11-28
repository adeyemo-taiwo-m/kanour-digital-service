"use client";

import React from "react";
import Link from "next/link";
import { socials } from "@/app/_lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-background border-t border-dark-variant/10 dark:border-light-variant/10 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 group mb-4">
              <span className="text-2xl font-bold tracking-tighter text-dark-default dark:text-light-default group-hover:text-primary-default transition-colors">
                Kanour
              </span>
            </Link>
            <p className="text-dark-variant/70 dark:text-light-variant/70 text-sm leading-relaxed">
              Intelligent Software & AI Systems for Financial and Business
              Excellence.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-1">
            <h3 className="text-dark-default dark:text-light-default font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-variant/70 dark:text-light-variant/70 hover:text-primary-default dark:hover:text-primary-default text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-1">
            <h3 className="text-dark-default dark:text-light-default font-semibold mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-dark-variant/70 dark:text-light-variant/70 hover:text-primary-default dark:hover:text-primary-default text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-dark-variant/70 dark:text-light-variant/70 hover:text-primary-default dark:hover:text-primary-default text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="md:col-span-1">
            <h3 className="text-dark-default dark:text-light-default font-semibold mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-variant/70 dark:text-light-variant/70 hover:text-primary-default dark:hover:text-primary-default transition-colors text-xl"
                  aria-label={social.label}
                >
                  <social.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-variant/10 dark:border-light-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-variant/50 dark:text-light-variant/50 text-sm">
            © {currentYear} Kanour Digital Services. All rights reserved.
          </p>
          <p className="text-dark-variant/50 dark:text-light-variant/50 text-sm flex items-center gap-1">
            Made with <span className="text-red-500">♥</span> by Kanour Team
          </p>
        </div>
      </div>
    </footer>
  );
}
