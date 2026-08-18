"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skillLevels = [
  { name: "Beginner", description: "Common words, high frequency letters", href: "#", icon: "/icons/skill.svg" },
  { name: "Intermediate", description: "Mixed vocabulary, all letters", href: "#", icon: "/icons/dashboard.svg" },
  { name: "Advanced", description: "Complex words, symbols & numbers", href: "#", icon: "/icons/certificate.svg" },
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

export default function WordSkillLevels() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Or Practice by Skill Level</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillLevels.map((level, index) => (
            <motion.div key={level.name} variants={itemVariants} className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-blue-200 hover:shadow-md transition-all duration-300 text-center flex flex-col">
              <div className="w-16 h-16 mx-auto mb-4 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center">
                <Image src={level.icon} alt="" width={32} height={32} className="object-contain text-blue-600 opacity-80" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{level.name}</h3>
              <p className="text-gray-500 mb-6 flex-1 text-sm">{level.description}</p>
              <button className="w-full px-6 py-3 bg-white border border-gray-200 text-gray-800 font-semibold rounded-xl hover:bg-gray-50 hover:text-blue-700 hover:border-blue-200 transition-colors">
                Select Level
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
