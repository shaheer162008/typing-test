"use client";

import Link from "next/link";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        {/* Header Text */}
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Reset your password
        </h2>
        <p className="text-[15px] text-gray-500">
          Enter your email address and we'll send you a link to get back into your account.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-gray-100 sm:rounded-[2rem] sm:px-10">
          
          {/* Recovery Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
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

            <button
              type="submit"
              className="w-full flex items-center justify-center bg-[#126dfb] hover:bg-blue-600 text-white text-[16px] font-medium py-3.5 px-8 rounded-xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 mt-2"
            >
              Send Reset Link
            </button>
          </form>

          {/* Back to Sign In Link with correct URL */}
          <div className="mt-6 text-center">
            <Link
              href="/auth/sign-in"
              className="text-[14px] font-bold text-[#126dfb] hover:text-blue-700 transition-colors"
            >
              â† Back to sign in
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
