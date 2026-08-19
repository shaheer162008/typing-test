"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, query, where, orderBy, limit, getDocs, Timestamp } from "firebase/firestore";

interface LeaderboardEntry {
  id: string;
  userId: string;
  displayName: string;
  wpm: number;
  accuracy: number;
  mode: string;
  createdAt: Timestamp;
}

// Get start of current day (6 AM local time)
function getDayStart(): Date {
  const now = new Date();
  const dayStart = new Date(now);
  dayStart.setHours(6, 0, 0, 0);
  // If it's before 6 AM, use yesterday's 6 AM
  if (now.getHours() < 6) {
    dayStart.setDate(dayStart.getDate() - 1);
  }
  return dayStart;
}

// Get initials from display name
function getInitials(name: string): string {
  if (!name) return "??";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

export default function LeaderboardPage() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const dayStart = getDayStart();
      const testsRef = collection(db, "tests");
      const q = query(
        testsRef,
        where("createdAt", ">=", Timestamp.fromDate(dayStart)),
        orderBy("createdAt", "desc"),
        limit(200)
      );
      
      const snapshot = await getDocs(q);
      
      // Group by userId, keep only their best WPM
      const bestByUser = new Map<string, LeaderboardEntry>();
      snapshot.docs.forEach((doc) => {
        const data = doc.data() as any;
        const existing = bestByUser.get(data.userId);
        if (!existing || data.wpm > existing.wpm) {
          bestByUser.set(data.userId, {
            id: doc.id,
            userId: data.userId,
            displayName: data.displayName || "Anonymous",
            wpm: data.wpm,
            accuracy: data.accuracy,
            mode: data.mode || "N/A",
            createdAt: data.createdAt,
          });
        }
      });

      // Sort by WPM descending, take top 50
      const sorted = Array.from(bestByUser.values())
        .sort((a, b) => b.wpm - a.wpm)
        .slice(0, 10);

      setEntries(sorted);
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
    }
    setLoading(false);
  };

  const getRankDisplay = (rank: number) => {
    if (rank === 1) return <span className="text-2xl font-black text-amber-500">1st</span>;
    if (rank === 2) return <span className="text-2xl font-black text-gray-400">2nd</span>;
    if (rank === 3) return <span className="text-2xl font-black text-amber-700">3rd</span>;
    return <span className="text-lg font-bold text-gray-500">#{rank}</span>;
  };

  const getRankBg = (rank: number) => {
    if (rank === 1) return "bg-amber-50 border-amber-200";
    if (rank === 2) return "bg-gray-50 border-gray-200";
    if (rank === 3) return "bg-orange-50 border-orange-200";
    return "bg-white border-gray-100";
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-bold mb-6 uppercase tracking-wider">
            Daily Leaderboard
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Today's Top 10
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
            Rankings reset daily at 6:00 AM. Take a typing test now to earn your spot on the leaderboard.
          </p>
          <p className="text-sm text-gray-400 mb-10">
            Showing top 50 typists. Your best WPM of the day counts.
          </p>
          <Link
            href="/typing-test"
            className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm"
          >
            <Image src="/icons/keyboard_logo.png" alt="" width={20} height={20} className="object-contain" aria-hidden="true" />
            Take a Test to Rank
          </Link>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block w-8 h-8 border-4 border-blue-200 border-t-[#126dfb] rounded-full animate-spin mb-4" />
              <p className="text-gray-500">Loading leaderboard...</p>
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
              <p className="text-xl font-bold text-gray-900 mb-2">No entries yet today</p>
              <p className="text-gray-500 mb-6">Be the first to claim the top spot!</p>
              <Link href="/typing-test" className="text-[#126dfb] font-semibold hover:underline">Take a test now</Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-[#f8fafc] border-b border-gray-100">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700 w-20">Rank</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Typist</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700 hidden md:table-cell">Mode</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">WPM</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Accuracy</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {entries.map((entry, i) => {
                    const rank = i + 1;
                    const initials = getInitials(entry.displayName);
                    return (
                      <tr key={entry.id} className={`hover:bg-gray-50/50 transition-colors ${getRankBg(rank)}`}>
                        <td className="px-6 py-4">{getRankDisplay(rank)}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm shrink-0">
                              {initials}
                            </div>
                            <span className="font-semibold text-gray-900">{entry.displayName}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 hidden md:table-cell text-gray-500 text-sm">{entry.mode}</td>
                        <td className="px-6 py-4 font-bold text-[#126dfb] text-xl">{entry.wpm}</td>
                        <td className="px-6 py-4 text-green-600 font-semibold">{entry.accuracy}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}