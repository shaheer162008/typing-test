import Link from "next/link";
import Image from "next/image";
import FinalCta from "@/components/FinalCta";

const tips = [
  {
    title: "Master Touch Typing Basics",
    description: "Learn proper finger placement on the home row (ASDF/JKL;). Keep your fingers curved and return to home position after each keystroke.",
    icon: "/icons/skill.svg",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Prioritize Accuracy Over Speed",
    description: "Speed comes naturally with accuracy. Focus on zero-error typing first — WPM will follow. Backspace less, type right the first time.",
    icon: "/icons/real-time.svg",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Practice Daily, Even Briefly",
    description: "15 minutes daily beats 2 hours weekly. Consistency builds muscle memory. Schedule practice like brushing teeth — non-negotiable.",
    icon: "/icons/time-locked.svg",
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Use All Fingers Equally",
    description: "Don't let strong fingers dominate. Consciously practice with pinkies and ring fingers. Balanced hands = faster typing.",
    icon: "/icons/certificate.svg",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "Maintain Proper Posture",
    description: "Sit straight, elbows at 90°, wrists floating (not resting), screen at eye level. Good posture prevents fatigue and injury.",
    icon: "/icons/dashboard.svg",
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Read Ahead While Typing",
    description: "Train eyes to scan 1-2 words ahead of your fingers. This reduces hesitation and creates smooth, continuous flow.",
    icon: "/icons/skill.svg",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Practice Common Word Patterns",
    description: "Focus on high-frequency words and letter combinations (the, and, ing, tion). These appear in 50%+ of English text.",
    icon: "/icons/real-time.svg",
    color: "bg-teal-100 text-teal-600"
  },
  {
    title: "Take Regular Breaks",
    description: "Every 25 minutes, rest 5 minutes. Stretch fingers, wrists, shoulders. Prevents RSI and keeps mind sharp for better practice.",
    icon: "/icons/time-locked.svg",
    color: "bg-orange-100 text-orange-600"
  },
  {
    title: "Track Progress, Not Perfection",
    description: "Log WPM and accuracy weekly. Celebrate improvements, analyze plateaus. Progress is rarely linear — trust the process.",
    icon: "/icons/certificate.svg",
    color: "bg-pink-100 text-pink-600"
  },
];

export default function TipsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-600 text-[13px] font-bold mb-6 uppercase tracking-wider">
            Typing Tips
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Improve Your Typing Speed
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Proven techniques from typing champions. Apply these tips daily and watch your WPM climb steadily.
          </p>
          <Link
            href="/typing-test"
            className="inline-flex items-center justify-center gap-2 bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm"
          >
            <Image src="/icons/keyboard_logo.png" alt="" width={20} height={20} className="object-contain" aria-hidden="true" />
            Test Your Current Speed
          </Link>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div
                key={tip.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#126dfb]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${tip.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Image src={tip.icon} alt="" width={28} height={28} className="object-contain" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h3>
                <p className="text-gray-500">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Quick Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Home Row Position</h3>
              <div className="font-mono text-lg space-y-2 text-center">
                <div className="bg-gray-100 px-4 py-2 rounded-xl">Left:  A  S  D  F</div>
                <div className="bg-gray-100 px-4 py-2 rounded-xl">Right: J  K  L  ;</div>
                <div className="text-sm text-gray-500 mt-4">Thumbs on Space Bar</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Finger Assignments</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span>Pinky</span><span className="font-mono text-gray-600">Q A Z / P ; /</span></div>
                <div className="flex justify-between"><span>Ring</span><span className="font-mono text-gray-600">W S X / O L .</span></div>
                <div className="flex justify-between"><span>Middle</span><span className="font-mono text-gray-600">E D C / I K ,</span></div>
                <div className="flex justify-between"><span>Index</span><span className="font-mono text-gray-600">R F V T G B / U J H Y N M</span></div>
                <div className="flex justify-between"><span>Thumbs</span><span className="font-mono text-gray-600">Space Bar</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}