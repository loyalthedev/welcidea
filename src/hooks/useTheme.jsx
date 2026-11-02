import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";

const STORAGE_KEY = "welcidea-theme";

export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("light")
      ? "light"
      : "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      /* storage unavailable — theme still applies for this visit */
    }
  }, [theme]);

  // Toggle with a circular wipe that spreads out from the clicked control.
  const toggle = useCallback((origin) => {
    const next = document.documentElement.classList.contains("light")
      ? "dark"
      : "light";
    const root = document.documentElement;

    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }

    const x = origin?.x ?? window.innerWidth - 48;
    const y = origin?.y ?? 40;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    root.style.setProperty("--theme-origin-x", `${x}px`);
    root.style.setProperty("--theme-origin-y", `${y}px`);
    root.style.setProperty("--theme-radius", `${radius}px`);

    document.startViewTransition(() => {
      flushSync(() => {
        root.classList.toggle("light", next === "light");
        setTheme(next);
      });
    });
  }, []);

  return { theme, toggle };
}
