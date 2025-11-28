"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg transition-all duration-300 hover:shadow-xl">
      {/* Light Mode Button */}
      <button
        onClick={() => setTheme("light")}
        className={`flex items-center justify-center transition-all duration-300 ${
          theme === "light"
            ? "text-primary-default scale-110"
            : "text-muted-foreground hover:text-primary-default/70"
        }`}
        aria-label="Switch to light mode"
      >
        <FiSun size={20} />
      </button>

      {/* Divider */}
      <div className="w-[1px] h-4 bg-border" />

      {/* Dark Mode Button */}
      <button
        onClick={() => setTheme("dark")}
        className={`flex items-center justify-center transition-all duration-300 ${
          theme === "dark"
            ? "text-primary-default scale-110"
            : "text-muted-foreground hover:text-primary-default/70"
        }`}
        aria-label="Switch to dark mode"
      >
        <FiMoon size={20} />
      </button>
    </div>
  );
};

export default ThemeToggle;
