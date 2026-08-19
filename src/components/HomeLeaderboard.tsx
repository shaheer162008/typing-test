"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, query, where, orderBy, limit, getDocs, Timestamp } from "firebase/firestore";
import { motion } from "framer-motion";

interface LeaderEntry {
  id: string;
  userId: string;
  displayName: string;
  wpm: number;
  accuracy: number;
}

// Get start of current day (6 AM local time)
function getDayStart(): Date {
  const now = new Date();
  const dayStart = new Date(now);
  dayStart.setHours(6, 0, 0, 0);
  if (now.getHours() < 6) {
    dayStart.setDate(dayStart.getDate() - 1);
  }
  return dayStart;
}

function getInitials(name: string): string {
  if (!name) return "??";
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
}

export default function HomeLeaderboard() {
  const [entries, setEntries] = useState<LeaderEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTop10();
  }, []);

  const fetchTop10 = async () => {
    try {
      const dayStart = getDayStart();
      const testsRef = collection(db, "tests");
      const q = query(
        testsRef,
        where("createdAt", ">=", Timestamp.fromDate(dayStart)),
        orderBy("createdAt", "desc"),
        limit(100)
      );
      
      const snapshot = await getDocs(q);
      
      const bestByUser = new Map<string, LeaderEntry>();
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
          });
        }
      });

      const sorted = Array.from(bestByUser.values())
        .sort((a, b) => b.wpm - a.wpm)
        .slice(0, 10);

      setEntries(sorted);
    } catch (err) {
      console.error("Error fetching leaderboard for homepage:", err);
    }
    setLoading(false);
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "text-amber-500 bg-amber-50 border-amber-200";
    if (rank === 2) return "text-gray-400 bg-gray-50 border-gray-200";
    if (rank === 3) return "text-amber-700 bg-orange-50 border-orange-200";
    return "text-gray-500 bg-white border-gray-100";
  };

  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] border-t border-gray-100" aria-labelledby="leaderboard-heading">
      <div className="max-w-5xl mx-auto px-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-bold mb-6 uppercase tracking-wider">
            Daily Leaderboard
          </div>
          <h2 id="leaderboard-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Today's Top 10
          </h2>
          <p className="text-[16px] text-gray-500 leading-relaxed max-w-xl mx-auto">
            Rankings reset every day at 6:00 AM. Take a test now and compete for the top spot.
          </p>
        </motion.header>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-blue-200 border-t-[#126dfb] rounded-full animate-spin" />
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
            <p className="text-lg font-bold text-gray-900 mb-2">No entries yet today</p>
            <p className="text-gray-500 mb-4">Be the first to claim the top spot!</p>
            <Link href="/typing-test" className="text-[#126dfb] font-semibold hover:underline">Take a test now</Link>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
          >
            <div className="divide-y divide-gray-100">
              {entries.map((entry, i) => {
                const rank = i + 1;
                const initials = getInitials(entry.displayName);
                return (
                  <div 
                    key={entry.id} 
                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm border ${getRankColor(rank)}`}>
                        {rank}
                      </div>
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm">
                        {initials}
                      </div>
                      <span className="font-semibold text-gray-900">{entry.displayName}</span>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-xl font-bold text-[#126dfb]">{entry.wpm}</p>
                        <p className="text-[11px] text-gray-400 uppercase">WPM</p>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="text-lg font-semibold text-green-600">{entry.accuracy}%</p>
                        <p className="text-[11px] text-gray-400 uppercase">ACC</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="/leaderboard"
            className="inline-flex items-center gap-2 text-[#126dfb] font-semibold hover:underline"
          >
            View Full Leaderboard (Top 50)
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
