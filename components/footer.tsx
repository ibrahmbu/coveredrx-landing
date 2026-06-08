"use client";
import { useState } from "react";
import { privacyPolicy, termsOfUse } from "@/lib/policy-content";

export function Footer() {
  const [activePolicy, setActivePolicy] = useState<"privacy" | "terms" | null>(null);
  const platformLinks = [
    { label: "For Pharmacists", href: "#for-pharmacists" },
    { label: "For Pharmacies", href: "#for-pharmacies" },
    { label: "How It Works", href: "#why-coveredrx" },
    { label: "Join the Waitlist", href: "#waitlist" },
  ];

  const aboutLinks = [
    { label: "What CoveredRx Is (and Isn't)", href: "#why-coveredrx" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
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
                  <a
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
            {aboutLinks.map((link) => (
  <li key={link.label}>
    {link.label === "Privacy Policy" || link.label === "Terms of Use" ? (
      <button
      onClick={() => setActivePolicy(link.label === "Privacy Policy" ? "privacy" : "terms")}
        className="text-slate-400 text-sm hover:text-white transition-colors text-left"
      >
        {link.label}
      </button>
    ) : (
      <a href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors">
        {link.label}
      </a>
    )}
  </li>
))}
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
      {activePolicy && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={() => setActivePolicy(null)}>
    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-[#0f172a]">
          {activePolicy === "privacy" ? "Privacy Policy" : "Terms of Use"}
        </h2>
        <button onClick={() => setActivePolicy(null)} className="text-slate-400 hover:text-slate-600 text-2xl leading-none">
          ×
        </button>
      </div>
      <div className="overflow-y-auto px-6 py-6">
      <p className="text-sm text-[#334155] whitespace-pre-wrap">
  {activePolicy === "privacy" ? privacyPolicy : termsOfUse}
</p>
      </div>
    </div>
  </div>
)}
    </footer>
  );
}
