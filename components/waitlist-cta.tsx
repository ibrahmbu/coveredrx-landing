"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function WaitlistCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [userType, setUserType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, userType }),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          {status === "success" ? (
            <div className="text-center py-10">
              <p className="text-2xl font-bold text-[#0f172a] mb-3">
                You&apos;re on the list, {firstName}.
              </p>
              <p className="text-[#334155]">
                We&apos;ll reach out the moment CoveredRx opens in New York City.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First name"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-5 py-4 text-base border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition-shadow"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 text-base border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:border-transparent transition-shadow"
                />
              </div>

              <fieldset>
                <legend className="text-sm font-semibold text-[#0f172a] mb-3">
                  I am...
                </legend>
                <div className="space-y-3">
                  {[
                    { value: "pharmacist", label: "Looking to pick up shifts (pharmacist)" },
                    { value: "pharmacy", label: "Looking to post shifts (pharmacy / manager)" },
                    { value: "both", label: "Both" },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="userType"
                        value={option.value}
                        checked={userType === option.value}
                        onChange={(e) => setUserType(e.target.value)}
                        required
                        className="w-4 h-4 text-[#0d9488] border-[#e2e8f0] focus:ring-[#0d9488]"
                      />
                      <span className="text-[#334155]">{option.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full px-8 py-4 bg-[#0d9488] text-white text-base font-semibold rounded-full hover:bg-[#0d9488]/90 transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Submitting..." : "Join the Waitlist →"}
              </button>

              {status === "error" && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please try again.
                </p>
              )}

              <p className="text-[13px] text-[#64748b] text-center">
                Free to join. No credit card required. No app store download —
                works on any smartphone or desktop.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}