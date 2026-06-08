"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef, useCallback } from "react";

const steps = [
  {
    number: "01",
    title: "Create your pharmacy profile",
    body: "Your pharmacy name, address, NYS pharmacy license number, and the software you run. You'll be verified before going live. Takes under five minutes.",
  },
  {
    number: "02",
    title: "Post an open shift",
    body: "Date, time, hourly rate, and whether technicians will be on. The platform handles the rest.",
  },
  {
    number: "03",
    title: "See verified pharmacists who are interested",
    body: "A list of licensed, credentialed pharmacists who expressed interest in your shift. Same-day shifts surface in real time. Planned shifts collect interest first, then show you the list.",
  },
  {
    number: "04",
    title: "Reach out directly",
    body: "Tap a profile, get their contact number, call or text. No platform chat. No middleman. No delays.",
  },
  {
    number: "05",
    title: "Mark it filled",
    body: "Everyone else who expressed interest gets notified automatically. Done.",
  },
];

export function HowItWorksPharmacy() {
  const ref = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const handleScroll = useCallback(() => {
  const el = scrollRef.current;
  if (!el) return;
  const cardWidth = Math.min(el.offsetWidth * 0.85, 340) + 16;
  const index = Math.min(Math.round(el.scrollLeft / cardWidth), steps.length - 1);
  setActiveCard(index);
}, []);

  return (
    <section id="for-pharmacies" className="bg-[#f8fafc] py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 bg-[#f0fdfa] text-[#0d9488] text-[11px] uppercase tracking-wider font-medium rounded-full">
            For Pharmacies
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-tight text-balance">
            Post a shift. See who&apos;s available. Make the call.
          </h2>
          <p className="mt-6 text-lg text-[#334155] leading-relaxed max-w-[60ch] mx-auto">
            Your usual list works — until the day it doesn&apos;t. CoveredRx
            gives you a wider bench of verified pharmacists you can reach out to
            directly, on your terms, the same way you always have.
          </p>
        </motion.div>

        {/* Step Cards - Desktop Grid, Mobile Carousel */}
        <div className="relative">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm"
              >
                <span className="block text-5xl font-light text-[#0d9488] mb-4">
                  {step.number}
                </span>
                <h3 className="text-[17px] font-bold text-[#0f172a] mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-[#334155] leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div
  ref={scrollRef}
  className="md:hidden overflow-x-auto pb-4 pl-6 pr-4 scrollbar-hide snap-x snap-mandatory"
  onScroll={handleScroll}
>
            <div className="flex gap-4" style={{ width: "max-content" }}>
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white border border-[#e2e8f0] rounded-xl p-6 shadow-sm w-[min(85vw,340px)] flex-shrink-0 snap-start"
                >
                  <span className="block text-5xl font-light text-[#0d9488] mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-[17px] font-bold text-[#0f172a] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-[#334155] leading-relaxed">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Dot indicators */}
          <div className="md:hidden flex justify-center gap-2 mt-4">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${activeCard === index
                      ? "w-4 bg-[#0d9488]"
                      : "w-1.5 bg-[#cbd5e1]"
                    }`}
                />
              ))}
            </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-1 px-8 py-4 bg-[#0d9488] text-white text-base font-semibold rounded-full hover:bg-[#0d9488]/90 transition-colors"
          >
            Join the Waitlist — Pharmacy
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>

        {/* Verification Callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-12 max-w-xl mx-auto"
        >
          <div className="bg-[#f0fdfa] border-l-4 border-[#0d9488] rounded-lg p-5">
            <p className="text-[#0f172a] font-bold mb-2">
              You know who you&apos;re getting before you pick up the phone.
            </p>
            <p className="text-[#334155] text-base leading-relaxed">
              Every pharmacist on CoveredRx has their NPI number and NY state
              license verified before they can access the platform. Every
              pharmacy is verified the same way. No anonymous accounts, no
              unverified listings — on either side.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
