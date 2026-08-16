import Link from "next/link";

const envelopeIcon = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#126dfb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function FinalCta() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" aria-labelledby="finalcta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-white rounded-[2.5rem] py-16 px-6 md:py-20 md:px-12 border border-gray-100 shadow-sm overflow-hidden text-center flex flex-col items-center justify-center">
          {/* Decorative Background Elements */}
          <div aria-hidden="true">
            {/* Top-Left Diagonal Blue Ribbon */}
            <div className="absolute -top-12 -left-12 w-48 h-16 bg-[#126dfb] transform -rotate-45 pointer-events-none opacity-90 rounded-full" />
            {/* Top-Left Floating Envelope Card */}
            <div className="absolute top-10 left-10 md:top-14 md:left-20 bg-white p-3 rounded-2xl shadow-md border border-gray-50 transform -rotate-12 z-10 pointer-events-none">
              {envelopeIcon}
            </div>
            {/* Bottom-Right Diagonal Blue Ribbon */}
            <div className="absolute -bottom-12 -right-12 w-48 h-16 bg-[#126dfb] transform -rotate-45 pointer-events-none opacity-90 rounded-full" />
            {/* Bottom-Right Floating Envelope Card */}
            <div className="absolute bottom-10 right-10 md:bottom-14 md:right-20 bg-white p-3 rounded-2xl shadow-md border border-gray-50 transform rotate-12 z-10 pointer-events-none">
              {envelopeIcon}
            </div>
          </div>

          {/* Center Content Container */}
          <div className="relative z-20 max-w-xl mx-auto flex flex-col items-center">
            {/* Title */}
            <h2 id="finalcta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-5">
              Your Fastest Typing <br /> Session Starts In Seconds
            </h2>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed mb-8">
              No account required to test. Sign in with Google when you're ready to save results, track streaks, and earn shareable certificates.
            </p>

            {/* Action Button */}
            <Link
              href="/start"
              className="bg-[#126dfb] hover:bg-blue-600 text-white text-[15px] font-semibold py-3.5 px-8 rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#126dfb] focus-visible:ring-offset-2"
            >
              Start Typing Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}