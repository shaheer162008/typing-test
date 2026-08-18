"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  type AuthError,
  type OAuthCredential,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [infoMsg, setInfoMsg] = useState("");
  const [loading, setLoading] = useState(false);
  // Store pending Google credential for account linking
  const [pendingCred, setPendingCred] = useState<OAuthCredential | null>(null);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setInfoMsg("");
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      // If there was a pending Google credential (user had Google account),
      // link it to this email/password account → single unified account
      if (pendingCred) {
        await linkWithCredential(result.user, pendingCred);
        setPendingCred(null);
      }

      router.push("/dashboard");
    } catch (err) {
      const authErr = err as AuthError;

      if (authErr.code === "auth/account-exists-with-different-credential") {
        // Email registered with a different provider
        const methods = await fetchSignInMethodsForEmail(auth, email).catch(() => [] as string[]);
        if (methods.includes("google.com")) {
          setError("This email is registered with Google. Please use 'Continue with Google' below.");
        } else {
          setError("This email is already registered. Please sign in.");
        }
      } else {
        setError(getFriendlyError(authErr.code));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setInfoMsg("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err) {
      const authErr = err as AuthError;

      // Same email exists with email/password — offer to link accounts
      if (authErr.code === "auth/account-exists-with-different-credential") {
        const credential = GoogleAuthProvider.credentialFromError(authErr);
        if (credential) {
          setPendingCred(credential);
          // Extract email from error if available
          const errEmail = (authErr as any).customData?.email ?? "";
          if (errEmail) setEmail(errEmail);
          setInfoMsg(
            "This email is already registered with a password. " +
            "Enter your password below — your accounts will be linked automatically."
          );
        } else {
          setError("This email is already registered with a different sign-in method.");
        }
      } else {
        setError(getFriendlyError(authErr.code));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Welcome back
        </h2>
        <p className="text-[15px] text-gray-500">
          Continue your typing journey and track your speed.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-sm border border-gray-100 sm:rounded-[2rem] sm:px-10">

          {/* Error message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Info/linking message */}
          {infoMsg && (
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-xl text-sm text-blue-700">
              {infoMsg}
            </div>
          )}

          {/* Google Sign In */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-[#f8fafc] border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 text-[15px] font-semibold py-3.5 px-4 rounded-xl transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Image src="/icons/google-auth.svg" alt="Google" width={20} height={20} className="object-contain" />
            Continue with Google
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

          {/* Email/Password Form */}
          <form className="mt-6 space-y-5" onSubmit={handleEmailSignIn}>
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

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-[13px] font-bold text-gray-700">
                  Password
                </label>
                <Link href="/auth/forgot-password" className="text-[12px] font-semibold text-[#126dfb] hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#f8fafc] border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:bg-white focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center bg-[#126dfb] hover:bg-blue-600 text-white text-[16px] font-medium py-3.5 px-8 rounded-xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? "Signing in..." : pendingCred ? "Sign In & Link Accounts" : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-[14px] text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up" className="font-bold text-[#126dfb] hover:text-blue-700">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function getFriendlyError(code: string): string {
  switch (code) {
    case "auth/user-not-found":
    case "auth/invalid-credential":
      return "Incorrect email or password. Please check your credentials and try again.";
    case "auth/wrong-password":
      return "Incorrect password. Try again or use 'Forgot password'.";
    case "auth/too-many-requests":
      return "Too many failed attempts. Please wait a moment and try again.";
    case "auth/user-disabled":
      return "This account has been disabled. Please contact support.";
    case "auth/popup-closed-by-user":
      return "Google sign-in was cancelled.";
    default:
      return "Something went wrong. Please try again.";
  }
}
