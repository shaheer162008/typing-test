"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const floatingAssets = [
  {
    src: "/Key_Cap.jpg",
    alt: "Mechanical Keycap icon",
    width: 200,
    height: 200,
    className: "absolute top-10 left-4 md:left-10 lg:left-20 transform -rotate-6 rounded-2xl hover:rotate-0 transition-transform duration-300",
    initialY: 0,
    rotateValues: [-6, -2, -6]
  },
  {
    src: "/92-WPM.jpg",
    alt: "92 WPM live speed indicator",
    width: 300,
    height: 160,
    className: "absolute top-12 right-4 md:right-10 lg:right-20 transform rotate-12 rounded-2xl hover:rotate-0 transition-transform duration-300",
    initialY: 0,
    rotateValues: [12, 8, 12]
  },
  {
    src: "/99.4_Accuracy.jpg",
    alt: "99.4% Accuracy badge",
    width: 320,
    height: 160,
    className: "absolute top-[350px] md:top-[400px] left-8 md:left-12 lg:left-24 transform rotate-6 rounded-2xl hover:rotate-0 transition-transform duration-300",
    initialY: 0,
    rotateValues: [6, 2, 6]
  },
  {
    src: "/7_day_streak.jpg",
    alt: "7 Day Streak counter",
    width: 280,
    height: 160,
    className: "absolute top-[330px] md:top-[380px] right-8 md:right-12 lg:right-24 transform -rotate-12 rounded-2xl hover:rotate-0 transition-transform duration-300",
    initialY: 0,
    rotateValues: [-12, -8, -12]
  },
];

// Missing icon: start-icon.png - using text placeholder
const startIcon = <span className="text-[10px] font-bold" aria-hidden="true">▶</span>;

export default function Hero() {
  return (
    <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-white" aria-labelledby="hero-heading">
      
      {/* Floating Background Images */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 max-w-7xl mx-auto hidden md:block pointer-events-none" aria-hidden="true"
      >
        {floatingAssets.map((asset, index) => (
          <motion.div 
            key={index} 
            className={asset.className}
            animate={{ 
              y: [0, -15, 0],
              rotate: asset.rotateValues 
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut", 
              delay: index * 0.4 
            }}
          >
            <Image
              src={asset.src}
              alt={asset.alt}
              width={asset.width}
              height={asset.height}
              className="object-contain rounded-2xl"
              quality={75}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50/50 border border-blue-200 text-[#126dfb] text-[13px] font-medium mb-8 backdrop-blur-sm" role="status"
        >
          Sign in with Google, save results & get certified
        </motion.div>

        {/* Headings */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight max-w-3xl leading-[1.1]"
        >
          How Fast Can You <br className="hidden md:block" /> Actually Type?
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          Take the free typing test, watch your WPM climb live, and get certified proof of your speed. Sign in with Google to track every result.
        </motion.p>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/typing-test"
              className="flex items-center gap-1.5 px-6 py-3 bg-[#126dfb] hover:bg-blue-600 text-white text-[16px] font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              {startIcon}
              Start Free Test
            </Link>
          </motion.div>

          <div className="mt-4 flex items-center gap-2 text-[13px] text-gray-500">
            <p>No account needed to test. Sign in only when you want to save.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}