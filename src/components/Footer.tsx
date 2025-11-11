import { Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {currentYear} Digitilio. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="/polityka-prywatnosci" 
              className="text-sm hover:text-accent transition-colors"
            >
              Polityka prywatności
            </a>
                <a 
              href="/polityka-cookies" 
              className="text-sm hover:text-accent transition-colors"
            >
              Polityka plików cookies
            </a>
            <a 
              href="https://www.linkedin.com/in/ela-chabko/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
