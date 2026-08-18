"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const benchmarks = [
  {
    title: "Average Person",
    value: "40 WPM",
    description: "Typical office worker with basic touch typing skills",
    icon: "/icons/skill.svg",
    color: "bg-gray-100 text-gray-600 border-gray-200"
  },
  {
    title: "Professional Typist",
    value: "65–75 WPM",
    description: "Administrative assistants, transcriptionists, data entry",
    icon: "/icons/real-time.svg",
    color: "bg-blue-100 text-[#126dfb] border-blue-200"
  },
  {
    title: "Competitive Typist",
    value: "120+ WPM",
    description: "Top 0.1% — world championship contenders",
    icon: "/icons/certificate.svg",
    color: "bg-purple-100 text-purple-600 border-purple-200"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function RealWorldBenchmarks() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Real-World Benchmarks</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benchmarks.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:border-[#126dfb]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 mx-auto mb-5 ${item.color} border flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform`}>
                <Image src={item.icon} alt="" width={32} height={32} className="object-contain" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-4xl font-bold text-[#126dfb] mb-3">{item.value}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
