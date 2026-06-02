"use client";

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative bg-white pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            {/* Section Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#f0fdfa] text-[#0d9488] text-[11px] uppercase tracking-wider font-medium rounded-full">
                Now Accepting Waitlist Signups · Launching in New York City
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0f172a] leading-[1.1] tracking-tight text-balance"
            >
              Find per-diem pharmacy shifts without the runaround.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-6 text-lg text-[#334155] leading-relaxed max-w-[55ch] mx-auto md:mx-0"
            >
              CoveredRx connects licensed per-diem pharmacists with independent
              pharmacies that need reliable shift coverage — no middlemen, no
              recruiters, no guesswork. See the shift details upfront. Express
              interest in one tap.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-1 px-8 py-4 bg-[#0d9488] text-white text-base font-semibold rounded-full hover:bg-[#0d9488]/90 transition-colors shadow-lg shadow-[#0d9488]/20"
              >
                Join the Waitlist
                <span aria-hidden="true">→</span>
              </a>
              <p className="mt-4 text-[13px] text-[#64748b]">
                Free to join. No credit card required. Be the first to know when
                we launch.
              </p>
            </motion.div>
          </div>

          {/* Image Placeholder - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative aspect-[4/3] bg-[#cbd5e1] rounded-2xl shadow-xl flex items-center justify-center">
              <p className="text-[#64748b] text-sm text-center px-8">
                [Photo: Pharmacist at independent pharmacy counter]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
