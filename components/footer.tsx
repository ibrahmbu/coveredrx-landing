"use client";

import { useState } from "react";
import { PolicyModal } from "@/components/ui/PolicyModal";

type PolicyType = "privacy" | "terms" | null;

export function Footer() {
  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);

  const platformLinks = [
    { label: "For Pharmacists", href: "#for-pharmacists" },
    { label: "For Pharmacies", href: "#for-pharmacies" },
    { label: "How It Works", href: "#why-coveredrx" },
    { label: "Join the Waitlist", href: "#waitlist" },
  ];

  return (
    <footer className="bg-[#0f172a] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <span className="text-xl font-bold text-white">CoveredRx</span>
            <p className="mt-3 text-slate-400 text-sm max-w-xs">
              Verified pharmacy shift coverage. Starting in New York City.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Platform</h4>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">About</h4>
            <ul className="space-y-3">
              <li>
                
                  href="#"
                  className="text-slate-400 text-sm hover:text-white transition-colors"
                >
                  What CoveredRx Is (and Isn&apos;t)
                </a>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("privacy")}
                  className="text-slate-400 text-sm hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePolicy("terms")}
                  className="text-slate-400 text-sm hover:text-white transition-colors text-left"
                >
                  Terms of Use
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Fine Print */}
        <p className="text-slate-500 text-[13px] leading-relaxed mb-8 max-w-4xl">
          CoveredRx is not a staffing agency. We do not employ pharmacists,
          handle payroll, or guarantee shift coverage. All employment terms and
          payment are agreed directly between the pharmacy and the pharmacist.
        </p>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-700">
          <p className="text-slate-500 text-sm">
            © 2026 CoveredRx · Launching in New York City · Beta
          </p>
        </div>
      </div>

      <PolicyModal
        open={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </footer>
  );
}