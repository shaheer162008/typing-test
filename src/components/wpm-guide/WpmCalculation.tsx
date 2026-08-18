"use client";

import { motion } from "framer-motion";

const howWpmCalculated = [
  { step: 1, title: "Count Correct Characters", description: "Only correctly typed characters count. Each error reduces your raw character count." },
  { step: 2, title: "Divide by 5", description: "Standard word length = 5 characters (including space). Correct chars ÷ 5 = raw words." },
  { step: 3, title: "Divide by Minutes", description: "Raw words ÷ minutes elapsed = WPM. Example: 300 correct chars in 2 min = 30 WPM." },
  { step: 4, title: "Accuracy Separate", description: "Accuracy = (correct chars ÷ total chars typed) × 100. Both metrics matter equally." },
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

export default function WpmCalculation() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How WPM Is Calculated</h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {howWpmCalculated.map((step) => (
            <motion.div 
              key={step.step} 
              variants={itemVariants}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:border-blue-100 hover:shadow-md transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#126dfb] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
