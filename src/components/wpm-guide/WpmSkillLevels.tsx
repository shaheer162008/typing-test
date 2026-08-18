"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const wpmLevels = [
  { range: "0–20 WPM", label: "Beginner", description: "Hunt-and-peck typing. Focus on learning home row and touch typing fundamentals.", icon: "/icons/skill.svg" },
  { range: "21–40 WPM", label: "Novice", description: "Basic touch typing. Know key positions but look at keyboard occasionally. Practice consistency.", icon: "/icons/real-time.svg" },
  { range: "41–60 WPM", label: "Intermediate", description: "Solid touch typist. Rarely look at keyboard. Good for most office work. Focus on accuracy.", icon: "/icons/time-locked.svg" },
  { range: "61–80 WPM", label: "Advanced", description: "Fast and accurate. Professional level. Can transcribe audio. Practice complex words and symbols.", icon: "/icons/certificate.svg" },
  { range: "81–100 WPM", label: "Expert", description: "Elite typist. Competitive speed. Rare errors. Master of numbers, symbols, and technical text.", icon: "/icons/dashboard.svg" },
  { range: "100+ WPM", label: "Master", description: "World-class speed. Top 1% of typists. Champion territory. Requires years of dedicated practice.", icon: "/icons/certificate.svg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function WpmSkillLevels() {
  return (
    <section className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">WPM Skill Levels</h2>
        </motion.div>
        
        <motion.div 
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {wpmLevels.map((level) => (
            <motion.div
              key={level.range}
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-100 p-5 md:p-6 flex flex-col md:flex-row items-center md:items-start gap-5 transition-colors hover:bg-gray-50/50"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                <Image src={level.icon} alt="" width={24} height={24} className="object-contain grayscale opacity-70" aria-hidden="true" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                  <span className="text-lg font-bold text-gray-900">{level.range}</span>
                  <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{level.label}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{level.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
