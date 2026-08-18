"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WordTypingHero() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[13px] font-medium mb-6">
            Word Count Typing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Test by <br /> Word Count
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-lg mb-8">
            Choose an exact word count. No timer pressure. Focus purely on accuracy and rhythm. Sign in with Google to save results and track progress.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/word-typing/10-words"
              className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm"
            >
              <Image src="/icons/keyboard_logo.png" alt="" width={20} height={20} className="object-contain" aria-hidden="true" />
              Start 10-Word Test
            </Link>
            <Link
              href="/typing-practice"
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-xl transition-all"
            >
              Practice Mode
            </Link>
          </div>
        </motion.div>

        {/* Right Side: SERP Style Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[2.5rem] p-6 md:p-8 overflow-hidden bg-[#f8fafc] border border-gray-100">
            <div className="relative p-6 pb-12 rounded-2xl bg-white shadow-sm border border-gray-50">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="font-semibold text-gray-800">Typing Test Skill</span>
                <span>› word-typing › modes</span>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-[#126dfb] leading-snug mb-2">
                Master Your Rhythm with Word Targets
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Eliminate the anxiety of a ticking clock. Word count modes allow you to focus entirely on precision, making it the perfect mode for mastering difficult keystrokes.
              </p>
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex items-center">
                <div className="bg-gray-900 text-white text-[10px] font-medium px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  <span>No Time Limits</span>
                </div>
                <div className="relative -ml-2 mt-2">
                  <Image src="/icons/mouse-cursor-icon.png" alt="Mouse Cursor" width={24} height={24} className="drop-shadow-md transform -rotate-12 object-contain" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
