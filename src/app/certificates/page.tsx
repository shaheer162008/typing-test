"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FinalCta from "@/components/FinalCta";

export default function CertificatesVerificationPage() {
  const [certId, setCertId] = useState("");
  const [verificationState, setVerificationState] = useState<"idle" | "loading" | "verified" | "error">("idle");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setVerificationState("loading");
    // Simulate API verification call
    setTimeout(() => {
      if (certId.toLowerCase().startsWith("tt-")) {
        setVerificationState("verified");
      } else {
        setVerificationState("error");
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Verification Hero */}
      <section className="py-20 md:py-32 bg-white border-b border-gray-100 overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6">
              Official Validation Portal
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
              Verify a Certificate
            </h1>
            <p className="text-[17px] text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
              Enter the unique Certificate ID located at the bottom right of any official Typing Test Skill certificate to verify its authenticity.
            </p>

            <form onSubmit={handleVerify} className="max-w-lg mx-auto bg-white p-2 rounded-2xl shadow-lg border border-gray-100 flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="e.g. TT-9X82-KL1M"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                className="flex-1 px-6 py-4 text-gray-900 bg-transparent border-none focus:ring-0 outline-none placeholder:text-gray-400 font-mono"
                required
              />
              <button
                type="submit"
                disabled={verificationState === "loading" || !certId.trim()}
                className="bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {verificationState === "loading" ? "Verifying..." : "Verify Now"}
              </button>
            </form>

            {verificationState === "verified" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-6 bg-green-50 border border-green-200 rounded-2xl max-w-lg mx-auto text-left flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xl font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-green-800 font-bold text-lg mb-1">Authentic Certificate</h3>
                  <p className="text-green-700 text-sm">Certificate ID: <span className="font-mono">{certId}</span> belongs to <strong>John Doe</strong>. <br/>Achieved <strong>85 WPM</strong> on Aug 15, 2025.</p>
                </div>
              </motion.div>
            )}

            {verificationState === "error" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl max-w-lg mx-auto text-red-600 text-sm">
                Invalid Certificate ID. Please check the spelling and try again.
              </motion.div>
            )}

          </motion.div>
        </div>
      </section>

      {/* Want Your Own Certificate CTA */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Want Your Own Certificate?</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Sign in and take a verified typing test. Once you meet the required WPM threshold, your certificate will automatically be generated and available for download in your personal Dashboard.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/auth/sign-in"
                className="inline-flex items-center justify-center bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm"
              >
                Sign In & Get Certified
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-xl transition-all"
              >
                Go to Dashboard
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden p-8 flex flex-col justify-center items-center relative z-10">
              <Image src="/icons/certificate.svg" alt="" width={64} height={64} className="mb-6 opacity-80" aria-hidden="true" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Certificate of Achievement</h3>
              <p className="text-gray-500 mb-6 text-center text-sm">Awarded for outstanding typing performance.</p>
              <div className="w-full h-px bg-gray-100 mb-6"></div>
              <div className="flex justify-between w-full items-end">
                <div>
                  <p className="text-xs text-gray-400 font-mono">ID: TT-XXXX-XXXX</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#126dfb]">100+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">WPM</p>
                </div>
              </div>
            </div>
            {/* Decorative background blur */}
            <div className="absolute inset-0 bg-blue-400 blur-[80px] opacity-20 -z-10 rounded-full translate-x-10 translate-y-10"></div>
          </motion.div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}