// components/typing-test/TestStats.tsx
"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface TestStatsProps {
  timeLeft?: number;
  wpm?: number;
  accuracy?: number;
  onRestart?: () => void;
}

export default function TestStats({ timeLeft = 60, wpm = 0, accuracy = 100, onRestart }: TestStatsProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap items-center justify-between gap-6 w-full max-w-3xl mb-8 px-6 py-4 bg-white border border-gray-100 rounded-2xl shadow-sm"
    >
      <div className="flex items-center gap-3">
        <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Time</span>
        <span className="text-2xl font-bold text-[#126dfb] font-mono">{timeLeft}s</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">WPM</span>
        <span className="text-2xl font-bold text-gray-950 font-mono">{wpm}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Accuracy</span>
        <span className="text-2xl font-bold text-gray-950 font-mono">{accuracy}%</span>
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onRestart}
        className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-xl transition-colors cursor-pointer"
      >
        Restart
      </motion.button>
    </motion.div>
  );
}