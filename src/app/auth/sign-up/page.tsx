"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  type AuthError,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export default function SignUp() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const createUserDocument = async (uid: string, data: Record<string, unknown>) => {
    await setDoc(doc(db, "users", uid), {
      ...data,
      role: "user", // default role — change to "admin" manually in Firestore to promote
      createdAt: serverTimestamp(),
    });
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      // Set display name
      await updateProfile(user, { displayName: `${firstName} ${lastName}` });

      // Create Firestore user document
      await createUserDocument(user.uid, {
        firstName,
        lastName,
        email,
        displayName: `${firstName} ${lastName}`,
        photoURL: null,
      });

      router.push("/dashboard");
    } catch (err) {
      const authErr = err as AuthError;
      setError(getFriendlyError(authErr.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);

      // Create Firestore doc only if first time (don't overwrite existing)
      const { getDoc } = await import("firebase/firestore");
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        await createUserDocument(user.uid, {
          firstName: user.displayName?.split(" ")[0] ?? "",
          lastName: user.displayName?.split(" ").slice(1).join(" ") ?? "",
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      }

      router.push("/dashboard");
    } catch (err) {
      const authErr = err as AuthError;
      setError(getFriendlyError(authErr.code));
    } finally {
      setLoading(false);
    }
  };

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

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Google Sign Up */}
          <button
            onClick={handleGoogleSignUp}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-[#f8fafc] border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700 text-[15px] font-semibold py-3.5 px-4 rounded-xl transition-all shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
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
          <form className="mt-6 space-y-5" onSubmit={handleSignUp}>
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
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#f8fafc] border border-gray-200 text-gray-900 text-[15px] rounded-xl px-4 py-3.5 focus:outline-none focus:bg-white focus:border-[#126dfb] focus:ring-1 focus:ring-[#126dfb] transition-all placeholder:text-gray-400 shadow-sm"
              />
              <p className="mt-1 text-[12px] text-gray-400">Minimum 6 characters</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center bg-[#126dfb] hover:bg-blue-600 text-white text-[16px] font-medium py-3.5 px-8 rounded-xl transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 mt-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? "Creating account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-[14px] text-gray-500">
            Already have an account?{" "}
            <Link href="/auth/sign-in" className="font-bold text-[#126dfb] hover:text-blue-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function getFriendlyError(code: string): string {
  switch (code) {
    case "auth/email-already-in-use":
      return "An account already exists with this email. Try signing in instead.";
    case "auth/weak-password":
      return "Password is too weak. Use at least 6 characters.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/popup-closed-by-user":
      return "Google sign-up was cancelled.";
    default:
      return "Something went wrong. Please try again.";
  }
}
