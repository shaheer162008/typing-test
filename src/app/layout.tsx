import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { HeaderWrapper, FooterWrapper } from "@/components/LayoutWrapper";
import { AuthProvider } from "@/context/AuthContext";
import Script from "next/script";

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
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1CK5QE9CBB`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1CK5QE9CBB', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${jakarta.className} min-h-screen flex flex-col`}>
          <AuthProvider>
            <HeaderWrapper />
            <main className="flex-1">{children}</main>
            <FooterWrapper />
          </AuthProvider>
        </body>
    </html>
  );
}