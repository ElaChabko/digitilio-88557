import { BadgeCheck, Linkedin, Mail } from "lucide-react";

import logoWhite from "@/assets/logo-white.png";
import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/consent";

const CERTIFICATES = [
  {
    href: "https://verify.skilljar.com/c/zak7b7u7mapy",
    label: "LinkedIn Marketing Strategy",
    external: true,
  },
  {
    href: "/certyfikaty/certyfikat%20hubspot.png",
    label: "HubSpot Email Marketing",
  },
  {
    href: "/certyfikaty/umiejetnosci-jutra-ai-2.pdf",
    label: "Google + SGH · Umiejętności Jutra AI 2.0",
  },
  {
    href: "/certyfikaty/ai-visibility-brand24-chatbeat.pdf",
    label: "Brand24 + Chatbeat · AI Visibility / GEO",
  },
];

const COPY = {
  pl: {
    tagline: "Mniej przypadkowych działań. Więcej dobrych decyzji marketingowych.",
    pages: "Strona",
    links: [
      { href: "/#services", label: "Usługi" },
      { href: "/#process", label: "Jak pracuję" },
      { href: "/wspolprace", label: "Współprace" },
      { href: "/#about", label: "O mnie" },
      { href: "/baza-wiedzy", label: "Baza wiedzy" },
      { href: "/en", label: "English" },
    ],
    contact: "Kontakt",
    certs: "Certyfikaty i programy",
    rights: "Wszystkie prawa zastrzeżone.",
    privacy: "Polityka prywatności",
    cookies: "Polityka plików cookies",
    cookieSettings: "Ustawienia cookies",
  },
  en: {
    tagline: "Fewer random tactics. Better marketing decisions.",
    pages: "Pages",
    links: [
      { href: "/en#services", label: "Services" },
      { href: "/en#process", label: "Process" },
      { href: "/en#about", label: "About" },
      { href: "/", label: "Polski" },
    ],
    contact: "Contact",
    certs: "Certificates",
    rights: "All rights reserved.",
    privacy: "Privacy Policy (PL)",
    cookies: "Cookie Policy (PL)",
    cookieSettings: "Cookie settings",
  },
};

export const Footer = ({ lang = "pl" }: { lang?: "pl" | "en" }) => {
  const t = COPY[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-plum pb-28 text-white sm:pb-32">
      <div className="container mx-auto px-4 pt-20 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.3fr_0.7fr_0.9fr] lg:gap-16">
            {/* Marka */}
            <div>
              <img
                src={logoWhite}
                alt="Digitilio"
                width={140}
                height={108}
                className="h-16 w-auto opacity-95"
                loading="lazy"
              />
              <p className="mt-8 max-w-md text-2xl font-semibold leading-snug tracking-[-0.02em] text-white sm:text-3xl">
                {t.tagline}
              </p>
            </div>

            {/* Linki */}
            <div>
              <p className="text-sm font-medium text-white/50">{t.pages}</p>
              <ul className="mt-5 space-y-3">
                {t.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-base text-white/85 transition-colors hover:text-lilac"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontakt + certyfikaty */}
            <div>
              <p className="text-sm font-medium text-white/50">{t.contact}</p>
              <div className="mt-5 space-y-3">
                <a
                  href="mailto:elachabko@digitilio.pl"
                  className="flex items-center gap-3 text-base text-white/85 transition-colors hover:text-lilac"
                >
                  <Mail className="h-4 w-4 text-lilac" />
                  elachabko@digitilio.pl
                </a>
                <a
                  href="https://www.linkedin.com/in/ela-chabko/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-white/85 transition-colors hover:text-lilac"
                >
                  <Linkedin className="h-4 w-4 text-lilac" />
                  LinkedIn
                </a>
              </div>

              <p className="mt-10 text-sm font-medium text-white/50">{t.certs}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {CERTIFICATES.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-white/75 transition-colors hover:border-white/35 hover:text-white"
                  >
                    <BadgeCheck className="h-3.5 w-3.5 text-lilac" />
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <p>
              © {year} Digitilio. {t.rights}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <a href="/polityka-prywatnosci" className="transition-colors hover:text-white">
                {t.privacy}
              </a>
              <a href="/polityka-cookies" className="transition-colors hover:text-white">
                {t.cookies}
              </a>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
                className="transition-colors hover:text-white"
              >
                {t.cookieSettings}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Duży napis marki na dole */}
      <p
        aria-hidden="true"
        className="pointer-events-none mt-10 select-none whitespace-nowrap text-center text-[22vw] font-semibold leading-[0.8] tracking-[-0.06em] text-white/[0.05]"
      >
        digitilio
      </p>
    </footer>
  );
};
