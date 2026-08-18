"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    num: "01",
    title: "Acceptance of Terms",
    body: 'By accessing or using TypingTestSkill (the "Platform") at typingtestskill.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use the site.',
  },
  {
    num: "02",
    title: "Description of Service",
    body: "TypingTestSkill provides free online typing tests, typing practice sessions, and word typing tests, along with progress tracking, streaks, leaderboards, and downloadable typing speed certificates for registered users.",
  },
  {
    num: "03",
    title: "Account Registration",
    list: [
      "You may use the typing test and practice features without creating an account.",
      "To save results, track progress, appear on the leaderboard, or receive certificates, you must sign in using Google Sign-In.",
      "You are responsible for maintaining the confidentiality of your account and for all activity that occurs under it.",
      "You must provide accurate information and are responsible for keeping it up to date.",
    ],
  },
  {
    num: "04",
    title: "Acceptable Use",
    subtitle: "You agree not to:",
    list: [
      "Use automated tools, bots, or scripts to inflate your typing test results or manipulate the leaderboard",
      "Attempt to gain unauthorized access to other users accounts or data",
      "Interfere with or disrupt the operation of the website",
      "Use the service for any unlawful purpose",
      "Upload or transmit any harmful code, viruses, or malicious content",
      "Impersonate another person or misrepresent your affiliation with any entity",
    ],
    note: "We reserve the right to suspend or terminate accounts that violate these terms.",
  },
  {
    num: "05",
    title: "Typing Test Results and Certificates",
    list: [
      "Typing test results reflect performance on our platform under specific conditions and may not correspond to performance in other environments.",
      "Certificates issued by TypingTestSkill are provided for personal, educational, or informational use. We do not guarantee that any third party will accept or recognize these certificates as an official qualification.",
      "We reserve the right to invalidate results or certificates obtained through cheating, automation, or manipulation of the test.",
    ],
  },
  {
    num: "06",
    title: "Leaderboard and Public Display of Data",
    body: "If you choose to appear on the public leaderboard, your display name and typing statistics may be visible to other users. You may opt out of leaderboard participation through your account settings or by contacting us.",
  },
  {
    num: "07",
    title: "Intellectual Property",
    body: "All content on TypingTestSkill, including text, graphics, logos, typing passages, certificate designs, and software, is the property of TypingTestSkill or its licensors. You may not copy, reproduce, or distribute our content without prior written permission.",
  },
  {
    num: "08",
    title: "Third-Party Services and Links",
    body: "Our site may use or link to third-party services such as Google Sign-In or external websites. We are not responsible for the content, privacy practices, or terms of any third-party service or site.",
  },
  {
    num: "09",
    title: "Disclaimers",
    body: 'TypingTestSkill is provided on an "as is" and "as available" basis, without warranties of any kind, whether express or implied. We do not guarantee that the service will be uninterrupted or error-free.',
  },
  {
    num: "10",
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, TypingTestSkill and its team shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of, or inability to use, the service.",
  },
  {
    num: "11",
    title: "Indemnification",
    body: "You agree to indemnify and hold harmless TypingTestSkill, its team, and affiliates from any claims, damages, or expenses arising from your violation of these Terms or misuse of the service.",
  },
  {
    num: "12",
    title: "Termination",
    body: "We may suspend or terminate your access to the service at any time, with or without notice, for conduct that violates these Terms or is otherwise harmful to other users or the service.",
  },
  {
    num: "13",
    title: "Governing Law",
    body: "These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan, without regard to its conflict of law provisions.",
  },
  {
    num: "14",
    title: "Changes to These Terms",
    body: 'We may modify these Terms at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the service after changes constitutes acceptance of the revised Terms.',
  },
];

export default function TermsOfService() {
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
              Legal &amp; Conditions
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Terms of Service
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
                {sec.body && <p className="text-gray-600 leading-relaxed text-[15px]">{sec.body}</p>}
                {sec.subtitle && <p className="text-gray-800 font-semibold text-[15px] mb-2">{sec.subtitle}</p>}
                {sec.list && (
                  <ul className="space-y-2 text-[15px] text-gray-600">
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
            <h2 className="text-[19px] font-bold text-gray-900 mb-4">15. Contact Us</h2>
            <p className="text-[15px] text-gray-600 mb-4">For questions about these Terms, contact us at:</p>
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
              These Terms work together with our{" "}
              <Link href="/privacy-policy" className="text-[#126dfb] font-semibold hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect and use your data.
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
