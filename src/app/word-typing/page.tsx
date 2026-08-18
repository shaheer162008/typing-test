import Link from "next/link";
import Image from "next/image";
import FinalCta from "@/components/FinalCta";

const wordModes = [
  { words: "10 Words", path: "/word-typing/10-words", description: "Quick burst. Perfect for micro-practice.", icon: "/icons/time-locked.svg", color: "bg-red-100 text-red-600" },
  { words: "25 Words", path: "/word-typing/25-words", description: "Short session. Build accuracy fast.", icon: "/icons/time-locked.svg", color: "bg-orange-100 text-orange-600" },
  { words: "50 Words", path: "/word-typing/50-words", description: "Standard test. Balance speed and precision.", icon: "/icons/time-locked.svg", color: "bg-amber-100 text-amber-600" },
  { words: "100 Words", path: "/word-typing/100-words", description: "Extended challenge. Endurance and flow.", icon: "/icons/time-locked.svg", color: "bg-blue-100 text-blue-600" },
];

const skillLevels = [
  { name: "Beginner", description: "Common words, high frequency letters", href: "#", icon: "/icons/skill.svg" },
  { name: "Intermediate", description: "Mixed vocabulary, all letters", href: "#", icon: "/icons/dashboard.svg" },
  { name: "Advanced", description: "Complex words, symbols & numbers", href: "#", icon: "/icons/certificate.svg" },
];

export default function WordTypingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-[13px] font-bold mb-6 uppercase tracking-wider">
            Word Count Typing
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Test by Word Count
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Choose exact word count. No timer pressure. Focus purely on accuracy and rhythm. Sign in with Google to save results and track progress.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/word-typing/10-words"
              className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm"
            >
              <Image src="/icons/keyboard_logo.png" alt="" width={20} height={20} className="object-contain" aria-hidden="true" />
              Start 10-Word Test
            </Link>
            <Link
              href="/typing-practice"
              className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-xl transition-all"
            >
              Practice Mode
            </Link>
          </div>
        </div>
      </section>

      {/* Word Mode Cards */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Choose Your Word Count</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {wordModes.map((mode, index) => (
              <Link key={mode.path} href={mode.path} className="block">
                <div className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#126dfb]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 ${mode.color.replace("bg-", "bg-")} group-hover:w-full transition-all duration-300`} />

                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl ${mode.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Image src={mode.icon} alt="" width={28} height={28} className="object-contain" aria-hidden="true" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{mode.words}</h3>
                    <p className="text-gray-500 mb-6">{mode.description}</p>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-[#126dfb] font-medium group-hover:text-blue-700 transition-colors">
                      <span>Start Test</span>
                      <Image src="/icons/mouse-cursor-icon.png" alt="" width={16} height={16} className="object-contain -rotate-12 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Levels */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Or Practice by Skill Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillLevels.map((level) => (
              <div key={level.name} className="bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#126dfb]/30 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Image src={level.icon} alt="" width={32} height={32} className="object-contain text-purple-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{level.name}</h3>
                <p className="text-gray-500 mb-6">{level.description}</p>
                <button className="w-full px-6 py-3 bg-purple-50 text-purple-700 font-medium rounded-xl hover:bg-purple-100 transition-colors">
                  Select Level
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Word Count Mode?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureItem title="No Timer Pressure" description="Type at your own pace. Focus on accuracy, not racing the clock." icon="/icons/time-locked.svg" />
            <FeatureItem title="Exact Measurement" description="Precise word count gives consistent benchmarks for daily comparison." icon="/icons/real-time.svg" />
            <FeatureItem title="Instant Certificates" description="Complete a test and get a verifiable certificate. Share your achievement." icon="/icons/certificate.svg" />
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}

function FeatureItem({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
        <Image src={icon} alt="" width={32} height={32} className="object-contain" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}