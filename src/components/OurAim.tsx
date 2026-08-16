export default function OurAim() {
  const aims = [
    {
      title: "Empowering Developers & Students",
      desc: "Helping technical professionals and students achieve lightning-fast typing speeds for coding, documentation, and daily productivity."
    },
    {
      title: "Global Speed Benchmarking",
      desc: "Creating an open, transparent leaderboard system where typists worldwide can test their limits and compete fairly."
    },
    {
      title: "Seamless Performance",
      desc: "Leveraging modern tech stacks like Next.js 15 and Tailwind CSS to ensure instantaneous load times and zero input lag."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-medium mb-4">
            Our Core Aim
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            What Drives Our Platform Forward
          </h2>
          <p className="text-gray-500 text-[16px]">
            We are committed to building the gold standard for web-based typing performance tools.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aims.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#f8fafc] p-8 rounded-[2rem] border border-gray-100 flex flex-col justify-between transition-all hover:border-blue-200 hover:shadow-md"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#126dfb] text-white flex items-center justify-center font-bold text-sm mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200/60 flex items-center gap-2 text-xs font-semibold text-[#126dfb]">
                <span>Typing Test Skill Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}