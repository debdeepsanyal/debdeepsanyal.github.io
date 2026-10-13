"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const storageKey = "theme";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(storageKey);
      } catch {
        // System preference still works when storage is unavailable.
      }
      const next = saved === "dark" || (saved !== "light" && preference.matches);
      document.documentElement.classList.toggle("dark", next);
      setDark(next);
    };
    sync();
    preference.addEventListener("change", sync);
    window.addEventListener("storage", sync);
    return () => {
      preference.removeEventListener("change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    setDark(next);
    try {
      localStorage.setItem(storageKey, next ? "dark" : "light");
    } catch {
      // The toggle remains functional without persistent storage.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Dark mode"
      aria-pressed={dark}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs text-foreground hover:border-foreground transition-colors"
    >
      <Moon size={15} aria-hidden="true" className="theme-icon-dark" />
      <Sun size={15} aria-hidden="true" className="theme-icon-light" />
      <span>Theme</span>
    </button>
  );
}
