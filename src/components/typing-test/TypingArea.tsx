// components/typing-test/TypingArea.tsx
"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const SAMPLE_TEXT = "the quick brown fox jumps over the lazy dog. practice makes perfect every single day.";

export default function TypingArea() {
  const [userInput, setUserInput] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= SAMPLE_TEXT.length) {
      setUserInput(e.target.value);
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="w-full max-w-3xl flex flex-col items-center"
    >
      <textarea
        ref={inputRef}
        value={userInput}
        onChange={handleInputChange}
        className="absolute opacity-0 h-0 w-0"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <motion.div 
        whileHover={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)" }}
        onClick={focusInput}
        className="w-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm text-xl font-mono leading-relaxed text-gray-400 select-none cursor-text min-h-[160px] transition-colors"
      >
        {SAMPLE_TEXT.split('').map((char, index) => {
          let textColor = 'text-gray-400';
          if (index < userInput.length) {
            textColor = userInput[index] === char ? 'text-gray-950 bg-blue-50/60' : 'text-red-500 bg-red-50 underline';
          } else if (index === userInput.length) {
            textColor = 'text-[#126dfb] border-l-2 border-[#126dfb] animate-pulse';
          }
          return (
            <span key={index} className={`${textColor} transition-colors`}>
              {char}
            </span>
          );
        })}
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-sm text-gray-400"
      >
        Click the box above and start typing to begin evaluation.
      </motion.p>
    </motion.div>
  );
}