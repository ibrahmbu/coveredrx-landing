"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "For Pharmacists", href: "#for-pharmacists" },
    { label: "For Pharmacies", href: "#for-pharmacies" },
    { label: "Why CoveredRx", href: "#why-coveredrx" },
    { label: "Join the Waitlist", href: "#waitlist" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-[#0f172a]">
          Covered<span className="text-[#0d9488]">Rx</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#334155] hover:text-[#0d9488] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#waitlist"
            className="hidden md:inline-flex items-center gap-1 px-5 py-2.5 bg-[#0d9488] text-white text-sm font-medium rounded-full hover:bg-[#0d9488]/90 transition-colors"
          >
            Join the Waitlist
            <span aria-hidden="true">→</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0f172a]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#e2e8f0] pb-4"
          >
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 text-[#334155] hover:text-[#0d9488] hover:bg-[#f8fafc] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 text-center px-5 py-2.5 bg-[#0d9488] text-white text-sm font-medium rounded-full hover:bg-[#0d9488]/90 transition-colors"
              >
                Join the Waitlist →
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
