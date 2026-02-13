import { Linkedin } from "lucide-react";
import badgeContent from "@/assets/1.webp";
import badgeFundamentals from "@/assets/2.webp";
import badgeStrategy from "@/assets/3.webp";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* LEFT */}
          <p className="text-sm">
            © {currentYear} Digitilio. Wszystkie prawa zastrzeżone.
          </p>

          {/* BADGES */}
          <div className="flex gap-4 items-center">
            <a
              href="https://verify.skilljar.com/c/6cwoxoibxdxa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Marketing Labs – Content & Creative Design"
            >
              <img
                src={badgeContent}
                alt="LinkedIn Marketing Labs – Content & Creative Design"
                className="h-18 w-auto opacity-80 hover:opacity-100 transition"
                loading="lazy"
              />
            </a>

            <a
              href="https://verify.skilljar.com/c/vdsyqw26eqnt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Marketing Labs – Marketing Fundamentals"
            >
              <img
                src={badgeFundamentals}
                alt="LinkedIn Marketing Labs – Marketing Fundamentals"
                className="h-18 w-auto opacity-80 hover:opacity-100 transition"
                loading="lazy"
              />
            </a>

            <a
              href="https://verify.skilljar.com/c/zak7b7u7mapy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Marketing Labs – Marketing Strategy"
            >
              <img
                src={badgeStrategy}
                alt="LinkedIn Marketing Labs – Marketing Strategy"
                className="h-18 w-auto opacity-80 hover:opacity-100 transition"
                loading="lazy"
              />
            </a>
          </div>

          {/* RIGHT */}
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
