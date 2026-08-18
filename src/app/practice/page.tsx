import Link from "next/link";
import Image from "next/image";
import FinalCta from "@/components/FinalCta";

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-600 text-[13px] font-bold mb-6 uppercase tracking-wider">
            Practice Mode
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Practice Typing
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Build muscle memory at your own pace. Choose timed practice or word-count sessions. No pressure, no scores saved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/typing-practice"
              className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm"
            >
              <Image src="/icons/keyboard_logo.png" alt="" width={20} height={20} className="object-contain" aria-hidden="true" />
              Timed Practice
            </Link>
            <Link
              href="/word-typing"
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-xl transition-all"
            >
              Word Count Practice
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Practice Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/typing-practice" className="block">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#126dfb]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image src="/icons/time-locked.svg" alt="" width={32} height={32} className="object-contain text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">Timed Practice</h3>
                <p className="text-gray-500 text-center mb-6">1 to 10 minute sessions. Build endurance and rhythm with real-time WPM tracking.</p>
                <div className="text-center">
                  <span className="text-sm text-[#126dfb] font-medium">View Durations →</span>
                </div>
              </div>
            </Link>
            <Link href="/word-typing" className="block">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#126dfb]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Image src="/icons/skill.svg" alt="" width={32} height={32} className="object-contain text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">Word Count Practice</h3>
                <p className="text-gray-500 text-center mb-6">10 to 100 word tests. Focus on accuracy without timer pressure.</p>
                <div className="text-center">
                  <span className="text-sm text-[#126dfb] font-medium">View Word Counts →</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}