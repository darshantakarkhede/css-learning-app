"use client";

import { useState, useEffect, useCallback } from "react";

// ============================================================
// useTheme — dark / light mode toggle, persisted to localStorage
// ============================================================

type Theme = "light" | "dark";
const THEME_KEY = "css-learner-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Load saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    const preferred: Theme =
      saved ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "light" ? "dark" : "light";
      localStorage.setItem(THEME_KEY, next);
      document.documentElement.setAttribute("data-theme", next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
