"use client";

import { useEffect } from "react";

type PolicyType = "privacy" | "terms" | null;

interface PolicyModalProps {
  open: PolicyType;
  onClose: () => void;
}

const privacyContent = `
PRIVACY POLICY

Effective date: June 8, 2026
Website: covered-rx.com
Contact: info@covered-rx.com

WHAT THIS POLICY COVERS

This Privacy Policy explains what information CoveredRx collects when you visit covered-rx.com or sign up for our waitlist, how we use that information, and how we protect it. By using this site, you agree to the practices described here.

WHAT WE COLLECT

When you sign up for the CoveredRx waitlist, we collect:
- Your first name
- Your email address
- Whether you are a pharmacist or a pharmacy operator

We do not collect payment information, government ID numbers, or license numbers at this stage. We do not collect any information from minors, and this site is not intended for anyone under 18.

HOW WE USE YOUR INFORMATION

We use the information you provide to:
- Add you to our waitlist and notify you when CoveredRx launches in New York City
- Communicate updates about the platform
- Understand the composition of our early user base so we can build accordingly

We do not sell your information. We do not share it with third parties for marketing purposes.

THIRD-PARTY SERVICES

Microsoft Clarity — We use Microsoft Clarity to understand how visitors interact with our website. Clarity collects anonymized behavioral data including mouse movements, clicks, and scrolling patterns. It may use cookies and similar technologies. No personally identifiable information is shared with Clarity.

Beehiiv — We use Beehiiv to manage our email list. When you submit the waitlist form, your name and email address are stored in Beehiiv.

Airtable — We use Airtable to track waitlist submissions internally. Your name, email, and user type are stored in Airtable.

COOKIES

Microsoft Clarity may place cookies on your device to collect behavioral data. We do not use cookies for advertising or tracking across other websites. You can disable cookies in your browser settings at any time.

DATA RETENTION

We retain your information for as long as necessary to operate the waitlist and notify you of the launch. To request removal, email info@covered-rx.com.

YOUR RIGHTS

You can ask us to confirm, correct, or remove the information we hold about you. Email info@covered-rx.com. We will respond within 30 days.

SECURITY

We take reasonable steps to protect your information. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.

CHANGES TO THIS POLICY

If we make material changes to this policy, we will update the effective date at the top of this page.

CONTACT

Questions? Email info@covered-rx.com.
`;

const termsContent = `
TERMS OF USE

Effective date: June 8, 2026
Website: covered-rx.com
Contact: info@covered-rx.com

OVERVIEW

These Terms of Use govern your use of covered-rx.com and the CoveredRx waitlist. By visiting this site or submitting your information, you agree to these terms. If you do not agree, do not use this site.

CoveredRx is currently in a pre-launch phase. This site exists to collect interest from pharmacists and pharmacy operators ahead of our New York City launch. No services are being provided at this time.

WHO CAN USE THIS SITE

You must be at least 18 years old to use this site. By submitting the waitlist form, you confirm that the information you provide is accurate and that you are 18 or older.

WHAT THE WAITLIST IS

Signing up for the CoveredRx waitlist means you are expressing interest in the platform. It does not guarantee access, a specific launch date, any particular feature set, or any service of any kind. We reserve the right to launch, delay, modify, or discontinue the platform at any time without notice.

YOUR INFORMATION

By submitting the waitlist form, you agree to receive email communications from CoveredRx related to our launch and platform updates. You can unsubscribe at any time by contacting info@covered-rx.com.

We handle your information as described in our Privacy Policy at covered-rx.com.

NO SERVICE AGREEMENT

Using this site and joining the waitlist does not create any contract, service agreement, or obligation between you and CoveredRx. CoveredRx does not employ pharmacists, operate as a staffing agency, or guarantee any employment, shift coverage, or business outcome of any kind.

ACCEPTABLE USE

You agree not to:
- Submit false or misleading information
- Use this site for any unlawful purpose
- Attempt to interfere with or disrupt the site or its infrastructure
- Scrape, copy, or reproduce any content from this site without permission

INTELLECTUAL PROPERTY

All content on this site — including text, design, graphics, and the CoveredRx name and branding — is the property of CoveredRx. You may not reproduce, distribute, or use any of it without written permission.

DISCLAIMER OF WARRANTIES

This site is provided as-is. CoveredRx makes no warranties about the accuracy, reliability, or availability of this site or any information on it.

LIMITATION OF LIABILITY

To the fullest extent permitted by law, CoveredRx is not liable for any direct, indirect, incidental, or consequential damages arising from your use of this site or participation in the waitlist.

CHANGES TO THESE TERMS

We may update these terms at any time. Changes take effect when posted. Continued use of the site after changes are posted constitutes your acceptance.

GOVERNING LAW

These terms are governed by the laws of the State of New York.

CONTACT

Questions? Email info@covered-rx.com.
`;

export function PolicyModal({ open, onClose }: PolicyModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!open) return null;

  const title = open === "privacy" ? "Privacy Policy" : "Terms of Use";
  const content = open === "privacy" ? privacyContent : termsContent;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-[#0f172a]">{title}</h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 py-6">
          <pre className="text-sm text-[#334155] leading-relaxed whitespace-pre-wrap font-sans">
            {content}
          </pre>
        </div>
      </div>
    </div>
  );
}