"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tips = [
  {
    title: "Master Touch Typing Basics",
    description: "Learn proper finger placement on the home row (ASDF/JKL;). Keep your fingers curved and return to home position after each keystroke.",
    icon: "/icons/skill.svg"
  },
  {
    title: "Prioritize Accuracy",
    description: "Speed comes naturally with accuracy. Focus on zero-error typing first — WPM will follow. Backspace less, type right.",
    icon: "/icons/real-time.svg"
  },
  {
    title: "Practice Daily",
    description: "15 minutes daily beats 2 hours weekly. Consistency builds muscle memory. Schedule practice like brushing teeth.",
    icon: "/icons/time-locked.svg"
  },
  {
    title: "Use All Fingers Equally",
    description: "Don't let strong fingers dominate. Consciously practice with pinkies and ring fingers. Balanced hands = faster typing.",
    icon: "/icons/certificate.svg"
  },
  {
    title: "Maintain Proper Posture",
    description: "Sit straight, elbows at 90°, wrists floating (not resting), screen at eye level. Good posture prevents fatigue.",
    icon: "/icons/dashboard.svg"
  },
  {
    title: "Read Ahead While Typing",
    description: "Train eyes to scan 1-2 words ahead of your fingers. This reduces hesitation and creates smooth, continuous flow.",
    icon: "/icons/skill.svg"
  },
  {
    title: "Common Word Patterns",
    description: "Focus on high-frequency words and letter combinations (the, and, ing, tion). These appear in 50%+ of English text.",
    icon: "/icons/real-time.svg"
  },
  {
    title: "Take Regular Breaks",
    description: "Every 25 minutes, rest 5 minutes. Stretch fingers, wrists, shoulders. Prevents RSI and keeps mind sharp.",
    icon: "/icons/time-locked.svg"
  },
  {
    title: "Track Progress",
    description: "Log WPM and accuracy weekly. Celebrate improvements, analyze plateaus. Progress is rarely linear.",
    icon: "/icons/certificate.svg"
  },
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

export default function TipsGrid() {
  return (
    <section className="py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl border border-gray-100 p-6 transition-colors hover:bg-gray-50/50"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-4">
                <Image src={tip.icon} alt="" width={20} height={20} className="object-contain grayscale opacity-70" aria-hidden="true" />
              </div>
              <h3 className="text-[17px] font-bold text-gray-900 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
