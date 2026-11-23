import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Po zmianie podstrony przewija na górę.
 * Jeśli adres ma kotwicę (np. /systemy-dla-firm#ai-dla-firm), przewija do tej sekcji.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      const timer = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname, hash]);

  return null;
};
