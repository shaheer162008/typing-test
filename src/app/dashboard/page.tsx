"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<{ name: string; email: string; wpm: number; accuracy: number; streak: number } | null>(null);

  useEffect(() => {
    // Simulate auth check
    const timer = setTimeout(() => {
      setIsLoading(false);
      // In real app, fetch from session
      setUser({
        name: "Alex Johnson",
        email: "alex@example.com",
        wpm: 78,
        accuracy: 96,
        streak: 12,
      });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#126dfb] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500">Loading dashboard...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Sign In Required</h1>
          <p className="text-gray-500 mb-6">Please sign in to access your dashboard.</p>
          <Link
            href="/auth/sign-in"
            className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all shadow-sm"
          >
            <Image src="/icons/google-auth.svg" alt="Google" width={20} height={20} className="object-contain" />
            Sign In with Google
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}</h1>
            <p className="text-gray-500 mt-1">{user.email}</p>
          </div>
          <Link
            href="/typing-test"
            className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-all shadow-sm"
          >
            <Image src="/icons/keyboard_logo.png" alt="" width={20} height={20} className="object-contain" aria-hidden="true" />
            Start Test
          </Link>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard title="Current WPM" value={user.wpm} icon="/icons/real-time.svg" color="#126dfb" />
          <StatCard title="Accuracy" value={`${user.accuracy}%`} icon="/icons/skill.svg" color="#10b981" />
          <StatCard title="Daily Streak" value={`${user.streak} days`} icon="/icons/time-locked.svg" color="#f59e0b" />
          <StatCard title="Tests Completed" value="142" icon="/icons/dashboard.svg" color="#8b5cf6" />
        </div>

        {/* Quick Actions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <ActionCard
              title="Timed Test"
              description="1–10 minute tests for endurance"
              href="/typing-test"
              icon="/icons/time-locked.svg"
            />
            <ActionCard
              title="Practice Session"
              description="Focused practice by skill level"
              href="/typing-practice"
              icon="/icons/skill.svg"
            />
            <ActionCard
              title="Word Challenge"
              description="10–100 word sprint tests"
              href="/word-typing"
              icon="/icons/certificate.svg"
            />
          </div>
        </section>

        {/* My Certificates */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">My Certificates</h2>
            <Link href="/certificates" className="text-sm text-[#126dfb] font-medium hover:underline">
              Verify a Certificate →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 1, title: "Speed Demon", wpm: "100+", description: "Achieved 100+ WPM on a verified test", date: "Aug 15, 2025", status: "earned", certId: "TT-9X82-KL1M" },
              { id: 2, title: "Accuracy Master", wpm: "98%+", description: "Maintained 98%+ accuracy over 10 tests", date: "Aug 12, 2025", status: "earned", certId: "TT-4A19-PL9Q" },
              { id: 3, title: "Streak Champion", wpm: "30 days", description: "Completed a test every day for 30 days", date: "Aug 10, 2025", status: "earned", certId: "TT-7B33-MN2W" },
              { id: 4, title: "Century Club", wpm: "100 WPM", description: "Reached 100 WPM milestone", date: "—", status: "locked" },
            ].map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#f8fafc] border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Test Type</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">WPM</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Accuracy</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { date: "Aug 15, 2025", type: "5-min Test", wpm: 82, acc: 97, dur: "5:00" },
                  { date: "Aug 14, 2025", type: "3-min Test", wpm: 79, acc: 95, dur: "3:00" },
                  { date: "Aug 12, 2025", type: "25 Words", wpm: 85, acc: 98, dur: "0:42" },
                  { date: "Aug 10, 2025", type: "10-min Test", wpm: 74, acc: 94, dur: "10:00" },
                  { date: "Aug 8, 2025", type: "1-min Test", wpm: 88, acc: 96, dur: "1:00" },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-gray-600">{item.date}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.type}</td>
                    <td className="px-6 py-4 font-bold text-[#126dfb]">{item.wpm}</td>
                    <td className="px-6 py-4 text-green-600 font-medium">{item.acc}%</td>
                    <td className="px-6 py-4 text-gray-500">{item.dur}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

function StatCard({ title, value, icon, color }: { title: string; value: string | number; icon: string; color: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#126dfb]/30 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <Image src={icon} alt="" width={24} height={24} className="object-contain" style={{ filter: `drop-shadow(0 0 0 ${color})` }} aria-hidden="true" />
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  );
}

function ActionCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: string }) {
  return (
    <Link href={href} className="block bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#126dfb]/30 hover:shadow-md transition-all duration-300 group">
      <div className="w-12 h-12 bg-[#f8fafc] rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
        <Image src={icon} alt="" width={24} height={24} className="object-contain" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </Link>
  );
}

function CertificateCard({ cert }: { cert: any }) {
  const isEarned = cert.status === "earned";

  return (
    <div className={`relative bg-white rounded-2xl border overflow-hidden transition-all duration-300 ${
      isEarned ? "border-blue-200 hover:border-blue-300 hover:shadow-lg" : "border-gray-100 opacity-60"
    }`}>
      <div className="aspect-[4/3] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 bg-white/80 rounded-xl flex items-center justify-center backdrop-blur-sm border border-blue-100">
              <Image src="/icons/certificate.svg" alt="" width={24} height={24} className="object-contain text-[#126dfb]" aria-hidden="true" />
            </div>
            <span className={`text-2xl font-bold ${isEarned ? "text-[#126dfb]" : "text-gray-300"}`}>
              {isEarned ? "✓" : "🔒"}
            </span>
          </div>
          <div className="text-center">
            <p className={`text-3xl font-bold ${isEarned ? "text-gray-900" : "text-gray-400"}`}>{cert.title}</p>
            <p className={`text-lg font-semibold mt-2 ${isEarned ? "text-[#126dfb]" : "text-gray-300"}`}>{cert.wpm}</p>
          </div>
          <div className="text-right">
            {isEarned && <p className="text-xs text-gray-500 font-mono">ID: {cert.certId}</p>}
            {!isEarned && <span className="text-xs text-gray-400 font-semibold bg-gray-100 px-2 py-1 rounded-full">Locked</span>}
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className={`text-sm leading-relaxed mb-4 ${isEarned ? "text-gray-600" : "text-gray-400"}`}>{cert.description}</p>
        {isEarned ? (
          <div className="flex gap-3">
            <button className="flex-1 bg-[#126dfb] hover:bg-blue-600 text-white py-2.5 rounded-xl font-medium text-sm transition-colors shadow-sm">
              Download PDF
            </button>
            <button className="flex-1 border border-gray-200 hover:bg-gray-50 text-gray-700 py-2.5 rounded-xl font-medium text-sm transition-colors">
              Share Link
            </button>
          </div>
        ) : (
          <Link
            href="/typing-test"
            className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-500 py-2.5 rounded-xl font-medium text-sm transition-colors"
          >
            Take Test to Unlock
          </Link>
        )}
      </div>
    </div>
  );
}
