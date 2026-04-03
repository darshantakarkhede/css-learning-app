"use client";

import React from "react";

// ============================================================
// TopBar — app header with theme toggle & hamburger
// ============================================================

interface TopBarProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
  onOpenSidebar: () => void;
}

export default function TopBar({ theme, onToggleTheme, onOpenSidebar }: TopBarProps) {
  return (
    <header className="h-14 flex items-center px-4 gap-3 bg-[var(--topbar-bg)] border-b border-[var(--border)] shadow-sm z-10 flex-shrink-0">
      {/* Hamburger (mobile only) */}
      <button
        onClick={onOpenSidebar}
        className="lg:hidden text-[var(--text-muted)] hover:text-[var(--text)] transition-colors p-1"
        aria-label="Open sidebar"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Brand */}
      <div className="flex items-center gap-2">
        <span className="text-xl">🎓</span>
        <span className="font-bold text-[var(--text)] hidden sm:block">CSS Learner</span>
        <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full hidden sm:block">
          Interactive
        </span>
      </div>

      <div className="flex-1" />

      {/* Right actions */}
      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--hover-bg)] transition-colors text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          {theme === "light" ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </button>

        {/* GitHub link */}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
          title="MDN CSS Reference"
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-[var(--hover-bg)] transition-colors text-[var(--text-muted)] hover:text-[var(--text)]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </a>
      </div>
    </header>
  );
}
