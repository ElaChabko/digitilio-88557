import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { ContactFormDialog } from "@/components/ContactFormDialog";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const openContactForm = () => {
    setIsContactFormOpen(true);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Usługi", id: "services" },
    { label: "Jak pracuję", id: "process" },
    { label: "O mnie", id: "about" },
    { label: "Dla kogo", id: "for-whom" },
    { label: "Korzyści", id: "benefits" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" 
          : "bg-background/80 backdrop-blur-md shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 py-5 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="hover:opacity-80 transition-all duration-300 hover:scale-105"
        >
          <img src={logo} alt="Digitilio" className="h-10 w-auto" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative text-sm font-medium transition-all duration-300 group tracking-wide text-foreground hover:text-primary"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}
          <Button 
            variant="hero" 
            onClick={openContactForm}
            className="transition-all duration-300 hover:scale-105 hover:shadow-lg bg-primary hover:bg-primary/90"
          >
            Skontaktuj się
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden transition-colors text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button variant="hero" onClick={openContactForm} className="w-full">
              Skontaktuj się
            </Button>
          </div>
        </div>
      )}

      <ContactFormDialog 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </nav>
  );
};
