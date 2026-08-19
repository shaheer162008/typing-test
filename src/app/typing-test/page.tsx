// app/typing-test/page.tsx
"use client";
import TestHero from '@/components/typing-test/TestHero';
import FinalCta from '@/components/FinalCta';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function TypingTestPage() {
  const modes = [
    { duration: '1 Minute', desc: 'A quick burst to check your speed. Perfect for a fast warm-up.', url: '/typing-test/1-minute', color: 'bg-blue-50 text-[#126dfb] border-blue-100', delay: 0.05 },
    { duration: '2 Minute', desc: 'Slightly longer to test your focus and find your rhythm.', url: '/typing-test/2-minute', color: 'bg-cyan-50 text-cyan-700 border-cyan-100', delay: 0.1 },
    { duration: '3 Minute', desc: 'The industry standard for a highly accurate WPM assessment.', url: '/typing-test/3-minute', color: 'bg-indigo-50 text-indigo-700 border-indigo-100', delay: 0.15 },
    { duration: '5 Minute', desc: 'For serious typists wanting to prove their endurance and accuracy.', url: '/typing-test/5-minute', color: 'bg-purple-50 text-purple-700 border-purple-100', delay: 0.2 },
    { duration: '10 Minute', desc: 'The ultimate marathon. Test your maximum stamina and extreme focus.', url: '/typing-test/10-minute', color: 'bg-pink-50 text-pink-700 border-pink-100', delay: 0.25 },
    { duration: '15 Minute', desc: 'Extended endurance challenge. Prove you can maintain speed over time.', url: '/typing-test/15-minute', color: 'bg-amber-50 text-amber-700 border-amber-100', delay: 0.3 },
    { duration: '30 Minute', desc: 'The ultimate typing marathon. Only the most dedicated typists survive this.', url: '/typing-test/30-minute', color: 'bg-orange-50 text-orange-700 border-orange-100', delay: 0.35 },
  ];

  const features = [
    { title: "Real-Time Tracking", desc: "Watch your WPM and accuracy update instantly with every single keystroke." },
    { title: "Detailed Analytics", desc: "Get a comprehensive breakdown of your errors, speed, and consistency after the test." },
    { title: "Verifiable Certificates", desc: "Earn a certificate for your performance to share on LinkedIn or with employers." },
    { title: "Global Leaderboard", desc: "Compete with typists worldwide. See where you stand in the global rankings." }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <TestHero />

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
              Select Mode
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
              Choose Your Challenge
            </h2>
            <p className="text-[16px] text-gray-500 leading-relaxed max-w-xl mx-auto">
              Whether you have just a minute to spare or you want to truly test your typing stamina, 
              we have a mode for you. Select a duration below to begin.
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
                      <h3 className="text-[22px] font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#126dfb] transition-colors">Start {mode.duration} Test</h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Why Take Our Typing Test?</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We built this tool to provide the most accurate, reliable, and smooth typing assessment experience possible.
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

      {/* Final CTA using exactly the Landing Page component with custom props */}
      <FinalCta 
        title={<>Ready to prove <br/> your speed?</>}
        desc="Join thousands of users who have improved their typing speed and earned their certificates today."
        btnText="Start 1-Minute Test Now"
        btnLink="/typing-test/1-minute"
      />

    </main>
  );
}