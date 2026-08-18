// components/typing-test/ModeSelector.tsx
"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const testModes = [
  { time: '1m', url: '/typing-test/1-minute', label: '1 Min' },
  { time: '2m', url: '/typing-test/2-minute', label: '2 Min' },
  { time: '3m', url: '/typing-test/3-minute', label: '3 Min' },
  { time: '5m', url: '/typing-test/5-minute', label: '5 Min' },
  { time: '10m', url: '/typing-test/10-minute', label: '10 Min' },
];

export default function ModeSelector() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 bg-gray-50 p-2.5 rounded-2xl border border-gray-100 mt-6">
      <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold px-2">Duration:</span>
      {testModes.map((mode) => {
        const isActive = pathname === mode.url;
        return (
          <Link
            key={mode.time}
            href={mode.url}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              isActive 
                ? 'bg-[#126dfb] text-white shadow-sm' 
                : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-[#126dfb] border border-gray-200'
            }`}
          >
            {mode.label}
          </Link>
        );
      })}
    </div>
  );
}