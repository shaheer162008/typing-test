"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    num: "01",
    title: "Introduction",
    body: 'Welcome to TypingTestSkill (the "Platform"), accessible at typingtestskill.com. We respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using TypingTestSkill, you agree to the collection and use of information in accordance with this policy.',
  },
  {
    num: "02",
    title: "Information We Collect",
    subsections: [
      {
        subtitle: "Account Information",
        body: "When you sign in using Google Sign-In, we receive your name, email address, and profile picture from Google. We do not receive or store your Google account password.",
      },
      {
        subtitle: "Typing Test Data",
        body: "When you take a test or practice session, we collect: Words per minute (WPM), accuracy percentage, error count, test duration and date, and streak and achievement history.",
      },
      {
        subtitle: "Usage and Device Data",
        body: "We automatically collect technical information including your IP address, browser type, device type, operating system, and pages visited through standard server logs.",
      },
      {
        subtitle: "Cookies",
        body: "We use cookies to keep you signed in and remember your preferences. You can control cookies through your browser settings, though some features may be affected.",
      },
    ],
  },
  {
    num: "03",
    title: "How We Use Your Information",
    list: [
      "Provide and operate the typing test, practice, and word typing features",
      "Save your results, track your progress, and calculate streaks and rankings",
      "Generate and verify typing certificates",
      "Maintain the leaderboard if you choose to display your results publicly",
      "Improve our website performance and content",
      "Communicate with you and respond to inquiries submitted via our Contact page",
      "Detect and prevent abuse, fraud, or misuse of the service",
    ],
  },
  {
    num: "04",
    title: "Third-Party Services",
    list: [
      "Google Sign-In and Google OAuth for account authentication",
      "Analytics providers such as Google Analytics to understand site usage",
      "Advertising providers such as Google AdSense to display ads on the site",
    ],
    note: "We do not sell your personal information to third parties.",
  },
  {
    num: "05",
    title: "Data Sharing and Disclosure",
    list: [
      "With service providers who help us operate the website such as hosting and analytics",
      "If required by law, legal process, or governmental request",
      "To protect the rights, property, or safety of TypingTestSkill, our users, or the public",
      "In connection with a merger, acquisition, or sale of assets, with notice to users where required",
    ],
  },
  {
    num: "06",
    title: "Data Retention",
    body: "We retain your account and typing test data for as long as your account remains active. If you delete your account, we will delete or anonymize your personal data within a reasonable period, except where retention is required for legal or legitimate business purposes.",
  },
  {
    num: "07",
    title: "Your Rights",
    body: "Depending on your location, you may have the right to access, correct, delete, or export the personal data we hold about you. EEA and UK users have rights under GDPR. California users have rights under CCPA and CPRA. To exercise any of these rights, contact us using the details in Section 11.",
    list: [
      "Access the personal data we hold about you",
      "Request correction of inaccurate data",
      "Request deletion of your data",
      "Object to or restrict certain processing",
      "Request a portable copy of your data",
    ],
  },
  {
    num: "08",
    title: "Children's Privacy",
    body: "TypingTestSkill is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us so we can remove it.",
  },
  {
    num: "09",
    title: "Data Security",
    body: "We take reasonable technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    num: "10",
    title: "International Data Transfers",
    body: "Your information may be processed and stored in countries other than your own. By using our service, you consent to the transfer of your information to these locations, which may have different data protection laws than your country of residence.",
  },
  {
    num: "12",
    title: "Changes to This Policy",
    body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the site after changes constitutes acceptance of the revised policy.',
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-24 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6 uppercase tracking-wider">
              Legal &amp; Privacy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-400 font-medium">Last Updated: August 17, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="flex gap-6 p-8 rounded-[2rem] bg-[#f8fafc] border border-gray-100 hover:border-blue-100 hover:shadow-sm transition-all duration-300"
            >
              <div className="flex-shrink-0 text-[13px] font-bold text-[#126dfb] bg-blue-50 border border-blue-100 rounded-2xl w-12 h-12 flex items-center justify-center">
                {sec.num}
              </div>
              <div className="flex-1">
                <h2 className="text-[19px] font-bold text-gray-900 mb-3">{sec.title}</h2>
                {sec.body && <p className="text-gray-600 leading-relaxed text-[15px] mb-3">{sec.body}</p>}
                {"subsections" in sec && sec.subsections && (
                  <div className="space-y-4">
                    {sec.subsections.map((sub, j) => (
                      <div key={j} className="bg-white rounded-2xl p-4 border border-gray-100">
                        <h3 className="text-[15px] font-bold text-gray-900 mb-1">{sub.subtitle}</h3>
                        <p className="text-[14px] text-gray-600 leading-relaxed">{sub.body}</p>
                      </div>
                    ))}
                  </div>
                )}
                {sec.list && (
                  <ul className="space-y-2 text-[15px] text-gray-600 mt-2">
                    {sec.list.map((item, j) => (
                      <li key={j} className="flex gap-2 items-start">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#126dfb] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {sec.note && (
                  <p className="mt-4 text-sm font-semibold text-[#126dfb]">{sec.note}</p>
                )}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="p-8 rounded-[2rem] bg-blue-50/60 border border-blue-100"
          >
            <h2 className="text-[19px] font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-[15px] text-gray-600 mb-4">
              If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at:
            </p>
            <p className="text-[15px] font-semibold text-gray-800 mb-1">
              Email:{" "}
              <a href="mailto:info@typingtestskill.com" className="text-[#126dfb] hover:underline">
                info@typingtestskill.com
              </a>
            </p>
            <p className="text-[15px] font-semibold text-gray-800 mb-4">
              Contact Form:{" "}
              <Link href="/contact" className="text-[#126dfb] hover:underline">
                typingtestskill.com/contact
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              This Privacy Policy works together with our{" "}
              <Link href="/terms-of-service" className="text-[#126dfb] font-semibold hover:underline">
                Terms of Service
              </Link>
              , which govern your overall use of TypingTestSkill.
            </p>
          </motion.div>

          <p className="text-xs text-gray-400 italic text-center pt-4 border-t border-gray-100">
            This document does not constitute legal advice. Please have it reviewed by a qualified lawyer before publishing.
          </p>
        </div>
      </section>
    </main>
  );
}
