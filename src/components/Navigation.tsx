import type React from "react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Menu, X } from "lucide-react";

import logoPurple from "@/assets/logo-purple.png";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { EASE } from "@/components/site/motion";

/**
 * Nawigacja w stylu Jetona:
 * - u góry: logo w jasnej pigułce + przycisk kontaktu,
 * - na dole ekranu: pływająca fioletowa pigułka z linkami (desktop)
 *   lub z przyciskiem „Menu” (telefon).
 */

type NavItem =
  | { label: string; type: "section"; id: string }
  | { label: string; type: "route"; path: string };

type Lang = "pl" | "en";

const ITEMS: Record<Lang, NavItem[]> = {
  pl: [
    { label: "Usługi", type: "section", id: "services" },
    { label: "Jak pracuję", type: "section", id: "process" },
    { label: "Współprace", type: "route", path: "/wspolprace" },
    { label: "O mnie", type: "section", id: "about" },
    { label: "Baza wiedzy", type: "route", path: "/baza-wiedzy" },
  ],
  en: [
    { label: "Services", type: "section", id: "services" },
    { label: "Process", type: "section", id: "process" },
    { label: "Work", type: "section", id: "work" },
    { label: "About", type: "section", id: "about" },
  ],
};

const COPY = {
  pl: {
    contact: "Skontaktuj się",
    menu: "Menu",
    close: "Zamknij menu",
    home: "Strona główna",
    switchLabel: "EN",
    switchHref: "/en",
    switchHrefLang: "en",
    homePath: "/",
  },
  en: {
    contact: "Contact",
    menu: "Menu",
    close: "Close menu",
    home: "Home",
    switchLabel: "PL",
    switchHref: "/",
    switchHrefLang: "pl",
    homePath: "/en",
  },
};

export const Navigation = ({
  lang = "pl",
  onContact,
}: {
  lang?: Lang;
  /** Własna akcja kontaktu (np. przewinięcie do formularza na /en) */
  onContact?: () => void;
}) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const t = COPY[lang];
  const items = ITEMS[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location.pathname]);

  const scrollToSection = (id: string) => {
    const go = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (location.pathname !== t.homePath) {
      navigate(`${t.homePath}#${id}`);
      window.setTimeout(go, 200);
    } else {
      go();
    }
  };

  const hrefFor = (item: NavItem) =>
    item.type === "route" ? item.path : `${t.homePath === "/" ? "/" : t.homePath}#${item.id}`;

  const onItem = (event: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    setIsMenuOpen(false);
    if (item.type === "route") {
      navigate(item.path);
      window.scrollTo({ top: 0 });
    } else {
      scrollToSection(item.id);
    }
  };

  const isActive = (item: NavItem) => {
    if (item.type !== "route") return false;
    if (item.path === "/baza-wiedzy") {
      return location.pathname === "/baza-wiedzy" || location.pathname.startsWith("/blog/");
    }
    return location.pathname === item.path || location.pathname.startsWith(`${item.path}/`);
  };

  const openContact = () => {
    setIsMenuOpen(false);
    if (onContact) onContact();
    else setIsContactOpen(true);
  };

  return (
    <>
      {/* GÓRNY PASEK */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            to={t.homePath}
            aria-label={t.home}
            className={`pointer-events-auto flex items-center rounded-2xl bg-white/85 px-3 py-2 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] ${
              scrolled ? "shadow-[0_8px_30px_-12px_hsl(263_40%_20%/0.35)]" : ""
            }`}
          >
            <img src={logoPurple} alt="Digitilio" width={64} height={49} className="h-9 w-auto sm:h-10" />
          </Link>

          <div className="pointer-events-auto flex items-center gap-2">
            <a
              href={t.switchHref}
              hrefLang={t.switchHrefLang}
              lang={t.switchHrefLang}
              className="hidden h-11 items-center rounded-full bg-white/85 px-4 text-sm font-semibold text-violet backdrop-blur-md transition-colors hover:bg-white sm:flex"
            >
              {t.switchLabel}
            </a>
            <button
              type="button"
              onClick={openContact}
              className="hidden h-11 rounded-full bg-violet px-5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_hsl(263_50%_30%/0.6)] transition-colors hover:bg-violet-bright md:block"
            >
              {t.contact}
            </button>
          </div>
        </div>
      </header>

      {/* DOLNA PIGUŁKA */}
      <nav
        aria-label="Nawigacja główna"
        className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6"
      >
        <div className="relative">
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.97 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="absolute bottom-[calc(100%+10px)] left-1/2 w-[min(88vw,340px)] -translate-x-1/2 overflow-hidden rounded-3xl bg-violet p-2 shadow-2xl ring-1 ring-white/15"
              >
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={hrefFor(item)}
                    onClick={(e) => onItem(e, item)}
                    className={`block rounded-2xl px-5 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-white/10 ${
                      isActive(item) ? "bg-white/15" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={t.switchHref}
                  hrefLang={t.switchHrefLang}
                  className="block rounded-2xl px-5 py-3.5 text-lg font-semibold text-white/70 transition-colors hover:bg-white/10"
                >
                  {lang === "pl" ? "English" : "Polski"}
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-1 rounded-full bg-violet p-1.5 text-white shadow-[0_18px_50px_-15px_hsl(263_60%_20%/0.7)] ring-1 ring-white/15">
            <Link
              to={t.homePath}
              aria-label={t.home}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-colors hover:bg-white/25"
            >
              <Home className="h-4 w-4" />
            </Link>

            {/* Desktop: wszystkie linki */}
            <div className="hidden items-center md:flex">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={hrefFor(item)}
                  onClick={(e) => onItem(e, item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-white/15 ${
                    isActive(item) ? "bg-white/15" : "text-white/90"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Telefon: menu */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? t.close : t.menu}
              className="flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors hover:bg-white/15 md:hidden"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              {t.menu}
            </button>

            <button
              type="button"
              onClick={openContact}
              className="flex h-10 items-center rounded-full bg-white px-4 text-sm font-semibold text-violet transition-colors hover:bg-lilac-soft md:hidden"
            >
              {t.contact}
            </button>
          </div>
        </div>
      </nav>

      {!onContact && (
        <ContactFormDialog
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      )}
    </>
  );
};
