import Link from "next/link";
import { ctaBadges } from "@/lib/constants";

const backgroundIcons = [
  {
    className: "absolute top-6 left-6 md:top-10 md:left-12 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform -rotate-12 opacity-80 pointer-events-none",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5zm4-6a2 2 0 1 1 2-2v2h-2zm0 1a2 2 0 1 1 0 4h-5a2 2 0 1 1 0-4h5zm6 4a2 2 0 1 1 2 2h-2v-2zm-1 0a2 2 0 1 1-4 0V9a2 2 0 1 1 4 0v5zm-4 6a2 2 0 1 1-2 2v-2h2zm0-1a2 2 0 1 1 0-4h5a2 2 0 1 1 0 4h-5z" fill="#E01E5A" />
      </svg>
    ),
  },
  {
    className: "absolute top-4 right-1/3 md:top-8 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform rotate-12 opacity-80 pointer-events-none",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    className: "absolute top-8 right-6 md:top-12 md:right-12 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform rotate-6 opacity-80 pointer-events-none",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="#2EB67D" />
      </svg>
    ),
  },
  {
    className: "absolute top-1/3 left-4 md:left-8 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform rotate-12 opacity-80 pointer-events-none",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-700" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    className: "absolute top-1/3 right-4 md:right-8 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform -rotate-12 opacity-80 pointer-events-none",
    svg: (
      <div className="w-6 h-6 border-2 border-gray-800 rounded flex items-center justify-center font-bold text-xs text-gray-800" aria-hidden="true">
        N
      </div>
    ),
  },
  {
    className: "absolute bottom-6 left-10 md:bottom-10 md:left-16 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform -rotate-6 opacity-80 pointer-events-none",
    svg: (
      <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center text-white font-bold text-[10px]" aria-hidden="true">
        田
      </div>
    ),
  },
  {
    className: "absolute bottom-6 right-10 md:bottom-10 md:right-16 bg-white p-2.5 md:p-3 rounded-2xl shadow-sm border border-gray-100/60 transform rotate-12 opacity-80 pointer-events-none",
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.18.59.69.48A10 10 0 0 0 12 2z" />
      </svg>
    ),
  },
  {
    className: "absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 opacity-60 pointer-events-none hidden md:block",
    svg: (
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
                {icon.svg}
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