import { BadgeCheck, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6">
        {/* CERTYFIKATY */}
        <div className="border-b border-white/10 py-10 md:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-white/55">
                Certyfikaty i programy
              </p>

              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75">
                Kompetencje rozwijane w obszarze strategii marketingowej,
                komunikacji, email marketingu i praktycznego wykorzystania AI.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* LINKEDIN */}
              <a
                href="https://verify.skilljar.com/c/zak7b7u7mapy"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center gap-2
                  rounded-full border border-white/15
                  bg-white/[0.06]
                  px-4 py-2.5
                  text-sm text-white/85
                  transition-all duration-300
                  hover:border-white/30
                  hover:bg-white/[0.1]
                  hover:text-white
                "
                aria-label="Zobacz certyfikat LinkedIn Marketing Strategy"
              >
                <BadgeCheck className="h-4 w-4 text-white/60 transition-colors group-hover:text-white" />
                <span>LinkedIn Marketing Strategy</span>
              </a>

              {/* HUBSPOT */}
              <a
                href="/certyfikaty/certyfikat%20hubspot.png"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center gap-2
                  rounded-full border border-white/15
                  bg-white/[0.06]
                  px-4 py-2.5
                  text-sm text-white/85
                  transition-all duration-300
                  hover:border-white/30
                  hover:bg-white/[0.1]
                  hover:text-white
                "
                aria-label="Zobacz certyfikat HubSpot Email Marketing"
              >
                <BadgeCheck className="h-4 w-4 text-white/60 transition-colors group-hover:text-white" />
                <span>HubSpot Email Marketing</span>
              </a>

              {/* UMIEJĘTNOŚCI JUTRA */}
              <a
                href="/certyfikaty/umiejetnosci-jutra-ai-2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-center gap-2
                  rounded-full border border-white/15
                  bg-white/[0.06]
                  px-4 py-2.5
                  text-sm text-white/85
                  transition-all duration-300
                  hover:border-white/30
                  hover:bg-white/[0.1]
                  hover:text-white
                "
                aria-label="Zobacz certyfikat Umiejętności Jutra AI 2.0"
              >
                <BadgeCheck className="h-4 w-4 text-white/60 transition-colors group-hover:text-white" />
                <span>Google + SGH · Umiejętności Jutra AI 2.0</span>
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-[1fr_auto] md:items-center">
          <p className="text-center text-sm text-white/60 md:text-left">
            © {currentYear} Digitilio. Wszystkie prawa zastrzeżone.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
            <a
              href="/polityka-prywatnosci"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Polityka prywatności
            </a>

            <a
              href="/polityka-cookies"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Polityka plików cookies
            </a>

            <a
              href="https://www.linkedin.com/in/ela-chabko/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-9 w-9 items-center justify-center
                rounded-full border border-white/15
                text-white/70
                transition-all duration-300
                hover:border-white/30
                hover:bg-white/10
                hover:text-white
              "
              aria-label="Profil LinkedIn Ela Chabko"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
