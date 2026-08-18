"use client";

import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Contact Info & Text */}
        <div>
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#126dfb] text-[13px] font-bold mb-6 uppercase tracking-wider">
            Reach Out
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
            Let's Start a <br /> Conversation
          </h2>
          <p className="text-[16px] text-gray-500 leading-relaxed mb-10 max-w-md">
            Whether you have a question about our typing tests, need help with a certificate, or just want to say hi—our team is ready to help you out.
          </p>

          <div className="flex flex-col gap-5">
            {/* Contact Card: Email */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100 hover:border-[#126dfb]/30 hover:shadow-md transition-all duration-300 group flex items-center gap-5 cursor-default">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/icons/email-icon.png" 
                  alt="Email Us" 
                  width={32} 
                  height={32} 
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1">Email Us</p>
                <a href="mailto:support@typingtestskill.com" className="text-lg font-bold text-gray-900 group-hover:text-[#126dfb] transition-colors">
                  info@typingtestskill.com
                </a>
              </div>
            </div>

            {/* Contact Card: Location */}
            <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100 hover:border-[#126dfb]/30 hover:shadow-md transition-all duration-300 group flex items-center gap-5 cursor-default">
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm border border-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/icons/location-icon.png" 
                  alt="Our Location" 
                  width={32} 
                  height={32} 
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div>
                <p className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-1">Our HQ</p>
                <p className="text-lg font-bold text-gray-900">
                  Global Remote Team
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-[#f8fafc] p-8 md:p-10 rounded-[2.5rem] border border-gray-100 relative overflow-hidden">
          {/* Subtle top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-100 via-[#126dfb] to-blue-100 opacity-50" />
          
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-[13px] font-bold text-gray-700">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  placeholder="John"
                  className="bg-white border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
                />
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-[13px] font-bold text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  placeholder="Doe"
                  className="bg-white border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[13px] font-bold text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com"
                className="bg-white border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[13px] font-bold text-gray-700">Your Message</label>
              <textarea 
                id="message" 
                rows={5}
                placeholder="How can we help you today?"
                className="bg-white border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="mt-2 w-full inline-flex items-center justify-center gap-2.5 bg-[#126dfb] hover:bg-blue-600 text-white text-[16px] font-medium py-4 px-8 rounded-xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Send Message
              <Image 
                src="/icons/send-icon.png" 
                alt="Send" 
                width={20} 
                height={20} 
                className="object-contain brightness-0 invert" 
              />
            </button>
            <p className="text-center text-xs text-gray-400 font-medium mt-2">
              We typically reply within 24 hours.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}