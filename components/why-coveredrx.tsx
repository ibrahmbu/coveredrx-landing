"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bodyBlocks = [
  {
    bold: "Most pharmacies don't use staffing agencies — they use people they trust.",
    body: "A short list: the pharmacist who covered last spring, someone a colleague referred, a name from a group chat. When one of them is available, the problem is solved.",
  },
  {
    bold: "When none of them are available, the shift goes uncovered.",
    body: "And there's no obvious next step. No platform built for this. No easy way to reach beyond the list you already have.",
  },
  {
    bold: "Per-diem pharmacists work the same way.",
    body: "A few pharmacies that call them directly. Word of mouth. The occasional post on LinkedIn or a Facebook group. It works until it runs dry.",
  },
  {
    bold: "The ceiling shows up at the worst possible moment.",
    body: "A Saturday morning. A holiday weekend. A last-minute callout with no backup and no time to find one.",
  },
  {
    bold: "CoveredRx doesn't replace the way you work. It extends it.",
    body: "Verified pharmacists, full shift details upfront, direct contact — the same conversation you'd have over the phone, just with a bigger pool to draw from and less scrambling to get there.",
  },
  {
    bold: "We're starting in New York City, where the need is most immediate.",
    body: "But the problem isn't unique to New York — and neither is what we're building.",
  },
];

const differentiators = [
  {
    title: "A bigger bench",
    body: "Access to verified, licensed pharmacists beyond your existing personal network — without giving up the direct relationship.",
  },
  {
    title: "No middleman",
    body: "You reach out directly. No platform chat, no go-between. The same phone call or text you'd make anyway, just with more options.",
  },
  {
    title: "Everything upfront",
    body: "Pharmacists see the rate, location, software, and hours before they express interest. Pharmacies see verified profiles before they reach out. No one wastes anyone's time.",
  },
];

export function WhyCoveredRx() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-coveredrx" className="bg-[#0f172a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-[#0d9488]/20 text-[#0d9488] text-[11px] uppercase tracking-wider font-medium rounded-full">
            Why CoveredRx
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight text-balance">
            The system you&apos;ve been using works. Until it doesn&apos;t.
          </h2>
        </motion.div>

        {/* Body Blocks */}
        <div className="max-w-[680px] mx-auto space-y-8 mb-16 md:mb-20">
          {bodyBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <p className="text-[19px] font-bold text-white mb-1">
                {block.bold}
              </p>
              <p className="text-[17px] text-slate-300 leading-relaxed">
                {block.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Three Column Differentiator Block */}
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="bg-[#1e293b] border border-[#334155] rounded-xl p-7"
            >
              <h3 className="text-lg font-bold text-white mb-3">{diff.title}</h3>
              <p className="text-slate-300 leading-relaxed">{diff.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
