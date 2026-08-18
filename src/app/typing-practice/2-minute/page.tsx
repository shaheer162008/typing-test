"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const SAMPLE_TEXTS = [
  "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet at least once.",
  "Pack my box with five dozen liquor jugs. Another perfect pangram for typing practice.",
  "How vexingly quick daft zebras jump. Short but challenging with unusual letter combinations.",
  "Bright vixens jump; dozy fowl quack. A whimsical sentence to test your rhythm.",
  "Sphinx of black quartz, judge my vow. An ancient riddle turned typing drill.",
];

const DURATION = 120;

export default function TypingPractice2MinutePage() {
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 0, errors: 0, correctChars: 0, totalChars: 0 });
  const [startTime, setStartTime] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const randomText = SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)];
    setText(randomText);
  }, []);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) { finishTest(); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (!isActive && userInput.length > 0) return;
    let correct = 0, errors = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === text[i]) correct++; else errors++;
    }
    const totalChars = userInput.length;
    const accuracy = totalChars > 0 ? Math.round((correct / totalChars) * 100) : 0;
    let wpm = 0;
    if (startTime && totalChars > 0) {
      const minutesElapsed = (Date.now() - startTime) / 60000;
      wpm = minutesElapsed > 0 ? Math.round((correct / 5) / minutesElapsed) : 0;
    }
    setStats({ wpm, accuracy, errors, correctChars: correct, totalChars });
  }, [userInput, text, isActive, startTime]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isActive && !isFinished) { setIsActive(true); setStartTime(Date.now()); }
    if (isFinished) return;
    setUserInput(e.target.value);
  };

  const finishTest = useCallback(() => {
    setIsActive(false); setIsFinished(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const restartTest = () => {
    setUserInput(""); setTimeLeft(DURATION); setIsActive(false); setIsFinished(false);
    setStartTime(null); setStats({ wpm: 0, accuracy: 0, errors: 0, correctChars: 0, totalChars: 0 });
    const randomText = SAMPLE_TEXTS[Math.floor(Math.random() * SAMPLE_TEXTS.length)];
    setText(randomText);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-16">
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Link href="/typing-practice" className="text-sm text-gray-500 hover:text-gray-700 transition-colors mb-2 inline-block">
              â† Back to Practice
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">2 Minute Typing Practice</h1>
          </div>
          {isFinished && (
            <Link href="/typing-practice" className="px-4 py-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium">
              Try Another Duration
            </Link>
          )}
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatBox label="Time" value={`${timeLeft}s`} color="#f59e0b" icon="/icons/time-locked.svg" />
          <StatBox label="WPM" value={stats.wpm} color="#126dfb" icon="/icons/real-time.svg" />
          <StatBox label="Accuracy" value={`${stats.accuracy}%`} color="#10b981" icon="/icons/skill.svg" />
          <StatBox label="Errors" value={stats.errors} color="#ef4444" icon="/icons/dashboard.svg" />
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Progress</span>
            <span className="font-semibold text-[#126dfb]">{Math.round(((DURATION - timeLeft) / DURATION) * 100)}%</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#126dfb] to-blue-400 rounded-full transition-all duration-300" style={{ width: `${((DURATION - timeLeft) / DURATION) * 100}%` }} />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-8 shadow-sm">
          <div className="mb-4 flex flex-wrap gap-1.5 max-w-3xl" role="text" aria-label="Text to type">
            {text.split("").map((char, index) => {
              let className = "text-lg font-mono px-0.5 transition-colors ";
              if (index < userInput.length) {
                className += userInput[index] === char ? "text-green-600" : "text-red-500 bg-red-50";
              } else if (index === userInput.length) {
                className += "text-gray-900 bg-[#126dfb]/10 animate-pulse";
              } else {
                className += "text-gray-300";
              }
              if (char === " ") className += " w-2";
              return <span key={index} className={className}>{char === " " ? "â£" : char}</span>;
            })}
          </div>
          {!isActive && !isFinished && (
            <p className="text-center text-gray-400 text-sm">Click the input below and start typing to begin</p>
          )}
        </div>

        <div className="mb-8">
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={handleInputChange}
            disabled={isFinished}
            autoFocus={!isActive && !isFinished}
            className="w-full px-6 py-4 text-lg font-mono bg-[#f8fafc] border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#126dfb] focus:ring-2 focus:ring-[#126dfb]/20 transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
            placeholder={isFinished ? "Practice complete â€” click Restart to try again" : "Start typing here..."}
            aria-label="Typing input"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {isFinished ? (
            <>
              <button onClick={restartTest} className="w-full sm:w-auto px-8 py-3.5 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold rounded-xl transition-all shadow-sm">
                Restart Practice
              </button>
              <Link href="/sign-in" className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold rounded-xl transition-all text-center">
                Save Result
              </Link>
            </>
          ) : (
            <button onClick={restartTest} className="w-full sm:w-auto px-8 py-3.5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all">
              Reset
            </button>
          )}
        </div>

        {isFinished && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-in zoom-in-95 slide-in-from-bottom-4">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Image src="/icons/certificate.svg" alt="" width={32} height={32} className="object-contain" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Practice Complete!</h2>
                <p className="text-gray-500 mt-1">2 Minute Typing Practice</p>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-[#f8fafc] rounded-xl">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#126dfb]">{stats.wpm}</p>
                  <p className="text-xs text-gray-500">WPM</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">{stats.accuracy}%</p>
                  <p className="text-xs text-gray-500">Accuracy</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-500">{stats.errors}</p>
                  <p className="text-xs text-gray-500">Errors</p>
                </div>
              </div>
              <div className="space-y-3">
                <button onClick={restartTest} className="w-full py-3 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold rounded-xl transition-all">
                  Try Again
                </button>
                <Link href="/sign-in" className="block w-full text-center py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all">
                  Save &amp; Get Certificate
                </Link>
                <Link href="/typing-practice" className="block w-full text-center py-3 text-[#126dfb] font-semibold hover:underline">
                  Choose Different Duration
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

function StatBox({ label, value, color, icon }: { label: string; value: string | number; color: string; icon: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 text-center hover:border-[#126dfb]/30 hover:shadow-md transition-all">
      <Image src={icon} alt="" width={24} height={24} className="mx-auto mb-2 object-contain" style={{ filter: `drop-shadow(0 0 0 ${color})` }} aria-hidden="true" />
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
    </div>
  );
}
