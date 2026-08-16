const featuresData = [
  {
    id: "live-wpm",
    title: "Live WPM and accuracy",
    description: "Watch your speed update on every keystroke. Accuracy, errors, and a live progress bar keep you in the zone.",
    illustration: (
      <div className="bg-[#f8fafc] rounded-2xl h-56 mb-8 p-6 flex flex-col justify-between border border-gray-100/50 relative overflow-hidden" aria-hidden="true">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-1">LATEST WPM</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-gray-900" aria-label="Words per minute">114</h3>
              <span className="text-xs font-medium text-[#126dfb] bg-blue-50 px-2 py-0.5 rounded">NEW</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-semibold text-gray-400 tracking-wider mb-1">ACCURACY</p>
            <h3 className="text-2xl font-bold text-gray-900" aria-label="Accuracy percentage">98%</h3>
          </div>
        </div>
        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-2 h-24 mt-4" role="img" aria-label="WPM progress chart showing 7 data points">
          {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
            <div
              key={i}
              className="w-full bg-[#126dfb] rounded-t-md transition-all duration-500"
              style={{ height: `${height}%` }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "mode-for-goal",
    title: "A mode for every goal",
    description: "Time tests for stamina, word tests for sprint speed. Five timed lengths and three word counts, so there is always a lane for you.",
    illustration: (
      <div className="bg-[#f8fafc] rounded-2xl h-56 mb-8 p-6 flex flex-col justify-center gap-4 border border-gray-100/50 relative overflow-hidden" aria-hidden="true">
        {/* Floating Star Icon */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none drop-shadow-xl">
          <div className="bg-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L14.4 9.6H22L15.8 14.1L18.2 21.7L12 17.2L5.8 21.7L8.2 14.1L2 9.6H9.6L12 2Z" fill="#126dfb" />
              <path d="M4 4L5.5 7.5L9 9L5.5 10.5L4 14L2.5 10.5L-1 9L2.5 7.5L4 4Z" fill="#60A5FA" transform="scale(0.5) translate(28, 4)" />
            </svg>
          </div>
        </div>
        {/* Fake List Items */}
        <div className="bg-white h-10 w-[85%] mx-auto rounded-lg shadow-sm border border-gray-50 flex items-center px-4 gap-3 opacity-90" aria-hidden="true">
          <div className="w-4 h-4 rounded bg-blue-100 flex-shrink-0" />
          <div className="h-2 bg-gray-100 rounded w-full" />
        </div>
        <div className="bg-white h-10 w-full mx-auto rounded-lg shadow-sm border border-gray-50 flex items-center px-4 gap-3" aria-hidden="true">
          <div className="w-4 h-4 rounded bg-blue-100 flex-shrink-0" />
          <div className="h-2 bg-gray-100 rounded w-[80%]" />
        </div>
        <div className="bg-white h-10 w-[90%] mx-auto rounded-lg shadow-sm border border-gray-50 flex items-center px-4 gap-3 opacity-90" aria-hidden="true">
          <div className="w-4 h-4 rounded bg-blue-100 flex-shrink-0" />
          <div className="h-2 bg-gray-100 rounded w-[90%]" />
        </div>
      </div>
    ),
  },
  {
    id: "certificates-streaks",
    title: "Certificates and streaks",
    description: "Hit a milestone and earn a shareable certificate. Keep your daily streak alive and watch your rank climb the ladder.",
    illustration: (
      <div className="bg-[#f8fafc] rounded-2xl h-56 mb-8 relative border border-gray-100/50 flex items-center justify-center overflow-hidden" aria-hidden="true">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 border-[0.5px] border-gray-200/50 w-full h-full bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        {/* Center Node Logo */}
        <div className="w-14 h-14 bg-[#126dfb] rounded-2xl z-10 flex items-center justify-center shadow-lg shadow-blue-500/20 transform hover:rotate-12 transition-transform duration-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2V22M2 12H22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16.24 7.76L7.76 16.24M7.76 7.76L16.24 16.24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        {/* Floating Nodes */}
        <div className="absolute top-8 left-10 bg-white px-4 py-2 rounded-full text-xs font-semibold shadow-sm border border-gray-100 text-gray-700 z-10 flex items-center gap-2" aria-hidden="true">
          <div className="w-2 h-2 rounded-full bg-orange-400" /> 7 Day Streak
        </div>
        <div className="absolute bottom-8 right-10 bg-gray-900 px-4 py-2 rounded-full text-xs font-semibold shadow-sm text-white z-10 flex items-center gap-2" aria-hidden="true">
          <div className="w-2 h-2 rounded-full bg-green-400" /> Top 5% Rank
        </div>
        <div className="absolute bottom-12 left-12 bg-[#126dfb] px-3 py-1.5 rounded-full text-[10px] font-bold shadow-sm text-white z-10" aria-hidden="true">
          PRO
        </div>
      </div>
    ),
  },
  {
    id: "timed-test",
    title: "Start with a timed test",
    description: "One tap and you're typing, no account needed to begin. Actionable suggestions from your data, without digging into spreadsheets.",
    illustration: (
      <div className="bg-[#f8fafc] rounded-2xl h-56 mb-8 p-6 flex flex-col justify-between border border-gray-100/50 overflow-hidden relative" aria-hidden="true">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[12px] font-semibold text-gray-600">Performance Analysis</p>
          <div className="flex gap-2" aria-hidden="true">
            <span className="w-8 h-4 bg-gray-200 rounded-full" />
            <span className="w-12 h-4 bg-gray-800 rounded-full" />
          </div>
        </div>
        {/* Line Chart Mockup via SVG */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-80 hover:opacity-100 transition-opacity" role="img" aria-label="Performance trend chart showing upward trajectory">
          <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#126dfb" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#126dfb" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,80 Q50,20 100,70 T200,40 T300,80 T400,30" fill="none" stroke="#C084FC" strokeWidth="2" strokeOpacity="0.5" />
            <path d="M0,100 Q80,10 150,60 T250,20 T320,50 T400,10 L400,100 L0,100 Z" fill="url(#gradientBlue)" stroke="#126dfb" strokeWidth="3" />
          </svg>
        </div>
        {/* Fake grid lines */}
        <div className="absolute inset-0 flex flex-col justify-end pb-4 px-6 z-[-1]" aria-hidden="true">
          <div className="border-b border-gray-200/50 h-8 w-full" />
          <div className="border-b border-gray-200/50 h-8 w-full" />
          <div className="border-b border-gray-200/50 h-8 w-full" />
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white overflow-hidden" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-sm font-medium mb-6" role="status">
            Real-time typing test
          </div>
          <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
            Your Typing Speed, Measured <br className="hidden md:block" /> In Real Time
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
            No sign-up, no fluff. Open the test, press Tab, and type. Within a minute you'll know your exact WPM, your accuracy, and exactly where you rank, with a certificate waiting when you cross a milestone.
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" role="list">
          {featuresData.map((feature) => (
            <article
              key={feature.id}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
              role="listitem"
            >
              <div className="mb-8" aria-hidden="true">
                {feature.illustration}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-[15px] text-gray-500 leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}