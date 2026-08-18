"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const tiers = [
  {
    name: "Beginner",
    wpm: "0–30 WPM",
    description: "Just starting out. Focus on accuracy first.",
    iconPath: "/icons/tier-1-beginner.png",
  },
  {
    name: "Intermediate",
    wpm: "31–50 WPM",
    description: "Building speed. Daily practice pays off.",
    iconPath: "/icons/tier-2-intermediate.png",
  },
  {
    name: "Advanced",
    wpm: "51–70 WPM",
    description: "Solid technique. Ready for certification.",
    iconPath: "/icons/tier-3-advanced.png",
  },
  {
    name: "Expert",
    wpm: "71–90 WPM",
    description: "Top tier. Consistency is your advantage.",
    iconPath: "/icons/tier-4-expert.png",
  },
  {
    name: "Master",
    wpm: "90+ WPM",
    description: "Elite speed. Certificate proves it.",
    iconPath: "/icons/tier-5-master.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function RankingSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100 overflow-hidden" aria-labelledby="ranking-heading">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#f8fafc] border border-gray-200 text-[#126dfb] text-[13px] font-bold mb-6 uppercase tracking-wider" role="status">
            Where do you rank?
          </div>
          <h2 id="ranking-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
            Climb The Typing Ladder
          </h2>
          <p className="text-[16px] text-gray-500 leading-relaxed max-w-xl mx-auto">
            Every tier is a real milestone. The higher you climb, the more people you beat, and the certified proof looks great on a resume.
          </p>
        </motion.header>

        {/* Tiers Grid (Gamified Layout) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16" 
          role="list" 
          aria-label="Typing rank tiers"
        >
          {tiers.map((tier, index) => (
            <motion.article
              variants={itemVariants}
              key={tier.name}
              className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#126dfb]/50 hover:shadow-[0_8px_30px_rgb(18,109,251,0.08)] transition-all duration-300 group flex flex-col items-center text-center cursor-default"
              role="listitem"
            >
              {/* Level Indicator Badge */}
              <div className="absolute -top-3 bg-white px-3 py-0.5 rounded-full text-[11px] font-extrabold text-gray-400 border border-gray-200 uppercase tracking-widest group-hover:text-[#126dfb] group-hover:border-[#126dfb]/30 transition-colors">
                Tier {index + 1}
              </div>

              {/* Icon Container with subtle hover pop */}
              <div className="w-16 h-16 mb-5 mt-2 flex items-center justify-center bg-[#f8fafc] rounded-2xl group-hover:bg-blue-50/50 transition-colors duration-300 transform group-hover:scale-110" aria-hidden="true">
                <Image 
                  src={tier.iconPath} 
                  alt={`${tier.name} icon`} 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
              </div>

              {/* Tier Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>

              {/* Gamified WPM Range */}
              <div className="bg-[#f8fafc] text-[#126dfb] text-[13px] font-bold px-3 py-1.5 rounded-lg mb-4 w-full border border-gray-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                {tier.wpm}
              </div>

              {/* Description */}
              <p className="text-[13px] text-gray-500 leading-relaxed flex-1">
                {tier.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/auth/google"
            className="inline-flex items-center justify-center gap-2.5 bg-[#126dfb] hover:bg-blue-600 text-white text-[15px] font-medium py-4 px-8 rounded-xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Image 
              src="/icons/google-auth.svg" 
              alt="Secure Lock" 
              width={40} 
              height={40} 
              className="object-contain" 
            />
            Save my rank with Google
          </Link>
          <p className="mt-4 text-xs text-gray-400 font-medium">Track your progress and climb the leaderboard.</p>
        </motion.div>

      </div>
    </section>
  );
}