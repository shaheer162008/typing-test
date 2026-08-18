"use client";

import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Create an account
        </h2>
        <p className="text-[15px] text-gray-500">
          Start climbing the typing ladder today.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-gray-100 sm:rounded-[2rem] sm:px-10">
          
          {/* Google Auth Button (Using SVG as requested) */}
          <button className="w-full flex items-center justify-center gap-3 bg-[#f8fafc] border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 text-[15px] font-semibold py-3.5 px-4 rounded-xl transition-all shadow-sm">
            <Image 
              src="/icons/google-auth.svg" 
              alt="Google" 
              width={20} 
              height={20} 
              className="object-contain" 
            />
            Sign up with Google
          </button>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-500 font-medium">Or continue with email</span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="John"
                  className="w-full bg-[#f8fafc] border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:bg-white focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[13px] font-bold text-gray-700 mb-1.5">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Doe"
                  className="w-full bg-[#f8fafc] border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:bg-white focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full bg-[#f8fafc] border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:bg-white focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-[13px] font-bold text-gray-700 mb-1.5">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Create a strong password"
                className="w-full bg-[#f8fafc] border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:bg-white focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#126dfb] hover:bg-blue-600 text-white text-[16px] font-medium py-3.5 px-8 rounded-xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 mt-2"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-[14px] text-gray-500">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-bold text-[#126dfb] hover:text-blue-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}