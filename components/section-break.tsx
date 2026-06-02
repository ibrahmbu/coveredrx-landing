"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function SectionBreak() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative h-[200px] md:h-[350px] bg-[#cbd5e1] overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0f172a]/25" />

      {/* Placeholder Label */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white/70 text-sm text-center px-8">
          [Photo: Independent pharmacy interior, wide angle]
        </p>
      </div>

      {/* Optional text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-lg md:text-xl font-medium text-center px-8 max-w-2xl italic">
          &ldquo;Built for independent pharmacies. Designed around the way you
          already work.&rdquo;
        </p>
      </div>
    </motion.section>
  );
}
