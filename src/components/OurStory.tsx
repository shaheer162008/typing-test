export default function OurStory() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-6">
              Our Background
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-[1.2] mb-6">
              Built To Fix Cluttered Typing Platforms
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              Traditional typing websites are flooded with intrusive ads, chaotic layouts, and sluggish interfaces. We built Typing Test Skill to create a fast, distraction-free environment where focus meets pure performance.
            </p>
          </div>

          {/* Right Column: Story Cards / Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#126dfb] flex items-center justify-center font-bold text-lg mb-6">
                01
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Zero Distractions</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                No flashing banners or unnecessary clutter. Just clean typography and responsive text boxes designed for peak concentration.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm sm:translate-y-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#126dfb] flex items-center justify-center font-bold text-lg mb-6">
                02
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Precision Metrics</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Real-time WPM calculation, accuracy tracking, and instant error feedback to help you compound your speed every single day.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}