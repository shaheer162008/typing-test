"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface FinalCtaProps {
  title?: React.ReactNode;
  desc?: string;
  btnText?: string;
  btnLink?: string;
}

export default function FinalCta({ 
  title = <>Your Fastest Typing <br /> Session Starts In Seconds</>,
  desc = "No account required to test. Sign in with Google when you're ready to save results, track streaks, and earn shareable certificates.",
  btnText = "Start Typing Free",
  btnLink = "/typing-test"
}: FinalCtaProps) {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" aria-labelledby="finalcta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white rounded-[2.5rem] py-16 px-6 md:py-20 md:px-12 border border-gray-100 shadow-sm overflow-hidden text-center flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
        >
          {/* Decorative Background Elements */}
          <div aria-hidden="true">
            {/* Top-Left Diagonal Blue Ribbon */}
            <div className="absolute -top-12 -left-12 w-48 h-16 bg-[#126dfb] transform -rotate-45 pointer-events-none opacity-90 rounded-full" />
            {/* Bottom-Right Diagonal Blue Ribbon */}
            <div className="absolute -bottom-12 -right-12 w-48 h-16 bg-[#126dfb] transform -rotate-45 pointer-events-none opacity-90 rounded-full" />
          </div>

          {/* Center Content Container */}
          <div className="relative z-20 max-w-xl mx-auto flex flex-col items-center">
            {/* Title */}
            <h2 id="finalcta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
              {title}
            </h2>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed mb-8">
              {desc}
            </p>

            {/* Action Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={btnLink}
                className="bg-[#126dfb] hover:bg-blue-600 text-white text-[15px] font-semibold py-3.5 px-8 rounded-xl shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#126dfb] focus-visible:ring-offset-2 block"
              >
                {btnText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}