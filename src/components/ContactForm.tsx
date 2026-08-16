'use client';

export default function ContactForm() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc]">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Main Form Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-100">
          
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
            <p className="text-sm text-gray-500">Fill out the dummy form or drop us an email directly.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#126dfb] text-sm text-gray-800 bg-[#f8fafc]/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#126dfb] text-sm text-gray-800 bg-[#f8fafc]/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-2">Your Message</label>
              <textarea 
                rows={5}
                placeholder="Write your message here..." 
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#126dfb] text-sm text-gray-800 bg-[#f8fafc]/50 transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#126dfb] hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-sm cursor-pointer text-sm"
            >
              Send Message
            </button>
          </form>

          {/* Direct Email Section */}
          <div className="pt-8 mt-8 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500 mb-1.5">Prefer reaching out directly via email?</p>
            <a 
              href="mailto:info@typingtestskill.com" 
              className="text-sm font-bold text-[#126dfb] hover:underline"
            >
              info@typingtestskill.com
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}