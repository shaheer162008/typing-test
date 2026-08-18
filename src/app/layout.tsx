import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { AuthProvider } from "@/context/AuthContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jakarta",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Typing Test Skill - Free Online Typing Test & Certification",
  description: "Free online typing test to improve your WPM speed and accuracy. Track progress, earn certificates, and master typing with Typing Test Skill.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} antialiased`}>
      <body className={`${jakarta.className} min-h-screen flex flex-col`}>
          <AuthProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </AuthProvider>
        </body>
    </html>
  );
}