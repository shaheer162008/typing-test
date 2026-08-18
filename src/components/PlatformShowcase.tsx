"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Timed Typing Tests",
    description: "Evaluate your real speed under strict conditions with 1, 2, 3, 5, and 10 minute timed challenges.",
    icon: "/icons/real-time.svg",
    href: "/typing-test",
    badge: "Most Popular"
  },
  {
    title: "Typing Practice",
    description: "Build muscle memory and improve rhythm at your own pace without the pressure of a live score.",
    icon: "/icons/mouse-cursor-icon.png",
    href: "/typing-practice",
    badge: "Skill Builder"
  },
  {
    title: "Word Typing Modes",
    description: "Test your precision with targeted word count challenges ranging from 10 to 100 words.",
    icon: "/icons/keyboard_logo.png",
    href: "/word-typing",
    badge: "Precision"
  },
  {
    title: "Global Leaderboard",
    description: "Compete with typists worldwide, check top rankings, and see where your WPM stands globally.",
    icon: "/icons/star-icon.png",
    href: "/leaderboard",
    badge: "Competition"
  },
  {
    title: "Official Certificates",
    description: "Complete verified tests to earn professional downloadable typing certificates for your resume.",
    icon: "/icons/certificate.svg",
    href: "/certificates",
    badge: "Credential"
  },
  {
    title: "Progress Dashboard",
    description: "Track your past test history, accuracy trends, and speed improvements over time in one place.",
    icon: "/icons/dashboard.svg",
    href: "/dashboard",
    badge: "Analytics"
  }
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function PlatformShowcase() {
  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-4 uppercase tracking-wider">
            Platform Overview
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Everything You Need to Master Your Typing Speed
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed">
            Whether you want to test your limits, practice daily routines, or earn verified credentials, Typing Test Skill provides a professional environment for everyone.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div variants={itemVariants} key={index} className="h-full">
              <Link 
                href={feature.href} 
                className="group block h-full"
              >
                <div className="bg-[#f8fafc] p-8 rounded-[2rem] border border-gray-100 group-hover:border-blue-200 group-hover:shadow-md transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center p-2.5">
                        <Image 
                          src={feature.icon} 
                          alt="" 
                          width={24} 
                          height={24} 
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 bg-white border border-gray-200 text-[#126dfb] rounded-full shadow-xs">
                        {feature.badge}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#126dfb] transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-[14px] font-semibold text-[#126dfb] group-hover:translate-x-1 transition-transform">
                    <span>Explore feature</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}