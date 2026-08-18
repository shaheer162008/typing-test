import Link from "next/link";
import Image from "next/image";
import { ctaBadges } from "@/lib/constants";

const backgroundIcons = [
  {
    className: "absolute top-6 left-6 md:top-10 md:left-12 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform -rotate-12 opacity-80 pointer-events-none",
    icon: (
      <Image
        src="/icons/real-time.svg"
        alt=""
        width={24}
        height={24}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    className: "absolute top-4 right-1/3 md:top-8 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform rotate-12 opacity-80 pointer-events-none",
    icon: (
      <Image
        src="/icons/skill.svg"
        alt=""
        width={24}
        height={24}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    className: "absolute top-8 right-6 md:top-12 md:right-12 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform rotate-6 opacity-80 pointer-events-none",
    icon: (
      <Image
        src="/icons/certificate.svg"
        alt=""
        width={24}
        height={24}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    className: "absolute top-1/3 left-4 md:left-8 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform rotate-12 opacity-80 pointer-events-none",
    icon: (
      <Image
        src="/icons/dashboard.svg"
        alt=""
        width={24}
        height={24}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    className: "absolute top-1/3 right-4 md:right-8 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform -rotate-12 opacity-80 pointer-events-none",
    icon: (
      <span className="w-6 h-6 border-2 border-gray-800 rounded flex items-center justify-center font-bold text-xs text-gray-800" aria-hidden="true">N</span>
    ),
  },
  {
    className: "absolute bottom-6 left-10 md:bottom-10 md:left-16 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform -rotate-6 opacity-80 pointer-events-none",
    icon: (
      <span className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-white font-bold text-[10px]" aria-hidden="true">田</span>
    ),
  },
  {
    className: "absolute bottom-6 right-10 md:bottom-10 md:right-16 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform rotate-12 opacity-80 pointer-events-none",
    icon: (
      <Image
        src="/icons/time-locked.svg"
        alt=""
        width={24}
        height={24}
        className="object-contain"
        aria-hidden="true"
      />
    ),
  },
  {
    className: "absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 opacity-60 pointer-events-none hidden md:block",
    icon: (
      <div className="w-2 h-2 bg-[#126dfb] rounded-full" aria-hidden="true" />
    ),
  },
];

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" aria-labelledby="ctabanner-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-[#f8fafc] rounded-[2.5rem] py-16 px-6 md:py-24 md:px-12 border border-gray-100/80 overflow-hidden text-center flex flex-col items-center justify-center">
          {/* Background Floating Icons */}
          <div aria-hidden="true">
            {backgroundIcons.map((icon, index) => (
              <div key={index} className={icon.className}>
                {icon.icon}
              </div>
            ))}
          </div>

          {/* Main CTA Content */}
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6" role="status">
              {ctaBadges.ctaBanner}
            </div>

            {/* Title */}
            <h2 id="ctabanner-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
              Climb The Typing <br /> Ladder
            </h2>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed mb-8 max-w-md">
              Every tier is a real milestone. The higher you climb, the more people you beat and the certificate looks great on a resume.
            </p>

            {/* Action Button */}
            <Link
              href="/auth/google"
              className="bg-[#126dfb] hover:bg-blue-600 text-white text-[15px] font-medium py-3.5 px-8 rounded-xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#126dfb] focus-visible:ring-offset-2"
            >
              Save my rank with Google
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}