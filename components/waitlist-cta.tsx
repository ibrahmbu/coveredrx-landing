"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function WaitlistCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [userType, setUserType] = useState<string>("");

  return (
    <section id="waitlist" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-[#f0fdfa] text-[#0d9488] text-[11px] uppercase tracking-wider font-medium rounded-full">
            Get Early Access
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-[44px] font-bold text-[#0f172a] leading-tight text-balance">
            Be first when we launch in New York City.
          </h2>
          <p className="mt-6 text-lg text-[#334155] leading-relaxed max-w-[52ch] mx-auto">
            We&apos;re building the waitlist now. Sign up to be notified the
            moment we open — and to help shape what we build next.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-5 py-4 text-base border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition-shadow"
              />
            </div>

            {/* Radio Group */}
            <fieldset>
              <legend className="text-sm font-semibold text-[#0f172a] mb-3">
                I am...
              </legend>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="pharmacist"
                    checked={userType === "pharmacist"}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-4 h-4 text-[#0d9488] border-[#e2e8f0] focus:ring-[#0d9488]"
                    required
                  />
                  <span className="text-[#334155]">
                    Looking to pick up shifts (pharmacist)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="pharmacy"
                    checked={userType === "pharmacy"}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-4 h-4 text-[#0d9488] border-[#e2e8f0] focus:ring-[#0d9488]"
                  />
                  <span className="text-[#334155]">
                    Looking to post shifts (pharmacy / manager)
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="both"
                    checked={userType === "both"}
                    onChange={(e) => setUserType(e.target.value)}
                    className="w-4 h-4 text-[#0d9488] border-[#e2e8f0] focus:ring-[#0d9488]"
                  />
                  <span className="text-[#334155]">Both</span>
                </label>
              </div>
            </fieldset>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#0d9488] text-white text-base font-semibold rounded-full hover:bg-[#0d9488]/90 transition-colors"
            >
              Join the Waitlist →
            </button>
          </form>

          {/* Trust Nudge */}
          <p className="mt-4 text-[13px] text-[#64748b] text-center">
            Free to join. No credit card required. No app store download — works
            on any smartphone or desktop.
          </p>

          {/* Founding Member Callout */}
          <div className="mt-8 bg-[#fffbeb] border-l-4 border-[#f59e0b] rounded-lg p-5">
            <p className="text-[#0f172a] font-bold mb-1">
              Founding member offer for pharmacies.
            </p>
            <p className="text-[#334155] text-sm leading-relaxed">
              Pharmacies that join the waitlist now will be offered a founding
              member rate when CoveredRx moves to a paid plan — locked in for
              the life of the account.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
