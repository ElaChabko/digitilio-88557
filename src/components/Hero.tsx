import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import heroVisual from "@/assets/hero-visual.jpg";
import heroPortrait from "@/assets/hero-portrait.webp";

// Stałe (deterministyczne) pozycje cząsteczek – identyczne w HTML z buildu
// i po załadowaniu JS, więc nic nie „skacze” przy hydracji.
const particle = (i: number, salt: number) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

// Pasek dowodów pod hasłem – liczby z sekcji „O mnie”
const proof = [
  { value: "20+", label: "marek B2B i B2C" },
  { value: "25+", label: "przeprowadzonych szkoleń" },
  { value: "8+", label: "lat w marketingu" },
  { value: "4", label: "lata wykładów na studiach podyplomowych" },
];

export const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[hsl(263_45%_13%)] text-white"
    >
      {/* Zdjęcie w tle, mocno przygaszone */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroVisual}
          alt=""
          className="h-full w-full object-cover mix-blend-luminosity"
          loading="eager"
          decoding="async"
          style={{ opacity: 0.12 }}
        />
      </div>

      {/* Siatka gradientów w kolorach marki */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(at 15% 10%, hsl(var(--primary) / 0.9) 0px, transparent 45%), radial-gradient(at 85% 15%, hsl(var(--accent) / 0.35) 0px, transparent 45%), radial-gradient(at 70% 85%, hsl(var(--primary) / 0.7) 0px, transparent 50%), radial-gradient(at 0% 90%, hsl(275 50% 30% / 0.6) 0px, transparent 45%)",
        }}
      />

      {/* Cząsteczki */}
      {[...Array(isMobile ? 8 : 26)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute z-[5] h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]"
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          initial={{
            left: `${particle(i, 1) * 100}%`,
            top: `${particle(i, 2) * 100}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.25, 0.7, 0.25] }}
          transition={{
            duration: 3 + particle(i, 3) * 2,
            repeat: Infinity,
            ease: "linear",
            delay: particle(i, 4) * 2,
          }}
        />
      ))}

      {/* Pulsujące światła */}
      <motion.div
        className="absolute left-[10%] top-[15%] z-[1] h-[420px] w-[420px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(var(--accent) / 0.35) 0%, transparent 70%)",
          filter: isMobile ? "blur(30px)" : "blur(50px)",
        }}
        animate={isMobile ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[10%] right-[15%] z-[1] h-[380px] w-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(263 60% 55% / 0.35) 0%, transparent 70%)",
          filter: isMobile ? "blur(30px)" : "blur(50px)",
        }}
        animate={isMobile ? {} : { scale: [1, 1.3, 1], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
      />

      {/* Siatka linii */}
      <div
        className="absolute inset-0 z-[3] hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(255 255 255 / 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(255 255 255 / 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at 40% 40%, black 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 pb-14 pt-32 sm:px-6 sm:pb-16 sm:pt-36 lg:pb-20 lg:pt-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
          {/* Tekst */}
          <div className="hero-fade-up space-y-7 sm:space-y-9">
            <p
              className="hero-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-white/85 backdrop-blur-sm"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
              Strategia marketingowa i doradztwo
            </p>

            <h1 className="text-[2.6rem] font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]">
              <span className="hero-slide-in block" style={{ animationDelay: "0.2s" }}>
                Mniej przypadkowych działań.
              </span>
              <span
                className="hero-slide-in block overflow-visible"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="box-decoration-clone bg-gradient-to-r from-[hsl(270_70%_82%)] via-[hsl(var(--accent))] to-[hsl(290_60%_80%)] bg-clip-text text-transparent">
                  Więcej dobrych decyzji marketingowych.
                </span>
              </span>
            </h1>

            <p
              className="hero-fade-up max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl md:text-2xl"
              style={{ animationDelay: "0.8s" }}
            >
              Pomagam firmom uporządkować marketing, wybrać priorytety i
              przełożyć strategię na działania, które da się optymalnie wdrożyć.
            </p>

            <div
              className="hero-fade-up flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
              style={{ animationDelay: "1s" }}
            >
              <Button
                size="lg"
                onClick={() => setIsContactFormOpen(true)}
                className="group h-auto rounded-full bg-white px-7 py-5 text-base font-semibold text-primary shadow-[0_10px_40px_-10px_hsl(270_60%_70%/0.7)] transition-all duration-300 hover:bg-white/90 sm:px-8 sm:py-6 sm:text-lg"
              >
                Porozmawiajmy o Twojej marce
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-white/65 sm:text-base">
                Bez zobowiązań • 15 min rozmowy
              </p>
            </div>
          </div>

          {/* Portret */}
          <div
            className="hero-scale-in relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[hsl(var(--accent)/0.5)] via-transparent to-[hsl(263_60%_55%/0.5)] blur-2xl"
              aria-hidden="true"
            />
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/15 shadow-2xl"
              whileHover={isMobile ? {} : { scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={heroPortrait}
                alt="Ela Chabko - Digitilio"
                width={768}
                height={960}
                className="h-auto w-full object-cover"
                loading="eager"
                decoding="async"
                {...{ fetchpriority: "high" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(263_45%_13%/0.35)] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Pasek dowodów */}
        <div
          className="hero-fade-up mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:mt-16 lg:mt-20 lg:grid-cols-4"
          style={{ animationDelay: "1.2s" }}
        >
          {proof.map((item) => (
            <div
              key={item.label}
              className="bg-[hsl(263_45%_13%/0.85)] px-5 py-6 backdrop-blur-sm sm:px-7 sm:py-7"
            >
              <span className="block text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {item.value}
              </span>
              <span className="mt-2 block text-sm leading-snug text-white/70 sm:text-base">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ContactFormDialog
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </section>
  );
};
