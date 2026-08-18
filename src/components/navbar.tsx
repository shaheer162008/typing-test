"use client";

import { useState, type MouseEvent, type KeyboardEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";
import { useAuth } from "@/context/AuthContext";

// Using proper SVG icons instead of text placeholders
const hamburgerIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);
const closeIcon = (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") closeMenu();
  };

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isMenuOpen) closeMenu();
  };

  const handleSignOut = async () => {
    await signOut();
    setIsUserMenuOpen(false);
    router.push("/");
  };

  return (
    <nav className="bg-white border-b border-gray-100 relative z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
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
        <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2 w-max" role="menubar">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                className={`text-[15px] whitespace-nowrap transition-colors ${
                  isActive ? "text-black font-bold" : "text-gray-500 font-medium hover:text-black"
                }`}
                onClick={handleLinkClick}
              >
                {link.name}
              </Link>
            );
          })}
          {/* Dashboard link only for logged in users */}
          {user && (
            <Link
              href="/dashboard"
              role="menuitem"
              className={`text-[15px] whitespace-nowrap transition-colors ${
                pathname.startsWith("/dashboard") ? "text-black font-bold" : "text-gray-500 font-medium hover:text-black"
              }`}
              onClick={handleLinkClick}
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Desktop CTA / User Menu */}
        <div className="hidden lg:flex items-center gap-3">
          {user ? (
            <div 
              className="relative"
              onMouseEnter={() => setIsUserMenuOpen(true)}
              onMouseLeave={() => setIsUserMenuOpen(false)}
            >
              <button
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                className="flex items-center gap-2 px-1 py-1 rounded-full hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-[#126dfb] border border-transparent hover:border-gray-200"
              >
                {user.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt={user.displayName ?? "User"}
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-9 h-9 rounded-full bg-[#126dfb] flex items-center justify-center text-white text-[14px] font-bold">
                    {user.displayName?.[0]?.toUpperCase() ?? user.email?.[0]?.toUpperCase() ?? "U"}
                  </div>
                )}
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 top-full pt-2 z-50">
                  <div className="min-w-[200px] w-max max-w-sm bg-white border border-gray-100 shadow-xl rounded-xl py-2">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="text-[14px] font-bold text-gray-900 break-words">
                        {user.displayName || "Typist"}
                      </p>
                      <p className="text-[13px] font-medium text-gray-500 mt-0.5 break-words">
                        {user.email}
                      </p>
                    </div>
                    
                    {isAdmin && (
                      <Link
                        href="/admin"
                        className="block px-4 py-2 mt-1 text-[14px] font-medium text-gray-700 hover:bg-gray-50"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        Admin Panel
                      </Link>
                    )}
                    
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 mt-1 text-[14px] font-bold text-red-600 hover:bg-red-50"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/auth/sign-in"
              className="flex items-center px-6 py-2.5 bg-[#126dfb] hover:bg-blue-600 text-white text-[15px] font-medium rounded-lg transition-all shadow-sm"
              onClick={handleLinkClick}
            >
              Sign In
            </Link>
          )}
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={handleLinkClick}
                className={`text-[15px] transition-colors ${
                  isActive ? "text-black font-bold" : "text-gray-600 font-medium hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          {user && (
            <Link
              href="/dashboard"
              role="menuitem"
              onClick={handleLinkClick}
              className={`text-[15px] transition-colors ${
                pathname.startsWith("/dashboard") ? "text-black font-bold" : "text-gray-600 font-medium hover:text-black"
              }`}
            >
              Dashboard
            </Link>
          )}

          <div className="mt-4 flex flex-col gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl mb-2">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName ?? "User"}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#126dfb] flex items-center justify-center text-white text-[15px] font-bold shrink-0">
                      {user.displayName?.[0]?.toUpperCase() ?? user.email?.[0]?.toUpperCase() ?? "U"}
                    </div>
                  )}
                  <div className="overflow-hidden">
                    <p className="text-[14px] font-bold text-gray-900 truncate">
                      {user.displayName || "Typist"}
                    </p>
                    <p className="text-[13px] font-medium text-gray-500 truncate mt-0.5">
                      {user.email}
                    </p>
                  </div>
                </div>
                {isAdmin && (
                  <Link href="/admin" onClick={closeMenu} className="text-[15px] font-medium text-gray-700 px-4">
                    Admin Panel
                  </Link>
                )}
                <div className="border-t border-gray-100 my-1" />
                <button
                  onClick={handleSignOut}
                  className="text-center text-[15px] font-bold text-red-600 px-4 py-2"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                href="/auth/sign-in"
                onClick={handleLinkClick}
                className="flex items-center justify-center px-6 py-3 bg-[#126dfb] hover:bg-blue-600 text-white text-[15px] font-medium rounded-lg transition-all shadow-sm"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}