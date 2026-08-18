"use client";
import { howItWorksSteps, ctaBadges } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

const stepIllustrations = [
  (
    <div className="bg-[#f8fafc] rounded-3xl h-60 mb-8 relative overflow-hidden flex items-end justify-center border border-gray-100/50" aria-hidden="true">
      {/* Concentric Rings */}
      <div className="absolute -bottom-24 w-64 h-64 border-[1.5px] border-gray-200/80 rounded-full" />
      <div className="absolute -bottom-36 w-80 h-80 border-[1.5px] border-gray-100 rounded-full" />
      
      {/* Center Main Node */}
      <div className="absolute bottom-8 w-14 h-14 bg-white rounded-2xl shadow-md border border-gray-100 flex items-center justify-center z-10 group-hover:-translate-y-2 transition-transform duration-500">
        <Image
          src="/icons/keyboard_logo.png"
          alt="Keyboard Logo"
          width={32}
          height={32}
          className="w-10 h-10 object-contain"
          aria-hidden="true"
        />
      </div>
      
      {/* Floating Orbit Nodes */}
      <div className="absolute top-16 left-12 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100 z-10" aria-hidden="true">
        <span className="text-blue-500 font-bold text-[8px]">stripe</span>
      </div>
      <div className="absolute top-10 left-24 w-7 h-7 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100 z-10" aria-hidden="true">
        <span className="w-3 h-3 bg-pink-500 rounded-full" />
      </div>
      <div className="absolute top-12 right-24 w-7 h-7 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100 z-10" aria-hidden="true">
        <Image
          src="/icons/certificate.svg"
          alt="Certificate"
          width={12}
          height={12}
          className="object-contain"
          aria-hidden="true"
        />
      </div>
      <div className="absolute top-20 right-10 w-9 h-9 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100 z-10" aria-hidden="true">
        <span className="text-yellow-400 font-bold text-[10px]">P</span>
      </div>
    </div>
  ),
  (
    <div className="bg-[#f8fafc] rounded-3xl h-60 mb-8 p-5 flex flex-col gap-3 border border-gray-100/50 relative overflow-hidden" aria-hidden="true">
      {/* Mini Header */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs font-semibold text-gray-700">Activity log</p>
        <div className="flex -space-x-1.5" aria-hidden="true">
          <div className="w-5 h-5 rounded-full bg-blue-100 border border-white" />
          <div className="w-5 h-5 rounded-full bg-gray-200 border border-white" />
          <div className="w-5 h-5 rounded-full bg-slate-300 border border-white" />
        </div>
      </div>
      
      {/* Widget 1 */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-50 flex flex-col justify-between h-[45%]">
        <p className="text-[10px] text-gray-400 font-medium">Total words</p>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-gray-900">5,859</span>
            <span className="text-[8px] bg-blue-50 text-[#126dfb] px-1 py-0.5 rounded font-bold">NEW</span>
          </div>
          {/* Tiny Bar Chart */}
          <div className="flex gap-1 items-end h-6" role="img" aria-label="Word count trend chart">
            <div className="w-1.5 h-3 bg-gray-200 rounded-sm" />
            <div className="w-1.5 h-4 bg-gray-200 rounded-sm" />
            <div className="w-1.5 h-2 bg-gray-200 rounded-sm" />
            <div className="w-1.5 h-5 bg-gray-200 rounded-sm" />
            <div className="w-1.5 h-full bg-[#126dfb] rounded-sm group-hover:scale-y-110 origin-bottom transition-transform" />
          </div>
        </div>
      </div>
      
      {/* Widget 2 */}
      <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-50 flex flex-col justify-between h-[45%]">
        <p className="text-[10px] text-gray-400 font-medium">Sign-ups</p>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold text-gray-900">1,860</span>
            <span className="text-[8px] bg-blue-50 text-[#126dfb] px-1 py-0.5 rounded font-bold">NEW</span>
          </div>
          {/* Tiny Bar Chart */}
          <div className="flex gap-1 items-end h-6" role="img" aria-label="Sign-up trend chart">
            <div className="w-1.5 h-2 bg-gray-200 rounded-sm" />
            <div className="w-1.5 h-3 bg-gray-200 rounded-sm" />
            <div className="w-1.5 h-5 bg-gray-200 rounded-sm" />
            <div className="w-1.5 h-4 bg-gray-200 rounded-sm" />
            <div className="w-1.5 h-full bg-[#126dfb] rounded-sm group-hover:scale-y-110 origin-bottom transition-transform delay-75" />
          </div>
        </div>
      </div>
    </div>
  ),
  (
    <div className="bg-[#f8fafc] rounded-3xl h-60 mb-8 p-5 border border-gray-100/50 flex flex-col justify-center relative overflow-hidden" aria-hidden="true">
      <div className="bg-white rounded-xl w-full h-[85%] shadow-sm border border-gray-50 p-4 relative flex flex-col overflow-hidden">
        
        <p className="text-[10px] text-gray-400 font-medium mb-1 z-10">Total tests</p>
        <div className="flex items-center gap-1.5 mb-4 z-10">
          <span className="text-xl font-bold text-gray-900">10,164</span>
          <span className="text-[8px] bg-blue-50 text-[#126dfb] px-1.5 py-0.5 rounded font-bold">+12%</span>
        </div>
        
        {/* Creative Custom SVG Area Chart */}
        <div className="absolute bottom-0 left-0 right-0 h-[65%] w-full" role="img" aria-label="Tests completed trend chart showing growth">
          <svg className="w-full h-full drop-shadow-sm group-hover:scale-105 transition-transform duration-500 origin-bottom" viewBox="0 0 100 40" preserveAspectRatio="none">
            <defs>
              <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#126dfb" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Area Fill */}
            <path d="M0,40 C15,35 25,25 40,25 C55,25 65,15 80,10 C90,6 95,5 100,2 L100,40 L0,40 Z" fill="url(#blueGradient)" />
            {/* Stroke Line */}
            <path d="M0,40 C15,35 25,25 40,25 C55,25 65,15 80,10 C90,6 95,5 100,2" fill="none" stroke="#126dfb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Peak Target Dot */}
            <circle cx="99.5" cy="2.5" r="2.5" fill="#ffffff" stroke="#126dfb" strokeWidth="1.5" className="group-hover:animate-pulse" />
          </svg>
        </div>
        
        {/* Y-Axis Labels Mock */}
        <div className="absolute left-4 bottom-3 flex flex-col justify-between h-[45%] z-10 opacity-40 pointer-events-none" aria-hidden="true">
          <span className="text-[6px] font-medium text-gray-500">10k</span>
          <span className="text-[6px] font-medium text-gray-500">5k</span>
          <span className="text-[6px] font-medium text-gray-500">0</span>
        </div>

      </div>
    </div>
  ),
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="howitworks-heading">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6" role="status">
            {ctaBadges.howItWorks}
          </div>
          <h2 id="howitworks-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            How It Works
          </h2>
          <p className="text-[16px] text-gray-500 leading-relaxed max-w-xl mx-auto">
            Track progress from your first test to certified proof of speed in three simple steps.
          </p>
        </motion.header>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" 
          role="list"
        >
          {howItWorksSteps.map((step, index) => (
            <motion.article
              variants={itemVariants}
              key={step.title}
              className="bg-white rounded-[2rem] p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300 group cursor-default"
              role="listitem"
            >
              <div className="mb-8" aria-hidden="true">
                {stepIllustrations[index]}
              </div>
              <h3 className="text-[22px] font-bold text-gray-900 mb-3 tracking-tight">{step.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">{step.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}