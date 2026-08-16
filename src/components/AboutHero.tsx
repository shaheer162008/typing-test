export default function AboutHero() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6">
            About Typing Test Skill
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Empowering Typists <br /> Building Sustainably
          </h1>
          <p className="text-[17px] text-gray-500 leading-relaxed mb-8 max-w-lg">
            We created this platform to help individuals sharpen their typing speed and productivity, while supporting ongoing development through clean, non-intrusive advertising.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-3.5 px-8 rounded-xl transition-all shadow-sm cursor-pointer">
              Our Core Values
            </button>
            <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-xl transition-all cursor-pointer">
              Explore Platform
            </button>
          </div>
        </div>

        {/* Right Side: Exact Clean Google SERP Card Layout */}
        <div className="lg:col-span-6 relative">
          
          {/* Main Container Card (Clean, minimal border/padding) */}
          <div className="relative rounded-[2.5rem] p-6 md:p-8 overflow-hidden">
            
            {/* Google Search Result Box */}
            <div className="relative p-6 pb-12 rounded-2xl bg-white shadow-sm">
              
              {/* Breadcrumb / URL */}
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <span className="font-semibold text-gray-800">Typing Test Skill</span>
                <span>› about › our-mission</span>
              </div>

              {/* Title */}
              <h4 className="text-lg md:text-xl font-bold text-[#126dfb] leading-snug mb-2">
                Helping You Master Typing While Growing Sustainably
              </h4>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                Designed to give users a lightning-fast, distraction-free environment to boost performance, powered transparently through clean ads to keep the platform free for everyone.
              </p>

              {/* Static Cursor & Badge positioned strictly at Bottom-Right Corner */}
              <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex items-center">
                <div className="bg-gray-900 text-white text-[10px] font-medium px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span>Our Core Mission</span>
                </div>
                {/* Clicking Mouse Cursor */}
                <div className="relative -ml-1 -mt-2">
                  <svg className="w-6 h-6 text-gray-900 drop-shadow-lg transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.65376 12.3673H5.65452C5.17646 12.3673 4.90805 11.8152 5.21583 11.4398L11.5173 3.63977C11.7854 3.30964 12.2146 3.30964 12.4827 3.63977L18.7842 11.4398C19.0919 11.8152 18.8235 12.3673 18.3455 12.3673H13.5V20.25C13.5 20.6642 13.1642 21 12.75 21H11.25C10.8358 21 10.5 20.6642 10.5 20.25V12.3673H5.65376Z" />
                  </svg>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}