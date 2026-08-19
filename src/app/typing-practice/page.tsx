// app/typing-practice/page.tsx
"use client";
import PracticeHero from '@/components/typing-practice/PracticeHero';
import FinalCta from '@/components/FinalCta';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TypingPracticePage() {
  const modes = [
    { duration: '1 Minute', desc: 'A short and relaxed session. Focus on accuracy with no pressure at all.', url: '/typing-practice/1-minute', color: 'bg-blue-50 text-[#126dfb] border-blue-100', delay: 0.05 },
    { duration: '2 Minute', desc: 'Find your natural rhythm with slightly more time to settle in.', url: '/typing-practice/2-minute', color: 'bg-cyan-50 text-cyan-700 border-cyan-100', delay: 0.1 },
    { duration: '3 Minute', desc: 'The sweet spot for building consistent and reliable muscle memory.', url: '/typing-practice/3-minute', color: 'bg-indigo-50 text-indigo-700 border-indigo-100', delay: 0.15 },
    { duration: '5 Minute', desc: 'Push your endurance and maintain perfect accuracy across a longer session.', url: '/typing-practice/5-minute', color: 'bg-purple-50 text-purple-700 border-purple-100', delay: 0.2 },
    { duration: '10 Minute', desc: 'The ultimate practice run. Build stamina and discipline with a full marathon session.', url: '/typing-practice/10-minute', color: 'bg-pink-50 text-pink-700 border-pink-100', delay: 0.25 },
    { duration: '15 Minute', desc: 'Extended endurance practice. Build rock-solid consistency over time.', url: '/typing-practice/15-minute', color: 'bg-amber-50 text-amber-700 border-amber-100', delay: 0.3 },
    { duration: '30 Minute', desc: 'The ultimate practice marathon. Only the most dedicated typists attempt this.', url: '/typing-practice/30-minute', color: 'bg-orange-50 text-orange-700 border-orange-100', delay: 0.35 },
  ];

  const features = [
    { title: "No Time Pressure", desc: "Focus entirely on accuracy. Mistakes are highlighted so you can learn from them immediately." },
    { title: "Targeted Exercises", desc: "Choose specific character sets or words you struggle with and practice them repeatedly." },
    { title: "Build Muscle Memory", desc: "Consistent practice builds the automatic responses necessary for elite typing speeds." },
    { title: "Track Improvements", desc: "See your accuracy improve day by day through detailed practice session logs." }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <PracticeHero />

      {/* Mode Selection Section */}
      <section className="w-full py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6 uppercase tracking-wider" role="status">
              Select Duration
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
              Choose Your Duration
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed max-w-xl mx-auto">
              No pressure, no leaderboard. Just you and the keyboard. Pick a duration and start building your accuracy.
            </p>
          </motion.header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            {modes.map((mode, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: mode.delay }}
                className="w-full"
              >
                <Link href={mode.url} className="group block h-full">
                  <div className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:border-[#126dfb]/30 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                    <div>
                      <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold border mb-5 ${mode.color}`}>
                        {mode.duration}
                      </div>
                      <h3 className="text-[22px] font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#126dfb] transition-colors">{mode.duration} Practice</h3>
                      <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                        {mode.desc}
                      </p>
                    </div>
                    <div className="flex items-center text-[#126dfb] font-semibold group-hover:gap-2 transition-all">
                      Begin Now
                      <motion.svg 
                        className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        initial={{ x: -10 }}
                        whileInView={{ x: 0 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </motion.svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-24 px-6 bg-[#f8fafc] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Why Practice With Us?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Speed comes from accuracy. Our practice sessions are designed to isolate your weaknesses and build infallible muscle memory.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 text-[#126dfb] border border-blue-100 rounded-2xl flex items-center justify-center font-bold text-2xl group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-2 group-hover:text-[#126dfb] transition-colors">{feature.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Component */}
      <SocialProof />

      {/* FAQ Component */}
      <FAQ />

      {/* Final CTA */}
      <FinalCta 
        title={<>Ready to train <br/> your fingers?</>}
        desc="Join thousands of users who are building solid typing fundamentals every day."
        btnText="Start Practice Session"
        btnLink="/typing-practice/beginner"
      />

    </main>
  );
}