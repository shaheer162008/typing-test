import { comparisonData, ctaBadges } from "@/lib/constants";

const logoIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2V22M2 12H22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16.24 7.76L7.76 16.24M7.76 7.76L16.24 16.24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export default function ComparisonTable() {
  const { otherToolsPoints, typingTestPoints } = comparisonData;

  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="comparison-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6" role="status">
            {ctaBadges.comparison}
          </div>
          <h2 id="comparison-heading" className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-5 leading-tight">
            Get A Certificate <br /> Anyone Can Verify
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed max-w-lg mx-auto">
            Every certificate carries your unique verification code, your WPM, and your accuracy. Anyone can check it is real, and it drops into your LinkedIn profile with one click.
          </p>
        </header>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto" role="region" aria-label="Feature comparison">
          {/* Left Card: Other Tools */}
          <article className="bg-[#fcfcfc] rounded-[2.5rem] p-8 md:p-10 border border-gray-100 flex flex-col justify-between">
            <header>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Tools</h3>
              <ul className="flex flex-col gap-5" role="list">
                {otherToolsPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-500 text-[15px] md:text-[16px]">
                    <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-xs flex-shrink-0" aria-hidden="true">
                      ✕
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </header>
          </article>

          {/* Right Card: Typing Test (Highlighted with Blue Border) */}
          <article className="bg-white rounded-[2.5rem] p-8 md:p-10 border-2 border-[#126dfb] shadow-[0_10px_30px_rgba(18,109,251,0.08)] flex flex-col justify-between relative">
            <header>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-[#126dfb] rounded-lg flex items-center justify-center shadow-sm" aria-hidden="true">
                  {logoIcon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Typing Test</h3>
              </div>
              <ul className="flex flex-col gap-5" role="list">
                {typingTestPoints.map((point, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-800 font-medium text-[15px] md:text-[16px]">
                    <span className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#126dfb] font-bold text-xs flex-shrink-0" aria-hidden="true">
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </header>
          </article>
        </div>
      </div>
    </section>
  );
}