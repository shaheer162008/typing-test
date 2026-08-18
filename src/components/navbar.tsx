"use client";

import { useState, type MouseEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/constants";

// Missing icons - using text placeholders until PNG assets are provided
// Missing: start-icon.png, menu-icon.png, close-icon.png
const startIcon = <span className="text-[10px] font-bold" aria-hidden="true">▶</span>;
const hamburgerIcon = <span className="text-[14px] font-bold" aria-hidden="true">≡</span>;
const closeIcon = <span className="text-[14px] font-bold" aria-hidden="true">✕</span>;
const mobileCTAIcon = <span className="text-[10px] font-bold" aria-hidden="true">▶</span>;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") closeMenu();
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isMenuOpen) closeMenu();
  };

  return (
    <nav className="bg-white border-b border-gray-100 relative z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="Typing Test Skill Home">
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

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              className="text-[15px] font-medium text-gray-500 hover:text-black transition-colors"
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/typing-test"
            className="flex items-center gap-1.5 px-5 py-2.5 bg-[#126dfb] hover:bg-blue-600 text-white text-[15px] font-medium rounded-lg transition-all shadow-sm"
            onClick={handleLinkClick}
          >
            {startIcon}
            Start Free Test
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          onKeyDown={handleKeyDown}
          className="lg:hidden p-2 text-gray-600 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-[#126dfb] rounded-lg"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? closeIcon : hamburgerIcon}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-2 duration-200"
          role="menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={handleLinkClick}
              className="text-[15px] font-medium text-gray-600 hover:text-black"
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-4 flex justify-center">
            <Link
              href="/typing-test"
              onClick={handleLinkClick}
              className="flex items-center gap-1.5 px-6 py-3 bg-[#126dfb] hover:bg-blue-600 text-white text-[15px] font-medium rounded-lg transition-all shadow-sm"
            >
              {mobileCTAIcon}
              Start Free Test
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}