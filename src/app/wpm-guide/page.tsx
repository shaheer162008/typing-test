import Link from "next/link";
import Image from "next/image";
import FinalCta from "@/components/FinalCta";

const wpmLevels = [
  { range: "0–20 WPM", label: "Beginner", description: "Hunt-and-peck typing. Focus on learning home row and touch typing fundamentals.", color: "bg-red-100 text-red-600", icon: "/icons/skill.svg" },
  { range: "21–40 WPM", label: "Novice", description: "Basic touch typing. Know key positions but look at keyboard occasionally. Practice consistency.", color: "bg-orange-100 text-orange-600", icon: "/icons/real-time.svg" },
  { range: "41–60 WPM", label: "Intermediate", description: "Solid touch typist. Rarely look at keyboard. Good for most office work. Focus on accuracy.", color: "bg-amber-100 text-amber-600", icon: "/icons/time-locked.svg" },
  { range: "61–80 WPM", label: "Advanced", description: "Fast and accurate. Professional level. Can transcribe audio. Practice complex words and symbols.", color: "bg-green-100 text-green-600", icon: "/icons/certificate.svg" },
  { range: "81–100 WPM", label: "Expert", description: "Elite typist. Competitive speed. Rare errors. Master of numbers, symbols, and technical text.", color: "bg-blue-100 text-blue-600", icon: "/icons/dashboard.svg" },
  { range: "100+ WPM", label: "Master", description: "World-class speed. Top 1% of typists. Champion territory. Requires years of dedicated practice.", color: "bg-purple-100 text-purple-600", icon: "/icons/certificate.svg" },
];

const howWpmCalculated = [
  { step: 1, title: "Count Correct Characters", description: "Only correctly typed characters count. Each error reduces your raw character count." },
  { step: 2, title: "Divide by 5", description: "Standard word length = 5 characters (including space). Correct chars ÷ 5 = raw words." },
  { step: 3, title: "Divide by Minutes", description: "Raw words ÷ minutes elapsed = WPM. Example: 300 correct chars in 2 min = 30 WPM." },
  { step: 4, title: "Accuracy Separate", description: "Accuracy = (correct chars ÷ total chars typed) × 100. Both metrics matter equally." },
];

export default function WpmGuidePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-bold mb-6 uppercase tracking-wider">
            WPM Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Understand Your Typing Speed
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            What does your WPM mean? How is it calculated? Where do you stand? Complete breakdown of typing speed benchmarks.
          </p>
          <Link
            href="/typing-test"
            className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm"
          >
            <Image src="/icons/keyboard_logo.png" alt="" width={20} height={20} className="object-contain" aria-hidden="true" />
            Measure Your WPM
          </Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How WPM Is Calculated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWpmCalculated.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-gray-100 p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#126dfb] rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">WPM Skill Levels</h2>
          <div className="space-y-6">
            {wpmLevels.map((level) => (
              <div
                key={level.range}
                className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:border-[#126dfb]/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${level.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  <Image src={level.icon} alt="" width={32} height={32} className="object-contain" aria-hidden="true" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center gap-4 mb-2">
                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${level.color}`}>{level.range}</span>
                    <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${level.color}`}>{level.label}</span>
                  </div>
                  <p className="text-gray-500">{level.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Real-World Benchmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BenchmarkCard
              title="Average Person"
              value="40 WPM"
              description="Typical office worker with basic touch typing skills"
              icon="/icons/skill.svg"
              color="bg-gray-100 text-gray-600"
            />
            <BenchmarkCard
              title="Professional Typist"
              value="65–75 WPM"
              description="Administrative assistants, transcriptionists, data entry"
              icon="/icons/real-time.svg"
              color="bg-blue-100 text-blue-600"
            />
            <BenchmarkCard
              title="Competitive Typist"
              value="120+ WPM"
              description="Top 0.1% — world championship contenders"
              icon="/icons/certificate.svg"
              color="bg-purple-100 text-purple-600"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Tips to Increase WPM</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TipCard title="Accuracy First" description="95%+ accuracy builds true speed. Fix errors immediately. Slow down to speed up." icon="/icons/skill.svg" />
            <TipCard title="Daily 15 Minutes" description="Consistency > intensity. Short daily sessions beat weekly marathons for muscle memory." icon="/icons/time-locked.svg" />
            <TipCard title="Practice Weak Keys" description="Identify problem keys (often pinkies). Drill them specifically. Balanced hands type faster." icon="/icons/dashboard.svg" />
            <TipCard title="Read Ahead" description="Eyes 1-2 words ahead of fingers. Eliminates hesitation. Creates continuous flow state." icon="/icons/real-time.svg" />
            <TipCard title="Proper Posture" description="Wrists floating, elbows 90°, screen eye-level. Prevents fatigue. Enables longer sessions." icon="/icons/certificate.svg" />
            <TipCard title="Track Weekly" description="Log WPM/accuracy every week. Data reveals patterns. Celebrate progress, adjust approach." icon="/icons/skill.svg" />
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}

function BenchmarkCard({ title, value, description, icon, color }: { title: string; value: string; description: string; icon: string; color: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:border-[#126dfb]/30 hover:shadow-xl transition-all duration-300 group">
      <div className={`w-16 h-16 mx-auto mb-5 ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <Image src={icon} alt="" width={32} height={32} className="object-contain" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-4xl font-bold text-gray-900 mb-3">{value}</p>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}

function TipCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#126dfb]/30 hover:shadow-xl transition-all duration-300 group">
      <div className="w-12 h-12 rounded-2xl bg-[#126dfb]/10 flex items-center justify-center mb-4 group-hover:bg-[#126dfb]/20 transition-colors">
        <Image src={icon} alt="" width={24} height={24} className="object-contain text-[#126dfb]" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}