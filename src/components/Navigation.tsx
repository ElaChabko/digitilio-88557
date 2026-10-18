import type React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logo from "@/assets/logo-nav.webp";
import { ContactFormDialog } from "@/components/ContactFormDialog";

type NavItem =
  | {
      label: string;
      type: "section";
      id: string;
    }
  | {
      label: string;
      type: "route";
      path: string;
    };

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems: NavItem[] = [
    {
      label: "Usługi",
      type: "section",
      id: "services",
    },
    {
      label: "Jak pracuję",
      type: "section",
      id: "process",
    },
    {
      label: "Współprace",
      type: "route",
      path: "/wspolprace",
    },
    {
      label: "O mnie",
      type: "section",
      id: "about",
    },
    {
      label: "Baza wiedzy",
      type: "route",
      path: "/baza-wiedzy",
    },
  ];

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);

      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const goToRoute = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goHome = () => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavItem = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: NavItem
  ) => {
    // Pozwól otworzyć link w nowej karcie (Ctrl/Cmd + klik)
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
      return;
    }

    event.preventDefault();

    if (item.type === "route") {
      goToRoute(item.path);
      return;
    }

    scrollToSection(item.id);
  };

  /**
   * Prawdziwe adresy w href – roboty mogą przejść po menu,
   * a kliknięcie działa jak wcześniej (płynne przewijanie / nawigacja).
   */
  const hrefFor = (item: NavItem) =>
    item.type === "route" ? item.path : `/#${item.id}`;

  const openContactForm = () => {
    setIsContactFormOpen(true);
    setIsMobileMenuOpen(false);
  };

  const isRouteActive = (path: string) => {
    /**
     * Baza wiedzy ma być aktywna zarówno na:
     * /baza-wiedzy
     * jak i na istniejących artykułach /blog/:slug
     */
    if (path === "/baza-wiedzy") {
      return (
        location.pathname === "/baza-wiedzy" ||
        location.pathname.startsWith("/blog/")
      );
    }

    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-border/50 bg-background/95 shadow-lg backdrop-blur-xl"
            : "bg-background/80 shadow-md backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-5">
          {/* LOGO */}
          <Link
            to="/"
            onClick={(event) => {
              event.preventDefault();
              goHome();
            }}
            className="transition-all duration-300 hover:scale-105 hover:opacity-80"
            aria-label="Przejdź na stronę główną Digitilio"
          >
            <img
              src={logo}
              alt="Digitilio"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const key =
                item.type === "route" ? item.path : item.id;

              const isActiveRoute =
                item.type === "route" &&
                isRouteActive(item.path);

              return (
                <a
                  key={key}
                  href={hrefFor(item)}
                  onClick={(event) => handleNavItem(event, item)}
                  className={`group relative text-sm font-medium tracking-wide transition-all duration-300 ${
                    isActiveRoute
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 ${
                      isActiveRoute
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              );
            })}

            <a
              href="/en"
              hrefLang="en"
              lang="en"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              aria-label="English version"
            >
              EN
            </a>

            <Button
              variant="hero"
              onClick={openContactForm}
              className="bg-primary text-gray-50 transition-all duration-300 hover:scale-105 hover:bg-primary/90 hover:shadow-lg"
            >
              Skontaktuj się
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            className="text-foreground transition-colors md:hidden"
            onClick={() =>
              setIsMobileMenuOpen((prev) => !prev)
            }
            aria-label={
              isMobileMenuOpen
                ? "Zamknij menu"
                : "Otwórz menu"
            }
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="container mx-auto flex flex-col gap-4 px-4 py-5">
              {navItems.map((item) => {
                const key =
                  item.type === "route"
                    ? item.path
                    : item.id;

                const isActiveRoute =
                  item.type === "route" &&
                  isRouteActive(item.path);

                return (
                  <a
                    key={key}
                    href={hrefFor(item)}
                    onClick={(event) => handleNavItem(event, item)}
                    className={`text-left text-sm font-medium transition-colors ${
                      isActiveRoute
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <a
                href="/en"
                hrefLang="en"
                lang="en"
                className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                English
              </a>

              <Button
                variant="hero"
                onClick={openContactForm}
                className="mt-2 w-full bg-primary text-gray-50 hover:bg-primary/90"
              >
                Skontaktuj się
              </Button>
            </div>
          </div>
        )}
      </nav>

      <ContactFormDialog
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </>
  );
};
