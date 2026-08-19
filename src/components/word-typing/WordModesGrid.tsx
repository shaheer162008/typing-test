"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const wordModes = [
  { words: "10 Words", path: "/word-typing/10-words", description: "Quick burst. Perfect for micro-practice.", icon: "/icons/time-locked.svg", color: "bg-red-100 text-red-600 border-red-200" },
  { words: "25 Words", path: "/word-typing/25-words", description: "Short session. Build accuracy fast.", icon: "/icons/time-locked.svg", color: "bg-orange-100 text-orange-600 border-orange-200" },
  { words: "50 Words", path: "/word-typing/50-words", description: "Standard test. Balance speed and precision.", icon: "/icons/time-locked.svg", color: "bg-amber-100 text-amber-600 border-amber-200" },
  { words: "100 Words", path: "/word-typing/100-words", description: "Extended challenge. Endurance and flow.", icon: "/icons/time-locked.svg", color: "bg-blue-100 text-[#126dfb] border-blue-200" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function WordModesGrid() {
  return (
    <section className="py-16 px-6 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
        {/* Word Count Modes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Choose Your Word Count</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {wordModes.map((mode) => (
            <motion.div key={mode.path} variants={itemVariants}>
              <Link href={mode.path} className="block h-full">
                <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#126dfb]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                  <div className="relative z-10 flex-1 flex flex-col">
                    <div className={`w-14 h-14 rounded-2xl ${mode.color} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Image src={mode.icon} alt="" width={28} height={28} className="object-contain" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{mode.words}</h3>
                    <p className="text-gray-500 mb-6 flex-1 text-sm">{mode.description}</p>
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-[#126dfb] font-medium group-hover:text-blue-700 transition-colors">
                      <span>Start Test</span>
                      <Image src="/icons/mouse-cursor-icon.png" alt="" width={16} height={16} className="object-contain -rotate-12 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
