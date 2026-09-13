import { useState } from "react";
import { BRAND_GRADIENT_BG, BRAND_GRADIENT_TEXT } from "../utils/brand";
import logo from "../assets/logo-text.png"

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[81px] max-w-7xl items-center justify-between px-6">
        {/* Left: Brand logo (mobile: hamburger first) */}
        <div className="flex items-center gap-3">
          <button
            className="mr-1 flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <a href="#home" className="flex items-center gap-2">
            <span>
              <img src={logo} alt="Logo" />
            </span>
          </a>
        </div>

        {/* Center: Nav links (desktop only) */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActiveLink(link)}
              className={`text-sm font-semibold transition-colors ${
                activeLink === link ? "text-pink-600" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: Auth controls */}
        <div className="flex items-center gap-3">
          <button className="font-heading hidden text-sm font-bold text-slate-600 hover:text-slate-900 sm:inline">
            Sign In
          </button>
          <button
            className={`font-heading rounded-full ${BRAND_GRADIENT_BG} px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-pink-200 transition-opacity hover:opacity-90`}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-slate-100 bg-white px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => {
                setActiveLink(link);
                setMenuOpen(false);
              }}
              className={`rounded-lg px-3 py-2 text-sm font-semibold ${
                activeLink === link
                  ? "bg-pink-50 text-pink-600"
                  : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
