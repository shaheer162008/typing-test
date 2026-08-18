"use client";

import { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail, type AuthError } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // actionCodeSettings — after reset, redirect user back to sign-in
      // Uses window.location.origin so it works on localhost AND production automatically
      const actionCodeSettings = {
        url: `${window.location.origin}/auth/sign-in`,
        handleCodeInApp: false,
      };

      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      setSent(true);
    } catch (err) {
      const authErr = err as AuthError;
      switch (authErr.code) {
        case "auth/user-not-found":
          setError("No account found with this email address.");
          break;
        case "auth/invalid-email":
          setError("Please enter a valid email address.");
          break;
        case "auth/too-many-requests":
          setError("Too many requests. Please wait a moment and try again.");
          break;
        case "auth/missing-continue-uri":
        case "auth/unauthorized-continue-uri":
          // Localhost domain not whitelisted in Firebase — fallback without actionCodeSettings
          try {
            await sendPasswordResetEmail(auth, email);
            setSent(true);
          } catch {
            setError("Could not send reset email. Please try again.");
          }
          break;
        default:
          setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-sm border border-gray-100 sm:rounded-[2rem] sm:px-10">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Check your inbox</h3>
              <div className="text-[14px] text-gray-500 space-y-3">
                <p>
                  We sent a password reset link to{" "}
                  <span className="font-semibold text-gray-700">{email}</span>.
                </p>
                <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-yellow-800 text-[13px]">
                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p>
                    <strong>Don&apos;t see it?</strong> Check your spam or junk folder. Emails from Firebase sometimes land there.
                  </p>
                </div>
                <p className="text-[13px] text-gray-400">
                  Click the link in the email, set your new password, then sign in.
                </p>
              </div>
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => { setSent(false); setError(""); }}
                  className="block w-full text-center text-[14px] text-gray-600 hover:text-gray-800 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all"
                >
                  Try a different email
                </button>
                <Link
                  href="/auth/sign-in"
                  className="block w-full text-center text-[14px] font-bold text-[#126dfb] hover:text-blue-700 transition-colors py-2"
                >
                  ← Back to sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Reset your password
        </h2>
        <p className="text-[15px] text-gray-500">
          Enter your email and we&apos;ll send you a reset link.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-gray-100 sm:rounded-[2rem] sm:px-10">

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleReset}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#f8fafc] border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:bg-white focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center bg-[#126dfb] hover:bg-blue-600 text-white text-[16px] font-medium py-3.5 px-8 rounded-xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/auth/sign-in"
              className="text-[14px] font-bold text-[#126dfb] hover:text-blue-700 transition-colors"
            >
              ← Back to sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
