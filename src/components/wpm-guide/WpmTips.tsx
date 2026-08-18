"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tips = [
  { title: "Accuracy First", description: "95%+ accuracy builds true speed. Fix errors immediately. Slow down to speed up.", icon: "/icons/skill.svg" },
  { title: "Daily 15 Minutes", description: "Consistency > intensity. Short daily sessions beat weekly marathons for muscle memory.", icon: "/icons/time-locked.svg" },
  { title: "Practice Weak Keys", description: "Identify problem keys (often pinkies). Drill them specifically. Balanced hands type faster.", icon: "/icons/dashboard.svg" },
  { title: "Read Ahead", description: "Eyes 1-2 words ahead of fingers. Eliminates hesitation. Creates continuous flow state.", icon: "/icons/real-time.svg" },
  { title: "Proper Posture", description: "Wrists floating, elbows 90°, screen eye-level. Prevents fatigue. Enables longer sessions.", icon: "/icons/certificate.svg" },
  { title: "Track Weekly", description: "Log WPM/accuracy every week. Data reveals patterns. Celebrate progress, adjust approach.", icon: "/icons/skill.svg" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function WpmTips() {
  return (
    <section className="py-16 px-6 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Tips to Increase WPM</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#126dfb]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#126dfb]/10 flex items-center justify-center mb-4 group-hover:bg-[#126dfb]/20 transition-colors">
                <Image src={tip.icon} alt="" width={24} height={24} className="object-contain text-[#126dfb]" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{tip.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
