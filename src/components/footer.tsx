import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-6 lg:px-8 border-t border-gray-100" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Brand Section */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="Typing Test Skill Home">
              <Image
                src="/icons/keyboard_logo.png"
                alt=""
                width={32}
                height={32}
                className="w-8 h-8"
                aria-hidden="true"
              />
              <span className="text-xl font-bold text-black tracking-tight">Typing Test Skill</span>
            </Link>

            <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
              Free online typing test. Improve your speed, earn certificates, and track progress.
            </p>

            <button
              type="button"
              className="bg-[#126dfb] hover:bg-blue-600 text-white text-[14px] font-medium py-2.5 px-5 rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#126dfb] focus-visible:ring-offset-2"
            >
              Sign In with Google
            </button>
          </div>

          {/* Links Grid */}
          <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16 w-full lg:w-auto" aria-label="Footer navigation">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h3 className="text-[16px] font-semibold text-black mb-5">{section.title}</h3>
                <ul className="flex flex-col gap-3.5" role="list">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-gray-500 hover:text-[#126dfb] transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
  {/* Left side */}
  <p className="text-[14px] text-gray-600">
    © 2026 Typing Test Skill. All rights reserved.
  </p>

  {/* Right side */}
  <p className="text-[14px] text-gray-600">
    Developed by team{" "}
    <a
      href="https://www.nexiler.tech"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[#126dfb] hover:underline transition-all"
    >
      Nexiler
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}