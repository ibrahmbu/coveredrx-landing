"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    label: "The shortage is structural.",
    body: "Pharmacist and technician turnover has been climbing for years. Independent pharmacies are absorbing more patients while running leaner than ever. This isn't a temporary blip.",
  },
  {
    label: "The informal system has a ceiling.",
    body: "Group chats, personal call lists, word of mouth — they work until they don't. When your usual people aren't available, there's nowhere obvious to turn.",
  },
  {
    label: "The tools haven't kept up.",
    body: "Per-diem shift coverage is a specific problem. Generic job boards and full-time hiring platforms weren't designed for it.",
  },
];

export function ProblemBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#f8fafc] py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#f0fdfa] text-[#0d9488] text-[11px] uppercase tracking-wider font-medium rounded-full">
            The shortage is real. The tools haven&apos;t caught up.
          </span>
        </motion.div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-0">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`${
                index !== problems.length - 1
                  ? "md:border-r md:border-[#e2e8f0]"
                  : ""
              } ${index !== 0 ? "md:pl-8" : ""} ${
                index !== problems.length - 1 ? "md:pr-8" : ""
              }`}
            >
              <h3 className="text-lg font-bold text-[#0f172a] mb-3">
                {problem.label}
              </h3>
              <p className="text-base text-[#334155] leading-relaxed">
                {problem.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
