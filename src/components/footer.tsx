import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Tests & Practice",
    links: [
      { name: "Typing Test", href: "/typing-test" },
      { name: "Typing Practice", href: "/typing-practice" },
      { name: "Word Typing", href: "/word-typing" },
      { name: "Leaderboard", href: "/leaderboard" },
      { name: "Certificates", href: "/certificates" }
    ]
  },
  {
    title: "Learn & Improve",
    links: [
      { name: "WPM Guide", href: "/wpm-guide" },
      { name: "Typing Tips", href: "/tips" },
      { name: "Blog", href: "/blogs" },
      { name: "FAQs", href: "/faqs" },
      { name: "Dashboard", href: "/dashboard" }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" }
    ]
  }
];

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com", icon: "/icons/facebook.svg" },
  { name: "Instagram", href: "https://instagram.com", icon: "/icons/instagram.svg" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "/icons/linkedin.svg" },
  { name: "Email", href: "mailto:info@typingtestskill.com", icon: "/icons/email.svg" }
];

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

            <div className="flex flex-col items-start gap-4">
              <Link
                href="/auth/sign-in"
                className="inline-block bg-[#126dfb] hover:bg-blue-600 text-white text-[14px] font-medium py-2.5 px-5 rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#126dfb] focus-visible:ring-offset-2"
              >
                Sign In with Google
              </Link>

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 mt-1">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-[#f8fafc] border border-gray-200 flex items-center justify-center hover:bg-[#126dfb] hover:border-[#126dfb] transition-all group shadow-2xs"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      width={18}
                      height={18}
                      className="w-[18px] h-[18px] object-contain transition-all brightness-0 opacity-75 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert"
                    />
                  </a>
                ))}
              </div>
            </div>
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
            &copy; 2026 Typing Test Skill. All rights reserved.
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
