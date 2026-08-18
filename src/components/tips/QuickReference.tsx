"use client";

import { motion } from "framer-motion";

export default function QuickReference() {
  return (
    <section className="py-16 px-6 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Reference</h2>
        </motion.div>
        
        <div className="flex justify-center mt-8">
          <img 
            src="/typing-guide.png" 
            alt="Typing Guide Reference" 
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
