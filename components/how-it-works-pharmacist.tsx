"use client";

import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Create your profile",
    body: "Your name, NPI number, and NY state license number. You'll be verified before your first shift. Takes under five minutes.",
  },
  {
    number: "02",
    title: "Browse open shifts",
    body: "A live feed of available shifts, sorted by urgency. Same-day shifts that still need coverage sit at the top.",
  },
  {
    number: "03",
    title: "See everything upfront",
    body: "Pharmacy name, location, software used, hourly rate, shift hours, and whether technicians will be on. All visible before you decide — no surprises.",
  },
  {
    number: "04",
    title: "Express interest in one tap",
    body: "No cover letter. No phone screen. Just tap. The pharmacy reaches out directly from there.",
  },
  {
    number: "05",
    title: "Get notified",
    body: "You hear back when you're selected — and when a shift fills without you, so you're never left waiting on an answer.",
  },
];

export function HowItWorksPharmacist() {
  const ref = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="for-pharmacists" className="bg-white py-24 md:py-28">
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
            For Pharmacists
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-tight text-balance">
            See available shifts. Know the details. Say yes in one tap.
          </h2>
          <p className="mt-6 text-lg text-[#334155] leading-relaxed max-w-[60ch] mx-auto">
            Waiting on a call that might not come. Hoping the right pharmacy
            sees your message. Picking up shifts should be simpler than this —
            and now it is. The rate, the location, the pharmacy software — all
            visible before you commit.
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
          <div className="md:hidden relative">
            <div
              className="overflow-x-auto pb-4 pl-6 pr-4 scrollbar-hide snap-x snap-mandatory"
              onScroll={(e) => {
                const el = e.currentTarget;
                const index = Math.round(el.scrollLeft / 296);
                setActiveCard(index);
              }}
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
            <div className="flex justify-center gap-2 mt-4">
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
            Join the Waitlist — Pharmacist
            <span aria-hidden="true">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
