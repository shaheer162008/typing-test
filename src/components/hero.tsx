import Image from "next/image";
import Link from "next/link";

const floatingIcons = [
  {
    className: "absolute top-10 left-10 lg:left-20 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 transform -rotate-6",
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#EBF3FF" />
        <path d="M16 8L8 16M8 8L16 16" stroke="#126dfb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    className: "absolute top-12 right-10 lg:right-20 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 transform rotate-12",
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#FFF0E5" />
        <path d="M7 17L17 7M17 7H9M17 7V15" stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    className: "absolute top-[400px] left-12 lg:left-24 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 transform rotate-6",
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#F3F4F6" />
        <path d="M6 18V6L12 12L18 6V18" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    className: "absolute top-[380px] right-12 lg:right-24 bg-white p-3 rounded-2xl shadow-sm border border-gray-100 transform -rotate-12",
    svg: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="6" fill="#F3E8FF" />
        <path d="M12 4L4 8L12 12L20 8L12 4Z" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16L12 20L20 16" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12L12 16L20 12" stroke="#7C3AED" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const trustedLogos = [
  {
    name: "45 Degrees°",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M7 17L17 7M17 7H9M17 7V15" />
      </svg>
    ),
  },
  {
    name: "Codecraft_",
    icon: (
      <div className="flex gap-0.5" aria-hidden="true">
        <div className="w-4 h-4 bg-gray-800 rounded-sm" />
        <div className="w-4 h-4 bg-gray-500 rounded-sm mt-2" />
      </div>
    ),
  },
  {
    name: "Frequenci",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    name: "Kintsugi",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

const startIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative w-full pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-[#f9fafb]" aria-labelledby="hero-heading">
      {/* Floating Background Icons */}
      <div className="absolute inset-0 max-w-7xl mx-auto hidden md:block pointer-events-none" aria-hidden="true">
        {floatingIcons.map((icon, index) => (
          <div key={index} className={icon.className}>
            {icon.svg}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50/50 border border-blue-200 text-[#126dfb] text-[13px] font-medium mb-8" role="status">
          Sign in with Google, save results & get certified
        </div>

        {/* Headings */}
        <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight max-w-3xl leading-[1.1]">
          How Fast Can You <br className="hidden md:block" /> Actually Type?
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Take the free typing test, watch your WPM climb live, and get certified proof of your speed. Sign in with Google to track every result.
        </p>

        {/* CTA Section */}
        <div className="mt-8 flex flex-col items-center">
          <Link
            href="/start"
            className="flex items-center gap-1.5 px-5 py-2.5 bg-[#126dfb] hover:bg-blue-600 text-white text-[15px] font-medium rounded-lg transition-all shadow-sm" >
            {startIcon}
            Start Free Test
          </Link>

          <div className="mt-4 flex items-center gap-2 text-[13px] text-gray-500">
            <div className="w-3 h-3 bg-[#126dfb] rounded-sm" aria-hidden="true" />
            <p>No account needed to test. Sign in only when you want to save.</p>
          </div>
        </div>

        {/* Dashboard Mockup Image */}
        <div className="mt-16 md:mt-24 w-full max-w-5xl relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-100/40 to-transparent blur-3xl -z-10 rounded-full" aria-hidden="true" />
          <Image
            src="/hero.png"
            alt="Typing Test Dashboard Preview showing live WPM, accuracy, and progress tracking"
            width={1200}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            className="w-full h-auto shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-2xl border border-gray-100/50"
          />
        </div>

        {/* Trusted By Section */}
        <div className="mt-20 md:mt-28 w-full border-t border-gray-200/60 pt-10" aria-label="Trusted by companies">
          <p className="text-[14px] font-medium text-gray-500 mb-8">Blindly trusted by</p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale" role="list">
            {trustedLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 font-bold text-xl text-gray-800" role="listitem">
                <span aria-hidden="true">{logo.icon}</span>
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}