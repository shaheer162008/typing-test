"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const WORD_TEXTS = [
  "the quick brown fox jumps over lazy dogs",
  "pack my box with five dozen liquor jugs",
  "how vexingly quick daft zebras jump",
  "bright vixens jump dozy fowl quack",
  "sphinx of black quartz judge my vow",
  "practice makes perfect when typing daily",
  "consistent effort yields remarkable results",
  "focus on rhythm let fingers find keys",
];

export default function WordTyping25WordsPage() {
  const [words, setWords] = useState<string[]>([]);
  const [userInput, setUserInput] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [stats, setStats] = useState({ wpm: 0, accuracy: 0, errors: 0, correctWords: 0, totalWords: 0 });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const allWords = WORD_TEXTS.flatMap(text => text.split(" "));
    const selected = allWords.slice(0, 25);
    setWords(selected);
  }, []);

  useEffect(() => {
    if (!isActive && userInput.length > 0) return;

    const completedWords = userInput.trim().split(/\s+/).filter(w => w.length > 0);
    let correct = 0;
    let errors = 0;

    for (let i = 0; i < completedWords.length && i < words.length; i++) {
      if (completedWords[i] === words[i]) {
        correct++;
      } else {
        errors++;
      }
    }

    const totalWords = completedWords.length;
    const accuracy = totalWords > 0 ? Math.round((correct / totalWords) * 100) : 0;

    let wpm = 0;
    if (startTime && totalWords > 0) {
      const minutesElapsed = (Date.now() - startTime) / 60000;
      wpm = minutesElapsed > 0 ? Math.round(totalWords / minutesElapsed) : 0;
    }

    setStats({ wpm, accuracy, errors, correctWords: correct, totalWords });
  }, [userInput, words, isActive, startTime]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isActive && !isFinished) {
      setIsActive(true);
      setStartTime(Date.now());
    }
    if (isFinished) return;

    const value = e.target.value;
    setUserInput(value);

    const completedWords = value.trim().split(/\s+/).filter(w => w.length > 0);
    if (completedWords.length >= words.length) {
      finishTest();
    }
  };

  const finishTest = useCallback(() => {
    setIsActive(false);
    setIsFinished(true);
  }, []);

  const restartTest = () => {
    setUserInput("");
    setIsActive(false);
    setIsFinished(false);
    setStartTime(null);
    setCurrentWordIndex(0);
    setStats({ wpm: 0, accuracy: 0, errors: 0, correctWords: 0, totalWords: 0 });
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8 md:py-16">
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <Link href="/word-typing" className="text-sm text-gray-500 hover:text-gray-700 transition-colors mb-2 inline-block">
              â† Back to Word Count Tests
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">25 Word Test</h1>
          </div>
          {isFinished && (
            <Link
              href="/word-typing"
              className="px-4 py-2 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              Try Another Word Count
            </Link>
          )}
        </header>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <StatBox label="Words" value={`${stats.totalWords} / ${words.length}`} color="#f59e0b" icon="/icons/time-locked.svg" />
          <StatBox label="WPM" value={stats.wpm} color="#126dfb" icon="/icons/real-time.svg" />
          <StatBox label="Accuracy" value={`${stats.accuracy}%`} color="#10b981" icon="/icons/skill.svg" />
          <StatBox label="Correct" value={stats.correctWords} color="#8b5cf6" icon="/icons/certificate.svg" />
          <StatBox label="Errors" value={stats.errors} color="#ef4444" icon="/icons/dashboard.svg" />
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-500">Progress</span>
            <span className="font-semibold text-[#126dfb]">
              {words.length > 0 ? Math.round((stats.totalWords / words.length) * 100) : 0}%
            </span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-300"
              style={{ width: `${words.length > 0 ? (stats.totalWords / words.length) * 100 : 0}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-8 mb-8 shadow-sm">
          <div className="mb-4 flex flex-wrap gap-2 max-w-3xl" role="text" aria-label="Words to type">
            {words.map((word, index) => {
              let className = "text-lg font-mono px-3 py-1.5 rounded-lg transition-colors border ";
              const completedWords = userInput.trim().split(/\s+/).filter(w => w.length > 0);

              if (index < completedWords.length) {
                className += completedWords[index] === word
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-red-50 border-red-200 text-red-600 line-through";
              } else if (index === completedWords.length) {
                className += "bg-blue-50 border-blue-200 text-gray-900 animate-pulse";
              } else {
                className += "bg-gray-50 border-gray-200 text-gray-300";
              }
              return <span key={index} className={className}>{word}</span>;
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
            className="w-full px-6 py-4 text-lg font-mono bg-[#f8fafc] border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:bg-gray-50 disabled:cursor-not-allowed"
            placeholder={isFinished ? "Test complete â€” click Restart to continue" : "Start typing the words above..."}
            aria-label="Word typing input"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {isFinished ? (
            <>
              <button
                onClick={restartTest}
                className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-sm"
              >
                Retry 25 Words
              </button>
              <Link
                href="/typing-test"
                className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold rounded-xl transition-all text-center"
              >
                Try Timed Test
              </Link>
            </>
          ) : (
            <button
              onClick={restartTest}
              className="w-full sm:w-auto px-8 py-3.5 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all"
            >
              Restart
            </button>
          )}
        </div>

        {isFinished && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full animate-in zoom-in-95 slide-in-from-bottom-4">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Image src="/icons/certificate.svg" alt="" width={32} height={32} className="object-contain text-blue-600" aria-hidden="true" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Test Complete!</h2>
                <p className="text-gray-500 mt-1">25 Word Test</p>
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
                  <p className="text-3xl font-bold text-blue-600">{stats.correctWords}/{words.length}</p>
                  <p className="text-xs text-gray-500">Correct</p>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={restartTest}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all"
                >
                  Try Again
                </button>
                <Link
                  href="/typing-test"
                  className="block w-full text-center py-3 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all"
                >
                  Try Timed Test
                </Link>
                <Link
                  href="/word-typing"
                  className="block w-full text-center py-3 text-[#126dfb] font-semibold hover:underline"
                >
                  Choose Different Word Count
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
    <div className="bg-white rounded-xl border border-gray-100 p-5 text-center hover:border-blue-300/30 hover:shadow-md transition-all">
      <Image src={icon} alt="" width={24} height={24} className="mx-auto mb-2 object-contain" style={{ filter: `drop-shadow(0 0 0 ${color})` }} aria-hidden="true" />
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
    </div>
  );
}
