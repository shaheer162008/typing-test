"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TipsHero() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6">
            Typing Techniques
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Type Faster <br /> With Precision
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed mb-8 max-w-lg">
            Proven techniques from typing champions. Apply these fundamental rules daily and watch your WPM climb steadily without sacrificing accuracy.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm cursor-pointer">
              Start Practice
            </button>
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-xl transition-all cursor-pointer">
              Read Guide
            </button>
          </div>
        </motion.div>

        {/* Right Side: Exact Clean Google SERP Card Layout */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 relative"
        >
          {/* Main Container Card (Clean, minimal border/padding) */}
          <div className="relative rounded-[2.5rem] p-6 md:p-8 overflow-hidden bg-[#f8fafc] border border-gray-100">
            {/* Google Search Result Box */}
            <div className="relative p-6 pb-12 rounded-2xl bg-white shadow-sm border border-gray-50">
              {/* Breadcrumb / URL */}
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="font-semibold text-gray-800">Typing Test Skill</span>
                <span>› tips › fundamentals</span>
              </div>
              {/* Title */}
              <h4 className="text-lg md:text-xl font-bold text-[#126dfb] leading-snug mb-2">
                10 Tips to Double Your Typing Speed Naturally
              </h4>
              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Stop hunting and pecking. Learn proper home row positioning, why accuracy matters more than speed, and how 15 minutes of daily practice can rewire your muscle memory.
              </p>
              {/* Static Cursor & Badge positioned strictly at Bottom-Right Corner */}
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex items-center">
                <div className="bg-gray-900 text-white text-[10px] font-medium px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span>Mastering Keys</span>
                </div>
                {/* Clicking Mouse Cursor using Custom Icon */}
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
