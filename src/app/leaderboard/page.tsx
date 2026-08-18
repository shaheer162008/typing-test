import Link from "next/link";
import Image from "next/image";
import FinalCta from "@/components/FinalCta";

const leaderboardData = [
  { rank: 1, name: "TypeMaster99", wpm: 156, accuracy: 99.2, country: "US", avatar: "🥇" },
  { rank: 2, name: "SpeedDemon", wpm: 148, accuracy: 98.7, country: "DE", avatar: "🥈" },
  { rank: 3, name: "KeyboardKing", wpm: 142, accuracy: 99.1, country: "JP", avatar: "🥉" },
  { rank: 4, name: "SwiftFingers", wpm: 135, accuracy: 97.8, country: "GB", avatar: "4" },
  { rank: 5, name: "CodeRacer", wpm: 131, accuracy: 98.3, country: "CA", avatar: "5" },
  { rank: 6, name: "QuickKeys", wpm: 128, accuracy: 97.5, country: "AU", avatar: "6" },
  { rank: 7, name: "TypeFast", wpm: 124, accuracy: 96.9, country: "FR", avatar: "7" },
  { rank: 8, name: "KeyCrusher", wpm: 121, accuracy: 97.2, country: "BR", avatar: "8" },
  { rank: 9, name: "VelocityType", wpm: 118, accuracy: 96.4, country: "IN", avatar: "9" },
  { rank: 10, name: "ProTypist", wpm: 115, accuracy: 95.8, country: "KR", avatar: "10" },
];

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-bold mb-6 uppercase tracking-wider">
            Global Leaderboard
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Top Typists <br className="hidden md:block" /> Worldwide
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            See how you stack up against the best. Rankings update in real-time based on verified test results.
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
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full">
              <thead className="bg-[#f8fafc] border-b border-gray-100">
                <tr>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700 w-16">Rank</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Typist</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700 hidden md:table-cell">Country</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">WPM</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Accuracy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {leaderboardData.map((entry) => (
                  <tr key={entry.rank} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4">
                      {entry.rank <= 3 ? (
                        <span className="text-2xl">{entry.avatar}</span>
                      ) : (
                        <span className="text-lg font-bold text-gray-500">#{entry.rank}</span>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600 text-lg">
                          {entry.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-900">{entry.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell text-gray-500">{entry.country}</td>
                    <td className="px-6 py-4 font-bold text-[#126dfb] text-xl">{entry.wpm}</td>
                    <td className="px-6 py-4 text-green-600 font-semibold">{entry.accuracy}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
              Previous
            </button>
            <span className="px-4 py-2 bg-[#126dfb] text-white rounded-lg font-medium">1</span>
            <span className="px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">2</span>
            <span className="px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">3</span>
            <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <FinalCta />
    </main>
  );
}